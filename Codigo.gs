// Código.gs — Trasto Petit Gmail Bot
// Llegeix correus amb assumpte que comenci per "Trasto Petit" → Gemini API → respon
// Suporta modificació de fitxers HTML/CSS/JS via GitHub API
// Memòria de conversa via fils de Gmail (thread = conversa)

var GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
var GITHUB_API = 'https://api.github.com/repos/JordiNinot/taulerarqui/contents';

var SYSTEM_PROMPT = 'Ets el Trasto Petit, l\'assistent personal del Jordi Ninot de Sabadell (Catalunya).\n' +
  'Ajudes amb qualsevol tasca: cerques, fitxers, dades, CSVs, codi, redaccions, preguntes diverses.\n\n' +
  'MEMÒRIA: Tens accés a tot el fil de correu (conversa anterior). Usa el context per donar respostes coherents i continuar el fil. Si l\'usuari fa referència a alguna cosa dita abans, recorda-ho.\n\n' +
  'FITXERS QUE POTS MODIFICAR al web de taulerarqui:\n' +
  '- index.html (pàgina principal)\n' +
  '- app.html (aplicació)\n' +
  '- styles.css (estils globals)\n' +
  '- visor_terrasses_ds.html (visor terrasses)\n\n' +
  'NORMES:\n' +
  '- Contesta SEMPRE en català (o en l\'idioma en que t\'escriguin).\n' +
  '- Via Gmail pots donar respostes detallades i completes.\n' +
  '- Si la petició implica modificar un d\'aquests fitxers, respon ÚNICAMENT amb aquest JSON exacte (sense cap text addicional):\n' +
  '  {"action":"modify","file":"NOM_FITXER","instruction":"INSTRUCCIO_DETALLADA_EN_CATALA"}\n' +
  '- Si cal accés a fitxers del Mac que no siguin els del web, avisa que s\'ha de fer des del Cowork.\n';

var EDITOR_PROMPT = 'Ets un editor de codi expert. L\'usuari et donarà el contingut actual d\'un fitxer i una instrucció de modificació.\n' +
  'Retorna ÚNICAMENT el contingut complet i correcte del fitxer modificat, sense cap explicació, sense markdown, sense cap caràcter fora del codi.';

var ALLOWED_FILES = ['index.html', 'app.html', 'styles.css', 'visor_terrasses_ds.html'];

function checkEmails() {
  var props = PropertiesService.getScriptProperties();
  var apiKey = props.getProperty('GEMINI_API_KEY');
  var githubToken = props.getProperty('GITHUB_TOKEN');

  if (!apiKey) {
    Logger.log('Error: GEMINI_API_KEY no configurada a Script Properties.');
    return;
  }

  var threads = GmailApp.search('is:unread subject:"Trasto Petit" newer_than:1d');
  Logger.log('Fils amb "Trasto Petit": ' + threads.length);

  if (threads.length === 0) {
    Logger.log('Cap email nou amb "Trasto Petit" a l\'assumpte.');
    return;
  }

  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();
    var lastMsg = messages[messages.length - 1];
    var userText = lastMsg.getPlainBody().trim();
    var subject = lastMsg.getSubject();

    // Construir historial de conversa del fil (tots els missatges anteriors)
    // Índex parell = usuari, índex imparell = bot
    var conversationHistory = [];
    for (var j = 0; j < messages.length - 1; j++) {
      var role = (j % 2 === 0) ? 'user' : 'model';
      var msgText = messages[j].getPlainBody().trim();
      // Limitar longitud per no superar el context de Gemini
      if (msgText.length > 3000) msgText = msgText.substring(0, 3000) + '...';
      conversationHistory.push({
        role: role,
        parts: [{ text: msgText }]
      });
    }

    Logger.log('Processant: ' + subject + ' | historial: ' + conversationHistory.length + ' missatges');

    try {
      // Fase 1: classificar intencio amb historial
      var phase1Response = callGeminiWithHistory(apiKey, SYSTEM_PROMPT, conversationHistory, userText, 400);

      // Intentar parsejar com a JSON d'accio
      var parsed = null;
      var jsonMatch = phase1Response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsed = JSON.parse(jsonMatch[0]);
        } catch (e) { /* no es JSON */ }
      }

      var replyText;

      if (parsed && parsed.action === 'modify' && parsed.file && parsed.instruction) {
        if (!githubToken) {
          replyText = 'Error: GITHUB_TOKEN no configurada a Script Properties. Afegeix-la per poder modificar fitxers web.';
        } else if (ALLOWED_FILES.indexOf(parsed.file) === -1) {
          replyText = 'No tinc permisos per modificar "' + parsed.file + '". Fitxers permesos: ' + ALLOWED_FILES.join(', ') + '.';
        } else {
          var filename = parsed.file;
          var instruction = parsed.instruction;
          Logger.log('Modificant fitxer: ' + filename + ' | ' + instruction.substring(0, 80));

          // Llegir fitxer actual de GitHub
          var fileData = getGithubFile(filename, githubToken);

          // Fase 2: Gemini edita el fitxer (sense historial de conversa, és tasca directa)
          var editorPromptFull = EDITOR_PROMPT + '\n\nFITXER: ' + filename + '\nINSTRUCCIO: ' + instruction + '\n\nCONTINGUT ACTUAL:\n' + fileData.content;
          var newContent = callGeminiWithHistory(apiKey, EDITOR_PROMPT, [], editorPromptFull, 8000);

          // Netejar possible markdown de Gemini
          newContent = newContent.replace(/^```[\w]*\n?/, '').replace(/\n?```$/, '').trim();

          // Commitejar a GitHub
          commitGithubFile(filename, newContent, fileData.sha, githubToken);

          replyText = '✅ ' + filename + ' modificat i publicat correctament!\n\n' +
            'Els canvis es desplegaran a Netlify en uns 30 segons.\n\n' +
            'Canvi aplicat: ' + instruction;
        }
      } else {
        replyText = phase1Response;
      }

      // Respondre al fil
      thread.reply(replyText);
      thread.markRead();
      Logger.log('Respost: ' + replyText.substring(0, 100));

    } catch (err) {
      Logger.log('Error processant email: ' + err.message);
      thread.reply('Error: ' + err.message.substring(0, 200) + '. Prova-ho de nou.');
      thread.markRead();
    }
  }
}

