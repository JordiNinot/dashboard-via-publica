// BASE DE DADES D'OBRES ACTIVES (MAPA)
const projectesObra = {
  1: {
    titol: "Pacificació de Balmes (Tram Central)",
    estat: "Actiu - Visita d'obra avui a les 10h",
    constructora: "Construccions Barcelona SL",
    pressupost: "420.000 €",
    finalitzacio: "15 de Setembre, 2026",
    descripcio: "Ampliació de voreres fins a 2,40m, instal·lació de paviment tàctil, carril bici segregat i arbrat d'acompanyament. Reurbanització integral de serveis."
  },
  2: {
    titol: "Renovació de Lloses de la Plaça Major",
    estat: "Urgent - Inspecció de seguretat pendents",
    constructora: "Pedres del Pirineu SA",
    pressupost: "85.000 €",
    finalitzacio: "10 de Juliol, 2026",
    descripcio: "Substitució de 450 m² de paviment de granit esquerdats per trànsit pesat no autoritzat. Reforç de la base de formigó subterrània."
  },
  3: {
    titol: "Cala per Escomesa Elèctrica - Sardenya",
    estat: "Actiu - Control de cala i rasa",
    constructora: "Endesa Distribución (Subcontracta: Elecnor)",
    pressupost: "12.500 €",
    finalitzacio: "30 de Juny, 2026",
    descripcio: "Cala d'urgència de 12x1.5m per reparar una línia de mitjana tensió avariada. Pavimentació asfàltica final a càrrec de l'empresa en 48h."
  },
  4: {
    titol: "Bastida en Façana - Av Corts Catalanes",
    estat: "Actiu - Ocupació façana catalogada",
    constructora: "Restauracions Jordi (Promotor privat)",
    pressupost: "Taxes: 1.080 €",
    finalitzacio: "12 d'Agost, 2026",
    descripcio: "Ocupació de 25 m² de vorera per bastida de restauració de façana d'edifici catalogat. Manteniment de pas lliure de vianants de 1.80m amb túnel protegit."
  }
};

// BASE DE DADES DE NORMATIVES
const normativaDB = [
  {
    id: "poum-1",
    titol: "POUM - Alçades i Alineacions de Via Pública",
    categoria: "poum",
    data: "Aprovació: Gener 2022",
    articles: [
      {
        art: "Art. 45: Alçada reguladora segons carrer",
        text: "L'alçada màxima permesa en eixos connectors de segona categoria és de PB+5 (planta baixa més 5 pisos), equivalent a un màxim de 20,50 metres de cornisa reguladora, mesurats des de la cota mitjana de la vorera.",
        highlight: "Màxim PB+5 o 20,50m en carrers secundaris i connectors."
      },
      {
        art: "Art. 48: Alineacions i voladissos",
        text: "Els elements sortints (balcons, cornises) no podran sobresortir més de 0,80m en carrers de més de 12m d'amplada, ni més de 0,40m en carrers inferiors. L'alçada lliure mínima sobre la vorera serà de 3,00m.",
        highlight: "Voladís màxim 0,80m. Alçada lliure mínima 3,00m."
      }
    ]
  },
  {
    id: "acc-1",
    titol: "Ordenança de Mobilitat i Accessibilitat Urbana",
    categoria: "accessibilitat",
    data: "Aprovació: Octubre 2024",
    articles: [
      {
        art: "Art. 12: Pendents màxims en rampes per a vianants",
        text: "El pendent longitudinal màxim d'una rampa en l'espai públic no superarà el 8% si la longitud del tram és inferior a 10 metres. Per a trams més curts de 3 metres, es permet fins a un 10%. El pendent transversal màxim serà sempre de l'1.5% per evitar lliscaments de cadires de rodes.",
        highlight: "Pendent màxim longitudinal: 8% (fins a 10m) o 10% (fins a 3m). Pendent transversal màxim: 1.5%."
      },
      {
        art: "Art. 14: Amplada lliure de voreres",
        text: "Totes les voreres noves o reurbanitzades han de garantir un itinerari de vianants accessible d'una amplada lliure mínima d'obstacles d'1,80 metres. Excepcionalment, en carrers existents molt estrets, es pot reduir a 1,50m amb punts d'eixamplament cada 10 metres.",
        highlight: "Amplada lliure mínima vorera: 1,80m (cas general) o 1,50m (excepció)."
      }
    ]
  },
  {
    id: "amb-1",
    titol: "Ordenança de Medi Ambient, Sorolls i Runes",
    categoria: "cte",
    data: "Aprovació: Març 2021",
    articles: [
      {
        art: "Art. 8: Horaris de soroll permesos per a obres",
        text: "Els treballs constructius o d'enderroc a la via pública que generin soroll o vibracions només es podran realitzar de dilluns a divendres de 8:00 h a 20:00 h. Els dissabtes es permeten tasques silencioses de 9:00 h a 14:00 h. Queda prohibit qualsevol soroll en festius i diumenges sense autorització expressa del consistori.",
        highlight: "Horaris soroll: Dl-Dv de 8h a 20h. Ds de 9h a 14h (sense maquinària pesant)."
      },
      {
        art: "Art. 15: Gestió de runes de la construcció",
        text: "És obligatori que tota obra a la via pública dipositi les runes en sacs industrials homologats (big-bags) o contenidors metàl·lics identificats. S'ha de retirar el contenidor en un termini màxim de 24 hores un cop estigui ple, o diàriament si està situat en carrers de primera categoria comercial.",
        highlight: "Retirada de contenidor de runes en un màxim de 24h."
      }
    ]
  },
  {
    id: "ocu-1",
    titol: "Ordenança d'Ocupació Temporal de Via Pública",
    categoria: "obres",
    data: "Aprovació: Novembre 2023",
    articles: [
      {
        art: "Art. 22: Protecció de l'arbrat en rases",
        text: "Queda totalment prohibit excavar rases o cales a una distància inferior a 1,50 metres del tronc de qualsevol arbre municipal sense la supervisió directa del departament de Parcs i Jardins. S'han de protegir els troncs amb taulons de fusta si la maquinària opera a menys de 3 metres.",
        highlight: "No cavar a menys de 1,50m del tronc dels arbres municipals."
      },
      {
        art: "Art. 29: Condicions de tanques i bastides",
        text: "Les tanques d'obra han de ser cegues, pintades de color gris homogeni, d'una alçada de 2,00 metres i perfectament anclades. Les bastides han de comptar amb malles anti-pols i il·luminació senyalitzadora de seguretat durant la nit, així com un túnel peatonal lliure si la vorera queda tancada.",
        highlight: "Tanques de 2,00m cegues i bastides amb túnel peatonal i llum nocturna."
      }
    ]
  }
];

// REPOSITORI DE DOCUMENTS DE TREBALL
const fitxersProjecte = [];

// ESTAT LOCAL DE TASQUES KANBAN
let tasquesKanban = [
  { id: "task-101", titol: "Redacció d'informe per a cala a Carrer Sardenya", prioritat: "mitja", estat: "todo" },
  { id: "task-102", titol: "Reunió amb l'associació de veïns de Balmes", prioritat: "alta", estat: "progress" },
  { id: "task-103", titol: "Validació de la rampa de pas de vianants de Balmes", prioritat: "alta", estat: "progress" },
  { id: "task-104", titol: "Signar recepció final d'obra de Plaça dels Àngels", prioritat: "baixa", estat: "done" }
];

// INICIALITZACIÓ
document.addEventListener("DOMContentLoaded", async () => {
  await carregarNucli(); // Carregar el nucli abans d'inicialitzar la calculadora
  initTabs();
  initMapPins();
  initBibliotecaNormativa();
  initCharts();
  initFieldNotes();
  initCalculator();
  initKanban();
  initPomodoro();
  initRepositoriFiles();
  initCopilotSimulator();
});

// 1. SISTEMA DE PESTANYES
function initTabs() {
  const navLinks = document.querySelectorAll(".nav-link");
  const tabPanels = document.querySelectorAll(".tab-panel");
  const sectionTitle = document.getElementById("current-section-title");
  const sectionSubtitle = document.getElementById("current-section-subtitle");
  
  const sectionMeta = {
    "tab-dashboard": {
      title: "Tauler de Control",
      subtitle: "Gestió integrada d'obres, inspeccions i normatives de l'espai públic."
    },
    "tab-normativa": {
      title: "Cercador de Normativa de Via Pública",
      subtitle: "Consulta ràpida de codis tècnics, POUM i ordenances municipals."
    },
    "tab-repositori": {
      title: "Repositori i Hub NotebookLM",
      subtitle: "Gestiona arxius tècnics i sincronitza'ls fàcilment amb les teves llibretes IA."
    },
    "tab-calculadora": {
      title: "Calculadora de Taxes de Via Pública",
      subtitle: "Eina per pre-calcular els drets fiscals d'ocupació de l'espai urbà."
    },
    "tab-kanban": {
      title: "Kanban de Projectes i Inspeccions",
      subtitle: "Organitza el teu flux de treball tècnic setmanal."
    }
  };

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Remove active classes
      navLinks.forEach(l => l.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));
      
      // Add active to current
      link.classList.add("active");
      const tabId = link.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
      
      // Update Titles
      if (sectionMeta[tabId]) {
        sectionTitle.textContent = sectionMeta[tabId].title;
        sectionSubtitle.textContent = sectionMeta[tabId].subtitle;
      }

      // Reinicia el scroll del contingut principal en canviar de pestanya
      // (sense això, si venies desplaçat avall en una pestanya llarga,
      // la nova pestanya es veu buida perquè la vista queda més avall del seu contingut)
      document.querySelector(".main-content").scrollTop = 0;
    });
  });

  // Shortcut a NotebookLM en el Header obre la pestanya del Repositori
  document.getElementById("btn-notebooklm-shortcut").addEventListener("click", () => {
    const repositoriLink = document.querySelector('[data-tab="tab-repositori"]');
    if (repositoriLink) repositoriLink.click();
  });
}

// 2. DETALLS INTERACTIUS DEL MAPA
function initMapPins() {
  const pins = document.querySelectorAll(".map-pin");
  const detailsPanel = document.getElementById("map-details-panel");

  pins.forEach(pin => {
    pin.addEventListener("click", () => {
      // Treure classe activa d'altres pins
      pins.forEach(p => p.classList.remove("selected-pin"));
      pin.classList.add("selected-pin");

      const projectId = pin.getAttribute("data-project");
      const project = projectesObra[projectId];

      if (project) {
        let estatClass = projectId == 2 ? "text-orange" : "text-main";
        detailsPanel.innerHTML = `
          <h4>${project.titol}</h4>
          <p class="info-row"><span>Estat:</span> <strong class="${estatClass}">${project.estat}</strong></p>
          <p class="info-row"><span>Constructora:</span> <strong>${project.constructora}</strong></p>
          <p class="info-row"><span>Pressupost:</span> <strong>${project.pressupost}</strong></p>
          <p class="info-row"><span>Data Fi:</span> <strong>${project.finalitzacio}</strong></p>
          <div style="margin-top:10px; font-size:0.78rem; line-height:1.4; color:var(--text-muted);">
            ${project.descripcio}
          </div>
          <button class="btn btn-outline btn-sm" style="margin-top:12px; width:100%;" onclick="copyProjectDataToClipboard(${projectId})">
            <i data-lucide="copy" style="width:12px; height:12px; display:inline-block; vertical-align:middle; margin-right:4px;"></i> Copiar per a NotebookLM
          </button>
        `;
        // Re-crear icona de Lucide al botó generat
        lucide.createIcons();
      }
    });
  });
}

window.copyProjectDataToClipboard = function(id) {
  const project = projectesObra[id];
  if (!project) return;
  
  const text = `=== INFORME D'OBRA MUNICIPAL ===
Títol: ${project.titol}
Estat Actual: ${project.estat}
Empresa Executora: ${project.constructora}
Pressupost Municipal: ${project.pressupost}
Data límit d'obra: ${project.finalitzacio}
Descripció Tècnica: ${project.descripcio}`;

  navigator.clipboard.writeText(text).then(() => {
    alert("Dades de l'obra copiades! Enganxa-les (Cmd+V / Ctrl+V) a NotebookLM.");
  });
};

// 3. REPOSITORI DE NORMATIVA
function initBibliotecaNormativa() {
  // ── Constants ───────────────────────────────────────────────
  const TOPICS_KEY = "norm_biblioteca_temes";
  const COLORS = ["#7c3aed","#2563eb","#059669","#d97706","#dc2626","#0891b2","#7c3aed","#db2777"];

  let topics = [];
  let activeDoc = null;
  let activeDocKey = null;

  function loadTopics() {
    try { topics = JSON.parse(localStorage.getItem(TOPICS_KEY) || "[]"); } catch { topics = []; }
  }
  function saveTopics() {
    localStorage.setItem(TOPICS_KEY, JSON.stringify(topics));
  }
  function genId() { return "t_" + Math.random().toString(36).slice(2,10); }

  function ensureDefaults() {
    if (topics.length === 0) {
      topics.push({
        id: genId(),
        nom: "Normativa General",
        color: COLORS[0],
        open: true,
        docs: []
      });
      saveTopics();
    }
  }

  // ── Render ────────────────────────────────────────────────────
  function renderTopics() {
    const container = document.getElementById("norm-topics-list");
    if (!container) return;
    const q = (document.getElementById("norm-search")?.value || "").toLowerCase();
    container.innerHTML = "";

    topics.forEach(topic => {
      const filteredDocs = q
        ? topic.docs.filter(d => d.nom.toLowerCase().includes(q))
        : topic.docs;
      if (q && filteredDocs.length === 0) return;

      const div = document.createElement("div");
      div.className = "norm-topic" + (topic.open ? " open" : "");
      div.dataset.topicId = topic.id;

      div.innerHTML = `
        <div class="norm-topic-header">
          <span class="norm-topic-color" style="background:${topic.color}"></span>
          <span class="norm-topic-name">${topic.nom}</span>
          <span class="norm-topic-count">${topic.docs.length}</span>
          <div class="norm-topic-actions">
            <button class="norm-topic-menu-btn" title="Opcions"><i data-lucide="more-horizontal"></i></button>
          </div>
          <i data-lucide="chevron-right" class="norm-topic-chevron"></i>
        </div>
        <div class="norm-topic-docs">
          ${filteredDocs.map(doc => `
            <div class="norm-doc-item${activeDocKey === doc.key ? " active" : ""}" data-doc-key="${doc.key}" data-topic-id="${topic.id}">
              <i data-lucide="file-text"></i>
              <span class="norm-doc-item-name" title="${doc.nom}">${doc.nom}</span>
              <button class="norm-doc-item-import" data-import-key="${doc.key}" title="Importar articles (JSON)"><i data-lucide="upload"></i></button>
              <button class="norm-doc-item-del" data-del-key="${doc.key}" data-del-topic="${topic.id}" title="Eliminar"><i data-lucide="x"></i></button>
            </div>
          `).join("")}
          <button class="norm-add-doc-btn" data-topic-id="${topic.id}">
            <i data-lucide="plus"></i> Afegir document
          </button>
        </div>`;

      container.appendChild(div);
    });

    lucide.createIcons();

    // Events: topic toggle
    container.querySelectorAll(".norm-topic-header").forEach(h => {
      h.addEventListener("click", e => {
        if (e.target.closest(".norm-topic-menu-btn") || e.target.closest(".norm-topic-actions")) return;
        const tid = h.closest(".norm-topic").dataset.topicId;
        const t = topics.find(x => x.id === tid);
        if (t) { t.open = !t.open; saveTopics(); renderTopics(); }
      });
    });

    // Events: topic menu
    container.querySelectorAll(".norm-topic-menu-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const tid = btn.closest(".norm-topic").dataset.topicId;
        showTopicMenu(e, topics.find(x => x.id === tid));
      });
    });

    // Events: doc click
    container.querySelectorAll(".norm-doc-item").forEach(item => {
      item.addEventListener("click", e => {
        if (e.target.closest(".norm-doc-item-del")) return;
        const key = item.dataset.docKey;
        const tid = item.dataset.topicId;
        const t = topics.find(x => x.id === tid);
        if (t) {
          const doc = t.docs.find(d => d.key === key);
          if (doc) openDoc(doc);
        }
      });
    });

    // Events: import JSON articles
    container.querySelectorAll(".norm-doc-item-import").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        importArticlesJson(btn.dataset.importKey, btn);
      });
    });

    // Events: delete doc
    container.querySelectorAll(".norm-doc-item-del").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const key = btn.dataset.delKey;
        const tid = btn.dataset.delTopic;
        if (confirm("Eliminar document?")) removeDoc(tid, key);
      });
    });

    // Events: add doc
    container.querySelectorAll(".norm-add-doc-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        showAddDocDialog(btn.dataset.topicId);
      });
    });
  }

  // ── Topic menu ────────────────────────────────────────────────
  function showTopicMenu(e, topic) {
    document.querySelectorAll(".norm-topic-dropdown").forEach(m => m.remove());
    const menu = document.createElement("div");
    menu.className = "norm-topic-dropdown";
    menu.innerHTML = `
      <button id="norm-menu-rename"><i data-lucide="pencil"></i> Reanomenar</button>
      <button id="norm-menu-delete" style="color:#f87171"><i data-lucide="trash-2"></i> Eliminar tema</button>`;
    menu.style.left = e.clientX + "px";
    menu.style.top  = e.clientY + "px";
    document.body.appendChild(menu);
    lucide.createIcons();

    menu.querySelector("#norm-menu-rename").onclick = () => {
      const nou = prompt("Nou nom:", topic.nom);
      if (nou && nou.trim()) { topic.nom = nou.trim(); saveTopics(); renderTopics(); }
      menu.remove();
    };
    menu.querySelector("#norm-menu-delete").onclick = () => {
      if (confirm(`Eliminar tema "${topic.nom}" i tots els seus documents?`)) {
        topics = topics.filter(t => t.id !== topic.id);
        saveTopics();
        if (activeDoc && topic.docs.find(d => d.key === activeDocKey)) {
          activeDoc = null; activeDocKey = null; showEmpty();
        }
        renderTopics();
      }
      menu.remove();
    };
    setTimeout(() => document.addEventListener("click", () => menu.remove(), { once: true }), 0);
  }

  // ── Add document dialog ───────────────────────────────────────
  function showAddDocDialog(tid) {
    const topic = topics.find(t => t.id === tid);
    if (!topic) return;
    const url = prompt("URL del document (https://...):");
    if (!url || !url.trim()) return;
    const urlTrim = url.trim();
    if (!urlTrim.startsWith("http")) { alert("Ha de ser una URL vàlida (https://...)"); return; }
    const nom = prompt("Nom del document:", urlTrim.split("/").pop().split("?")[0] || "Document");
    if (!nom) return;
    const key = "ndoc_" + Date.now().toString(36);
    topic.docs.push({ key, nom: nom.trim(), url: urlTrim });
    saveTopics();
    renderTopics();
  }

  function removeDoc(tid, key) {
    const t = topics.find(x => x.id === tid);
    if (!t) return;
    t.docs = t.docs.filter(d => d.key !== key);
    saveTopics();
    if (activeDocKey === key) { activeDoc = null; activeDocKey = null; showEmpty(); }
    renderTopics();
  }

  // ── Document viewer ───────────────────────────────────────────
  let currentView = "articles"; // "articles" | "pdf"

  function showEmpty() {
    const empty = document.getElementById("norm-viewer-empty");
    const viewer = document.getElementById("norm-doc-viewer");
    if (empty) empty.style.display = "";
    if (viewer) viewer.style.display = "none";
  }

  function setView(view) {
    currentView = view;
    const vArticles = document.getElementById("norm-view-articles");
    const vPdf      = document.getElementById("norm-view-pdf");
    const btnA      = document.getElementById("norm-btn-view-articles");
    const btnP      = document.getElementById("norm-btn-view-pdf");
    if (view === "articles") {
      if (vArticles) vArticles.style.display = "";
      if (vPdf)      vPdf.style.display      = "none";
      btnA?.classList.add("active"); btnP?.classList.remove("active");
    } else {
      if (vArticles) vArticles.style.display = "none";
      if (vPdf)      vPdf.style.display      = "";
      btnP?.classList.add("active"); btnA?.classList.remove("active");
    }
  }

  function openDoc(doc) {
    activeDoc = doc;
    activeDocKey = doc.key;
    renderTopics();

    const empty  = document.getElementById("norm-viewer-empty");
    const viewer = document.getElementById("norm-doc-viewer");
    const nameEl = document.getElementById("norm-doc-name");
    const openEl = document.getElementById("norm-doc-open");
    const embed  = document.getElementById("norm-doc-embed");

    if (empty)  empty.style.display  = "none";
    if (viewer) viewer.style.display = "flex";

    if (nameEl) nameEl.textContent = doc.nom;
    if (openEl) { openEl.href = doc.url; openEl.innerHTML = '<i data-lucide="external-link"></i> Obrir'; }

    // PDF view
    if (embed) {
      const isPdf = /\.pdf(\?|$)/i.test(doc.url);
      embed.innerHTML = isPdf
        ? `<iframe src="${doc.url}" allowfullscreen></iframe>`
        : `<div class="norm-ext-placeholder"><i data-lucide="globe"></i><p>${doc.nom}</p><a href="${doc.url}" target="_blank" rel="noopener">${doc.url}</a></div>`;
    }

    setView("articles");
    loadArticles(doc);
    lucide.createIcons();
  }

  // ── Extracció i renderització d'articles ─────────────────────
  const ART_CACHE_PREFIX    = "norm_art_";
  const ART_CA_CACHE_PREFIX = "norm_art_ca_";
  let artLang = "orig"; // "orig" | "cat"

  function blobKeyFromUrl(url) {
    try {
      const u = new URL(url, window.location.origin);
      if (u.pathname.includes("/api/blobs")) return u.searchParams.get("key");
    } catch {}
    return null;
  }

  function importArticlesJson(docKey, triggerBtn) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const data = JSON.parse(ev.target.result);
          if (!Array.isArray(data) || data.length === 0) throw new Error("Ha de ser un array no buit");
          if (!("text" in data[0])) throw new Error("Cada element ha de tenir almenys el camp 'text'");
          localStorage.setItem(ART_CACHE_PREFIX + docKey, JSON.stringify(data));
          if (activeDocKey === docKey) renderArticleCards(data, docKey);
          if (triggerBtn) {
            const orig = triggerBtn.innerHTML;
            triggerBtn.innerHTML = '<i data-lucide="check"></i>';
            lucide.createIcons();
            setTimeout(() => { triggerBtn.innerHTML = orig; lucide.createIcons(); }, 2000);
          }
        } catch (err) {
          alert("Error llegint el JSON: " + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  async function loadArticles(doc) {
    const list = document.getElementById("norm-articles-list");
    if (!list) return;

    // 1) Cache local (localStorage)
    const cacheKey = ART_CACHE_PREFIX + activeDocKey;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try { renderArticleCards(JSON.parse(cached), activeDocKey); return; } catch {}
    }

    const blobKey = blobKeyFromUrl(doc.url);
    if (!blobKey) {
      list.innerHTML = `<div class="norm-articles-empty">No és un document del repositori. <a href="${doc.url}" target="_blank">Obrir directament</a></div>`;
      return;
    }

    // 2) Comprova si ja hi ha extracció a Blobs (d'una sessió anterior)
    list.innerHTML = `<div class="norm-articles-loading"><i data-lucide="loader-2" class="spin"></i><span>Comprovant…</span></div>`;
    lucide.createIcons();
    try {
      const checkResp = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ extractStatus: true, docKeys: [blobKey] })
      });
      const checkData = await checkResp.json();
      if (checkData.status === "done" && checkData.articles?.length > 0) {
        localStorage.setItem(cacheKey, JSON.stringify(checkData.articles));
        renderArticleCards(checkData.articles, activeDocKey);
        return;
      }
      if (checkData.status === "processing") {
        _startExtractPolling(blobKey, cacheKey, doc.url);
        return;
      }
    } catch { }

    // 3) Inicia l'extracció en background (retorna 202 immediatament)
    list.innerHTML = `<div class="norm-articles-loading"><i data-lucide="loader-2" class="spin"></i><span>Extraient articles… (pot trigar 1 minut)</span></div>`;
    lucide.createIcons();
    try {
      await fetch("/.netlify/functions/extract-background", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docKey: blobKey })
      });
    } catch (err) {
      list.innerHTML = `<div class="norm-articles-empty" style="color:var(--accent-red,#ef4444)">Error: ${err.message}</div>`;
      return;
    }
    _startExtractPolling(blobKey, cacheKey, doc.url);
  }

  function _startExtractPolling(blobKey, cacheKey, docUrl) {
    const list = document.getElementById("norm-articles-list");
    let elapsed = 0;
    const MAX_WAIT = 180; // 3 minuts
    const INTERVAL = 5;
    const timer = setInterval(async () => {
      elapsed += INTERVAL;
      try {
        const resp = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ extractStatus: true, docKeys: [blobKey] })
        });
        const data = await resp.json();
        if (data.status === "done" && data.articles?.length > 0) {
          clearInterval(timer);
          localStorage.setItem(cacheKey, JSON.stringify(data.articles));
          renderArticleCards(data.articles, activeDocKey);
        } else if (data.status === "error") {
          clearInterval(timer);
          const el = document.getElementById("norm-articles-list");
          if (el) el.innerHTML = `<div class="norm-articles-empty">Error: ${data.message || "desconegut"}. <a href="${docUrl}" target="_blank">Veure PDF</a></div>`;
        } else if (elapsed >= MAX_WAIT) {
          clearInterval(timer);
          const el = document.getElementById("norm-articles-list");
          if (el) el.innerHTML = `<div class="norm-articles-empty">Temps esgotat. <a href="${docUrl}" target="_blank">Veure PDF</a></div>`;
        } else {
          // Actualitza comptador
          const el = document.getElementById("norm-articles-list");
          const span = el?.querySelector("span");
          if (span) span.textContent = `Extraient articles… (${elapsed}s)`;
        }
      } catch { /* reintenta */ }
    }, INTERVAL * 1000);
  }

  // ── Versió Catalana ───────────────────────────────────────────
  async function loadArticlesCA(doc) {
    const list = document.getElementById("norm-articles-list");
    if (!list) return;

    const blobKey = blobKeyFromUrl(doc.url);
    if (!blobKey) return;

    // 1) Cache local CA
    const caCacheKey = ART_CA_CACHE_PREFIX + activeDocKey;
    const caCached = localStorage.getItem(caCacheKey);
    if (caCached) {
      try { renderArticleCards(JSON.parse(caCached), activeDocKey); return; } catch {}
    }

    // 2) Comprova Blobs
    list.innerHTML = `<div class="norm-articles-loading"><i data-lucide="loader-2" class="spin"></i><span>Comprovant versió catalana…</span></div>`;
    lucide.createIcons();
    try {
      const checkResp = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ translateStatus: true, docKeys: [blobKey] })
      });
      const checkData = await checkResp.json();
      if (checkData.status === "done" && checkData.articles?.length > 0) {
        localStorage.setItem(caCacheKey, JSON.stringify(checkData.articles));
        renderArticleCards(checkData.articles, activeDocKey);
        return;
      }
      if (checkData.status === "processing") {
        _startTranslatePolling(blobKey, caCacheKey, doc.url);
        return;
      }
    } catch {}

    // 3) Inicia traducció en background
    list.innerHTML = `<div class="norm-articles-loading"><i data-lucide="loader-2" class="spin"></i><span>Traduint al català… (pot trigar 1-2 minuts)</span></div>`;
    lucide.createIcons();
    try {
      await fetch("/.netlify/functions/translate-background", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docKey: blobKey })
      });
    } catch (err) {
      list.innerHTML = `<div class="norm-articles-empty" style="color:var(--accent-red,#ef4444)">Error: ${err.message}</div>`;
      return;
    }
    _startTranslatePolling(blobKey, caCacheKey, doc.url);
  }

  function _startTranslatePolling(blobKey, caCacheKey, docUrl) {
    const list = document.getElementById("norm-articles-list");
    let elapsed = 0;
    const MAX_WAIT = 600;
    const INTERVAL = 5;
    const timer = setInterval(async () => {
      elapsed += INTERVAL;
      try {
        const resp = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ translateStatus: true, docKeys: [blobKey] })
        });
        const data = await resp.json();
        if (data.status === "done" && data.articles?.length > 0) {
          clearInterval(timer);
          localStorage.setItem(caCacheKey, JSON.stringify(data.articles));
          renderArticleCards(data.articles, activeDocKey);
        } else if (data.status === "error") {
          clearInterval(timer);
          const el = document.getElementById("norm-articles-list");
          if (el) el.innerHTML = `<div class="norm-articles-empty">Error traducció: ${data.message || "desconegut"}</div>`;
        } else if (elapsed >= MAX_WAIT) {
          clearInterval(timer);
          const el = document.getElementById("norm-articles-list");
          if (el) el.innerHTML = `<div class="norm-articles-empty">Temps de traducció esgotat.</div>`;
        } else {
          const el = document.getElementById("norm-articles-list");
          const span = el?.querySelector("span");
          if (span) span.textContent = `Traduint al català… (${elapsed}s)`;
        }
      } catch {}
    }, INTERVAL * 1000);
  }

  function renderArticleCards(articles, docKey) {
    const list = document.getElementById("norm-articles-list");
    if (!list) return;

    // ── Toolbar (cercador + accions) ──────────────────────────────
    const view = document.getElementById("norm-view-articles");
    let toolbar = document.getElementById("norm-art-toolbar");
    if (toolbar) toolbar.remove();
    toolbar = document.createElement("div");
    toolbar.id = "norm-art-toolbar";
    toolbar.className = "norm-art-toolbar";
    toolbar.innerHTML = `
      <span class="norm-art-count">
        <i data-lucide="layers"></i>
        <span id="norm-art-count-n">${articles.length}</span> articles
      </span>
      <div class="norm-art-toolbar-search">
        <i data-lucide="search"></i>
        <input type="text" id="norm-art-search" placeholder="Cerca en articles…" autocomplete="off">
      </div>
      <div class="norm-lang-toggle">
        <button id="norm-lang-orig" class="norm-lang-btn${artLang === "orig" ? " active" : ""}" data-lang="orig" title="Versió original">ES</button>
        <button id="norm-lang-cat"  class="norm-lang-btn${artLang === "cat"  ? " active" : ""}" data-lang="cat"  title="Versió en català">CA</button>
      </div>
      <div class="norm-art-toolbar-actions">
        <button id="norm-art-expand-all" class="norm-art-tb-btn" title="Expandir tots">
          <i data-lucide="chevrons-down"></i><span>Tots</span>
        </button>
        <button id="norm-art-collapse-all" class="norm-art-tb-btn" title="Col·lapsar tots">
          <i data-lucide="chevrons-up"></i><span>Cap</span>
        </button>
      </div>`;
    if (view) view.insertBefore(toolbar, list);

    // ── Lang toggle listeners ─────────────────────────────────────
    toolbar.querySelector("#norm-lang-orig")?.addEventListener("click", () => {
      artLang = "orig";
      toolbar.querySelector("#norm-lang-orig").classList.add("active");
      toolbar.querySelector("#norm-lang-cat").classList.remove("active");
      const cacheKey = ART_CACHE_PREFIX + activeDocKey;
      const origCached = localStorage.getItem(cacheKey);
      if (origCached) { try { renderArticleCards(JSON.parse(origCached), activeDocKey); return; } catch {} }
      if (activeDoc) loadArticles(activeDoc);
    });
    toolbar.querySelector("#norm-lang-cat")?.addEventListener("click", () => {
      artLang = "cat";
      toolbar.querySelector("#norm-lang-cat").classList.add("active");
      toolbar.querySelector("#norm-lang-orig").classList.remove("active");
      if (activeDoc) loadArticlesCA(activeDoc);
    });

    // ── Cards ─────────────────────────────────────────────────────
    list.innerHTML = "";

    articles.forEach((art, idx) => {
      const artId = `${docKey}_${idx}`;
      const comments = getArtComments(artId);
      const hasComments = comments.length > 0;
      const card = document.createElement("div");
      card.className = "norm-art-card";
      card.dataset.idx = String(idx);
      card.innerHTML = `
        <div class="norm-art-header open" data-art-id="${artId}">
          <span class="norm-art-num">${art.num || `§${idx+1}`}</span>
          <span class="norm-art-title">${art.title || ""}</span>
          <span class="norm-art-comment-badge" id="badge-${artId}">${hasComments ? `<i data-lucide="message-square"></i>${comments.length}` : ""}</span>
          <button class="norm-art-copy-btn" data-art-idx="${idx}" title="Copiar article al portapapers" onclick="event.stopPropagation()">
            <i data-lucide="copy"></i>
          </button>
          <i data-lucide="chevron-down" class="norm-art-chevron"></i>
        </div>
        <div class="norm-art-body" id="body-${artId}">
          <div class="norm-art-text">${(art.text || "").replace(/\n/g, "<br>")}</div>
          <div class="norm-art-comments">
            <button class="norm-art-com-toggle" data-art-id="${artId}">
              <i data-lucide="message-square"></i>
              <span>${hasComments ? `${comments.length} comentari${comments.length !== 1 ? "s" : ""}` : "Afegir comentari"}</span>
              <i data-lucide="chevron-down" class="norm-art-com-chevron"></i>
            </button>
            <div class="norm-art-com-panel" id="companel-${artId}" style="display:${hasComments ? "" : "none"}">
              <div class="norm-art-com-list" id="comlist-${artId}"></div>
              <div class="norm-art-com-input-row">
                <textarea class="norm-art-com-input" placeholder="Escriu un comentari sobre aquest article…" rows="2" data-art-id="${artId}"></textarea>
                <button class="norm-art-com-send btn-purple" data-art-id="${artId}" title="Enviar comentari">
                  <i data-lucide="send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>`;
      list.appendChild(card);
      if (hasComments) renderArtComments(artId);
    });

    lucide.createIcons();

    // ── Toggle card (cap de la galeta) ───────────────────────────
    list.querySelectorAll(".norm-art-header").forEach(h => {
      h.addEventListener("click", () => {
        const artId = h.dataset.artId;
        const body = document.getElementById(`body-${artId}`);
        const isOpen = body.style.display !== "none";
        body.style.display = isOpen ? "none" : "";
        h.classList.toggle("open", !isOpen);
        lucide.createIcons();
      });
    });

    // ── Toggle panell comentaris ──────────────────────────────────
    list.querySelectorAll(".norm-art-com-toggle").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const artId = btn.dataset.artId;
        const panel = document.getElementById(`companel-${artId}`);
        if (!panel) return;
        const isOpen = panel.style.display !== "none";
        panel.style.display = isOpen ? "none" : "";
        btn.querySelector(".norm-art-com-chevron").style.transform = isOpen ? "" : "rotate(180deg)";
        if (!isOpen) renderArtComments(artId);
      });
    });

    // ── Copiar article al portapapers ─────────────────────────────
    list.querySelectorAll(".norm-art-copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.artIdx);
        const art = articles[idx];
        if (!art) return;
        const text = `${art.num || ""} ${art.title ? art.title : ""}\n\n${art.text || ""}`.trim();
        navigator.clipboard.writeText(text).then(() => {
          btn.innerHTML = '<i data-lucide="check"></i>';
          btn.classList.add("copied");
          lucide.createIcons();
          setTimeout(() => {
            btn.innerHTML = '<i data-lucide="copy"></i>';
            btn.classList.remove("copied");
            lucide.createIcons();
          }, 2000);
        }).catch(() => {
          // Fallback per a navegadors sense clipboard API
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        });
      });
    });

    // ── Enviar comentari ──────────────────────────────────────────
    list.querySelectorAll(".norm-art-com-send").forEach(btn => {
      btn.addEventListener("click", () => {
        const artId = btn.dataset.artId;
        const textarea = list.querySelector(`.norm-art-com-input[data-art-id="${artId}"]`);
        if (!textarea || !textarea.value.trim()) return;
        const all = getArtComments(artId);
        all.push({
          text: textarea.value.trim(),
          date: new Date().toLocaleString("ca-ES", { day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit" })
        });
        saveArtComments(artId, all);
        textarea.value = "";
        renderArtComments(artId);
        const badge = document.getElementById(`badge-${artId}`);
        if (badge) { badge.innerHTML = `<i data-lucide="message-square"></i>${all.length}`; lucide.createIcons(); }
        const toggleBtn = list.querySelector(`.norm-art-com-toggle[data-art-id="${artId}"] span`);
        if (toggleBtn) toggleBtn.textContent = `${all.length} comentari${all.length !== 1 ? "s" : ""}`;
      });
    });

    // Enter per enviar (Shift+Enter per nova línia)
    list.querySelectorAll(".norm-art-com-input").forEach(ta => {
      ta.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          list.querySelector(`.norm-art-com-send[data-art-id="${ta.dataset.artId}"]`)?.click();
        }
      });
    });

    // ── Toolbar: expandir/col·lapsar tots ────────────────────────
    document.getElementById("norm-art-expand-all")?.addEventListener("click", () => {
      list.querySelectorAll(".norm-art-body").forEach(b => b.style.display = "");
      list.querySelectorAll(".norm-art-header").forEach(h => h.classList.add("open"));
      lucide.createIcons();
    });
    document.getElementById("norm-art-collapse-all")?.addEventListener("click", () => {
      list.querySelectorAll(".norm-art-body").forEach(b => b.style.display = "none");
      list.querySelectorAll(".norm-art-header").forEach(h => h.classList.remove("open"));
      lucide.createIcons();
    });

    // ── Toolbar: cerca ────────────────────────────────────────────
    document.getElementById("norm-art-search")?.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      let visible = 0;
      list.querySelectorAll(".norm-art-card").forEach(card => {
        const idx = parseInt(card.dataset.idx);
        const art = articles[idx];
        if (!art) return;
        const match = !q
          || (art.num || "").toLowerCase().includes(q)
          || (art.title || "").toLowerCase().includes(q)
          || (art.text || "").toLowerCase().includes(q);
        card.style.display = match ? "" : "none";
        if (match) visible++;
        // Auto-expandir les galetes coincidents
        if (match && q) {
          const artId = `${docKey}_${idx}`;
          const body = document.getElementById(`body-${artId}`);
          const header = card.querySelector(".norm-art-header");
          if (body) body.style.display = "";
          if (header) header.classList.add("open");
        }
      });
      const countEl = document.getElementById("norm-art-count-n");
      if (countEl) countEl.textContent = q ? `${visible}/${articles.length}` : String(articles.length);
      lucide.createIcons();
    });
  }

  function getArtComments(artId) {
    try { return JSON.parse(localStorage.getItem("norm_artcom_" + artId) || "[]"); } catch { return []; }
  }
  function saveArtComments(artId, all) {
    localStorage.setItem("norm_artcom_" + artId, JSON.stringify(all));
  }
  function renderArtComments(artId) {
    const listEl = document.getElementById(`comlist-${artId}`);
    if (!listEl) return;
    const all = getArtComments(artId);
    listEl.innerHTML = all.length === 0
      ? `<span class="norm-art-com-empty">Sense comentaris encara</span>`
      : all.map(c => `<div class="norm-art-com-item"><div class="norm-art-com-date">${c.date}</div><div class="norm-art-com-text">${c.text}</div></div>`).join("");
  }

  // ── Sincronitza tema "Via Pública" des de Netlify Blobs ───────
  async function syncViaPública() {
    try {
      const res = await fetch(`${BLOBS_API}?action=list`);
      if (!res.ok) return;
      const blobs = await res.json();
      if (!Array.isArray(blobs) || blobs.length === 0) return;

      let vpTopic = topics.find(t => t.nom === "Via Pública");
      if (!vpTopic) {
        vpTopic = { id: genId(), nom: "Via Pública", color: COLORS[1], open: true, docs: [] };
        topics.unshift(vpTopic);
      }

      let changed = false;
      blobs.forEach(blob => {
        const url = `${BLOBS_API}?action=get&key=${encodeURIComponent(blob.nom)}`;
        if (!vpTopic.docs.find(d => d.nom === blob.nom)) {
          vpTopic.docs.push({ key: "vp_" + blob.nom.replace(/[^a-zA-Z0-9._-]/g, "_"), nom: blob.nom, url });
          changed = true;
        }
      });

      if (changed) { saveTopics(); renderTopics(); }
    } catch (e) { /* silent */ }
  }

  // ── Init ──────────────────────────────────────────────────────
  function init() {
    loadTopics();
    ensureDefaults();
    renderTopics();
    showEmpty();
    syncViaPública();

    // "Nou tema" button
    const btnAddTopic = document.getElementById("norm-btn-add-topic");
    if (btnAddTopic) {
      btnAddTopic.addEventListener("click", () => {
        const nom = prompt("Nom del nou tema:");
        if (!nom || !nom.trim()) return;
        topics.push({
          id: genId(),
          nom: nom.trim(),
          color: COLORS[topics.length % COLORS.length],
          open: true,
          docs: []
        });
        saveTopics();
        renderTopics();
      });
    }

    // Search
    const searchEl = document.getElementById("norm-search");
    if (searchEl) searchEl.addEventListener("input", renderTopics);

    // View toggle: Articles ↔ PDF
    const btnViewArticles = document.getElementById("norm-btn-view-articles");
    const btnViewPdf      = document.getElementById("norm-btn-view-pdf");
    if (btnViewArticles) btnViewArticles.addEventListener("click", () => setView("articles"));
    if (btnViewPdf)      btnViewPdf.addEventListener("click",      () => setView("pdf"));
  }

  init();
}
function initCharts() {
  const ctx = document.getElementById('timeChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Inspecció d'Obres (Camp)", "Redacció de Projectes (Oficina)", "Calculadora de Taxes", "Atenció Ciutadana / Reunions"],
      datasets: [{
        data: [40, 25, 15, 20],
        backgroundColor: [
          '#f97316', // Taronja Seguretat
          '#3b82f6', // Blau Blueprint
          '#a855f7', // Púrpura
          '#10b981'  // Verd
        ],
        borderWidth: 1,
        borderColor: '#1e2942'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#94a3b8',
            font: {
              family: 'Outfit',
              size: 11
            }
          }
        }
      }
    }
  });
}

