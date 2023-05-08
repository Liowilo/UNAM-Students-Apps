const aplicaciones = {
    informatica: [
      {
        nombre: "Wolfram Alpha",
        url: "https://www.wolframalpha.com/"
      },
      {
        nombre: "Codecademy",
        url: "https://www.codecademy.com/"
      },
      {
        nombre: "Grammarly",
        url: "https://www.grammarly.com/"
      },
      {
        nombre: "SoloLearn",
        url: "https://www.sololearn.com/"
      },
      {
        nombre: "GitHub",
        url: "https://github.com/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/es"
      }
    ],
    administracion: [
      {
        nombre: "Google Drive",
        url: "https://www.google.com/intl/es_es/drive/"
      },
      {
        nombre: "Asana",
        url: "https://asana.com/es"
      },
      {
        nombre: "Excel",
        url: "https://www.microsoft.com/es-es/microsoft-365/excel"
      },
      {
        nombre: "Slack",
        url: "https://slack.com/intl/es-mx/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ],
    contaduria: [
      {
        nombre: "Google Sheets",
        url: "https://docs.google.com/spreadsheets/u/0/"
      },
      {
        nombre: "QuickBooks",
        url: "https://quickbooks.intuit.com/mx/"
      },
      {
        nombre: "Slack",
        url: "https://slack.com/intl/es-mx/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      },
      {
        nombre: "Xero",
        url: "https://www.xero.com/"
      }
    ],
    diseño: [
      {
        nombre: "Adobe Creative Cloud",
        url: "https://www.adobe.com/mx/"
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/onboarding/adobe"
      },
      {
        nombre: "Sketch",
        url: "https://www.sketch.com/"
      },
      {
        nombre: "Canva",
        url: "https://www.canva.com/es_419/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ],
    farmacia: [
      {
        nombre: "Epocrates",
        url: "https://www.epocrates.com/"
      },
      {
        nombre: "Medscape",
        url: "https://www.medscape.com/"
      },
      {
        nombre: "GoodRx",
        url: "https://www.goodrx.com/es"
      },
      {
        nombre: "Quizlet",
        url: "https://quizlet.com/es"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ],
    agricola:[
      {
        nombre: "BoosterAgro",
        url:"https://boosteragro.com/"
      },
      {
        nombre:"AutoCAD",
        url:"https://www.autodesk.mx/products/autocad"
      },
      {
       nombre:"AgriXP",
       url:"https://agrixp.com/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ],
    alimentos:[
      {
        nombre: "Food Safety Tech",
        url: "https://foodsafetytech.com/"
      },
      {
        nombre: "Fooducate",
        url: "https://www.fooducate.com/"
      },
      {
        nombre: "LabSuit",
        url:"https://www.labsuit.com/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ],
    telecomunicaciones: [
      {
        nombre: "Cisco Packet Tracer",
        url: "https://learningnetwork.cisco.com/s"
      },
      {
        nombre: "Wolfram Alpha",
        url:"https://www.wolframalpha.com/"
      },
      {
        nombre: "EasyEDA",
        url:"https://easyeda.com/es"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      },
      {
        nombre: "Slack",
        url: "https://slack.com/intl/es-mx/"
      }
    ],
    industrial:[
      {
        nombre:"Arena Simulation",
        url:"https://www.rockwellautomation.com/es-mx/products/software/arena-simulation.html"
      },
      {
        nombre:"Microsoft Excel",
        url:"https://www.microsoft.com/es-mx/microsoft-365/excel"
      },
      {
        nombre:"Lucidchart",
        url:"https://www.lucidchart.com/pages/es"
      },
      {
        nombre: "MiniTab",
        url: "https://www.minitab.com/es-mx/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ],
    electrica:[
      {
        nombre:"Autodesk Inventor",
        url:"https://www.autodesk.mx/products/inventor"
      },
      {
        nombre: "Wolfram Alpha",
        url:"https://www.wolframalpha.com/"
      },
      {
        nombre:"MATLAB",
        url:"https://www.mathworks.com/products/matlab.html"
      },
      {
        nombre: "PSpice",
        url:"https://www.pspice.com/"
      },
      {
        nombre:"Ansys",
        url:"https://www.ansys.com/"
      }
    ],
    quimica: [
      {
        nombre:"Aspen Plus",
        url: "https://www.aspentech.com/en/products/engineering/aspen-plus"
      },
      {
        nombre: "ChemDraw",
        url: "https://perkinelmerinformatics.com/products/research/chemdraw"
      },
      {
        nombre:"Mendeley",
        url:"https://www.mendeley.com/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ],
    medicina:[
      {
        nombre:"Merck Veterinary Manual",
        url: "https://www.msdvetmanual.com/"
      },
      {
        nombre:"Vetcalculators",
        url:"https://www.vetcalculators.com/index.html"
      },
      {
        nombre:"VetCompanion",
        url:"https://vetcompanion.com/"
      },
      {
        nombre:"Vet Anatomy",
        url:"https://play.google.com/store/apps/details?id=net.imaios.vetanatomy&hl=es_CO"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      }
    ]

  };
  
  const selectCarrera = document.getElementById("carrera");
  const contenido = document.getElementById("contenido");
  
  selectCarrera.addEventListener("change", function() {
    const carreraSeleccionada = this.value;
    if (carreraSeleccionada === "opcion") {
      contenido.innerHTML = "";
      html="";
    } else {
      const aplicacionesCarrera = aplicaciones[carreraSeleccionada];
      let html = "<h2>Aplicaciones recomendadas:</h2><ul>";
      for (const app of aplicacionesCarrera) {
        html += `<li><a href="${app.url}">${app.nombre}</a></li>`;
      }
      html += "</ul>";
      contenido.innerHTML = html;
    }
  });

  function resetSelect() {
    document.getElementById("carrera").selectedIndex = 5;
  }

const select = document.getElementById("carrera");
const info = document.getElementById("info");

select.addEventListener("change", function() {
  if (select.value === "opcion") {
    info.textContent="";
  }  
    else if (select.value === "informatica") {
    info.textContent = "Es una herramienta de gestión de proyectos que te permite organizar tus tareas en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.";
  } else if (select.value === "administracion") {
    info.textContent = "Información de la opción 2";
  } else if (select.value === "option3") {
    info.textContent = "Información de la opción 3";
  }
});
