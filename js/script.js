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
    'Fretes, apoio fluvial, movimentação de cargas e organização operacional para rotas regionais.': 'Freight, river support, cargo movement and operational organization for regional routes.',
    'Insumos e fornecimento': 'Supplies and provision',
    'Nova frente para apresentar fornecimento, atendimento comercial e suporte a demandas de materiais para obras e operações.': 'A new area to present supply, commercial service and support for material needs in projects and operations.',
    'Grupo ONC: estaleiro, navegação, logística, mineração e material de construção.': 'ONC Group: shipyard, navigation, logistics, mining and construction materials.',
    'Apresentação institucional com foco em navegação, operação fluvial e credibilidade comercial.': 'Institutional presentation focused on navigation, river operations and commercial credibility.',
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
    'Inicio da empresa': 'Company beginning',
    'Consolidação operacional': 'Operational consolidation',
    'Nova fase institucional': 'New institutional phase',
    'Balsas sob medida para operações de carga, apoio e travessia fluvial.': 'Custom barges for cargo, support and river crossing operations.',
    'Estruturas desenvolvidas para alta resistência operacional, estabilidade em navegação e adaptação ao tipo de carga ou demanda logística do cliente.': 'Structures developed for high operational resistance, navigation stability and adaptation to each cargo type or logistics demand.',
    'Projetadas para operar com segurança e eficiência em diferentes cenários.': 'Designed to operate safely and efficiently in different scenarios.',
    'As balsas da ONC são pensadas para atender operações fluviais que exigem confiabilidade estrutural, distribuição adequada de carga e desempenho consistente em rotas regionais. O projeto considera o perfil da atividade, o ambiente de navegação e a rotina operacional esperada.': 'ONC barges are designed for river operations that require structural reliability, proper cargo distribution and consistent performance on regional routes. Each project considers the activity profile, navigation environment and expected operating routine.',
    'Transporte de cargas diversas com configuração adequada ao uso.': 'Transport of different cargo types with a configuration suited to the intended use.',
    'Estrutura reforcada para enfrentar demandas continuas de operação.': 'Reinforced structure to handle continuous operating demands.',
    'Layout funcional para facilitar embarque, desembarque e apoio logistico.': 'Functional layout to support loading, unloading and logistics assistance.',
    'Planejamento sob medida conforme dimensão, capacidade e finalidade.': 'Custom planning according to size, capacity and purpose.',
    'Movimentação de carga, apoio industrial, transporte operacional e uso em cadeias logísticas fluviais.': 'Cargo movement, industrial support, operational transport and use in river logistics chains.',
    'Atendimento regional com leitura mais proxima da realidade amazônica e foco em durabilidade de longo prazo.': 'Regional service with a closer understanding of Amazon realities and a focus on long-term durability.',
    'Visão visual da linha de balsas e da estrutura operacional.': 'Visual overview of the barge line and operational structure.',
    'Empurradores modernos para operações que exigem potência e estabilidade.': 'Modern push boats for operations that require power and stability.',
    'Projetados para apoiar comboios, rebocar cargas e garantir desempenho consistente em ambientes fluviais de alta exigência operacional.': 'Designed to support convoys, tow cargo and ensure consistent performance in demanding river environments.',
    'Embarcações pensadas para comando, força e navegação eficiente.': 'Vessels designed for command, power and efficient navigation.',
    'Os empurradores ocupam papel central em operações de apoio e deslocamento de embarcações na região. Por isso, a ONC organiza esse tipo de projeto com atenção especial a motorização, capacidade de manobra, estrutura de cabine e segurança da rotina de operação.': 'Push boats play a central role in support operations and vessel movement in the region. For this reason, ONC designs this type of project with special attention to motorization, maneuverability, cabin structure and operating safety.',
    'Alto potencial de apoio a comboios e transporte de estruturas fluviais.': 'High potential for convoy support and river structure transport.',
    'Projeto focado em estabilidade direcional e eficiência de navegação.': 'Design focused on directional stability and navigation efficiency.',
    'Configuração funcional para rotinas intensas de operação regional.': 'Functional configuration for intense regional operating routines.',
    'Boa resposta para apoio logístico, rebocagem e suporte tático.': 'Strong response for logistics support, towing and tactical assistance.',
    'Rebocagem, apoio a balsas, transporte assistido e operações continuas em corredores fluviais.': 'Towing, barge support, assisted transport and continuous operations in river corridors.',
    'Planejamento visual e técnico mais claro para comunicar robustez e confiança a clientes operacionais.': 'Clearer visual and technical planning to communicate robustness and reliability to operational clients.',
    'Visão do perfil operacional dos empurradores e da estrutura de apoio.': 'Overview of the push boats operational profile and support structure.',
    'Fretes e apoio operacional com foco em confiança, fluxo e segurança de carga.': 'Freight and operational support focused on trust, flow and cargo safety.',
    'Uma frente orientada para atender demandas logísticas fluviais com melhor organização operacional, suporte regional e leitura prática das necessidades do cliente.': 'An area focused on river logistics needs with better operational organization, regional support and a practical understanding of client needs.',
    'Solução pensada para movimentação e suporte logístico em ambiente fluvial.': 'A solution designed for movement and logistics support in river environments.',
    'A ONC apresenta o serviço de fretes e apoio operacional como uma frente voltada a deslocamento de materiais, apoio a cadeias produtivas e suporte a operações regionais. A proposta destaca segurança, previsibilidade e melhor apresentação comercial para facilitar o entendimento do cliente sobre a função da embarcação.': 'ONC presents freight and operational support as an area focused on material movement, support for production chains and regional operations. The proposal highlights safety, predictability and clearer commercial presentation so clients can understand the vessel function.',
    'Transporte organizado para cargas e materiais em ambiente fluvial.': 'Organized transport for cargo and materials in river environments.',
    'Apoio a rotinas operacionais que exigem regularidade e confiança.': 'Support for operating routines that require regularity and reliability.',
    'Planejamento visual e técnico voltado para clareza de uso e de função.': 'Visual and technical planning focused on clarity of use and function.',
    'Boa adaptação a demandas logísticas da regiao amazônica.': 'Good adaptation to logistics demands in the Amazon region.',
    'Fretes regionais, apoio logístico, movimentação de insumos e suporte a operações fluviais continuas.': 'Regional freight, logistics support, supply movement and support for continuous river operations.',
    'Comunicação mais objetiva sobre cada embarcação, facilitando apresentação comercial e entendimento do serviço.': 'More objective communication about each vessel, making commercial presentation and service understanding easier.',
    'Imagens associadas a apoio logístico, transporte e estrutura operacional.': 'Images associated with logistics support, transport and operational structure.',
    'Grupo ONC: navegação, logística e apoio operacional fluvial.': 'ONC Group: navigation, logistics and river operational support.',
    'Mineração e material de construção com atendimento voltado a obras e operações regionais.': 'Mining and construction materials with service focused on projects and regional operations.',
    'Nova frente do Grupo ONC para apresentar fornecimento de materiais, relacionamento comercial e apoio logístico a clientes que precisam de insumos com maior clareza de atendimento.': 'A new ONC Group area to present material supply, commercial relationships and logistics support for clients who need supplies with clearer service.',
    'Nova frente': 'New area',
    'Um canal específico para demandas de materiais, obras e abastecimento operacional.': 'A specific channel for material, project and operational supply needs.',
    'A página organiza a atuação da ONC em mineração e material de construção como uma frente própria dentro do grupo. O objetivo é facilitar o primeiro contato de clientes que buscam insumos, fornecimento e suporte para planejamento de entrega.': 'The page organizes ONC’s mining and construction materials activity as its own group area. The goal is to make first contact easier for clients seeking supplies, provision and delivery planning support.',
    'Atendimento comercial para materiais de construção e insumos relacionados.': 'Commercial service for construction materials and related supplies.',
    'Direcionamento de demandas para obras, fornecedores e operações regionais.': 'Routing demands for projects, suppliers and regional operations.',
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
    'Apresentação institucional para demandas ligadas a mineração, extração, fornecimento e comercialização.': 'Institutional presentation for needs related to mining, extraction, supply and commercialization.',
    'Entrega e apoio': 'Delivery and support',
    'Possibilidade de articular transporte e apoio logístico com as demais frentes do Grupo ONC.': 'Possibility of coordinating transport and logistics support with the other ONC Group areas.',
    'Solicite atendimento para materiais.': 'Request service for materials.',
    'Envie o tipo de material, quantidade, local de entrega e prazo desejado para direcionarmos o atendimento.': 'Send the material type, quantity, delivery location and desired deadline so we can route the service.',
    'Atendimento ligado ao Porto Vilas Manaus, ponto estratégico para apoio, materiais e operações regionais.': 'Service linked to Porto Vilas Manaus, a strategic point for support, materials and regional operations.',
    'Grupo ONC: mineração, material de construção e suporte a operações regionais.': 'ONC Group: mining, construction materials and support for regional operations.',
    'Navegação e logística para movimentar cargas com previsibilidade na Amazônia.': 'Navigation and logistics to move cargo with predictability in the Amazon.',
    'Uma frente voltada a fretes, apoio fluvial, deslocamento de materiais e suporte operacional para clientes que dependem de rotas regionais bem organizadas.': 'An area focused on freight, river support, material movement and operational support for clients who depend on well-organized regional routes.',
    'Atuação': 'Activity',
    'Operação fluvial estruturada para apoiar cadeias produtivas e demandas regionais.': 'Structured river operation to support production chains and regional demands.',
    'A ONC Navegação e Logística aproveita a experiência do grupo em embarcações e rotina fluvial para atender operações que precisam movimentar cargas, insumos, equipamentos e materiais com segurança, clareza e acompanhamento comercial.': 'ONC Navigation and Logistics uses the group’s experience with vessels and river routines to serve operations that need to move cargo, supplies, equipment and materials with safety, clarity and commercial follow-up.',
    'Fretes fluviais para cargas, materiais e demandas operacionais.': 'River freight for cargo, materials and operational demands.',
    'Apoio logístico para empresas, obras, operações industriais e fornecedores.': 'Logistics support for companies, projects, industrial operations and suppliers.',
    'Organização de rotas, prazos e necessidades conforme o perfil do cliente.': 'Organization of routes, deadlines and needs according to each client profile.',
    'Integração com a estrutura naval e comercial do Grupo ONC.': 'Integration with ONC Group’s naval and commercial structure.',
    'Indicado para': 'Recommended for',
    'Clientes que precisam de transporte fluvial, apoio a rotas, movimentação de insumos e suporte operacional recorrente.': 'Clients who need river transport, route support, supply movement and recurring operational support.',
    'Conhecimento de campo, base regional e comunicação direta para transformar a demanda do cliente em uma operação viável.': 'Field knowledge, regional base and direct communication to turn client demand into a viable operation.',
    'Capacidades': 'Capabilities',
    'Frente preparada para conectar transporte, operação e atendimento comercial.': 'Area prepared to connect transport, operations and commercial service.',
    'Fretes regionais': 'Regional freight',
    'Movimentação de cargas e materiais por vias fluviais, com foco em planejamento e confiança.': 'Movement of cargo and materials by river routes, focused on planning and reliability.',
    'Apoio a operações': 'Operational support',
    'Suporte para rotinas que exigem embarcação, acompanhamento e leitura prática do ambiente regional.': 'Support for routines that require vessels, follow-up and a practical understanding of the regional environment.',
    'Integração logística': 'Logistics integration',
    'Atendimento alinhado com outras frentes do grupo, facilitando demandas que envolvem materiais e transporte.': 'Service aligned with other group areas, making demands involving materials and transport easier.',
    'Soluções versáteis para operações com foco em confiança, segurança de carga e organização logística.': 'Versatile solutions for operations focused on trust, cargo safety and logistics organization.',
    'Operação': 'Operation',
    'Imagens de referência da estrutura fluvial que sustenta a frente logística.': 'Reference images of the river structure that supports the logistics area.',
    'Solicite atendimento para fretes e logística.': 'Request service for freight and logistics.',
    'Envie sua rota, tipo de carga, volume estimado e prazo desejado para a equipe avaliar o melhor encaminhamento.': 'Send your route, cargo type, estimated volume and desired deadline so the team can evaluate the best direction.',
    'Base operacional em Iranduba-AM para apoio a navegação, fretes e demandas logísticas fluviais.': 'Operational base in Iranduba-AM for navigation support, freight and river logistics needs.',
    'Mais de 10 anos de trajetória construidos com visão, coragem e trabalho fluvial.': 'More than 10 years of history built with vision, courage and river work.',
    'A ONC Estaleiro nasceu da visão de um empresário sonhador que acreditava no potencial da navegação regional e na força do trabalho bem feito para transformar oportunidades em resultados duradouros.': 'ONC Shipyard was born from the vision of an entrepreneur who believed in the potential of regional navigation and in the strength of well-done work to turn opportunities into lasting results.',
    'Uma empresa formada por experieêcia, perseverança e compromisso com a Amazônia.': 'A company shaped by experience, perseverance and commitment to the Amazon.',
    'Há mais de uma década, a empresa deu seus primeiros passos a partir de um sonho simples: construir uma operação respeitada, util e presente na realidade fluvial da região. Com o passar dos anos, esse sonho ganhou estrutura, parceiros, clientes e uma identidade própria, sempre guiada por dedicação, responsabilidade e vontade de crescer.': 'More than a decade ago, the company took its first steps from a simple dream: to build a respected, useful operation present in the region’s river reality. Over the years, that dream gained structure, partners, clients and its own identity, always guided by dedication, responsibility and the desire to grow.',
    'Ao longo dessa jornada, a ONC consolidou uma forma de trabalho baseada em proximidade com o cliente, leitura prática das demandas operacionais e foco em soluções que realmente funcionam no dia a dia da navegação. Essa combinação ajudou a transformar esforço em credibilidade e presença regional.': 'Throughout this journey, ONC consolidated a way of working based on client proximity, practical reading of operational demands and focus on solutions that truly work in daily navigation. This combination helped turn effort into credibility and regional presence.',
    'Hoje, a empresa segue ampliando sua apresentação institucional sem perder a sua essência: ser resultado da visao de um empreendedor que acreditou no próprio sonho, investiu em estrutura e construiu uma história marcada por constância, trabalho sério e confiança.': 'Today, the company continues to expand its institutional presentation without losing its essence: being the result of an entrepreneur’s vision, investment in structure and a history marked by consistency, serious work and trust.',
    'Atender operações fluviais com seriedade, clareza e compromisso com qualidade estrutural e comercial.': 'Serve river operations with seriousness, clarity and commitment to structural and commercial quality.',
    'Fortalecer a marca ONC como referência regional em navegação, apoio fluvial e apresentação profissional.': 'Strengthen the ONC brand as a regional reference in navigation, river support and professional presentation.',
    'Respeito, confiança, trabalho continuo, proximidade com o cliente e orgulho pela história construida.': 'Respect, trust, continuous work, client proximity and pride in the history built.',
    'Uma caminhada de crescimento feita com consistência.': 'A growth journey built with consistency.',
    'Fundação inspirada pelo sonho de construir uma operacao forte e respeitada no setor fluvial regional.': 'Foundation inspired by the dream of building a strong and respected operation in the regional river sector.',
    'Com o tempo, a empresa ampliou relações comerciais, fortaleceu sua base e passou a atender demandas com mais segurança e estrutura.': 'Over time, the company expanded commercial relationships, strengthened its base and began serving demands with more security and structure.',
    'Agora, a ONC apresenta uma comunicação mais clara e profissional para refletir a história que ja construiu no mercado.': 'Now, ONC presents clearer and more professional communication to reflect the history it has already built in the market.'
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
    'Fretes, apoio fluvial, movimentação de cargas e organização operacional para rotas regionais.': 'Fletes, apoyo fluvial, movimiento de cargas y organización operativa para rutas regionales.',
    'Insumos e fornecimento': 'Insumos y suministro',
    'Nova frente para apresentar fornecimento, atendimento comercial e suporte a demandas de materiais para obras e operações.': 'Nueva área para presentar suministro, atención comercial y soporte a demandas de materiales para obras y operaciones.',
    'Grupo ONC: estaleiro, navegação, logística, mineração e material de construção.': 'Grupo ONC: astillero, navegación, logística, minería y material de construcción.',
    'Apresentação institucional com foco em navegação, operação fluvial e credibilidade comercial.': 'Presentación institucional con foco en navegación, operación fluvial y credibilidad comercial.',
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
    'Inicio da empresa': 'Inicio de la empresa',
    'Consolidação operacional': 'Consolidación operativa',
    'Nova fase institucional': 'Nueva fase institucional',
    'Balsas sob medida para operações de carga, apoio e travessia fluvial.': 'Barcazas a medida para operaciones de carga, apoyo y travesía fluvial.',
    'Estruturas desenvolvidas para alta resistência operacional, estabilidade em navegação e adaptação ao tipo de carga ou demanda logística do cliente.': 'Estructuras desarrolladas para alta resistencia operativa, estabilidad en navegación y adaptación al tipo de carga o demanda logística del cliente.',
    'Projetadas para operar com segurança e eficiência em diferentes cenários.': 'Diseñadas para operar con seguridad y eficiencia en diferentes escenarios.',
    'As balsas da ONC são pensadas para atender operações fluviais que exigem confiabilidade estrutural, distribuição adequada de carga e desempenho consistente em rotas regionais. O projeto considera o perfil da atividade, o ambiente de navegação e a rotina operacional esperada.': 'Las barcazas de ONC están pensadas para operaciones fluviales que exigen confiabilidad estructural, distribución adecuada de carga y desempeño constante en rutas regionales. El proyecto considera el perfil de la actividad, el ambiente de navegación y la rutina operativa esperada.',
    'Transporte de cargas diversas com configuração adequada ao uso.': 'Transporte de cargas diversas con configuración adecuada al uso.',
    'Estrutura reforcada para enfrentar demandas continuas de operação.': 'Estructura reforzada para enfrentar demandas continuas de operación.',
    'Layout funcional para facilitar embarque, desembarque e apoio logistico.': 'Diseño funcional para facilitar embarque, desembarque y apoyo logístico.',
    'Planejamento sob medida conforme dimensão, capacidade e finalidade.': 'Planificación a medida según dimensión, capacidad y finalidad.',
    'Movimentação de carga, apoio industrial, transporte operacional e uso em cadeias logísticas fluviais.': 'Movimiento de carga, apoyo industrial, transporte operativo y uso en cadenas logísticas fluviales.',
    'Atendimento regional com leitura mais proxima da realidade amazônica e foco em durabilidade de longo prazo.': 'Atención regional con lectura más cercana de la realidad amazónica y foco en durabilidad a largo plazo.',
    'Visão visual da linha de balsas e da estrutura operacional.': 'Visión visual de la línea de barcazas y de la estructura operativa.',
    'Empurradores modernos para operações que exigem potência e estabilidade.': 'Empujadores modernos para operaciones que exigen potencia y estabilidad.',
    'Projetados para apoiar comboios, rebocar cargas e garantir desempenho consistente em ambientes fluviais de alta exigência operacional.': 'Diseñados para apoyar convoyes, remolcar cargas y garantizar desempeño constante en ambientes fluviales de alta exigencia operativa.',
    'Embarcações pensadas para comando, força e navegação eficiente.': 'Embarcaciones pensadas para comando, fuerza y navegación eficiente.',
    'Os empurradores ocupam papel central em operações de apoio e deslocamento de embarcações na região. Por isso, a ONC organiza esse tipo de projeto com atenção especial a motorização, capacidade de manobra, estrutura de cabine e segurança da rotina de operação.': 'Los empujadores ocupan un papel central en operaciones de apoyo y desplazamiento de embarcaciones en la región. Por eso, ONC organiza este tipo de proyecto con atención especial a motorización, capacidad de maniobra, estructura de cabina y seguridad de la rutina operativa.',
    'Alto potencial de apoio a comboios e transporte de estruturas fluviais.': 'Alto potencial de apoyo a convoyes y transporte de estructuras fluviales.',
    'Projeto focado em estabilidade direcional e eficiência de navegação.': 'Proyecto enfocado en estabilidad direccional y eficiencia de navegación.',
    'Configuração funcional para rotinas intensas de operação regional.': 'Configuración funcional para rutinas intensas de operación regional.',
    'Boa resposta para apoio logístico, rebocagem e suporte tático.': 'Buena respuesta para apoyo logístico, remolque y soporte táctico.',
    'Rebocagem, apoio a balsas, transporte assistido e operações continuas em corredores fluviais.': 'Remolque, apoyo a barcazas, transporte asistido y operaciones continuas en corredores fluviales.',
    'Planejamento visual e técnico mais claro para comunicar robustez e confiança a clientes operacionais.': 'Planificación visual y técnica más clara para comunicar robustez y confianza a clientes operativos.',
    'Visão do perfil operacional dos empurradores e da estrutura de apoio.': 'Visión del perfil operativo de los empujadores y de la estructura de apoyo.',
    'Fretes e apoio operacional com foco em confiança, fluxo e segurança de carga.': 'Fletes y apoyo operativo con foco en confianza, flujo y seguridad de carga.',
    'Uma frente orientada para atender demandas logísticas fluviais com melhor organização operacional, suporte regional e leitura prática das necessidades do cliente.': 'Un área orientada a demandas logísticas fluviales con mejor organización operativa, soporte regional y lectura práctica de las necesidades del cliente.',
    'Solução pensada para movimentação e suporte logístico em ambiente fluvial.': 'Solución pensada para movimiento y soporte logístico en ambiente fluvial.',
    'A ONC apresenta o serviço de fretes e apoio operacional como uma frente voltada a deslocamento de materiais, apoio a cadeias produtivas e suporte a operações regionais. A proposta destaca segurança, previsibilidade e melhor apresentação comercial para facilitar o entendimento do cliente sobre a função da embarcação.': 'ONC presenta el servicio de fletes y apoyo operativo como un área orientada al desplazamiento de materiales, apoyo a cadenas productivas y soporte a operaciones regionales. La propuesta destaca seguridad, previsibilidad y mejor presentación comercial para facilitar el entendimiento del cliente sobre la función de la embarcación.',
    'Transporte organizado para cargas e materiais em ambiente fluvial.': 'Transporte organizado para cargas y materiales en ambiente fluvial.',
    'Apoio a rotinas operacionais que exigem regularidade e confiança.': 'Apoyo a rutinas operativas que exigen regularidad y confianza.',
    'Planejamento visual e técnico voltado para clareza de uso e de função.': 'Planificación visual y técnica orientada a claridad de uso y función.',
    'Boa adaptação a demandas logísticas da regiao amazônica.': 'Buena adaptación a demandas logísticas de la región amazónica.',
    'Fretes regionais, apoio logístico, movimentação de insumos e suporte a operações fluviais continuas.': 'Fletes regionales, apoyo logístico, movimiento de insumos y soporte a operaciones fluviales continuas.',
    'Comunicação mais objetiva sobre cada embarcação, facilitando apresentação comercial e entendimento do serviço.': 'Comunicación más objetiva sobre cada embarcación, facilitando la presentación comercial y el entendimiento del servicio.',
    'Imagens associadas a apoio logístico, transporte e estrutura operacional.': 'Imágenes asociadas a apoyo logístico, transporte y estructura operativa.',
    'Grupo ONC: navegação, logística e apoio operacional fluvial.': 'Grupo ONC: navegación, logística y apoyo operativo fluvial.',
    'Mineração e material de construção com atendimento voltado a obras e operações regionais.': 'Minería y material de construcción con atención orientada a obras y operaciones regionales.',
    'Nova frente do Grupo ONC para apresentar fornecimento de materiais, relacionamento comercial e apoio logístico a clientes que precisam de insumos com maior clareza de atendimento.': 'Nueva área del Grupo ONC para presentar suministro de materiales, relación comercial y apoyo logístico a clientes que necesitan insumos con mayor claridad de atención.',
    'Nova frente': 'Nueva área',
    'Um canal específico para demandas de materiais, obras e abastecimento operacional.': 'Un canal específico para demandas de materiales, obras y abastecimiento operativo.',
    'A página organiza a atuação da ONC em mineração e material de construção como uma frente própria dentro do grupo. O objetivo é facilitar o primeiro contato de clientes que buscam insumos, fornecimento e suporte para planejamento de entrega.': 'La página organiza la actuación de ONC en minería y material de construcción como un área propia dentro del grupo. El objetivo es facilitar el primer contacto de clientes que buscan insumos, suministro y soporte para planificación de entrega.',
    'Atendimento comercial para materiais de construção e insumos relacionados.': 'Atención comercial para materiales de construcción e insumos relacionados.',
    'Direcionamento de demandas para obras, fornecedores e operações regionais.': 'Direccionamiento de demandas para obras, proveedores y operaciones regionales.',
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
    'Apresentação institucional para demandas ligadas a mineração, extração, fornecimento e comercialização.': 'Presentación institucional para demandas ligadas a minería, extracción, suministro y comercialización.',
    'Entrega e apoio': 'Entrega y apoyo',
    'Possibilidade de articular transporte e apoio logístico com as demais frentes do Grupo ONC.': 'Posibilidad de articular transporte y apoyo logístico con las demás áreas del Grupo ONC.',
    'Solicite atendimento para materiais.': 'Solicite atención para materiales.',
    'Envie o tipo de material, quantidade, local de entrega e prazo desejado para direcionarmos o atendimento.': 'Envíe el tipo de material, cantidad, lugar de entrega y plazo deseado para direccionar la atención.',
    'Atendimento ligado ao Porto Vilas Manaus, ponto estratégico para apoio, materiais e operações regionais.': 'Atención vinculada al Porto Vilas Manaus, punto estratégico para apoyo, materiales y operaciones regionales.',
    'Grupo ONC: mineração, material de construção e suporte a operações regionais.': 'Grupo ONC: minería, material de construcción y soporte a operaciones regionales.',
    'Navegação e logística para movimentar cargas com previsibilidade na Amazônia.': 'Navegación y logística para mover cargas con previsibilidad en la Amazonía.',
    'Uma frente voltada a fretes, apoio fluvial, deslocamento de materiais e suporte operacional para clientes que dependem de rotas regionais bem organizadas.': 'Un área orientada a fletes, apoyo fluvial, desplazamiento de materiales y soporte operativo para clientes que dependen de rutas regionales bien organizadas.',
    'Atuação': 'Actuación',
    'Operação fluvial estruturada para apoiar cadeias produtivas e demandas regionais.': 'Operación fluvial estructurada para apoyar cadenas productivas y demandas regionales.',
    'A ONC Navegação e Logística aproveita a experiência do grupo em embarcações e rotina fluvial para atender operações que precisam movimentar cargas, insumos, equipamentos e materiais com segurança, clareza e acompanhamento comercial.': 'ONC Navegación y Logística aprovecha la experiencia del grupo en embarcaciones y rutina fluvial para atender operaciones que necesitan mover cargas, insumos, equipos y materiales con seguridad, claridad y acompañamiento comercial.',
    'Fretes fluviais para cargas, materiais e demandas operacionais.': 'Fletes fluviales para cargas, materiales y demandas operativas.',
    'Apoio logístico para empresas, obras, operações industriais e fornecedores.': 'Apoyo logístico para empresas, obras, operaciones industriales y proveedores.',
    'Organização de rotas, prazos e necessidades conforme o perfil do cliente.': 'Organización de rutas, plazos y necesidades según el perfil del cliente.',
    'Integração com a estrutura naval e comercial do Grupo ONC.': 'Integración con la estructura naval y comercial del Grupo ONC.',
    'Indicado para': 'Indicado para',
    'Clientes que precisam de transporte fluvial, apoio a rotas, movimentação de insumos e suporte operacional recorrente.': 'Clientes que necesitan transporte fluvial, apoyo a rutas, movimiento de insumos y soporte operativo recurrente.',
    'Conhecimento de campo, base regional e comunicação direta para transformar a demanda do cliente em uma operação viável.': 'Conocimiento de campo, base regional y comunicación directa para transformar la demanda del cliente en una operación viable.',
    'Capacidades': 'Capacidades',
    'Frente preparada para conectar transporte, operação e atendimento comercial.': 'Área preparada para conectar transporte, operación y atención comercial.',
    'Fretes regionais': 'Fletes regionales',
    'Movimentação de cargas e materiais por vias fluviais, com foco em planejamento e confiança.': 'Movimiento de cargas y materiales por vías fluviales, con foco en planificación y confianza.',
    'Apoio a operações': 'Apoyo a operaciones',
    'Suporte para rotinas que exigem embarcação, acompanhamento e leitura prática do ambiente regional.': 'Soporte para rutinas que exigen embarcación, seguimiento y lectura práctica del ambiente regional.',
    'Integração logística': 'Integración logística',
    'Atendimento alinhado com outras frentes do grupo, facilitando demandas que envolvem materiais e transporte.': 'Atención alineada con otras áreas del grupo, facilitando demandas que involucran materiales y transporte.',
    'Soluções versáteis para operações com foco em confiança, segurança de carga e organização logística.': 'Soluciones versátiles para operaciones con foco en confianza, seguridad de carga y organización logística.',
    'Operação': 'Operación',
    'Imagens de referência da estrutura fluvial que sustenta a frente logística.': 'Imágenes de referencia de la estructura fluvial que sostiene el área logística.',
    'Solicite atendimento para fretes e logística.': 'Solicite atención para fletes y logística.',
    'Envie sua rota, tipo de carga, volume estimado e prazo desejado para a equipe avaliar o melhor encaminhamento.': 'Envíe su ruta, tipo de carga, volumen estimado y plazo deseado para que el equipo evalúe el mejor encaminamiento.',
    'Base operacional em Iranduba-AM para apoio a navegação, fretes e demandas logísticas fluviais.': 'Base operativa en Iranduba-AM para apoyo a navegación, fletes y demandas logísticas fluviales.',
    'Mais de 10 anos de trajetória construidos com visão, coragem e trabalho fluvial.': 'Más de 10 años de trayectoria construidos con visión, coraje y trabajo fluvial.',
    'A ONC Estaleiro nasceu da visão de um empresário sonhador que acreditava no potencial da navegação regional e na força do trabalho bem feito para transformar oportunidades em resultados duradouros.': 'ONC Astillero nació de la visión de un empresario soñador que creía en el potencial de la navegación regional y en la fuerza del trabajo bien hecho para transformar oportunidades en resultados duraderos.',
    'Uma empresa formada por experieêcia, perseverança e compromisso com a Amazônia.': 'Una empresa formada por experiencia, perseverancia y compromiso con la Amazonía.',
    'Há mais de uma década, a empresa deu seus primeiros passos a partir de um sonho simples: construir uma operação respeitada, util e presente na realidade fluvial da região. Com o passar dos anos, esse sonho ganhou estrutura, parceiros, clientes e uma identidade própria, sempre guiada por dedicação, responsabilidade e vontade de crescer.': 'Hace más de una década, la empresa dio sus primeros pasos a partir de un sueño simple: construir una operación respetada, útil y presente en la realidad fluvial de la región. Con los años, ese sueño ganó estructura, socios, clientes e identidad propia, siempre guiado por dedicación, responsabilidad y voluntad de crecer.',
    'Ao longo dessa jornada, a ONC consolidou uma forma de trabalho baseada em proximidade com o cliente, leitura prática das demandas operacionais e foco em soluções que realmente funcionam no dia a dia da navegação. Essa combinação ajudou a transformar esforço em credibilidade e presença regional.': 'A lo largo de esa jornada, ONC consolidó una forma de trabajo basada en proximidad con el cliente, lectura práctica de las demandas operativas y foco en soluciones que realmente funcionan en el día a día de la navegación. Esa combinación ayudó a transformar esfuerzo en credibilidad y presencia regional.',
    'Hoje, a empresa segue ampliando sua apresentação institucional sem perder a sua essência: ser resultado da visao de um empreendedor que acreditou no próprio sonho, investiu em estrutura e construiu uma história marcada por constância, trabalho sério e confiança.': 'Hoy, la empresa sigue ampliando su presentación institucional sin perder su esencia: ser resultado de la visión de un emprendedor que creyó en su propio sueño, invirtió en estructura y construyó una historia marcada por constancia, trabajo serio y confianza.',
    'Atender operações fluviais com seriedade, clareza e compromisso com qualidade estrutural e comercial.': 'Atender operaciones fluviales con seriedad, claridad y compromiso con calidad estructural y comercial.',
    'Fortalecer a marca ONC como referência regional em navegação, apoio fluvial e apresentação profissional.': 'Fortalecer la marca ONC como referencia regional en navegación, apoyo fluvial y presentación profesional.',
    'Respeito, confiança, trabalho continuo, proximidade com o cliente e orgulho pela história construida.': 'Respeto, confianza, trabajo continuo, cercanía con el cliente y orgullo por la historia construida.',
    'Uma caminhada de crescimento feita com consistência.': 'Un camino de crecimiento hecho con consistencia.',
    'Fundação inspirada pelo sonho de construir uma operacao forte e respeitada no setor fluvial regional.': 'Fundación inspirada por el sueño de construir una operación fuerte y respetada en el sector fluvial regional.',
    'Com o tempo, a empresa ampliou relações comerciais, fortaleceu sua base e passou a atender demandas com mais segurança e estrutura.': 'Con el tiempo, la empresa amplió relaciones comerciales, fortaleció su base y pasó a atender demandas con más seguridad y estructura.',
    'Agora, a ONC apresenta uma comunicação mais clara e profissional para refletir a história que ja construiu no mercado.': 'Ahora, ONC presenta una comunicación más clara y profesional para reflejar la historia que ya construyó en el mercado.'
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