// 5. BLOC DE NOTES PERSISTENTS (LOCALSTORAGE)
function initFieldNotes() {
  const textarea = document.getElementById("field-notes");
  const copyBtn = document.getElementById("btn-copy-notes-notebooklm");
  const saveStatus = document.getElementById("save-status");

  // Load from localStorage
  const savedNotes = localStorage.getItem("via_publica_field_notes");
  if (savedNotes) {
    textarea.value = savedNotes;
  }

  // Save to localStorage on input
  textarea.addEventListener("input", () => {
    localStorage.setItem("via_publica_field_notes", textarea.value);
    saveStatus.innerHTML = `<i data-lucide="cloud-lightning"></i> Guardat localment`;
    lucide.createIcons();
  });

  // Copy to clipboard formatted
  copyBtn.addEventListener("click", () => {
    const text = textarea.value.trim();
    if (!text) {
      alert("Escriu alguna nota primer per poder copiar-la.");
      return;
    }

    const formattedText = `=== ANOTACIONS DE CAMP TÈCNIC DE VIA PÚBLICA ===
Data de registre: ${new Date().toLocaleDateString('ca-ES')}
Observacions de camp:
"${text}"`;

    navigator.clipboard.writeText(formattedText).then(() => {
      alert("Anotacions copiades! A punt per ser utilitzades com a font a NotebookLM.");
    });
  });
}

// ============================================================
// NUCLI: Base de dades oficial de totes les adreces postals de Sabadell
// Font: OpenData Ajuntament de Sabadell (WFS geoserver.ajsabadell.cat)
// Enriquit amb: categoria fiscal (Ord. 4.5), barri, districte, secció censal INE,
// entitat, nucli, sector.
// Fitxer índex: /data/nucli_index.json (generat de adreces_sabadell_enriched.csv)
// ============================================================
let _nucli = null;        // {CODVIA: {nom, cat, numeros[]}}
let _nucliPerNom = null;  // {nomNormalitzat: {codvia, nom, cat, numeros[]}}

function _normalitzarNucli(nom) {
  return (nom || "").toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ").trim();
}

async function carregarNucli() {
  if (_nucli) return _nucli;
  try {
    const resp = await fetch("/data/nucli_index.json");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    _nucli = data.carrers;
    _nucliPerNom = {};
    for (const [codvia, entry] of Object.entries(_nucli)) {
      const nomNorm = _normalitzarNucli(entry.nom);
      _nucliPerNom[nomNorm] = { codvia, ...entry };
    }
    console.log(`[nucli] Carregat: ${Object.keys(_nucli).length} carrers, ${data.total_adreces} adreces`);
    return _nucli;
  } catch (e) {
    console.warn("[nucli] No s'ha pogut carregar:", e.message);
    return null;
  }
}

// Cerca un carrer al nucli per nom (normalitzat, amb variants de prefix)
function buscarCarrerNucli(nomCarrer) {
  if (!_nucliPerNom || !nomCarrer) return null;
  const norm = _normalitzarNucli(nomCarrer);
  if (!norm) return null;
  // Cerca directa
  if (_nucliPerNom[norm]) return _nucliPerNom[norm];
  // Cerca eliminant prefixos de tipus de via
  const PREFIXOS_VIA = [
    "carrer de ", "carrer d'", "carrer del ", "carrer dels ", "carrer ",
    "avinguda de ", "avinguda d'", "avinguda del ", "avinguda ",
    "passeig de ", "passatge de ", "rambla de ", "rambla ",
    "placa de ", "placa ", "baixada de ", "ronda de ", "carretera de ",
    "c. de ", "c. d'", "av. de ", "av. d'", "pg. de ", "ptge. de ",
    "pl. de ", "rbla. ", "ctra. de ", "cam. de ", "cami de "
  ];
  const normSensePrefixe = PREFIXOS_VIA.reduce((s, p) => s.startsWith(p) ? s.slice(p.length) : s, norm);
  // Cerca per nom sense prefixe
  for (const [k, v] of Object.entries(_nucliPerNom)) {
    const kSense = PREFIXOS_VIA.reduce((s, p) => s.startsWith(p) ? s.slice(p.length) : s, k);
    if (kSense === normSensePrefixe) return v;
  }
  // Cerca parcial (com a recurs)
  for (const [k, v] of Object.entries(_nucliPerNom)) {
    if (k.includes(norm) || norm.includes(k)) return v;
  }
  return null;
}

// Valida que una adreça (carrer + número) existeixi al nucli
// Retorna { valid, carrer, reason }
function validarAdrecaNucli(nomCarrer, numPortal) {
  const nomTrim = (nomCarrer || "").trim();
  const numTrim = String(numPortal || "").trim();
  if (!_nucliPerNom) return { valid: true, carregant: true }; // nucli no carregat, passa
  if (!nomTrim) return { valid: true };
  const carrer = buscarCarrerNucli(nomTrim);
  if (!carrer) return { valid: false, reason: `"${nomTrim}" no és un carrer de Sabadell` };
  if (!numTrim) return { valid: true, carrer };
  if (carrer.numeros.includes(numTrim)) return { valid: true, carrer };
  // Acceptem números amb lletra (25A, 10B...) si el número base existeix
  const numBase = numTrim.replace(/[A-Za-z]+$/, "");
  if (numBase && carrer.numeros.some(n => n === numBase || n.startsWith(numBase))) {
    return { valid: true, carrer };
  }
  return { valid: false, reason: `El núm. ${numTrim} no existeix a ${carrer.nom}` };
}

// BASE DE DADES DE CARRERS I CATEGORIES FISCALS MUNICIPALS
// Font oficial: Ordenança Fiscal 2.2 (IAE) de l'Ajuntament de Sabadell, "Annex de carrers"
// (https://web.sabadell.cat -> Ordenances fiscals 2026 -> OF 2.2)
// Categories oficials: 1A, 1B, 2, 3, 4, 5 (Article 10è). Coeficient = posicio relativa
// normalitzada dins el rang 0.80-1.50 ja utilitzat per la calculadora (manté les formules
// i tarifes actuals; nomes substitueix les dades de carrer/categoria per dades reals).
// NOTA: per carrers amb categoria variable segons numero de policia (camp "trams"),
// "cat"/"coef" representen la categoria predominant (moda) per quan no s'indica numero;
// "trams" permet resoldre la categoria exacta amb resoldreCategoriaPerNumero().
// Carrers no presents en aquest llistat (aprox. un 15% dels carrers de Sabadell, T-Z
// alfabeticament, per limitacio d'extraccio del PDF font) cauen per defecte a la
// categoria 5, seguint la regla legal de l'Article 10è.3 ("els carrers no inclosos
// en la relacio seran considerats... de l'ultima categoria").
const COEF_MAP = { "1A": 1.50, "1B": 1.45, "2": 1.28, "3": 1.15, "4": 1.02, "5": 0.80 };

// Tarifes oficials reals (€/m²) per a Terrasses i Vetlladors, segons l'Annex de
// tarifes, Secció 2a, de l'Ordenança Fiscal 4.5 (2026). A diferència dels altres
// conceptes (tanca/grua/rasa), aquestes tarifes ja són específiques per categoria
// de carrer (1A-5), de manera que NO s'hi aplica el COEF_MAP per sobre (evitaria
// duplicar l'ajust categòric). Modalitats: anual, estiu i hivern són imports fixos
// per a tota la temporada/any; cap_setmana_estiu i cap_setmana_hivern són imports
// fixos per a tota la temporada però amb ocupació limitada als caps de setmana;
// eventual és un import per m² i DIA (Article 7è.6: cap de setmana = divendres a
// diumenge inclosos).
const TARIFES_TERRASSA = {
  "1A": { anual: 105.01, estiu: 67.55, hivern: 55.02, cap_setmana_estiu: 34.51, cap_setmana_hivern: 26.52, eventual: 0.54 },
  "1B": { anual: 95.77, estiu: 61.56, hivern: 50.30, cap_setmana_estiu: 31.54, cap_setmana_hivern: 26.52, eventual: 0.48 },
  "2": { anual: 74.15, estiu: 47.63, hivern: 39.46, cap_setmana_estiu: 24.52, cap_setmana_hivern: 26.52, eventual: 0.37 },
  "3": { anual: 55.58, estiu: 35.72, hivern: 30.15, cap_setmana_estiu: 18.34, cap_setmana_hivern: 26.52, eventual: 0.31 },
  "4": { anual: 55.58, estiu: 35.72, hivern: 30.15, cap_setmana_estiu: 18.34, cap_setmana_hivern: 26.52, eventual: 0.31 },
  "5": { anual: 55.58, estiu: 35.72, hivern: 30.15, cap_setmana_estiu: 18.34, cap_setmana_hivern: 26.52, eventual: 0.31 },
};
const TARIFES_TERRASSA_LABELS = {
  anual: "Temporada anual",
  estiu: "Temporada d'estiu",
  hivern: "Temporada d'hivern",
  cap_setmana_estiu: "Caps de setmana d'estiu",
  cap_setmana_hivern: "Caps de setmana d'hivern",
  eventual: "Eventual (per dies)",
};

// Calendari de festius oficials, a tres nivells (estatal / autonòmic-Catalunya /
// local-Sabadell), per marcar-los al selector de dies de la modalitat "eventual".
// Aquestes dates CANVIEN CADA ANY i s'han de revisar i actualitzar anualment.
// Fonts consultades (juny 2026):
//  - Estatal/Autonòmic 2026: Ordre EMT/66/2025 (calendari laboral de Catalunya 2026),
//    Departament d'Empresa i Treball de la Generalitat (treball.gencat.cat).
//  - Local Sabadell 2026: acord del Ple de l'Ajuntament de Sabadell (juliol 2025):
//    Aplec de la Salut (11 de maig) i dilluns de Festa Major (7 de setembre).
//  - Estatal/Autonòmic 2027: calendari laboral de Catalunya 2027, Generalitat
//    (publicat l'abril de 2026). Els 2 festius locals de Sabadell per al 2027
//    encara no s'havien aprovat/publicat en la data de redacció (juny 2026); cal
//    afegir-los aquí quan l'Ajuntament els comuniqui (abans del 2 d'octubre de 2026).
const FESTIUS = {
  2026: [
    { date: "2026-01-01", nom: "Cap d'Any", tipus: "estatal" },
    { date: "2026-01-06", nom: "Reis", tipus: "autonomic" },
    { date: "2026-04-03", nom: "Divendres Sant", tipus: "autonomic" },
    { date: "2026-04-06", nom: "Dilluns de Pasqua Florida", tipus: "autonomic" },
    { date: "2026-05-01", nom: "Dia del Treball", tipus: "estatal" },
    { date: "2026-05-11", nom: "Aplec de la Salut (festa local de Sabadell)", tipus: "local" },
    { date: "2026-06-24", nom: "Sant Joan", tipus: "autonomic" },
    { date: "2026-08-15", nom: "L'Assumpció", tipus: "estatal" },
    { date: "2026-09-07", nom: "Festa Major de Sabadell (festa local)", tipus: "local" },
    { date: "2026-09-11", nom: "Diada Nacional de Catalunya", tipus: "autonomic" },
    { date: "2026-10-12", nom: "Dia de la Hispanitat", tipus: "estatal" },
    { date: "2026-11-01", nom: "Tots Sants", tipus: "estatal" },
    { date: "2026-12-06", nom: "Dia de la Constitució", tipus: "estatal" },
    { date: "2026-12-08", nom: "La Immaculada", tipus: "estatal" },
    { date: "2026-12-25", nom: "Nadal", tipus: "estatal" },
    { date: "2026-12-26", nom: "Sant Esteve", tipus: "autonomic" },
  ],
  2027: [
    { date: "2027-01-01", nom: "Cap d'Any", tipus: "estatal" },
    { date: "2027-01-06", nom: "Reis", tipus: "autonomic" },
    { date: "2027-03-26", nom: "Divendres Sant", tipus: "autonomic" },
    { date: "2027-03-29", nom: "Dilluns de Pasqua Florida", tipus: "autonomic" },
    { date: "2027-05-01", nom: "Dia del Treball", tipus: "estatal" },
    { date: "2027-06-24", nom: "Sant Joan", tipus: "autonomic" },
    { date: "2027-09-11", nom: "Diada Nacional de Catalunya", tipus: "autonomic" },
    { date: "2027-10-12", nom: "Dia de la Hispanitat", tipus: "estatal" },
    { date: "2027-11-01", nom: "Tots Sants", tipus: "estatal" },
    { date: "2027-12-06", nom: "Dia de la Constitució", tipus: "estatal" },
    { date: "2027-12-08", nom: "La Immaculada", tipus: "estatal" },
    { date: "2027-12-25", nom: "Nadal", tipus: "estatal" },
    // Festius locals de Sabadell 2027: pendents d'aprovació pel Ple municipal.
  ],
};
const FESTIUS_LABELS = { estatal: "Festiu estatal", autonomic: "Festiu autonòmic (Catalunya)", local: "Festiu local (Sabadell)" };
const MESOS_CA = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
const DIES_SETMANA_CA = ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"];

