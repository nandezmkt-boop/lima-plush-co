import type { CaseStudy, Dictionary } from "./es";

const en: Dictionary = {
  meta: {
    title: "Lima Plush Co. — Custom Corporate Plush Toys",
    description:
      "We manufacture custom corporate plush toys for companies, hotels, schools, brands and events. Our own production facility in Lima, Peru, with over 20 years of textile experience. Request a quote.",
    ogAlt: "Custom corporate plush toy by Lima Plush Co.",
  },
  a11y: {
    skipToContent: "Skip to main content",
  },
  nav: {
    links: [
      { href: "#inicio", label: "Home" },
      { href: "#soluciones", label: "Customization" },
      { href: "#como-trabajamos", label: "How we work" },
      { href: "#proyectos", label: "Projects" },
      { href: "#fabrica", label: "The workshop" },
      { href: "#contacto", label: "Contact" },
    ],
    cta: "Request a quote",
    langSwitchLabel: "Español",
  },
  hero: {
    eyebrow: "Custom corporate plush toys",
    headline: {
      lead: "Your brand,",
      emphasis: "hugged",
      tail: "forever",
    },
    subheadline:
      "We design and manufacture custom plush toys for companies, with your brand's colors, logo and personality.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "View projects",
    trustLine: "Own production facility in Lima, Peru",
    trustSub: "Over 20 years of plush manufacturing, made by Peruvian hands",
    imageAlt:
      "Lima Plush Co. custom plush toys: a lion in overalls and bears wearing an embroidered t-shirt, hoodie, scarf and graduation gown",
    badgeValue: "100%",
    badgeLabel: "customizable",
    scrollHint: "See how we make it",
  },
  valueProps: {
    eyebrow: "Why choose a plush toy for your brand?",
    heading: "Turn your brand into something people want to keep",
    intro:
      "A plush toy isn't just another promotional item. It can become a keepsake that moves people and builds connection, staying with someone for a long time. They'll see it on their desk, in their bedroom or in a special place, keeping your brand present long after a campaign ends.",
    items: [
      {
        title: "Your brand stays",
        description:
          "Your logo, your colors and your character stop living only in a campaign and become part of an object that keeps your brand present in the life of whoever receives it.",
      },
      {
        title: "A gift people remember",
        description:
          "At a trade show, event, launch or promotion, a plush toy can become **a keepsake people will associate with a special moment of your brand.**",
      },
      {
        title: "Your character comes to life",
        description:
          "If your brand has a character, mascot or identity of its own, turning it into a plush toy lets people see it, touch it, hug it and take it home.",
      },
      {
        title: "A connection that lasts",
        description:
          "When a brand becomes part of someone's everyday life, it stops being a one-off experience. The plush toy keeps that connection alive long after the campaign.",
      },
    ],
  },
  solutions: {
    eyebrow: "How we customize",
    heading: "Two ways to turn your brand into a plush toy",
    intro:
      "Whether you already have a logo to embroider or want to build an original character from scratch, we have a production path built for each case.",
    optionA: {
      tag: "Option A",
      title: "Customization on a base model",
      imageAlt: "Blue plush elephant on a base model holding a heart balloon embroidered with the Lima Plush name",
      description:
        "We start from a quality base plush and adapt it to your identity: colors, a custom t-shirt or accessory, and your logo embroidered or printed.",
      minOrder: "Production from 120 units",
      includesTitle: "What's included",
      includes: [
        "Base plush with a custom t-shirt or accessory",
        "Logo embroidered or printed on the t-shirt or body",
        "Choice of colors for the plush character",
        "Colors adapted to your institutional identity",
      ],
      useCasesTitle: "Ideal for",
      useCases: [
        "Welcome kits",
        "Corporate or sports events",
        "Seasonal campaigns",
        "School and university graduations",
      ],
      processTitle: "Process",
      process: "Brief & logo → model and color selection → production → delivery",
      cta: "Get a quote for this option",
    },
    optionB: {
      tag: "Option B",
      title: "Custom character development",
      imageAlt: "Plush lion designed from scratch, wearing a cap and overalls with an embroidered pocket",
      description:
        "We design and manufacture an exclusive plush for your brand: your own mascot or character, developed from sketch to an approved prototype.",
      minOrder: "Production from 500 units",
      includesTitle: "What's included",
      includes: [
        "Digital design development from your brief or character",
        "Physical prototype before mass production",
        "Design adjustments before volume manufacturing",
        "Full production in our own Lima workshop",
      ],
      useCasesTitle: "Ideal for",
      useCases: [
        "Corporate mascots",
        "Institutional campaigns",
        "Franchises and brand chains",
        "Sports teams and events",
      ],
      processTitle: "Process",
      process: "Brief & references → digital design → prototype → adjustments & approval → volume production",
      cta: "Get a quote for this option",
    },
    notSure: "Not sure which one you need? Tell us about your project and we'll guide you, no strings attached.",
  },
  gallery: {
    eyebrow: "Portfolio",
    heading: "Real projects, handmade in Lima",
    intro:
      "Every plush toy you see here was created for a different brand, concept and story. We design every project to measure, taking care of the details that bring your brand's identity to life.",
    casesLabel: "Success stories",
    caseLabel: "Case",
    controls: {
      previous: "Previous case",
      next: "Next case",
      goTo: "View case {n}",
      slideOf: "{current} of {total}",
    },
    cases: [
      {
        client: "Leopold Studios",
        location: "Lima, Peru",
        project: "Brand character and promotional video",
        quote:
          "We wanted to create a character that represented Leopold Studios' identity, inspired by the Peruvian otorongo, that could become part of the experience of everyone who visits our studio. Lima Plush turned our idea into a unique piece with soul, and also created a promotional video for us in which the plush became the star. We ended up with a special piece to give our guests, making their time at the studio a truly lovely experience.",
        image: "/images/cases/leopold-studios.jpg",
        imageAlt: "Plush Peruvian otorongo jaguar wearing a black hoodie embroidered with the Leopold Studios logo",
      },
      {
        client: "Ludovico Helados",
        location: "Madrid, Spain",
        project: "Brand character for customers",
        quote:
          "We wanted to create a character that conveyed Ludovico's joy and spirit, so our customers could take a little piece of the brand home. We loved the result: the plush quickly became one of our customers' favorites and a special keepsake of Ludovico. Since we introduced it, our sales have grown by 10%, and the plush has become a much-loved part of our brand.",
        highlight: { value: "+10%", label: "in sales since introducing the plush" },
      },
      {
        client: "Xpecializa Consulting",
        location: "Madrid, Spain",
        project: "Christmas gift for the team",
        quote:
          "We wanted to create something special for our team this Christmas. As a technology consultancy, we wanted something that carried our identity and went beyond the traditional corporate gift. Lima Plush developed a fully customized plush for Xpecializa, from the colors and the hood to the pocket with our logo. The result is a character designed especially for our team and their families, and it will be part of our Christmas hampers.",
        image: "/images/cases/xpecializa.jpg",
        imageAlt: "Xpecializa plush bear with a blue helmet-style hood and an orange body with a logo-embroidered pocket",
        detailImage: "/images/cases/xpecializa-propuesta.jpg",
        detailImageAlt: "Final proposal sheet for the Xpecializa plush showing front, side and back views and brand colors",
        detailLabel: "Design proposal",
      },
    ] as CaseStudy[],
    more: {
      heading: "More projects",
      previous: "Previous projects",
      next: "More projects",
    },
    items: [
      {
        image: "/images/products/leon-club-deportivo.jpg",
        alt: "Plush lion wearing a striped sports club jersey with crest",
        caption: "Mascot with the club's official jersey and crest",
        tag: "Sports & clubs",
      },
      {
        image: "/images/products/oso-graduado.jpg",
        alt: "Plush bear with graduation cap, green gown, embroidered stole and diploma",
        caption: "Graduation with cap, stole and embroidered name",
        tag: "Schools & universities",
      },
      {
        image: "/images/products/oso-company-gifts.jpg",
        alt: "Plush bear wearing a green hoodie embroidered with the words Company Gifts",
        caption: "Hoodie embroidered with the brand's message",
        tag: "Corporate gifts",
      },
      {
        image: "/images/products/oso-partner-perks.jpg",
        alt: "Plush bear wearing a gray t-shirt embroidered with the words Partner Perks",
        caption: "Embroidered t-shirt for rewards programs",
        tag: "Loyalty",
      },
      {
        image: "/images/products/elefante-overol.jpg",
        alt: "Lilac plush elephant wearing beige overalls with an embroidered pocket",
        caption: "Overalls with embroidered pocket and custom details",
        tag: "Exclusive character",
      },
      {
        image: "/images/products/oso-bufanda.jpg",
        alt: "Plush bear wearing a white scarf embroidered with the Lima Plush name",
        caption: "Embroidered scarf as a brand accessory",
        tag: "Accessories",
      },
      {
        image: "/images/products/elefante-rosa.jpg",
        alt: "Pink plush elephant holding an embroidered heart balloon",
        caption: "Heart balloon embroidered with the brand name",
        tag: "Campaigns",
      },
      {
        image: "/images/products/oso-camiseta-blanca.jpg",
        alt: "Hand holding a plush bear wearing a white t-shirt with an embroidered Lima Plush Co. logo",
        caption: "T-shirt with full-color embroidered logo",
        tag: "Companies",
      },
      {
        image: "/images/products/elefante-durazno-globo.jpg",
        alt: "Peach-colored plush elephant holding an embroidered heart balloon",
        caption: "The same model, in your brand's color",
        tag: "Color palette",
      },
    ],
  },
  sectors: {
    eyebrow: "We work with",
    heading: "A plush toy for every story a brand wants to tell",
    intro:
      "We create custom plush toys for companies, schools, hotels, clubs and other organizations that want to turn their identity into a one-of-a-kind plush.",
    items: [
      {
        title: "Companies",
        description: "Corporate gifts, welcome kits and merchandise that actually represents your brand.",
      },
      {
        title: "Hotels",
        description: "Guest mascots and courtesy amenities that take the experience home with your guests.",
      },
      {
        title: "Schools & universities",
        description: "Graduation, promotion and anniversary plush toys customized per student or per class.",
      },
      {
        title: "Events",
        description: "Commemorative pieces for trade shows, conferences, launches and live activations.",
      },
      {
        title: "Brands & retail",
        description: "Original characters that become a product, a gift-with-purchase, or a campaign icon.",
      },
      {
        title: "Marketing & advertising",
        description: "We design and manufacture custom plush toys for campaigns, events and promotional activations.",
      },
      {
        title: "Sports & clubs",
        description: "Official mascots, scaled jerseys and merchandise for fans of every age.",
      },
      {
        title: "Institutions",
        description: "Institutional pieces for public campaigns, anniversaries and community programs.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "A clear process, start to finish",
    intro:
      "Ordering volume production can feel intimidating if you don't know the manufacturer. That's why our process is transparent at every step.",
    steps: [
      {
        number: "01",
        title: "Brief & idea",
        description: "Tell us about your brand, your audience and what you want to achieve. Send us your logo or character if you already have one.",
      },
      {
        number: "02",
        title: "Design & visual proposal",
        description: "We present a visual proposal with colors, materials and finishes adapted to your identity.",
      },
      {
        number: "03",
        title: "Prototype",
        description: "Before producing at volume, we manufacture a physical sample so you can see and touch it.",
        views: [
          { image: "/images/products/prototipo-frontal.jpg", label: "Front" },
          { image: "/images/products/prototipo-lateral.jpg", label: "Side" },
          { image: "/images/products/prototipo-posterior.jpg", label: "Back" },
        ],
        viewsAlt: "Lilac elephant prototype, {view} view",
      },
      {
        number: "04",
        title: "Approval",
        description: "We make any adjustments needed until the prototype reflects exactly what your brand needs.",
      },
      {
        number: "05",
        title: "Production",
        description: "We manufacture the full order in our own Lima workshop, with tracking throughout the process.",
      },
      {
        number: "06",
        title: "Quality control",
        description: "Every batch is reviewed for stitching, filling and finish before it leaves the workshop.",
      },
      {
        number: "07",
        title: "Delivery & shipping",
        description: "We coordinate delivery or shipping to your location, within Peru or abroad.",
      },
    ],
  },
  factory: {
    eyebrow: "About us",
    heading: "Our sewing workshop",
    paragraphs: [
      "Lima Plush Co. brings together over 20 years of plush manufacturing experience in Peru, with our own production that for years supplied major vendors at Lima's Mercado Central, distributing to cities across Peru.",
      "Every plush toy passes through Peruvian hands: families from our community who sew, fill and inspect each piece, caring for every detail along the way. Through our work we help create job opportunities for Peruvian families and keep the craft of sewing alive.",
      "We combine that experience with a structure ready for volume orders, maintaining quality control and care for every piece throughout the entire process.",
    ],
    stats: [
      { value: "20+", label: "years of textile experience" },
      { value: "120+", label: "units, minimum order" },
      { value: "100%", label: "own production in Lima" },
    ],
    imageAlt: "Plush lions being sewn on the work table at the Lima Plush Co. workshop",
  },
  video: {
    eyebrow: "Factory videos",
    heading: "How we make your order at Lima Plush Co.",
    description:
      "Discover the process behind every Lima Plush Co. plush toy: from sewing and stuffing to finishing and quality control of every piece.",
    placeholderLabel: "Workshop video — coming soon",
    note: "Soon you'll be able to watch how we work and how we turn each design into an order ready for delivery.",
    posterAlt: "Batch of plush bears with red hearts at the Lima Plush Co. workshop",
    production: {
      title: "From our workshop",
      items: [
        {
          image: "/images/factory/osos-por-mayor.jpg",
          alt: "Dozens of plush bears piled up in the workshop, ready to be customized",
          caption: "A batch of bears ready to be customized",
        },
        {
          image: "/images/factory/osos-corbata-por-mayor.jpg",
          alt: "Wholesale order of plush bears wearing black t-shirts and ties",
          caption: "Wholesale order with tie and t-shirt",
        },
        {
          image: "/images/factory/osos-graduacion-por-mayor.jpg",
          alt: "Graduation plush bears with caps and purple gowns embroidered with names",
          caption: "Graduation bears with each student's name",
        },
      ],
    },
  },
  packaging: {
    eyebrow: "Packaging",
    heading: "Your plush, presented to match your brand",
    paragraph:
      "Packaging is part of the experience too. We create custom presentations so your plush reaches your clients, guests or team members as a complete brand piece.",
    items: [
      {
        title: "Branded boxes and bags",
        description: "Presentations with your logo and colors, ready to hand out or ship.",
      },
      {
        title: "Custom tags and cards",
        description: "A message from your brand that travels with the plush, straight to whoever receives it.",
      },
      {
        title: "Designed for every occasion",
        description:
          "Welcome kits, event gifts, Christmas hampers or awards: we adapt the presentation to the moment.",
      },
    ],
    cta: "Ask about packaging options",
  },
  specs: {
    eyebrow: "Specifications",
    heading: "Quality built to last",
    image: "/images/factory/tejido-terciopelo.jpg",
    imageAlt: "Soft blue velvet fabric used to make plush toys",
    imageCaption: "Soft-touch velvet, one of our materials",
    items: [
      {
        title: "Material",
        description: "High-quality plush, velvet or soft fleece, selected for durability and feel.",
      },
      {
        title: "Filling",
        description: "Siliconized fiber fill — soft, long-lasting and easy to maintain.",
      },
      {
        title: "Customization",
        description: "Embroidery or printing for logos, names and brand details.",
      },
      {
        title: "Production",
        description: "Fully in-house, at our own Lima workshop, from start to finish.",
      },
    ],
  },
  closing: {
    eyebrow: "Our vision",
    heading: "We manufacture identity in the shape of a plush toy",
    paragraph:
      "A plush toy can be more than a promotional item: it can become a symbol of belonging, achievement or identity. At Lima Plush Co. we combine factory-scale structure with a careful product vision, so every piece that leaves our workshop represents your brand the way it deserves.",
    cta: "Let's talk about your project",
  },
  form: {
    eyebrow: "Quote request",
    heading: "Tell us about your project",
    intro:
      "Fill out this form with as much detail as you can. Our sales team will get back to you with a proposal tailored to your brand.",
    stepLabel: "Step {current} of {total}",
    steps: {
      contact: {
        title: "Contact details",
        fields: {
          name: { label: "Full name", placeholder: "Your name" },
          company: { label: "Company / organization", placeholder: "Your company name" },
          email: { label: "Email", placeholder: "you@company.com" },
          phone: { label: "Phone", placeholder: "+1 999 999 9999" },
          country: { label: "Country", placeholder: "Select your country" },
        },
      },
      project: {
        title: "Project details",
        fields: {
          projectType: {
            label: "Project type",
            options: [
              "Customization on a base model",
              "Custom character development",
              "Not sure yet, I'd like guidance",
            ],
          },
          quantity: { label: "Approximate quantity", placeholder: "E.g. 200 units" },
          size: { label: "Approximate size", placeholder: "E.g. 8 in / 20 cm" },
          hasDesign: {
            label: "Do you already have a design or character?",
            options: ["Yes, I have a design or logo", "I have an idea, no final design", "No, I need guidance"],
          },
          deadline: { label: "Approximate delivery date", placeholder: "" },
        },
      },
      details: {
        title: "Tell us more",
        fields: {
          description: {
            label: "Project description",
            placeholder: "Tell us about your brand, your event or the character you have in mind...",
          },
          reference: {
            label: "Attach a reference or logo (optional)",
            hint: "JPG, PNG or PDF, max. 5 MB",
          },
        },
      },
    },
    buttons: {
      next: "Next",
      back: "Back",
      submit: "Request a quote",
      submitting: "Sending...",
    },
    success: {
      title: "Request sent!",
      description: "Thanks for reaching out. We'll review your project and get back to you soon at the email you provided.",
      whatsappCta: "Message us on WhatsApp too",
    },
    error: {
      title: "Something went wrong",
      description: "We couldn't send your request. Please try again or reach us directly on WhatsApp or email.",
    },
    validation: {
      required: "This field is required",
      email: "Enter a valid email",
      fileSize: "The file must be under 5 MB",
    },
  },
  footer: {
    tagline: "We manufacture identity in the shape of a plush toy.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    location: "Lima, Peru",
    rights: "All rights reserved.",
    madeIn: "Designed and manufactured in Lima, Peru.",
  },
  whatsapp: {
    label: "Message us on WhatsApp",
    defaultMessage: "Hi, I'd like to request a quote for custom plush toys from Lima Plush Co.",
  },
};

export default en;