function callGeminiWithHistory(apiKey, systemPrompt, history, userMessage, maxTokens) {
  maxTokens = maxTokens || 800;

  var contents = [];
  for (var i = 0; i < history.length; i++) {
    contents.push(history[i]);
  }
  contents.push({ role: 'user', parts: [{ text: userMessage }] });

  var payload = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents: contents,
    generationConfig: { temperature: 0.7, maxOutputTokens: maxTokens, topP: 0.9 }
  };
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  var response = UrlFetchApp.fetch(GEMINI_URL + '?key=' + apiKey, options);
  var code = response.getResponseCode();
  if (code !== 200) {
    throw new Error('Gemini API ' + code + ': ' + response.getContentText().substring(0, 200));
  }
  var data = JSON.parse(response.getContentText());
  return data.candidates[0].content.parts[0].text;
}

function getGithubFile(filename, token) {
  var options = {
    method: 'get',
    headers: {
      'Authorization': 'token ' + token,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Trasto-Petit-Gmail-Bot'
    },
    muteHttpExceptions: true
  };
  var response = UrlFetchApp.fetch(GITHUB_API + '/' + filename, options);
  var code = response.getResponseCode();
  if (code !== 200) {
    throw new Error('GitHub GET ' + filename + ': ' + code + ' ' + response.getContentText().substring(0, 200));
  }
  var data = JSON.parse(response.getContentText());
  var bytes = Utilities.base64Decode(data.content.replace(/\n/g, ''));
  var content = Utilities.newBlob(bytes).getDataAsString();
  return { content: content, sha: data.sha };
}

function commitGithubFile(filename, content, sha, token) {
  var encoded = Utilities.base64Encode(content, Utilities.Charset.UTF_8);
  var payload = {
    message: 'Trasto Petit: modifica ' + filename + ' via Gmail',
    content: encoded,
    sha: sha
  };
  var options = {
    method: 'put',
    contentType: 'application/json',
    headers: {
      'Authorization': 'token ' + token,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Trasto-Petit-Gmail-Bot'
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  var response = UrlFetchApp.fetch(GITHUB_API + '/' + filename, options);
  var code = response.getResponseCode();
  if (code !== 200 && code !== 201) {
    throw new Error('GitHub PUT ' + filename + ': ' + code + ' ' + response.getContentText().substring(0, 200));
  }
  Logger.log('GitHub commit OK: ' + filename);
}

function setupTrigger() {
  // Esborra triggers existents de checkEmails
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'checkEmails') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  // Crea trigger nou cada 5 minuts
  ScriptApp.newTrigger('checkEmails')
    .timeBased()
    .everyMinutes(5)
    .create();
  Logger.log('Trigger configurat: checkEmails cada 5 minuts');
}