function pad2(n) { return String(n).padStart(2, "0"); }
function dataISO(any, mesIdx, dia) { return `${any}-${pad2(mesIdx + 1)}-${pad2(dia)}`; }
function buscarFestiu(dataISOStr) {
  const any = parseInt(dataISOStr.slice(0, 4), 10);
  const llista = FESTIUS[any];
  if (!llista) return null;
  return llista.find(f => f.date === dataISOStr) || null;
}
const baseCarrers = {
  "avinguda d'andreu nin": { nom: "Avinguda d'Andreu Nin", cat: "3", coef: 1.15 },
  "avinguda d'arraona": { nom: "Avinguda d'Arraona", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 23, cat: "3" }, { desDe: 2, finsA: 22, cat: "3" }, { desDe: 24, finsA: null, cat: "2" }, { desDe: 25, finsA: null, cat: "2" } ] },
  "avinguda d'egara": { nom: "Avinguda d'Egara", cat: "3", coef: 1.15 },
  "avinguda d'estrasburg": { nom: "Avinguda d'Estrasburg", cat: "3", coef: 1.15 },
  "avinguda de barberà.": { nom: "Avinguda de Barberà.", cat: "1B", coef: 1.45 },
  "avinguda de can bordoll": { nom: "Avinguda de Can Bordoll", cat: "3", coef: 1.15 },
  "avinguda de can deu": { nom: "Avinguda de Can Deu", cat: "3", coef: 1.15 },
  "avinguda de can roqueta": { nom: "Avinguda de Can Roqueta", cat: "4", coef: 1.02 },
  "avinguda de don bosco": { nom: "Avinguda de Don Bosco", cat: "3", coef: 1.15 },
  "avinguda de francesc macià": { nom: "Avinguda de Francesc Macià", cat: "1A", coef: 1.5 },
  "avinguda de francesc trabal": { nom: "Avinguda de Francesc Trabal", cat: "3", coef: 1.15 },
  "avinguda de josep tarradellas": { nom: "Avinguda de Josep Tarradellas", cat: "1B", coef: 1.45 },
  "avinguda de l'alcalde moix": { nom: "Avinguda de l'Alcalde Moix", cat: "3", coef: 1.15 },
  "avinguda de l'onze de setembre": { nom: "Avinguda de l'Onze de Setembre", cat: "1B", coef: 1.45 },
  "avinguda de la concòrdia": { nom: "Avinguda de la Concòrdia", cat: "1B", coef: 1.45 },
  "avinguda de la pau": { nom: "Avinguda de la Pau", cat: "2", coef: 1.28 },
  "avinguda de lluís companys": { nom: "Avinguda de Lluís Companys", cat: "1B", coef: 1.45 },
  "avinguda de matadepera": { nom: "Avinguda de Matadepera", cat: "1B", coef: 1.45 },
  "avinguda de pablo iglesias": { nom: "Avinguda de Pablo Iglesias", cat: "4", coef: 1.02 },
  "avinguda de polinyà": { nom: "Avinguda de Polinyà", cat: "5", coef: 0.8 },
  "avinguda de rafael casanova": { nom: "Avinguda de Rafael Casanova", cat: "2", coef: 1.28 },
  "avinguda dels paraires": { nom: "Avinguda dels Paraires", cat: "1B", coef: 1.45 },
  "baixada de can puiggener": { nom: "Baixada de Can Puiggener", cat: "3", coef: 1.15 },
  "baixada de la cobertera": { nom: "Baixada de la Cobertera", cat: "5", coef: 0.8 },
  "camí de ca la daniela": { nom: "Camí de ca la Daniela", cat: "5", coef: 0.8 },
  "camí de can quadres": { nom: "Camí de Can Quadres", cat: "5", coef: 0.8 },
  "camí de la ciutat": { nom: "Camí de la Ciutat", cat: "3", coef: 1.15 },
  "camí molí d'en torrella": { nom: "Camí Molí d'en Torrella", cat: "5", coef: 0.8 },
  "carrer blanc": { nom: "Carrer Blanc", cat: "3", coef: 1.15 },
  "carrer blau": { nom: "Carrer Blau", cat: "3", coef: 1.15 },
  "carrer comte ramon berenguer": { nom: "Carrer Comte Ramon Berenguer", cat: "3", coef: 1.15 },
  "carrer d'adriana": { nom: "Carrer d'Adriana", cat: "3", coef: 1.15 },
  "carrer d'ager": { nom: "Carrer d'Ager", cat: "4", coef: 1.02 },
  "carrer d'agnès armengol": { nom: "Carrer d'Agnès Armengol", cat: "3", coef: 1.15 },
  "carrer d'agustina d'aragó": { nom: "Carrer d'Agustina d'Aragó", cat: "5", coef: 0.8 },
  "carrer d'agustí bartra": { nom: "Carrer d'Agustí Bartra", cat: "5", coef: 0.8 },
  "carrer d'albarrasí": { nom: "Carrer d'Albarrasí", cat: "4", coef: 1.02 },
  "carrer d'albéniz": { nom: "Carrer d'Albéniz", cat: "3", coef: 1.15 },
  "carrer d'alcoi": { nom: "Carrer d'Alcoi", cat: "4", coef: 1.02 },
  "carrer d'alcubierre": { nom: "Carrer d'Alcubierre", cat: "3", coef: 1.15 },
  "carrer d'alemanya": { nom: "Carrer d'Alemanya", cat: "2", coef: 1.28 },
  "carrer d'alfons sala": { nom: "Carrer d'Alfons Sala", cat: "2", coef: 1.28 },
  "carrer d'algesires": { nom: "Carrer d'Algesires", cat: "4", coef: 1.02 },
  "carrer d'alguersuari i pascual": { nom: "Carrer d'Alguersuari i Pascual", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 17, cat: "2" }, { desDe: 2, finsA: null, cat: "2" }, { desDe: 173, finsA: null, cat: "3" } ] },
  "carrer d'alí bei": { nom: "Carrer d'Alí Bei", cat: "4", coef: 1.02 },
  "carrer d'amsterdam": { nom: "Carrer d'Amsterdam", cat: "4", coef: 1.02 },
  "carrer d'amèrica": { nom: "Carrer d'Amèrica", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 6, cat: "4" }, { desDe: 2, finsA: null, cat: "3" }, { desDe: 65, finsA: null, cat: "3" } ] },
  "carrer d'amílcar barca": { nom: "Carrer d'Amílcar Barca", cat: "3", coef: 1.15 },
  "carrer d'andorra": { nom: "Carrer d'Andorra", cat: "3", coef: 1.15 },
  "carrer d'aneto": { nom: "Carrer d'Aneto", cat: "3", coef: 1.15 },
  "carrer d'angel guimerà": { nom: "Carrer d'Angel Guimerà", cat: "1B", coef: 1.45 },
  "carrer d'anne frank": { nom: "Carrer d'Anne Frank", cat: "4", coef: 1.02 },
  "carrer d'anníbal": { nom: "Carrer d'Anníbal", cat: "3", coef: 1.15 },
  "carrer d'anselm turmeda": { nom: "Carrer d'Anselm Turmeda", cat: "4", coef: 1.02 },
  "carrer d'antoni cusidó": { nom: "Carrer d'Antoni Cusidó", cat: "3", coef: 1.15 },
  "carrer d'antoni estruch": { nom: "Carrer d'Antoni Estruch", cat: "1B", coef: 1.45 },
  "carrer d'antoni forrellad": { nom: "Carrer d'Antoni Forrellad", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 100, cat: "3" }, { desDe: 101, finsA: null, cat: "2" } ] },
  "carrer d'antoni maura": { nom: "Carrer d'Antoni Maura", cat: "5", coef: 0.8 },
  "carrer d'antoni oller": { nom: "Carrer d'Antoni Oller", cat: "3", coef: 1.15 },
  "carrer d'antonio vico": { nom: "Carrer d'Antonio Vico", cat: "3", coef: 1.15 },
  "carrer d'apel·les mestres": { nom: "Carrer d'Apel·les Mestres", cat: "4", coef: 1.02 },
  "carrer d'aquisgrà": { nom: "Carrer d'Aquisgrà", cat: "4", coef: 1.02 },
  "carrer d'archidona": { nom: "Carrer d'Archidona", cat: "2", coef: 1.28 },
  "carrer d'aribau": { nom: "Carrer d'Aribau", cat: "3", coef: 1.15 },
  "carrer d'arimon": { nom: "Carrer d'Arimon", cat: "2", coef: 1.28 },
  "carrer d'aristòtil": { nom: "Carrer d'Aristòtil", cat: "3", coef: 1.15 },
  "carrer d'armand obiols": { nom: "Carrer d'Armand Obiols", cat: "2", coef: 1.28 },
  "carrer d'arnau de vilanova": { nom: "Carrer d'Arnau de Vilanova", cat: "2", coef: 1.28 },
  "carrer d'arnella": { nom: "Carrer d'Arnella", cat: "5", coef: 0.8 },
  "carrer d'arousa": { nom: "Carrer d'Arousa", cat: "3", coef: 1.15 },
  "carrer d'artesa de segre": { nom: "Carrer d'Artesa de Segre", cat: "3", coef: 1.15 },
  "carrer d'arànser": { nom: "Carrer d'Arànser", cat: "3", coef: 1.15 },
  "carrer d'atlanta": { nom: "Carrer d'Atlanta", cat: "3", coef: 1.15 },
  "carrer d'ausiàs marc": { nom: "Carrer d'Ausiàs Marc", cat: "4", coef: 1.02, trams: [ { desDe: 1, finsA: 157, cat: "4" }, { desDe: 2, finsA: 160, cat: "4" }, { desDe: 162, finsA: null, cat: "5" }, { desDe: 159, finsA: null, cat: "5" } ] },
  "carrer d'avellaneda": { nom: "Carrer d'Avellaneda", cat: "2", coef: 1.28 },
  "carrer d'edimburg": { nom: "Carrer d'Edimburg", cat: "3", coef: 1.15 },
  "carrer d'eduard brossa": { nom: "Carrer d'Eduard Brossa", cat: "3", coef: 1.15 },
  "carrer d'einstein": { nom: "Carrer d'Einstein", cat: "4", coef: 1.02 },
  "carrer d'eivissa": { nom: "Carrer d'Eivissa", cat: "3", coef: 1.15 },
  "carrer d'elba": { nom: "Carrer d'Elba", cat: "3", coef: 1.15 },
  "carrer d'elcano": { nom: "Carrer d'Elcano", cat: "4", coef: 1.02 },
  "carrer d'empúries": { nom: "Carrer d'Empúries", cat: "4", coef: 1.02 },
  "carrer d'en bac de roda": { nom: "Carrer d'en Bac de Roda", cat: "2", coef: 1.28 },
  "carrer d'en font": { nom: "Carrer d'en Font", cat: "2", coef: 1.28 },
  "carrer d'entrepeñas": { nom: "Carrer d'Entrepeñas", cat: "5", coef: 0.8 },
  "carrer d'escipió": { nom: "Carrer d'Escipió", cat: "4", coef: 1.02 },
  "carrer d'eslava": { nom: "Carrer d'Eslava", cat: "3", coef: 1.15 },
  "carrer d'esmirna": { nom: "Carrer d'Esmirna", cat: "4", coef: 1.02 },
  "carrer d'esteve paluzie": { nom: "Carrer d'Esteve Paluzie", cat: "4", coef: 1.02 },
  "carrer d'herculà": { nom: "Carrer d'Herculà", cat: "1B", coef: 1.45 },
  "carrer d'homer": { nom: "Carrer d'Homer", cat: "4", coef: 1.02 },
  "carrer d'horta": { nom: "Carrer d'Horta", cat: "4", coef: 1.02 },
  "carrer d'irlanda": { nom: "Carrer d'Irlanda", cat: "3", coef: 1.15 },
  "carrer d'ivars d'urgell": { nom: "Carrer d'Ivars d'Urgell", cat: "4", coef: 1.02 },
  "carrer d'oliver": { nom: "Carrer d'Oliver", cat: "3", coef: 1.15 },
  "carrer d'olof palme": { nom: "Carrer d'Olof Palme", cat: "4", coef: 1.02 },
  "carrer d'olot": { nom: "Carrer d'Olot", cat: "4", coef: 1.02 },
  "carrer d'olzinelles": { nom: "Carrer d'Olzinelles", cat: "3", coef: 1.15 },
  "carrer d'ordesa": { nom: "Carrer d'Ordesa", cat: "3", coef: 1.15 },
  "carrer d'oretana": { nom: "Carrer d'Oretana", cat: "4", coef: 1.02 },
  "carrer d'orlando enamorat": { nom: "Carrer d'Orlando Enamorat", cat: "4", coef: 1.02 },
  "carrer d'osaka": { nom: "Carrer d'Osaka", cat: "4", coef: 1.02 },
  "carrer d'osca": { nom: "Carrer d'Osca", cat: "3", coef: 1.15 },
  "carrer d'oslo": { nom: "Carrer d'Oslo", cat: "4", coef: 1.02 },
  "carrer d'osona": { nom: "Carrer d'Osona", cat: "3", coef: 1.15 },
  "carrer d'ovidi": { nom: "Carrer d'Ovidi", cat: "3", coef: 1.15 },
  "carrer de bad vöslau": { nom: "Carrer de Bad Vöslau", cat: "4", coef: 1.02 },
  "carrer de bailèn": { nom: "Carrer de Bailèn", cat: "5", coef: 0.8 },
  "carrer de balaguer": { nom: "Carrer de Balaguer", cat: "2", coef: 1.28 },
  "carrer de baldiri reixac": { nom: "Carrer de Baldiri Reixac", cat: "3", coef: 1.15 },
  "carrer de balmes": { nom: "Carrer de Balmes", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 95, cat: "3" }, { desDe: 2, finsA: null, cat: "2" }, { desDe: 97, finsA: null, cat: "2" } ] },
  "carrer de baltarga": { nom: "Carrer de Baltarga", cat: "3", coef: 1.15 },
  "carrer de banyoles": { nom: "Carrer de Banyoles", cat: "2", coef: 1.28 },
  "carrer de batllevell": { nom: "Carrer de Batllevell", cat: "1B", coef: 1.45 },
  "carrer de baygual": { nom: "Carrer de Baygual", cat: "3", coef: 1.15 },
  "carrer de beethoven": { nom: "Carrer de Beethoven", cat: "3", coef: 1.15 },
  "carrer de begoña": { nom: "Carrer de Begoña", cat: "5", coef: 0.8 },
  "carrer de bellmunt": { nom: "Carrer de Bellmunt", cat: "5", coef: 0.8 },
  "carrer de bellsolà": { nom: "Carrer de Bellsolà", cat: "4", coef: 1.02 },
  "carrer de bellver": { nom: "Carrer de Bellver", cat: "4", coef: 1.02 },
  "carrer de benasc": { nom: "Carrer de Benasc", cat: "3", coef: 1.15 },
  "carrer de benavarri": { nom: "Carrer de Benavarri", cat: "4", coef: 1.02 },
  "carrer de benidorm": { nom: "Carrer de Benidorm", cat: "5", coef: 0.8 },
  "carrer de berenguer el gran": { nom: "Carrer de Berenguer el Gran", cat: "2", coef: 1.28 },
  "carrer de bergen": { nom: "Carrer de Bergen", cat: "4", coef: 1.02 },
  "carrer de berlín": { nom: "Carrer de Berlín", cat: "4", coef: 1.02 },
  "carrer de bernat boades": { nom: "Carrer de Bernat Boades", cat: "2", coef: 1.28 },
  "carrer de bernat de rocabertí": { nom: "Carrer de Bernat de Rocabertí", cat: "4", coef: 1.02 },
  "carrer de bernat desclot": { nom: "Carrer de Bernat Desclot", cat: "3", coef: 1.15 },
  "carrer de bernat metge": { nom: "Carrer de Bernat Metge", cat: "3", coef: 1.15 },
  "carrer de bertrand russell": { nom: "Carrer de Bertrand Russell", cat: "4", coef: 1.02 },
  "carrer de biella": { nom: "Carrer de Biella", cat: "4", coef: 1.02 },
  "carrer de bilbao": { nom: "Carrer de Bilbao", cat: "3", coef: 1.15 },
  "carrer de blasco de garay": { nom: "Carrer de Blasco de Garay", cat: "2", coef: 1.28 },
  "carrer de boccaccio": { nom: "Carrer de Boccaccio", cat: "4", coef: 1.02, trams: [ { desDe: 1, finsA: null, cat: "4" }, { desDe: 2, finsA: null, cat: "3" } ] },
  "carrer de bofí": { nom: "Carrer de Bofí", cat: "3", coef: 1.15 },
  "carrer de bolvir": { nom: "Carrer de Bolvir", cat: "3", coef: 1.15 },
  "carrer de bombai": { nom: "Carrer de Bombai", cat: "4", coef: 1.02 },
  "carrer de bonavista": { nom: "Carrer de Bonavista", cat: "3", coef: 1.15 },
  "carrer de borgonyó": { nom: "Carrer de Borgonyó", cat: "2", coef: 1.28 },
  "carrer de borrell": { nom: "Carrer de Borrell", cat: "2", coef: 1.28 },
  "carrer de borràs": { nom: "Carrer de Borràs", cat: "2", coef: 1.28 },
  "carrer de bosch i cardellach": { nom: "Carrer de Bosch i Cardellach", cat: "2", coef: 1.28 },
  "carrer de boston": { nom: "Carrer de Boston", cat: "4", coef: 1.02 },
  "carrer de boí": { nom: "Carrer de Boí", cat: "3", coef: 1.15 },
  "carrer de bradford": { nom: "Carrer de Bradford", cat: "3", coef: 1.15 },
  "carrer de brisbane": { nom: "Carrer de Brisbane", cat: "4", coef: 1.02 },
  "carrer de brujas": { nom: "Carrer de Brujas", cat: "3", coef: 1.15 },
  "carrer de brutau": { nom: "Carrer de Brutau", cat: "2", coef: 1.28 },
  "carrer de budapest": { nom: "Carrer de Budapest", cat: "3", coef: 1.15 },
  "carrer de buenos aires": { nom: "Carrer de Buenos Aires", cat: "4", coef: 1.02 },
  "carrer de bujaruelo": { nom: "Carrer de Bujaruelo", cat: "3", coef: 1.15 },
  "carrer de buxeda": { nom: "Carrer de Buxeda", cat: "3", coef: 1.15 },
  "carrer de ca n'alzina": { nom: "Carrer de Ca n'Alzina", cat: "4", coef: 1.02 },
  "carrer de ca n'ermengol": { nom: "Carrer de Ca n'Ermengol", cat: "4", coef: 1.02 },
  "carrer de cabanyes": { nom: "Carrer de Cabanyes", cat: "3", coef: 1.15 },
  "carrer de cabdella": { nom: "Carrer de Cabdella", cat: "5", coef: 0.8 },
  "carrer de cal mas": { nom: "Carrer de Cal Mas", cat: "4", coef: 1.02 },
  "carrer de calassanç duran": { nom: "Carrer de Calassanç Duran", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 75, cat: "2" }, { desDe: 2, finsA: 170, cat: "2" }, { desDe: 77, finsA: null, cat: "3" }, { desDe: 172, finsA: null, cat: "3" } ] },
  "carrer de calderón": { nom: "Carrer de Calderón", cat: "1B", coef: 1.45 },
  "carrer de calvet d'estrella": { nom: "Carrer de Calvet d'Estrella", cat: "3", coef: 1.15 },
  "carrer de camarasa": { nom: "Carrer de Camarasa", cat: "5", coef: 0.8 },
  "carrer de campoamor": { nom: "Carrer de Campoamor", cat: "2", coef: 1.28 },
  "carrer de can borrell": { nom: "Carrer de Can Borrell", cat: "1B", coef: 1.45 },
  "carrer de can camps": { nom: "Carrer de Can Camps", cat: "4", coef: 1.02 },
  "carrer de can cinto": { nom: "Carrer de Can Cinto", cat: "3", coef: 1.15 },
  "carrer de can diviu": { nom: "Carrer de Can Diviu", cat: "1B", coef: 1.45 },
  "carrer de can fadó": { nom: "Carrer de Can Fadó", cat: "3", coef: 1.15 },
  "carrer de can gener": { nom: "Carrer de Can Gener", cat: "4", coef: 1.02 },
  "carrer de can julià ferrer": { nom: "Carrer de Can Julià Ferrer", cat: "3", coef: 1.15 },
  "carrer de can lletget": { nom: "Carrer de Can Lletget", cat: "4", coef: 1.02 },
  "carrer de can llobateres": { nom: "Carrer de Can Llobateres", cat: "3", coef: 1.15 },
  "carrer de can manent": { nom: "Carrer de Can Manent", cat: "4", coef: 1.02 },
  "carrer de can maurí": { nom: "Carrer de Can Maurí", cat: "4", coef: 1.02 },
  "carrer de can mimó": { nom: "Carrer de Can Mimó", cat: "4", coef: 1.02 },
  "carrer de can moragues": { nom: "Carrer de Can Moragues", cat: "4", coef: 1.02 },
  "carrer de can pobla": { nom: "Carrer de Can Pobla", cat: "4", coef: 1.02 },
  "carrer de can polit": { nom: "Carrer de Can Polit", cat: "4", coef: 1.02 },
  "carrer de can puiggener": { nom: "Carrer de Can Puiggener", cat: "3", coef: 1.15 },
  "carrer de can revella": { nom: "Carrer de Can Revella", cat: "5", coef: 0.8 },
  "carrer de can salvi": { nom: "Carrer de Can Salvi", cat: "4", coef: 1.02 },
  "carrer de can viloca": { nom: "Carrer de Can Viloca", cat: "3", coef: 1.15 },
  "carrer de candanchú": { nom: "Carrer de Candanchú", cat: "4", coef: 1.02 },
  "carrer de canelles": { nom: "Carrer de Canelles", cat: "5", coef: 0.8 },
  "carrer de capmany": { nom: "Carrer de Capmany", cat: "2", coef: 1.28 },
  "carrer de capri": { nom: "Carrer de Capri", cat: "2", coef: 1.28 },
  "carrer de carançà": { nom: "Carrer de Carançà", cat: "4", coef: 1.02 },
  "carrer de caresmar": { nom: "Carrer de Caresmar", cat: "4", coef: 1.02 },
  "carrer de carles riba": { nom: "Carrer de Carles Riba", cat: "5", coef: 0.8 },
  "carrer de cartago": { nom: "Carrer de Cartago", cat: "3", coef: 1.15 },
  "carrer de casanovas i bosch": { nom: "Carrer de Casanovas i Bosch", cat: "2", coef: 1.28 },
  "carrer de casp": { nom: "Carrer de Casp", cat: "3", coef: 1.15 },
  "carrer de castellar del vallès": { nom: "Carrer de Castellar del Vallès", cat: "2", coef: 1.28 },
  "carrer de catul": { nom: "Carrer de Catul", cat: "3", coef: 1.15 },
  "carrer de cató": { nom: "Carrer de Cató", cat: "3", coef: 1.15 },
  "carrer de cavallers": { nom: "Carrer de Cavallers", cat: "5", coef: 0.8 },
  "carrer de cebrià cabané": { nom: "Carrer de Cebrià Cabané", cat: "4", coef: 1.02 },
  "carrer de cellers": { nom: "Carrer de Cellers", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 65, cat: "3" }, { desDe: 2, finsA: 144, cat: "3" }, { desDe: 67, finsA: null, cat: "4" }, { desDe: 146, finsA: null, cat: "4" } ] },
  "carrer de cerdanyola": { nom: "Carrer de Cerdanyola", cat: "3", coef: 1.15 },
  "carrer de cervantes": { nom: "Carrer de Cervantes", cat: "2", coef: 1.28 },
  "carrer de cesar torras": { nom: "Carrer de Cesar Torras", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 179, cat: "3" }, { desDe: 2, finsA: null, cat: "2" }, { desDe: 181, finsA: null, cat: "2" } ] },
  "carrer de chopin": { nom: "Carrer de Chopin", cat: "3", coef: 1.15 },
  "carrer de ciceró": { nom: "Carrer de Ciceró", cat: "5", coef: 0.8 },
  "carrer de ciutat del cap": { nom: "Carrer de Ciutat del Cap", cat: "4", coef: 1.02 },
  "carrer de claudià": { nom: "Carrer de Claudià", cat: "3", coef: 1.15 },
  "carrer de clavé": { nom: "Carrer de Clavé", cat: "3", coef: 1.15 },
  "carrer de clemència isaura": { nom: "Carrer de Clemència Isaura", cat: "3", coef: 1.15 },
  "carrer de collserola": { nom: "Carrer de Collserola", cat: "3", coef: 1.15 },
  "carrer de colom": { nom: "Carrer de Colom", cat: "2", coef: 1.28 },
  "carrer de colomers": { nom: "Carrer de Colomers", cat: "5", coef: 0.8 },
  "carrer de colòmbia": { nom: "Carrer de Colòmbia", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: null, cat: "3" }, { desDe: 2, finsA: 18, cat: "4" }, { desDe: 20, finsA: null, cat: "3" } ] },
  "carrer de concepción arenal": { nom: "Carrer de Concepción Arenal", cat: "3", coef: 1.15 },
  "carrer de concha espina": { nom: "Carrer de Concha Espina", cat: "3", coef: 1.15 },
  "carrer de conillera": { nom: "Carrer de Conillera", cat: "4", coef: 1.02 },
  "carrer de constantí": { nom: "Carrer de Constantí", cat: "2", coef: 1.28 },
  "carrer de copenhaguen": { nom: "Carrer de Copenhaguen", cat: "4", coef: 1.02 },
  "carrer de corneli nepos": { nom: "Carrer de Corneli Nepos", cat: "3", coef: 1.15 },
  "carrer de corominas": { nom: "Carrer de Corominas", cat: "2", coef: 1.28 },
  "carrer de corones": { nom: "Carrer de Corones", cat: "3", coef: 1.15 },
  "carrer de costa i deu": { nom: "Carrer de Costa i Deu", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: null, cat: "3" }, { desDe: 2, finsA: null, cat: "2" } ] },
  "carrer de costa i llobera": { nom: "Carrer de Costa i Llobera", cat: "5", coef: 0.8 },
  "carrer de costabona": { nom: "Carrer de Costabona", cat: "3", coef: 1.15 },
  "carrer de covadonga": { nom: "Carrer de Covadonga", cat: "3", coef: 1.15 },
  "carrer de covilha": { nom: "Carrer de Covilha", cat: "4", coef: 1.02 },
  "carrer de cuba": { nom: "Carrer de Cuba", cat: "3", coef: 1.15 },
  "carrer de curial e güelfa": { nom: "Carrer de Curial e Güelfa", cat: "4", coef: 1.02 },
  "carrer de còrsega": { nom: "Carrer de Còrsega", cat: "4", coef: 1.02 },
  "carrer de damià forment": { nom: "Carrer de Damià Forment", cat: "3", coef: 1.15 },
  "carrer de daniel molina": { nom: "Carrer de Daniel Molina", cat: "3", coef: 1.15 },
  "carrer de dant": { nom: "Carrer de Dant", cat: "4", coef: 1.02 },
  "carrer de daoíz": { nom: "Carrer de Daoíz", cat: "4", coef: 1.02 },
  "carrer de demòstenes": { nom: "Carrer de Demòstenes", cat: "3", coef: 1.15 },
  "carrer de diego de almagro": { nom: "Carrer de Diego de Almagro", cat: "4", coef: 1.02 },
  "carrer de dinarès": { nom: "Carrer de Dinarès", cat: "3", coef: 1.15 },
  "carrer de domènec tort": { nom: "Carrer de Domènec Tort", cat: "5", coef: 0.8 },
  "carrer de domènech i montaner": { nom: "Carrer de Domènech i Montaner", cat: "3", coef: 1.15 },
  "carrer de dublín": { nom: "Carrer de Dublín", cat: "4", coef: 1.02 },
  "carrer de duran i sors": { nom: "Carrer de Duran i Sors", cat: "2", coef: 1.28 },
  "carrer de fatjó": { nom: "Carrer de Fatjó", cat: "3", coef: 1.15 },
  "carrer de feijoo": { nom: "Carrer de Feijoo", cat: "3", coef: 1.15 },
  "carrer de felip benessat": { nom: "Carrer de Felip Benessat", cat: "3", coef: 1.15 },
  "carrer de felip pedrell": { nom: "Carrer de Felip Pedrell", cat: "2", coef: 1.28 },
  "carrer de feliu de la penya": { nom: "Carrer de Feliu de la Penya", cat: "3", coef: 1.15 },
  "carrer de feliu elias": { nom: "Carrer de Feliu Elias", cat: "3", coef: 1.15 },
  "carrer de fernando poo": { nom: "Carrer de Fernando Poo", cat: "3", coef: 1.15 },
  "carrer de fernán caballero": { nom: "Carrer de Fernán Caballero", cat: "3", coef: 1.15 },
  "carrer de ferran casablancas": { nom: "Carrer de Ferran Casablancas", cat: "2", coef: 1.28 },
  "carrer de ferrer de blanes": { nom: "Carrer de Ferrer de Blanes", cat: "2", coef: 1.28, trams: [ { desDe: 2, finsA: 80, cat: "2" }, { desDe: 1, finsA: 63, cat: "2" }, { desDe: 82, finsA: null, cat: "3" }, { desDe: 65, finsA: null, cat: "3" } ] },
  "carrer de ferrer i guàrdia": { nom: "Carrer de Ferrer i Guàrdia", cat: "3", coef: 1.15 },
  "carrer de ferrer i vidal": { nom: "Carrer de Ferrer i Vidal", cat: "3", coef: 1.15 },
  "carrer de fiveller": { nom: "Carrer de Fiveller", cat: "4", coef: 1.02, trams: [ { desDe: 2, finsA: 84, cat: "4" }, { desDe: 1, finsA: 71, cat: "4" }, { desDe: 86, finsA: null, cat: "5" }, { desDe: 73, finsA: null, cat: "5" } ] },
  "carrer de flavi": { nom: "Carrer de Flavi", cat: "3", coef: 1.15 },
  "carrer de folch i torres": { nom: "Carrer de Folch i Torres", cat: "5", coef: 0.8 },
  "carrer de font i sagué": { nom: "Carrer de Font i Sagué", cat: "2", coef: 1.28 },
  "carrer de fontanella": { nom: "Carrer de Fontanella", cat: "2", coef: 1.28 },
  "carrer de fontanet": { nom: "Carrer de Fontanet", cat: "3", coef: 1.15 },
  "carrer de formentera": { nom: "Carrer de Formentera", cat: "4", coef: 1.02 },
  "carrer de fra angelico": { nom: "Carrer de Fra Angelico", cat: "4", coef: 1.02 },
  "carrer de fra batlle": { nom: "Carrer de Fra Batlle", cat: "3", coef: 1.15 },
  "carrer de fra juníper serra": { nom: "Carrer de Fra Juníper Serra", cat: "3", coef: 1.15 },
  "carrer de fra luis de león": { nom: "Carrer de Fra Luis de León", cat: "2", coef: 1.28 },
  "carrer de francesc bellapart": { nom: "Carrer de Francesc Bellapart", cat: "3", coef: 1.15 },
  "carrer de francesc casañas": { nom: "Carrer de Francesc Casañas", cat: "3", coef: 1.15 },
  "carrer de francesc eiximenis": { nom: "Carrer de Francesc Eiximenis", cat: "4", coef: 1.02 },
  "carrer de francesc gimeno": { nom: "Carrer de Francesc Gimeno", cat: "4", coef: 1.02 },
  "carrer de francesc izard": { nom: "Carrer de Francesc Izard", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: null, cat: "3" }, { desDe: 2, finsA: null, cat: "4" } ] },
  "carrer de francesc layret": { nom: "Carrer de Francesc Layret", cat: "2", coef: 1.28 },
  "carrer de francesc sabaté": { nom: "Carrer de Francesc Sabaté", cat: "4", coef: 1.02 },
  "carrer de fraser lawton": { nom: "Carrer de Fraser Lawton", cat: "5", coef: 0.8 },
  "carrer de frederic mistral": { nom: "Carrer de Frederic Mistral", cat: "5", coef: 0.8 },
  "carrer de frederic rahola": { nom: "Carrer de Frederic Rahola", cat: "2", coef: 1.28 },
  "carrer de frederic soler": { nom: "Carrer de Frederic Soler", cat: "5", coef: 0.8 },
  "carrer de fuerteventura": { nom: "Carrer de Fuerteventura", cat: "2", coef: 1.28 },
  "carrer de fàtima": { nom: "Carrer de Fàtima", cat: "3", coef: 1.15 },
  "carrer de fèlix amat": { nom: "Carrer de Fèlix Amat", cat: "2", coef: 1.28 },
  "carrer de gabriel ferrater": { nom: "Carrer de Gabriel Ferrater", cat: "5", coef: 0.8 },
  "carrer de galceran de pinós": { nom: "Carrer de Galceran de Pinós", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 11, cat: "3" }, { desDe: 2, finsA: 8, cat: "3" }, { desDe: 13, finsA: null, cat: "4" }, { desDe: 10, finsA: null, cat: "4" } ] },
  "carrer de gambús": { nom: "Carrer de Gambús", cat: "3", coef: 1.15 },
  "carrer de gandhi": { nom: "Carrer de Gandhi", cat: "4", coef: 1.02 },
  "carrer de garcilaso": { nom: "Carrer de Garcilaso", cat: "2", coef: 1.28 },
  "carrer de garcía lorca": { nom: "Carrer de García Lorca", cat: "3", coef: 1.15 },
  "carrer de garraf": { nom: "Carrer de Garraf", cat: "3", coef: 1.15 },
  "carrer de gibraltar": { nom: "Carrer de Gibraltar", cat: "4", coef: 1.02 },
  "carrer de girona": { nom: "Carrer de Girona", cat: "3", coef: 1.15 },
  "carrer de goethe": { nom: "Carrer de Goethe", cat: "3", coef: 1.15 },
  "carrer de gorina i pujol": { nom: "Carrer de Gorina i Pujol", cat: "2", coef: 1.28 },
  "carrer de goya": { nom: "Carrer de Goya", cat: "2", coef: 1.28 },
  "carrer de gran canària": { nom: "Carrer de Gran Canària", cat: "3", coef: 1.15 },
  "carrer de gredos": { nom: "Carrer de Gredos", cat: "4", coef: 1.02 },
  "carrer de gràcia": { nom: "Carrer de Gràcia", cat: "1B", coef: 1.45 },
  "carrer de guadarrama": { nom: "Carrer de Guadarrama", cat: "3", coef: 1.15 },
  "carrer de gurrea": { nom: "Carrer de Gurrea", cat: "2", coef: 1.28 },
  "carrer de góngora": { nom: "Carrer de Góngora", cat: "5", coef: 0.8 },
  "carrer de güell i ferrer": { nom: "Carrer de Güell i Ferrer", cat: "2", coef: 1.28 },
  "carrer de jacint verdaguer": { nom: "Carrer de Jacint Verdaguer", cat: "3", coef: 1.15 },
  "carrer de jacquard": { nom: "Carrer de Jacquard", cat: "3", coef: 1.15 },
  "carrer de jaume huguet": { nom: "Carrer de Jaume Huguet", cat: "1B", coef: 1.45 },
  "carrer de jaume i": { nom: "Carrer de Jaume I", cat: "1B", coef: 1.45 },
  "carrer de jaume ninet": { nom: "Carrer de Jaume Ninet", cat: "4", coef: 1.02 },
  "carrer de jesús": { nom: "Carrer de Jesús", cat: "2", coef: 1.28 },
  "carrer de joan alcover": { nom: "Carrer de Joan Alcover", cat: "5", coef: 0.8 },
  "carrer de joan amades": { nom: "Carrer de Joan Amades", cat: "5", coef: 0.8 },
  "carrer de joan balart": { nom: "Carrer de Joan Balart", cat: "4", coef: 1.02 },
  "carrer de joan bartomeu": { nom: "Carrer de Joan Bartomeu", cat: "3", coef: 1.15 },
  "carrer de joan boscà": { nom: "Carrer de Joan Boscà", cat: "4", coef: 1.02 },
  "carrer de joan clavell": { nom: "Carrer de Joan Clavell", cat: "5", coef: 0.8 },
  "carrer de joan llongueras": { nom: "Carrer de Joan Llongueras", cat: "3", coef: 1.15 },
  "carrer de joan maragall": { nom: "Carrer de Joan Maragall", cat: "2", coef: 1.28 },
  "carrer de joan plans": { nom: "Carrer de Joan Plans", cat: "2", coef: 1.28 },
  "carrer de joan sallent": { nom: "Carrer de Joan Sallent", cat: "3", coef: 1.15 },
  "carrer de joanot martorell": { nom: "Carrer de Joanot Martorell", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 71, cat: "3" }, { desDe: 2, finsA: 52, cat: "2" }, { desDe: 73, finsA: 99, cat: "2" }, { desDe: 54, finsA: null, cat: "1B" }, { desDe: 101, finsA: null, cat: "1B" } ] },
  "carrer de joaquim blume": { nom: "Carrer de Joaquim Blume", cat: "4", coef: 1.02, trams: [ { desDe: 1, finsA: 3, cat: "3" }, { desDe: 2, finsA: null, cat: "4" }, { desDe: 5, finsA: null, cat: "4" } ] },
  "carrer de joaquim ruyra": { nom: "Carrer de Joaquim Ruyra", cat: "5", coef: 0.8 },
  "carrer de joaquim sorolla": { nom: "Carrer de Joaquim Sorolla", cat: "3", coef: 1.15 },
  "carrer de joaquín costa": { nom: "Carrer de Joaquín Costa", cat: "2", coef: 1.28 },
  "carrer de john lennon": { nom: "Carrer de John Lennon", cat: "4", coef: 1.02 },
  "carrer de josep aparici": { nom: "Carrer de Josep Aparici", cat: "2", coef: 1.28 },
  "carrer de josep bruguera": { nom: "Carrer de Josep Bruguera", cat: "3", coef: 1.15 },
  "carrer de josep carner": { nom: "Carrer de Josep Carner", cat: "4", coef: 1.02 },
  "carrer de josep comas": { nom: "Carrer de Josep Comas", cat: "4", coef: 1.02, trams: [ { desDe: 1, finsA: 111, cat: "4" }, { desDe: 2, finsA: 106, cat: "4" }, { desDe: 113, finsA: null, cat: "3" }, { desDe: 108, finsA: null, cat: "3" } ] },
  "carrer de josep esquirol": { nom: "Carrer de Josep Esquirol", cat: "2", coef: 1.28 },
  "carrer de josep guardiet": { nom: "Carrer de Josep Guardiet", cat: "3", coef: 1.15 },
  "carrer de josep maria quadrado": { nom: "Carrer de Josep Maria Quadrado", cat: "4", coef: 1.02 },
  "carrer de josep maria sert": { nom: "Carrer de Josep Maria Sert", cat: "4", coef: 1.02 },
  "carrer de josep miquel": { nom: "Carrer de Josep Miquel", cat: "3", coef: 1.15 },
  "carrer de josep pla": { nom: "Carrer de Josep Pla", cat: "2", coef: 1.28 },
  "carrer de josep renom": { nom: "Carrer de Josep Renom", cat: "2", coef: 1.28 },
  "carrer de jovellanos": { nom: "Carrer de Jovellanos", cat: "2", coef: 1.28 },
  "carrer de juan valera": { nom: "Carrer de Juan Valera", cat: "3", coef: 1.15 },
  "carrer de jules verne": { nom: "Carrer de Jules Verne", cat: "4", coef: 1.02 },
  "carrer de juli garreta": { nom: "Carrer de Juli Garreta", cat: "3", coef: 1.15 },
  "carrer de julián grimau": { nom: "Carrer de Julián Grimau", cat: "4", coef: 1.02 },
  "carrer de juvenal": { nom: "Carrer de Juvenal", cat: "2", coef: 1.28 },
  "carrer de júpiter": { nom: "Carrer de Júpiter", cat: "4", coef: 1.02 },
  "carrer de l'abat escarré": { nom: "Carrer de l'Abat Escarré", cat: "2", coef: 1.28 },
  "carrer de l'abat oliba": { nom: "Carrer de l'Abat Oliba", cat: "4", coef: 1.02 },
  "carrer de l'abat otó": { nom: "Carrer de l'Abat Otó", cat: "4", coef: 1.02 },
  "carrer de l'advocat cirera": { nom: "Carrer de l'Advocat Cirera", cat: "1B", coef: 1.45 },
  "carrer de l'advocat viladot": { nom: "Carrer de l'Advocat Viladot", cat: "3", coef: 1.15 },
  "carrer de l'agricultura": { nom: "Carrer de l'Agricultura", cat: "3", coef: 1.15 },
  "carrer de l'albufera": { nom: "Carrer de l'Albufera", cat: "5", coef: 0.8 },
  "carrer de l'alcalde crespi": { nom: "Carrer de l'Alcalde Crespi", cat: "2", coef: 1.28 },
  "carrer de l'alcalde ribé": { nom: "Carrer de l'Alcalde Ribé", cat: "3", coef: 1.15 },
  "carrer de l'alcarria": { nom: "Carrer de l'Alcarria", cat: "3", coef: 1.15 },
  "carrer de l'alegria": { nom: "Carrer de l'Alegria", cat: "4", coef: 1.02 },
  "carrer de l'almudena": { nom: "Carrer de l'Almudena", cat: "5", coef: 0.8 },
  "carrer de l'anoia": { nom: "Carrer de l'Anoia", cat: "4", coef: 1.02 },
  "carrer de l'apúlia": { nom: "Carrer de l'Apúlia", cat: "3", coef: 1.15 },
  "carrer de l'arcàdia": { nom: "Carrer de l'Arcàdia", cat: "3", coef: 1.15 },
  "carrer de l'argentera": { nom: "Carrer de l'Argentera", cat: "3", coef: 1.15 },
  "carrer de l'argentina": { nom: "Carrer de l'Argentina", cat: "3", coef: 1.15 },
  "carrer de l'artiga de lin": { nom: "Carrer de l'Artiga de Lin", cat: "4", coef: 1.02 },
  "carrer de l'arxiduc d'austria": { nom: "Carrer de l'Arxiduc d'Austria", cat: "3", coef: 1.15 },
  "carrer de l'arxiver clausellas": { nom: "Carrer de l'Arxiver Clausellas", cat: "3", coef: 1.15 },
  "carrer de l'atlas": { nom: "Carrer de l'Atlas", cat: "3", coef: 1.15 },
  "carrer de l'empordà": { nom: "Carrer de l'Empordà", cat: "3", coef: 1.15 },
  "carrer de l'enginyer playà": { nom: "Carrer de l'Enginyer Playà", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: null, cat: "3" }, { desDe: 2, finsA: 62, cat: "4" }, { desDe: 64, finsA: null, cat: "3" } ] },
  "carrer de l'escola industrial": { nom: "Carrer de l'Escola Industrial", cat: "1B", coef: 1.45 },
  "carrer de l'escola pia": { nom: "Carrer de l'Escola Pia", cat: "2", coef: 1.28 },
  "carrer de l'església": { nom: "Carrer de l'Església", cat: "1B", coef: 1.45 },
  "carrer de l'església romànica": { nom: "Carrer de l'Església Romànica", cat: "3", coef: 1.15 },
  "carrer de l'esperança": { nom: "Carrer de l'Esperança", cat: "3", coef: 1.15 },
  "carrer de l'espigó": { nom: "Carrer de l'Espigó", cat: "3", coef: 1.15 },
  "carrer de l'espirall": { nom: "Carrer de l'Espirall", cat: "3", coef: 1.15 },
  "carrer de l'estació": { nom: "Carrer de l'Estació", cat: "2", coef: 1.28 },
  "carrer de l'estalvi": { nom: "Carrer de l'Estalvi", cat: "3", coef: 1.15 },
  "carrer de l'estany rodó": { nom: "Carrer de l'Estany Rodó", cat: "4", coef: 1.02 },
  "carrer de l'estrella": { nom: "Carrer de l'Estrella", cat: "2", coef: 1.28 },
  "carrer de l'himàlaia": { nom: "Carrer de l'Himàlaia", cat: "2", coef: 1.28 },
  "carrer de l'horta novella": { nom: "Carrer de l'Horta Novella", cat: "2", coef: 1.28 },
  "carrer de l'illa": { nom: "Carrer de l'Illa", cat: "2", coef: 1.28 },
  "carrer de l'onyar": { nom: "Carrer de l'Onyar", cat: "4", coef: 1.02 },
  "carrer de l'orquestra ricart": { nom: "Carrer de l'Orquestra Ricart", cat: "4", coef: 1.02 },
  "carrer de la baells": { nom: "Carrer de la Baells", cat: "2", coef: 1.28 },
  "carrer de la baldona": { nom: "Carrer de La Baldona", cat: "4", coef: 1.02 },
  "carrer de la baronia": { nom: "Carrer de la Baronia", cat: "3", coef: 1.15 },
  "carrer de la bona-sort": { nom: "Carrer de la Bona-sort", cat: "5", coef: 0.8 },
  "carrer de la bonaigua": { nom: "Carrer de la Bonaigua", cat: "2", coef: 1.28 },
  "carrer de la bonanova": { nom: "Carrer de la Bonanova", cat: "5", coef: 0.8 },
  "carrer de la borriana": { nom: "Carrer de la Borriana", cat: "2", coef: 1.28 },
  "carrer de la bòbila": { nom: "Carrer de la Bòbila", cat: "3", coef: 1.15 },
  "carrer de la cala": { nom: "Carrer de la Cala", cat: "3", coef: 1.15 },
  "carrer de la cerdanya": { nom: "Carrer de la Cerdanya", cat: "3", coef: 1.15 },
  "carrer de la cisa": { nom: "Carrer de la Cisa", cat: "5", coef: 0.8 },
  "carrer de la concepció": { nom: "Carrer de la Concepció", cat: "2", coef: 1.28 },
  "carrer de la constància": { nom: "Carrer de la Constància", cat: "3", coef: 1.15 },
  "carrer de la creueta": { nom: "Carrer de la Creueta", cat: "2", coef: 1.28 },
  "carrer de la divina comèdia": { nom: "Carrer de la Divina Comèdia", cat: "3", coef: 1.15 },
  "carrer de la fidelitat": { nom: "Carrer de la Fidelitat", cat: "3", coef: 1.15 },
  "carrer de la font canaleta": { nom: "Carrer de la Font Canaleta", cat: "4", coef: 1.02 },
  "carrer de la font nova": { nom: "Carrer de la Font Nova", cat: "3", coef: 1.15 },
  "carrer de la fontcalda": { nom: "Carrer de la Fontcalda", cat: "5", coef: 0.8 },
  "carrer de la forcanada": { nom: "Carrer de la Forcanada", cat: "3", coef: 1.15 },
  "carrer de la garona": { nom: "Carrer de la Garona", cat: "5", coef: 0.8 },
  "carrer de la garrotxa": { nom: "Carrer de la Garrotxa", cat: "3", coef: 1.15 },
  "carrer de la gavina": { nom: "Carrer de la Gavina", cat: "3", coef: 1.15 },
  "carrer de la germanor": { nom: "Carrer de la Germanor", cat: "3", coef: 1.15 },
  "carrer de la ginesta": { nom: "Carrer de la Ginesta", cat: "3", coef: 1.15 },
  "carrer de la gomera": { nom: "Carrer de la Gomera", cat: "3", coef: 1.15 },
  "carrer de la independència": { nom: "Carrer de la Independència", cat: "3", coef: 1.15 },
  "carrer de la indústria": { nom: "Carrer de la Indústria", cat: "1B", coef: 1.45 },
  "carrer de la justícia": { nom: "Carrer de la Justícia", cat: "3", coef: 1.15 },
  "carrer de la llanera": { nom: "Carrer de la Llanera", cat: "2", coef: 1.28 },
  "carrer de la llebreta": { nom: "Carrer de la Llebreta", cat: "5", coef: 0.8 },
  "carrer de la lluna": { nom: "Carrer de la Lluna", cat: "3", coef: 1.15 },
  "carrer de la lusitània": { nom: "Carrer de la Lusitània", cat: "2", coef: 1.28 },
  "carrer de la macarena": { nom: "Carrer de la Macarena", cat: "5", coef: 0.8 },
  "carrer de la maladeta": { nom: "Carrer de la Maladeta", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 25, cat: "2" }, { desDe: 2, finsA: 48, cat: "2" }, { desDe: 27, finsA: null, cat: "3" }, { desDe: 50, finsA: null, cat: "3" } ] },
  "carrer de la mercè": { nom: "Carrer de la Mercè", cat: "5", coef: 0.8 },
  "carrer de la mola": { nom: "Carrer de la Mola", cat: "3", coef: 1.15 },
  "carrer de la molina": { nom: "Carrer de la Molina", cat: "4", coef: 1.02 },
  "carrer de la muga": { nom: "Carrer de la Muga", cat: "5", coef: 0.8 },
  "carrer de la noguera pallaresa": { nom: "Carrer de la Noguera Pallaresa", cat: "4", coef: 1.02 },
  "carrer de la palanca": { nom: "Carrer de la Palanca", cat: "1B", coef: 1.45 },
  "carrer de la palma": { nom: "Carrer de La Palma", cat: "2", coef: 1.28 },
  "carrer de la pera": { nom: "Carrer de la Pera", cat: "3", coef: 1.15 },
  "carrer de la pica d'estats": { nom: "Carrer de la Pica d'Estats", cat: "3", coef: 1.15 },
  "carrer de la prada": { nom: "Carrer de la Prada", cat: "3", coef: 1.15 },
  "carrer de la previsió": { nom: "Carrer de la Previsió", cat: "3", coef: 1.15 },
  "carrer de la reina elionor": { nom: "Carrer de la Reina Elionor", cat: "4", coef: 1.02, trams: [ { desDe: 1, finsA: 135, cat: "3" }, { desDe: 2, finsA: null, cat: "4" }, { desDe: 137, finsA: null, cat: "4" } ] },
  "carrer de la república": { nom: "Carrer de la República", cat: "1B", coef: 1.45 },
  "carrer de la riera alta": { nom: "Carrer de la Riera Alta", cat: "3", coef: 1.15 },
  "carrer de la riera baixa": { nom: "Carrer de la Riera Baixa", cat: "4", coef: 1.02 },
  "carrer de la rioja": { nom: "Carrer de la Rioja", cat: "3", coef: 1.15 },
  "carrer de la rosa": { nom: "Carrer de la Rosa", cat: "1B", coef: 1.45 },
  "carrer de la saboneria": { nom: "Carrer de la Saboneria", cat: "2", coef: 1.28 },
  "carrer de la salut": { nom: "Carrer de la Salut", cat: "1B", coef: 1.45 },
  "carrer de la segarra": { nom: "Carrer de la Segarra", cat: "2", coef: 1.28 },
  "carrer de la selva": { nom: "Carrer de la Selva", cat: "3", coef: 1.15 },
  "carrer de la serra d'en camaró": { nom: "Carrer de la Serra d'en Camaró", cat: "2", coef: 1.28 },
  "carrer de la serra de galliners": { nom: "Carrer de la Serra de Galliners", cat: "1B", coef: 1.45 },
  "carrer de la serralada": { nom: "Carrer de la Serralada", cat: "5", coef: 0.8 },
  "carrer de la soledat": { nom: "Carrer de la Soledat", cat: "3", coef: 1.15 },
  "carrer de la solidaritat": { nom: "Carrer de la Solidaritat", cat: "3", coef: 1.15 },
  "carrer de la sènia": { nom: "Carrer de la Sènia", cat: "4", coef: 1.02 },
  "carrer de lacy": { nom: "Carrer de Lacy", cat: "1B", coef: 1.45, trams: [ { desDe: 1, finsA: 23, cat: "1B" }, { desDe: 2, finsA: 24, cat: "1B" }, { desDe: 26, finsA: null, cat: "2" }, { desDe: 25, finsA: null, cat: "2" } ] },
  "carrer de lanós": { nom: "Carrer de Lanós", cat: "5", coef: 0.8 },
  "carrer de larra": { nom: "Carrer de Larra", cat: "3", coef: 1.15 },
  "carrer de las navas": { nom: "Carrer de las Navas", cat: "3", coef: 1.15 },
  "carrer de latorre": { nom: "Carrer de Latorre", cat: "1B", coef: 1.45 },
  "carrer de leonardo da vinci": { nom: "Carrer de Leonardo da Vinci", cat: "3", coef: 1.15 },
  "carrer de leovigild": { nom: "Carrer de Leovigild", cat: "4", coef: 1.02 },
  "carrer de lepant": { nom: "Carrer de Lepant", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 117, cat: "2" }, { desDe: 2, finsA: 168, cat: "2" }, { desDe: 119, finsA: 217, cat: "3" }, { desDe: 170, finsA: 242, cat: "3" }, { desDe: 244, finsA: null, cat: "2" }, { desDe: 219, finsA: null, cat: "2" } ] },
  "carrer de les agudes": { nom: "Carrer de les Agudes", cat: "3", coef: 1.15 },
  "carrer de les antilles": { nom: "Carrer de les Antilles", cat: "3", coef: 1.15 },
  "carrer de les cases d'en sangés": { nom: "Carrer de les Cases d'en Sangés", cat: "5", coef: 0.8 },
  "carrer de les comèdies": { nom: "Carrer de les Comèdies", cat: "3", coef: 1.15 },
  "carrer de les cosidores": { nom: "Carrer de les Cosidores", cat: "4", coef: 1.02 },
  "carrer de les dàlies": { nom: "Carrer de les Dàlies", cat: "4", coef: 1.02 },
  "carrer de les gardènies": { nom: "Carrer de les Gardènies", cat: "4", coef: 1.02 },
  "carrer de les garrigues": { nom: "Carrer de les Garrigues", cat: "3", coef: 1.15 },
  "carrer de les guilleries": { nom: "Carrer de les Guilleries", cat: "3", coef: 1.15 },
  "carrer de les hortènsies": { nom: "Carrer de les Hortènsies", cat: "4", coef: 1.02 },
  "carrer de les magnòlies": { nom: "Carrer de les Magnòlies", cat: "3", coef: 1.15 },
  "carrer de les palmeres": { nom: "Carrer de les Palmeres", cat: "3", coef: 1.15 },
  "carrer de les paus": { nom: "Carrer de les Paus", cat: "2", coef: 1.28 },
  "carrer de les planes": { nom: "Carrer de les Planes", cat: "2", coef: 1.28 },
  "carrer de les salenques": { nom: "Carrer de les Salenques", cat: "3", coef: 1.15 },
  "carrer de liorna": { nom: "Carrer de Liorna", cat: "3", coef: 1.15 },
  "carrer de llaberia": { nom: "Carrer de Llaberia", cat: "3", coef: 1.15 },
  "carrer de lles": { nom: "Carrer de Lles", cat: "3", coef: 1.15 },
  "carrer de llobet": { nom: "Carrer de Llobet", cat: "3", coef: 1.15 },
  "carrer de llobet i gràcia": { nom: "Carrer de Llobet i Gràcia", cat: "5", coef: 0.8 },
  "carrer de llonch": { nom: "Carrer de Llonch", cat: "3", coef: 1.15 },
  "carrer de lluc": { nom: "Carrer de Lluc", cat: "4", coef: 1.02 },
  "carrer de llum de la selva": { nom: "Carrer de Llum de la Selva", cat: "3", coef: 1.15 },
  "carrer de lluís": { nom: "Carrer de Lluís", cat: "2", coef: 1.28 },
  "carrer de lluís carreras": { nom: "Carrer de Lluís Carreras", cat: "3", coef: 1.15 },
  "carrer de lluís creus": { nom: "Carrer de Lluís Creus", cat: "2", coef: 1.28 },
  "carrer de lluís dalmau": { nom: "Carrer de Lluís Dalmau", cat: "3", coef: 1.15 },
  "carrer de lluís millet": { nom: "Carrer de Lluís Millet", cat: "4", coef: 1.02 },
  "carrer de lluís parcerisa": { nom: "Carrer de Lluís Parcerisa", cat: "3", coef: 1.15 },
  "carrer de lluís vives": { nom: "Carrer de Lluís Vives", cat: "2", coef: 1.28 },
  "carrer de lo somni": { nom: "Carrer de Lo Somni", cat: "4", coef: 1.02 },
  "carrer de lodz": { nom: "Carrer de Lodz", cat: "4", coef: 1.02 },
  "carrer de logronyo": { nom: "Carrer de Logronyo", cat: "4", coef: 1.02 },
  "carrer de lope de vega": { nom: "Carrer de Lope de Vega", cat: "2", coef: 1.28 },
  "carrer de loreto": { nom: "Carrer de Loreto", cat: "5", coef: 0.8 },
  "carrer de louis braille": { nom: "Carrer de Louis Braille", cat: "3", coef: 1.15 },
  "carrer de lucreci": { nom: "Carrer de Lucreci", cat: "4", coef: 1.02 },
  "carrer de lucà": { nom: "Carrer de Lucà", cat: "2", coef: 1.28 },
  "carrer de luján": { nom: "Carrer de Luján", cat: "5", coef: 0.8 },
  "carrer de lurdes": { nom: "Carrer de Lurdes", cat: "4", coef: 1.02 },
  "carrer de luther king": { nom: "Carrer de Luther King", cat: "4", coef: 1.02 },
  "carrer de luthuli": { nom: "Carrer de Luthuli", cat: "4", coef: 1.02 },
  "carrer de madrazo": { nom: "Carrer de Madrazo", cat: "3", coef: 1.15 },
  "carrer de magallanes": { nom: "Carrer de Magallanes", cat: "5", coef: 0.8 },
  "carrer de magí colet": { nom: "Carrer de Magí Colet", cat: "3", coef: 1.15 },
  "carrer de mallorca": { nom: "Carrer de Mallorca", cat: "3", coef: 1.15 },
  "carrer de malta": { nom: "Carrer de Malta", cat: "3", coef: 1.15 },
  "carrer de manaut": { nom: "Carrer de Manaut", cat: "5", coef: 0.8 },
  "carrer de manso": { nom: "Carrer de Manso", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 35, cat: "3" }, { desDe: 2, finsA: 52, cat: "3" }, { desDe: 54, finsA: null, cat: "4" }, { desDe: 37, finsA: null, cat: "4" } ] },
  "carrer de manuel de falla": { nom: "Carrer de Manuel de Falla", cat: "5", coef: 0.8 },
  "carrer de manuel de pedrolo": { nom: "Carrer de Manuel de Pedrolo", cat: "5", coef: 0.8 },
  "carrer de manuel folguera": { nom: "Carrer de Manuel Folguera", cat: "4", coef: 1.02 },
  "carrer de marcel·lí massana": { nom: "Carrer de Marcel·lí Massana", cat: "4", coef: 1.02 },
  "carrer de marcial": { nom: "Carrer de Marcial", cat: "3", coef: 1.15 },
  "carrer de margarit": { nom: "Carrer de Margarit", cat: "4", coef: 1.02 },
  "carrer de margenat": { nom: "Carrer de Margenat", cat: "2", coef: 1.28 },
  "carrer de maria antònia salvà": { nom: "Carrer de Maria Antònia Salvà", cat: "5", coef: 0.8 },
  "carrer de maria de bell-lloc": { nom: "Carrer de Maria de Bell-lloc", cat: "3", coef: 1.15 },
  "carrer de marian burguès": { nom: "Carrer de Marian Burguès", cat: "3", coef: 1.15 },
  "carrer de marie curie": { nom: "Carrer de Marie Curie", cat: "4", coef: 1.02 },
  "carrer de marià aguiló": { nom: "Carrer de Marià Aguiló", cat: "4", coef: 1.02 },
  "carrer de marià fortuny": { nom: "Carrer de Marià Fortuny", cat: "2", coef: 1.28 },
  "carrer de mark twain": { nom: "Carrer de Mark Twain", cat: "4", coef: 1.02 },
  "carrer de marsella": { nom: "Carrer de Marsella", cat: "4", coef: 1.02 },
  "carrer de mart": { nom: "Carrer de Mart", cat: "4", coef: 1.02 },
  "carrer de martinet": { nom: "Carrer de Martinet", cat: "3", coef: 1.15 },
  "carrer de martí l'humà": { nom: "Carrer de Martí l'Humà", cat: "2", coef: 1.28 },
  "carrer de martínez de la rosa": { nom: "Carrer de Martínez de la Rosa", cat: "4", coef: 1.02 },
  "carrer de marçal ballús": { nom: "Carrer de Marçal Ballús", cat: "3", coef: 1.15 },
  "carrer de maty mont": { nom: "Carrer de Maty Mont", cat: "4", coef: 1.02 },
  "carrer de mauberme": { nom: "Carrer de Mauberme", cat: "3", coef: 1.15 },
  "carrer de mauritània": { nom: "Carrer de Mauritània", cat: "2", coef: 1.28 },
  "carrer de medellín": { nom: "Carrer de Medellín", cat: "4", coef: 1.02 },
  "carrer de melbourne": { nom: "Carrer de Melbourne", cat: "4", coef: 1.02 },
  "carrer de menorca": { nom: "Carrer de Menorca", cat: "3", coef: 1.15 },
  "carrer de meranges": { nom: "Carrer de Meranges", cat: "5", coef: 0.8 },
  "carrer de mercuri": { nom: "Carrer de Mercuri", cat: "5", coef: 0.8 },
  "carrer de mercè rodoreda": { nom: "Carrer de Mercè Rodoreda", cat: "3", coef: 1.15 },
  "carrer de migdia": { nom: "Carrer de Migdia", cat: "2", coef: 1.28 },
  "carrer de milena jesenská": { nom: "Carrer de Milena Jesenská", cat: "4", coef: 1.02 },
  "carrer de milà i fontanals": { nom: "Carrer de Milà i Fontanals", cat: "4", coef: 1.02 },
  "carrer de miquel servet": { nom: "Carrer de Miquel Servet", cat: "3", coef: 1.15 },
  "carrer de miquel àngel": { nom: "Carrer de Miquel Àngel", cat: "3", coef: 1.15 },
  "carrer de monestero": { nom: "Carrer de Monestero", cat: "5", coef: 0.8 },
  "carrer de montañès": { nom: "Carrer de Montañès", cat: "4", coef: 1.02 },
  "carrer de monteixo": { nom: "Carrer de Monteixo", cat: "3", coef: 1.15 },
  "carrer de monterols": { nom: "Carrer de Monterols", cat: "3", coef: 1.15 },
  "carrer de montllor i pujal": { nom: "Carrer de Montllor i Pujal", cat: "2", coef: 1.28 },
  "carrer de montserrat": { nom: "Carrer de Montserrat", cat: "2", coef: 1.28 },
  "carrer de moragas i barret": { nom: "Carrer de Moragas i Barret", cat: "2", coef: 1.28 },
  "carrer de moratín": { nom: "Carrer de Moratín", cat: "2", coef: 1.28 },
  "carrer de mossèn gaietà": { nom: "Carrer de Mossèn Gaietà", cat: "2", coef: 1.28 },
  "carrer de mostar": { nom: "Carrer de Mostar", cat: "4", coef: 1.02 },
  "carrer de mulleres": { nom: "Carrer de Mulleres", cat: "3", coef: 1.15 },
  "carrer de muntaner": { nom: "Carrer de Muntaner", cat: "2", coef: 1.28 },
  "carrer de mèxic": { nom: "Carrer de Mèxic", cat: "4", coef: 1.02 },
  "carrer de nadal": { nom: "Carrer de Nadal", cat: "4", coef: 1.02 },
  "carrer de narcisa freixas": { nom: "Carrer de Narcisa Freixas", cat: "3", coef: 1.15 },
  "carrer de narcís casanoves": { nom: "Carrer de Narcís Casanoves", cat: "4", coef: 1.02 },
  "carrer de narcís giralt": { nom: "Carrer de Narcís Giralt", cat: "1B", coef: 1.45 },
  "carrer de narcís monturiol": { nom: "Carrer de Narcís Monturiol", cat: "3", coef: 1.15 },
  "carrer de narcís nonell": { nom: "Carrer de Narcís Nonell", cat: "3", coef: 1.15 },
  "carrer de narcís oller": { nom: "Carrer de Narcís Oller", cat: "5", coef: 0.8 },
  "carrer de norrköping": { nom: "Carrer de Norrköping", cat: "4", coef: 1.02 },
  "carrer de noufonts": { nom: "Carrer de Noufonts", cat: "3", coef: 1.15 },
  "carrer de numància": { nom: "Carrer de Numància", cat: "3", coef: 1.15 },
  "carrer de nàpols": { nom: "Carrer de Nàpols", cat: "3", coef: 1.15 },
  "carrer de núria": { nom: "Carrer de Núria", cat: "5", coef: 0.8 },
  "carrer de paco mutlló": { nom: "Carrer de Paco Mutlló", cat: "2", coef: 1.28 },
  "carrer de pajares": { nom: "Carrer de Pajares", cat: "4", coef: 1.02 },
  "carrer de palestrina": { nom: "Carrer de Palestrina", cat: "4", coef: 1.02 },
  "carrer de panissars": { nom: "Carrer de Panissars", cat: "3", coef: 1.15 },
  "carrer de pardo bazán": { nom: "Carrer de Pardo Bazán", cat: "3", coef: 1.15 },
  "carrer de parellada": { nom: "Carrer de Parellada", cat: "3", coef: 1.15 },
  "carrer de parma": { nom: "Carrer de Parma", cat: "2", coef: 1.28 },
  "carrer de parmènides": { nom: "Carrer de Parmènides", cat: "3", coef: 1.15 },
  "carrer de parís": { nom: "Carrer de París", cat: "2", coef: 1.28 },
  "carrer de pau abad": { nom: "Carrer de Pau Abad", cat: "2", coef: 1.28 },
  "carrer de pau claris": { nom: "Carrer de Pau Claris", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 85, cat: "2" }, { desDe: 2, finsA: 74, cat: "2" }, { desDe: 87, finsA: null, cat: "3" }, { desDe: 76, finsA: null, cat: "3" } ] },
  "carrer de pau colomer": { nom: "Carrer de Pau Colomer", cat: "4", coef: 1.02 },
  "carrer de pau rigalt": { nom: "Carrer de Pau Rigalt", cat: "3", coef: 1.15 },
  "carrer de peguera": { nom: "Carrer de Peguera", cat: "3", coef: 1.15 },
  "carrer de pelai briz": { nom: "Carrer de Pelai Briz", cat: "5", coef: 0.8 },
  "carrer de pere d'om": { nom: "Carrer de Pere d'Om", cat: "2", coef: 1.28 },
  "carrer de pere monistrol": { nom: "Carrer de Pere Monistrol", cat: "3", coef: 1.15 },
  "carrer de pere serafí": { nom: "Carrer de Pere Serafí", cat: "3", coef: 1.15 },
  "carrer de pereda": { nom: "Carrer de Pereda", cat: "2", coef: 1.28 },
  "carrer de permanyer": { nom: "Carrer de Permanyer", cat: "3", coef: 1.15 },
  "carrer de persi": { nom: "Carrer de Persi", cat: "3", coef: 1.15 },
  "carrer de petrarca": { nom: "Carrer de Petrarca", cat: "3", coef: 1.15 },
  "carrer de peñalara": { nom: "Carrer de Peñalara", cat: "3", coef: 1.15 },
  "carrer de pi i margall": { nom: "Carrer de Pi i Margall", cat: "1B", coef: 1.45 },
  "carrer de picañol": { nom: "Carrer de Picañol", cat: "2", coef: 1.28 },
  "carrer de piferrer": { nom: "Carrer de Piferrer", cat: "2", coef: 1.28 },
  "carrer de pizarro": { nom: "Carrer de Pizarro", cat: "3", coef: 1.15 },
  "carrer de plató": { nom: "Carrer de Plató", cat: "5", coef: 0.8 },
  "carrer de plaute": { nom: "Carrer de Plaute", cat: "5", coef: 0.8 },
  "carrer de plini el vell": { nom: "Carrer de Plini el Vell", cat: "3", coef: 1.15 },
  "carrer de plutarc": { nom: "Carrer de Plutarc", cat: "4", coef: 1.02 },
  "carrer de poblet": { nom: "Carrer de Poblet", cat: "5", coef: 0.8 },
  "carrer de porto": { nom: "Carrer de Porto", cat: "3", coef: 1.15 },
  "carrer de portugal": { nom: "Carrer de Portugal", cat: "2", coef: 1.28 },
  "carrer de posets": { nom: "Carrer de Posets", cat: "3", coef: 1.15 },
  "carrer de praga": { nom: "Carrer de Praga", cat: "3", coef: 1.15 },
  "carrer de prat de la riba": { nom: "Carrer de Prat de la Riba", cat: "1B", coef: 1.45, trams: [ { desDe: 1, finsA: 63, cat: "1B" }, { desDe: 65, finsA: null, cat: "4" } ] },
  "carrer de prato": { nom: "Carrer de Prato", cat: "4", coef: 1.02 },
  "carrer de primo levi": { nom: "Carrer de Primo Levi", cat: "4", coef: 1.02 },
  "carrer de prudenci": { nom: "Carrer de Prudenci", cat: "4", coef: 1.02 },
  "carrer de prudenci bertrana": { nom: "Carrer de Prudenci Bertrana", cat: "5", coef: 0.8 },
  "carrer de prullans": { nom: "Carrer de Prullans", cat: "4", coef: 1.02 },
  "carrer de pròsper de bofarull": { nom: "Carrer de Pròsper de Bofarull", cat: "3", coef: 1.15 },
  "carrer de puig antic": { nom: "Carrer de Puig Antic", cat: "4", coef: 1.02 },
  "carrer de puig i cadafalch": { nom: "Carrer de Puig i Cadafalch", cat: "4", coef: 1.02 },
  "carrer de puigcerdà": { nom: "Carrer de Puigcerdà", cat: "3", coef: 1.15 },
  "carrer de pàndols": { nom: "Carrer de Pàndols", cat: "3", coef: 1.15 },
  "carrer de pérez moya": { nom: "Carrer de Pérez Moya", cat: "3", coef: 1.15 },
  "carrer de queralt": { nom: "Carrer de Queralt", cat: "5", coef: 0.8 },
  "carrer de quevedo": { nom: "Carrer de Quevedo", cat: "3", coef: 1.15 },
  "carrer de quintana": { nom: "Carrer de Quintana", cat: "4", coef: 1.02, trams: [ { desDe: 1, finsA: null, cat: "4" }, { desDe: 2, finsA: 94, cat: "4" }, { desDe: 96, finsA: null, cat: "3" } ] },
  "carrer de rafael": { nom: "Carrer de Rafael", cat: "3", coef: 1.15 },
  "carrer de rafael durancamps": { nom: "Carrer de Rafael Durancamps", cat: "3", coef: 1.15 },
  "carrer de raimon casellas": { nom: "Carrer de Raimon Casellas", cat: "3", coef: 1.15 },
  "carrer de ramon albó": { nom: "Carrer de Ramon Albó", cat: "4", coef: 1.02 },
  "carrer de ramon amadeu": { nom: "Carrer de Ramon Amadeu", cat: "4", coef: 1.02 },
  "carrer de ramon jové": { nom: "Carrer de Ramon Jové", cat: "3", coef: 1.15 },
  "carrer de ramon llull": { nom: "Carrer de Ramon Llull", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 107, cat: "3" }, { desDe: 2, finsA: 86, cat: "3" }, { desDe: 109, finsA: null, cat: "2" }, { desDe: 88, finsA: null, cat: "2" } ] },
  "carrer de ramon sibiuda": { nom: "Carrer de Ramon Sibiuda", cat: "3", coef: 1.15 },
  "carrer de regàs": { nom: "Carrer de Regàs", cat: "2", coef: 1.28 },
  "carrer de renall": { nom: "Carrer de Renall", cat: "4", coef: 1.02 },
  "carrer de rialb": { nom: "Carrer de Rialb", cat: "4", coef: 1.02 },
  "carrer de ribot i serra": { nom: "Carrer de Ribot i Serra", cat: "2", coef: 1.28 },
  "carrer de ricard marlet": { nom: "Carrer de Ricard Marlet", cat: "3", coef: 1.15 },
  "carrer de riego": { nom: "Carrer de Riego", cat: "2", coef: 1.28 },
  "carrer de riera villaret": { nom: "Carrer de Riera Villaret", cat: "3", coef: 1.15 },
  "carrer de riu-sec": { nom: "Carrer de Riu-sec", cat: "5", coef: 0.8 },
  "carrer de roca": { nom: "Carrer de Roca", cat: "3", coef: 1.15 },
  "carrer de rocafort": { nom: "Carrer de Rocafort", cat: "2", coef: 1.28, trams: [ { desDe: 2, finsA: 64, cat: "1B" }, { desDe: 66, finsA: null, cat: "2" }, { desDe: 1, finsA: null, cat: "2" } ] },
  "carrer de rodes": { nom: "Carrer de Rodes", cat: "4", coef: 1.02 },
  "carrer de roger de flor": { nom: "Carrer de Roger de Flor", cat: "4", coef: 1.02 },
  "carrer de roma": { nom: "Carrer de Roma", cat: "3", coef: 1.15 },
  "carrer de romeu": { nom: "Carrer de Romeu", cat: "4", coef: 1.02 },
  "carrer de rosales": { nom: "Carrer de Rosales", cat: "5", coef: 0.8 },
  "carrer de roubaix": { nom: "Carrer de Roubaix", cat: "4", coef: 1.02 },
  "carrer de roís de corella": { nom: "Carrer de Roís de Corella", cat: "4", coef: 1.02 },
  "carrer de ruiz villalba": { nom: "Carrer de Ruiz Villalba", cat: "4", coef: 1.02 },
  "carrer de saboredo": { nom: "Carrer de Saboredo", cat: "4", coef: 1.02 },
  "carrer de sagunt": { nom: "Carrer de Sagunt", cat: "3", coef: 1.15 },
  "carrer de sallarès castells": { nom: "Carrer de Sallarès Castells", cat: "3", coef: 1.15 },
  "carrer de sallarès i marra": { nom: "Carrer de Sallarès i Marra", cat: "2", coef: 1.28 },
  "carrer de sallarès i pla": { nom: "Carrer de Sallarès i Pla", cat: "2", coef: 1.28 },
  "carrer de salvador espriu": { nom: "Carrer de Salvador Espriu", cat: "5", coef: 0.8 },
  "carrer de salvador seguí, el noi del sucre": { nom: "Carrer de Salvador Seguí, el Noi del Sucre", cat: "4", coef: 1.02 },
  "carrer de salvany": { nom: "Carrer de Salvany", cat: "2", coef: 1.28 },
  "carrer de salvat papasseit": { nom: "Carrer de Salvat Papasseit", cat: "3", coef: 1.15 },
  "carrer de salzburg": { nom: "Carrer de Salzburg", cat: "4", coef: 1.02 },
  "carrer de salzillo": { nom: "Carrer de Salzillo", cat: "3", coef: 1.15 },
  "carrer de sal·lusti": { nom: "Carrer de Sal·lusti", cat: "4", coef: 1.02 },
  "carrer de samuntada": { nom: "Carrer de Samuntada", cat: "2", coef: 1.28 },
  "carrer de sanaüja": { nom: "Carrer de Sanaüja", cat: "4", coef: 1.02 },
  "carrer de sant antoni": { nom: "Carrer de Sant Antoni", cat: "1B", coef: 1.45 },
  "carrer de sant baldomer": { nom: "Carrer de Sant Baldomer", cat: "2", coef: 1.28 },
  "carrer de sant cristòfol": { nom: "Carrer de Sant Cristòfol", cat: "2", coef: 1.28 },
  "carrer de sant cugat": { nom: "Carrer de Sant Cugat", cat: "1B", coef: 1.45 },
  "carrer de sant domènec": { nom: "Carrer de Sant Domènec", cat: "3", coef: 1.15 },
  "carrer de sant feliu": { nom: "Carrer de Sant Feliu", cat: "2", coef: 1.28 },
  "carrer de sant ferran": { nom: "Carrer de Sant Ferran", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: null, cat: "3" }, { desDe: 2, finsA: null, cat: "2" } ] },
  "carrer de sant francesc": { nom: "Carrer de Sant Francesc", cat: "2", coef: 1.28 },
  "carrer de sant honorat": { nom: "Carrer de Sant Honorat", cat: "3", coef: 1.15 },
  "carrer de sant isidor": { nom: "Carrer de Sant Isidor", cat: "2", coef: 1.28 },
  "carrer de sant isidre": { nom: "Carrer de Sant Isidre", cat: "2", coef: 1.28 },
  "carrer de sant jaume": { nom: "Carrer de Sant Jaume", cat: "2", coef: 1.28 },
  "carrer de sant joan": { nom: "Carrer de Sant Joan", cat: "1B", coef: 1.45 },
  "carrer de sant jordi": { nom: "Carrer de Sant Jordi", cat: "3", coef: 1.15 },
  "carrer de sant josep": { nom: "Carrer de Sant Josep", cat: "1B", coef: 1.45 },
  "carrer de sant llop": { nom: "Carrer de Sant Llop", cat: "4", coef: 1.02 },
  "carrer de sant llorenç": { nom: "Carrer de Sant Llorenç", cat: "1B", coef: 1.45 },
  "carrer de sant maties": { nom: "Carrer de Sant Maties", cat: "3", coef: 1.15 },
  "carrer de sant maurici": { nom: "Carrer de Sant Maurici", cat: "5", coef: 0.8 },
  "carrer de sant miquel": { nom: "Carrer de Sant Miquel", cat: "3", coef: 1.15 },
  "carrer de sant oleguer": { nom: "Carrer de Sant Oleguer", cat: "2", coef: 1.28 },
  "carrer de sant pau": { nom: "Carrer de Sant Pau", cat: "1B", coef: 1.45, trams: [ { desDe: 1, finsA: 101, cat: "1B" }, { desDe: 2, finsA: 60, cat: "1B" }, { desDe: 103, finsA: null, cat: "2" }, { desDe: 62, finsA: null, cat: "2" } ] },
  "carrer de sant pere": { nom: "Carrer de Sant Pere", cat: "1B", coef: 1.45 },
  "carrer de sant quirze": { nom: "Carrer de Sant Quirze", cat: "1B", coef: 1.45 },
  "carrer de sant sebastià": { nom: "Carrer de Sant Sebastià", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 123, cat: "2" }, { desDe: 2, finsA: 158, cat: "2" }, { desDe: 125, finsA: null, cat: "3" }, { desDe: 160, finsA: null, cat: "3" } ] },
  "carrer de sant vicenç": { nom: "Carrer de Sant Vicenç", cat: "2", coef: 1.28 },
  "carrer de sant vicenç de paül": { nom: "Carrer de Sant Vicenç de Paül", cat: "3", coef: 1.15 },
  "carrer de santa cecília": { nom: "Carrer de Santa Cecília", cat: "3", coef: 1.15 },
  "carrer de santa eulàlia": { nom: "Carrer de Santa Eulàlia", cat: "3", coef: 1.15 },
  "carrer de santa teresa": { nom: "Carrer de Santa Teresa", cat: "3", coef: 1.15 },
  "carrer de santanac": { nom: "Carrer de Santanac", cat: "2", coef: 1.28 },
  "carrer de santiago de compostel.la": { nom: "Carrer de Santiago de Compostel.la", cat: "5", coef: 0.8 },
  "carrer de santiago rusiñol": { nom: "Carrer de Santiago Rusiñol", cat: "3", coef: 1.15 },
  "carrer de santiago segura": { nom: "Carrer de Santiago Segura", cat: "3", coef: 1.15 },
  "carrer de santiga": { nom: "Carrer de Santiga", cat: "4", coef: 1.02 },
  "carrer de sao paulo": { nom: "Carrer de Sao Paulo", cat: "4", coef: 1.02 },
  "carrer de sarajevo": { nom: "Carrer de Sarajevo", cat: "3", coef: 1.15 },
  "carrer de sarasate": { nom: "Carrer de Sarasate", cat: "3", coef: 1.15 },
  "carrer de sardà": { nom: "Carrer de Sardà", cat: "2", coef: 1.28 },
  "carrer de sarret": { nom: "Carrer de Sarret", cat: "4", coef: 1.02 },
  "carrer de saturn": { nom: "Carrer de Saturn", cat: "5", coef: 0.8 },
  "carrer de sau": { nom: "Carrer de Sau", cat: "2", coef: 1.28 },
  "carrer de schubert": { nom: "Carrer de Schubert", cat: "3", coef: 1.15 },
  "carrer de schweitzer": { nom: "Carrer de Schweitzer", cat: "4", coef: 1.02 },
  "carrer de sicília": { nom: "Carrer de Sicília", cat: "3", coef: 1.15 },
  "carrer de sierra nevada": { nom: "Carrer de Sierra Nevada", cat: "4", coef: 1.02 },
  "carrer de simone de beauvoir": { nom: "Carrer de Simone de Beauvoir", cat: "4", coef: 1.02 },
  "carrer de simone weil": { nom: "Carrer de Simone Weil", cat: "4", coef: 1.02 },
  "carrer de sobarber": { nom: "Carrer de Sobarber", cat: "4", coef: 1.02 },
  "carrer de sol i padrís": { nom: "Carrer de Sol i Padrís", cat: "1B", coef: 1.45 },
  "carrer de sèneca": { nom: "Carrer de Sèneca", cat: "5", coef: 0.8 },
  "carrer de sòcrates": { nom: "Carrer de Sòcrates", cat: "3", coef: 1.15 },
  "carrer del bages": { nom: "Carrer del Bages", cat: "3", coef: 1.15 },
  "carrer del barranc de jonqueres": { nom: "Carrer del Barranc de Jonqueres", cat: "3", coef: 1.15 },
  "carrer del berguedà": { nom: "Carrer del Berguedà", cat: "2", coef: 1.28 },
  "carrer del besiberri": { nom: "Carrer del Besiberri", cat: "4", coef: 1.02 },
  "carrer del besòs": { nom: "Carrer del Besòs", cat: "5", coef: 0.8 },
  "carrer del blanquerna": { nom: "Carrer del Blanquerna", cat: "4", coef: 1.02 },
  "carrer del bosc": { nom: "Carrer del Bosc", cat: "3", coef: 1.15 },
  "carrer del brasil": { nom: "Carrer del Brasil", cat: "3", coef: 1.15 },
  "carrer del bruc": { nom: "Carrer del Bruc", cat: "3", coef: 1.15 },
  "carrer del cadí": { nom: "Carrer del Cadí", cat: "3", coef: 1.15 },
  "carrer del canadà": { nom: "Carrer del Canadà", cat: "4", coef: 1.02, trams: [ { desDe: 2, finsA: 22, cat: "4" }, { desDe: 1, finsA: 13, cat: "4" }, { desDe: 24, finsA: null, cat: "3" }, { desDe: 15, finsA: null, cat: "3" } ] },
  "carrer del canigó": { nom: "Carrer del Canigó", cat: "3", coef: 1.15 },
  "carrer del canonge joncar": { nom: "Carrer del Canonge Joncar", cat: "2", coef: 1.28 },
  "carrer del cardener": { nom: "Carrer del Cardener", cat: "4", coef: 1.02 },
  "carrer del carme": { nom: "Carrer del Carme", cat: "3", coef: 1.15 },
  "carrer del caucas": { nom: "Carrer del Caucas", cat: "3", coef: 1.15 },
  "carrer del claustre": { nom: "Carrer del Claustre", cat: "5", coef: 0.8 },
  "carrer del collell": { nom: "Carrer del Collell", cat: "5", coef: 0.8 },
  "carrer del comte d'urgell": { nom: "Carrer del Comte d'Urgell", cat: "3", coef: 1.15 },
  "carrer del comte de reus": { nom: "Carrer del Comte de Reus", cat: "3", coef: 1.15 },
  "carrer del comte jofre": { nom: "Carrer del Comte Jofre", cat: "3", coef: 1.15 },
  "carrer del congost": { nom: "Carrer del Congost", cat: "5", coef: 0.8 },
  "carrer del convent": { nom: "Carrer del Convent", cat: "2", coef: 1.28 },
  "carrer del corredor": { nom: "Carrer del Corredor", cat: "5", coef: 0.8 },
  "carrer del doctor almera": { nom: "Carrer del Doctor Almera", cat: "3", coef: 1.15 },
  "carrer del doctor balari": { nom: "Carrer del Doctor Balari", cat: "3", coef: 1.15 },
  "carrer del doctor balcells": { nom: "Carrer del Doctor Balcells", cat: "3", coef: 1.15 },
  "carrer del doctor bedós": { nom: "Carrer del Doctor Bedós", cat: "3", coef: 1.15 },
  "carrer del doctor codina": { nom: "Carrer del Doctor Codina", cat: "3", coef: 1.15 },
  "carrer del doctor crehueras": { nom: "Carrer del Doctor Crehueras", cat: "3", coef: 1.15 },
  "carrer del doctor gimbernat": { nom: "Carrer del Doctor Gimbernat", cat: "3", coef: 1.15 },
  "carrer del doctor mata": { nom: "Carrer del Doctor Mata", cat: "4", coef: 1.02 },
  "carrer del doctor puig": { nom: "Carrer del Doctor Puig", cat: "1B", coef: 1.45 },
  "carrer del doctor pujades": { nom: "Carrer del Doctor Pujades", cat: "3", coef: 1.15 },
  "carrer del doctor relat": { nom: "Carrer del Doctor Relat", cat: "3", coef: 1.15 },
  "carrer del doctor roges": { nom: "Carrer del Doctor Roges", cat: "3", coef: 1.15 },
  "carrer del doctor xercavins": { nom: "Carrer del Doctor Xercavins", cat: "3", coef: 1.15 },
  "carrer del duc de gandia": { nom: "Carrer del Duc de Gandia", cat: "3", coef: 1.15 },
  "carrer del duero": { nom: "Carrer del Duero", cat: "4", coef: 1.02 },
  "carrer del far": { nom: "Carrer del Far", cat: "3", coef: 1.15 },
  "carrer del flamicell": { nom: "Carrer del Flamicell", cat: "4", coef: 1.02 },
  "carrer del fluvià": { nom: "Carrer del Fluvià", cat: "5", coef: 0.8 },
  "carrer del forn": { nom: "Carrer del Forn", cat: "3", coef: 1.15 },
  "carrer del francolí": { nom: "Carrer del Francolí", cat: "4", coef: 1.02 },
  "carrer del freser": { nom: "Carrer del Freser", cat: "4", coef: 1.02 },
  "carrer del gaià": { nom: "Carrer del Gaià", cat: "5", coef: 0.8 },
  "carrer del gironès": { nom: "Carrer del Gironès", cat: "2", coef: 1.28 },
  "carrer del greco": { nom: "Carrer del Greco", cat: "4", coef: 1.02 },
  "carrer del guadalquivir": { nom: "Carrer del Guadalquivir", cat: "4", coef: 1.02 },
  "carrer del guadiana": { nom: "Carrer del Guadiana", cat: "5", coef: 0.8 },
  "carrer del guerriller alzina": { nom: "Carrer del Guerriller Alzina", cat: "5", coef: 0.8 },
  "carrer del gállego": { nom: "Carrer del Gállego", cat: "5", coef: 0.8 },
  "carrer del jardí": { nom: "Carrer del Jardí", cat: "1B", coef: 1.45 },
  "carrer del jura": { nom: "Carrer del Jura", cat: "4", coef: 1.02 },
  "carrer del llenguadoc": { nom: "Carrer del Llenguadoc", cat: "4", coef: 1.02 },
  "carrer del llobregat": { nom: "Carrer del Llobregat", cat: "5", coef: 0.8 },
  "carrer del lluçanès": { nom: "Carrer del Lluçanès", cat: "3", coef: 1.15 },
  "carrer del maestrat": { nom: "Carrer del Maestrat", cat: "3", coef: 1.15 },
  "carrer del marquès ciutadilla": { nom: "Carrer del Marquès Ciutadilla", cat: "4", coef: 1.02 },
  "carrer del marquès de comillas": { nom: "Carrer del Marquès de Comillas", cat: "2", coef: 1.28 },
  "carrer del mas amada": { nom: "Carrer del Mas Amada", cat: "4", coef: 1.02 },
  "carrer del mas baiona": { nom: "Carrer del Mas Baiona", cat: "4", coef: 1.02 },
  "carrer del mas canals": { nom: "Carrer del Mas Canals", cat: "3", coef: 1.15 },
  "carrer del mas carbó": { nom: "Carrer del Mas Carbó", cat: "5", coef: 0.8 },
  "carrer del mas ferriol": { nom: "Carrer del Mas Ferriol", cat: "5", coef: 0.8 },
  "carrer del mestre rius": { nom: "Carrer del Mestre Rius", cat: "1B", coef: 1.45 },
  "carrer del metge mir": { nom: "Carrer del Metge Mir", cat: "3", coef: 1.15 },
  "carrer del miracle": { nom: "Carrer del Miracle", cat: "5", coef: 0.8 },
  "carrer del mirador": { nom: "Carrer del Mirador", cat: "3", coef: 1.15 },
  "carrer del moianès": { nom: "Carrer del Moianès", cat: "3", coef: 1.15 },
  "carrer del moncayo": { nom: "Carrer del Moncayo", cat: "4", coef: 1.02 },
  "carrer del mont blanc": { nom: "Carrer del Mont Blanc", cat: "3", coef: 1.15 },
  "carrer del montcau": { nom: "Carrer del Montcau", cat: "3", coef: 1.15 },
  "carrer del montnegre": { nom: "Carrer del Montnegre", cat: "4", coef: 1.02 },
  "carrer del montseny": { nom: "Carrer del Montseny", cat: "3", coef: 1.15 },
  "carrer del mulhacén": { nom: "Carrer del Mulhacén", cat: "4", coef: 1.02 },
  "carrer del nerbion": { nom: "Carrer del Nerbion", cat: "5", coef: 0.8 },
  "carrer del nord": { nom: "Carrer del Nord", cat: "2", coef: 1.28 },
  "carrer del pallars": { nom: "Carrer del Pallars", cat: "3", coef: 1.15 },
  "carrer del papa pius xi": { nom: "Carrer del Papa Pius XI", cat: "2", coef: 1.28 },
  "carrer del pare clerch": { nom: "Carrer del Pare Clerch", cat: "3", coef: 1.15 },
  "carrer del pare fita": { nom: "Carrer del Pare Fita", cat: "3", coef: 1.15 },
  "carrer del pare rodamilans": { nom: "Carrer del Pare Rodamilans", cat: "3", coef: 1.15 },
  "carrer del pare rodés": { nom: "Carrer del Pare Rodés", cat: "1B", coef: 1.45 },
  "carrer del pare sallarès": { nom: "Carrer del Pare Sallarès", cat: "2", coef: 1.28 },
  "carrer del pasteral": { nom: "Carrer del Pasteral", cat: "5", coef: 0.8 },
  "carrer del pedraforca": { nom: "Carrer del Pedraforca", cat: "3", coef: 1.15 },
  "carrer del pedregar": { nom: "Carrer del Pedregar", cat: "2", coef: 1.28 },
  "carrer del penedès": { nom: "Carrer del Penedès", cat: "3", coef: 1.15 },
  "carrer del penya-segat": { nom: "Carrer del Penya-segat", cat: "3", coef: 1.15 },
  "carrer del pintor borrassà": { nom: "Carrer del Pintor Borrassà", cat: "3", coef: 1.15, trams: [ { desDe: 2, finsA: 80, cat: "3" }, { desDe: 1, finsA: 65, cat: "3" }, { desDe: 82, finsA: null, cat: "2" }, { desDe: 67, finsA: null, cat: "2" } ] },
  "carrer del pintor pradilla": { nom: "Carrer del Pintor Pradilla", cat: "5", coef: 0.8 },
  "carrer del pla del fonollar": { nom: "Carrer del Pla del Fonollar", cat: "1B", coef: 1.45 },
  "carrer del poeta folguera": { nom: "Carrer del Poeta Folguera", cat: "2", coef: 1.28 },
  "carrer del pont": { nom: "Carrer del Pont", cat: "1B", coef: 1.45 },
  "carrer del prat": { nom: "Carrer del Prat", cat: "4", coef: 1.02 },
  "carrer del priorat": { nom: "Carrer del Priorat", cat: "3", coef: 1.15 },
  "carrer del príncep de viana": { nom: "Carrer del Príncep de Viana", cat: "3", coef: 1.15 },
  "carrer del puig de la creu": { nom: "Carrer del Puig de la Creu", cat: "4", coef: 1.02 },
  "carrer del puig de mataric": { nom: "Carrer del Puig de Mataric", cat: "1B", coef: 1.45 },
  "carrer del puig major": { nom: "Carrer del Puig Major", cat: "3", coef: 1.15 },
  "carrer del puigmal": { nom: "Carrer del Puigmal", cat: "3", coef: 1.15 },
  "carrer del quebec": { nom: "Carrer del Quebec", cat: "3", coef: 1.15 },
  "carrer del quixot": { nom: "Carrer del Quixot", cat: "4", coef: 1.02 },
  "carrer del rector centena": { nom: "Carrer del Rector Centena", cat: "3", coef: 1.15 },
  "carrer del remei": { nom: "Carrer del Remei", cat: "5", coef: 0.8 },
  "carrer del rif": { nom: "Carrer del Rif", cat: "3", coef: 1.15 },
  "carrer del rigard": { nom: "Carrer del Rigard", cat: "2", coef: 1.28 },
  "carrer del ripoll": { nom: "Carrer del Ripoll", cat: "3", coef: 1.15 },
  "carrer del ripollès": { nom: "Carrer del Ripollès", cat: "3", coef: 1.15 },
  "carrer del romaní": { nom: "Carrer del Romaní", cat: "2", coef: 1.28 },
  "carrer del rosselló": { nom: "Carrer del Rosselló", cat: "3", coef: 1.15 },
  "carrer del segre": { nom: "Carrer del Segre", cat: "4", coef: 1.02 },
  "carrer del sol": { nom: "Carrer del Sol", cat: "1B", coef: 1.45 },
  "carrer dels ajustadors": { nom: "Carrer dels Ajustadors", cat: "4", coef: 1.02 },
  "carrer dels alps": { nom: "Carrer dels Alps", cat: "3", coef: 1.15 },
  "carrer dels andes": { nom: "Carrer dels Andes", cat: "3", coef: 1.15 },
  "carrer dels apenins": { nom: "Carrer dels Apenins", cat: "3", coef: 1.15 },
  "carrer dels aprenents": { nom: "Carrer dels Aprenents", cat: "3", coef: 1.15 },
  "carrer dels aprestadors": { nom: "Carrer dels Aprestadors", cat: "2", coef: 1.28 },
  "carrer dels balcans": { nom: "Carrer dels Balcans", cat: "3", coef: 1.15 },
  "carrer dels calders": { nom: "Carrer dels Calders", cat: "2", coef: 1.28 },
  "carrer dels carders": { nom: "Carrer dels Carders", cat: "3", coef: 1.15 },
  "carrer dels cardona": { nom: "Carrer dels Cardona", cat: "4", coef: 1.02 },
  "carrer dels celtibers": { nom: "Carrer dels Celtibers", cat: "5", coef: 0.8 },
  "carrer dels clavells": { nom: "Carrer dels Clavells", cat: "4", coef: 1.02 },
  "carrer dels comtes": { nom: "Carrer dels Comtes", cat: "4", coef: 1.02 },
  "carrer dels corrals nous": { nom: "Carrer dels Corrals Nous", cat: "4", coef: 1.02 },
  "carrer dels drapaires": { nom: "Carrer dels Drapaires", cat: "3", coef: 1.15 },
  "carrer dels emprius": { nom: "Carrer dels Emprius", cat: "4", coef: 1.02 },
  "carrer dels estampadors": { nom: "Carrer dels Estampadors", cat: "3", coef: 1.15 },
  "carrer dels fatxendes": { nom: "Carrer dels Fatxendes", cat: "4", coef: 1.02 },
  "carrer dels filadors": { nom: "Carrer dels Filadors", cat: "1B", coef: 1.45 },
  "carrer dels geranis": { nom: "Carrer dels Geranis", cat: "4", coef: 1.02 },
  "carrer dels germans farguell": { nom: "Carrer dels Germans Farguell", cat: "3", coef: 1.15 },
  "carrer dels lliris": { nom: "Carrer dels Lliris", cat: "4", coef: 1.02 },
  "carrer dels manyans": { nom: "Carrer dels Manyans", cat: "3", coef: 1.15 },
  "carrer dels montcada": { nom: "Carrer dels Montcada", cat: "4", coef: 1.02 },
  "carrer dels muixins": { nom: "Carrer dels Muixins", cat: "4", coef: 1.02 },
  "carrer dels pins": { nom: "Carrer dels Pins", cat: "3", coef: 1.15 },
  "carrer dels pirineus": { nom: "Carrer dels Pirineus", cat: "3", coef: 1.15 },
  "carrer dels reis catòlics": { nom: "Carrer dels Reis Catòlics", cat: "3", coef: 1.15 },
  "carrer dels salzes": { nom: "Carrer dels Salzes", cat: "3", coef: 1.15 },
  "carrer dels sentmenat": { nom: "Carrer dels Sentmenat", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 27, cat: "3" }, { desDe: 2, finsA: 30, cat: "3" }, { desDe: 29, finsA: null, cat: "4" }, { desDe: 32, finsA: null, cat: "4" } ] },
  "carrer florit": { nom: "Carrer Florit", cat: "3", coef: 1.15 },
  "carrer fàbrica dels nois buxó": { nom: "Carrer Fàbrica dels Nois Buxó", cat: "5", coef: 0.8 },
  "carrer gustavo adolfo bécquer": { nom: "Carrer Gustavo Adolfo Bécquer", cat: "3", coef: 1.15 },
  "carrer joan vinyoli i pladevall": { nom: "Carrer Joan Vinyoli i Pladevall", cat: "5", coef: 0.8 },
  "carrer johann sebastian bach": { nom: "Carrer Johann Sebastian Bach", cat: "3", coef: 1.15 },
  "carrer kurdistan": { nom: "Carrer Kurdistan", cat: "3", coef: 1.15 },
  "carrer les mares de la pl. maig": { nom: "Carrer les Mares de la Pl. Maig", cat: "4", coef: 1.02 },
  "carrer major": { nom: "Carrer Major", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: null, cat: "3" }, { desDe: 2, finsA: 148, cat: "3" }, { desDe: 150, finsA: null, cat: "1B" } ] },
  "carrer mare de déu de les neus": { nom: "Carrer Mare de Déu de les Neus", cat: "2", coef: 1.28 },
  "carrer mare de les aigües": { nom: "Carrer Mare de les Aigües", cat: "2", coef: 1.28 },
  "carrer noguera ribagorçana": { nom: "Carrer Noguera Ribagorçana", cat: "4", coef: 1.02 },
  "carrer nou": { nom: "Carrer Nou", cat: "3", coef: 1.15 },
  "carrer portal de la floresta": { nom: "Carrer Portal de la Floresta", cat: "3", coef: 1.15 },
  "carrer sant antoni maria claret": { nom: "Carrer Sant Antoni Maria Claret", cat: "1B", coef: 1.45 },
  "carrer sant ramon de penyafort": { nom: "Carrer Sant Ramon de Penyafort", cat: "4", coef: 1.02 },
  "carretera barcelona.": { nom: "Carretera Barcelona.", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 229, cat: "2" }, { desDe: 2, finsA: 444, cat: "2" }, { desDe: 231, finsA: null, cat: "1B" }, { desDe: 446, finsA: null, cat: "1B" } ] },
  "carretera de bellaterra": { nom: "Carretera de Bellaterra", cat: "2", coef: 1.28 },
  "carretera de caldes": { nom: "Carretera de Caldes", cat: "3", coef: 1.15 },
  "carretera de matadepera": { nom: "Carretera de Matadepera", cat: "4", coef: 1.02 },
  "carretera de molins de rei": { nom: "Carretera de Molins de Rei", cat: "2", coef: 1.28, trams: [ { desDe: 2, finsA: 70, cat: "2" }, { desDe: 1, finsA: 71, cat: "2" }, { desDe: 72, finsA: 186, cat: "3" }, { desDe: 73, finsA: 175, cat: "3" }, { desDe: 188, finsA: null, cat: "2" }, { desDe: 177, finsA: null, cat: "2" } ] },
  "carretera de mollet": { nom: "Carretera de Mollet", cat: "3", coef: 1.15 },
  "carretera de prats lluçanès": { nom: "Carretera de Prats Lluçanès", cat: "1B", coef: 1.45, trams: [ { desDe: 1, finsA: 199, cat: "1B" }, { desDe: 2, finsA: 228, cat: "1B" }, { desDe: 201, finsA: null, cat: "3" }, { desDe: 230, finsA: null, cat: "3" } ] },
  "illa bella": { nom: "Illa Bella", cat: "3", coef: 1.15 },
  "illa digna": { nom: "Illa Digna", cat: "3", coef: 1.15 },
  "illa magna": { nom: "Illa Magna", cat: "4", coef: 1.02 },
  "illa noble": { nom: "Illa Noble", cat: "4", coef: 1.02 },
  "illa sacra": { nom: "Illa Sacra", cat: "3", coef: 1.15 },
  "illa àurea": { nom: "Illa Àurea", cat: "4", coef: 1.02 },
  "jardinets dels gegants de gràcia": { nom: "Jardinets dels Gegants de Gràcia", cat: "3", coef: 1.15 },
  "jardí de dolors monserdà": { nom: "Jardí de Dolors Monserdà", cat: "3", coef: 1.15 },
  "jardí de rosa leveroni": { nom: "Jardí de Rosa Leveroni", cat: "3", coef: 1.15 },
  "jardí de salvador sarrà": { nom: "Jardí de Salvador Sarrà", cat: "3", coef: 1.15 },
  "mirador amical mauthausen": { nom: "Mirador Amical Mauthausen", cat: "5", coef: 0.8 },
  "parc de catalunya": { nom: "Parc de Catalunya", cat: "1A", coef: 1.5 },
  "passatge d'edgardo ricetti": { nom: "Passatge d'Edgardo Ricetti", cat: "2", coef: 1.28 },
  "passatge d'en sangés": { nom: "Passatge d'en Sangés", cat: "5", coef: 0.8 },
  "passatge d'ignasi iglésias": { nom: "Passatge d'Ignasi Iglésias", cat: "4", coef: 1.02 },
  "passatge d'àsdrubal": { nom: "Passatge d'Àsdrubal", cat: "4", coef: 1.02 },
  "passatge de bellaterra": { nom: "Passatge de Bellaterra", cat: "5", coef: 0.8 },
  "passatge de bellpuig": { nom: "Passatge de Bellpuig", cat: "3", coef: 1.15 },
  "passatge de besalú": { nom: "Passatge de Besalú", cat: "2", coef: 1.28 },
  "passatge de cabrera": { nom: "Passatge de Cabrera", cat: "3", coef: 1.15 },
  "passatge de can torres del pla": { nom: "Passatge de Can Torres del Pla", cat: "4", coef: 1.02 },
  "passatge de carles v": { nom: "Passatge de Carles V", cat: "4", coef: 1.02 },
  "passatge de clavé": { nom: "Passatge de Clavé", cat: "3", coef: 1.15 },
  "passatge de colom": { nom: "Passatge de Colom", cat: "3", coef: 1.15 },
  "passatge de cotlliure": { nom: "Passatge de Cotlliure", cat: "4", coef: 1.02 },
  "passatge de feliu pla": { nom: "Passatge de Feliu Pla", cat: "3", coef: 1.15 },
  "passatge de ferran llàcer": { nom: "Passatge de Ferran Llàcer", cat: "3", coef: 1.15 },
  "passatge de foix": { nom: "Passatge de Foix", cat: "4", coef: 1.02 },
  "passatge de fraser lawton": { nom: "Passatge de Fraser Lawton", cat: "5", coef: 0.8 },
  "passatge de gallifa": { nom: "Passatge de Gallifa", cat: "3", coef: 1.15 },
  "passatge de gertrudis artigas": { nom: "Passatge de Gertrudis Artigas", cat: "4", coef: 1.02 },
  "passatge de grècia": { nom: "Passatge de Grècia", cat: "4", coef: 1.02 },
  "passatge de guanta": { nom: "Passatge de Guanta", cat: "3", coef: 1.15 },
  "passatge de joan xxiii": { nom: "Passatge de Joan XXIII", cat: "2", coef: 1.28 },
  "passatge de jonc": { nom: "Passatge de Jonc", cat: "2", coef: 1.28 },
  "passatge de jonqueres": { nom: "Passatge de Jonqueres", cat: "3", coef: 1.15 },
  "passatge de l'albaicín": { nom: "Passatge de l'Albaicín", cat: "4", coef: 1.02 },
  "passatge de l'alguer": { nom: "Passatge de l'Alguer", cat: "2", coef: 1.28 },
  "passatge de l'almirall marquet": { nom: "Passatge de l'Almirall Marquet", cat: "3", coef: 1.15 },
  "passatge de l'ebre": { nom: "Passatge de l'Ebre", cat: "5", coef: 0.8 },
  "passatge de l'enginyer playà": { nom: "Passatge de l'Enginyer Playà", cat: "4", coef: 1.02 },
  "passatge de l'estudi": { nom: "Passatge de l'Estudi", cat: "3", coef: 1.15 },
  "passatge de la font del saüc": { nom: "Passatge de la Font del Saüc", cat: "3", coef: 1.15 },
  "passatge de la granja del pas": { nom: "Passatge de la Granja del Pas", cat: "3", coef: 1.15 },
  "passatge de la mirada": { nom: "Passatge de la Mirada", cat: "3", coef: 1.15 },
  "passatge de la riereta": { nom: "Passatge de la Riereta", cat: "1B", coef: 1.45 },
  "passatge de les columbretes": { nom: "Passatge de les Columbretes", cat: "4", coef: 1.02 },
  "passatge de les escoles": { nom: "Passatge de les Escoles", cat: "3", coef: 1.15 },
  "passatge de les moreres": { nom: "Passatge de les Moreres", cat: "3", coef: 1.15 },
  "passatge de lluís mimó": { nom: "Passatge de Lluís Mimó", cat: "1B", coef: 1.45 },
  "passatge de marco polo": { nom: "Passatge de Marco Polo", cat: "4", coef: 1.02 },
  "passatge de miquel carreras": { nom: "Passatge de Miquel Carreras", cat: "5", coef: 0.8 },
  "passatge de moratín": { nom: "Passatge de Moratín", cat: "2", coef: 1.28 },
  "passatge de morella": { nom: "Passatge de Morella", cat: "3", coef: 1.15 },
  "passatge de mozart": { nom: "Passatge de Mozart", cat: "4", coef: 1.02 },
  "passatge de paderna": { nom: "Passatge de Paderna", cat: "3", coef: 1.15 },
  "passatge de pere santfeliu": { nom: "Passatge de Pere Santfeliu", cat: "5", coef: 0.8 },
  "passatge de pere serra": { nom: "Passatge de Pere Serra", cat: "3", coef: 1.15 },
  "passatge de pineta": { nom: "Passatge de Pineta", cat: "3", coef: 1.15 },
  "passatge de puig i pujol": { nom: "Passatge de Puig i Pujol", cat: "4", coef: 1.02 },
  "passatge de puigcerdà": { nom: "Passatge de Puigcerdà", cat: "3", coef: 1.15 },
  "passatge de ribatallada": { nom: "Passatge de Ribatallada", cat: "3", coef: 1.15 },
  "passatge de rodoreda": { nom: "Passatge de Rodoreda", cat: "3", coef: 1.15 },
  "passatge de rovira i virgili": { nom: "Passatge de Rovira i Virgili", cat: "4", coef: 1.02 },
  "passatge de sa dragonera": { nom: "Passatge de sa Dragonera", cat: "3", coef: 1.15 },
  "passatge de santa isabel": { nom: "Passatge de Santa Isabel", cat: "3", coef: 1.15 },
  "passatge de santa perpètua": { nom: "Passatge de Santa Perpètua", cat: "3", coef: 1.15 },
  "passatge del capitoli": { nom: "Passatge del Capitoli", cat: "3", coef: 1.15 },
  "passatge del doctor llonch": { nom: "Passatge del Doctor Llonch", cat: "3", coef: 1.15 },
  "passatge del guadalete": { nom: "Passatge del Guadalete", cat: "3", coef: 1.15 },
  "passatge del notari herrán": { nom: "Passatge del Notari Herrán", cat: "4", coef: 1.02 },
  "passatge del pare rodés": { nom: "Passatge del Pare Rodés", cat: "3", coef: 1.15 },
  "passatge del pou": { nom: "Passatge del Pou", cat: "5", coef: 0.8 },
  "passatge del progrés": { nom: "Passatge del Progrés", cat: "2", coef: 1.28 },
  "passatge del riu tort": { nom: "Passatge del Riu Tort", cat: "3", coef: 1.15 },
  "passatge dels fenicis": { nom: "Passatge dels Fenicis", cat: "5", coef: 0.8 },
  "passatge dels rifós": { nom: "Passatge dels Rifós", cat: "3", coef: 1.15 },
  "passatge la colla de sabadell": { nom: "Passatge la Colla de Sabadell", cat: "3", coef: 1.15 },
  "passatge masia de can borgonyó": { nom: "Passatge Masia de Can Borgonyó", cat: "2", coef: 1.28 },
  "passatge mossèn carles cardó": { nom: "Passatge Mossèn Carles Cardó", cat: "4", coef: 1.02 },
  "passatge sta. maria l'estany": { nom: "Passatge Sta. Maria l'Estany", cat: "5", coef: 0.8 },
  "passeig d'espronceda": { nom: "Passeig d'Espronceda", cat: "1B", coef: 1.45 },
  "passeig de béjar": { nom: "Passeig de Béjar", cat: "3", coef: 1.15 },
  "passeig de cal jepó": { nom: "Passeig de Cal Jepó", cat: "3", coef: 1.15 },
  "passeig de can feu": { nom: "Passeig de Can Feu", cat: "3", coef: 1.15, trams: [ { desDe: 2, finsA: 100, cat: "3" }, { desDe: 1, finsA: 15, cat: "3" }, { desDe: 17, finsA: null, cat: "2" }, { desDe: 102, finsA: null, cat: "2" } ] },
  "passeig de clementina arderiu": { nom: "Passeig de Clementina Arderiu", cat: "1A", coef: 1.5 },
  "passeig de fleming": { nom: "Passeig de Fleming", cat: "2", coef: 1.28 },
  "passeig de gaudí": { nom: "Passeig de Gaudí", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 19, cat: "2" }, { desDe: 2, finsA: null, cat: "3" }, { desDe: 21, finsA: null, cat: "3" } ] },
  "passeig de la plaça major": { nom: "Passeig de la Plaça Major", cat: "1B", coef: 1.45 },
  "passeig de la revolució": { nom: "Passeig de la Revolució", cat: "4", coef: 1.02 },
  "passeig de manresa": { nom: "Passeig de Manresa", cat: "1B", coef: 1.45 },
  "passeig de rubió i ors": { nom: "Passeig de Rubió i Ors", cat: "2", coef: 1.28 },
  "passeig de sant bernat": { nom: "Passeig de Sant Bernat", cat: "2", coef: 1.28 },
  "passeig de sant oleguer": { nom: "Passeig de Sant Oleguer", cat: "3", coef: 1.15 },
  "passeig de sant pau de riu-sec": { nom: "Passeig de Sant Pau de Riu-Sec", cat: "1B", coef: 1.45 },
  "passeig del comerç": { nom: "Passeig del Comerç", cat: "1B", coef: 1.45, trams: [ { desDe: 1, finsA: null, cat: "1B" }, { desDe: 2, finsA: 18, cat: "1B" }, { desDe: 20, finsA: 102, cat: "2" }, { desDe: 104, finsA: null, cat: "1B" } ] },
  "passeig del dos de maig": { nom: "Passeig del Dos de Maig", cat: "3", coef: 1.15 },
  "passeig dels almogàvers": { nom: "Passeig dels Almogàvers", cat: "1B", coef: 1.45 },
  "pgon. d'espronceda": { nom: "Pgon. d'Espronceda", cat: "4", coef: 1.02 },
  "pgon. dels merinals": { nom: "Pgon. dels Merinals", cat: "2", coef: 1.28 },
  "placeta del pedregar": { nom: "Placeta del Pedregar", cat: "2", coef: 1.28 },
  "plaça assemblea de catalunya": { nom: "Plaça Assemblea de Catalunya", cat: "3", coef: 1.15 },
  "plaça carrasco i formiguera": { nom: "Plaça Carrasco i Formiguera", cat: "3", coef: 1.15 },
  "plaça comtal": { nom: "Plaça Comtal", cat: "2", coef: 1.28 },
  "plaça d'alexandria": { nom: "Plaça d'Alexandria", cat: "3", coef: 1.15 },
  "plaça d'amadeu aragay": { nom: "Plaça d'Amadeu Aragay", cat: "2", coef: 1.28 },
  "plaça d'anselm clavé": { nom: "Plaça d'Anselm Clavé", cat: "4", coef: 1.02 },
  "plaça d'antonio machado": { nom: "Plaça d'Antonio Machado", cat: "3", coef: 1.15 },
  "plaça d'atenes": { nom: "Plaça d'Atenes", cat: "2", coef: 1.28 },
  "plaça d'aurora bertrana": { nom: "Plaça d'Aurora Bertrana", cat: "1B", coef: 1.45 },
  "plaça d'enric morera": { nom: "Plaça d'Enric Morera", cat: "3", coef: 1.15 },
  "plaça d'entrepeñas": { nom: "Plaça d'Entrepeñas", cat: "4", coef: 1.02 },
  "plaça d'envalira": { nom: "Plaça d'Envalira", cat: "2", coef: 1.28 },
  "plaça d'espanya": { nom: "Plaça d'Espanya", cat: "1B", coef: 1.45 },
  "plaça d'hostafrancs": { nom: "Plaça d'Hostafrancs", cat: "1B", coef: 1.45 },
  "plaça d'indíbil i mandoni": { nom: "Plaça d'Indíbil i Mandoni", cat: "3", coef: 1.15 },
  "plaça d'istambul": { nom: "Plaça d'Istambul", cat: "2", coef: 1.28 },
  "plaça d'olímpia": { nom: "Plaça d'Olímpia", cat: "2", coef: 1.28 },
  "plaça d'ovidi montllor": { nom: "Plaça d'Ovidi Montllor", cat: "3", coef: 1.15 },
  "plaça de barcelona": { nom: "Plaça de Barcelona", cat: "2", coef: 1.28 },
  "plaça de beatriu de dia": { nom: "Plaça de Beatriu de Dia", cat: "2", coef: 1.28 },
  "plaça de benjamín garcía": { nom: "Plaça de Benjamín García", cat: "3", coef: 1.15 },
  "plaça de bosch i gimpera": { nom: "Plaça de Bosch i Gimpera", cat: "2", coef: 1.28 },
  "plaça de ca n'oriac": { nom: "Plaça de Ca n'Oriac", cat: "4", coef: 1.02 },
  "plaça de cambó": { nom: "Plaça de Cambó", cat: "3", coef: 1.15 },
  "plaça de can ferran": { nom: "Plaça de Can Ferran", cat: "4", coef: 1.02 },
  "plaça de can n'hereu": { nom: "Plaça de Can n'Hereu", cat: "4", coef: 1.02 },
  "plaça de can piteu": { nom: "Plaça de Can Piteu", cat: "4", coef: 1.02 },
  "plaça de carme montoriol": { nom: "Plaça de Carme Montoriol", cat: "1B", coef: 1.45 },
  "plaça de castelao": { nom: "Plaça de Castelao", cat: "4", coef: 1.02 },
  "plaça de catalunya": { nom: "Plaça de Catalunya", cat: "1A", coef: 1.5 },
  "plaça de clara campoamor": { nom: "Plaça de Clara Campoamor", cat: "2", coef: 1.28 },
  "plaça de conrad crespí": { nom: "Plaça de Conrad Crespí", cat: "3", coef: 1.15 },
  "plaça de copèrnic": { nom: "Plaça de Copèrnic", cat: "3", coef: 1.15 },
  "plaça de cristóbal ramos": { nom: "Plaça de Cristóbal Ramos", cat: "4", coef: 1.02 },
  "plaça de còrdova": { nom: "Plaça de Còrdova", cat: "2", coef: 1.28 },
  "plaça de dolores ibárruri": { nom: "Plaça de Dolores Ibárruri", cat: "2", coef: 1.28 },
  "plaça de dolors miralles": { nom: "Plaça de Dolors Miralles", cat: "1B", coef: 1.45 },
  "plaça de fidela renom": { nom: "Plaça de Fidela Renom", cat: "1B", coef: 1.45 },
  "plaça de fiveller": { nom: "Plaça de Fiveller", cat: "5", coef: 0.8 },
  "plaça de fontanella": { nom: "Plaça de Fontanella", cat: "3", coef: 1.15 },
  "plaça de frederic mompou": { nom: "Plaça de Frederic Mompou", cat: "2", coef: 1.28 },
  "plaça de frederica montseny": { nom: "Plaça de Frederica Montseny", cat: "4", coef: 1.02 },
  "plaça de gabriel morvay": { nom: "Plaça de Gabriel Morvay", cat: "3", coef: 1.15 },
  "plaça de gabriel pujol": { nom: "Plaça de Gabriel Pujol", cat: "1B", coef: 1.45 },
  "plaça de galileu": { nom: "Plaça de Galileu", cat: "3", coef: 1.15 },
  "plaça de granada": { nom: "Plaça de Granada", cat: "3", coef: 1.15 },
  "plaça de granados": { nom: "Plaça de Granados", cat: "1B", coef: 1.45 },
  "plaça de granollers": { nom: "Plaça de Granollers", cat: "3", coef: 1.15 },
  "plaça de jaume girabau": { nom: "Plaça de Jaume Girabau", cat: "3", coef: 1.15 },
  "plaça de jaume viladoms": { nom: "Plaça de Jaume Viladoms", cat: "3", coef: 1.15 },
  "plaça de jean piaget": { nom: "Plaça de Jean Piaget", cat: "4", coef: 1.02 },
  "plaça de joan brossa": { nom: "Plaça de Joan Brossa", cat: "2", coef: 1.28 },
  "plaça de joan coromines": { nom: "Plaça de Joan Coromines", cat: "1B", coef: 1.45 },
  "plaça de joan fuster": { nom: "Plaça de Joan Fuster", cat: "2", coef: 1.28 },
  "plaça de joan morral": { nom: "Plaça de Joan Morral", cat: "3", coef: 1.15 },
  "plaça de joan oliu": { nom: "Plaça de Joan Oliu", cat: "2", coef: 1.28 },
  "plaça de joan timoneda": { nom: "Plaça de Joan Timoneda", cat: "2", coef: 1.28 },
  "plaça de joan vilatobà": { nom: "Plaça de Joan Vilatobà", cat: "5", coef: 0.8 },
  "plaça de jonqueres": { nom: "Plaça de Jonqueres", cat: "2", coef: 1.28 },
  "plaça de josep esquirol": { nom: "Plaça de Josep Esquirol", cat: "3", coef: 1.15 },
  "plaça de josep masllovet": { nom: "Plaça de Josep Masllovet", cat: "4", coef: 1.02 },
  "plaça de josep rosell": { nom: "Plaça de Josep Rosell", cat: "3", coef: 1.15 },
  "plaça de karl marx": { nom: "Plaça de Karl Marx", cat: "4", coef: 1.02 },
  "plaça de l'alcalde miralles": { nom: "Plaça de l'Alcalde Miralles", cat: "1B", coef: 1.45 },
  "plaça de l'amistat": { nom: "Plaça de l'Amistat", cat: "3", coef: 1.15 },
  "plaça de l'angel": { nom: "Plaça de l'Angel", cat: "1B", coef: 1.45 },
  "plaça de l'escorxador": { nom: "Plaça de l'Escorxador", cat: "3", coef: 1.15 },
  "plaça de l'imperial": { nom: "Plaça de l'Imperial", cat: "1B", coef: 1.45 },
  "plaça de la concòrdia": { nom: "Plaça de la Concòrdia", cat: "1B", coef: 1.45 },
  "plaça de la creu alta": { nom: "Plaça de la Creu Alta", cat: "3", coef: 1.15 },
  "plaça de la creu de barberà": { nom: "Plaça de la Creu de Barberà", cat: "3", coef: 1.15 },
  "plaça de la fuensanta": { nom: "Plaça de la Fuensanta", cat: "4", coef: 1.02 },
  "plaça de la garona": { nom: "Plaça de la Garona", cat: "3", coef: 1.15 },
  "plaça de la llibertat": { nom: "Plaça de la Llibertat", cat: "2", coef: 1.28 },
  "plaça de la marca hispànica": { nom: "Plaça de la Marca Hispànica", cat: "3", coef: 1.15 },
  "plaça de la nova creu": { nom: "Plaça de la Nova Creu", cat: "4", coef: 1.02 },
  "plaça de la pau": { nom: "Plaça de la Pau", cat: "2", coef: 1.28 },
  "plaça de la primavera": { nom: "Plaça de la Primavera", cat: "3", coef: 1.15 },
  "plaça de la providència": { nom: "Plaça de la Providència", cat: "2", coef: 1.28 },
  "plaça de la sardana": { nom: "Plaça de la Sardana", cat: "2", coef: 1.28 },
  "plaça de les acàcies": { nom: "Plaça de les Acàcies", cat: "2", coef: 1.28 },
  "plaça de les alzines": { nom: "Plaça de les Alzines", cat: "2", coef: 1.28 },
  "plaça de les corts catalanes": { nom: "Plaça de les Corts Catalanes", cat: "4", coef: 1.02 },
  "plaça de les dones": { nom: "Plaça de les Dones", cat: "4", coef: 1.02 },
  "plaça de les dones del tèxtil": { nom: "Plaça de les Dones del Tèxtil", cat: "2", coef: 1.28 },
  "plaça de les filipines": { nom: "Plaça de les Filipines", cat: "3", coef: 1.15 },
  "plaça de les illes cies": { nom: "Plaça de les Illes Cies", cat: "3", coef: 1.15 },
  "plaça de les medes": { nom: "Plaça de les Medes", cat: "3", coef: 1.15 },
  "plaça de les pitiüses": { nom: "Plaça de les Pitiüses", cat: "3", coef: 1.15 },
  "plaça de les tres torres": { nom: "Plaça de les Tres Torres", cat: "3", coef: 1.15 },
  "plaça de les àvies i els avis": { nom: "Plaça de les Àvies i els Avis", cat: "3", coef: 1.15 },
  "plaça de lisboa": { nom: "Plaça de Lisboa", cat: "2", coef: 1.28 },
  "plaça de llonch i salas": { nom: "Plaça de Llonch i Salas", cat: "2", coef: 1.28 },
  "plaça de lluís casassas": { nom: "Plaça de Lluís Casassas", cat: "1B", coef: 1.45 },
  "plaça de lluís mas": { nom: "Plaça de Lluís Mas", cat: "3", coef: 1.15 },
  "plaça de lluís papell": { nom: "Plaça de Lluís Papell", cat: "1B", coef: 1.45 },
  "plaça de llívia": { nom: "Plaça de Llívia", cat: "2", coef: 1.28 },
  "plaça de m. aurèlia capmany": { nom: "Plaça de M. Aurèlia Capmany", cat: "1B", coef: 1.45 },
  "plaça de m. crusafont i pairó": { nom: "Plaça de M. Crusafont i Pairó", cat: "1B", coef: 1.45 },
  "plaça de madrid": { nom: "Plaça de Madrid", cat: "2", coef: 1.28 },
  "plaça de magdalena calonge": { nom: "Plaça de Magdalena Calonge", cat: "5", coef: 0.8 },
  "plaça de magí marcé": { nom: "Plaça de Magí Marcé", cat: "2", coef: 1.28 },
  "plaça de malniu": { nom: "Plaça de Malniu", cat: "5", coef: 0.8 },
  "plaça de margarida xirgu": { nom: "Plaça de Margarida Xirgu", cat: "2", coef: 1.28 },
  "plaça de marquilles": { nom: "Plaça de Marquilles", cat: "2", coef: 1.28 },
  "plaça de montellà": { nom: "Plaça de Montellà", cat: "2", coef: 1.28 },
  "plaça de montevideo": { nom: "Plaça de Montevideo", cat: "4", coef: 1.02 },
  "plaça de montserrat roig": { nom: "Plaça de Montserrat Roig", cat: "2", coef: 1.28 },
  "plaça de mossèn geis": { nom: "Plaça de Mossèn Geis", cat: "2", coef: 1.28 },
  "plaça de navacerrada": { nom: "Plaça de Navacerrada", cat: "2", coef: 1.28 },
  "plaça de patro agulló": { nom: "Plaça de Patro Agulló", cat: "3", coef: 1.15 },
  "plaça de pau trullà": { nom: "Plaça de Pau Trullà", cat: "3", coef: 1.15 },
  "plaça de pep ventura": { nom: "Plaça de Pep Ventura", cat: "3", coef: 1.15 },
  "plaça de pere gomar": { nom: "Plaça de Pere Gomar", cat: "2", coef: 1.28 },
  "plaça de picasso": { nom: "Plaça de Picasso", cat: "3", coef: 1.15 },
  "plaça de pompeu fabra": { nom: "Plaça de Pompeu Fabra", cat: "4", coef: 1.02 },
  "plaça de ramon llull": { nom: "Plaça de Ramon Llull", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 6, cat: "3" }, { desDe: 11, finsA: 13, cat: "3" }, { desDe: 14, finsA: null, cat: "2" }, { desDe: 7, finsA: 10, cat: "2" } ] },
  "plaça de ricard simó bach": { nom: "Plaça de Ricard Simó Bach", cat: "1B", coef: 1.45 },
  "plaça de rogelio soto": { nom: "Plaça de Rogelio Soto", cat: "3", coef: 1.15 },
  "plaça de rosalía de castro": { nom: "Plaça de Rosalía de Castro", cat: "3", coef: 1.15 },
  "plaça de ròmul": { nom: "Plaça de Ròmul", cat: "3", coef: 1.15 },
  "plaça de salvador allende": { nom: "Plaça de Salvador Allende", cat: "3", coef: 1.15 },
  "plaça de sant agustí": { nom: "Plaça de Sant Agustí", cat: "2", coef: 1.28 },
  "plaça de sant jaume": { nom: "Plaça de Sant Jaume", cat: "2", coef: 1.28 },
  "plaça de sant joan": { nom: "Plaça de Sant Joan", cat: "2", coef: 1.28 },
  "plaça de sant pius x": { nom: "Plaça de Sant Pius X", cat: "3", coef: 1.15 },
  "plaça de sant roc": { nom: "Plaça de Sant Roc", cat: "1B", coef: 1.45 },
  "plaça de sant salvador": { nom: "Plaça de Sant Salvador", cat: "3", coef: 1.15 },
  "plaça de sardà i salvany": { nom: "Plaça de Sardà i Salvany", cat: "3", coef: 1.15 },
  "plaça del cardener": { nom: "Plaça del Cardener", cat: "4", coef: 1.02 },
  "plaça del cònsol oromir": { nom: "Plaça del Cònsol Oromir", cat: "3", coef: 1.15 },
  "plaça del doctor robert": { nom: "Plaça del Doctor Robert", cat: "1B", coef: 1.45 },
  "plaça del farell": { nom: "Plaça del Farell", cat: "3", coef: 1.15 },
  "plaça del forjador": { nom: "Plaça del Forjador", cat: "3", coef: 1.15 },
  "plaça del gas": { nom: "Plaça del Gas", cat: "2", coef: 1.28 },
  "plaça del mar": { nom: "Plaça del Mar", cat: "3", coef: 1.15 },
  "plaça del mercat": { nom: "Plaça del Mercat", cat: "2", coef: 1.28 },
  "plaça del mestre": { nom: "Plaça del Mestre", cat: "4", coef: 1.02 },
  "plaça del mestre olivella": { nom: "Plaça del Mestre Olivella", cat: "3", coef: 1.15 },
  "plaça del mestre planas": { nom: "Plaça del Mestre Planas", cat: "3", coef: 1.15 },
  "plaça del mil·lenari": { nom: "Plaça del Mil·lenari", cat: "3", coef: 1.15 },
  "plaça del paraire deganet": { nom: "Plaça del Paraire Deganet", cat: "2", coef: 1.28 },
  "plaça del perú": { nom: "Plaça del Perú", cat: "3", coef: 1.15 },
  "plaça del pi": { nom: "Plaça del Pi", cat: "2", coef: 1.28 },
  "plaça del pou": { nom: "Plaça del Pou", cat: "5", coef: 0.8 },
  "plaça del primer de maig": { nom: "Plaça del Primer de Maig", cat: "3", coef: 1.15 },
  "plaça del principat": { nom: "Plaça del Principat", cat: "3", coef: 1.15 },
  "plaça del sastre": { nom: "Plaça del Sastre", cat: "3", coef: 1.15 },
  "plaça del sol": { nom: "Plaça del Sol", cat: "5", coef: 0.8 },
  "plaça dels avets": { nom: "Plaça dels Avets", cat: "3", coef: 1.15 },
  "plaça dels castanyers": { nom: "Plaça dels Castanyers", cat: "2", coef: 1.28 },
  "plaça dels dolors": { nom: "Plaça dels Dolors", cat: "2", coef: 1.28 },
  "plaça dels jocs florals": { nom: "Plaça dels Jocs Florals", cat: "4", coef: 1.02 },
  "plaça dels lledoners": { nom: "Plaça dels Lledoners", cat: "2", coef: 1.28 },
  "plaça dels llorers": { nom: "Plaça dels Llorers", cat: "2", coef: 1.28 },
  "plaça dels merinals": { nom: "Plaça dels Merinals", cat: "3", coef: 1.15 },
  "plaça dels mèdici": { nom: "Plaça dels Mèdici", cat: "3", coef: 1.15 },
  "plaça dels plàtans": { nom: "Plaça dels Plàtans", cat: "2", coef: 1.28 },
  "plaça dels pollancres": { nom: "Plaça dels Pollancres", cat: "2", coef: 1.28 },
  "plaça dels roures": { nom: "Plaça dels Roures", cat: "2", coef: 1.28 },
  "plaça dels àlbers": { nom: "Plaça dels Àlbers", cat: "2", coef: 1.28 },
  "plaça dtrs. banting i best": { nom: "Plaça Dtrs. Banting i Best", cat: "3", coef: 1.15 },
  "plaça escaldes-engordany": { nom: "Plaça Escaldes-Engordany", cat: "3", coef: 1.15 },
  "plaça gremial": { nom: "Plaça Gremial", cat: "3", coef: 1.15 },
  "plaça laietana": { nom: "Plaça Laietana", cat: "3", coef: 1.15 },
  "plaça oscar arnulfo romero": { nom: "Plaça Oscar Arnulfo Romero", cat: "3", coef: 1.15 },
  "pujada de la salut": { nom: "Pujada de la Salut", cat: "5", coef: 0.8 },
  "racó del campanar": { nom: "Racó del Campanar", cat: "1B", coef: 1.45 },
  "rambla": { nom: "Rambla", cat: "1B", coef: 1.45 },
  "raval d'amàlia": { nom: "Raval d'Amàlia", cat: "4", coef: 1.02 },
  "raval de dins": { nom: "Raval de Dins", cat: "2", coef: 1.28 },
  "raval de fora": { nom: "Raval de Fora", cat: "2", coef: 1.28 },
  "rbla. d'ibèria": { nom: "Rbla. d'Ibèria", cat: "2", coef: 1.28, trams: [ { desDe: 1, finsA: 103, cat: "2" }, { desDe: 2, finsA: 82, cat: "2" }, { desDe: 105, finsA: 145, cat: "3" }, { desDe: 84, finsA: 110, cat: "3" }, { desDe: 147, finsA: null, cat: "2" }, { desDe: 112, finsA: null, cat: "2" } ] },
  "ronda d'europa": { nom: "Ronda d'Europa", cat: "2", coef: 1.28 },
  "ronda d'oliana": { nom: "Ronda d'Oliana", cat: "5", coef: 0.8 },
  "ronda d'orient": { nom: "Ronda d'Orient", cat: "4", coef: 1.02 },
  "ronda de bellesguard": { nom: "Ronda de Bellesguard", cat: "2", coef: 1.28 },
  "ronda de collsalarca": { nom: "Ronda de Collsalarca", cat: "3", coef: 1.15, trams: [ { desDe: 1, finsA: 207, cat: "3" }, { desDe: 2, finsA: 78, cat: "3" }, { desDe: 80, finsA: null, cat: "1B" }, { desDe: 209, finsA: null, cat: "1B" } ] },
  "ronda de guadalupe": { nom: "Ronda de Guadalupe", cat: "5", coef: 0.8 },
  "ronda de jean monnet": { nom: "Ronda de Jean Monnet", cat: "3", coef: 1.15 },
  "ronda de l'ebre": { nom: "Ronda de l'Ebre", cat: "5", coef: 0.8 },
  "ronda de la roureda": { nom: "Ronda de la Roureda", cat: "3", coef: 1.15 },
  "ronda de maria gispert": { nom: "Ronda de Maria Gispert", cat: "4", coef: 1.02 },
  "ronda de navacerrada": { nom: "Ronda de Navacerrada", cat: "2", coef: 1.28 },
  "ronda de pau vila": { nom: "Ronda de Pau Vila", cat: "3", coef: 1.15 },
  "ronda de ponent": { nom: "Ronda de Ponent", cat: "1B", coef: 1.45 },
  "ronda de santa maria": { nom: "Ronda de Santa Maria", cat: "2", coef: 1.28 },
  "travessera de l'església": { nom: "Travessera de l'Església", cat: "1B", coef: 1.45 },
  "travessera de la borriana": { nom: "Travessera de la Borriana", cat: "2", coef: 1.28 },
  "travessera del flamicell": { nom: "Travessera del Flamicell", cat: "3", coef: 1.15 },
  "via alexandra": { nom: "Via Alexandra", cat: "2", coef: 1.28 },
  "via augusta": { nom: "Via Augusta", cat: "3", coef: 1.15 },
  "via aurèlia": { nom: "Via Aurèlia", cat: "1B", coef: 1.45 },
  "via de massagué": { nom: "Via de Massagué", cat: "1B", coef: 1.45 },
  "via favència": { nom: "Via Favència", cat: "3", coef: 1.15 },
  "via júlia": { nom: "Via Júlia", cat: "3", coef: 1.15 },
};

