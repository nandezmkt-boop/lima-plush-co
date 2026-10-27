export type CaseStudy = {
  client: string;
  location: string;
  project: string;
  quote: string;
  image?: string;
  imageAlt?: string;
  detailImage?: string;
  detailImageAlt?: string;
  detailLabel?: string;
  highlight?: { value: string; label: string };
};

const es = {
  meta: {
    title: "Lima Plush Co. — Peluches corporativos personalizados",
    description:
      "Fabricamos peluches corporativos personalizados para empresas, hoteles, colegios, marcas y eventos. Producción propia en Lima, Perú, con más de 20 años de experiencia textil. Solicita presupuesto.",
    ogAlt: "Peluche corporativo personalizado Lima Plush Co.",
  },
  a11y: {
    skipToContent: "Saltar al contenido principal",
  },
  nav: {
    links: [
      { href: "#inicio", label: "Inicio" },
      { href: "#soluciones", label: "Personalización" },
      { href: "#como-trabajamos", label: "Cómo trabajamos" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#fabrica", label: "La fábrica" },
      { href: "#contacto", label: "Contacto" },
    ],
    cta: "Solicitar presupuesto",
    langSwitchLabel: "English",
  },
  hero: {
    eyebrow: "Peluches corporativos personalizados",
    headline: {
      lead: "Tu marca,",
      emphasis: "abrazada",
      tail: "por siempre",
    },
    subheadline:
      "Diseñamos y fabricamos peluches personalizados para empresas, con los colores, logo y personalidad de tu marca.",
    ctaPrimary: "Solicitar presupuesto",
    ctaSecondary: "Ver proyectos",
    trustLine: "Producción propia en Lima, Perú",
    trustSub: "Más de 20 años fabricando peluches con manos peruanas",
    imageAlt:
      "Peluches personalizados Lima Plush Co.: león con overol, osos con camiseta, capucha, bufanda y toga de graduación bordadas",
    badgeValue: "100%",
    badgeLabel: "personalizable",
    scrollHint: "Descubre cómo lo hacemos",
  },
  valueProps: {
    eyebrow: "¿Por qué elegir un peluche para tu marca?",
    heading: "Convierte tu marca en algo que las personas quieren conservar",
    intro:
      "Un peluche no es un objeto promocional más. Puede convertirse en un recuerdo capaz de emocionar y conectar, acompañando a una persona durante mucho tiempo. Lo podrá ver en su escritorio, en su habitación o en un lugar especial, haciendo que tu marca siga presente mucho después de una campaña.",
    items: [
      {
        title: "Tu marca permanece",
        description:
          "Tu logo, tus colores y tu personaje dejan de estar solo en una campaña y pasan a formar parte de un objeto que mantiene tu marca presente en la vida de quien lo recibe.",
      },
      {
        title: "Un regalo que genera recuerdo",
        description:
          "En una feria, evento, lanzamiento o promoción, un peluche puede convertirse en **un recuerdo que las personas asociarán con un momento especial de tu marca.**",
      },
      {
        title: "Tu personaje cobra vida",
        description:
          "Si tu marca tiene un personaje, mascota o identidad propia, convertirlo en peluche permite que las personas puedan verlo, tocarlo, abrazarlo y llevarse consigo.",
      },
      {
        title: "Una conexión que continúa",
        description:
          "Cuando una marca consigue formar parte de la vida cotidiana de una persona, deja de ser solo una experiencia puntual. El peluche mantiene esa conexión presente mucho después de la campaña.",
      },
    ],
  },
  solutions: {
    eyebrow: "Cómo personalizamos",
    heading: "Dos formas de convertir tu marca en peluche",
    intro:
      "Ya tengas un logo que bordar o quieras crear un personaje propio desde cero, tenemos un camino de producción pensado para cada caso.",
    optionA: {
      tag: "Opción A",
      title: "Personalización sobre modelo base",
      imageAlt: "Elefante de peluche azul sobre modelo base con globo de corazón bordado con el nombre Lima Plush",
      description:
        "Partimos de un peluche base de calidad y lo adaptamos a tu identidad: colores, camiseta o accesorio, y tu logo bordado o estampado.",
      minOrder: "Producción desde 120 unidades",
      includesTitle: "Qué incluye",
      includes: [
        "Peluche base con camiseta o accesorio personalizado",
        "Logo bordado o estampado en camiseta o base",
        "Elección de colores para el peluche o muñeco base",
        "Colores adaptados a la identidad institucional",
      ],
      useCasesTitle: "Ideal para",
      useCases: [
        "Kits de bienvenida",
        "Eventos corporativos o deportivos",
        "Campañas para fechas especiales",
        "Graduaciones de colegios y universidades",
      ],
      processTitle: "Proceso",
      process: "Brief y logo → elección de modelo y colores → producción → entrega",
      cta: "Cotizar esta opción",
    },
    optionB: {
      tag: "Opción B",
      title: "Desarrollo de personaje desde cero",
      imageAlt: "León de peluche diseñado desde cero, con gorra y overol con bolsillo bordado",
      description:
        "Diseñamos y fabricamos un peluche exclusivo para tu marca: una mascota o personaje propio, desarrollado desde el boceto hasta el prototipo aprobado.",
      minOrder: "Producción desde 500 unidades",
      includesTitle: "Qué incluye",
      includes: [
        "Desarrollo de diseño digital a partir de tu brief o personaje",
        "Prototipo físico previo a la producción",
        "Ajustes de diseño antes de fabricar en volumen",
        "Producción íntegra en nuestro taller de Lima",
      ],
      useCasesTitle: "Ideal para",
      useCases: [
        "Mascotas corporativas",
        "Campañas institucionales",
        "Franquicias y cadenas de marca",
        "Equipos y eventos deportivos",
      ],
      processTitle: "Proceso",
      process: "Brief y referencias → diseño digital → prototipo → ajustes y aprobación → producción en volumen",
      cta: "Cotizar esta opción",
    },
    notSure: "¿No tienes claro cuál necesitas? Cuéntanos tu proyecto y te orientamos sin compromiso.",
  },
  gallery: {
    eyebrow: "Portafolio",
    heading: "Proyectos reales, hechos a mano en Lima",
    intro:
      "Cada peluche que ves aquí fue creado para una marca, un concepto y una historia diferente. Diseñamos cada proyecto a medida, cuidando los detalles que hacen que la identidad de tu marca cobre vida.",
    casesLabel: "Casos de éxito",
    caseLabel: "Caso",
    controls: {
      previous: "Caso anterior",
      next: "Caso siguiente",
      goTo: "Ver caso {n}",
      slideOf: "{current} de {total}",
    },
    cases: [
      {
        client: "Leopold Studios",
        location: "Lima, Perú",
        project: "Personaje de marca y vídeo promocional",
        quote:
          "Queríamos crear un personaje que representara la identidad de Leopold Studios, inspirado en el otorongo peruano, y que pudiera formar parte de la experiencia de quienes visitan nuestro estudio. Lima Plush convirtió nuestra idea en una pieza única, con alma, y además creó para nosotros un vídeo promocional en el que el peluche se convirtió en el protagonista. Conseguimos una pieza especial para entregar a nuestros invitados y hacer que su paso por el estudio fuera una experiencia muy bonita.",
        image: "/images/cases/leopold-studios.jpg",
        imageAlt: "Peluche de otorongo peruano con polera negra bordada con el logo de Leopold Studios",
      },
      {
        client: "Ludovico Helados",
        location: "Madrid, España",
        project: "Personaje de marca para clientes",
        quote:
          "Queríamos crear un personaje que transmitiera la alegría y el espíritu de Ludovico, y que nuestros clientes pudieran llevarse un pedacito de la marca a casa. El resultado nos encantó: el peluche se convirtió rápidamente en uno de los favoritos de nuestros clientes y en un recuerdo especial de Ludovico. Desde que lo incorporamos, nuestras ventas aumentaron un 10% y el peluche se convirtió en una parte muy querida de nuestra marca.",
        highlight: { value: "+10%", label: "en ventas desde que incorporaron el peluche" },
      },
      {
        client: "Xpecializa Consulting",
        location: "Madrid, España",
        project: "Regalo navideño para el equipo",
        quote:
          "Queríamos crear un detalle especial para nuestro equipo esta Navidad. Somos una consultora tecnológica, por eso queríamos algo que llevara nuestra identidad y que fuera más allá del regalo corporativo tradicional. Lima Plush desarrolló un peluche completamente personalizado para Xpecializa, desde los colores y la capucha hasta el bolsillo con nuestro logo. El resultado es un personaje pensado especialmente para nuestro equipo y sus familias, y que formará parte de nuestras canastas navideñas.",
        image: "/images/cases/xpecializa.jpg",
        imageAlt: "Osito de peluche Xpecializa con capucha azul tipo casco y cuerpo naranja con bolsillo bordado con el logo",
        detailImage: "/images/cases/xpecializa-propuesta.jpg",
        detailImageAlt: "Ficha de propuesta final del peluche Xpecializa con vistas frontal, lateral y trasera y colores corporativos",
        detailLabel: "Propuesta de diseño",
      },
    ] as CaseStudy[],
    more: {
      heading: "Más proyectos",
      previous: "Proyectos anteriores",
      next: "Más proyectos",
    },
    items: [
      {
        image: "/images/products/leon-club-deportivo.jpg",
        alt: "León de peluche con camiseta a rayas e insignia de club deportivo",
        caption: "Mascota con camiseta e insignia oficial del club",
        tag: "Deporte y clubes",
      },
      {
        image: "/images/products/oso-graduado.jpg",
        alt: "Oso de peluche con birrete, toga verde, estola bordada y diploma",
        caption: "Graduación con birrete, estola y nombre bordado",
        tag: "Colegios y universidades",
      },
      {
        image: "/images/products/oso-company-gifts.jpg",
        alt: "Oso de peluche con capucha verde bordada con el texto Company Gifts",
        caption: "Capucha bordada con el mensaje de la marca",
        tag: "Regalo corporativo",
      },
      {
        image: "/images/products/oso-partner-perks.jpg",
        alt: "Oso de peluche con camiseta gris bordada con el texto Partner Perks",
        caption: "Camiseta bordada para programas de beneficios",
        tag: "Fidelización",
      },
      {
        image: "/images/products/elefante-overol.jpg",
        alt: "Elefante de peluche lila con overol beige y bolsillo bordado",
        caption: "Overol con bolsillo bordado y detalles a medida",
        tag: "Personaje exclusivo",
      },
      {
        image: "/images/products/oso-bufanda.jpg",
        alt: "Oso de peluche con bufanda blanca bordada con el nombre Lima Plush",
        caption: "Bufanda bordada como accesorio de marca",
        tag: "Accesorios",
      },
      {
        image: "/images/products/elefante-rosa.jpg",
        alt: "Elefante de peluche rosa con globo de corazón bordado",
        caption: "Globo-corazón bordado con el nombre de la marca",
        tag: "Campañas",
      },
      {
        image: "/images/products/oso-camiseta-blanca.jpg",
        alt: "Mano sosteniendo un oso de peluche con camiseta blanca y logo Lima Plush Co. bordado",
        caption: "Camiseta con logo bordado a color",
        tag: "Empresas",
      },
      {
        image: "/images/products/elefante-durazno-globo.jpg",
        alt: "Elefante de peluche color durazno con globo de corazón bordado",
        caption: "El mismo modelo, en el tono de tu marca",
        tag: "Paleta de color",
      },
    ],
  },
  sectors: {
    eyebrow: "Trabajamos con",
    heading: "Un peluche para cada historia que una marca quiera contar",
    intro:
      "Creamos peluches personalizados para empresas, colegios, hoteles, clubes y otras organizaciones que quieren convertir su identidad en un peluche único.",
    items: [
      {
        title: "Empresas",
        description: "Regalos corporativos, kits de bienvenida y merchandising que representa tu marca de verdad.",
      },
      {
        title: "Hoteles",
        description: "Mascotas de huésped y detalles de cortesía que se llevan la experiencia a casa.",
      },
      {
        title: "Colegios y universidades",
        description: "Peluches de graduación, promoción y aniversario personalizados por alumno o por generación.",
      },
      {
        title: "Eventos",
        description: "Piezas conmemorativas para ferias, congresos, lanzamientos y activaciones en vivo.",
      },
      {
        title: "Marcas y retail",
        description: "Personajes propios que se convierten en producto, en regalo con compra o en ícono de campaña.",
      },
      {
        title: "Marketing y publicidad",
        description: "Diseñamos y fabricamos peluches personalizados para campañas, eventos y acciones promocionales.",
      },
      {
        title: "Deporte y clubes",
        description: "Mascotas oficiales, camisetas a escala y merchandising para hinchas de todas las edades.",
      },
      {
        title: "Instituciones",
        description: "Piezas institucionales para campañas públicas, aniversarios y programas comunitarios.",
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    heading: "Un proceso claro, de principio a fin",
    intro:
      "Sabemos que encargar producción en volumen da respeto si no conoces al fabricante. Por eso nuestro proceso es transparente en cada paso.",
    steps: [
      {
        number: "01",
        title: "Brief e idea",
        description: "Nos cuentas tu marca, tu público y qué quieres lograr. Recibimos tu logo o personaje si ya lo tienes.",
      },
      {
        number: "02",
        title: "Diseño y propuesta visual",
        description: "Te presentamos una propuesta visual con colores, materiales y acabados adaptados a tu identidad.",
      },
      {
        number: "03",
        title: "Prototipo",
        description: "Antes de producir en volumen, fabricamos una muestra física para que la veas y la toques.",
        views: [
          { image: "/images/products/prototipo-frontal.jpg", label: "Frontal" },
          { image: "/images/products/prototipo-lateral.jpg", label: "Lateral" },
          { image: "/images/products/prototipo-posterior.jpg", label: "Posterior" },
        ],
        viewsAlt: "Prototipo de elefante lila, vista {view}",
      },
      {
        number: "04",
        title: "Aprobación",
        description: "Ajustamos lo necesario hasta que el prototipo refleje exactamente lo que tu marca necesita.",
      },
      {
        number: "05",
        title: "Producción",
        description: "Fabricamos el pedido completo en nuestro taller propio de Lima, con seguimiento durante todo el proceso.",
      },
      {
        number: "06",
        title: "Control de calidad",
        description: "Cada lote pasa revisión de costura, relleno y acabado antes de salir del taller.",
      },
      {
        number: "07",
        title: "Entrega y envío",
        description: "Coordinamos la entrega o el envío según tu ubicación, dentro o fuera de Perú.",
      },
    ],
  },
  factory: {
    eyebrow: "Sobre nosotros",
    heading: "Nuestro taller de confección",
    paragraphs: [
      "Lima Plush Co. reúne más de 20 años de experiencia en la fabricación de peluches en Perú, con producción propia que durante años abasteció a importantes comerciantes del Mercado Central de Lima, con distribución a distintas ciudades del Perú.",
      "Cada peluche pasa por manos peruanas: familias de nuestra comunidad que cosen, rellenan y revisan cada pieza, cuidando cada detalle durante el proceso. Con nuestro trabajo contribuimos a generar oportunidades de empleo para familias peruanas y a mantener vivo el oficio de la confección.",
      "Combinamos esa experiencia con una estructura preparada para pedidos en volumen, manteniendo el control de calidad y el cuidado de cada pieza durante todo el proceso.",
    ],
    stats: [
      { value: "20+", label: "años de experiencia textil" },
      { value: "120+", label: "unidades, pedido mínimo" },
      { value: "100%", label: "producción propia en Lima" },
    ],
    imageAlt: "Leones de peluche en confección sobre la mesa de trabajo del taller de Lima Plush Co.",
  },
  video: {
    eyebrow: "Vídeos de fábrica",
    heading: "Así hacemos tu pedido en Lima Plush Co.",
    description:
      "Conoce el proceso detrás de cada peluche Lima Plush Co.: desde la confección y el relleno hasta los acabados y el control de calidad de cada pieza.",
    placeholderLabel: "Vídeo del taller — próximamente",
    note: "Muy pronto podrás ver en vídeo cómo trabajamos y cómo convertimos cada diseño en un pedido listo para entregar.",
    posterAlt: "Lote de osos de peluche con corazones rojos en el taller de Lima Plush Co.",
    production: {
      title: "Desde nuestro taller",
      items: [
        {
          image: "/images/factory/osos-por-mayor.jpg",
          alt: "Decenas de osos de peluche apilados en el taller, listos para personalizar",
          caption: "Lote de osos listos para personalizar",
        },
        {
          image: "/images/factory/osos-corbata-por-mayor.jpg",
          alt: "Pedido al por mayor de osos de peluche con camiseta negra y corbata",
          caption: "Pedido al por mayor con corbata y camiseta",
        },
        {
          image: "/images/factory/osos-graduacion-por-mayor.jpg",
          alt: "Osos de peluche de graduación con birrete y toga morada con nombres bordados",
          caption: "Graduación con el nombre de cada alumno",
        },
      ],
    },
  },
  packaging: {
    eyebrow: "Packaging",
    heading: "El peluche, presentado a la altura de tu marca",
    paragraph:
      "El packaging también forma parte de la experiencia. Creamos presentaciones personalizadas para que tu peluche llegue a las manos de tus clientes, invitados o colaboradores como una pieza de marca completa.",
    items: [
      {
        title: "Cajas y bolsas con tu marca",
        description: "Presentaciones con tu logo y tus colores, listas para entregar en mano o enviar.",
      },
      {
        title: "Etiquetas y tarjetas personalizadas",
        description: "Un mensaje de tu marca que acompaña al peluche y llega directamente a quien lo recibe.",
      },
      {
        title: "Pensado para cada ocasión",
        description:
          "Kits de bienvenida, regalos de evento, canastas navideñas o premios: adaptamos la presentación al momento.",
      },
    ],
    cta: "Consultar opciones de packaging",
  },
  specs: {
    eyebrow: "Especificaciones",
    heading: "Calidad pensada para durar",
    image: "/images/factory/tejido-terciopelo.jpg",
    imageAlt: "Tela de terciopelo azul suave utilizada en la confección de peluches",
    imageCaption: "Terciopelo de tacto suave, uno de nuestros materiales",
    items: [
      {
        title: "Material",
        description: "Felpa, terciopelo o plush suave de alta calidad, seleccionado por resistencia y tacto.",
      },
      {
        title: "Relleno",
        description: "Fibra siliconada, suave, duradera y de fácil mantenimiento.",
      },
      {
        title: "Personalización",
        description: "Bordado o estampado de logos, nombres y detalles de marca.",
      },
      {
        title: "Producción",
        description: "Íntegramente propia, en nuestro taller de Lima, de principio a fin.",
      },
    ],
  },
  closing: {
    eyebrow: "Nuestra visión",
    heading: "Fabricamos identidad en forma de peluche",
    paragraph:
      "Un peluche puede ser más que un objeto promocional: puede convertirse en un símbolo de pertenencia, de logro o de identidad. En Lima Plush Co. combinamos la estructura de una fábrica con una visión cuidada de producto, para que cada pieza que sale de nuestro taller represente a tu marca como se merece.",
    cta: "Hablemos de tu proyecto",
  },
  form: {
    eyebrow: "Solicitud de presupuesto",
    heading: "Cuéntanos tu proyecto",
    intro:
      "Completa este formulario con el mayor detalle posible. Nuestro equipo comercial te responderá con una propuesta a la medida de tu marca.",
    stepLabel: "Paso {current} de {total}",
    steps: {
      contact: {
        title: "Datos de contacto",
        fields: {
          name: { label: "Nombre completo", placeholder: "Tu nombre" },
          company: { label: "Empresa / organización", placeholder: "Nombre de tu empresa" },
          email: { label: "Email", placeholder: "tu@empresa.com" },
          phone: { label: "Teléfono", placeholder: "+51 999 999 999" },
          country: { label: "País", placeholder: "Selecciona tu país" },
        },
      },
      project: {
        title: "Detalles del proyecto",
        fields: {
          projectType: {
            label: "Tipo de proyecto",
            options: [
              "Personalización sobre modelo base",
              "Desarrollo de personaje desde cero",
              "Aún no lo sé, quiero orientación",
            ],
          },
          quantity: { label: "Cantidad aproximada", placeholder: "Ej. 200 unidades" },
          size: { label: "Tamaño aproximado", placeholder: "Ej. 20 cm" },
          hasDesign: {
            label: "¿Tienes un diseño o personaje ya definido?",
            options: ["Sí, tengo un diseño o logo", "Tengo una idea, sin diseño final", "No, necesito orientación"],
          },
          deadline: { label: "Fecha aproximada de entrega", placeholder: "" },
        },
      },
      details: {
        title: "Cuéntanos más",
        fields: {
          description: {
            label: "Descripción del proyecto",
            placeholder: "Cuéntanos sobre tu marca, tu evento o el personaje que imaginas...",
          },
          reference: {
            label: "Adjuntar referencia o logo (opcional)",
            hint: "JPG, PNG o PDF, máx. 5 MB",
          },
        },
      },
    },
    buttons: {
      next: "Siguiente",
      back: "Atrás",
      submit: "Solicitar presupuesto",
      submitting: "Enviando...",
    },
    success: {
      title: "¡Solicitud enviada!",
      description: "Gracias por escribirnos. Revisaremos tu proyecto y te responderemos muy pronto al email que nos dejaste.",
      whatsappCta: "Escríbenos también por WhatsApp",
    },
    error: {
      title: "Algo salió mal",
      description: "No pudimos enviar tu solicitud. Por favor, inténtalo de nuevo o escríbenos directamente por WhatsApp o email.",
    },
    validation: {
      required: "Este campo es obligatorio",
      email: "Ingresa un email válido",
      fileSize: "El archivo debe pesar menos de 5 MB",
    },
  },
  footer: {
    tagline: "Fabricamos identidad en forma de peluche.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    location: "Lima, Perú",
    rights: "Todos los derechos reservados.",
    madeIn: "Diseñado y fabricado en Lima, Perú.",
  },
  whatsapp: {
    label: "Escríbenos por WhatsApp",
    defaultMessage:
      "Hola, quiero solicitar un presupuesto para peluches personalizados de Lima Plush Co.",
  },
};

export default es;

export type Dictionary = typeof es;
