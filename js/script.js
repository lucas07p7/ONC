const revealPhotos = document.querySelectorAll('.photo-reveal');
const serviceMenu = document.querySelector('.quick-menu');
const serviceMenuButton = document.querySelector('[data-menu-toggle]');
const languagePicker = document.querySelector('.language-picker');
const languageButton = document.querySelector('[data-language-toggle]');
const languageCurrent = document.querySelector('[data-language-current]');
const languageOptions = document.querySelectorAll('[data-language-option]');

const translations = {
  'pt-BR': {
    label: 'PT-BR',
    displayLabel: '🇧🇷 Português',
    htmlLang: 'pt-BR',
    pageTitle: 'ONC ',
    logoLabel: 'Pagina inicial ONC Estaleiro',
    servicesButtonLabel: 'Abrir links de serviços',
    languageButtonLabel: 'Trocar idioma',
    brandSubtitle: 'Oliveira Navegação e Comercio',
    navAbout: 'Sobre',
    navServices: 'Serviços',
    navProjects: 'Projetos',
    navContact: 'Contato',
    quickBarges: 'Balsas',
    quickPushers: 'Empurradores',
    quickFreight: 'Fretes',
    heroEyebrow: 'Estaleiro e soluções fluviais',
    heroTitle: 'Excelência em construção e manutenção naval na Amazônia.',
    heroText: 'Projetos robustos para transporte fluvial, operações industriais e embarcações sob medida, com foco em confiança, segurança e desempenho.',
    quoteButton: 'Solicitar orçamento',
    projectsButton: 'Ver projetos',
    panelTitle: 'Presença regional',
    panelText: 'Base operacional em Iranduba-AM, atendendo demandas de construção, reparo e apoio logístico fluvial.',
    statProjects: 'Projetos',
    statWork: 'Atuação',
    statWorkValue: 'Construção e reparo',
    statContact: 'Contato',
    statContactValue: 'WhatsApp e Instagram',
    introEyebrow: 'Compromisso técnico',
    introTitle: 'Uma operação visualmente forte e preparada para apresentar credibilidade.',
    introText: 'A nova estrutura destaca a ONC como empresa, não apenas como vitrine. Organizamos a experiência para transmitir solidez, capacidade operacional e proximidade comercial desde a primeira dobra.',
    aboutEyebrow: 'Quem somos',
    aboutTitle: 'Estrutura naval voltada para performance, segurança e resultado operacional.',
    aboutText: 'A ONC Estaleiro atua com foco em construção naval, manutenção e apoio a operações fluviais. O posicionamento da marca foi organizado para comunicar experiência, presença local e capacidade de entrega com mais clareza.',
    aboutButton: 'Conheça nossa história',
    featureOneTitle: 'Construção sob medida',
    featureOneText: 'Soluções adaptadas ao perfil da operação, com planejamento funcional e resistência estrutural.',
    featureTwoTitle: 'Atendimento regional',
    featureTwoText: 'Base em Iranduba-AM para atender demandas logísticas e operacionais da Amazonia.',
    featureThreeTitle: 'Apresentação profissional',
    featureThreeText: 'Identidade visual mais corporativa para transmitir confiança a clientes e parceiros.',
    servicesEyebrow: 'Nossos serviços',
    servicesTitle: 'Soluções para diferentes perfis de operação fluvial.',
    servicesText: 'Cada frente foi apresentada com mais clareza para reforçar especialidade, capacidade de exeção e linguagem empresarial.',
    bargeKicker: 'Construção naval',
    bargeTitle: 'Balsas sob medida',
    bargeText: 'Projetos robustos para transporte de carga e apoio logistico fluvial com foco em estabilidade e durabilidade.',
    pusherKicker: 'Propulsão e apoio',
    pusherTitle: 'Empurradores modernos',
    pusherText: 'Embarcações preparadas para desempenho operacional, navegação regional e eficiência em rotas fluviais.',
    freightKicker: 'Transporte fluvial',
    freightTitle: 'Fretes e apoio operacional',
    freightText: 'Soluções versáteis para operações com foco em confiança, segurança de carga e organizacao logística.',
    detailLink: 'Abrir página detalhada',
    projectsEyebrow: 'Projetos realizados',
    projectsTitle: 'Imagens que reforçam capacidade técnica e presença de campo.',
    projectCaptionKicker: 'Base operacional',
    projectCaptionTitle: 'Estrutura de atendimento e operação em Iranduba-AM.',
    numberBarges: 'Total de balsas feitas',
    numberTugs: 'Rebocadores feitos',
    numberFocus: 'Foco em credibilidade institucional e imagem profissional',
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos conversar sobre o seu projeto fluvial.',
    contactText: 'Use os canais abaixo para apresentar a sua demanda, solicitar informações ou iniciar um atendimento comercial com a ONC Estaleiro.',
    locationTitle: 'Localização',
    locationText: 'Empresa sediada em Iranduba-AM, com atuacao voltada a construcao, reparo e suporte fluvial na região.',
    footerText: 'Apresentação institucional com foco em navegação, operação fluvial e credibilidade comercial.',
    footerCredit: '2026 © Desenvolvido por Lucas Cavalcante'
  },
  en: {
    label: 'EN',
    displayLabel: '🇺🇸 English',
    htmlLang: 'en',
    pageTitle: 'ONC ',
    logoLabel: 'ONC Shipyard home page',
    servicesButtonLabel: 'Open service links',
    languageButtonLabel: 'Change language',
    brandSubtitle: 'Oliveira Navigation and Commerce',
    navAbout: 'About',
    navServices: 'Services',
    navProjects: 'Projects',
    navContact: 'Contact',
    quickBarges: 'Barges',
    quickPushers: 'Push boats',
    quickFreight: 'Freight',
    heroEyebrow: 'Shipyard and river solutions',
    heroTitle: 'Excellence in shipbuilding and naval maintenance in the Amazon.',
    heroText: 'Robust projects for river transport, industrial operations and custom vessels, focused on trust, safety and performance.',
    quoteButton: 'Request a quote',
    projectsButton: 'View projects',
    panelTitle: 'Regional presence',
    panelText: 'Operational base in Iranduba-AM, serving shipbuilding, repair and river logistics support needs.',
    statProjects: 'Projects',
    statWork: 'Expertise',
    statWorkValue: 'Building and repair',
    statContact: 'Contact',
    statContactValue: 'WhatsApp and Instagram',
    introEyebrow: 'Technical commitment',
    introTitle: 'A visually strong operation prepared to communicate credibility.',
    introText: 'The new structure presents ONC as a company, not just a showcase. The experience was organized to express solidity, operational capacity and commercial proximity from the first screen.',
    aboutEyebrow: 'Who we are',
    aboutTitle: 'Naval structure focused on performance, safety and operational results.',
    aboutText: 'ONC Shipyard works in shipbuilding, maintenance and support for river operations. The brand positioning was organized to communicate experience, local presence and delivery capacity more clearly.',
    aboutButton: 'Know our story',
    featureOneTitle: 'Custom construction',
    featureOneText: 'Solutions adapted to each operation profile, with functional planning and structural resistance.',
    featureTwoTitle: 'Regional service',
    featureTwoText: 'Based in Iranduba-AM to serve logistics and operational demands in the Amazon.',
    featureThreeTitle: 'Professional presentation',
    featureThreeText: 'A more corporate visual identity to communicate confidence to clients and partners.',
    servicesEyebrow: 'Our services',
    servicesTitle: 'Solutions for different river operation profiles.',
    servicesText: 'Each area is presented more clearly to reinforce expertise, execution capacity and business language.',
    bargeKicker: 'Shipbuilding',
    bargeTitle: 'Custom barges',
    bargeText: 'Robust projects for cargo transport and river logistics support, focused on stability and durability.',
    pusherKicker: 'Propulsion and support',
    pusherTitle: 'Modern push boats',
    pusherText: 'Vessels prepared for operational performance, regional navigation and efficiency on river routes.',
    freightKicker: 'River transport',
    freightTitle: 'Freight and operational support',
    freightText: 'Versatile solutions for operations focused on trust, cargo safety and logistics organization.',
    detailLink: 'Open detailed page',
    projectsEyebrow: 'Completed projects',
    projectsTitle: 'Images that reinforce technical capacity and field presence.',
    projectCaptionKicker: 'Operational base',
    projectCaptionTitle: 'Service and operation structure in Iranduba-AM.',
    numberBarges: 'Total barges built',
    numberTugs: 'Tugboats built',
    numberFocus: 'Focus on institutional credibility and professional image',
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s talk about your river project.',
    contactText: 'Use the channels below to present your needs, request information or start a commercial conversation with ONC Shipyard.',
    locationTitle: 'Location',
    locationText: 'Company based in Iranduba-AM, focused on building, repair and river support in the region.',
    footerText: 'Institutional presentation focused on navigation, river operations and commercial credibility.',
    footerCredit: '2026 © Developed by Lucas Cavalcante'
  },
  es: {
    label: 'ES',
    displayLabel: '🇪🇸 Español',
    htmlLang: 'es',
    pageTitle: 'ONC ',
    logoLabel: 'Página inicial de ONC Astillero',
    servicesButtonLabel: 'Abrir enlaces de servicios',
    languageButtonLabel: 'Cambiar idioma',
    brandSubtitle: 'Oliveira Navegación y Comercio',
    navAbout: 'Sobre',
    navServices: 'Servicios',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    quickBarges: 'Barcazas',
    quickPushers: 'Empujadores',
    quickFreight: 'Fletes',
    heroEyebrow: 'Astillero y soluciones fluviales',
    heroTitle: 'Excelencia en construcción y mantenimiento naval en la Amazonía.',
    heroText: 'Proyectos robustos para transporte fluvial, operaciones industriales y embarcaciones a medida, con foco en confianza, seguridad y desempeño.',
    quoteButton: 'Solicitar presupuesto',
    projectsButton: 'Ver proyectos',
    panelTitle: 'Presencia regional',
    panelText: 'Base operativa en Iranduba-AM, atendiendo demandas de construcción, reparación y apoyo logístico fluvial.',
    statProjects: 'Proyectos',
    statWork: 'Actuación',
    statWorkValue: 'Construcción y reparación',
    statContact: 'Contacto',
    statContactValue: 'WhatsApp e Instagram',
    introEyebrow: 'Compromiso técnico',
    introTitle: 'Una operación visualmente sólida y preparada para transmitir credibilidad.',
    introText: 'La nueva estructura presenta a ONC como empresa, no solo como vitrina. Organizamos la experiencia para transmitir solidez, capacidad operativa y cercanía comercial desde la primera pantalla.',
    aboutEyebrow: 'Quiénes somos',
    aboutTitle: 'Estructura naval orientada a desempeño, seguridad y resultado operativo.',
    aboutText: 'ONC Astillero actúa con foco en construcción naval, mantenimiento y apoyo a operaciones fluviales. El posicionamiento de marca fue organizado para comunicar experiencia, presencia local y capacidad de entrega con más claridad.',
    aboutButton: 'Conozca nuestra historia',
    featureOneTitle: 'Construcción a medida',
    featureOneText: 'Soluciones adaptadas al perfil de la operación, con planificación funcional y resistencia estructural.',
    featureTwoTitle: 'Atención regional',
    featureTwoText: 'Base en Iranduba-AM para atender demandas logísticas y operativas de la Amazonía.',
    featureThreeTitle: 'Presentación profesional',
    featureThreeText: 'Identidad visual más corporativa para transmitir confianza a clientes y socios.',
    servicesEyebrow: 'Nuestros servicios',
    servicesTitle: 'Soluciones para diferentes perfiles de operación fluvial.',
    servicesText: 'Cada frente fue presentada con más claridad para reforzar especialidad, capacidad de ejecución y lenguaje empresarial.',
    bargeKicker: 'Construcción naval',
    bargeTitle: 'Barcazas a medida',
    bargeText: 'Proyectos robustos para transporte de carga y apoyo logístico fluvial con foco en estabilidad y durabilidad.',
    pusherKicker: 'Propulsión y apoyo',
    pusherTitle: 'Empujadores modernos',
    pusherText: 'Embarcaciones preparadas para desempeño operativo, navegación regional y eficiencia en rutas fluviales.',
    freightKicker: 'Transporte fluvial',
    freightTitle: 'Fletes y apoyo operativo',
    freightText: 'Soluciones versátiles para operaciones con foco en confianza, seguridad de carga y organización logística.',
    detailLink: 'Abrir página detallada',
    projectsEyebrow: 'Proyectos realizados',
    projectsTitle: 'Imágenes que refuerzan capacidad técnica y presencia en campo.',
    projectCaptionKicker: 'Base operativa',
    projectCaptionTitle: 'Estructura de atención y operación en Iranduba-AM.',
    numberBarges: 'Total de barcazas construidas',
    numberTugs: 'Remolcadores construidos',
    numberFocus: 'Foco en credibilidad institucional e imagen profesional',
    contactEyebrow: 'Contacto',
    contactTitle: 'Hablemos sobre su proyecto fluvial.',
    contactText: 'Use los canales abajo para presentar su demanda, solicitar información o iniciar una atención comercial con ONC Astillero.',
    locationTitle: 'Ubicación',
    locationText: 'Empresa ubicada en Iranduba-AM, con actuación orientada a construcción, reparación y soporte fluvial en la región.',
    footerText: 'Presentación institucional con foco en navegación, operación fluvial y credibilidad comercial.',
    footerCredit: '2026 © Desarrollado por Lucas Cavalcante'
  }
};