// Valida el format del número de portal introduït.
// NOTA IMPORTANT: l'annex oficial de trams (Ordenança 2.2) defineix rangs de categoria
// fiscal, no un cens real d'adreces; els seus trams són gairebé sempre oberts per dalt
// (p. ex. "del 24 en endavant") i alguns carrers tenen buits puntuals d'un dels dos
// costats (parell/imparell) que es resolen per categoria predominant (vegeu secció 1 de
// documentacio_base_taxes.md). Per tant NO es pot determinar amb certesa quin número de
// portal "no existeix" físicament a partir d'aquestes dades; només es pot garantir que
// el valor introduït tingui un format vàlid (enter positiu). Bloquejar més enllà
// d'això (p. ex. per sota d'un mínim de tram) generaria falsos negatius en carrers reals
// (detectat en proves: Plaça de Ramon Llull, Carrer d'Antoni Forrellad, Carrer de Prat de
// la Riba), ja que aquests buits són reals dins l'annex i no errors de l'usuari.
// Valida format i existència del número de portal al nucli
// nomCarrer: necessari per a la cerca al nucli (pot ser buit)
function validarNumeroPortal(numeroStr, nomCarrer) {
  const trimmed = (numeroStr || "").trim();
  if (!trimmed) return { valid: true }; // camp opcional: buit és vàlid
  // Acceptem enters positius i variants amb lletra (25A, 10B, etc.)
  if (!/^\d+[A-Za-z]?$/.test(trimmed) || parseInt(trimmed, 10) <= 0) {
    return { valid: false, reason: "El número de portal ha de ser un enter positiu (ex: 12, 14B)." };
  }
  // Validació d'existència al nucli (si carregat i si s'ha especificat carrer)
  if (nomCarrer && nomCarrer.trim()) {
    return validarAdrecaNucli(nomCarrer.trim(), trimmed);
  }
  return { valid: true };
}

