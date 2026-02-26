    (function () {


      // =============================
// CONTENEDORES / RACK
// =============================

const itemsContenedores = [
  "Caseta térmica",
  "Gabinete exteriores",
  "Caja 40x30",
  "Caja 60x40",
  "Caja 60x80",
  "Caja 100x80",
  "Caja 22x17",
  "Caja 10x10",
  "Rack",
  "Bandeja Rack"
];

const btnContenedores = document.getElementById("btnContenedores");
const modalContenedores = document.getElementById("modalContenedores");
const cerrarContenedores = document.getElementById("cerrarContenedores");
const tablaContenedoresBody = document.getElementById("tablaContenedoresBody");
const guardarContenedores = document.getElementById("guardarContenedores");

btnContenedores.addEventListener("click", () => {
  modalContenedores.style.display = "flex";
  cargarTablaContenedores();
});

cerrarContenedores.addEventListener("click", () => {
  modalContenedores.style.display = "none";
});

function cargarTablaContenedores() {
  tablaContenedoresBody.innerHTML = "";

  itemsContenedores.forEach((item, index) => {

    const fila = `
      <tr>
        <td>${item}</td>

        <td>
          <input type="number" min="0" id="contCantidad${index}">
        </td>

        <td>
          <input type="text" id="contMaterial${index}" placeholder="Ej: Metálico, PVC, Inox...">
        </td>

        <td>
          <select id="contCondicion${index}">
            <option value="">Seleccionar</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Cliente">Cliente</option>
            <option value="Reemplazo">Reemplazo</option>
          </select>
        </td>

        <td>
          <input type="file" accept="image/*" capture="environment" id="contFoto${index}">
        </td>

        <td>
          <input type="text" id="contObs${index}" placeholder="Observación">
        </td>
      </tr>
    `;

    tablaContenedoresBody.innerHTML += fila;
  });
}

guardarContenedores.addEventListener("click", () => {

  const configuracion = itemsContenedores.map((item, index) => {

    const fotoInput = document.getElementById(`contFoto${index}`);
    const foto = fotoInput.files[0] ? fotoInput.files[0].name : null;

    return {
      detalle: item,
      cantidad: document.getElementById(`contCantidad${index}`).value,
      material: document.getElementById(`contMaterial${index}`).value,
      condicion: document.getElementById(`contCondicion${index}`).value,
      foto: foto,
      observacion: document.getElementById(`contObs${index}`).value
    };
  });

  console.log("CONTENEDORES CONFIG:", configuracion);

  modalContenedores.style.display = "none";
});

// =============================
// OBRA CIVIL
// =============================

const rubrosObra = [
  { nombre: "Corte y resane de Gypsum (incluye materiales)", unidad: "u" },
  { nombre: "Corte y resane de Asfalto (incluye materiales)", unidad: "mL" },
  { nombre: "Corte y resane de Cemento (incluye materiales)", unidad: "mL" },
  { nombre: "Excavación en tierra / cascajo (incluye materiales)", unidad: "mL" },
  { nombre: "Levantamiento de adoquín (incluye materiales)", unidad: "m2" },
  { nombre: "Corte y Resane de pared (incluye materiales)", unidad: "mL" },
  { nombre: "Trabajos de Soldadura", unidad: "día" },
  { nombre: "Andamios (# de cuerpos)", unidad: "día" }
];

const btnObraCivil = document.getElementById("btnObraCivil");
const modalObraCivil = document.getElementById("modalObraCivil");
const cerrarObraCivil = document.getElementById("cerrarObraCivil");
const tablaObraBody = document.getElementById("tablaObraBody");
const guardarObraCivil = document.getElementById("guardarObraCivil");

// Abrir modal
btnObraCivil.addEventListener("click", () => {
  modalObraCivil.style.display = "flex";
  cargarTablaObra();
});

// Cerrar modal
cerrarObraCivil.addEventListener("click", () => {
  modalObraCivil.style.display = "none";
});

// Cargar tabla dinámica
function cargarTablaObra() {
  tablaObraBody.innerHTML = "";

  rubrosObra.forEach((rubro, index) => {
    const fila = `
      <tr>
        <td>${rubro.nombre}</td>
        <td>
          <input type="number" min="0" step="0.1" id="obraCantidad${index}">
        </td>
        <td>${rubro.unidad}</td>
        <td>
          <input type="text" id="obraObs${index}" placeholder="Observación">
        </td>
      </tr>
    `;

    tablaObraBody.innerHTML += fila;
  });
}

// Guardar configuración
guardarObraCivil.addEventListener("click", () => {
  const configuracion = rubrosObra.map((rubro, index) => {
    return {
      rubro: rubro.nombre,
      cantidad: document.getElementById(`obraCantidad${index}`).value,
      unidad: rubro.unidad,
      observacion: document.getElementById(`obraObs${index}`).value
    };
  });

  console.log("OBRA CIVIL CONFIG:", configuracion);

  modalObraCivil.style.display = "none";
});

     document.addEventListener("DOMContentLoaded", function () {

  const btnFibra = document.getElementById("btnFibra");
  const modalFibra = document.getElementById("modalFibra");
  const cerrarFibra = document.getElementById("cerrarFibra");
  const tablaFibraBody = document.getElementById("tablaFibraBody");
  const guardarFibra = document.getElementById("guardarFibra");

  const rubrosFibra = [
    "METROS LINEALES",
    "NUMERO DE HILOS",
    "FUSIONES",
    "TRANSCEIVER",
    "MANGAS",
    "NAP",
    "TIPO DE INSTALACIÓN",
    "TIPO DE FIBRA",
    "PIGTAILS",
    "PATCH CORD",
    "ODF",
    "ROSETAS"
  ];

  if (btnFibra) {
    btnFibra.addEventListener("click", function () {
      modalFibra.style.display = "flex";
      generarTablaFibra();
    });
  }

  if (cerrarFibra) {
    cerrarFibra.addEventListener("click", function () {
      modalFibra.style.display = "none";
    });
  }

  function generarTablaFibra() {

    tablaFibraBody.innerHTML = "";

    rubrosFibra.forEach(function (rubro) {

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${rubro}</td>
        <td><input type="number"></td>
        <td><input type="text" placeholder="Observación"></td>
      `;

      tablaFibraBody.appendChild(row);

    });
  }

  if (guardarFibra) {
    guardarFibra.addEventListener("click", function () {

      const dataFibra = {};

      document.querySelectorAll("#tablaFibraBody tr").forEach(row => {

        const rubro = row.children[0].innerText;
        const cantidad = row.children[1].querySelector("input").value;
        const observacion = row.children[2].querySelector("input").value;

        dataFibra[rubro] = {
          cantidad,
          observacion
        };

      });

      console.log("Fibra Configurada:", dataFibra);

      modalFibra.style.display = "none";
    });
  }

});
      // ---------- DOM refs ----------
      const lineasGrid = document.getElementById("lineasGrid");
      const posGrid = document.getElementById("posGrid");
      const lineaNegocioInput = document.getElementById("lineaNegocio");
      const categoriaInput = document.getElementById("categoria");
      const marcaSelect = document.getElementById("marca");
      const subtipoSelect = document.getElementById("subtipo");
      const modeloSelect = document.getElementById("modelo");
      const itemForm = document.getElementById("itemForm");
      const limpiarItemBtn = document.getElementById("limpiarItemBtn");
      const btnCoords = document.getElementById("btnCoords");
      const fotosInput = document.getElementById("fotos");
      const itemsList = document.getElementById("itemsList");
      const itemsCount = document.getElementById("itemsCount");
      const statusText = document.getElementById("statusText");
      const alertBox = document.getElementById("alertBox");
      const vaciarListaBtn = document.getElementById("vaciarListaBtn");
      const finalizarBtn = document.getElementById("finalizarBtn");
      const fieldPuntoElectrico = document.getElementById("fieldPuntoElectrico");
      const metrosPuntoElectricoInput = document.getElementById("metrosPuntoElectrico");
      const condicionEquipoRow = document.getElementById("condicionEquipoRow");
      const condicionEquipoSelect = document.getElementById("condicionEquipo");
      const alturaGroup = document.getElementById("alturaGroup");

      const btnModelosModal = document.getElementById("btnModelosModal");
      const modalModelos = document.getElementById("modalModelos");
      const modalTitle = document.getElementById("modalTitle");
      const modalSubtitle = document.getElementById("modalSubtitle");
      const modalCloseBtn = document.getElementById("modalCloseBtn");
      const tipoPills = document.getElementById("tipoPills");
      const marcaPills = document.getElementById("marcaPills");
      const searchModelo = document.getElementById("searchModelo");
      const camarasGrid = document.getElementById("camarasGrid");

      let itemsSeleccionados = [];
      let lineaNegocioActual = "";
      let subcategoriaActual = "";
      let categoriaTecnicaActual = ""; // Camara, Energia, Red, etc.
      let categoriaModalActual = null;

      // ---------- Config líneas y subcategorías ----------
      const lineasConfig = [
        {
          id: "SEGURIDAD",
          nombre: "Seguridad electrónica",
          detalle: "CCTV, energía, radares, intrusión, accesos",
          icono: "🛡️"
        },
        {
          id: "SCI",
          nombre: "SCI",
          detalle: "Detección y extinción de incendio",
          icono: "🔥"
        },
        {
          id: "IT",
          nombre: "IT",
          detalle: "Infraestructura de red",
          icono: "💻"
        },
        {
          id: "FLOTAS",
          nombre: "Flotas y COM",
          detalle: "Combustible y gestión de flotas",
          icono: "🚚"
        }
      ];

      // Subcategorías por línea, mapeadas a categoría técnica
      const subcategoriasPorLinea = {
        SEGURIDAD: [
          { id: "CCTV", label: "CCTV", icon: "📷", detalle: "Cámaras domo, bala, PTZ", baseCategoria: "Camara" },
          { id: "ENERGIA_SE", label: "Energía", icon: "🔌", detalle: "UPS, inversores, solar", baseCategoria: "Energia" },
          { id: "RADARES", label: "Radares", icon: "📡", detalle: "Radares perimetrales", baseCategoria: "Radar" },
          { id: "INTRUSION", label: "Intrusión", icon: "🚨", detalle: "Sensores y paneles de alarma", baseCategoria: "Alarma" },
          { id: "ACCESO", label: "Control de acceso", icon: "🚪", detalle: "Lectores, controladoras, cerraduras", baseCategoria: "Acceso" }
        ],
        SCI: [
          { id: "DETECCION", label: "Detección", icon: "🔥", detalle: "Detectores, módulos, campanas", baseCategoria: "SCI_Deteccion" },
          { id: "EXTINCION", label: "Extinción", icon: "🧯", detalle: "Agentes, válvulas, maniobras", baseCategoria: "SCI_Extincion" }
        ],
        IT: [
          { id: "INFRA_RED", label: "Infraestructura red", icon: "🌐", detalle: "Switches, AP, enlaces", baseCategoria: "Red" }
        ],
        FLOTAS: [
          { id: "COMBUSTIBLE", label: "Combustible", icon: "⛽", detalle: "Medición y control de combustible", baseCategoria: "Combustible" },
          { id: "FLOTAS", label: "Flotas", icon: "🚚", detalle: "Rastreo y telemetría", baseCategoria: "Flotas" }
        ]
      };

      // Subtipos según categoría técnica
      const subtiposPorCategoriaTecnica = {
        Camara: [
          "Domo fija",
          "Domo varifocal",
          "Bala fija",
          "Bala varifocal",
          "PTZ",
          "Ojo de pez"
        ],
        Energia: [
          "UPS",
          "Inversor con baterías",
          "Sistema solar",
          "Punto eléctrico"
        ],
        Switch: [
          "4 puertos",
          "8 puertos",
          "16 puertos",
          "24 puertos",
          "48 puertos"
        ],
        Alarma: [
          "Panel",
          "Zona cableada",
          "Zona inalámbrica",
          "Sirena interior",
          "Sirena exterior"
        ],
        Red: [
          "AP interior",
          "AP exterior",
          "Router",
          "Enlace PTP",
          "Enlace PTMP"
        ],
        Radar: [
          "Radar corto alcance",
          "Radar largo alcance"
        ],
        Acceso: [
          "Controladora",
          "Lector",
          "Cerradura",
          "Pulsador / botón"
        ],
        SCI_Deteccion: [
          "Central detección",
          "Detector puntual",
          "Detector lineal",
          "Módulo de lazo"
        ],
        SCI_Extincion: [
          "Válvula",
          "Cilindro",
          "Gabinete",
          "Accionamiento manual"
        ],
        Combustible: [
          "Sonda de tanque",
          "Controlador combustible",
          "Medidor línea"
        ],
        Flotas: [
          "GPS básico",
          "GPS avanzado",
          "Sensor adicional"
        ],
        Otro: [
          "Accesorio montaje",
          "Accesorio protección",
          "Otro"
        ]
      };

      // ---------- Catálogos demo para modal ----------
      const catalogoCamaras = [
        { categoria: "Camara", marca: "Dahua", tipo: "Domo fija", modelo: "DH-IPC-HDBW2231E-S-0280B", resolucion: "2MP", extra: "Starlight · IR 30 m · Exterior" },
        { categoria: "Camara", marca: "Dahua", tipo: "Domo varifocal", modelo: "DH-IPC-HDBW2431R-ZS", resolucion: "4MP", extra: "Varifocal motorizado · IR 50 m" },
        { categoria: "Camara", marca: "Dahua", tipo: "Bala fija", modelo: "DH-IPC-HFW1230S-S4", resolucion: "2MP", extra: "IR 30 m · IP67" },
        { categoria: "Camara", marca: "Dahua", tipo: "PTZ", modelo: "SD49225T-HN", resolucion: "2MP", extra: "Zoom 25X · IR 100 m" },
        { categoria: "Camara", marca: "Hikvision", tipo: "Domo fija", modelo: "DS-2CD1123G0-I", resolucion: "2MP", extra: "IR 30 m · IK10" },
        { categoria: "Camara", marca: "Hikvision", tipo: "Bala varifocal", modelo: "DS-2CD2643G2-IZS", resolucion: "4MP", extra: "Varifocal motorizado · AcuSense" },
        { categoria: "Camara", marca: "Hikvision", tipo: "Ojo de pez", modelo: "DS-2CD2955FWD-I", resolucion: "5MP", extra: "360° · Interior/Exterior" },
        { categoria: "Camara", marca: "Uniview", tipo: "Bala fija", modelo: "IPC2122LR3-PF40", resolucion: "2MP", extra: "IR 30 m · IP67" },
        { categoria: "Camara", marca: "Uniview", tipo: "Domo varifocal", modelo: "IPC3234SR3-DVPZ", resolucion: "4MP", extra: "Varifocal motorizado · WDR 120dB" },
        { categoria: "Camara", marca: "Ruijie", tipo: "Domo fija", modelo: "RVC-Dome-2MP-IR30", resolucion: "2MP", extra: "Integración Ruijie Cloud" },
        { categoria: "Camara", marca: "Otra", tipo: "PTZ", modelo: "PTZ-Generic-20X-IR", resolucion: "2MP", extra: "Genérica · Zoom 20X" }
      ];

      const catalogoEnergia = [
        { categoria: "Energia", marca: "APC", tipo: "UPS", modelo: "SRT3KXLI", resolucion: "3kVA", extra: "Online · Torre/Rack" },
        { categoria: "Energia", marca: "APC", tipo: "UPS", modelo: "SRT6KXLI", resolucion: "6kVA", extra: "Online · Baterías externas" },
        { categoria: "Energia", marca: "Tripplite", tipo: "UPS", modelo: "SU3000RTXLCD2U", resolucion: "3kVA", extra: "Online · Rack 2U" },
        { categoria: "Energia", marca: "Genérico", tipo: "Inversor con baterías", modelo: "INV-3KVA-BANCO200Ah", resolucion: "3kVA", extra: "Banco 200Ah · 48V" },
        { categoria: "Energia", marca: "Genérico", tipo: "Sistema solar", modelo: "SOLAR-1kW-KIT", resolucion: "1kW", extra: "Incluye paneles + controlador" },
        { categoria: "Energia", marca: "Genérico", tipo: "Punto eléctrico", modelo: "PE-110V-GEN", resolucion: "", extra: "Toma 110V con tubería EMT" }
      ];

      const catalogoAlarma = [
        { categoria: "Alarma", marca: "Bosch", tipo: "Panel", modelo: "B5512", resolucion: "", extra: "Hasta 48 zonas" },
        { categoria: "Alarma", marca: "Bosch", tipo: "Panel", modelo: "B6512", resolucion: "", extra: "Hasta 96 zonas" },
        { categoria: "Alarma", marca: "Genérico", tipo: "Sirena exterior", modelo: "SIR-EXT-30W", resolucion: "", extra: "30W · IP65" },
        { categoria: "Alarma", marca: "Genérico", tipo: "Zona cableada", modelo: "ZONA-CAB-8", resolucion: "", extra: "Módulo 8 zonas cableadas" },
        { categoria: "Alarma", marca: "Genérico", tipo: "Zona inalámbrica", modelo: "ZONA-WL-16", resolucion: "", extra: "Módulo 16 zonas inalámbricas" }
      ];

      const catalogoSwitch = [
        { categoria: "Switch", marca: "Ruijie", tipo: "8 puertos", modelo: "RG-ES208GC-P", resolucion: "", extra: "8 puertos PoE" },
        { categoria: "Switch", marca: "Ruijie", tipo: "16 puertos", modelo: "RG-ES216GC-P", resolucion: "", extra: "16 puertos PoE" },
        { categoria: "Switch", marca: "Ruijie", tipo: "24 puertos", modelo: "RG-S2628G", resolucion: "", extra: "24 puertos Gb" },
        { categoria: "Switch", marca: "Genérico", tipo: "4 puertos", modelo: "SW-4P-POE", resolucion: "", extra: "PoE básico" },
        { categoria: "Switch", marca: "Genérico", tipo: "48 puertos", modelo: "SW-48P-Core", resolucion: "", extra: "Core, uplinks SFP" }
      ];

      const catalogoRed = [
        { categoria: "Red", marca: "Ruijie", tipo: "AP interior", modelo: "RG-AP820-L(V3)", resolucion: "WiFi 6", extra: "Indoor · Dual band" },
        { categoria: "Red", marca: "Ruijie", tipo: "AP exterior", modelo: "RG-AP680-L", resolucion: "WiFi 6", extra: "Outdoor · IP67" },
        { categoria: "Red", marca: "Genérico", tipo: "Enlace PTP", modelo: "PTP-5GHz-23dBi", resolucion: "", extra: "Hasta 10 km" },
        { categoria: "Red", marca: "Genérico", tipo: "Router", modelo: "RTR-Gb-4P", resolucion: "", extra: "4 puertos Gb" }
      ];

      const catalogosModelos = {
        Camara: catalogoCamaras,
        Energia: catalogoEnergia,
        Alarma: catalogoAlarma,
        Switch: catalogoSwitch,
        Red: catalogoRed
      };

      // ---------- utils errores / estados ----------
      function clearErrors() {
        document.querySelectorAll("[data-error-for]").forEach((e) => {
          e.textContent = "";
        });
      }

      function setError(fieldId, message) {
        const errorEl = document.querySelector(
          '[data-error-for="' + fieldId + '"]'
        );
        if (errorEl) errorEl.textContent = message || "";
      }

      // ---------- render líneas y subcategorías ----------
      function renderLineas() {
        lineasGrid.innerHTML = "";
        lineasConfig.forEach((ln) => {
          const card = document.createElement("div");
          card.className = "pos-card";
          card.dataset.linea = ln.id;

          const icon = document.createElement("div");
          icon.className = "pos-icon";
          icon.innerHTML = ln.icono + '<div class="pos-icon-label">Línea</div>';

          const body = document.createElement("div");
          body.className = "pos-card-body";
          body.innerHTML =
            '<div class="pos-name">' +
            ln.nombre +
            "</div><div class=\"pos-detail\">" +
            ln.detalle +
            "</div>";

          card.appendChild(icon);
          card.appendChild(body);
          lineasGrid.appendChild(card);
        });
      }

      function renderSubcategorias(lineaId) {
        posGrid.innerHTML = "";
        const subcats = subcategoriasPorLinea[lineaId] || [];
        if (!subcats.length) {
          posGrid.innerHTML =
            '<p class="summary-text">Selecciona una línea de negocio para ver las subcategorías.</p>';
          return;
        }

        subcats.forEach((sc) => {
          const card = document.createElement("div");
          card.className = "pos-card";
          card.dataset.subcat = sc.id;
          card.dataset.basecat = sc.baseCategoria;

          const icon = document.createElement("div");
          icon.className = "pos-icon";
          icon.innerHTML =
            sc.icon +
            '<div class="pos-icon-label">' +
            lineaId +
            "</div>";

          const body = document.createElement("div");
          body.className = "pos-card-body";
          body.innerHTML =
            '<div class="pos-name">' +
            sc.label +
            "</div><div class=\"pos-detail\">" +
            sc.detalle +
            "</div>";

          card.appendChild(icon);
          card.appendChild(body);
          posGrid.appendChild(card);
        });
      }

      // ---------- lógica de subtipos / campos ----------
      function actualizarSubtipos() {
        subtipoSelect.innerHTML = "";
        const subtipos =
          subtiposPorCategoriaTecnica[categoriaTecnicaActual] || [];

        if (!subtipos.length) {
          const opt = document.createElement("option");
          opt.value = "";
          opt.textContent = "N/A";
          subtipoSelect.appendChild(opt);
          return;
        }
        const optDefault = document.createElement("option");
        optDefault.value = "";
        optDefault.textContent = "Selecciona una opción";
        subtipoSelect.appendChild(optDefault);

        subtipos.forEach((s) => {
          const opt = document.createElement("option");
          opt.value = s;
          opt.textContent = s;
          subtipoSelect.appendChild(opt);
        });
        controlarCampoPuntoElectrico();
      }

      function controlarCampoPuntoElectrico() {
        const subtipo = subtipoSelect.value.trim();
        if (categoriaTecnicaActual === "Energia" && subtipo === "Punto eléctrico") {
          fieldPuntoElectrico.style.display = "block";
        } else {
          fieldPuntoElectrico.style.display = "none";
          metrosPuntoElectricoInput.value = "";
        }
      }

      subtipoSelect.addEventListener("change", controlarCampoPuntoElectrico);

      function actualizarVisibilidadCamaras() {
        if (categoriaTecnicaActual === "Camara") {
          condicionEquipoRow.style.display = "block";
        } else {
          condicionEquipoRow.style.display = "none";
          condicionEquipoSelect.value = "";
          aplicarCondicionEquipo(true);
        }
      }

      function setDisabledForCameraClient(disabled) {
        marcaSelect.disabled = disabled;
        subtipoSelect.disabled = disabled;
        modeloSelect.disabled = disabled;
        document
          .querySelectorAll('input[name="altura"]')
          .forEach((r) => (r.disabled = disabled));
        document.getElementById("metrosCable").disabled = disabled;
        document
          .querySelectorAll("#accesoriosGrid input")
          .forEach((el) => (el.disabled = disabled));
        document.getElementById("descripcion").disabled = disabled;

        const targets = [
          marcaSelect,
          subtipoSelect,
          modeloSelect,
          document.getElementById("metrosCable"),
          document.getElementById("descripcion")
        ];
        targets.forEach((t) => {
          if (!t) return;
          t.style.opacity = disabled ? "0.6" : "1";
        });
        alturaGroup.style.opacity = disabled ? "0.6" : "1";
        document.getElementById("accesoriosGrid").style.opacity = disabled
          ? "0.6"
          : "1";
      }

      function aplicarCondicionEquipo(resetOnly) {
        if (categoriaTecnicaActual !== "Camara") {
          setDisabledForCameraClient(false);
          return;
        }
        if (resetOnly) {
          setDisabledForCameraClient(false);
          return;
        }
        const cond = condicionEquipoSelect.value;
        const esCliente = cond === "Cliente";

        if (esCliente) {
          marcaSelect.value = "";
          subtipoSelect.value = "";
          modeloSelect.innerHTML =
            '<option value="">N/A (equipo del cliente)</option>';
          document
            .querySelectorAll('input[name="altura"]')
            .forEach((r) => (r.checked = false));
          document.getElementById("metrosCable").value = "";
          document.getElementById("descripcion").value = "";
          limpiarAccesorios();
          setDisabledForCameraClient(true);
        } else {
          setDisabledForCameraClient(false);
          modeloSelect.innerHTML =
            '<option value="">Selecciona un modelo</option>';
          fillModelosSegunCategoria();
        }
      }

      condicionEquipoSelect.addEventListener("change", () => {
        aplicarCondicionEquipo(false);
      });

      function fillModelosSegunCategoria() {
        modeloSelect.innerHTML =
          '<option value="">Selecciona un modelo</option>';
        const cat = catalogosModelos[categoriaTecnicaActual] || [];
        const modelosUnicos = Array.from(new Set(cat.map((i) => i.modelo)));

        modelosUnicos.forEach((m) => {
          const opt = document.createElement("option");
          opt.value = m;
          opt.textContent = m;
          modeloSelect.appendChild(opt);
        });
      }

      // ---------- eventos líneas / subcategorías ----------
      lineasGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".pos-card");
        if (!card) return;

        document
          .querySelectorAll("#lineasGrid .pos-card")
          .forEach((c) => c.classList.remove("active"));
        card.classList.add("active");

        const lineaId = card.dataset.linea;
        const lineaCfg = lineasConfig.find((l) => l.id === lineaId);
        lineaNegocioActual = lineaId;
        lineaNegocioInput.value = lineaCfg ? lineaCfg.nombre : lineaId;

        // Reset subcategoría y categoría técnica
        subcategoriaActual = "";
        categoriaTecnicaActual = "";
        categoriaInput.value = "";
        subtipoSelect.innerHTML =
          '<option value="">Selecciona línea y subcategoría primero</option>';
        condicionEquipoSelect.value = "";
        actualizarVisibilidadCamaras();
        setDisabledForCameraClient(false);

        document
          .querySelectorAll("#posGrid .pos-card")
          .forEach((c) => c.classList.remove("active"));
        renderSubcategorias(lineaId);
      });

      posGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".pos-card");
        if (!card) return;

        if (!lineaNegocioActual) {
          alert("Primero selecciona una línea de negocio.");
          return;
        }

        document
          .querySelectorAll("#posGrid .pos-card")
          .forEach((c) => c.classList.remove("active"));
        card.classList.add("active");

        const subcatId = card.dataset.subcat;
        const baseCat = card.dataset.basecat;
        const lineaSubcats = subcategoriasPorLinea[lineaNegocioActual] || [];
        const scCfg = lineaSubcats.find((s) => s.id === subcatId);

        subcategoriaActual = scCfg ? scCfg.label : subcatId;
        categoriaTecnicaActual = baseCat || "Otro";

        categoriaInput.value = subcategoriaActual;

        actualizarSubtipos();
        actualizarVisibilidadCamaras();
        if (categoriaTecnicaActual !== "Camara") {
          condicionEquipoSelect.value = "";
          aplicarCondicionEquipo(true);
        }
        if (catalogosModelos[categoriaTecnicaActual]) {
          fillModelosSegunCategoria();
        } else {
          modeloSelect.innerHTML =
            '<option value="">Modelo a ingresar manualmente</option>';
        }
      });

      // ---------- coordenadas ----------
      btnCoords.addEventListener("click", () => {
        const latField = document.getElementById("latitud");
        const lonField = document.getElementById("longitud");

        if (!navigator.geolocation) {
          alert("Geolocalización no soportada por este navegador.");
          return;
        }

        btnCoords.disabled = true;
        btnCoords.textContent = "Tomando coordenada...";

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            latField.value = latitude.toFixed(6);
            lonField.value = longitude.toFixed(6);
            btnCoords.disabled = false;
            btnCoords.textContent = "Tomar coordenada";
          },
          (err) => {
            console.error(err);
            alert("No se pudo obtener la ubicación.");
            btnCoords.disabled = false;
            btnCoords.textContent = "Tomar coordenada";
          },
          {
            enableHighAccuracy: true,
            timeout: 8000,
            maximumAge: 0
          }
        );
      });

      // ---------- accesorios ----------
      function obtenerAccesorios() {
        const accesorios = [];
        const rows = document.querySelectorAll("#accesoriosGrid .accessory-row");
        rows.forEach((row) => {
          const checkbox = row.querySelector("input[type='checkbox'][data-acc]");
          const qtyInput = row.querySelector("input[data-acc-qty]");
          if (!checkbox || !qtyInput) return;
          if (checkbox.checked) {
            const tipo = checkbox.getAttribute("data-acc");
            const cantidad = Number(qtyInput.value || 0);
            if (cantidad > 0) {
              accesorios.push({ tipo, cantidad });
            }
          }
        });
        return accesorios;
      }

      function limpiarAccesorios() {
        const rows = document.querySelectorAll("#accesoriosGrid .accessory-row");
        rows.forEach((row) => {
          const checkbox = row.querySelector("input[type='checkbox'][data-acc]");
          const qtyInput = row.querySelector("input[data-acc-qty]");
          if (checkbox) checkbox.checked = false;
          if (qtyInput) qtyInput.value = "";
        });
      }

      // ---------- submit ítem ----------
      itemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();

        const lineaNegocio = lineaNegocioInput.value.trim();
        const categoriaLabel = categoriaInput.value.trim();
        const marca = marcaSelect.value.trim();
        const subtipo = subtipoSelect.value.trim();
        const modelo = modeloSelect.value.trim();
        const metrosCableVal = document.getElementById("metrosCable").value;
        const descripcion = document.getElementById("descripcion").value.trim();
        const latitud = document.getElementById("latitud").value.trim();
        const longitud = document.getElementById("longitud").value.trim();
        const condicionEquipo =
          categoriaTecnicaActual === "Camara"
            ? condicionEquipoSelect.value.trim()
            : "";

        const alturaRadio = document.querySelector(
          'input[name="altura"]:checked'
        );
        const altura = alturaRadio ? alturaRadio.value : "";

        const esCamaraCliente =
          categoriaTecnicaActual === "Camara" && condicionEquipo === "Cliente";

        let isValid = true;

        if (!lineaNegocio) {
          setError("lineaNegocio", "Selecciona una línea de negocio.");
          isValid = false;
        }
        if (!categoriaLabel) {
          setError("categoria", "Selecciona una subcategoría / sistema.");
          isValid = false;
        }

        if (categoriaTecnicaActual === "Camara" && !condicionEquipo) {
          setError("condicionEquipo", "Selecciona si es Cliente / Nueva / Reemplazo.");
          isValid = false;
        }

        if (!esCamaraCliente) {
          if (!marca) {
            setError("marca", "Selecciona una marca.");
            isValid = false;
          }
          if (!modelo) {
            setError("modelo", "Selecciona un modelo.");
            isValid = false;
          }
          if (!altura) {
            setError("altura", "Selecciona la altura de instalación.");
            isValid = false;
          }
          if (metrosCableVal === "" || Number(metrosCableVal) < 0) {
            setError(
              "metrosCable",
              "Ingresa los metros de cable (puede ser 0 si no aplica)."
            );
            isValid = false;
          }
        }

        let metrosCable = 0;
        if (!esCamaraCliente) {
          metrosCable = Number(metrosCableVal || 0);
        }

        let metrosPuntoElectrico = 0;
        if (categoriaTecnicaActual === "Energia" && subtipo === "Punto eléctrico") {
          metrosPuntoElectrico = Number(metrosPuntoElectricoInput.value || 0);
        }

        if (!isValid) return;

        const fotos = Array.from(fotosInput.files || []).slice(0, 2).map(
          (f) => ({
            name: f.name,
            type: f.type,
            size: f.size
          })
        );

        const accesorios = esCamaraCliente ? [] : obtenerAccesorios();

        const item = {
          lineaNegocio,
          subcategoria: categoriaLabel,
          categoriaTecnica: categoriaTecnicaActual,
          marca: esCamaraCliente ? "" : marca,
          subtipo: esCamaraCliente ? "" : subtipo,
          modelo: esCamaraCliente ? "" : modelo,
          altura: esCamaraCliente ? "" : altura,
          metrosCable,
          metrosPuntoElectrico,
          descripcion: esCamaraCliente ? "" : descripcion,
          latitud,
          longitud,
          accesorios,
          fotos,
          camaraCliente: esCamaraCliente,
          condicionEquipo
        };

        itemsSeleccionados.push(item);
        console.log("Ítems seleccionados:", itemsSeleccionados);

        renderItemsList();
        resetItemForm(false);
      });

      // ---------- render listado ----------
      function renderItemsList() {
        itemsList.innerHTML = "";

        if (!itemsSeleccionados.length) {
          itemsList.innerHTML =
            '<p class="summary-text">Aún no has agregado ningún equipo.</p>';
          itemsCount.textContent = "0";
          statusText.textContent = "Sin ítems aún";
          return;
        }

        itemsSeleccionados.forEach((item, idx) => {
          const row = document.createElement("div");
          row.className = "item-row";

          const col1 = document.createElement("div");
          let tituloBase =
            (item.lineaNegocio || "Sin línea") +
            " · " +
            (item.subcategoria || item.categoriaTecnica || "Sin sistema");

          if (item.categoriaTecnica === "Camara") {
            if (item.camaraCliente) {
              tituloBase += " · [CÁMARA DEL CLIENTE]";
            }
            if (item.condicionEquipo && item.condicionEquipo !== "Cliente") {
              tituloBase += " (" + item.condicionEquipo + ")";
            }
          }

          const subtipoTxt = item.subtipo ? " · " + item.subtipo : "";

          col1.innerHTML =
            '<div class="item-title">' +
            (idx + 1) +
            ". " +
            tituloBase +
            subtipoTxt +
            "</div>" +
            (item.descripcion
              ? '<div class="item-meta">' + item.descripcion + "</div>"
              : "");

          const col2 = document.createElement("div");
          let metrosPEtxt = "";
          if (item.categoriaTecnica === "Energia" && item.metrosPuntoElectrico > 0) {
            metrosPEtxt =
              '<div class="item-meta">' +
              item.metrosPuntoElectrico +
              " m punto eléctrico</div>";
          }

          const marcaTxt = item.camaraCliente ? "N/A (cliente)" : item.marca;

          col2.innerHTML =
            '<span class="badge-small badge-brand">' +
            (marcaTxt || "Sin marca") +
            "</span>" +
            (item.altura
              ? '<div class="item-meta">' + item.altura + "</div>"
              : "") +
            (item.metrosCable > 0
              ? '<div class="item-meta">' + item.metrosCable + " m cable</div>"
              : "") +
            metrosPEtxt;

          const col3 = document.createElement("div");
          const coordText =
            item.latitud && item.longitud
              ? item.latitud + ", " + item.longitud
              : "Sin coordenadas";
          const fotosText =
            item.fotos && item.fotos.length
              ? item.fotos.length + " foto(s)"
              : "Sin fotos";

          let accText = "Sin accesorios";
          if (item.accesorios && item.accesorios.length) {
            accText =
              "Accesorios: " +
              item.accesorios
                .map((a) => a.tipo + " x" + a.cantidad)
                .join(", ");
          }

          col3.innerHTML =
            '<div class="item-meta">' +
            coordText +
            "</div>" +
            '<div class="item-meta">' +
            fotosText +
            "</div>" +
            '<div class="item-meta">' +
            accText +
            "</div>";

          row.appendChild(col1);
          row.appendChild(col2);
          row.appendChild(col3);
          itemsList.appendChild(row);
        });

        itemsCount.textContent = String(itemsSeleccionados.length);
        statusText.textContent = "Ítems cargados en esta inspección";
      }

      // ---------- reset / vaciar ----------
      function resetItemForm(clearEverything) {
        if (clearEverything) {
          lineaNegocioInput.value = "";
          categoriaInput.value = "";
          lineaNegocioActual = "";
          subcategoriaActual = "";
          categoriaTecnicaActual = "";
          document
            .querySelectorAll("#lineasGrid .pos-card")
            .forEach((c) => c.classList.remove("active"));
          posGrid.innerHTML =
            '<p class="summary-text">Selecciona una línea de negocio para ver las subcategorías.</p>';
          subtipoSelect.innerHTML =
            '<option value="">Selecciona línea y subcategoría primero</option>';
          condicionEquipoSelect.value = "";
        } else {
          marcaSelect.value = "";
          subtipoSelect.value = "";
          modeloSelect.innerHTML =
            '<option value="">Selecciona un modelo</option>';
          condicionEquipoSelect.value = "";
        }

        document
          .querySelectorAll('input[name="altura"]')
          .forEach((r) => (r.checked = false));
        document.getElementById("metrosCable").value = "";
        metrosPuntoElectricoInput.value = "";
        fieldPuntoElectrico.style.display = "none";
        document.getElementById("descripcion").value = "";
        document.getElementById("latitud").value = "";
        document.getElementById("longitud").value = "";
        fotosInput.value = "";
        limpiarAccesorios();
        setDisabledForCameraClient(false);
        clearErrors();
      }

      limpiarItemBtn.addEventListener("click", () => {
        resetItemForm(true);
      });

      vaciarListaBtn.addEventListener("click", () => {
        if (!itemsSeleccionados.length) return;
        if (!confirm("¿Seguro que deseas vaciar todo el listado de ítems?")) {
          return;
        }
        itemsSeleccionados = [];
        console.log("Listado vaciado.");
        renderItemsList();
      });

      finalizarBtn.addEventListener("click", () => {
        if (!itemsSeleccionados.length) {
          alert("Aún no hay ítems en el listado.");
          return;
        }
        console.log("Selección finalizada. Ítems:", itemsSeleccionados);
        alertBox.innerHTML =
          "<strong>Selección finalizada (demo).</strong> Revisa la consola para ver el JSON con todos los ítems. Desde aquí puedes enviarlo a tu backend o guardarlo.";
      });

      // ---------- modal modelos ----------
      function prepararPills(catalogo) {
        tipoPills.innerHTML = "";
        marcaPills.innerHTML = "";

        const tipos = Array.from(new Set(catalogo.map((i) => i.tipo))).filter(
          (t) => t && t.length
        );
        const marcas = Array.from(
          new Set(catalogo.map((i) => i.marca))
        ).filter((m) => m && m.length);

        const pillTodosTipo = document.createElement("button");
        pillTodosTipo.className = "pill active";
        pillTodosTipo.dataset.tipo = "";
        pillTodosTipo.textContent = "Todos";
        tipoPills.appendChild(pillTodosTipo);

        tipos.forEach((t) => {
          const b = document.createElement("button");
          b.className = "pill";
          b.dataset.tipo = t;
          b.textContent = t;
          tipoPills.appendChild(b);
        });

        const pillTodasMarca = document.createElement("button");
        pillTodasMarca.className = "pill active";
        pillTodasMarca.dataset.marca = "";
        pillTodasMarca.textContent = "Todas";
        marcaPills.appendChild(pillTodasMarca);

        marcas.forEach((m) => {
          const b = document.createElement("button");
          b.className = "pill";
          b.dataset.marca = m;
          b.textContent = m;
          marcaPills.appendChild(b);
        });
      }

      function abrirModalModelos() {
        if (!categoriaTecnicaActual) {
          alert("Primero selecciona línea de negocio y subcategoría.");
          return;
        }

        if (
          categoriaTecnicaActual === "Camara" &&
          condicionEquipoSelect.value === "Cliente"
        ) {
          alert("En modo 'Cliente' no se selecciona modelo de catálogo.");
          return;
        }

        const catalogo = catalogosModelos[categoriaTecnicaActual];
        if (!catalogo || !catalogo.length) {
          alert("No hay catálogo definido para esta categoría técnica (demo).");
          return;
        }

        categoriaModalActual = categoriaTecnicaActual;
        modalTitle.textContent =
          "Seleccionar modelo · " + categoriaTecnicaActual;
        modalSubtitle.textContent =
          "Filtra por tipo y marca, luego toca el modelo para cargarlo en el formulario.";

        searchModelo.value = "";
        prepararPills(catalogo);
        renderCamarasGrid();
        modalModelos.classList.add("show");
      }

      function cerrarModalModelos() {
        modalModelos.classList.remove("show");
      }

      btnModelosModal.addEventListener("click", abrirModalModelos);
      modalCloseBtn.addEventListener("click", cerrarModalModelos);
      modalModelos.addEventListener("click", (e) => {
        if (e.target === modalModelos) cerrarModalModelos();
      });

      function getFiltroTipo() {
        const active = tipoPills.querySelector(".pill.active");
        return active ? active.getAttribute("data-tipo") || "" : "";
      }

      function getFiltroMarca() {
        const active = marcaPills.querySelector(".pill.active");
        return active ? active.getAttribute("data-marca") || "" : "";
      }

      tipoPills.addEventListener("click", (e) => {
        const pill = e.target.closest(".pill");
        if (!pill) return;
        tipoPills.querySelectorAll(".pill").forEach((p) =>
          p.classList.remove("active")
        );
        pill.classList.add("active");
        renderCamarasGrid();
      });

      marcaPills.addEventListener("click", (e) => {
        const pill = e.target.closest(".pill");
        if (!pill) return;
        marcaPills.querySelectorAll(".pill").forEach((p) =>
          p.classList.remove("active")
        );
        pill.classList.add("active");
        renderCamarasGrid();
      });

      searchModelo.addEventListener("input", renderCamarasGrid);

      function renderCamarasGrid() {
        camarasGrid.innerHTML = "";
        if (!categoriaModalActual) return;

        const catalogo = catalogosModelos[categoriaModalActual] || [];
        const filtroTipo = getFiltroTipo();
        const filtroMarca = getFiltroMarca();
        const busqueda = searchModelo.value.trim().toLowerCase();

        const filtradas = catalogo.filter((item) => {
          if (filtroTipo && item.tipo !== filtroTipo) return false;
          if (filtroMarca && item.marca !== filtroMarca) return false;
          if (
            busqueda &&
            item.modelo.toLowerCase().indexOf(busqueda) === -1 &&
            item.extra.toLowerCase().indexOf(busqueda) === -1
          ) {
            return false;
          }
          return true;
        });

        if (!filtradas.length) {
          camarasGrid.innerHTML =
            '<p class="summary-text">No hay resultados con los filtros actuales.</p>';
          return;
        }

        filtradas.forEach((it) => {
          const card = document.createElement("div");
          card.className = "camera-card";

          const thumb = document.createElement("div");
          thumb.className = "camera-thumbnail";

          const bodyShape = document.createElement("div");
          bodyShape.className = "camera-body-shape";
          const lens = document.createElement("div");
          lens.className = "camera-lens";

          thumb.appendChild(bodyShape);
          thumb.appendChild(lens);

          const info = document.createElement("div");
          const title = document.createElement("div");
          title.className = "camera-card-info-title";
          title.textContent = it.marca + " · " + it.modelo;

          const sub = document.createElement("div");
          sub.className = "camera-card-info-sub";
          const subTxtParts = [];
          if (it.tipo) subTxtParts.push(it.tipo);
          if (it.resolucion) subTxtParts.push(it.resolucion);
          sub.textContent = subTxtParts.join(" · ");

          const tags = document.createElement("div");
          tags.className = "camera-tags";

          if (it.tipo) {
            const tagTipo = document.createElement("div");
            tagTipo.className = "camera-tag dot";
            tagTipo.textContent = it.tipo;
            tags.appendChild(tagTipo);
          }

          if (it.resolucion) {
            const tagRes = document.createElement("div");
            tagRes.className = "camera-tag";
            tagRes.textContent = it.resolucion;
            tags.appendChild(tagRes);
          }

          if (it.extra) {
            const tagExtra = document.createElement("div");
            tagExtra.className = "camera-tag";
            tagExtra.textContent = it.extra;
            tags.appendChild(tagExtra);
          }

          info.appendChild(title);
          info.appendChild(sub);
          info.appendChild(tags);

          card.appendChild(thumb);
          card.appendChild(info);

          card.addEventListener("click", () => {
            if (!categoriaTecnicaActual || categoriaTecnicaActual !== it.categoria) {
              categoriaTecnicaActual = it.categoria;
              actualizarSubtipos();
              actualizarVisibilidadCamaras();
            }

            marcaSelect.value = it.marca || "";
            actualizarSubtipos();
            subtipoSelect.value = it.tipo || "";

            modeloSelect.innerHTML = "";
            const opt = document.createElement("option");
            opt.value = it.modelo;
            opt.textContent = it.modelo;
            modeloSelect.appendChild(opt);
            modeloSelect.value = it.modelo;

            cerrarModalModelos();
          });

          camarasGrid.appendChild(card);
        });
      }

      // ---------- init ----------
      renderLineas();
      posGrid.innerHTML =
        '<p class="summary-text">Selecciona una línea de negocio para ver las subcategorías.</p>';
    })();

  const btnGrabacion = document.getElementById("btnGrabacion");
const modalGrabacion = document.getElementById("modalGrabacion");
const cerrarGrabacion = document.getElementById("cerrarGrabacion");
const calcularStorage = document.getElementById("calcularStorage");

btnGrabacion.addEventListener("click", () => {
  modalGrabacion.style.display = "flex";
});

cerrarGrabacion.addEventListener("click", () => {
  modalGrabacion.style.display = "none";
});

ccalcularStorage.addEventListener("click", () => {

  const tipoGrabacion = parseFloat(document.getElementById("tipoGrabacion").value);
  const resolucion = parseFloat(document.getElementById("resolucion").value);
  const fps = parseFloat(document.getElementById("fps").value);
  const codec = parseFloat(document.getElementById("codec").value);
  const dias = parseFloat(document.getElementById("dias").value);

  const numeroCamaras = document.querySelectorAll("#itemsList .item-card").length || 1;

  let bitratePorCamara = resolucion * fps * 0.07;
  bitratePorCamara = bitratePorCamara * codec * tipoGrabacion;

  const bitrateTotal = bitratePorCamara * numeroCamaras;

  const almacenamientoGB =
    (bitrateTotal * 86400 * dias) / 8 / 1024;

  const almacenamientoTB = almacenamientoGB / 1024;

  document.getElementById("resultadoStorage").innerHTML = `
    Cámaras detectadas: ${numeroCamaras} <br>
    Bitrate total estimado: ${bitrateTotal.toFixed(2)} Mbps <br>
    Storage requerido: ${almacenamientoTB.toFixed(2)} TB
  `;

});

const arquitectura = document.getElementById("arquitectura");
const opcionesArquitectura = document.getElementById("opcionesArquitectura");

arquitectura.addEventListener("change", () => {

  let html = "";

  if (arquitectura.value === "nvr") {
    html = `
      <label class="label">Modelo NVR</label>
      <select id="modeloArq" class="select">
        <option value="8">8 CH</option>
        <option value="16">16 CH</option>
        <option value="32">32 CH</option>
      </select>
    `;
  }

  if (arquitectura.value === "virtual") {
    html = `
      <label class="label">Servidor Virtual</label>
      <select id="modeloArq" class="select">
        <option value="30">30 DÍAS</option>
        <option value="60">60 DÍAS</option>
      </select>
    `;
  }

  if (arquitectura.value === "fisico") {
    html = `
      <label class="label">Servidor Físico</label>
      <select id="modeloArq" class="select">
        <option value="BCD">BCD</option>
        <option value="OLSEK">OLSEK</option>
        <option value="DELL">DELL</option>
      </select>
    `;
  }

  opcionesArquitectura.innerHTML = html;

});
