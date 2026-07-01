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
    logoLabel: 'Página inicial ONC Estaleiro',
    servicesButtonLabel: 'Abrir links de serviços',
    languageButtonLabel: 'Trocar idioma',
    brandSubtitle: 'Oliveira Navegação e Comércio',
    navAbout: 'Sobre',
    navServices: 'Serviços',
    navProjects: 'Projetos',
    navContact: 'Contato',
    quickBarges: 'Balsas',
    quickPushers: 'Empurradores',
    quickFreight: 'Fretes',
    heroEyebrow: 'Estaleiro e soluções fluviais',
    heroTitle: 'Construção e manutenção naval para operações fluviais na Amazônia.',
    heroText: 'Projetos de balsas, empurradores, reparos e adaptações sob medida para quem precisa de embarcação confiável em rotas amazônicas e operações internacionais.',
    quoteButton: 'Solicitar orçamento',
    projectsButton: 'Ver projetos',
    panelTitle: 'Presença amazônica e internacional',
    panelText: 'Base operacional em Iranduba-AM, atendendo construção, reparo e apoio fluvial no Brasil, Guiana Inglesa, Colômbia, Venezuela e Peru.',
    statProjects: 'Frentes',
    statWork: 'Atuação',
    statWorkValue: 'Construção e reparo',
    statContact: 'Contato',
    statContactValue: 'WhatsApp e Instagram',
    introEyebrow: 'Compromisso técnico',
    introTitle: 'Estrutura para construir, reparar e adaptar embarcações conforme a operação.',
    introText: 'A ONC organiza cada demanda a partir do uso real da embarcação: tipo de carga, rota, ambiente de navegação, necessidade de força, manutenção e durabilidade.',
    aboutEyebrow: 'Quem somos',
    aboutTitle: 'Estrutura naval voltada para performance, segurança e resultado operacional.',
    aboutText: 'A ONC Estaleiro atua no desenvolvimento, construção, manutenção e suporte de embarcações fluviais, com leitura prática das rotas, cargas e condições operacionais da Amazônia e de países vizinhos.',
    aboutButton: 'Conheça nossa história',
    featureOneTitle: 'Construção sob medida',
    featureOneText: 'Soluções adaptadas ao perfil da operação, com planejamento funcional e resistência estrutural.',
    featureTwoTitle: 'Atendimento nacional e internacional',
    featureTwoText: 'Base em Iranduba-AM para atender demandas na Amazônia e em rotas internacionais próximas.',
    featureThreeTitle: 'Manutenção e adaptação',
    featureThreeText: 'Avaliação de reparos, ajustes e melhorias para prolongar uso e fortalecer desempenho operacional.',
    servicesEyebrow: 'Nossos serviços',
    servicesTitle: 'Soluções para diferentes perfis de operação fluvial.',
    servicesText: 'Construção, manutenção e adaptação naval com foco em estabilidade, resistência, uso operacional e atendimento em rotas nacionais e internacionais.',
    bargeKicker: 'Construção naval',
    bargeTitle: 'Balsas sob medida',
    bargeText: 'Projetos robustos para transporte de carga e apoio logístico fluvial com foco em estabilidade e durabilidade.',
    pusherKicker: 'Propulsão e apoio',
    pusherTitle: 'Empurradores modernos',
    pusherText: 'Embarcações preparadas para desempenho operacional, navegação amazônica e eficiência em rotas fluviais internacionais.',
    freightKicker: 'Transporte fluvial',
    freightTitle: 'Fretes e apoio operacional',
    freightText: 'Soluções versáteis para operações com foco em confiança, segurança de carga e organização logística.',
    detailLink: 'Abrir página detalhada',
    projectsEyebrow: 'Projetos realizados',
    projectsTitle: 'Imagens que reforçam capacidade técnica e presença de campo.',
    projectCaptionKicker: 'Base operacional',
    projectCaptionTitle: 'Estrutura de atendimento e operação em Iranduba-AM.',
    numberBarges: 'Total de balsas feitas',
    numberTugs: 'Rebocadores feitos',
    numberFocus: 'Projetos orientados ao uso real da embarcação',
    contactEyebrow: 'Contato',
    contactTitle: 'Solicite atendimento para seu projeto naval.',
    contactText: 'Envie tipo de embarcação, finalidade, dimensão aproximada, prazo desejado e local de operação para iniciarmos a avaliação comercial.',
    locationTitle: 'Localização',
    locationText: 'Empresa sediada em Iranduba-AM, com atuação em construção, reparo e suporte fluvial para o Brasil e países vizinhos.',
    footerText: 'Atendimento ONC para construção naval, logística, materiais e operações fluviais.',
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
    heroTitle: 'Shipbuilding and naval maintenance for river operations in the Amazon.',
    heroText: 'Custom barge, push boat, repair and adaptation projects for those who need reliable vessels for Amazon routes and international operations.',
    quoteButton: 'Request a quote',
    projectsButton: 'View projects',
    panelTitle: 'Amazon and international presence',
    panelText: 'Operational base in Iranduba-AM, serving construction, repair and river support in Brazil, Guyana, Colombia, Venezuela and Peru.',
    statProjects: 'Areas',
    statWork: 'Expertise',
    statWorkValue: 'Building and repair',
    statContact: 'Contact',
    statContactValue: 'WhatsApp and Instagram',
    introEyebrow: 'Technical commitment',
    introTitle: 'Structure to build, repair and adapt vessels according to the operation.',
    introText: 'ONC organizes each demand from the real use of the vessel: cargo type, route, navigation environment, power needs, maintenance and durability.',
    aboutEyebrow: 'Who we are',
    aboutTitle: 'Naval structure focused on performance, safety and operational results.',
    aboutText: 'ONC Shipyard works in development, construction, maintenance and support for river vessels, with a practical understanding of routes, cargo and operating conditions in the Amazon and neighboring countries.',
    aboutButton: 'Know our story',
    featureOneTitle: 'Custom construction',
    featureOneText: 'Solutions adapted to each operation profile, with functional planning and structural resistance.',
    featureTwoTitle: 'National and international service',
    featureTwoText: 'Based in Iranduba-AM to serve demands in the Amazon and nearby international routes.',
    featureThreeTitle: 'Maintenance and adaptation',
    featureThreeText: 'Evaluation of repairs, adjustments and improvements to extend use and strengthen operational performance.',
    servicesEyebrow: 'Our services',
    servicesTitle: 'Solutions for different river operation profiles.',
    servicesText: 'Shipbuilding, maintenance and adaptation focused on stability, resistance, operational use and national and international routes.',
    bargeKicker: 'Shipbuilding',
    bargeTitle: 'Custom barges',
    bargeText: 'Robust projects for cargo transport and river logistics support, focused on stability and durability.',
    pusherKicker: 'Propulsion and support',
    pusherTitle: 'Modern push boats',
    pusherText: 'Vessels prepared for operational performance, Amazon navigation and efficiency on international river routes.',
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
    numberFocus: 'Projects guided by the vessel’s real use',
    contactEyebrow: 'Contact',
    contactTitle: 'Request service for your naval project.',
    contactText: 'Send vessel type, purpose, approximate dimensions, desired deadline and operating location so we can start the commercial evaluation.',
    locationTitle: 'Location',
    locationText: 'Company based in Iranduba-AM, focused on building, repair and river support for Brazil and neighboring countries.',
    footerText: 'ONC service for shipbuilding, logistics, materials and river operations.',
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
    heroTitle: 'Construcción y mantenimiento naval para operaciones fluviales en la Amazonía.',
    heroText: 'Proyectos de barcazas, empujadores, reparaciones y adaptaciones a medida para quien necesita una embarcación confiable en rutas amazónicas y operaciones internacionales.',
    quoteButton: 'Solicitar presupuesto',
    projectsButton: 'Ver proyectos',
    panelTitle: 'Presencia amazónica e internacional',
    panelText: 'Base operativa en Iranduba-AM, atendiendo construcción, reparación y apoyo fluvial en Brasil, Guyana, Colombia, Venezuela y Perú.',
    statProjects: 'Frentes',
    statWork: 'Actuación',
    statWorkValue: 'Construcción y reparación',
    statContact: 'Contacto',
    statContactValue: 'WhatsApp e Instagram',
    introEyebrow: 'Compromiso técnico',
    introTitle: 'Estructura para construir, reparar y adaptar embarcaciones según la operación.',
    introText: 'ONC organiza cada demanda a partir del uso real de la embarcación: tipo de carga, ruta, ambiente de navegación, necesidad de fuerza, mantenimiento y durabilidad.',
    aboutEyebrow: 'Quiénes somos',
    aboutTitle: 'Estructura naval orientada a desempeño, seguridad y resultado operativo.',
    aboutText: 'ONC Astillero actúa en desarrollo, construcción, mantenimiento y soporte de embarcaciones fluviales, con lectura práctica de rutas, cargas y condiciones operativas de la Amazonía y países vecinos.',
    aboutButton: 'Conozca nuestra historia',
    featureOneTitle: 'Construcción a medida',
    featureOneText: 'Soluciones adaptadas al perfil de la operación, con planificación funcional y resistencia estructural.',
    featureTwoTitle: 'Atención nacional e internacional',
    featureTwoText: 'Base en Iranduba-AM para atender demandas en la Amazonía y en rutas internacionales cercanas.',
    featureThreeTitle: 'Mantenimiento y adaptación',
    featureThreeText: 'Evaluación de reparaciones, ajustes y mejoras para prolongar el uso y fortalecer el desempeño operativo.',
    servicesEyebrow: 'Nuestros servicios',
    servicesTitle: 'Soluciones para diferentes perfiles de operación fluvial.',
    servicesText: 'Construcción, mantenimiento y adaptación naval con foco en estabilidad, resistencia, uso operativo y atención en rutas nacionales e internacionales.',
    bargeKicker: 'Construcción naval',
    bargeTitle: 'Barcazas a medida',
    bargeText: 'Proyectos robustos para transporte de carga y apoyo logístico fluvial con foco en estabilidad y durabilidad.',
    pusherKicker: 'Propulsión y apoyo',
    pusherTitle: 'Empujadores modernos',
    pusherText: 'Embarcaciones preparadas para desempeño operativo, navegación amazónica y eficiencia en rutas fluviales internacionales.',
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
    numberFocus: 'Proyectos orientados al uso real de la embarcación',
    contactEyebrow: 'Contacto',
    contactTitle: 'Solicite atención para su proyecto naval.',
    contactText: 'Envíe tipo de embarcación, finalidad, dimensión aproximada, plazo deseado y lugar de operación para iniciar la evaluación comercial.',
    locationTitle: 'Ubicación',
    locationText: 'Empresa ubicada en Iranduba-AM, con actuación en construcción, reparación y soporte fluvial para Brasil y países vecinos.',
    footerText: 'Atención ONC para construcción naval, logística, materiales y operaciones fluviales.',
    footerCredit: '2026 © Desarrollado por Lucas Cavalcante'
  }
};

