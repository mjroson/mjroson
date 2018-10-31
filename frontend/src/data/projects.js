import {tecnologies} from './tecnologies';

const projects = [
  {
    "id": "1",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Clingot",
    "short_description": "Aplicación online para gestionar el historial clínico y encontrar profesionales cerca desde cualquier dispositivo.",
    "description": `Una aplicación donde puedes llevar tu historial clínico y compartirlo con diferentes profesionales o centro de salud. En la aplicación conviven diferentes roles de familiares, médicos y centros de salud. El usuario paciente tiene todo el control de su historial clínico, puede buscar médicos, farmacias, centro de salud cercano a su ubicación, y puede interactuar con ellos mediante la aplicación.
                    Cuenta con una API Rest realizada sobre django rest framework donde se conectan diferentes clientes (app ios nativa, app android nativa, SPA reactjs), tiene autenticacion con Facebook, trabajo de SEO, busquedas y ordenamiento por ubicacion geografica, etc.`,
    "tecnologies": [
        tecnologies["ubuntu"],
        tecnologies["docker"],
        tecnologies["django"],
        tecnologies["celery"],
        tecnologies["rabbitmq"],
        tecnologies["djangorestframework"],
        tecnologies["reactjs"],
        tecnologies["antd"],
        tecnologies["sass"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "2",
    "from": "2017-11-01",
    "to": "actualidad",
    "title": "PagoMovil",
    "short_description": "Aplicacion online generadora de procesadores de pago, donde las empresas se registran y tienen su propio procesador de pago.",
    "description": `Aplicación que procesa pagos con la diferencia de que convierte a sus clientes en integradores de pago. Los clientes pueden darse de alta, agregar métodos de pago, procesar pagos y habilitar sus propios clientes para procesar pagos a través de su cuenta.
  Con el fin de que cualquier cliente pueda integrar este procesador de pagos en su sistema, cuenta con una página checkout de fácil customización, que se puede embeber cómo iframe en páginas externas y una API Rest, teniendo así, dos formas de integración.
  El mayor desafío que presentó este proyecto fue el despliegue del proyecto, ya que el SDK de procesamiento de pago contaba con 4 instancias de server diferentes, y nuestro proyecto con 3 instancias más, usando un balanceador de carga y planificado para pasar la homologación de PCI DSS (Payment Card Industry Data Security Standard).`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["aws"],
      tecnologies["docker"],
      tecnologies["django"],
      tecnologies["celery"],
      tecnologies["rabbitmq"],
      tecnologies["sdkpaymentprocessor"],
      tecnologies["reactjs"],
      tecnologies["redux"],
      tecnologies["antd"],
      tecnologies["sass"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "3",
    "from": "2017-01-01",
    "to": "actualidad",
    "title": "SILS",
    "short_description": "Aplicacion web para monitorear camiones en vivo: exceso de velocidad, camaras, alertas configurables, etc.",
    "description": `Este sistema te brinda la posibilidad de conocer en tiempo real: en que lugar esta el camion, infracciones cometidas (área prohibida, exceso de velocidad, etc), ver videos en vivo, grabaciones de videos del momento en que ocurrió una infracción, trackeo de viajes, lugares de paradas durante el viaje, etc.`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["docker"],
      tecnologies["django"],
      tecnologies["postgis"],
      tecnologies["redis"],
      tecnologies["celery"],
      tecnologies["rabbitmq"],
      tecnologies["djangochannel"],
      tecnologies["djangorestframework"],
      tecnologies["jquery"],
      tecnologies["vuejs"],
      tecnologies["googlemaps"],
      tecnologies["bootstrap"],
      tecnologies["sass"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "4",
    "from": "2016-11-01",
    "to": "actualidad",
    "title": "Resuma",
    "short_description": "Aplicacion online para contrar las ventas de todas tus tarjetas desde un solo lugar.",
    "description": `Es una app, que te permite controlar de manera simple y automatizada tus ventas por tarjetas de crédito y débito. Planifica con información, lleva el control de tus ingresos y costos y mantener todas tus transacciones a salvo.
  El mayor desafío que presentó esta aplicación fue tener un sistema eficiente y controlado para obtener las transacciones mediante scraper, con clientes que procesan miles de transacciones por día.`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["docker"],
      tecnologies["django"],
      tecnologies["postgresql"],
      tecnologies["celery"],
      tecnologies["rabbitmq"],
      tecnologies["djangorestframework"],
      tecnologies["beautifulsoup"],
      tecnologies["jquery"],
      tecnologies["bootstrap"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "5",
    "from": "2013-12-01",
    "to": "2017-02-01",
    "title": "Compraloahi web",
    "short_description": "Aplicacion web para encontrar o publicar avisos basados en la ubicacion.",
    "description": `Aplicación web de búsqueda de anuncios basadas en la ubicacion geográfica
  Compralo ahi es una aplicación intuitiva que permite al usuario encontrar fácilmente en su cercanía lo que están buscando interactuando con un mapa y diferentes filtros. Una vez que el usuario ha encontrado lo que está buscando, tiene la posibilidad de contactarse con el dueño del anuncio utilizando un sistema de mensajes privados o públicos. Por otra parte, un usuario puede generar un catálogo dinámicamente especificando los avisos que quiere mostrar, la disposición con la que se muestra, un logo, colores y diferentes aspectos del estilo.`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["docker"],
      tecnologies["django"],
      tecnologies["postgresql"],
      tecnologies["celery"],
      tecnologies["djangorestframework"],
      tecnologies["rabbitmq"],
      tecnologies["haystack"],
      tecnologies["elasticsearch"],
      tecnologies["angularjs"],
      tecnologies["jquery"],
      tecnologies["bootstrap"],
      tecnologies["openstreetmap"],
      tecnologies["leaflet"],
      tecnologies["less"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_web/map.png", "legend": "Mapa interactivo"},
      {"img": "/static/portfolio/compraloahi_web/detalle-anuncio.png", "legend": "Detalle anuncio"},
      {"img": "/static/portfolio/compraloahi_web/admin.png", "legend": "Administrador"},
    ]
  },
  {
    "id": "6",
    "from": "2016-12-01",
    "to": "actualidad",
    "title": "Pocketik",
    "short_description": "Una plataforma web y móvil para la compra y venta de entradas y productos, cuenta con procesador de pago, formularios dinamicos, invitaciones, etc.",
    "description": `Pocketik es una plataforma online para manejar todo el proceso de un evento, desde sus ventas (configurando el formulario de venta pedir diferentes datos al cliente), hasta el CheckIn en un evento, con invitaciones para eventos privados o revendedores de entradas.
                    Cuenta con una API Rest desde BackEnd donde se conectan diferentes aplicaciones FrontEnd, SPA (Single Page Application) publica de venta de eventos realizada en Angularjs y bootstrap, SPA (Single Page Application) administradora de eventos realizada con AngularJs y Bootstrap, y diferentes aplicaciones moviles nativas.
                    El mayor desafio fue el realizar el proceso de ventas de un ticket, teniendo en cuenta el proceso de pago con diferentes estados de acuerdo al medio de pago seleccionado, formularios dinamicos realizados bajo el estandar de JsonForm, validaciones de stock, de clientes unicos, expiraciones etc. Y todo esto teniendo en cuenta la performance del proceso.
                    El despliegue esta bajo un SO ubuntu server con una orquestacion de contenedores de Docker usando DockerSwarm, cuenta con balanceadores de carga, manejador de colas de tareas ,etc.`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["docker"],
      tecnologies["django"],
      tecnologies["postgresql"],
      tecnologies["celery"],
      tecnologies["rabbitmq"],
      tecnologies["djangorestframework"],
      tecnologies["mercadopago"],
      tecnologies["angularjs"],
      tecnologies["bootstrap"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "7",
    "from": "2015-04-01",
    "to": "2016-12-01",
    "title": "Siembra",
    "short_description": "Plataforma online que propone una nuevo forma para que las iglesias gestionen sus donaciones, cuenta con un panel web donde la iglesia tiene todo el control de la gestion de sus donaciones, y sus miembros.",
    "description": `Siembra es una aplicacion web y movil para gestionar donaciones y comunidad en las iglesias. Cuenta con Siembra procesadores de pago (Epay, Propay) con certificacion PCI DSS (Payment Card Industry Data Security Standard), integracion con push notification. Gestion de eventos, tipos de donaciones, reportes, etc.
                    El administrador web de siembra esta contruido sobre un template de bootstrap, algunos modulos dentros tienen tecnologia Vuejs.
                    Tiene pruebas de estres y performance en todo el proceso de generar donaciones.
                    El despliegue esta montado sobre un VPS linux, sobre un stack de tecnologias Gunicorn, Nginx, Supervisor, etc.`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["docker"],
      tecnologies["django"],
      tecnologies["mysql"],
      tecnologies["celery"],
      tecnologies["rabbitmq"],
      tecnologies["djangorestframework"],
      tecnologies["djangocms"],
      tecnologies["nginx"],
      tecnologies["propay"],
      tecnologies["epay"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ],
    "reference": "https://wigiv.co/"
  },
  {
    "id": "8",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Welo Tv Clips",
    "short_description": "Creacion de un MVP para una aplicacion movil hibrida que muestra contenido multimedia de diferentes medios digitales.",
    "description": `Creacion de un MVP en Ionic `,
    "tecnologies": [
      tecnologies["angularjs"],
      tecnologies["ionic"],
      tecnologies["cordova"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "9",
    "from": "2014-01-01",
    "to": "2015-04-01",
    "title": "Compraloahi mobile",
    "short_description": "Aplicacion móvil con Ionic para conectarse con las API Rest de Compraloahi. Cuenta con manejo de ubicacion, trackeo de movimiento gps del usuario, mapas interactivos, etc.",
    "description": `Aplicación móvil que permite a los usuarios buscar productos y servicios próximos a su ubicación geográfica mediante la interacción con un mapa. sino que también tiene la función de alertar a los usuarios cuando se acercan a un producto o servicio que pueda ser de su interés.`,
    "tecnologies": [
      tecnologies["ionic"],
      tecnologies["angularjs"],
      tecnologies["cordova"],
      tecnologies["openstreetmap"],
      tecnologies["leaflet"]
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
    "title": "Ecommerce cms - SASS",
    "short_description": "Ecommerce SASS basado en el CMS de django, con el objetivo que un vendedor pueda levantar un ecommerce desde un formulario, sin la necesidad de depender de una persona tecnica.",
    "description": `Análisis, Diseño, Desarrollo e implementación de una aplicación web saas para generación de ecommerce, con soporte para seleccionar entre diversos temas y variaciones en los mismos, soporte de multi idiomas. Un ecommerce con varias funcionalidades, desde poder configurar el productos con atributos y opciones dinámicas, control de stock, trackeo de envío, ranking de productos, carrito de compras, favoritos etc.
                    Un CMS con la posibilidad de generar paginas dinámicamente y con diversos plugins integrados del propio ecommerce, de bootstrap en general, formularios dinámicos, redes sociales, mapas, etc. Cuenta con paginas de blog, catalogos, paginas de contactos, etc.
                    Para gestionar los templates, usaba por defecto el motor de template que provee Django, se podia crear un json con todas las configuraciones y variaciones que tenia un template, levantando este json dinamicamente desde un formulario dentro del CMS. El ecommerce se creo usando una API Rest con Django Rest Framwork, y el FrontEnd del ecommerce usando Angularjs.`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["docker"],
      tecnologies["nginx"],
      tecnologies["gunicorn"],
      tecnologies["django"],
      tecnologies["postgresql"],
      tecnologies["djangorestframework"],
      tecnologies["djangocms"],
      tecnologies["angularjs"],
      tecnologies["bootstrap"],
      tecnologies["jquery"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
  {
    "id": "11",
    "from": "2013-10-01",
    "to": "2014-12-01",
    "title": "Nubiquo",
    "short_description": "Software para gestionar todo el proceso de un negocio de venta directa: productos, vendedores, comisiones, catalogos, entregas, etc.",
    "description": `Diseño, Desarrollo e implementación completa de un sistema para la gestión de venta directa, especializando en administrar un árbol de vendedores. Cuenta con diferentes funcionalidades, como la de poder configurar y automatizar las comisiones y ganancia en un árbol de vendedores y revendedores, trackeo de envio, generación de catálogos dinámicos, etc.
                    Esta aplicacion fue desarrollada sobre django usando el paquete django rest framework para crear una API Rest , conectada con MongoDB como base de datos y una aplicacion cliente en Angularjs. Cuenta con tareas asincronicas configuradas con y ejecutadas con celery, rabbitmq.`,
    "tecnologies": [
      tecnologies["django"],
      tecnologies["djangorestframework"],
      tecnologies["mongodb"],
      tecnologies["angularjs"],
      tecnologies["bootstrap"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ],
    "reference": "http://nubiquo.com"
  },
  {
    "id": "12",
    "from": "2018-07-01",
    "to": "actualidad",
    "title": "Reservation",
    "short_description": "Sistema de gestion de turnos en diferentes puentos geograficos entre pacientes, clientes y medicos.",
    "description": `Analisis e implementacion de un sistema de gestión de turnos entre pacientes/clientes y médicos, con calendario integrado, con mapa para visualizar la ubicacion de los turnos, reportes, exportaciones en PDF, multiples roles de usuario etc.
                    Este administrador se creo basandose en el admin que django porvee por defecto. Se crearon algunas pantallas personalizadas como el calendario y el mapa interactivo, integrandolas dentro del admin.`,
    "tecnologies": [
      tecnologies["ubuntu"],
      tecnologies["nginx"],
      tecnologies["gunicorn"],
      tecnologies["sqlite"],
      tecnologies["django"],
      tecnologies["djangoadmin"],
      tecnologies["jquery"],
      tecnologies["jqueryui"],
      tecnologies["fullcalendar"]
    ],
    "images": [
      {"img": "/static/portfolio/compraloahi_mobile/avisos.jpg", "legend": "Avisos"},
      {"img": "/static/portfolio/compraloahi_mobile/phone-map.jpg", "legend": "Mapa"},
      {"img": "/static/portfolio/compraloahi_mobile/menu.jpg", "legend": "Menu"},
    ]
  },
    ];


  export default projects;
