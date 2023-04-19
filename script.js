const aplicaciones = {
    informatica: [
      {
        nombre: "Visual Studio Code",
        url: "https://code.visualstudio.com/"
      },
      {
        nombre: "Sublime Text",
        url: "https://www.sublimetext.com/"
      },
      {
        nombre: "GitHub",
        url: "https://github.com/"
      },
      {
        nombre: "GitLab",
        url: "https://gitlab.com/"
      },
      {
        nombre: "MySQL",
        url: "https://www.mysql.com/"
      },
      {
        nombre: "MongoDB",
        url: "https://www.mongodb.com/"
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