function getSavedLanguage() {
  try {
    return localStorage.getItem('onc-language');
  } catch (error) {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem('onc-language', language);
  } catch (error) {
    return;
  }
}

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : 'pt-BR';
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = dictionary.htmlLang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    if (dictionary[key]) {
      element.setAttribute('aria-label', dictionary[key]);
    }
  });

  if (languageCurrent) {
    languageCurrent.textContent = dictionary.displayLabel;
  }

  languageOptions.forEach((option) => {
    const isActive = option.dataset.languageOption === selectedLanguage;
    option.classList.toggle('is-active', isActive);
    option.setAttribute('aria-pressed', String(isActive));
  });

  if (document.querySelector('[data-i18n="pageTitle"]')) {
    document.title = dictionary.pageTitle;
  }
  saveLanguage(selectedLanguage);
}

if (serviceMenu && serviceMenuButton) {
  serviceMenuButton.addEventListener('click', () => {
    const isOpen = serviceMenu.classList.toggle('is-open');
    serviceMenuButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!serviceMenu.contains(event.target)) {
      serviceMenu.classList.remove('is-open');
      serviceMenuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

if (languagePicker && languageButton) {
  languageButton.addEventListener('click', () => {
    const isOpen = languagePicker.classList.toggle('is-open');
    languageButton.setAttribute('aria-expanded', String(isOpen));
  });

  languageOptions.forEach((option) => {
    option.addEventListener('click', () => {
      applyLanguage(option.dataset.languageOption);
      languagePicker.classList.remove('is-open');
      languageButton.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!languagePicker.contains(event.target)) {
      languagePicker.classList.remove('is-open');
      languageButton.setAttribute('aria-expanded', 'false');
    }
  });
}

applyLanguage(getSavedLanguage() || 'pt-BR');

if ('IntersectionObserver' in window) {
  const photoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.22,
    rootMargin: '0px 0px -40px 0px'
  });

  revealPhotos.forEach((photo) => photoObserver.observe(photo));
} else {
  revealPhotos.forEach((photo) => photo.classList.add('is-visible'));
}
