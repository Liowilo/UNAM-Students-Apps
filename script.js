const aplicaciones = {
    informatica: [
      {
        nombre: "Trello",
        url: "https://trello.com/es"
      },
      {
        nombre: "Codecademy",
        url: "https://www.codecademy.com/"
      },
      {
        nombre: "GitHub",
        url: "https://github.com/"
      },
      {
        nombre: "Wolfram Alpha",
        url: "https://www.wolframalpha.com/"
      },
      {
        nombre: "Grammarly",
        url: "https://www.grammarly.com/"
      },
      {
        nombre: "SoloLearn",
        url: "https://www.sololearn.com/"
      }
    ],
    administracion: [
      {
        nombre: "Excel",
        url: "https://www.microsoft.com/es-es/microsoft-365/excel"
      },
      {
        nombre: "Google Drive",
        url: "https://www.google.com/intl/es_es/drive/"
      },
      {
        nombre: "Trello",
        url: "https://trello.com/"
      },
      {
        nombre: "Slack",
        url: "https://slack.com/intl/es-mx/"
      },
      {
        nombre: "Asana",
        url: "https://asana.com/es"
      }
    ]
  };
  
  const selectCarrera = document.getElementById("carrera");
  const contenido = document.getElementById("contenido");
  
  selectCarrera.addEventListener("change", function() {
    const carreraSeleccionada = this.value;
    if (carreraSeleccionada === "") {
      contenido.innerHTML = "";
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