// Resol la categoria fiscal exacta d'un carrer segons el número de portal (policia),
// tenint en compte els trams definits a 'trams' (rangs +parió/imparió -> categoria).
// Si el carrer no té trams, o no s'indica número, retorna la categoria per defecte (moda).
// Si el número no encaixa en cap tram (buit conegut a les dades font), també recorre
// a la categoria per defecte com a aproximació conservadora.
function resoldreCategoriaPerNumero(entry, numero) {
  if (!entry) return null;
  const n = parseInt(numero, 10);
  if (!entry.trams || !n || n <= 0) {
    return { cat: entry.cat, coef: entry.coef, exacte: false };
  }
  const parityN = n % 2;
  for (const tram of entry.trams) {
    const finsA = tram.finsA === null ? Infinity : tram.finsA;
    if (tram.desDe % 2 === parityN && n >= tram.desDe && n <= finsA) {
      return { cat: tram.cat, coef: COEF_MAP[tram.cat], exacte: true };
    }
  }
  return { cat: entry.cat, coef: entry.coef, exacte: false };
}

// Funció cercadora de carrers intel·ligent amb normalització
function buscarCarrer(nomCarrer) {
  if (!nomCarrer) return null;
  
  const normalitzar = (str) => str.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina accents
    .replace(/^(carrer de |carrer d'|avinguda de |avinguda del |avinguda |plaça de |plaça |rambla de |rambla |passatge de |passatge )/, "")
    .trim();

  const queryNorm = normalitzar(nomCarrer);
  if (!queryNorm) return null;

  // Cerca exacta
  for (const clau in baseCarrers) {
    const clauNorm = normalitzar(clau);
    if (clauNorm === queryNorm) {
      return baseCarrers[clau];
    }
  }

  // Cerca parcial
  for (const clau in baseCarrers) {
    const clauNorm = normalitzar(clau);
    if (clauNorm.includes(queryNorm) || queryNorm.includes(clauNorm)) {
      return baseCarrers[clau];
    }
  }

  return null;
}

// 6. CALCULADORA DE TAXES
function initCalculator() {
  const form = document.getElementById("tax-form");
  const calcType = document.getElementById("calc-type");
  const streetInput = document.getElementById("calc-street-name");
  const portalInput = document.getElementById("calc-portal-number");
  const param1 = document.getElementById("calc-param-1");
  const param2 = document.getElementById("calc-param-2");
  const label1 = document.getElementById("label-param-1");
  const label2 = document.getElementById("label-param-2");
  const group1 = document.getElementById("group-param-1");
  const group2 = document.getElementById("group-param-2");
  const groupTerrassaModalitat = document.getElementById("group-terrassa-modalitat");
  const terrassaLinesContainer = document.getElementById("terrassa-lines-container");
  const btnAddTerrassaLine = document.getElementById("btn-add-terrassa-line");

  const btnCalculate = document.getElementById("btn-calculate");
  const btnCopyInvoice = document.getElementById("btn-copy-invoice-notebooklm");
  const btnAddNotes = document.getElementById("btn-add-notes-invoice");

  // Elements de la fitxa tècnica de resultats
  const invConcepte = document.getElementById("inv-concepte");
  const invStreet = document.getElementById("inv-street");
  const invCategoria = document.getElementById("inv-categoria");
  const invParametres = document.getElementById("inv-parametres");
  const invTarifaBase = document.getElementById("inv-tarifa-base");
  const invFormula = document.getElementById("inv-formula");
  const invTotal = document.getElementById("inv-total");

  const feedbackCategory = document.getElementById("detected-category");
  const feedbackCoef = document.getElementById("detected-coef");

  let totalTaxCalculated = 0.00;
  let historialCalculs = [];

  // Omplir datalist de carrers per a autocompletat — usa el nucli com a font oficial
  const datalist = document.getElementById("streets-datalist");
  if (datalist) {
    const nomsCarrers = _nucli
      ? Object.values(_nucli).map(e => e.nom).sort()
      : Object.values(baseCarrers).map(c => c.nom).sort(); // fallback si nucli no disponible
    datalist.innerHTML = nomsCarrers
      .map(nom => `<option value="${nom}"></option>`)
      .join("");
  }

  // Detecció en viu de la categoria en escriure el carrer i/o el número de portal
  const portalNumberError = document.getElementById("portal-number-error");

  const addrStatusEl = document.getElementById("addr-status");
  function setAddrStatus(msg, cls) {
    if (!addrStatusEl) return;
    addrStatusEl.textContent = msg;
    addrStatusEl.className = "addr-status " + cls;
  }

  function actualitzarValidacioPortal() {
    const resultat = validarNumeroPortal(portalInput.value, streetInput.value);
    if (resultat.valid) {
      portalNumberError.textContent = "";
      portalNumberError.classList.add("hidden");
      portalInput.classList.remove("input-invalid", "addr-invalid");
      portalInput.classList.add("addr-valid");
    } else {
      portalNumberError.textContent = resultat.reason;
      portalNumberError.classList.remove("hidden");
      portalInput.classList.remove("addr-valid");
      portalInput.classList.add("input-invalid", "addr-invalid");
    }
    return resultat.valid;
  }

  function actualitzarFeedbackCategoria() {
    const val = streetInput.value.trim();

    if (!val) {
      streetInput.classList.remove("addr-valid", "addr-invalid");
      portalInput.disabled = true;
      portalInput.value = "";
      portalInput.classList.remove("addr-valid", "addr-invalid");
      feedbackCategory.textContent = "-";
      feedbackCoef.textContent = "-";
      setAddrStatus("Introdueix un carrer de Sabadell.", "hint");
      return;
    }

    const trobatBase  = buscarCarrer(val);
    const trobatNucli = buscarCarrerNucli(val);

    if (trobatBase || trobatNucli) {
      streetInput.classList.add("addr-valid");
      streetInput.classList.remove("addr-invalid");
      portalInput.disabled = false;

      const numNoms = trobatNucli ? trobatNucli.numeros.length : 0;
      setAddrStatus(
        `✓ Carrer trobat${numNoms ? " · " + numNoms + " números" : ""}. Introdueix el número de portal.`,
        "ok"
      );

      if (trobatBase) {
        const resolt = resoldreCategoriaPerNumero(trobatBase, portalInput.value.trim());
        feedbackCategory.textContent = resolt.exacte
          ? `Categoria ${resolt.cat} (núm. ${portalInput.value.trim()})`
          : `Categoria ${resolt.cat}`;
        feedbackCoef.textContent = resolt.coef.toFixed(2);
      } else {
        const coef = COEF_MAP[trobatNucli.cat] || 0.80;
        feedbackCategory.textContent = `Categoria ${trobatNucli.cat}`;
        feedbackCoef.textContent = coef.toFixed(2);
      }

      actualitzarValidacioPortal();
    } else {
      streetInput.classList.add("addr-invalid");
      streetInput.classList.remove("addr-valid");
      portalInput.disabled = true;
      portalInput.value = "";
      portalInput.classList.remove("addr-valid", "addr-invalid");
      feedbackCategory.textContent = "-";
      feedbackCoef.textContent = "-";
      setAddrStatus("Carrer no trobat al nucli de Sabadell.", "err");
    }
  }

  streetInput.addEventListener("input",  actualitzarFeedbackCategoria);
  streetInput.addEventListener("change", actualitzarFeedbackCategoria);
  portalInput.addEventListener("input",  actualitzarFeedbackCategoria);

  // Canviar camps del formulari segons tipus d'ocupació
  calcType.addEventListener("change", () => {
    const type = calcType.value;
    group1.classList.remove("hidden");
    group2.classList.remove("hidden");
    groupTerrassaModalitat.classList.add("hidden");

    if (type === "tanca") {
      label1.textContent = "Superfície (m²)";
      label2.textContent = "Durada (Dies)";
      param1.value = 25;
      param2.value = 30;
    } else if (type === "grua") {
      label1.textContent = "Metres lineals ocupats";
      label2.textContent = "Durada (Dies)";
      param1.value = 8;
      param2.value = 3;
    } else if (type === "rasa") {
      label1.textContent = "Superfície afectada (m²)";
      label2.textContent = "Durada dels treballs (Dies)";
      param1.value = 15;
      param2.value = 10;
    } else if (type === "terrassa") {
      // La superfície genèrica (param1/param2) no s'usa: cada modalitat de terrassa
      // té la seva pròpia línia amb m² (i dies, si és eventual) independents, perquè
      // diferents parts de la terrassa poden tenir règims d'autorització diferents
      // (p. ex. una part anual i una extensió només a l'estiu).
      group1.classList.add("hidden");
      group2.classList.add("hidden");
      groupTerrassaModalitat.classList.remove("hidden");
      if (terrassaLinesContainer.children.length === 0) {
        crearLiniaTerrassa("anual", 20);
      }
    }
  });

  // Gestió de línies dinàmiques d'autorització de terrassa: cada línia és independent
  // (modalitat + m² propis, i dies si la modalitat és "eventual"), i totes es poden
  // combinar lliurement entre elles (incloent "anual" combinada amb altres, ja que
  // poden correspondre a superfícies diferents de la mateixa terrassa).
  let terrassaLineCounter = 0;

  function crearLiniaTerrassa(modalitatDefault = "anual", m2Default = 20) {
    terrassaLineCounter += 1;
    const lineId = `terrassa-line-${terrassaLineCounter}`;
    const row = document.createElement("div");
    row.className = "terrassa-line-wrapper";
    row.dataset.lineId = lineId;

    // Dies seleccionats (modalitat eventual) com a conjunt de dates ISO ("AAAA-MM-DD").
    // Es manté com a propietat JS de l'element (no a dataset) perquè és estat intern
    // de la sessió, no un atribut a serialitzar.
    row._diesEventuals = new Set();

    const modalitatOptions = Object.keys(TARIFES_TERRASSA_LABELS)
      .map(key => `<option value="${key}" ${key === modalitatDefault ? "selected" : ""}>${TARIFES_TERRASSA_LABELS[key]}</option>`)
      .join("");

    row.innerHTML = `
      <div class="terrassa-line">
        <select class="form-control terrassa-line-modalitat">${modalitatOptions}</select>
        <input type="number" class="form-control terrassa-line-m2" value="${m2Default}" min="1" placeholder="m²">
        <button type="button" class="form-control terrassa-line-dies-btn hidden">0 dies seleccionats</button>
        <button type="button" class="terrassa-line-remove" title="Eliminar línia">&times;</button>
      </div>
      <div class="terrassa-calendar-panel hidden">
        <div class="terrassa-cal-header">
          <button type="button" class="terrassa-cal-nav terrassa-cal-prev" title="Mes anterior">&lsaquo;</button>
          <span class="terrassa-cal-label"></span>
          <button type="button" class="terrassa-cal-nav terrassa-cal-next" title="Mes següent">&rsaquo;</button>
        </div>
        <div class="terrassa-cal-weekdays">${DIES_SETMANA_CA.map(d => `<span>${d}</span>`).join("")}</div>
        <div class="terrassa-cal-grid"></div>
        <div class="terrassa-cal-legend">
          <span class="terrassa-cal-legend-item"><i class="terrassa-cal-dot dot-estatal"></i>Estatal</span>
          <span class="terrassa-cal-legend-item"><i class="terrassa-cal-dot dot-autonomic"></i>Autonòmic</span>
          <span class="terrassa-cal-legend-item"><i class="terrassa-cal-dot dot-local"></i>Local (Sabadell)</span>
          <span class="terrassa-cal-legend-item"><i class="terrassa-cal-dot dot-selected"></i>Seleccionat</span>
        </div>
        <div class="terrassa-cal-footer"></div>
      </div>
    `;

    terrassaLinesContainer.appendChild(row);

    const selectMod = row.querySelector(".terrassa-line-modalitat");
    const btnRemove = row.querySelector(".terrassa-line-remove");
    const btnDies = row.querySelector(".terrassa-line-dies-btn");
    const panel = row.querySelector(".terrassa-calendar-panel");
    const calLabel = row.querySelector(".terrassa-cal-label");
    const calGrid = row.querySelector(".terrassa-cal-grid");
    const calFooter = row.querySelector(".terrassa-cal-footer");
    const btnPrev = row.querySelector(".terrassa-cal-prev");
    const btnNext = row.querySelector(".terrassa-cal-next");

    const avui = new Date();
    let calAny = avui.getFullYear();
    let calMes = avui.getMonth(); // 0-indexat

    function actualitzarBotoDies() {
      const n = row._diesEventuals.size;
      btnDies.textContent = n === 1 ? "1 dia seleccionat" : `${n} dies seleccionats`;
    }

    function renderCalendari() {
      calLabel.textContent = `${MESOS_CA[calMes]} ${calAny}`;
      const primerDiaSetmana = (new Date(calAny, calMes, 1).getDay() + 6) % 7; // 0=Dl
      const diesAlMes = new Date(calAny, calMes + 1, 0).getDate();

      let cellesHtml = "";
      for (let i = 0; i < primerDiaSetmana; i++) {
        cellesHtml += `<span class="terrassa-cal-day buit"></span>`;
      }
      for (let dia = 1; dia <= diesAlMes; dia++) {
        const iso = dataISO(calAny, calMes, dia);
        const festiu = buscarFestiu(iso);
        const seleccionat = row._diesEventuals.has(iso);
        const classes = ["terrassa-cal-day"];
        if (festiu) classes.push(`festiu-${festiu.tipus}`);
        if (seleccionat) classes.push("seleccionat");
        const titol = festiu ? `${festiu.nom} (${FESTIUS_LABELS[festiu.tipus]})` : "";
        cellesHtml += `<button type="button" class="${classes.join(" ")}" data-date="${iso}" title="${titol}">${dia}</button>`;
      }
      calGrid.innerHTML = cellesHtml;
      calFooter.textContent = row._diesEventuals.size === 1
        ? "1 dia seleccionat"
        : `${row._diesEventuals.size} dies seleccionats`;
    }

    calGrid.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".terrassa-cal-day");
      if (!btn || !btn.dataset.date) return;
      const iso = btn.dataset.date;
      if (row._diesEventuals.has(iso)) {
        row._diesEventuals.delete(iso);
      } else {
        row._diesEventuals.add(iso);
      }
      renderCalendari();
      actualitzarBotoDies();
    });

    btnPrev.addEventListener("click", () => {
      calMes -= 1;
      if (calMes < 0) { calMes = 11; calAny -= 1; }
      renderCalendari();
    });
    btnNext.addEventListener("click", () => {
      calMes += 1;
      if (calMes > 11) { calMes = 0; calAny += 1; }
      renderCalendari();
    });
    btnDies.addEventListener("click", () => {
      panel.classList.toggle("hidden");
    });

    function actualitzarVisibilitatDies() {
      const esEventual = selectMod.value === "eventual";
      btnDies.classList.toggle("hidden", !esEventual);
      if (!esEventual) panel.classList.add("hidden");
    }
    actualitzarVisibilitatDies();
    renderCalendari();
    actualitzarBotoDies();

    selectMod.addEventListener("change", actualitzarVisibilitatDies);
    btnRemove.addEventListener("click", () => {
      row.remove();
      // Sempre hi ha d'haver com a mínim una línia
      if (terrassaLinesContainer.children.length === 0) {
        crearLiniaTerrassa("anual", 20);
      }
    });

    return row;
  }

  btnAddTerrassaLine.addEventListener("click", () => {
    crearLiniaTerrassa("estiu", 10);
  });

  // Lògica de càlcul analític de taxes
  function calcularTaxa() {
    if (!actualitzarValidacioPortal()) {
      invFormula.innerText = "No es pot calcular: corregeix el número de portal abans de continuar.";
      portalInput.focus();
      return;
    }

    const type = calcType.value;
    const streetNameBase = streetInput.value.trim() || "Carrer General (no especificat)";
    const portalNum = portalInput.value.trim();
    const streetName = portalNum ? `${streetNameBase}, núm. ${portalNum}` : streetNameBase;
    const val1 = parseFloat(param1.value) || 0;
    const val2 = parseFloat(param2.value) || 0;

    let baseRate = 0;
    let coeff = 0.80;
    let catCode = "5";
    let catText = "Categoria 5 (Defecte)";

    // Detecció de categoria per carrer, resolta amb precisió pel número de portal si s'indica
    const trobat = buscarCarrer(streetInput.value.trim());
    if (trobat) {
      const resolt = resoldreCategoriaPerNumero(trobat, portalNum);
      coeff = resolt.coef;
      catCode = resolt.cat;
      catText = resolt.exacte ? `Categoria ${resolt.cat} (núm. ${portalNum})` : `Categoria ${resolt.cat}`;
    }

    let descripcioConcepte = "";
    let descripcioParams = "";
    let formulaText = "";
    let total = 0;

    if (type === "tanca") {
      baseRate = 1.20; // 1.20 € per m² / dia
      total = val1 * val2 * baseRate * coeff;
      descripcioConcepte = "Tanca, bastida o tancament d'obra";
      descripcioParams = `${val1} m² x ${val2} dies`;
      invTarifaBase.textContent = `${baseRate.toFixed(2)} € / m² / dia`;
      formulaText = `${val1} m² * ${val2} dies * ${baseRate.toFixed(2)} € * ${coeff.toFixed(2)} (coef.) = ${total.toLocaleString('ca-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
    } 
    else if (type === "grua") {
      baseRate = 3.50; // 3.50 € per metre lineal / dia
      total = val1 * val2 * baseRate * coeff;
      descripcioConcepte = "Reserva de via pública per grua mòbil";
      descripcioParams = `${val1} ml x ${val2} dies`;
      invTarifaBase.textContent = `${baseRate.toFixed(2)} € / m. lineal / dia`;
      formulaText = `${val1} ml * ${val2} dies * ${baseRate.toFixed(2)} € * ${coeff.toFixed(2)} (coef.) = ${total.toLocaleString('ca-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
    } 
    else if (type === "rasa") {
      baseRate = 15.00; // 15.00 € per m² de cala
      const fix = 60.00;
      total = fix + (val1 * baseRate * coeff);
      descripcioConcepte = "Obertura de cales i rases en paviment";
      descripcioParams = `${val1} m²`;
      invTarifaBase.textContent = `${baseRate.toFixed(2)} € / m² (afectat)`;
      formulaText = `${fix.toFixed(2)} € (drets fixos d'obra) + (${val1} m² * ${baseRate.toFixed(2)} € * ${coeff.toFixed(2)} (coef.)) = ${total.toLocaleString('ca-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
    } 
    else if (type === "terrassa") {
      const tarifesCat = TARIFES_TERRASSA[catCode] || TARIFES_TERRASSA["5"];
      const linies = Array.from(terrassaLinesContainer.querySelectorAll(".terrassa-line-wrapper"));
      descripcioConcepte = "Ocupació per terrassa / vetlladors";

      if (linies.length === 0) {
        descripcioParams = "Cap línia d'autorització afegida";
        invTarifaBase.textContent = `- € / m²`;
        formulaText = `No s'ha afegit cap línia d'autorització de terrassa. Total = 0,00 €`;
        total = 0;
      } else {
        const desglossament = linies.map(row => {
          const modalitat = row.querySelector(".terrassa-line-modalitat").value;
          const modalitatText = TARIFES_TERRASSA_LABELS[modalitat] || modalitat;
          const m2 = parseFloat(row.querySelector(".terrassa-line-m2").value) || 0;
          const tarifa = tarifesCat[modalitat];
          if (modalitat === "eventual") {
            const diesSet = row._diesEventuals || new Set();
            const dies = diesSet.size;
            const subtotal = m2 * dies * tarifa;
            const dataLlistat = Array.from(diesSet).sort();
            const llistaDates = dataLlistat.length === 0
              ? "cap dia seleccionat al calendari"
              : dataLlistat.length <= 8
                ? `dies: ${dataLlistat.map(d => d.split("-").reverse().slice(0, 2).join("/")).join(", ")}`
                : `${dataLlistat.length} dies seleccionats al calendari`;
            return { modalitatText, subtotal, formula: `${m2} m² * ${dies} dies * ${tarifa.toFixed(2)} € (${llistaDates})` };
          }
          const subtotal = m2 * tarifa;
          return { modalitatText, subtotal, formula: `${m2} m² * ${tarifa.toFixed(2)} €` };
        });

        total = desglossament.reduce((acc, d) => acc + d.subtotal, 0);
        descripcioParams = desglossament.map(d => d.modalitatText).join(" + ");
        invTarifaBase.textContent = desglossament.length === 1
          ? desglossament[0].formula.replace(/\*/g, "x")
          : `Tarifa combinada (${desglossament.length} línies, ${catText})`;
        formulaText = desglossament
          .map(d => `${d.formula} (${d.modalitatText}) = ${d.subtotal.toLocaleString('ca-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`)
          .join("\n+ ") + `\n= ${total.toLocaleString('ca-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € (TOTAL, tarifa ${catText})`;
      }
    }

    totalTaxCalculated = total;

    // Actualització fitxa
    invConcepte.textContent = descripcioConcepte;
    invStreet.textContent = streetName;
    invCategoria.textContent = (type === "terrassa")
      ? `${catText} (tarifa real per categoria, Ordenança 4.5)`
      : `${catText} (Coeficient: ${coeff.toFixed(2)})`;
    invParametres.textContent = descripcioParams;
    invFormula.innerText = formulaText;
    invTotal.textContent = `${total.toLocaleString('ca-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;

    // Actualitza KPI de l'escriptori
    document.getElementById("kpi-tax-calc").textContent = `${Math.round(total).toLocaleString('ca-ES')} €`;

    // Afegir a l'historial dinàmic
    afegirAHistorial(streetName, descripcioConcepte, descripcioParams, catText, total);
  }

  // Historial de càlculs
  function carregarHistorial() {
    const saved = localStorage.getItem("via_publica_historial_calculs");
    if (saved) {
      historialCalculs = JSON.parse(saved);
      renderHistorial();
    }
  }

  function afegirAHistorial(carrer, concepte, parametres, categoria, total) {
    const nouCalcul = {
      id: `calc-${Date.now()}`,
      dataHora: new Date().toLocaleTimeString('ca-ES', {hour: '2-digit', minute:'2-digit'}) + ' - ' + new Date().toLocaleDateString('ca-ES', {day: '2-digit', month:'2-digit'}),
      carrer: carrer,
      concepte: concepte,
      parametres: `${parametres} (${categoria})`,
      total: `${total.toLocaleString('ca-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
    };

    historialCalculs.unshift(nouCalcul);
    if (historialCalculs.length > 5) {
      historialCalculs.pop(); // Manté els darrers 5
    }

    localStorage.setItem("via_publica_historial_calculs", JSON.stringify(historialCalculs));
    renderHistorial();
  }

  function renderHistorial() {
    const tbody = document.getElementById("calc-history-rows");
    if (!tbody) return;
    
    tbody.innerHTML = "";

    if (historialCalculs.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="padding: 16px; text-align: center; color: var(--text-muted);">No s'ha realitzat cap càlcul de taxes en aquesta sessió.</td>
        </tr>
      `;
      return;
    }

    historialCalculs.forEach(calc => {
      const row = document.createElement("tr");
      row.style.borderBottom = "1px solid var(--border-color)";
      row.innerHTML = `
        <td style="padding: 12px 16px; color: var(--text-muted); font-size: 0.8rem;">${calc.dataHora}</td>
        <td style="padding: 12px 16px; font-weight: 500;">${calc.carrer}</td>
        <td style="padding: 12px 16px;">${calc.concepte}</td>
        <td style="padding: 12px 16px; font-size: 0.8rem; color: var(--text-muted);">${calc.parametres}</td>
        <td style="padding: 12px 16px; text-align: right; font-family: monospace; font-weight: 600; color: var(--accent-orange);">${calc.total}</td>
        <td style="padding: 12px 16px; text-align: center;">
          <button class="btn-delete-task" onclick="eliminarCalcul('${calc.id}')" title="Esborrar registre" style="background:none; border:none; cursor:pointer; color: rgba(239, 68, 68, 0.6);"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button>
        </td>
      `;
      tbody.appendChild(row);
    });

    lucide.createIcons();
  }

  window.eliminarCalcul = function(id) {
    historialCalculs = historialCalculs.filter(c => c.id !== id);
    localStorage.setItem("via_publica_historial_calculs", JSON.stringify(historialCalculs));
    renderHistorial();
  };

  btnCalculate.addEventListener("click", calcularTaxa);

  // Copia resum per a NotebookLM
  btnCopyInvoice.addEventListener("click", () => {
    const concepte = invConcepte.textContent;
    const carrer = invStreet.textContent;
    const cat = invCategoria.textContent;
    const params = invParametres.textContent;
    const formulaText = invFormula.innerText;
    const totalText = invTotal.textContent;

    if (totalTaxCalculated === 0) {
      alert("Fes un càlcul primer per poder-ne copiar el resum regulat.");
      return;
    }

    const mdText = `=== CÀLCUL TÈCNIC DE TAXES D'OCUPACIÓ ===
Concepte: ${concepte}
Emplaçament: ${carrer}
Categoria Fiscal: ${cat}
Mesures Aplicades: ${params}
Tarifa Base: ${invTarifaBase.textContent}

EQUACIÓ ANALÍTICA DEL PRESSUPOST:
${formulaText}

TOTAL DRETS DE LIQUIDACIÓ: ${totalText}
Àrea d'Urbanisme i Espai Públic - Generació automàtica ViaPúblicaAI`;

    navigator.clipboard.writeText(mdText).then(() => {
      alert("Esborrany del pre-càlcul copiat per a NotebookLM!");
    });
  });

  // Afegeix el pressupost a les notes de camp
  btnAddNotes.addEventListener("click", () => {
    const concepte = invConcepte.textContent;
    const carrer = invStreet.textContent;
    const totalText = invTotal.textContent;
    const fieldNotes = document.getElementById("field-notes");

    if (totalTaxCalculated === 0) {
      alert("Fes un càlcul primer per poder-lo enviar a les teves notes.");
      return;
    }

    const textToInsert = `\n[CÀLCUL DE TAXA - ${new Date().toLocaleDateString('ca-ES')}] Concepte: ${concepte} a ${carrer} -> TOTAL ESTIMAT: ${totalText}\n`;
    fieldNotes.value += textToInsert;
    
    localStorage.setItem("via_publica_field_notes", fieldNotes.value);
    
    // Canviar a pestanya dashboard
    const dashboardLink = document.querySelector('[data-tab="tab-dashboard"]');
    if (dashboardLink) dashboardLink.click();
    
    fieldNotes.focus();
    alert("Dades enviades amb èxit al Bloc de Notes de Camp al Dashboard!");
  });

  // Carregar dades al iniciar la calculadora
  carregarHistorial();
}

// 7. KANBAN DE TASQUES
function initKanban() {
  const form = document.getElementById("kanban-form");
  const inputTitle = document.getElementById("kanban-new-title");
  const inputPriority = document.getElementById("kanban-new-priority");

  // Renders columns
  function renderKanban() {
    const columns = {
      todo: document.getElementById("list-todo"),
      progress: document.getElementById("list-progress"),
      done: document.getElementById("list-done")
    };

    const counters = {
      todo: document.getElementById("count-todo"),
      progress: document.getElementById("count-progress"),
      done: document.getElementById("count-done")
    };

    // Reset columns HTML
    Object.keys(columns).forEach(key => {
      columns[key].innerHTML = "";
    });

    // Counts
    const counts = { todo: 0, progress: 0, done: 0 };

    tasquesKanban.forEach(task => {
      counts[task.estat]++;
      const card = document.createElement("div");
      card.className = "kanban-task";
      card.setAttribute("draggable", "true");
      card.setAttribute("id", task.id);
      
      let moveLeftBtn = "";
      let moveRightBtn = "";

      if (task.estat === "progress") {
        moveLeftBtn = `<button class="btn-move-task" onclick="moveTask('${task.id}', 'todo')" title="Mou a pendent"><i data-lucide="arrow-left"></i></button>`;
        moveRightBtn = `<button class="btn-move-task" onclick="moveTask('${task.id}', 'done')" title="Mou a finalitzat"><i data-lucide="arrow-right"></i></button>`;
      } else if (task.estat === "todo") {
        moveRightBtn = `<button class="btn-move-task" onclick="moveTask('${task.id}', 'progress')" title="Mou a en curs"><i data-lucide="arrow-right"></i></button>`;
      } else if (task.estat === "done") {
        moveLeftBtn = `<button class="btn-move-task" onclick="moveTask('${task.id}', 'progress')" title="Mou a en curs"><i data-lucide="arrow-left"></i></button>`;
      }

      card.innerHTML = `
        <span class="task-priority-tag ${task.prioritat}">${task.prioritat}</span>
        <h4>${task.titol}</h4>
        <div class="task-footer">
          <button class="btn-delete-task" onclick="deleteTask('${task.id}')" title="Esborra tasca"><i data-lucide="trash-2"></i></button>
          <div class="task-move-btns">
            ${moveLeftBtn}
            ${moveRightBtn}
          </div>
        </div>
      `;
      
      // Drag Events
      card.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", task.id);
      });

      columns[task.estat].appendChild(card);
    });

    // Update Counters
    Object.keys(counters).forEach(key => {
      counters[key].textContent = counts[key];
    });

    lucide.createIcons();
    // Save to local storage
    localStorage.setItem("via_publica_kanban_tasks", JSON.stringify(tasquesKanban));
  }

  // Carga de tasques inicials guardades
  const savedTasks = localStorage.getItem("via_publica_kanban_tasks");
  if (savedTasks) {
    tasquesKanban = JSON.parse(savedTasks);
  }

  // Afegir nova tasca
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = inputTitle.value.trim();
    const priority = inputPriority.value;

    if (title) {
      const newTask = {
        id: `task-${Date.now()}`,
        titol: title,
        prioritat: priority,
        estat: "todo"
      };

      tasquesKanban.push(newTask);
      inputTitle.value = "";
      renderKanban();
    }
  });

  // Drag and Drop en columnes
  const kanbanColumns = document.querySelectorAll(".kanban-column");
  kanbanColumns.forEach(col => {
    col.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    col.addEventListener("drop", (e) => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData("text/plain");
      const targetStatus = col.getAttribute("data-status");
      
      const task = tasquesKanban.find(t => t.id === taskId);
      if (task && task.estat !== targetStatus) {
        task.estat = targetStatus;
        renderKanban();
      }
    });
  });

  // Expose global functions to move or delete
  window.moveTask = function(id, targetStatus) {
    const task = tasquesKanban.find(t => t.id === id);
    if (task) {
      task.estat = targetStatus;
      renderKanban();
    }
  };

  window.deleteTask = function(id) {
    if (confirm("Segur que vols esborrar aquesta tasca?")) {
      tasquesKanban = tasquesKanban.filter(t => t.id !== id);
      renderKanban();
    }
  };

  renderKanban();
}

