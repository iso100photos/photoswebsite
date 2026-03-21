// ─────────────────────────────────────────────────────────────────────────────
// ISO100 Photography — Site Translations
// Edit Spanish ('es') strings below to review/update before going live.
// ─────────────────────────────────────────────────────────────────────────────

export type Language = 'en' | 'es'

const en = {
  nav: {
    home: 'Home',
    portfolio: 'Portfolio',
    about: 'About',
    services: 'Services',
    booking: 'Booking',
    contact: 'Contact',
    bookNow: 'Book Now',
    bookSession: 'Book a Session',
  },

  footer: {
    tagline: "Capturing life's most meaningful moments with artistry and intention.",
    navigation: 'Navigation',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send a message',
    bookSession: 'Book a session',
    followAlong: 'Follow Along',
    crafted: 'Crafted with care.',
  },

  home: {
    hero: {
      label: 'Professional Photography',
      line1: 'Every frame,',
      line2: 'a story.',
      tagline: 'ISO100 Photography — capturing the moments that matter most, with artistry and intention.',
      cta1: 'View Portfolio',
      cta2: 'Book a Session',
      scroll: 'Scroll',
    },
    servicesSection: {
      label: 'What We Offer',
      heading: 'Photography services\nbuilt around you',
      portrait: {
        title: 'Portrait Sessions',
        desc: 'Intimate, beautifully lit portrait sessions tailored to reveal your authentic self.',
      },
      events: {
        title: 'Event Coverage',
        desc: 'Full-day event documentation capturing every candid moment and milestone.',
      },
      editing: {
        title: 'Photo Editing',
        desc: 'Professional retouching and colour grading to bring your images to life.',
      },
      cta: 'View All Services & Pricing',
    },
    featured: {
      label: 'Selected Work',
      heading: 'Recent projects',
      link: 'View full portfolio →',
    },
    aboutTeaser: {
      label: 'About the Photographer',
      line1: 'Zamira',
      line2: 'Schatschneider',
      bio1: 'With a passion for light, emotion, and storytelling, I create photographs that feel as natural as the moments they preserve. Based wherever the light is best.',
      bio2: "ISO100 Photography was born from the belief that every person, every event, every second deserves to be remembered beautifully.",
      cta: 'Read My Story',
    },
    cta: {
      line1: 'Ready to create',
      line2: 'something beautiful?',
      body: "Book your session online — choose a time that works for you and let's make something extraordinary together.",
      cta1: 'Schedule a Session',
      cta2: 'Ask a Question',
    },
  },

  portfolio: {
    label: 'Work',
    heading: 'Portfolio',
    description: 'A curated selection of portraits, personal branding, lifestyle, graduations, and architecture photography.',
    categories: {
      all: 'All Work',
      portraits: 'Portraits',
      'personal-branding': 'Personal Branding',
      lifestyle: 'Lifestyle',
      graduations: 'Graduations',
      architecture: 'Architecture Photography',
    },
    cta: {
      label: 'Ready?',
      heading: "Let's create together",
      button: 'Book Your Session',
    },
  },

  about: {
    header: {
      label: 'About',
      line1: 'The person',
      line2: 'behind the lens',
      bio1: "I'm Zamira — a photographer driven by the belief that every moment deserves to be remembered with beauty and truth.",
      bio2: "My journey started with a borrowed film camera and a curiosity I couldn't shake. Years later, that same curiosity shapes every session I lead — an endless search for the light, the expression, the split second that reveals something real.",
      bio3: "ISO100 Photography is named for the clearest, most faithful film speed — and that's exactly my philosophy. Clear vision. True colour. No noise.",
      title: 'Photographer & Retoucher',
    },
    stats: {
      sessions: 'Sessions Completed',
      years: 'Years of Experience',
      satisfaction: 'Client Satisfaction',
    },
    values: {
      label: 'My Approach',
      heading: 'What guides my work',
      authenticity: {
        title: 'Authenticity',
        desc: 'Every session is guided by your story. I create space for real emotion, not posed perfection.',
      },
      craft: {
        title: 'Craft',
        desc: 'From composition to colour grade, every detail is considered. The difference is in the care.',
      },
      connection: {
        title: 'Connection',
        desc: 'I believe great photography comes from genuine human connection. You will always feel at ease.',
      },
    },
    equipment: {
      label: 'Style & Equipment',
      heading: 'How I shoot',
      style: { label: 'Style', value: 'Natural, editorial, cinematic' },
      light: { label: 'Preferred Light', value: 'Golden hour, window light' },
      format: { label: 'Format', value: 'Digital + medium format film' },
      editing: { label: 'Editing', value: 'Lightroom, Capture One' },
    },
    cta: {
      line1: "Let's work",
      line2: 'together',
      book: 'Book a Session',
      contact: 'Get in Touch',
    },
  },

  services: {
    label: 'Services & Shop',
    heading: 'Photo editing services',
    description: 'Professional retouching and editing services. Order online and receive your edited images delivered to your inbox.',
    purchase: 'Purchase',
    redirecting: 'Redirecting to checkout…',
    howItWorks: {
      label: 'Process',
      heading: 'How it works',
      steps: [
        { title: 'Choose a service', desc: 'Select the editing package that fits your needs.' },
        { title: 'Secure checkout', desc: 'Complete payment via Stripe — safe and encrypted.' },
        { title: 'Upload your photos', desc: "You'll receive instructions to share your images." },
        { title: 'Receive your edits', desc: 'Delivered to your inbox within the stated timeframe.' },
      ],
    },
    security: 'All payments are processed securely by',
    question: 'Not sure which service is right for you?',
    askQuestion: 'Ask a Question',
    popular: 'Popular',
    items: {
      'outdoor-session': {
        name: 'In Person Outdoor Photo Session',
        description: 'A relaxed, natural-light outdoor session designed to capture you at your best. Includes up to 2 hours of shooting and 6 fully edited photos delivered to your inbox.',
        features: ['Up to 2 hours', '6 fully edited photos', 'Natural light outdoor setting', 'Location of your choice', 'High-res & web exports', '7 day delivery'],
      },
      'single-retouch': {
        name: 'Single Photo Retouch',
        description: 'Colour correction, exposure adjustments, and light skin smoothing for one image. Perfect for profile pictures and special portraits.',
        features: ['Colour grading', 'Exposure correction', 'Skin smoothing', '48hr delivery', 'High-res export'],
      },
      'portrait-enhancement': {
        name: 'Portrait Enhancement',
        description: 'Comprehensive retouching including background cleanup, advanced skin work, and creative colour grading for one portrait.',
        features: ['Advanced skin retouching', 'Background cleanup', 'Teeth whitening', 'Eye enhancement', '72hr delivery', 'High-res export'],
      },
      'event-gallery': {
        name: 'Event Gallery Edit',
        description: 'Professional editing of your 10 best event photos. Consistent colour grading throughout for a cohesive gallery.',
        features: ['10 edited photos', 'Consistent colour palette', 'Basic retouching', 'Gallery-ready export', '5 day delivery'],
      },
      'full-session': {
        name: 'Full Session Edit',
        description: 'Complete editing of up to 30 photos from a single session. Our most comprehensive editing package for a polished final gallery.',
        features: ['Up to 30 edited photos', 'Full retouching', 'Consistent colour grade', 'Print & web exports', '7 day delivery'],
      },
    },
  },

  contact: {
    label: 'Contact',
    heading: 'Get in touch',
    description: "Have a question, or want to discuss a project? Fill in the form and I'll be in touch within 24 hours.",
    info: {
      bookLabel: 'Book a Session',
      bookValue: 'Use the booking page for scheduling',
      responseLabel: 'Response Time',
      responseValue: 'Usually within 24 hours',
      instagramLabel: 'Instagram',
    },
    form: {
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone (optional)',
      phonePlaceholder: '+1 (000) 000 0000',
      subjectLabel: 'Subject',
      subjectDefault: 'Select a subject',
      subjects: {
        booking: 'Booking a session',
        editing: 'Photo editing services',
        pricing: 'Pricing enquiry',
        collaboration: 'Collaboration',
        other: 'Other',
      },
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project, vision, or any questions you have...',
      submit: 'Send Message',
      sending: 'Sending…',
      note: 'I respond to all enquiries within 24 hours.',
    },
    success: {
      heading: 'Message sent!',
      body: "Thank you for reaching out. I'll be in touch within 24 hours.",
      again: 'Send another message',
    },
  },

  booking: {
    label: 'Scheduling',
    heading: 'Book a Session',
    description: "Choose a date and time that works for you. Once booked, you'll receive a confirmation email with everything you need to know before your session.",
    steps: [
      { step: '01', title: 'Pick a time', desc: 'Select from available slots using the scheduler below.' },
      { step: '02', title: 'Confirm details', desc: 'Fill in a few short details about your session and vision.' },
      { step: '03', title: 'See you then', desc: "You'll receive a confirmation email with session prep notes." },
    ],
    question: 'Have questions before booking?',
    cta: 'Get in Touch First',
  },
} as const