const textTranslations = {
  en: {
    'Grupo ONC': 'ONC Group',
    'Oliveira Navegação e Comércio': 'Oliveira Navigation and Commerce',
    'Estaleiro': 'Shipyard',
    'Navegação e Logística': 'Navigation and Logistics',
    'Mineração e Material de Construção': 'Mining and Construction Materials',
    'Frentes do grupo': 'Group areas',
    'Escolha a área da ONC que melhor atende sua demanda.': 'Choose the ONC area that best meets your needs.',
    'Construção e manutenção naval': 'Shipbuilding and naval maintenance',
    'Estrutura para construção, reparo e suporte a embarcações fluviais, usando toda a base institucional que já existia no site.': 'Structure for building, repairing and supporting river vessels, using the institutional base already present on the site.',
    'Acessar': 'Open',
    'Transporte e apoio operacional': 'Transport and operational support',
    'Fretes, apoio fluvial, movimentação de cargas e organização operacional para rotas nacionais e internacionais.': 'Freight, river support, cargo movement and operational organization for national and international routes.',
    'Fretes, apoio fluvial, movimentação de cargas e organização operacional para rotas nacionais e internacionais.': 'Freight, river support, cargo movement and operational organization for national and international routes.',
    'Insumos e fornecimento': 'Supplies and provision',
    'Nova frente para apresentar fornecimento, atendimento comercial e suporte a demandas de materiais para obras e operações.': 'A new area to present supply, commercial service and support for material needs in projects and operations.',
    'Grupo ONC: estaleiro, navegação, logística, mineração e material de construção.': 'ONC Group: shipyard, navigation, logistics, mining and construction materials.',
    'Atendimento ONC para construção naval, logística, materiais e operações fluviais.': 'ONC service for shipbuilding, logistics, materials and river operations.',
    'Atendimento ONC para construção naval, logística, materiais e operações fluviais.': 'ONC service for shipbuilding, logistics, materials and river operations.',
    'Atendimento': 'Service',
    '2026 © Desenvolvido por Lucas Cavalcante.': '2026 © Developed by Lucas Cavalcante.',
    '2026 © Desenvolvido por Lucas Cavalcante': '2026 © Developed by Lucas Cavalcante',
    'Solicitar orçamento': 'Request a quote',
    'Conheça nossa história': 'Know our story',
    'Ver projetos': 'View projects',
    'WhatsApp': 'WhatsApp',
    'Instagram': 'Instagram',
    'contato@oncgroup.com.br': 'contato@oncgroup.com.br',
    'Contato': 'Contact',
    'Frentes': 'Areas',
    'Sobre': 'About',
    'Serviços': 'Services',
    'Projetos': 'Projects',
    'Localização': 'Location',
    'Detalhamento': 'Details',
    'Aplicações': 'Applications',
    'Diferencial ONC': 'ONC advantage',
    'Galeria': 'Gallery',
    'Construção naval': 'Shipbuilding',
    'Como o projeto avança': 'How the project moves forward',
    'Do primeiro contato ao orçamento, o projeto naval começa com informações objetivas.': 'From first contact to quote, the naval project starts with objective information.',
    'Com esses dados, a equipe entende melhor a necessidade e direciona a conversa para construção, reparo, adaptação ou suporte.': 'With this information, the team better understands the need and directs the conversation toward construction, repair, adaptation or support.',
    'Demanda': 'Demand',
    'Conte se precisa construir, reformar, reparar ou adaptar uma embarcação.': 'Tell us whether you need to build, renovate, repair or adapt a vessel.',
    'Tipo de embarcação': 'Vessel type',
    'Informe se a necessidade envolve balsa, empurrador ou outra estrutura fluvial.': 'Tell us whether the need involves a barge, push boat or another river structure.',
    'Uso operacional': 'Operational use',
    'Explique rota, carga, apoio desejado e rotina prevista para a embarcação.': 'Explain route, cargo, desired support and expected vessel routine.',
    'Orçamento': 'Quote',
    'A equipe avalia as informações e orienta os próximos passos comerciais.': 'The team evaluates the information and guides the next commercial steps.',
    'Balsas e empurradores': 'Barges and push boats',
    'Construção, manutenção e adaptação naval com foco em estabilidade, resistência, uso operacional e atendimento nacional e internacional.': 'Shipbuilding, maintenance and adaptation focused on stability, resistance, operational use and national and international service.',
    'Construção, manutenção e adaptação naval com foco em estabilidade, resistência, uso operacional e atendimento em rotas nacionais e internacionais.': 'Shipbuilding, maintenance and adaptation focused on stability, resistance, operational use and national and international routes.',
    'Projetos de embarcações sob medida para transporte, apoio e rotinas fluviais.': 'Custom vessel projects for transport, support and river routines.',
    'Manutenção e reparo': 'Maintenance and repair',
    'Suporte para recuperar estrutura, preservar segurança e manter operação ativa.': 'Support to recover structure, preserve safety and keep the operation active.',
    'Adaptação sob medida': 'Custom adaptation',
    'Ajustes conforme carga, rota, capacidade, uso e necessidade do cliente.': 'Adjustments according to cargo, route, capacity, use and client need.',
    'Leitura prática da demanda para orientar solução naval e próximos passos.': 'Practical understanding of the demand to guide the naval solution and next steps.',
    'Balsa sob medida': 'Custom barge',
    'Empurrador': 'Push boat',
    'Operação fluvial': 'River operation',
    'Sob medida': 'Custom',
    'Projetos orientados ao uso real da embarcação': 'Projects guided by the vessel’s real use',
    'Propulsão e apoio': 'Propulsion and support',
    'Transporte fluvial': 'River transport',
    'Balsas sob medida': 'Custom barges',
    'Empurradores modernos': 'Modern push boats',
    'Fretes e apoio operacional': 'Freight and operational support',
    'Nossa história': 'Our story',
    'Quem somos': 'Who we are',
    'Missão': 'Mission',
    'Visão': 'Vision',
    'Valores': 'Values',
    'Linha do tempo': 'Timeline',
    'Início da empresa': 'Company beginning',
    'Consolidação operacional': 'Operational consolidation',
    'Nova fase institucional': 'New institutional phase',
    'Balsas sob medida para operações de carga, apoio e travessia fluvial.': 'Custom barges for cargo, support and river crossing operations.',
    'Estruturas desenvolvidas para alta resistência operacional, estabilidade em navegação e adaptação ao tipo de carga ou demanda logística do cliente.': 'Structures developed for high operational resistance, navigation stability and adaptation to each cargo type or logistics demand.',
    'Projetadas para operar com segurança e eficiência em diferentes cenários.': 'Designed to operate safely and efficiently in different scenarios.',
    'As balsas da ONC são pensadas para atender operações fluviais que exigem confiabilidade estrutural, distribuição adequada de carga e desempenho consistente em rotas nacionais e internacionais. O projeto considera o perfil da atividade, o ambiente de navegação e a rotina operacional esperada.': 'ONC barges are designed for river operations that require structural reliability, proper cargo distribution and consistent performance on national and international routes. Each project considers the activity profile, navigation environment and expected operating routine.',
    'As balsas da ONC são pensadas para atender operações fluviais que exigem confiabilidade estrutural, distribuição adequada de carga e desempenho consistente em rotas amazônicas, nacionais e internacionais. O projeto considera o perfil da atividade, o ambiente de navegação e a rotina operacional esperada.': 'ONC barges are designed for river operations that require structural reliability, proper cargo distribution and consistent performance on Amazon, national and international routes. Each project considers the activity profile, navigation environment and expected operating routine.',
    'Transporte de cargas diversas com configuração adequada ao uso.': 'Transport of different cargo types with a configuration suited to the intended use.',
    'Estrutura reforçada para enfrentar demandas contínuas de operação.': 'Reinforced structure to handle continuous operating demands.',
    'Layout funcional para facilitar embarque, desembarque e apoio logístico.': 'Functional layout to support loading, unloading and logistics assistance.',
    'Planejamento sob medida conforme dimensão, capacidade e finalidade.': 'Custom planning according to size, capacity and purpose.',
    'Movimentação de carga, apoio industrial, transporte operacional e uso em cadeias logísticas fluviais.': 'Cargo movement, industrial support, operational transport and use in river logistics chains.',
    'Atendimento nacional e internacional com leitura próxima da realidade amazônica e foco em durabilidade de longo prazo.': 'National and international service with a close understanding of Amazon realities and a focus on long-term durability.',
    'Atendimento para operações na Amazônia e em países vizinhos, com foco em durabilidade de longo prazo.': 'Service for operations in the Amazon and neighboring countries, focused on long-term durability.',
    'Visão visual da linha de balsas e da estrutura operacional.': 'Visual overview of the barge line and operational structure.',
    'Empurradores modernos para operações que exigem potência e estabilidade.': 'Modern push boats for operations that require power and stability.',
    'Projetados para apoiar comboios, rebocar cargas e garantir desempenho consistente em ambientes fluviais de alta exigência operacional.': 'Designed to support convoys, tow cargo and ensure consistent performance in demanding river environments.',
    'Embarcações pensadas para comando, força e navegação eficiente.': 'Vessels designed for command, power and efficient navigation.',
    'Os empurradores ocupam papel central em operações de apoio e deslocamento de embarcações na região. Por isso, a ONC organiza esse tipo de projeto com atenção especial a motorização, capacidade de manobra, estrutura de cabine e segurança da rotina de operação.': 'Push boats play a central role in support operations and vessel movement in the region. For this reason, ONC designs this type of project with special attention to motorization, maneuverability, cabin structure and operating safety.',
    'Os empurradores ocupam papel central em operações de apoio e deslocamento de embarcações em rotas amazônicas, nacionais e internacionais. Por isso, a ONC organiza esse tipo de projeto com atenção especial a motorização, capacidade de manobra, estrutura de cabine e segurança da rotina de operação.': 'Push boats play a central role in support operations and vessel movement on Amazon, national and international routes. For this reason, ONC designs this type of project with special attention to motorization, maneuverability, cabin structure and operating safety.',
    'Alto potencial de apoio a comboios e transporte de estruturas fluviais.': 'High potential for convoy support and river structure transport.',
    'Projeto focado em estabilidade direcional e eficiência de navegação.': 'Design focused on directional stability and navigation efficiency.',
    'Configuração funcional para rotinas intensas de operação nacional e internacional.': 'Functional configuration for intense national and international operating routines.',
    'Configuração funcional para rotinas intensas de operação no Brasil e em países vizinhos.': 'Functional configuration for intense operations in Brazil and neighboring countries.',
    'Boa resposta para apoio logístico, rebocagem e suporte tático.': 'Strong response for logistics support, towing and tactical assistance.',
    'Rebocagem, apoio a balsas, transporte assistido e operações contínuas em corredores fluviais.': 'Towing, barge support, assisted transport and continuous operations in river corridors.',
    'Planejamento visual e técnico mais claro para comunicar robustez e confiança a clientes operacionais.': 'Clearer visual and technical planning to communicate robustness and reliability to operational clients.',
    'Visão do perfil operacional dos empurradores e da estrutura de apoio.': 'Overview of the push boats operational profile and support structure.',
    'Fretes e apoio operacional com foco em confiança, fluxo e segurança de carga.': 'Freight and operational support focused on trust, flow and cargo safety.',
    'Uma frente orientada para atender demandas logísticas fluviais com melhor organização operacional, suporte nacional e internacional e leitura prática das necessidades do cliente.': 'An area focused on river logistics needs with better operational organization, national and international support and a practical understanding of client needs.',
    'Uma frente orientada para atender demandas logísticas fluviais com organização operacional, suporte amazônico e leitura prática para rotas nacionais e internacionais.': 'An area focused on river logistics needs with operational organization, Amazon support and practical understanding for national and international routes.',
    'Solução pensada para movimentação e suporte logístico em ambiente fluvial.': 'A solution designed for movement and logistics support in river environments.',
    'A ONC apresenta o serviço de fretes e apoio operacional como uma frente voltada a deslocamento de materiais, apoio a cadeias produtivas e suporte a operações nacionais e internacionais. A proposta destaca segurança, previsibilidade e melhor apresentação comercial para facilitar o entendimento do cliente sobre a função da embarcação.': 'ONC presents freight and operational support as an area focused on material movement, support for production chains and national and international operations. The proposal highlights safety, predictability and clearer commercial presentation so clients can understand the vessel function.',
    'A ONC apresenta o serviço de fretes e apoio operacional como uma frente voltada a deslocamento de materiais, apoio a cadeias produtivas e suporte a operações no Brasil e países vizinhos. A proposta destaca segurança, previsibilidade e melhor apresentação comercial para facilitar o entendimento do cliente sobre a função da embarcação.': 'ONC presents freight and operational support as an area focused on material movement, support for production chains and operations in Brazil and neighboring countries. The proposal highlights safety, predictability and clearer commercial presentation so clients can understand the vessel function.',
    'Transporte organizado para cargas e materiais em ambiente fluvial.': 'Organized transport for cargo and materials in river environments.',
    'Apoio a rotinas operacionais que exigem regularidade e confiança.': 'Support for operating routines that require regularity and reliability.',
    'Planejamento visual e técnico voltado para clareza de uso e de função.': 'Visual and technical planning focused on clarity of use and function.',
    'Boa adaptação a demandas logísticas da região amazônica.': 'Good adaptation to logistics demands in the Amazon region.',
    'Boa adaptação a demandas logísticas na Amazônia, Guiana Inglesa, Colômbia, Venezuela e Peru.': 'Well adapted to logistics demands in the Amazon, Guyana, Colombia, Venezuela and Peru.',
    'Fretes nacionais e internacionais, apoio logístico, movimentação de insumos e suporte a operações fluviais contínuas.': 'National and international freight, logistics support, supply movement and support for continuous river operations.',
    'Fretes nacionais e internacionais, apoio logístico, movimentação de insumos e suporte a operações fluviais contínuas.': 'National and international freight, logistics support, supply movement and support for continuous river operations.',
    'Comunicação mais objetiva sobre cada embarcação, facilitando apresentação comercial e entendimento do serviço.': 'More objective communication about each vessel, making commercial presentation and service understanding easier.',
    'Imagens associadas a apoio logístico, transporte e estrutura operacional.': 'Images associated with logistics support, transport and operational structure.',
    'Grupo ONC: navegação, logística e apoio operacional fluvial.': 'ONC Group: navigation, logistics and river operational support.',
    'Mineração e materiais para obras com apoio logístico nacional e internacional.': 'Mining and construction materials with national and international logistics support.',
    'Mineração e materiais para obras com apoio logístico nacional e internacional.': 'Mining and construction materials with national and international logistics support.',
    'Solicite materiais, informe volume e local de entrega. A ONC organiza o atendimento comercial, a movimentação em pátio e o apoio logístico para obras e operações.': 'Request materials, provide volume and delivery location. ONC organizes commercial service, yard movement and logistics support for projects and operations.',
    'Ver materiais': 'View materials',
    'Material': 'Material',
    'Volume': 'Volume',
    'Entrega': 'Delivery',
    'Atendimento comercial': 'Commercial service',
    'Um caminho mais direto entre o pedido do cliente, o material necessário e a entrega.': 'A more direct path between the client request, the needed material and delivery.',
    'A frente de mineração e materiais de construção foi organizada para receber demandas de obras, qualificar volumes e encaminhar o fornecimento com clareza. O foco é transformar uma solicitação simples em um atendimento objetivo: material, quantidade, prazo e destino.': 'The mining and construction materials area was organized to receive project demands, qualify volumes and route supply clearly. The focus is turning a simple request into objective service: material, quantity, deadline and destination.',
    'Recebimento de pedidos para obras, manutenção, aterro e abastecimento operacional.': 'Receiving requests for projects, maintenance, fill material and operational supply.',
    'Qualificação de volume, tipo de material, local de retirada ou entrega e prazo desejado.': 'Qualification of volume, material type, pickup or delivery location and desired deadline.',
    'Integração com transporte e apoio logístico quando a operação exigir deslocamento.': 'Integration with transport and logistics support when the operation requires movement.',
    'Comunicação rápida para facilitar orçamento, disponibilidade e próximos passos.': 'Fast communication to make quotation, availability and next steps easier.',
    'Pedido bem direcionado': 'Well-directed request',
    'Quanto mais claro o material, volume e destino, mais rápida fica a avaliação comercial.': 'The clearer the material, volume and destination, the faster the commercial evaluation.',
    'Operação conectada': 'Connected operation',
    'O atendimento conversa com a estrutura de pátio, transporte e logística do Grupo ONC.': 'Service is connected to ONC Group’s yard, transport and logistics structure.',
    'Materiais e demandas': 'Materials and requests',
    'Um guia objetivo para quem precisa comprar, retirar ou entregar material.': 'A clear guide for those who need to buy, pick up or deliver material.',
    'Um guia objetivo para quem precisa comprar, retirar ou entregar material.': 'A clear guide for those who need to buy, pick up or deliver material.',
    'Os itens abaixo ajudam o cliente a identificar o tipo de solicitação antes do primeiro contato.': 'The items below help clients identify the type of request before first contact.',
    'Areia, seixo e brita': 'Sand, gravel and crushed stone',
    'Materiais para construção, manutenção, bases, concreto e necessidades de obra.': 'Materials for construction, maintenance, bases, concrete and project needs.',
    'Aterro e regularização': 'Fill and leveling',
    'Solicitações para preparação de área, reforço de terreno e apoio a frentes operacionais.': 'Requests for area preparation, ground reinforcement and support for operational fronts.',
    'Carregamento em pátio': 'Yard loading',
    'Organização para retirada, separação de volume e movimentação com apoio operacional.': 'Organization for pickup, volume separation and movement with operational support.',
    'Entrega sob demanda': 'On-demand delivery',
    'Apoio para avaliar rota, prazo e melhor encaminhamento logístico conforme o destino.': 'Support to evaluate route, deadline and the best logistics direction according to destination.',
    'Mineração e material de construção com atendimento voltado a obras e operações nacionais e internacionais.': 'Mining and construction materials with service focused on projects and national and international operations.',
    'Nova frente do Grupo ONC para apresentar fornecimento de materiais, relacionamento comercial e apoio logístico a clientes que precisam de insumos com maior clareza de atendimento.': 'A new ONC Group area to present material supply, commercial relationships and logistics support for clients who need supplies with clearer service.',
    'Nova frente': 'New area',
    'Um canal específico para demandas de materiais, obras e abastecimento operacional.': 'A specific channel for material, project and operational supply needs.',
    'A página organiza a atuação da ONC em mineração e material de construção como uma frente própria dentro do grupo. O objetivo é facilitar o primeiro contato de clientes que buscam insumos, fornecimento e suporte para planejamento de entrega.': 'The page organizes ONC’s mining and construction materials activity as its own group area. The goal is to make first contact easier for clients seeking supplies, provision and delivery planning support.',
    'Atendimento comercial para materiais de construção e insumos relacionados.': 'Commercial service for construction materials and related supplies.',
    'Direcionamento de demandas para obras, fornecedores e operações nacionais e internacionais.': 'Routing demands for projects, suppliers and national and international operations.',
    'Integração com a frente de navegação e logística quando houver necessidade de transporte.': 'Integration with navigation and logistics when transport is needed.',
    'Comunicação institucional pronta para receber conteúdos, produtos e imagens específicas no futuro.': 'Institutional communication ready to receive specific content, products and images in the future.',
    'Foco comercial': 'Commercial focus',
    'Receber pedidos, qualificar volumes, entender prazos e orientar o cliente para a melhor solução disponível.': 'Receive requests, qualify volumes, understand deadlines and guide clients to the best available solution.',
    'Integração com o grupo': 'Integration with the group',
    'A frente nasce conectada ao estaleiro e à logística, permitindo uma apresentação mais completa da capacidade ONC.': 'This area is connected to the shipyard and logistics, allowing a more complete presentation of ONC capacity.',
    'Atendimento': 'Service',
    'Estrutura inicial para organizar pedidos e apresentar capacidade de fornecimento.': 'Initial structure to organize requests and present supply capacity.',
    'Materiais para obras': 'Materials for projects',
    'Canal dedicado para demandas de construção, manutenção, reformas e abastecimento de projetos.': 'Dedicated channel for construction, maintenance, renovation and project supply needs.',
    'Insumos minerais': 'Mineral supplies',
    'Atendimento comercial para demandas ligadas a mineração, extração, fornecimento e comercialização.': 'Commercial service for needs related to mining, extraction, supply and commercialization.',
    'Entrega e apoio': 'Delivery and support',
    'Possibilidade de articular transporte e apoio logístico com as demais frentes do Grupo ONC.': 'Possibility of coordinating transport and logistics support with the other ONC Group areas.',
    'Operação em pátio': 'Yard operation',
    'Pátio, carregamento e entrega no mesmo fluxo.': 'Yard, loading and delivery in one flow.',
    'A foto dos caminhões mostra a parte prática da operação: material disponível, movimentação em pátio e atendimento preparado para direcionar cada solicitação conforme volume, prazo e destino.': 'The truck photo shows the practical side of the operation: available material, yard movement and service ready to route each request according to volume, deadline and destination.',
    'Separação e carregamento de materiais conforme a demanda.': 'Material separation and loading according to demand.',
    'Controle de volume, prazo e ponto de entrega.': 'Control of volume, deadline and delivery point.',
    'Apoio logístico para conectar pátio, obra e cliente.': 'Logistics support to connect yard, project and client.',
    'Entrega e apoio para movimentação de materiais.': 'Delivery and support for material movement.',
    'A estrutura de atendimento também considera a etapa de retirada, organização em pátio e direcionamento dos materiais conforme a necessidade de cada obra ou operação.': 'The service structure also considers pickup, yard organization and material routing according to each project or operation need.',
    'Apoio para carregamento e movimentação de insumos.': 'Support for loading and moving supplies.',
    'Organização de demandas por volume, prazo e local de entrega.': 'Organization of requests by volume, deadline and delivery location.',
    'Integração com transporte quando houver necessidade logística.': 'Integration with transport when logistics are needed.',
    'Peça seu orçamento com as informações certas.': 'Request your quote with the right information.',
    'Envie tipo de material, quantidade, bairro ou localidade, prazo desejado e se precisa de retirada ou entrega.': 'Send material type, quantity, neighborhood or location, desired deadline and whether pickup or delivery is needed.',
    'Tipo de material': 'Material type',
    'Quantidade ou volume': 'Quantity or volume',
    'Local de entrega': 'Delivery location',
    'Prazo desejado': 'Desired deadline',
    'Solicite atendimento para materiais.': 'Request service for materials.',
    'Envie o tipo de material, quantidade, local de entrega e prazo desejado para direcionarmos o atendimento.': 'Send the material type, quantity, delivery location and desired deadline so we can route the service.',
    'Atendimento ligado ao Porto Vilas Manaus, ponto estratégico para apoio, materiais e operações nacionais e internacionais.': 'Service linked to Porto Vilas Manaus, a strategic point for support, materials and national and international operations.',
    'Atendimento ligado ao Porto Vilas Manaus, ponto estratégico para apoio, materiais e operações no Brasil e países vizinhos.': 'Service linked to Porto Vilas Manaus, a strategic point for support, materials and operations in Brazil and neighboring countries.',
    'Grupo ONC: mineração, material de construção e suporte a operações nacionais e internacionais.': 'ONC Group: mining, construction materials and support for national and international operations.',
    'Grupo ONC: mineração, material de construção e suporte a operações nacionais e internacionais.': 'ONC Group: mining, construction materials and support for national and international operations.',
    'Fretes fluviais e apoio logístico para cargas na Amazônia.': 'River freight and logistics support for cargo in the Amazon.',
    'Envie origem, destino, tipo de carga, volume e prazo. A ONC avalia a melhor forma de movimentar materiais, insumos e demandas operacionais por rotas nacionais e internacionais.': 'Send origin, destination, cargo type, volume and deadline. ONC evaluates the best way to move materials, supplies and operational demands through national and international routes.',
    'Envie origem, destino, tipo de carga, volume e prazo. A ONC avalia a melhor forma de movimentar materiais, insumos e demandas operacionais por rotas nacionais e internacionais.': 'Send origin, destination, cargo type, volume and deadline. ONC evaluates the best way to move materials, supplies and operational demands through national and international routes.',
    'Como solicitar': 'How to request',
    'Como funciona': 'How it works',
    'Da rota ao embarque, o atendimento começa com quatro informações simples.': 'From route to boarding, service starts with four simple pieces of information.',
    'Esses dados ajudam a equipe a entender a operação, avaliar possibilidade logística e orientar o melhor encaminhamento.': 'This information helps the team understand the operation, evaluate logistics possibilities and guide the best direction.',
    'Origem e destino': 'Origin and destination',
    'Informe de onde a carga sai e para onde precisa seguir.': 'Tell us where the cargo leaves from and where it needs to go.',
    'Tipo de carga': 'Cargo type',
    'Descreva material, insumo, equipamento ou demanda operacional.': 'Describe material, supply, equipment or operational demand.',
    'Volume estimado': 'Estimated volume',
    'Indique quantidade, peso aproximado ou dimensão da carga.': 'Indicate quantity, approximate weight or cargo dimensions.',
    'Compartilhe janela de coleta, entrega ou necessidade da operação.': 'Share pickup window, delivery window or operational need.',
    'Operação fluvial estruturada para transformar demanda em rota viável.': 'Structured river operation to turn demand into a viable route.',
    'A ONC Navegação e Logística conecta experiência de campo, embarcações e acompanhamento comercial para atender clientes que precisam movimentar cargas, materiais, insumos e equipamentos em ambiente amazônico.': 'ONC Navigation and Logistics connects field experience, vessels and commercial follow-up to serve clients who need to move cargo, materials, supplies and equipment in the Amazon environment.',
    'Fretes fluviais para cargas de obra, materiais, equipamentos e demandas operacionais.': 'River freight for project cargo, materials, equipment and operational demands.',
    'Apoio logístico para empresas, fornecedores, operações industriais e frentes nacionais e internacionais.': 'Logistics support for companies, suppliers, industrial operations and national and international fronts.',
    'Apoio logístico para empresas, fornecedores, operações industriais e frentes no Brasil e países vizinhos.': 'Logistics support for companies, suppliers, industrial operations and fronts in Brazil and neighboring countries.',
    'Organização de rota, prazo, janela de atendimento e necessidade de apoio no destino.': 'Organization of route, deadline, service window and support needs at destination.',
    'Integração com a estrutura naval, comercial e operacional do Grupo ONC.': 'Integration with ONC Group’s naval, commercial and operational structure.',
    'Empresas e obras que precisam movimentar cargas por rio com comunicação direta e avaliação prática.': 'Companies and projects that need to move cargo by river with direct communication and practical evaluation.',
    'Leitura amazônica e internacional, estrutura própria e capacidade de conectar transporte, pátio, embarcação e atendimento.': 'Amazon and international understanding, own structure and ability to connect transport, yard, vessel and service.',
    'Leitura amazônica e internacional, estrutura própria e capacidade de conectar transporte, pátio, embarcação e atendimento.': 'Amazon and international understanding, own structure and ability to connect transport, yard, vessel and service.',
    'Serviços pensados para quem precisa tirar a carga do plano e colocar na rota.': 'Services designed for those who need to move cargo from plan to route.',
    'Transporte de materiais': 'Material transport',
    'Movimentação fluvial de insumos, suprimentos, estruturas e cargas de apoio.': 'River movement of supplies, provisions, structures and support cargo.',
    'Apoio a obras e fornecedores': 'Support for projects and suppliers',
    'Atendimento para frentes que dependem de entrega, retirada ou suporte recorrente.': 'Service for fronts that depend on delivery, pickup or recurring support.',
    'Cargas operacionais': 'Operational cargo',
    'Encaminhamento de demandas ligadas a equipamentos, manutenção e abastecimento.': 'Routing demands related to equipment, maintenance and supply.',
    'Planejamento de rota': 'Route planning',
    'Avaliação de origem, destino, volume, prazo e melhor possibilidade de operação.': 'Evaluation of origin, destination, volume, deadline and best operational possibility.',
    'Frete, apoio e operação no ritmo da rota.': 'Freight, support and operation at the pace of the route.',
    'Quando a demanda exige deslocamento por rio, a ONC organiza o atendimento para entender carga, ponto de origem, destino e prazo antes de indicar o melhor caminho operacional.': 'When demand requires river movement, ONC organizes service to understand cargo, origin point, destination and deadline before indicating the best operational path.',
    'Ver fretes': 'View freight',
    'Cotação rápida': 'Quick quote',
    'Estrutura fluvial para transporte, apoio e movimentação de cargas.': 'River structure for transport, support and cargo movement.',
    'Balsa carregada': 'Loaded barge',
    'Apoio operacional': 'Operational support',
    'Transporte nacional e internacional': 'National and international transport',
    'Transporte nacional e internacional': 'National and international transport',
    'Solicite cotação para frete fluvial.': 'Request a quote for river freight.',
    'Envie origem, destino, tipo de carga, volume estimado e prazo desejado para a equipe avaliar o melhor encaminhamento.': 'Send origin, destination, cargo type, estimated volume and desired deadline so the team can evaluate the best direction.',
    'Navegação e logística para movimentar cargas com previsibilidade na Amazônia.': 'Navigation and logistics to move cargo with predictability in the Amazon.',
    'Uma frente voltada a fretes, apoio fluvial, deslocamento de materiais e suporte operacional para clientes que dependem de rotas nacionais e internacionais bem organizadas.': 'An area focused on freight, river support, material movement and operational support for clients who depend on well-organized national and international routes.',
    'Atuação': 'Activity',
    'Operação fluvial estruturada para apoiar cadeias produtivas e demandas nacionais e internacionais.': 'Structured river operation to support production chains and national and international demands.',
    'A ONC Navegação e Logística aproveita a experiência do grupo em embarcações e rotina fluvial para atender operações que precisam movimentar cargas, insumos, equipamentos e materiais com segurança, clareza e acompanhamento comercial.': 'ONC Navigation and Logistics uses the group’s experience with vessels and river routines to serve operations that need to move cargo, supplies, equipment and materials with safety, clarity and commercial follow-up.',
    'Fretes fluviais para cargas, materiais e demandas operacionais.': 'River freight for cargo, materials and operational demands.',
    'Apoio logístico para empresas, obras, operações industriais e fornecedores.': 'Logistics support for companies, projects, industrial operations and suppliers.',
    'Organização de rotas, prazos e necessidades conforme o perfil do cliente.': 'Organization of routes, deadlines and needs according to each client profile.',
    'Integração com a estrutura naval e comercial do Grupo ONC.': 'Integration with ONC Group’s naval and commercial structure.',
    'Indicado para': 'Recommended for',
    'Clientes que precisam de transporte fluvial, apoio a rotas, movimentação de insumos e suporte operacional recorrente.': 'Clients who need river transport, route support, supply movement and recurring operational support.',
    'Conhecimento de campo, base amazônica e internacional e comunicação direta para transformar a demanda do cliente em uma operação viável.': 'Field knowledge, Amazon and international base and direct communication to turn client demand into a viable operation.',
    'Capacidades': 'Capabilities',
    'Frente preparada para conectar transporte, operação e atendimento comercial.': 'Area prepared to connect transport, operations and commercial service.',
    'Fretes nacionais e internacionais': 'National and international freight',
    'Movimentação de cargas e materiais por vias fluviais, com foco em planejamento e confiança.': 'Movement of cargo and materials by river routes, focused on planning and reliability.',
    'Apoio a operações': 'Operational support',
    'Suporte para rotinas que exigem embarcação, acompanhamento e leitura prática do ambiente amazônico e internacional.': 'Support for routines that require vessels, follow-up and a practical understanding of the Amazon and international environment.',
    'Integração logística': 'Logistics integration',
    'Atendimento alinhado com outras frentes do grupo, facilitando demandas que envolvem materiais e transporte.': 'Service aligned with other group areas, making demands involving materials and transport easier.',
    'Soluções versáteis para operações com foco em confiança, segurança de carga e organização logística.': 'Versatile solutions for operations focused on trust, cargo safety and logistics organization.',
    'Operação': 'Operation',
    'Imagens de referência da estrutura fluvial que sustenta a frente logística.': 'Reference images of the river structure that supports the logistics area.',
    'Solicite atendimento para fretes e logística.': 'Request service for freight and logistics.',
    'Envie sua rota, tipo de carga, volume estimado e prazo desejado para a equipe avaliar o melhor encaminhamento.': 'Send your route, cargo type, estimated volume and desired deadline so the team can evaluate the best direction.',
    'Base operacional em Iranduba-AM para apoio à navegação, fretes e demandas logísticas fluviais.': 'Operational base in Iranduba-AM for navigation support, freight and river logistics needs.',
    'Mais de 10 anos de trajetória construídos com visão, coragem e trabalho fluvial.': 'More than 10 years of history built with vision, courage and river work.',
    'A ONC Estaleiro nasceu da visão de um empresário sonhador que acreditava no potencial da navegação amazônica e internacional e na força do trabalho bem feito para transformar oportunidades em resultados duradouros.': 'ONC Shipyard was born from the vision of an entrepreneur who believed in the potential of Amazon and international navigation and in the strength of well-done work to turn opportunities into lasting results.',
    'A ONC Estaleiro nasceu da visão de um empresário sonhador que acreditava no potencial da navegação amazônica, nacional e internacional e na força do trabalho bem feito para transformar oportunidades em resultados duradouros.': 'ONC Shipyard was born from the vision of an entrepreneur who believed in the potential of Amazon, national and international navigation and in the strength of well-done work to turn opportunities into lasting results.',
    'Uma empresa formada por experiência, perseverança e compromisso com a Amazônia.': 'A company shaped by experience, perseverance and commitment to the Amazon.',
    'Há mais de uma década, a empresa deu seus primeiros passos a partir de um sonho simples: construir uma operação respeitada, útil e presente na realidade fluvial da região. Com o passar dos anos, esse sonho ganhou estrutura, parceiros, clientes e uma identidade própria, sempre guiada por dedicação, responsabilidade e vontade de crescer.': 'More than a decade ago, the company took its first steps from a simple dream: to build a respected, useful operation present in the region’s river reality. Over the years, that dream gained structure, partners, clients and its own identity, always guided by dedication, responsibility and the desire to grow.',
    'Há mais de uma década, a empresa deu seus primeiros passos a partir de um sonho simples: construir uma operação respeitada, útil e presente na realidade fluvial amazônica. Com o passar dos anos, esse sonho ganhou estrutura, parceiros, clientes e uma identidade própria, sempre guiada por dedicação, responsabilidade e vontade de crescer.': 'More than a decade ago, the company took its first steps from a simple dream: to build a respected, useful operation present in the Amazon river reality. Over the years, that dream gained structure, partners, clients and its own identity, always guided by dedication, responsibility and the desire to grow.',
    'Ao longo dessa jornada, a ONC consolidou uma forma de trabalho baseada em proximidade com o cliente, leitura prática das demandas operacionais e foco em soluções que realmente funcionam no dia a dia da navegação. Essa combinação ajudou a transformar esforço em credibilidade e presença nacional e internacional.': 'Throughout this journey, ONC consolidated a way of working based on client proximity, practical reading of operational demands and focus on solutions that truly work in daily navigation. This combination helped turn effort into credibility and national and international presence.',
    'Ao longo dessa jornada, a ONC consolidou uma forma de trabalho baseada em proximidade com o cliente, leitura prática das demandas operacionais e foco em soluções que realmente funcionam no dia a dia da navegação. Essa combinação ajudou a transformar esforço em credibilidade para atender demandas no Brasil e em países vizinhos.': 'Throughout this journey, ONC consolidated a way of working based on client proximity, practical reading of operational demands and focus on solutions that truly work in daily navigation. This combination helped turn effort into credibility to serve demands in Brazil and neighboring countries.',
    'Hoje, a empresa segue ampliando sua estrutura comercial e operacional sem perder a sua essência: ser resultado da visão de um empreendedor que acreditou no próprio sonho, investiu em estrutura e construiu uma história marcada por constância, trabalho sério e confiança.': 'Today, the company continues to expand its commercial and operational structure without losing its essence: being the result of an entrepreneur’s vision, investment in structure and a history marked by consistency, serious work and trust.',
    'Atender operações fluviais com seriedade, clareza e compromisso com qualidade estrutural e comercial.': 'Serve river operations with seriousness, clarity and commitment to structural and commercial quality.',
    'Fortalecer a marca ONC como referência nacional e internacional em navegação, apoio fluvial e apresentação profissional.': 'Strengthen the ONC brand as a national and international reference in navigation, river support and professional presentation.',
    'Fortalecer a marca ONC como referência em navegação, apoio fluvial e apresentação profissional para operações nacionais e internacionais.': 'Strengthen ONC as a reference in navigation, river support and professional presentation for national and international operations.',
    'Respeito, confiança, trabalho contínuo, proximidade com o cliente e orgulho pela história construída.': 'Respect, trust, continuous work, client proximity and pride in the history built.',
    'Uma caminhada de crescimento feita com consistência.': 'A growth journey built with consistency.',
    'Fundação inspirada pelo sonho de construir uma operação forte e respeitada no setor fluvial amazônico e internacional.': 'Foundation inspired by the dream of building a strong and respected operation in the Amazon and international river sector.',
    'Fundação inspirada pelo sonho de construir uma operação forte e respeitada no setor fluvial amazônico e internacional.': 'Foundation inspired by the dream of building a strong and respected operation in the Amazon and international river sector.',
    'Com o tempo, a empresa ampliou relações comerciais, fortaleceu sua base e passou a atender demandas com mais segurança e estrutura.': 'Over time, the company expanded commercial relationships, strengthened its base and began serving demands with more security and structure.',
    'Agora, a ONC apresenta uma comunicação mais clara e profissional para refletir a história que já construiu no mercado.': 'Now, ONC presents clearer and more professional communication to reflect the history it has already built in the market.'
  },
  es: {
    'Grupo ONC': 'Grupo ONC',
    'Oliveira Navegação e Comércio': 'Oliveira Navegación y Comercio',
    'Estaleiro': 'Astillero',
    'Navegação e Logística': 'Navegación y Logística',
    'Mineração e Material de Construção': 'Minería y Material de Construcción',
    'Frentes do grupo': 'Áreas del grupo',
    'Escolha a área da ONC que melhor atende sua demanda.': 'Elija el área de ONC que mejor atiende su demanda.',
    'Construção e manutenção naval': 'Construcción y mantenimiento naval',
    'Estrutura para construção, reparo e suporte a embarcações fluviais, usando toda a base institucional que já existia no site.': 'Estructura para construcción, reparación y soporte a embarcaciones fluviales, usando toda la base institucional que ya existía en el sitio.',
    'Acessar': 'Acceder',
    'Transporte e apoio operacional': 'Transporte y apoyo operativo',
    'Fretes, apoio fluvial, movimentação de cargas e organização operacional para rotas nacionais e internacionais.': 'Fletes, apoyo fluvial, movimiento de cargas y organización operativa para rutas nacionales e internacionales.',
    'Fretes, apoio fluvial, movimentação de cargas e organização operacional para rotas nacionais e internacionais.': 'Fletes, apoyo fluvial, movimiento de cargas y organización operativa para rutas nacionales e internacionales.',
    'Insumos e fornecimento': 'Insumos y suministro',
    'Nova frente para apresentar fornecimento, atendimento comercial e suporte a demandas de materiais para obras e operações.': 'Nueva área para presentar suministro, atención comercial y soporte a demandas de materiales para obras y operaciones.',
    'Grupo ONC: estaleiro, navegação, logística, mineração e material de construção.': 'Grupo ONC: astillero, navegación, logística, minería y material de construcción.',
    'Atendimento ONC para construção naval, logística, materiais e operações fluviais.': 'Atención ONC para construcción naval, logística, materiales y operaciones fluviales.',
    'Atendimento ONC para construção naval, logística, materiais e operações fluviais.': 'Atención ONC para construcción naval, logística, materiales y operaciones fluviales.',
    'Atendimento': 'Atención',
    '2026 © Desenvolvido por Lucas Cavalcante.': '2026 © Desarrollado por Lucas Cavalcante.',
    '2026 © Desenvolvido por Lucas Cavalcante': '2026 © Desarrollado por Lucas Cavalcante',
    'Solicitar orçamento': 'Solicitar presupuesto',
    'Conheça nossa história': 'Conozca nuestra historia',
    'Ver projetos': 'Ver proyectos',
    'WhatsApp': 'WhatsApp',
    'Instagram': 'Instagram',
    'contato@oncgroup.com.br': 'contato@oncgroup.com.br',
    'Contato': 'Contacto',
    'Frentes': 'Áreas',
    'Sobre': 'Sobre',
    'Serviços': 'Servicios',
    'Projetos': 'Proyectos',
    'Localização': 'Ubicación',
    'Detalhamento': 'Detalle',
    'Aplicações': 'Aplicaciones',
    'Diferencial ONC': 'Diferencial ONC',
    'Galeria': 'Galería',
    'Construção naval': 'Construcción naval',
    'Como o projeto avança': 'Cómo avanza el proyecto',
    'Do primeiro contato ao orçamento, o projeto naval começa com informações objetivas.': 'Desde el primer contacto hasta el presupuesto, el proyecto naval comienza con información objetiva.',
    'Com esses dados, a equipe entende melhor a necessidade e direciona a conversa para construção, reparo, adaptação ou suporte.': 'Con estos datos, el equipo entiende mejor la necesidad y dirige la conversación hacia construcción, reparación, adaptación o soporte.',
    'Demanda': 'Demanda',
    'Conte se precisa construir, reformar, reparar ou adaptar uma embarcação.': 'Cuente si necesita construir, reformar, reparar o adaptar una embarcación.',
    'Tipo de embarcação': 'Tipo de embarcación',
    'Informe se a necessidade envolve balsa, empurrador ou outra estrutura fluvial.': 'Informe si la necesidad involucra barcaza, empujador u otra estructura fluvial.',
    'Uso operacional': 'Uso operativo',
    'Explique rota, carga, apoio desejado e rotina prevista para a embarcação.': 'Explique ruta, carga, apoyo deseado y rutina prevista para la embarcación.',
    'Orçamento': 'Presupuesto',
    'A equipe avalia as informações e orienta os próximos passos comerciais.': 'El equipo evalúa la información y orienta los próximos pasos comerciales.',
    'Balsas e empurradores': 'Barcazas y empujadores',
    'Construção, manutenção e adaptação naval com foco em estabilidade, resistência, uso operacional e atendimento nacional e internacional.': 'Construcción, mantenimiento y adaptación naval con foco en estabilidad, resistencia, uso operativo y atención nacional e internacional.',
    'Construção, manutenção e adaptação naval com foco em estabilidade, resistência, uso operacional e atendimento em rotas nacionais e internacionais.': 'Construcción, mantenimiento y adaptación naval con foco en estabilidad, resistencia, uso operativo y atención en rutas nacionales e internacionales.',
    'Projetos de embarcações sob medida para transporte, apoio e rotinas fluviais.': 'Proyectos de embarcaciones a medida para transporte, apoyo y rutinas fluviales.',
    'Manutenção e reparo': 'Mantenimiento y reparación',
    'Suporte para recuperar estrutura, preservar segurança e manter operação ativa.': 'Soporte para recuperar estructura, preservar seguridad y mantener la operación activa.',
    'Adaptação sob medida': 'Adaptación a medida',
    'Ajustes conforme carga, rota, capacidade, uso e necessidade do cliente.': 'Ajustes según carga, ruta, capacidad, uso y necesidad del cliente.',
    'Leitura prática da demanda para orientar solução naval e próximos passos.': 'Lectura práctica de la demanda para orientar solución naval y próximos pasos.',
    'Balsa sob medida': 'Barcaza a medida',
    'Empurrador': 'Empujador',
    'Operação fluvial': 'Operación fluvial',
    'Sob medida': 'A medida',
    'Projetos orientados ao uso real da embarcação': 'Proyectos orientados al uso real de la embarcación',
    'Propulsão e apoio': 'Propulsión y apoyo',
    'Transporte fluvial': 'Transporte fluvial',
    'Balsas sob medida': 'Barcazas a medida',
    'Empurradores modernos': 'Empujadores modernos',
    'Fretes e apoio operacional': 'Fletes y apoyo operativo',
    'Nossa história': 'Nuestra historia',
    'Quem somos': 'Quiénes somos',
    'Missão': 'Misión',
    'Visão': 'Visión',
    'Valores': 'Valores',
    'Linha do tempo': 'Línea de tiempo',
    'Início da empresa': 'Inicio de la empresa',
    'Consolidação operacional': 'Consolidación operativa',
    'Nova fase institucional': 'Nueva fase institucional',
    'Balsas sob medida para operações de carga, apoio e travessia fluvial.': 'Barcazas a medida para operaciones de carga, apoyo y travesía fluvial.',
    'Estruturas desenvolvidas para alta resistência operacional, estabilidade em navegação e adaptação ao tipo de carga ou demanda logística do cliente.': 'Estructuras desarrolladas para alta resistencia operativa, estabilidad en navegación y adaptación al tipo de carga o demanda logística del cliente.',
    'Projetadas para operar com segurança e eficiência em diferentes cenários.': 'Diseñadas para operar con seguridad y eficiencia en diferentes escenarios.',
    'As balsas da ONC são pensadas para atender operações fluviais que exigem confiabilidade estrutural, distribuição adequada de carga e desempenho consistente em rotas nacionais e internacionais. O projeto considera o perfil da atividade, o ambiente de navegação e a rotina operacional esperada.': 'Las barcazas de ONC están pensadas para operaciones fluviales que exigen confiabilidad estructural, distribución adecuada de carga y desempeño constante en rutas nacionales e internacionales. El proyecto considera el perfil de la actividad, el ambiente de navegación y la rutina operativa esperada.',
    'As balsas da ONC são pensadas para atender operações fluviais que exigem confiabilidade estrutural, distribuição adequada de carga e desempenho consistente em rotas amazônicas, nacionais e internacionais. O projeto considera o perfil da atividade, o ambiente de navegação e a rotina operacional esperada.': 'Las barcazas de ONC están pensadas para operaciones fluviales que exigen confiabilidad estructural, distribución adecuada de carga y desempeño constante en rutas amazónicas, nacionales e internacionales. El proyecto considera el perfil de la actividad, el ambiente de navegación y la rutina operativa esperada.',
    'Transporte de cargas diversas com configuração adequada ao uso.': 'Transporte de cargas diversas con configuración adecuada al uso.',
    'Estrutura reforçada para enfrentar demandas contínuas de operação.': 'Estructura reforzada para enfrentar demandas continuas de operación.',
    'Layout funcional para facilitar embarque, desembarque e apoio logístico.': 'Diseño funcional para facilitar embarque, desembarque y apoyo logístico.',
    'Planejamento sob medida conforme dimensão, capacidade e finalidade.': 'Planificación a medida según dimensión, capacidad y finalidad.',
    'Movimentação de carga, apoio industrial, transporte operacional e uso em cadeias logísticas fluviais.': 'Movimiento de carga, apoyo industrial, transporte operativo y uso en cadenas logísticas fluviales.',
    'Atendimento nacional e internacional com leitura próxima da realidade amazônica e foco em durabilidade de longo prazo.': 'Atención nacional e internacional con lectura cercana de la realidad amazónica y foco en durabilidad a largo plazo.',
    'Atendimento para operações na Amazônia e em países vizinhos, com foco em durabilidade de longo prazo.': 'Atención para operaciones en la Amazonía y en países vecinos, con foco en durabilidad a largo plazo.',
    'Visão visual da linha de balsas e da estrutura operacional.': 'Visión visual de la línea de barcazas y de la estructura operativa.',
    'Empurradores modernos para operações que exigem potência e estabilidade.': 'Empujadores modernos para operaciones que exigen potencia y estabilidad.',
    'Projetados para apoiar comboios, rebocar cargas e garantir desempenho consistente em ambientes fluviais de alta exigência operacional.': 'Diseñados para apoyar convoyes, remolcar cargas y garantizar desempeño constante en ambientes fluviales de alta exigencia operativa.',
    'Embarcações pensadas para comando, força e navegação eficiente.': 'Embarcaciones pensadas para comando, fuerza y navegación eficiente.',
    'Os empurradores ocupam papel central em operações de apoio e deslocamento de embarcações na região. Por isso, a ONC organiza esse tipo de projeto com atenção especial a motorização, capacidade de manobra, estrutura de cabine e segurança da rotina de operação.': 'Los empujadores ocupan un papel central en operaciones de apoyo y desplazamiento de embarcaciones en la región. Por eso, ONC organiza este tipo de proyecto con atención especial a motorización, capacidad de maniobra, estructura de cabina y seguridad de la rutina operativa.',
    'Os empurradores ocupam papel central em operações de apoio e deslocamento de embarcações em rotas amazônicas, nacionais e internacionais. Por isso, a ONC organiza esse tipo de projeto com atenção especial a motorização, capacidade de manobra, estrutura de cabine e segurança da rotina de operação.': 'Los empujadores ocupan un papel central en operaciones de apoyo y desplazamiento de embarcaciones en rutas amazónicas, nacionales e internacionales. Por eso, ONC organiza este tipo de proyecto con atención especial a motorización, capacidad de maniobra, estructura de cabina y seguridad de la rutina operativa.',
    'Alto potencial de apoio a comboios e transporte de estruturas fluviais.': 'Alto potencial de apoyo a convoyes y transporte de estructuras fluviales.',
    'Projeto focado em estabilidade direcional e eficiência de navegação.': 'Proyecto enfocado en estabilidad direccional y eficiencia de navegación.',
    'Configuração funcional para rotinas intensas de operação nacional e internacional.': 'Configuración funcional para rutinas intensas de operación nacional e internacional.',
    'Configuração funcional para rotinas intensas de operação no Brasil e em países vizinhos.': 'Configuración funcional para rutinas intensas de operación en Brasil y países vecinos.',
    'Boa resposta para apoio logístico, rebocagem e suporte tático.': 'Buena respuesta para apoyo logístico, remolque y soporte táctico.',
    'Rebocagem, apoio a balsas, transporte assistido e operações contínuas em corredores fluviais.': 'Remolque, apoyo a barcazas, transporte asistido y operaciones continuas en corredores fluviales.',
    'Planejamento visual e técnico mais claro para comunicar robustez e confiança a clientes operacionais.': 'Planificación visual y técnica más clara para comunicar robustez y confianza a clientes operativos.',
    'Visão do perfil operacional dos empurradores e da estrutura de apoio.': 'Visión del perfil operativo de los empujadores y de la estructura de apoyo.',
    'Fretes e apoio operacional com foco em confiança, fluxo e segurança de carga.': 'Fletes y apoyo operativo con foco en confianza, flujo y seguridad de carga.',
    'Uma frente orientada para atender demandas logísticas fluviais com melhor organização operacional, suporte nacional e internacional e leitura prática das necessidades do cliente.': 'Un área orientada a demandas logísticas fluviales con mejor organización operativa, soporte nacional e internacional y lectura práctica de las necesidades del cliente.',
    'Uma frente orientada para atender demandas logísticas fluviais com organização operacional, suporte amazônico e leitura prática para rotas nacionais e internacionais.': 'Un área orientada a demandas logísticas fluviales con organización operativa, soporte amazónico y lectura práctica para rutas nacionales e internacionales.',
    'Solução pensada para movimentação e suporte logístico em ambiente fluvial.': 'Solución pensada para movimiento y soporte logístico en ambiente fluvial.',
    'A ONC apresenta o serviço de fretes e apoio operacional como uma frente voltada a deslocamento de materiais, apoio a cadeias produtivas e suporte a operações nacionais e internacionais. A proposta destaca segurança, previsibilidade e melhor apresentação comercial para facilitar o entendimento do cliente sobre a função da embarcação.': 'ONC presenta el servicio de fletes y apoyo operativo como un área orientada al desplazamiento de materiales, apoyo a cadenas productivas y soporte a operaciones nacionales e internacionales. La propuesta destaca seguridad, previsibilidad y mejor presentación comercial para facilitar el entendimiento del cliente sobre la función de la embarcación.',
    'A ONC apresenta o serviço de fretes e apoio operacional como uma frente voltada a deslocamento de materiais, apoio a cadeias produtivas e suporte a operações no Brasil e países vizinhos. A proposta destaca segurança, previsibilidade e melhor apresentação comercial para facilitar o entendimento do cliente sobre a função da embarcação.': 'ONC presenta el servicio de fletes y apoyo operativo como un área orientada al desplazamiento de materiales, apoyo a cadenas productivas y soporte a operaciones en Brasil y países vecinos. La propuesta destaca seguridad, previsibilidad y mejor presentación comercial para facilitar el entendimiento del cliente sobre la función de la embarcación.',
    'Transporte organizado para cargas e materiais em ambiente fluvial.': 'Transporte organizado para cargas y materiales en ambiente fluvial.',
    'Apoio a rotinas operacionais que exigem regularidade e confiança.': 'Apoyo a rutinas operativas que exigen regularidad y confianza.',
    'Planejamento visual e técnico voltado para clareza de uso e de função.': 'Planificación visual y técnica orientada a claridad de uso y función.',
    'Boa adaptação a demandas logísticas da região amazônica.': 'Buena adaptación a demandas logísticas de la región amazónica.',
    'Boa adaptação a demandas logísticas na Amazônia, Guiana Inglesa, Colômbia, Venezuela e Peru.': 'Buena adaptación a demandas logísticas en la Amazonía, Guyana, Colombia, Venezuela y Perú.',
    'Fretes nacionais e internacionais, apoio logístico, movimentação de insumos e suporte a operações fluviais contínuas.': 'Fletes nacionales e internacionales, apoyo logístico, movimiento de insumos y soporte a operaciones fluviales continuas.',
    'Fretes nacionais e internacionais, apoio logístico, movimentação de insumos e suporte a operações fluviais contínuas.': 'Fletes nacionales e internacionales, apoyo logístico, movimiento de insumos y soporte a operaciones fluviales continuas.',
    'Comunicação mais objetiva sobre cada embarcação, facilitando apresentação comercial e entendimento do serviço.': 'Comunicación más objetiva sobre cada embarcación, facilitando la presentación comercial y el entendimiento del servicio.',
    'Imagens associadas a apoio logístico, transporte e estrutura operacional.': 'Imágenes asociadas a apoyo logístico, transporte y estructura operativa.',
    'Grupo ONC: navegação, logística e apoio operacional fluvial.': 'Grupo ONC: navegación, logística y apoyo operativo fluvial.',
    'Mineração e materiais para obras com apoio logístico nacional e internacional.': 'Minería y materiales para obras con apoyo logístico nacional e internacional.',
    'Mineração e materiais para obras com apoio logístico nacional e internacional.': 'Minería y materiales para obras con apoyo logístico nacional e internacional.',
    'Solicite materiais, informe volume e local de entrega. A ONC organiza o atendimento comercial, a movimentação em pátio e o apoio logístico para obras e operações.': 'Solicite materiales, informe volumen y lugar de entrega. ONC organiza la atención comercial, el movimiento en patio y el apoyo logístico para obras y operaciones.',
    'Ver materiais': 'Ver materiales',
    'Material': 'Material',
    'Volume': 'Volumen',
    'Entrega': 'Entrega',
    'Atendimento comercial': 'Atención comercial',
    'Um caminho mais direto entre o pedido do cliente, o material necessário e a entrega.': 'Un camino más directo entre el pedido del cliente, el material necesario y la entrega.',
    'A frente de mineração e materiais de construção foi organizada para receber demandas de obras, qualificar volumes e encaminhar o fornecimento com clareza. O foco é transformar uma solicitação simples em um atendimento objetivo: material, quantidade, prazo e destino.': 'El área de minería y materiales de construcción fue organizada para recibir demandas de obras, calificar volúmenes y encaminar el suministro con claridad. El foco es transformar una solicitud simple en una atención objetiva: material, cantidad, plazo y destino.',
    'Recebimento de pedidos para obras, manutenção, aterro e abastecimento operacional.': 'Recepción de pedidos para obras, mantenimiento, relleno y abastecimiento operativo.',
    'Qualificação de volume, tipo de material, local de retirada ou entrega e prazo desejado.': 'Calificación de volumen, tipo de material, lugar de retiro o entrega y plazo deseado.',
    'Integração com transporte e apoio logístico quando a operação exigir deslocamento.': 'Integración con transporte y apoyo logístico cuando la operación exija desplazamiento.',
    'Comunicação rápida para facilitar orçamento, disponibilidade e próximos passos.': 'Comunicación rápida para facilitar presupuesto, disponibilidad y próximos pasos.',
    'Pedido bem direcionado': 'Pedido bien dirigido',
    'Quanto mais claro o material, volume e destino, mais rápida fica a avaliação comercial.': 'Cuanto más claro sea el material, volumen y destino, más rápida será la evaluación comercial.',
    'Operação conectada': 'Operación conectada',
    'O atendimento conversa com a estrutura de pátio, transporte e logística do Grupo ONC.': 'La atención se conecta con la estructura de patio, transporte y logística del Grupo ONC.',
    'Materiais e demandas': 'Materiales y demandas',
    'Um guia objetivo para quem precisa comprar, retirar ou entregar material.': 'Una guía objetiva para quien necesita comprar, retirar o entregar material.',
    'Um guia objetivo para quem precisa comprar, retirar ou entregar material.': 'Una guía objetiva para quien necesita comprar, retirar o entregar material.',
    'Os itens abaixo ajudam o cliente a identificar o tipo de solicitação antes do primeiro contato.': 'Los elementos abajo ayudan al cliente a identificar el tipo de solicitud antes del primer contacto.',
    'Areia, seixo e brita': 'Arena, grava y piedra triturada',
    'Materiais para construção, manutenção, bases, concreto e necessidades de obra.': 'Materiales para construcción, mantenimiento, bases, concreto y necesidades de obra.',
    'Aterro e regularização': 'Relleno y regularización',
    'Solicitações para preparação de área, reforço de terreno e apoio a frentes operacionais.': 'Solicitudes para preparación de área, refuerzo de terreno y apoyo a frentes operativos.',
    'Carregamento em pátio': 'Carga en patio',
    'Organização para retirada, separação de volume e movimentação com apoio operacional.': 'Organización para retiro, separación de volumen y movimiento con apoyo operativo.',
    'Entrega sob demanda': 'Entrega bajo demanda',
    'Apoio para avaliar rota, prazo e melhor encaminhamento logístico conforme o destino.': 'Apoyo para evaluar ruta, plazo y mejor encaminamiento logístico según el destino.',
    'Mineração e material de construção com atendimento voltado a obras e operações nacionais e internacionais.': 'Minería y material de construcción con atención orientada a obras y operaciones nacionales e internacionales.',
    'Nova frente do Grupo ONC para apresentar fornecimento de materiais, relacionamento comercial e apoio logístico a clientes que precisam de insumos com maior clareza de atendimento.': 'Nueva área del Grupo ONC para presentar suministro de materiales, relación comercial y apoyo logístico a clientes que necesitan insumos con mayor claridad de atención.',
    'Nova frente': 'Nueva área',
    'Um canal específico para demandas de materiais, obras e abastecimento operacional.': 'Un canal específico para demandas de materiales, obras y abastecimiento operativo.',
    'A página organiza a atuação da ONC em mineração e material de construção como uma frente própria dentro do grupo. O objetivo é facilitar o primeiro contato de clientes que buscam insumos, fornecimento e suporte para planejamento de entrega.': 'La página organiza la actuación de ONC en minería y material de construcción como un área propia dentro del grupo. El objetivo es facilitar el primer contacto de clientes que buscan insumos, suministro y soporte para planificación de entrega.',
    'Atendimento comercial para materiais de construção e insumos relacionados.': 'Atención comercial para materiales de construcción e insumos relacionados.',
    'Direcionamento de demandas para obras, fornecedores e operações nacionais e internacionais.': 'Direccionamiento de demandas para obras, proveedores y operaciones nacionales e internacionales.',
    'Integração com a frente de navegação e logística quando houver necessidade de transporte.': 'Integración con el área de navegación y logística cuando haya necesidad de transporte.',
    'Comunicação institucional pronta para receber conteúdos, produtos e imagens específicas no futuro.': 'Comunicación institucional lista para recibir contenidos, productos e imágenes específicas en el futuro.',
    'Foco comercial': 'Foco comercial',
    'Receber pedidos, qualificar volumes, entender prazos e orientar o cliente para a melhor solução disponível.': 'Recibir pedidos, calificar volúmenes, entender plazos y orientar al cliente hacia la mejor solución disponible.',
    'Integração com o grupo': 'Integración con el grupo',
    'A frente nasce conectada ao estaleiro e à logística, permitindo uma apresentação mais completa da capacidade ONC.': 'El área nace conectada al astillero y a la logística, permitiendo una presentación más completa de la capacidad de ONC.',
    'Atendimento': 'Atención',
    'Estrutura inicial para organizar pedidos e apresentar capacidade de fornecimento.': 'Estructura inicial para organizar pedidos y presentar capacidad de suministro.',
    'Materiais para obras': 'Materiales para obras',
    'Canal dedicado para demandas de construção, manutenção, reformas e abastecimento de projetos.': 'Canal dedicado a demandas de construcción, mantenimiento, reformas y abastecimiento de proyectos.',
    'Insumos minerais': 'Insumos minerales',
    'Atendimento comercial para demandas ligadas a mineração, extração, fornecimento e comercialização.': 'Atención comercial para demandas ligadas a minería, extracción, suministro y comercialización.',
    'Entrega e apoio': 'Entrega y apoyo',
    'Possibilidade de articular transporte e apoio logístico com as demais frentes do Grupo ONC.': 'Posibilidad de articular transporte y apoyo logístico con las demás áreas del Grupo ONC.',
    'Operação em pátio': 'Operación en patio',
    'Pátio, carregamento e entrega no mesmo fluxo.': 'Patio, carga y entrega en el mismo flujo.',
    'A foto dos caminhões mostra a parte prática da operação: material disponível, movimentação em pátio e atendimento preparado para direcionar cada solicitação conforme volume, prazo e destino.': 'La foto de los camiones muestra la parte práctica de la operación: material disponible, movimiento en patio y atención preparada para direccionar cada solicitud según volumen, plazo y destino.',
    'Separação e carregamento de materiais conforme a demanda.': 'Separación y carga de materiales según la demanda.',
    'Controle de volume, prazo e ponto de entrega.': 'Control de volumen, plazo y punto de entrega.',
    'Apoio logístico para conectar pátio, obra e cliente.': 'Apoyo logístico para conectar patio, obra y cliente.',
    'Entrega e apoio para movimentação de materiais.': 'Entrega y apoyo para movimiento de materiales.',
    'A estrutura de atendimento também considera a etapa de retirada, organização em pátio e direcionamento dos materiais conforme a necessidade de cada obra ou operação.': 'La estructura de atención también considera la etapa de retiro, organización en patio y direccionamiento de los materiales según la necesidad de cada obra u operación.',
    'Apoio para carregamento e movimentação de insumos.': 'Apoyo para carga y movimiento de insumos.',
    'Organização de demandas por volume, prazo e local de entrega.': 'Organización de demandas por volumen, plazo y lugar de entrega.',
    'Integração com transporte quando houver necessidade logística.': 'Integración con transporte cuando haya necesidad logística.',
    'Peça seu orçamento com as informações certas.': 'Solicite su presupuesto con la información correcta.',
    'Envie tipo de material, quantidade, bairro ou localidade, prazo desejado e se precisa de retirada ou entrega.': 'Envíe tipo de material, cantidad, barrio o localidad, plazo deseado y si necesita retiro o entrega.',
    'Tipo de material': 'Tipo de material',
    'Quantidade ou volume': 'Cantidad o volumen',
    'Local de entrega': 'Lugar de entrega',
    'Prazo desejado': 'Plazo deseado',
    'Solicite atendimento para materiais.': 'Solicite atención para materiales.',
    'Envie o tipo de material, quantidade, local de entrega e prazo desejado para direcionarmos o atendimento.': 'Envíe el tipo de material, cantidad, lugar de entrega y plazo deseado para direccionar la atención.',
    'Atendimento ligado ao Porto Vilas Manaus, ponto estratégico para apoio, materiais e operações nacionais e internacionais.': 'Atención vinculada al Porto Vilas Manaus, punto estratégico para apoyo, materiales y operaciones nacionales e internacionales.',
    'Atendimento ligado ao Porto Vilas Manaus, ponto estratégico para apoio, materiais e operações no Brasil e países vizinhos.': 'Atención vinculada al Porto Vilas Manaus, punto estratégico para apoyo, materiales y operaciones en Brasil y países vecinos.',
    'Grupo ONC: mineração, material de construção e suporte a operações nacionais e internacionais.': 'Grupo ONC: minería, material de construcción y soporte a operaciones nacionales e internacionales.',
    'Grupo ONC: mineração, material de construção e suporte a operações nacionais e internacionais.': 'Grupo ONC: minería, material de construcción y soporte a operaciones nacionales e internacionales.',
    'Fretes fluviais e apoio logístico para cargas na Amazônia.': 'Fletes fluviales y apoyo logístico para cargas en la Amazonía.',
    'Envie origem, destino, tipo de carga, volume e prazo. A ONC avalia a melhor forma de movimentar materiais, insumos e demandas operacionais por rotas nacionais e internacionais.': 'Envíe origen, destino, tipo de carga, volumen y plazo. ONC evalúa la mejor forma de mover materiales, insumos y demandas operativas por rutas nacionales e internacionales.',
    'Envie origem, destino, tipo de carga, volume e prazo. A ONC avalia a melhor forma de movimentar materiais, insumos e demandas operacionais por rotas nacionais e internacionais.': 'Envíe origen, destino, tipo de carga, volumen y plazo. ONC evalúa la mejor forma de mover materiales, insumos y demandas operativas por rutas nacionales e internacionales.',
    'Como solicitar': 'Cómo solicitar',
    'Como funciona': 'Cómo funciona',
    'Da rota ao embarque, o atendimento começa com quatro informações simples.': 'De la ruta al embarque, la atención comienza con cuatro informaciones simples.',
    'Esses dados ajudam a equipe a entender a operação, avaliar possibilidade logística e orientar o melhor encaminhamento.': 'Estos datos ayudan al equipo a entender la operación, evaluar posibilidades logísticas y orientar el mejor encaminamiento.',
    'Origem e destino': 'Origen y destino',
    'Informe de onde a carga sai e para onde precisa seguir.': 'Informe de dónde sale la carga y hacia dónde debe seguir.',
    'Tipo de carga': 'Tipo de carga',
    'Descreva material, insumo, equipamento ou demanda operacional.': 'Describa material, insumo, equipo o demanda operativa.',
    'Volume estimado': 'Volumen estimado',
    'Indique quantidade, peso aproximado ou dimensão da carga.': 'Indique cantidad, peso aproximado o dimensión de la carga.',
    'Compartilhe janela de coleta, entrega ou necessidade da operação.': 'Comparta ventana de recolección, entrega o necesidad de la operación.',
    'Operação fluvial estruturada para transformar demanda em rota viável.': 'Operación fluvial estructurada para transformar demanda en ruta viable.',
    'A ONC Navegação e Logística conecta experiência de campo, embarcações e acompanhamento comercial para atender clientes que precisam movimentar cargas, materiais, insumos e equipamentos em ambiente amazônico.': 'ONC Navegación y Logística conecta experiencia de campo, embarcaciones y acompañamiento comercial para atender clientes que necesitan mover cargas, materiales, insumos y equipos en ambiente amazónico.',
    'Fretes fluviais para cargas de obra, materiais, equipamentos e demandas operacionais.': 'Fletes fluviales para cargas de obra, materiales, equipos y demandas operativas.',
    'Apoio logístico para empresas, fornecedores, operações industriais e frentes nacionais e internacionais.': 'Apoyo logístico para empresas, proveedores, operaciones industriales y frentes nacionales e internacionales.',
    'Apoio logístico para empresas, fornecedores, operações industriais e frentes no Brasil e países vizinhos.': 'Apoyo logístico para empresas, proveedores, operaciones industriales y frentes en Brasil y países vecinos.',
    'Organização de rota, prazo, janela de atendimento e necessidade de apoio no destino.': 'Organización de ruta, plazo, ventana de atención y necesidad de apoyo en el destino.',
    'Integração com a estrutura naval, comercial e operacional do Grupo ONC.': 'Integración con la estructura naval, comercial y operativa del Grupo ONC.',
    'Empresas e obras que precisam movimentar cargas por rio com comunicação direta e avaliação prática.': 'Empresas y obras que necesitan mover cargas por río con comunicación directa y evaluación práctica.',
    'Leitura amazônica e internacional, estrutura própria e capacidade de conectar transporte, pátio, embarcação e atendimento.': 'Lectura amazónica e internacional, estructura propia y capacidad de conectar transporte, patio, embarcación y atención.',
    'Leitura amazônica e internacional, estrutura própria e capacidade de conectar transporte, pátio, embarcação e atendimento.': 'Lectura amazónica e internacional, estructura propia y capacidad de conectar transporte, patio, embarcación y atención.',
    'Serviços pensados para quem precisa tirar a carga do plano e colocar na rota.': 'Servicios pensados para quien necesita sacar la carga del plan y colocarla en ruta.',
    'Transporte de materiais': 'Transporte de materiales',
    'Movimentação fluvial de insumos, suprimentos, estruturas e cargas de apoio.': 'Movimiento fluvial de insumos, suministros, estructuras y cargas de apoyo.',
    'Apoio a obras e fornecedores': 'Apoyo a obras y proveedores',
    'Atendimento para frentes que dependem de entrega, retirada ou suporte recorrente.': 'Atención para frentes que dependen de entrega, retiro o soporte recurrente.',
    'Cargas operacionais': 'Cargas operativas',
    'Encaminhamento de demandas ligadas a equipamentos, manutenção e abastecimento.': 'Encaminamiento de demandas ligadas a equipos, mantenimiento y abastecimiento.',
    'Planejamento de rota': 'Planificación de ruta',
    'Avaliação de origem, destino, volume, prazo e melhor possibilidade de operação.': 'Evaluación de origen, destino, volumen, plazo y mejor posibilidad de operación.',
    'Frete, apoio e operação no ritmo da rota.': 'Flete, apoyo y operación al ritmo de la ruta.',
    'Quando a demanda exige deslocamento por rio, a ONC organiza o atendimento para entender carga, ponto de origem, destino e prazo antes de indicar o melhor caminho operacional.': 'Cuando la demanda exige desplazamiento por río, ONC organiza la atención para entender carga, punto de origen, destino y plazo antes de indicar el mejor camino operativo.',
    'Ver fretes': 'Ver fletes',
    'Cotação rápida': 'Cotización rápida',
    'Estrutura fluvial para transporte, apoio e movimentação de cargas.': 'Estructura fluvial para transporte, apoyo y movimiento de cargas.',
    'Balsa carregada': 'Barcaza cargada',
    'Apoio operacional': 'Apoyo operativo',
    'Transporte nacional e internacional': 'Transporte nacional e internacional',
    'Transporte nacional e internacional': 'Transporte nacional e internacional',
    'Solicite cotação para frete fluvial.': 'Solicite cotización para flete fluvial.',
    'Envie origem, destino, tipo de carga, volume estimado e prazo desejado para a equipe avaliar o melhor encaminhamento.': 'Envíe origen, destino, tipo de carga, volumen estimado y plazo deseado para que el equipo evalúe el mejor encaminamiento.',
    'Navegação e logística para movimentar cargas com previsibilidade na Amazônia.': 'Navegación y logística para mover cargas con previsibilidad en la Amazonía.',
    'Uma frente voltada a fretes, apoio fluvial, deslocamento de materiais e suporte operacional para clientes que dependem de rotas nacionais e internacionais bem organizadas.': 'Un área orientada a fletes, apoyo fluvial, desplazamiento de materiales y soporte operativo para clientes que dependen de rutas nacionales e internacionales bien organizadas.',
    'Atuação': 'Actuación',
    'Operação fluvial estruturada para apoiar cadeias produtivas e demandas nacionais e internacionais.': 'Operación fluvial estructurada para apoyar cadenas productivas y demandas nacionales e internacionales.',
    'A ONC Navegação e Logística aproveita a experiência do grupo em embarcações e rotina fluvial para atender operações que precisam movimentar cargas, insumos, equipamentos e materiais com segurança, clareza e acompanhamento comercial.': 'ONC Navegación y Logística aprovecha la experiencia del grupo en embarcaciones y rutina fluvial para atender operaciones que necesitan mover cargas, insumos, equipos y materiales con seguridad, claridad y acompañamiento comercial.',
    'Fretes fluviais para cargas, materiais e demandas operacionais.': 'Fletes fluviales para cargas, materiales y demandas operativas.',
    'Apoio logístico para empresas, obras, operações industriais e fornecedores.': 'Apoyo logístico para empresas, obras, operaciones industriales y proveedores.',
    'Organização de rotas, prazos e necessidades conforme o perfil do cliente.': 'Organización de rutas, plazos y necesidades según el perfil del cliente.',
    'Integração com a estrutura naval e comercial do Grupo ONC.': 'Integración con la estructura naval y comercial del Grupo ONC.',
    'Indicado para': 'Indicado para',
    'Clientes que precisam de transporte fluvial, apoio a rotas, movimentação de insumos e suporte operacional recorrente.': 'Clientes que necesitan transporte fluvial, apoyo a rutas, movimiento de insumos y soporte operativo recurrente.',
    'Conhecimento de campo, base amazônica e internacional e comunicação direta para transformar a demanda do cliente em uma operação viável.': 'Conocimiento de campo, base amazônica e internacional y comunicación directa para transformar la demanda del cliente en una operación viable.',
    'Capacidades': 'Capacidades',
    'Frente preparada para conectar transporte, operação e atendimento comercial.': 'Área preparada para conectar transporte, operación y atención comercial.',
    'Fretes nacionais e internacionais': 'Fletes nacionales e internacionales',
    'Movimentação de cargas e materiais por vias fluviais, com foco em planejamento e confiança.': 'Movimiento de cargas y materiales por vías fluviales, con foco en planificación y confianza.',
    'Apoio a operações': 'Apoyo a operaciones',
    'Suporte para rotinas que exigem embarcação, acompanhamento e leitura prática do ambiente amazônico e internacional.': 'Soporte para rutinas que exigen embarcación, seguimiento y lectura práctica del ambiente amazônico e internacional.',
    'Integração logística': 'Integración logística',
    'Atendimento alinhado com outras frentes do grupo, facilitando demandas que envolvem materiais e transporte.': 'Atención alineada con otras áreas del grupo, facilitando demandas que involucran materiales y transporte.',
    'Soluções versáteis para operações com foco em confiança, segurança de carga e organização logística.': 'Soluciones versátiles para operaciones con foco en confianza, seguridad de carga y organización logística.',
    'Operação': 'Operación',
    'Imagens de referência da estrutura fluvial que sustenta a frente logística.': 'Imágenes de referencia de la estructura fluvial que sostiene el área logística.',
    'Solicite atendimento para fretes e logística.': 'Solicite atención para fletes y logística.',
    'Envie sua rota, tipo de carga, volume estimado e prazo desejado para a equipe avaliar o melhor encaminhamento.': 'Envíe su ruta, tipo de carga, volumen estimado y plazo deseado para que el equipo evalúe el mejor encaminamiento.',
    'Base operacional em Iranduba-AM para apoio à navegação, fretes e demandas logísticas fluviais.': 'Base operativa en Iranduba-AM para apoyo a navegación, fletes y demandas logísticas fluviales.',
    'Mais de 10 anos de trajetória construídos com visão, coragem e trabalho fluvial.': 'Más de 10 años de trayectoria construidos con visión, coraje y trabajo fluvial.',
    'A ONC Estaleiro nasceu da visão de um empresário sonhador que acreditava no potencial da navegação amazônica e internacional e na força do trabalho bem feito para transformar oportunidades em resultados duradouros.': 'ONC Astillero nació de la visión de un empresario soñador que creía en el potencial de la navegación amazónica e internacional y en la fuerza del trabajo bien hecho para transformar oportunidades en resultados duraderos.',
    'A ONC Estaleiro nasceu da visão de um empresário sonhador que acreditava no potencial da navegação amazônica, nacional e internacional e na força do trabalho bem feito para transformar oportunidades em resultados duradouros.': 'ONC Astillero nació de la visión de un empresario soñador que creía en el potencial de la navegación amazónica, nacional e internacional y en la fuerza del trabajo bien hecho para transformar oportunidades en resultados duraderos.',
    'Uma empresa formada por experiência, perseverança e compromisso com a Amazônia.': 'Una empresa formada por experiencia, perseverancia y compromiso con la Amazonía.',
    'Há mais de uma década, a empresa deu seus primeiros passos a partir de um sonho simples: construir uma operação respeitada, útil e presente na realidade fluvial da região. Com o passar dos anos, esse sonho ganhou estrutura, parceiros, clientes e uma identidade própria, sempre guiada por dedicação, responsabilidade e vontade de crescer.': 'Hace más de una década, la empresa dio sus primeros pasos a partir de un sueño simple: construir una operación respetada, útil y presente en la realidad fluvial de la región. Con los años, ese sueño ganó estructura, socios, clientes e identidad propia, siempre guiado por dedicación, responsabilidad y voluntad de crecer.',
    'Há mais de uma década, a empresa deu seus primeiros passos a partir de um sonho simples: construir uma operação respeitada, útil e presente na realidade fluvial amazônica. Com o passar dos anos, esse sonho ganhou estrutura, parceiros, clientes e uma identidade própria, sempre guiada por dedicação, responsabilidade e vontade de crescer.': 'Hace más de una década, la empresa dio sus primeros pasos a partir de un sueño simple: construir una operación respetada, útil y presente en la realidad fluvial amazónica. Con los años, ese sueño ganó estructura, socios, clientes e identidad propia, siempre guiado por dedicación, responsabilidad y voluntad de crecer.',
    'Ao longo dessa jornada, a ONC consolidou uma forma de trabalho baseada em proximidade com o cliente, leitura prática das demandas operacionais e foco em soluções que realmente funcionam no dia a dia da navegação. Essa combinação ajudou a transformar esforço em credibilidade e presença nacional e internacional.': 'A lo largo de esa jornada, ONC consolidó una forma de trabajo basada en proximidad con el cliente, lectura práctica de las demandas operativas y foco en soluciones que realmente funcionan en el día a día de la navegación. Esa combinación ayudó a transformar esfuerzo en credibilidad y presencia nacional e internacional.',
    'Ao longo dessa jornada, a ONC consolidou uma forma de trabalho baseada em proximidade com o cliente, leitura prática das demandas operacionais e foco em soluções que realmente funcionam no dia a dia da navegação. Essa combinação ajudou a transformar esforço em credibilidade para atender demandas no Brasil e em países vizinhos.': 'A lo largo de esa jornada, ONC consolidó una forma de trabajo basada en proximidad con el cliente, lectura práctica de las demandas operativas y foco en soluciones que realmente funcionan en el día a día de la navegación. Esa combinación ayudó a transformar esfuerzo en credibilidad para atender demandas en Brasil y países vecinos.',
    'Hoje, a empresa segue ampliando sua estrutura comercial e operacional sem perder a sua essência: ser resultado da visão de um empreendedor que acreditou no próprio sonho, investiu em estrutura e construiu uma história marcada por constância, trabalho sério e confiança.': 'Hoy, la empresa sigue ampliando su estructura comercial y operativa sin perder su esencia: ser resultado de la visión de un emprendedor que creyó en su propio sueño, invirtió en estructura y construyó una historia marcada por constancia, trabajo serio y confianza.',
    'Atender operações fluviais com seriedade, clareza e compromisso com qualidade estrutural e comercial.': 'Atender operaciones fluviales con seriedad, claridad y compromiso con calidad estructural y comercial.',
    'Fortalecer a marca ONC como referência nacional e internacional em navegação, apoio fluvial e apresentação profissional.': 'Fortalecer la marca ONC como referencia nacional e internacional en navegación, apoyo fluvial y presentación profesional.',
    'Fortalecer a marca ONC como referência em navegação, apoio fluvial e apresentação profissional para operações nacionais e internacionais.': 'Fortalecer la marca ONC como referencia en navegación, apoyo fluvial y presentación profesional para operaciones nacionales e internacionales.',
    'Respeito, confiança, trabalho contínuo, proximidade com o cliente e orgulho pela história construída.': 'Respeto, confianza, trabajo continuo, cercanía con el cliente y orgullo por la historia construida.',
    'Uma caminhada de crescimento feita com consistência.': 'Un camino de crecimiento hecho con consistencia.',
    'Fundação inspirada pelo sonho de construir uma operação forte e respeitada no setor fluvial amazônico e internacional.': 'Fundación inspirada por el sueño de construir una operación fuerte y respetada en el sector fluvial amazónico e internacional.',
    'Fundação inspirada pelo sonho de construir uma operação forte e respeitada no setor fluvial amazônico e internacional.': 'Fundación inspirada por el sueño de construir una operación fuerte y respetada en el sector fluvial amazónico e internacional.',
    'Com o tempo, a empresa ampliou relações comerciais, fortaleceu sua base e passou a atender demandas com mais segurança e estrutura.': 'Con el tiempo, la empresa amplió relaciones comerciales, fortaleció su base y pasó a atender demandas con más seguridad y estructura.',
    'Agora, a ONC apresenta uma comunicação mais clara e profissional para refletir a história que já construiu no mercado.': 'Ahora, ONC presenta una comunicación más clara y profesional para reflejar la historia que ya construyó en el mercado.'
  }
};