// 8. TEMPORITZADOR POMODORO (AMB GENERACIÓ D'AUDIO VIA WEB AUDIO API)
function initPomodoro() {
  let timerInterval = null;
  let timeRemaining = 25 * 60; // 25 minuts
  let isRunning = false;
  let isBreak = false;

  const display = document.getElementById("pomodoro-display");
  const btnStart = document.getElementById("btn-pomodoro-start");
  const btnPause = document.getElementById("btn-pomodoro-pause");
  const btnReset = document.getElementById("btn-pomodoro-reset");
  const modeText = document.getElementById("pomodoro-mode");

  function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function playAlertSound() {
    // Utilitzem Web Audio API per sintetitzar un so nítid i agradable sense dependre de fitxers externs
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Nota 1
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      gain1.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start();
      osc1.stop(audioCtx.currentTime + 0.3);

      // Nota 2 (després de 150ms)
      setTimeout(() => {
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5
        gain2.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start();
        osc2.stop(audioCtx.currentTime + 0.4);
      }, 150);

    } catch (e) {
      console.warn("L'àudio no està suportat pel navegador o cal acció prèvia de l'usuari.", e);
    }
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    btnStart.classList.add("hidden");
    btnPause.classList.remove("hidden");

    timerInterval = setInterval(() => {
      timeRemaining--;
      updateDisplay();

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        isRunning = false;
        playAlertSound();

        // Switch modes
        if (!isBreak) {
          isBreak = true;
          timeRemaining = 5 * 60; // 5 minuts de pausa
          modeText.textContent = "Pausa curta d'obra";
          modeText.style.color = "var(--accent-green)";
          alert("Sessió acabada! Fes un descans de 5 minuts.");
        } else {
          isBreak = false;
          timeRemaining = 25 * 60;
          modeText.textContent = "Concentració en redactar";
          modeText.style.color = "var(--text-muted)";
          alert("Descans finalitzat. Tornem a la feina!");
        }

        btnStart.classList.remove("hidden");
        btnPause.classList.add("hidden");
        updateDisplay();
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!isRunning) return;
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    btnStart.classList.remove("hidden");
    btnPause.classList.add("hidden");
  }

  function resetTimer() {
    pauseTimer();
    isBreak = false;
    timeRemaining = 25 * 60;
    modeText.textContent = "Sessió de concentració";
    modeText.style.color = "var(--text-muted)";
    updateDisplay();
  }

  btnStart.addEventListener("click", startTimer);
  btnPause.addEventListener("click", pauseTimer);
  btnReset.addEventListener("click", resetTimer);

  updateDisplay();
}

