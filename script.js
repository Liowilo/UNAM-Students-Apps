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
        nombre: "Evernote",
        url: "https://evernote.com/intl/es"
      },
      {
        nombre: "Pocket",
        url: "https://getpocket.com/es/"
      },
      {
        nombre: "Asana",
        url: "https://asana.com/es"
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
    document.getElementById("carrera").selectedIndex = 0;
  }

const select = document.getElementById("carrera");
const info = document.getElementById("info");

select.addEventListener("change", function() {
  if (select.value === "opcion") {
    info.textContent="";
  }  
    else if (select.value === "informatica") {
    info.innerHTML="<h2>Wolfram Alpha</h2>"+
    "<p>Es una herramienta de gestión de proyectos que te permite organizar tus tareas en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"+
    "<h2>Codecademy</h2>"+
    "<p>Esta aplicación ofrece cursos interactivos en línea de programación y ciencias de la computación. Es una forma excelente de aprender nuevos lenguajes de programación y mejorar tus habilidades.</p>"+
    "<h2>Grammarly</h2>"+
    "<p>Esta aplicación de corrección gramatical te ayudará a mejorar tus habilidades de escritura en inglés. Te proporcionará sugerencias de gramática y ortografía para que puedas escribir con confianza.</p>"+
    "<h2>SoloLearn</h2>"+
    "<p>Es una aplicación que ofrece cursos interactivos en línea de diferentes lenguajes de programación, incluyendo Python, Java, C++, entre otros.</p>"+
    "<h2>GitHub</h2>"+
    "<p>Esta plataforma es esencial para cualquier estudiante de informática que quiera colaborar en proyectos de código abierto y compartir su propio código. Además, es una herramienta excelente para llevar un control de versiones de tus proyectos.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos que te permite organizar tus tareas en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  } else if (select.value === "administracion") {
    info.innerHTML="<h2>Evernote</h2>"+
    "<p>Es una aplicación de notas y organización que te permite tomar notas en diferentes formatos, como texto, imágenes, audio y video. Puedes organizar tus notas en libretas y etiquetas, y buscar fácilmente el contenido que necesitas.</p>"+
    "<h2>Pocket</h2>"+
    "<p>Esta aplicación te permite guardar artículos, videos y otros contenidos que encuentres en línea para leerlos más tarde. Es muy útil para guardar información relevante para tus trabajos y proyectos de investigación.</p>"+
    "<h2>Asana</h2>"+
    "<p>Es una herramienta de gestión de proyectos y tareas que te permite organizar y asignar tareas a diferentes miembros del equipo. También puedes crear calendarios y establecer fechas límite para las tareas.</p>"+
    "<h2>Slack</h2>"+
    "<p>Es una plataforma de comunicación en línea que te permite comunicarte con tu equipo de trabajo de forma eficiente. Puedes utilizarla para enviar mensajes, compartir archivos y realizar videollamadas.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos que te permite organizar tus tareas en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  } else if (select.value === "contaduria") {
    info.innerHTML="<h2>Google Sheets</h2>"+
    "<p>Es una herramienta gratuita de hojas de cálculo en línea que te permite realizar cálculos y análisis financieros. Puedes utilizarla para crear presupuestos, estados financieros y otros documentos relevantes para tu carrera de contaduría.</p>"+
    "<h2>QuickBooks</h2>"+
    "<p>Es una herramienta de contabilidad en línea que te permite gestionar tus finanzas personales y empresariales. Con QuickBooks, puedes llevar un registro de tus ingresos y gastos, enviar facturas y recibir pagos, y realizar un seguimiento de tus impuestos.</p>"+
    "<h2>Slack</h2>"+
    "<p>Es una plataforma de comunicación en línea que te permite comunicarte con tu equipo de trabajo de forma eficiente. Puedes utilizarla para enviar mensajes, compartir archivos y realizar videollamadas.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos que te permite organizar tus tareas en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"+
    "<h2>Xero</h2>"+
    "<p>Es una herramienta de contabilidad en línea que se enfoca en pequeñas y medianas empresas. Con Xero, puedes gestionar tus facturas, nóminas y gastos, y generar informes financieros.</p>"
  } else if (select.value === "diseño") {
    info.innerHTML="<h2>Adobe Creative Cloud</h2>"+
    "<p>Es una suite de software de diseño gráfico y edición de vídeo que incluye aplicaciones como Photoshop, Illustrator, InDesign y Premiere Pro. Con estas herramientas, puedes crear diseños, editar imágenes y vídeos, y desarrollar proyectos de comunicación visual de manera profesional.</p>"+
    "<h2>Behance</h2>"+
    "<p>Es una plataforma de redes sociales de Adobe que te permite mostrar tu trabajo y conectarte con otros profesionales creativos. Puedes utilizarla para inspirarte con otros proyectos, compartir tus propios proyectos y recibir retroalimentación.</p>"+
    "<h2>Sketch</h2>"+
    "<p>Es una herramienta de diseño vectorial para Mac que te permite crear diseños de interfaces de usuario y gráficos vectoriales de manera fácil y rápida. Es muy útil para diseñadores de interfaces y UX.</p>"+
    "<h2>Canva</h2>"+
    "<p>Es una herramienta en línea que te permite crear diseños gráficos de manera fácil y rápida, incluso si no tienes experiencia en diseño. Puedes utilizarla para crear presentaciones, infografías, publicaciones en redes sociales y mucho más.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  }else if (select.value === "farmacia") {
    info.innerHTML="<h2>Epocrates</h2>"+
    "<p>Es una herramienta de referencia médica en línea que te permite buscar información sobre medicamentos y enfermedades. Puedes utilizarla para conocer las interacciones entre medicamentos y para verificar dosis y contraindicaciones.</p>"+
    "<h2>Medscape</h2>"+
    "<p>Es otra herramienta de referencia médica en línea que te permite buscar información sobre medicamentos, enfermedades y tratamientos. También ofrece artículos de noticias y de investigación para mantenerte actualizado sobre los avances en la industria farmacéutica.</p>"+
    "<h2>GoodRx</h2>"+
    "<p>Es una aplicación móvil que te permite buscar precios de medicamentos en farmacias cercanas y comparar precios. Puedes utilizarla para encontrar medicamentos a un precio más accesible y para ahorrar dinero en tus compras de medicamentos.</p>"+
    "<h2>Quizlet</h2>"+
    "<p>Es una aplicación móvil que te permite crear tarjetas de estudio y repasar información de manera efectiva. Puedes utilizarla para estudiar terminología médica, nombres de medicamentos y conceptos importantes de farmacología.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  }else if (select.value === "agricola") {
    info.innerHTML="<h2>BoosterAgro</h2>"+
    "<p>Es una aplicación móvil que te permite llevar un registro de tus cultivos y realizar un seguimiento del crecimiento y desarrollo de tus plantas. También te proporciona información sobre el clima y el pronóstico del tiempo.</p>"+
    "<h2>AutoCAD</h2>"+
    "<p>Es una herramienta de diseño asistido por computadora (CAD) que te permite crear diseños y planos en 2D y 3D. Es muy útil para diseñar sistemas de riego y maquinaria agrícola.</p>"+
    "<h2>AgriXP</h2>"+
    "<p>Es una aplicación móvil que te permite llevar un registro de tus prácticas agrícolas y realizar un seguimiento del crecimiento y desarrollo de tus cultivos. También te proporciona información sobre el clima y el pronóstico del tiempo.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  }else if (select.value === "alimentos") {
    info.innerHTML="<h2>Food Safety Tech</h2>"+
    "<p>Es una aplicación en línea que te proporciona información sobre la seguridad alimentaria y las regulaciones de la industria alimentaria. Es muy útil para estar al día con las normas y regulaciones de la industria.</p>"+
    "<h2>Fooducate</h2>"+
    "<p>Es una aplicación móvil que te permite escanear códigos de barras de productos alimenticios para obtener información nutricional detallada. También ofrece consejos sobre cómo mejorar tu alimentación y llevar un estilo de vida saludable.</p>"+
    "<h2>LabSuit</h2>"+
    "<p>Es una herramienta de gestión de laboratorios en línea que te permite llevar un registro de tus experimentos y datos de laboratorio. También te permite colaborar con otros miembros de tu equipo de laboratorio.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  }else if (select.value === "telecomunicaciones") {
    info.innerHTML="<h2>Cisco Packet Tracer</h2>"+
    "<p>Es una aplicación gratuita de simulación de redes que te permite diseñar, configurar y solucionar problemas en redes de computadoras. Es útil para las asignaturas relacionadas con las redes de telecomunicaciones.</p>"+
    "<h2>Wolfram Alpha</h2>"+
    "<p>Es una aplicación en línea que proporciona respuestas a preguntas y soluciones a problemas matemáticos complejos. Es una herramienta muy útil para los estudiantes de ingeniería, especialmente para las asignaturas de matemáticas y física.</p>"+
    "<h2>EasyEDA</h2>"+
    "<p>Es una aplicación en línea gratuita de diseño de circuitos y esquemas electrónicos que te permite crear diagramas de forma rápida y sencilla. Es útil para hacer tareas y proyectos relacionados con la electrónica y las telecomunicaciones.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"+
    "<h2>Slack</h2>"+
    "<p>Es una aplicación de mensajería en línea que te permite comunicarte de forma efectiva con tus compañeros de clase y profesores. Es útil para colaborar en proyectos y mantenerse actualizado con las tareas y asignaciones.</p>"
  }else if (select.value === "industrial") {
    info.innerHTML="<h2>Arena Simulation</h2>"+
    "<p>Es una herramienta de simulación de procesos industriales que te permite modelar, simular y analizar procesos complejos. Es útil para las asignaturas relacionadas con la gestión de procesos y la simulación.</p>"+
    "<h2>Microsoft Excel</h2>"+
    "<p>Es una herramienta imprescindible para los estudiantes de ingeniería industrial. Puedes utilizarla para llevar un seguimiento de los datos y hacer análisis estadísticos, así como para hacer modelos y simulaciones.</p>"+
    "<h2>Lucidchart</h2>"+
    "<p>Es una herramienta de diagramación en línea que te permite crear diagramas de flujo, organigramas, mapas mentales, entre otros. Es útil para las asignaturas relacionadas con la gestión de procesos y calidad.</p>"+
    "<h2>Minitab</h2>"+
    "<p>Es una herramienta de análisis estadístico utilizada en la ingeniería, la investigación y la industria. Es útil para la recopilación y análisis de datos para la mejora de procesos y la toma de decisiones.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  }else if (select.value === "electrica") {
    info.innerHTML="<h2>Autodesk Inventor</h2>"+
    "<p>Es un software de diseño asistido por computadora (CAD) utilizado para la creación de modelos 3D y ensamblajes. Es útil para la creación de diseños de piezas y sistemas mecánicos y eléctricos.</p>"+
    "<h2>Wolfram Alpha</h2>"+
    "<p>Es una aplicación en línea que proporciona respuestas a preguntas y soluciones a problemas matemáticos complejos. Es una herramienta muy útil para los estudiantes de ingeniería, especialmente para las asignaturas de matemáticas y física.</p>"+
    "<h2>MATLAB</h2>"+
    "<p>Es una herramienta de programación y análisis numérico que se utiliza en la ingeniería y la investigación. Es útil para las asignaturas relacionadas con el procesamiento de señales, la modelización matemática y el control de sistemas.</p>"+
    "<h2>PSpice</h2>"+
    "<p>Es un software de simulación de circuitos eléctricos que se utiliza en la ingeniería eléctrica. Es útil para la simulación y el análisis de circuitos eléctricos y electrónicos.</p>"+
    "<h2>Ansys</h2>"+
    "<p>Es un software de simulación de ingeniería que se utiliza en la mecánica, la electrónica y la ingeniería eléctrica. Es útil para la simulación de sistemas y componentes mecánicos y eléctricos complejos.</p>"
  }else if (select.value === "quimica") {
    info.innerHTML="<h2>Aspen Plus</h2>"+
    "<p>Es un software de simulación de procesos químicos que se utiliza en la ingeniería química. Es útil para la simulación y el análisis de procesos químicos complejos.</p>"+
    "<h2>ChemDraw</h2>"+
    "<p>Es un software de dibujo de estructuras químicas que te permite crear y visualizar moléculas complejas. Es útil para la elaboración de diagramas y representaciones de moléculas y reacciones químicas.</p>"+
    "<h2>Mendeley</h2>"+
    "<p>Es una herramienta de gestión de referencias bibliográficas que te permite organizar y citar tus fuentes de investigación. Es útil para la creación de trabajos de investigación y la elaboración de citas y referencias.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  }else if (select.value === "medicina") {
    info.innerHTML="<h2>Merck Veterinary Manual</h2>"+
    "<p>Es una aplicación que proporciona información detallada sobre enfermedades, diagnósticos y tratamientos para animales de compañía, animales de granja y animales exóticos. Es útil para la investigación de enfermedades y la toma de decisiones clínicas.</p>"+
    "<h2>Vetcalculators</h2>"+
    "<p>Es una aplicación que ofrece calculadoras y conversores médicos para veterinarios y estudiantes de medicina veterinaria. Es útil para la conversión de unidades y la realización de cálculos complejos.</p>"+
    "<h2>VetCompanion</h2>"+
    "<p>Es una aplicación que proporciona herramientas de referencia y calculadoras para estudiantes de medicina veterinaria y técnicos veterinarios. Es útil para la organización y gestión de tareas clínicas.</p>"+
    "<h2>Vet Anatomy</h2>"+
    "<p>Es una aplicación que ofrece una vista detallada del cuerpo de los animales, permitiendo la exploración de estructuras anatómicas en 3D. Es útil para el estudio de la anatomía animal y la identificación de estructuras anatómicas.</p>"+
    "<h2>Trello</h2>"+
    "<p>Es una herramienta de gestión de proyectos en línea que te permite organizar tus tareas y proyectos en tarjetas y tableros. Es muy útil para llevar un seguimiento de tus proyectos y tareas pendientes.</p>"
  }
});