const originalTextNodes = new WeakMap();
const originalDocumentTitle = document.title;

const titleTranslations = {
  en: {
    'Grupo ONC | Soluções Operacionais na Amazônia': 'ONC Group | Operational Solutions in the Amazon',
    'ONC Estaleiro': 'ONC Shipyard',
    'Navegação e Logística | Grupo ONC': 'Navigation and Logistics | ONC Group',
    'Mineração e Material de Construção | Grupo ONC': 'Mining and Construction Materials | ONC Group',
    'Fretes e Apoio Operacional | ONC Navegação e Logística': 'Freight and Operational Support | ONC Navigation and Logistics',
    'Balsas Sob Medida | ONC Estaleiro': 'Custom Barges | ONC Shipyard',
    'Empurradores Modernos | ONC Estaleiro': 'Modern Push Boats | ONC Shipyard',
    'Sobre a ONC Estaleiro': 'About ONC Shipyard'
  },
  es: {
    'Grupo ONC | Soluções Operacionais na Amazônia': 'Grupo ONC | Soluciones Operativas en la Amazonía',
    'ONC Estaleiro': 'ONC Astillero',
    'Navegação e Logística | Grupo ONC': 'Navegación y Logística | Grupo ONC',
    'Mineração e Material de Construção | Grupo ONC': 'Minería y Material de Construcción | Grupo ONC',
    'Fretes e Apoio Operacional | ONC Navegação e Logística': 'Fletes y Apoyo Operativo | ONC Navegación y Logística',
    'Balsas Sob Medida | ONC Estaleiro': 'Barcazas a Medida | ONC Astillero',
    'Empurradores Modernos | ONC Estaleiro': 'Empujadores Modernos | ONC Astillero',
    'Sobre a ONC Estaleiro': 'Sobre ONC Astillero'
  }
};

function normalizeText(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function translateStaticText(language) {
  const dictionary = textTranslations[language] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'SVG', 'IFRAME'].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest('[data-i18n], [data-language-current], [data-language-option]')) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalizeText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }

    const original = originalTextNodes.get(node);
    const originalKey = normalizeText(original);

    if (language === 'pt-BR') {
      node.nodeValue = original;
      return;
    }

    if (dictionary[originalKey]) {
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = `${leading}${dictionary[originalKey]}${trailing}`;
    }
  });
}

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
  } else if (selectedLanguage === 'pt-BR') {
    document.title = originalDocumentTitle;
  } else if (titleTranslations[selectedLanguage] && titleTranslations[selectedLanguage][originalDocumentTitle]) {
    document.title = titleTranslations[selectedLanguage][originalDocumentTitle];
  }

  translateStaticText(selectedLanguage);
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