// ─────────────────────────────────────────────────────────────────────────────
// SPANISH TRANSLATIONS — Review and edit below before going live
// ─────────────────────────────────────────────────────────────────────────────

const es: typeof en = {
  nav: {
    home: 'Inicio',
    portfolio: 'Portafolio',
    about: 'Sobre Mí',
    services: 'Servicios',
    booking: 'Reservar',
    contact: 'Contacto',
    bookNow: 'Reservar',
    bookSession: 'Reservar una Sesión',
  },

  footer: {
    tagline: 'Capturando los momentos más significativos de la vida con arte e intención.',
    navigation: 'Navegación',
    getInTouch: 'Contáctanos',
    sendMessage: 'Enviar un mensaje',
    bookSession: 'Reservar una sesión',
    followAlong: 'Síguenos',
    crafted: 'Hecho con cuidado.',
  },

  home: {
    hero: {
      label: 'Fotografía Profesional',
      line1: 'Cada encuadre,',
      line2: 'una historia.',
      tagline: 'ISO100 Fotografía — capturando los momentos que más importan, con arte e intención.',
      cta1: 'Ver Portafolio',
      cta2: 'Reservar una Sesión',
      scroll: 'Desplázate',
    },
    servicesSection: {
      label: 'Lo Que Ofrecemos',
      heading: 'Servicios de fotografía\ndiseñados para ti',
      portrait: {
        title: 'Sesiones de Retratos',
        desc: 'Sesiones de retratos íntimas y con hermosa iluminación, diseñadas para revelar tu yo auténtico.',
      },
      events: {
        title: 'Cobertura de Eventos',
        desc: 'Documentación completa de eventos, capturando cada momento espontáneo e hito importante.',
      },
      editing: {
        title: 'Edición de Fotos',
        desc: 'Retoque profesional y gradación de color para dar vida a tus imágenes.',
      },
      cta: 'Ver Todos los Servicios y Precios',
    },
    featured: {
      label: 'Trabajo Selecto',
      heading: 'Proyectos recientes',
      link: 'Ver portafolio completo →',
    },
    aboutTeaser: {
      label: 'Sobre la Fotógrafa',
      line1: 'Zamira',
      line2: 'Schatschneider',
      bio1: 'Con pasión por la luz, la emoción y el arte de contar historias, creo fotografías que se sienten tan naturales como los momentos que preservan.',
      bio2: 'ISO100 Fotografía nació de la convicción de que cada persona, cada evento, cada segundo merece ser recordado con belleza.',
      cta: 'Leer Mi Historia',
    },
    cta: {
      line1: '¿Lista para crear',
      line2: 'algo hermoso?',
      body: 'Reserva tu sesión en línea — elige el horario que mejor te convenga y creemos algo extraordinario juntos.',
      cta1: 'Agendar una Sesión',
      cta2: 'Hacer una Pregunta',
    },
  },

  portfolio: {
    label: 'Trabajo',
    heading: 'Portafolio',
    description: 'Una selección cuidadosa de retratos, imagen personal, lifestyle, graduaciones y fotografía de arquitectura.',
    categories: {
      all: 'Todo el Trabajo',
      portraits: 'Retratos',
      'personal-branding': 'Imagen Personal',
      lifestyle: 'Lifestyle',
      graduations: 'Graduaciones',
      architecture: 'Fotografía de Arquitectura',
    },
    cta: {
      label: '¿Lista?',
      heading: 'Creemos juntos',
      button: 'Reserva tu Sesión',
    },
  },

  about: {
    header: {
      label: 'Sobre Mí',
      line1: 'La persona',
      line2: 'detrás del lente',
      bio1: 'Soy Zamira — una fotógrafa impulsada por la convicción de que cada momento merece ser recordado con belleza y verdad.',
      bio2: 'Mi camino comenzó con una cámara de película prestada y una curiosidad que no podía ignorar. Años después, esa misma curiosidad da forma a cada sesión que dirijo — una búsqueda constante de la luz, la expresión, el instante que revela algo real.',
      bio3: 'ISO100 Fotografía lleva el nombre de la velocidad de película más clara y fiel — y esa es exactamente mi filosofía. Visión clara. Color verdadero. Sin interferencias.',
      title: 'Fotógrafa & Retocadora',
    },
    stats: {
      sessions: 'Sesiones Completadas',
      years: 'Años de Experiencia',
      satisfaction: 'Satisfacción del Cliente',
    },
    values: {
      label: 'Mi Enfoque',
      heading: 'Lo que guía mi trabajo',
      authenticity: {
        title: 'Autenticidad',
        desc: 'Cada sesión está guiada por tu historia. Creo un espacio para la emoción real, no la perfección posada.',
      },
      craft: {
        title: 'Arte',
        desc: 'Desde la composición hasta la gradación de color, cada detalle es considerado. La diferencia está en el cuidado.',
      },
      connection: {
        title: 'Conexión',
        desc: 'Creo que la gran fotografía surge de una genuina conexión humana. Siempre te sentirás cómoda.',
      },
    },
    equipment: {
      label: 'Estilo y Equipo',
      heading: 'Cómo fotografío',
      style: { label: 'Estilo', value: 'Natural, editorial, cinematográfico' },
      light: { label: 'Luz Preferida', value: 'Hora dorada, luz natural' },
      format: { label: 'Formato', value: 'Digital + formato medio en película' },
      editing: { label: 'Edición', value: 'Lightroom, Capture One' },
    },
    cta: {
      line1: 'Trabajemos',
      line2: 'juntos',
      book: 'Reservar una Sesión',
      contact: 'Contáctanos',
    },
  },

  services: {
    label: 'Servicios y Tienda',
    heading: 'Servicios de edición de fotos',
    description: 'Servicios profesionales de retoque y edición. Ordena en línea y recibe tus imágenes editadas directamente en tu correo.',
    purchase: 'Comprar',
    redirecting: 'Redirigiendo al pago…',
    howItWorks: {
      label: 'Proceso',
      heading: 'Cómo funciona',
      steps: [
        { title: 'Elige un servicio', desc: 'Selecciona el paquete de edición que mejor se adapte a tus necesidades.' },
        { title: 'Pago seguro', desc: 'Completa el pago con Stripe — seguro y encriptado.' },
        { title: 'Sube tus fotos', desc: 'Recibirás instrucciones para compartir tus imágenes.' },
        { title: 'Recibe tus ediciones', desc: 'Entregadas en tu correo dentro del plazo indicado.' },
      ],
    },
    security: 'Todos los pagos son procesados de forma segura por',
    question: '¿No sabes qué servicio es el adecuado para ti?',
    askQuestion: 'Hacer una Pregunta',
    popular: 'Popular',
    items: {
      'outdoor-session': {
        name: 'Sesión de Fotos al Aire Libre',
        description: 'Una sesión relajada al aire libre con luz natural, diseñada para capturarte en tu mejor momento. Incluye hasta 2 horas de sesión y 6 fotos completamente editadas.',
        features: ['Hasta 2 horas', '6 fotos editadas', 'Ambiente natural al aire libre', 'Lugar de tu elección', 'Exportación en alta resolución', 'Entrega en 7 días'],
      },
      'single-retouch': {
        name: 'Retoque de Foto Individual',
        description: 'Corrección de color, ajustes de exposición y suavizado ligero de piel para una imagen. Perfecto para fotos de perfil y retratos especiales.',
        features: ['Gradación de color', 'Corrección de exposición', 'Suavizado de piel', 'Entrega en 48 horas', 'Exportación en alta resolución'],
      },
      'portrait-enhancement': {
        name: 'Mejora de Retrato',
        description: 'Retoque integral que incluye limpieza de fondo, trabajo avanzado de piel y gradación creativa de color para un retrato.',
        features: ['Retoque avanzado de piel', 'Limpieza de fondo', 'Blanqueamiento de dientes', 'Mejora de ojos', 'Entrega en 72 horas', 'Exportación en alta resolución'],
      },
      'event-gallery': {
        name: 'Edición de Galería de Evento',
        description: 'Edición profesional de tus 10 mejores fotos del evento. Gradación de color consistente para una galería cohesiva.',
        features: ['10 fotos editadas', 'Paleta de colores consistente', 'Retoque básico', 'Exportación para galería', 'Entrega en 5 días'],
      },
      'full-session': {
        name: 'Edición Completa de Sesión',
        description: 'Edición completa de hasta 30 fotos de una sola sesión. Nuestro paquete de edición más completo para una galería final pulida.',
        features: ['Hasta 30 fotos editadas', 'Retoque completo', 'Gradación de color consistente', 'Exportaciones para impresión y web', 'Entrega en 7 días'],
      },
    },
  },

  contact: {
    label: 'Contacto',
    heading: 'Ponte en contacto',
    description: '¿Tienes alguna pregunta o quieres hablar sobre un proyecto? Completa el formulario y te responderé dentro de 24 horas.',
    info: {
      bookLabel: 'Reservar una Sesión',
      bookValue: 'Usa la página de reservas para programar',
      responseLabel: 'Tiempo de Respuesta',
      responseValue: 'Generalmente dentro de 24 horas',
      instagramLabel: 'Instagram',
    },
    form: {
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu@correo.com',
      phoneLabel: 'Teléfono (opcional)',
      phonePlaceholder: '+1 (000) 000 0000',
      subjectLabel: 'Asunto',
      subjectDefault: 'Selecciona un asunto',
      subjects: {
        booking: 'Reservar una sesión',
        editing: 'Servicios de edición',
        pricing: 'Consulta de precios',
        collaboration: 'Colaboración',
        other: 'Otro',
      },
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto, visión o cualquier pregunta que tengas...',
      submit: 'Enviar Mensaje',
      sending: 'Enviando…',
      note: 'Respondo a todas las consultas dentro de 24 horas.',
    },
    success: {
      heading: '¡Mensaje enviado!',
      body: 'Gracias por comunicarte. Te responderé dentro de 24 horas.',
      again: 'Enviar otro mensaje',
    },
  },

  booking: {
    label: 'Reservaciones',
    heading: 'Reservar una Sesión',
    description: 'Elige la fecha y hora que mejor te convenga. Una vez reservado, recibirás un correo de confirmación con todo lo que necesitas saber antes de tu sesión.',
    steps: [
      { step: '01', title: 'Elige un horario', desc: 'Selecciona de los horarios disponibles usando el calendario a continuación.' },
      { step: '02', title: 'Confirma los detalles', desc: 'Completa algunos detalles sobre tu sesión y visión.' },
      { step: '03', title: 'Hasta entonces', desc: 'Recibirás un correo de confirmación con notas de preparación para la sesión.' },
    ],
    question: '¿Tienes preguntas antes de reservar?',
    cta: 'Contáctanos Primero',
  },
}

export const translations = { en, es }
export type Translations = typeof en