// 9. REPOSITORI DE NORMATIVA (Netlify Blobs)
const BLOBS_API = "/api/blobs";

function initRepositoriFiles() {
  const searchInput    = document.getElementById("search-repo-files");
  const searchPanel    = document.getElementById("search-ia-panel");
  const searchBody     = document.getElementById("search-ia-body");
  const btnSearchIA    = document.getElementById("btn-search-ia");
  const btnCloseSearch = document.getElementById("btn-close-search");
  const btnSave        = document.getElementById("btn-save-consulta");
  const topicSelect    = document.getElementById("query-topic-select");
  const docSelect      = document.getElementById("query-doc-select");

  let lastQuery = "";
  let lastReply = "";

  // ── Extreu el nom del blob d'una URL de blobs ──────────────
  function blobKeyFromUrl(url) {
    try {
      const u = new URL(url, window.location.origin);
      if (u.pathname.includes("/api/blobs")) return u.searchParams.get("key");
    } catch {}
    return null;
  }

  // ── Omple els selectors des de la Biblioteca (localStorage) ──
  function renderSourceSelector() {
    if (!topicSelect || !docSelect) return;
    let topics = [];
    try { topics = JSON.parse(localStorage.getItem("norm_biblioteca_temes") || "[]"); } catch {}

    topicSelect.innerHTML = `<option value="">— Tots els temes —</option>`;
    topics.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = t.nom;
      topicSelect.appendChild(opt);
    });
    updateDocSelector(topics);
  }

  function updateDocSelector(topics) {
    if (!docSelect) return;
    const tid = topicSelect?.value;
    docSelect.innerHTML = `<option value="">— Tots els documents —</option>`;
    if (!tid) return;
    const topic = topics.find(t => t.id === tid);
    if (!topic) return;
    topic.docs.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.key;
      opt.textContent = d.nom;
      docSelect.appendChild(opt);
    });
  }

  topicSelect?.addEventListener("change", () => {
    let topics = [];
    try { topics = JSON.parse(localStorage.getItem("norm_biblioteca_temes") || "[]"); } catch {}
    updateDocSelector(topics);
  });

  // ── Recull els docKeys seleccionats per enviar a Gemini ────
  function getSelectedDocKeys() {
    let topics = [];
    try { topics = JSON.parse(localStorage.getItem("norm_biblioteca_temes") || "[]"); } catch {}
    const tid = topicSelect?.value;
    const dkey = docSelect?.value;

    if (dkey) {
      // Document concret
      for (const t of topics) {
        const doc = t.docs.find(d => d.key === dkey);
        if (doc) {
          const key = blobKeyFromUrl(doc.url);
          return key ? [key] : [];
        }
      }
      return [];
    }
    if (tid) {
      // Tot el tema
      const topic = topics.find(t => t.id === tid);
      if (!topic) return [];
      return topic.docs.map(d => blobKeyFromUrl(d.url)).filter(Boolean);
    }
    // Tots els documents de tots els temes (deduplicats)
    const keys = new Set();
    topics.forEach(t => t.docs.forEach(d => {
      const k = blobKeyFromUrl(d.url);
      if (k) keys.add(k);
    }));
    return [...keys];
  }

  // ── Consulta IA ───────────────────────────────────────────
  async function runIASearch() {
    const query = searchInput.value.trim();
    if (query.length < 3) return;
    lastQuery = query;
    lastReply = "";
    if (btnSave) { btnSave.style.display = "none"; }
    searchPanel.style.display = "block";
    searchBody.innerHTML = '<span class="search-ia-loading"><i data-lucide="loader-2" class="spin"></i> Consultant la normativa...</span>';
    lucide.createIcons();
    try {
      const docKeys = getSelectedDocKeys();
      const r = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          searchMode: true,
          docKeys: docKeys.length > 0 ? docKeys : undefined,
          messages: [{ role: "user", content: query }]
        })
      });
      const data = await r.json();
      if (data.reply) {
        lastReply = data.reply;
        const html = data.reply
          .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\n/g, "<br>");
        searchBody.innerHTML = html;
        if (btnSave) { btnSave.style.display = "inline-flex"; }
      } else if (data.setup) {
        searchBody.innerHTML = `<span style="color:var(--text-muted)">${data.setup}</span>`;
      } else {
        searchBody.innerHTML = `<span style="color:#f87171">Error: ${data.error || "resposta buida"}</span>`;
      }
    } catch(err) {
      searchBody.innerHTML = `<span style="color:#f87171">Error de connexió: ${err.message}</span>`;
    }
  }

  btnSearchIA?.addEventListener("click", runIASearch);
  searchInput?.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); runIASearch(); }
  });
  btnCloseSearch?.addEventListener("click", () => {
    searchPanel.style.display = "none";
    if (btnSave) btnSave.style.display = "none";
  });

  // ── Desa consulta ─────────────────────────────────────────
  if (btnSave) {
    btnSave.addEventListener("click", () => {
      if (!lastQuery || !lastReply) return;
      const CONSULTES_KEY = "repo_consultes_desades";
      let consultes = [];
      try { consultes = JSON.parse(localStorage.getItem(CONSULTES_KEY) || "[]"); } catch { consultes = []; }
      consultes.unshift({
        id: "c_" + Date.now(),
        query: lastQuery,
        reply: lastReply,
        data: new Date().toLocaleString("ca-ES", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
      });
      localStorage.setItem(CONSULTES_KEY, JSON.stringify(consultes));
      btnSave.style.display = "none";
      renderConsultes();
    });
  }

  // ── Consultes Desades ─────────────────────────────────────
  const consultesList  = document.getElementById("consultes-list");
  const btnClearConsultes = document.getElementById("btn-clear-consultes");
  const CONSULTES_KEY  = "repo_consultes_desades";

  function openConsultaModal(c) {
    const replyHtml = c.reply
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
    const overlay = document.createElement("div");
    overlay.className = "consulta-modal-overlay";
    overlay.innerHTML = `
      <div class="consulta-modal">
        <div class="consulta-modal-header">
          <span class="consulta-modal-title">${c.data}</span>
          <button class="btn-close-search" id="btn-close-modal" title="Tancar">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div class="consulta-modal-body">
          <div class="consulta-modal-query">${c.query}</div>
          <div class="consulta-modal-response">${replyHtml}</div>
        </div>
      </div>`;
    overlay.addEventListener("click", e => {
      if (e.target === overlay || e.target.closest("#btn-close-modal")) overlay.remove();
    });
    document.body.appendChild(overlay);
    lucide.createIcons();
  }

  function renderConsultes() {
    if (!consultesList) return;
    let consultes = [];
    try { consultes = JSON.parse(localStorage.getItem(CONSULTES_KEY) || "[]"); } catch { consultes = []; }

    if (consultes.length === 0) {
      consultesList.innerHTML = `
        <div class="consultes-empty">
          <i data-lucide="bookmark"></i>
          <p>Encara no hi ha consultes desades.</p>
          <span>Fes una consulta i prem "Desa consulta" per guardar-la aquí.</span>
        </div>`;
      lucide.createIcons();
      return;
    }

    consultesList.innerHTML = "";
    consultes.forEach(c => {
      const el = document.createElement("div");
      el.className = "consulta-item";
      const titlePreview = c.query.slice(0, 60) + (c.query.length > 60 ? "…" : "");
      el.innerHTML = `
        <div class="consulta-item-header">
          <span class="consulta-item-title">${titlePreview}</span>
          <button class="consulta-delete-btn" data-id="${c.id}" title="Elimina">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div class="consulta-item-date">${c.data}</div>
      `;
      el.addEventListener("click", e => {
        if (e.target.closest(".consulta-delete-btn")) return;
        openConsultaModal(c);
      });
      el.querySelector(".consulta-delete-btn").addEventListener("click", e => {
        e.stopPropagation();
        let cs = [];
        try { cs = JSON.parse(localStorage.getItem(CONSULTES_KEY) || "[]"); } catch { cs = []; }
        cs = cs.filter(x => x.id !== c.id);
        localStorage.setItem(CONSULTES_KEY, JSON.stringify(cs));
        renderConsultes();
      });
      consultesList.appendChild(el);
    });
    lucide.createIcons();
  }

  btnClearConsultes?.addEventListener("click", () => {
    if (!confirm("Vols esborrar totes les consultes desades?")) return;
    localStorage.removeItem(CONSULTES_KEY);
    renderConsultes();
  });

  // Arrenca
  renderSourceSelector();
  renderConsultes();
}

