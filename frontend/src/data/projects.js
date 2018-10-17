const projects = [
  {
    "id": "1",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Aplicación para gestionar el historial clínico",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": "Una aplicación donde puedes llevar tu historial clínico y compartirlo con diferentes profesionales o centro de salud. En la aplicación conviven diferentes roles de familiares, médicos y centros de salud. El usuario paciente tiene todo el control de su historial clínico, puede buscar médicos, farmacias, centro de salud cercano a su ubicación, y puede interactuar con ellos mediante la aplicación.",
    "tecnologies": [
        "Linux",
        "Docker",
        "Django",
        "Celery",
        "RabbitMQ",
        "Django Rest Framework",
        "React",
        "Antd",
        "Sass"
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi/vista-mapa.png", "legend": "Mapa"}
    ]
  },
  {
    "id": "2",
    "from": "2017-11-01",
    "to": "actualidad",
    "title": "Aplicación web - Procesador de pagos",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Aplicación que procesa pagos con la diferencia de que convierte a sus clientes en integradores de pago. Los clientes pueden darse de alta, agregar métodos de pago, procesar pagos y habilitar sus propios clientes para procesar pagos a través de su cuenta.
  Con el fin de que cualquier cliente pueda integrar este procesador de pagos en su sistema, cuenta con una página checkout de fácil customización, que se puede embeber cómo iframe en páginas externas y una API Rest, teniendo así, dos formas de integración.
  El mayor desafío que presentó este proyecto fue el despliegue del proyecto, ya que el SDK de procesamiento de pago contaba con 4 instancias de server diferentes, y nuestro proyecto con 3 instancias más, usando un balanceador de carga y planificado para pasar la homologación de PCI DSS (Payment Card Industry Data Security Standard).`,
    "tecnologies": [
        "Linux",
        "AWS",
        "Docker",
        "Django",
        "Celery",
        "RabbitMQ",
        "SDK de procesador de pago",
        "React",
        "Antd",
        "Redux",
        "Sass"
    ],
    "images": []
  },
  {
    "id": "3",
    "from": "2017-01-01",
    "to": "actualidad",
    "title": "Sistema de monitoreo de camiones",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Este sistema te brinda la posibilidad de conocer en tiempo real: en que lugar esta el camion, infracciones cometidas (área prohibida, exceso de velocidad, etc), ver videos en vivo, grabaciones de videos del momento en que ocurrió una infracción, trackeo de viajes, lugares de paradas durante el viaje, etc.`,
    "tecnologies": [
        "Linux",
        "Docker",
        "Django",
        "PostGis",
        "Celery",
        "RabbitMQ",
        "django-channel",
        "django rest framework",
        "Jquery",
        "Vuejs",
        "GoogleMaps",
        "Bootstrap",
        "Sass"
    ],
    "images": []
  },
  {
    "id": "4",
    "from": "2016-11-01",
    "to": "actualidad",
    "title": "Aplicación de control de ventas",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Es una app, que te permite controlar de manera simple y automatizada tus ventas por tarjetas de crédito y débito. Planifica con información, lleva el control de tus ingresos y costos y mantener todas tus transacciones a salvo.
  El mayor desafío que presentó esta aplicación fue tener un sistema eficiente y controlado para obtener las transacciones mediante scraper, con clientes que procesan miles de transacciones por día.`,
    "tecnologies": [
        "Linux",
        "Docker",
        "Django",
        "Beautiful Soup",
        "PostgresQL",
        "Celery",
        "RabbitMQ",
        "Django Rest Framework",
        "Jquery",
        "Bootstrap"
    ],
    "images": []
  },
  {
    "id": "5",
    "from": "2014-10-01",
    "to": "2017-02-01",
    "title": "Compraloahi web",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Aplicación web de búsqueda de anuncios basadas en la ubicacion geográfica
  Compralo ahi es una aplicación intuitiva que permite al usuario encontrar fácilmente en su cercanía lo que están buscando interactuando con un mapa y diferentes filtros. Una vez que el usuario ha encontrado lo que está buscando, tiene la posibilidad de contactarse con el dueño del anuncio utilizando un sistema de mensajes privados o públicos. Por otra parte, un usuario puede generar un catálogo dinámicamente especificando los avisos que quiere mostrar, la disposición con la que se muestra, un logo, colores y diferentes aspectos del estilo.`,
    "tecnologies": [
        "Django",
        "Django Rest Framework",
        "Celery",
        "Haystack",
        "Elasticsearch",
        "Postgresql",
        "Angularjs",
        "Jquery",
        "Bootstrap",
        "OpenStreetMap",
        "Leaflet",
        "LESS"
    ],
    "images": []
  },
  {
    "id": "6",
    "from": "2016-12-01",
    "to": "actualidad",
    "title": "Pocketik",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Pocketik is an application to sell passes and consumption for events and bars. I've performed as backend and front developer.`,
    "tecnologies": [
        "Django",
        "Bootstrap",
        "Angularjs",
        "API REST",
        "Mercadopago payment gateway"
    ],
    "images": []
  },
  {
    "id": "7",
    "from": "2015-04-01",
    "to": "2016-12-01",
    "title": "Siembra",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Siembra is a web Application that processes donations for Churches. I've performed as Full Stack Developer and server admin.`,
    "tecnologies": [
        "Django",
        "bootstrap",
        "Django Rest",
        "Celery",
        "Linux",
        "Nginx",
        "Django CMS",
        "Integration with Epay and propay payment gateways"
    ],
    "images": []
  },
  {
    "id": "8",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Welo Tv Clips",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Hybrid Mobile application Developed with IONIC`,
    "tecnologies": [
        "Angularjs",
        "Ionic",
        "Cordova"
    ],
    "images": []
  },
  {
    "id": "9",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Compraloahi mobile",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `aplicación móvil que permite a los usuarios buscar productos y servicios próximos a su ubicación geográfica mediante la interacción con un mapa. sino que también tiene la función de alertar a los usuarios cuando se acercan a un producto o servicio que pueda ser de su interés.`,
    "tecnologies": [
        "Ionic",
        "Cordova",
        "AngularJs",
        "OpenStreetMap",
        "Leaflet"
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "10",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Ecommerce (sass, cms)",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Análisis, Diseño, Desarrollo e implementación de una aplicación web saas para generación de ecommerce, con soporte para seleccionar entre diversos temas y variaciones en los mismos, soporte de multi idiomas. Y un ecommerce con varias funcionalidades, desde poder configurar el productos con atributos y opciones dinámicas, control de stock, trackeo de envío, ranking de productos, carrito de compras, favoritos etc.
Y un CMS con la posibilidad de generar paginas dinámicamente y con diversos plugins integrados del propio ecommerce, de bootstrap en general, formularios dinámicos, redes sociales, mapas, etc.`,
    "tecnologies": [
        "Django",
        "Django CMS",
        "Rest Django Framework",
        "Celery",
        "Postgres",
        "Bootstrap",
        "Angularjs"
    ],
    "images": []
  },
  {
    "id": "11",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Nubiquo",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `Diseño, Desarrollo e implementación completa de un sistema para la gestión de venta directa, especializando en administrar un árbol de vendedores. Cuenta con diferentes funcionalidades, como la de poder configurar y automatizar las comisiones y ganancia en un árbol de vendedores y revendedores, trackeo de envio, generación de catálogos dinámicos, etc.`,
    "tecnologies": [
        "Django",
        "Django framework Rest",
        "celery",
        "MongoDB",
        "Jquery",
        "AngularJS",
        "Bootstrap"
    ],
    "images": []
  },
  {
    "id": "12",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Reservation (Sistema de turnos)",
    "short_description": "Aplicación para gestionar el historial clínico",
    "description": `proyectoDiseño, Analisis e implementacion de un sistema de gestión de turnos entre pacientes/clientes y médicos, con calendario integrado, con mapa para visualizar la ubicacion de los turnos, reportes etc.`,
    "tecnologies": [
        "Django",
        "DjangoAdmin" ,
        "celery",
        "sqlite",
        "Jquery",
        "Jquery UI",
        "FullCalendar.io"
    ],
    "images": []
  },
    ];


  export default projects;