// 10. COPILOT VIA PÚBLICA (Gemini)
function initCopilotSimulator() {
  const chatMessages = document.getElementById("copilot-chat-messages");
  const input        = document.getElementById("copilot-input");
  const sendBtn      = document.getElementById("btn-send-copilot");
  const quickPrompts = document.querySelectorAll(".quick-prompt-btn");

  // Historial de conversa (rol user/assistant)
  const history = [];

  // ── Renderitza un missatge al xat ──────────────────────────
  function appendMessage(role, text, isLoading = false) {
    const msg = document.createElement("div");
    msg.className = `chat-message ${role === "user" ? "user" : "ai"}`;
    if (isLoading) {
      msg.id = "copilot-loading";
      msg.innerHTML = `<p class="muted"><span class="spin" style="display:inline-block;margin-right:6px;">⟳</span>Pensant...</p>`;
    } else {
      // Converteix **negreta** i salts de línia a HTML bàsic
      const html = text
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");
      msg.innerHTML = `<p>${html}</p>`;
    }
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msg;
  }

  function removeLoading() {
    const el = document.getElementById("copilot-loading");
    if (el) el.remove();
  }

  // ── Envia la pregunta a /api/gemini ────────────────────────
  async function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    input.value = "";
    sendBtn.disabled = true;
    input.disabled   = true;

    appendMessage("user", text);
    history.push({ role: "user", content: text });

    appendMessage("ai", "", true); // indicador de càrrega

    try {
      const res = await fetch("/api/gemini", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      removeLoading();

      if (!res.ok || data.error) {
        const errMsg = data.setup
          ? `⚠️ ${data.error}<br><small>${data.setup}</small>`
          : `⚠️ Error: ${data.error || "Resposta inesperada del servidor."}`;
        appendMessage("ai", errMsg);
        history.pop(); // no afegim al historial si ha fallat
      } else {
        appendMessage("ai", data.reply);
        history.push({ role: "assistant", content: data.reply });
      }
    } catch (err) {
      removeLoading();
      appendMessage("ai", `⚠️ No s'ha pogut connectar amb el servidor: ${err.message}`);
      history.pop();
    } finally {
      sendBtn.disabled = false;
      input.disabled   = false;
      input.focus();
    }
  }

  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keypress", e => {
    if (e.key === "Enter" && !e.shiftKey) handleSend();
  });

  quickPrompts.forEach(btn => {
    btn.addEventListener("click", () => {
      input.value = btn.textContent.trim();
      handleSend();
    });
  });
}
