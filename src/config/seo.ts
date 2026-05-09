// Configuration SEO optimisée pour Google - MarocSoleil
export const SEO_CONFIG = {
  // Informations principales
  siteName: 'AlgérieSoleil - Plateforme Touristique N°1 au Maroc',
  siteUrl: 'https://algériesoleil.com',
  defaultTitle: 'AlgérieSoleil | Réservation Hôtels, Circuits, Voitures & Immobilier au Maroc',
  defaultDescription: 'Découvrez l\'Algérie avec AlgérieSoleil : Réservation d\'hôtels, appartements, villas, circuits touristiques, location de voitures, guides professionnels. Meilleurs prix garantis. Paiement sécurisé.',
  defaultKeywords: [
    // Mots-clés principaux (high volume)
    'algérie tourisme',
    'voyage algérie',
    'hotel algérie',
    'réservation algérie',
    'vacances algérie',
    
    // Mots-clés spécifiques services
    'location voiture algérie',
    'circuit touristique algérie',
    'appartement algérie',
    'villa algérie',
    'riad algérie',
    'guide touristique algérie',
    
    // Mots-clés villes principales
    'hotel alger',
    'hotel oran',
    'hotel agadir',
    'hotel fes',
    'hotel tanger',
    'hotel rabat',
    'hotel essaouira',
    'hotel chefchaouen',
    
    // Mots-clés longue traîne
    'réserver hotel algérie pas cher',
    'meilleur circuit algérie',
    'location voiture algérie aéroport',
    'appartement vacances algérie',
    'villa avec piscine algérie',
    'guide francophone algérie',
    'excursion desert algérien',
    'weekend algérien',
    
    // Mots-clés immobilier
    'immobilier algérie',
    'acheter maison algérie',
    'location appartement algérie',
    'villa a vendre algérie',
    
    // Mots-clés activités
    'activités algérie',
    'que faire au algérie',
    'tourisme algérie 2024',
    'voyage organisé algérie',
    'séjour tout compris algérie',
  ],
  
  // Open Graph (Facebook, LinkedIn)
  ogImage: '/assets/og-image.jpg', // 1200x630px
  ogType: 'website',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterSite: '@AlgérieSoleil',
  twitterCreator: '@AlgérieSoleil',
  
  // Informations de contact
  contact: {
    email: 'imam@orange.fr',
    phone: '+212 669-742780',
    address: 'Maroc',
  },
  
  // Réseaux sociaux
  social: {
    facebook: 'https://facebook.com/algériesoleil',
    instagram: 'https://instagram.com/algériesoleil',
    twitter: 'https://twitter.com/algériesoleil',
    linkedin: 'https://linkedin.com/company/algériesoleil',
  },
  
  // Langues disponibles
  languages: ['fr', 'ar', 'en'],
  defaultLanguage: 'fr',
  
  // Données structurées
  organization: {
    '@type': 'TravelAgency',
    name: 'AlgérieSoleil',
    description: 'AlgérieSoleil est une plateforme de réservation touristique au Maroc : hébergements, circuits, activités et location de voitures.',
    url: 'https://algériesoleil.com',
    logo: 'https://algériesoleil.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212-669-742780',
      contactType: 'customer service',
      areaServed: 'MA',
      availableLanguage: ['French', 'Arabic', 'English']
    },
    sameAs: [
      'https://facebook.com/algériesoleil',
      'https://instagram.com/algériesoleil',
      'https://twitter.com/algériesoleil',
    ]
  }
};

// Mots-clés par page
export const PAGE_SEO = {
  home: {
    title: 'AlgérieSoleil | Réservation Hôtels, Circuits & Voitures au Maroc',
    description: 'AlgérieSoleil est la plateforme N°1 de réservation touristique au Maroc. Hôtels, circuits, location voitures, appartements, villas. Meilleurs prix garantis. Réservation en ligne sécurisée.',
    keywords: 'algériesoleil, algérie soleil, algérie tourisme, voyage algérie, hotel algérie, réservation algérie, circuit algérie, location voiture algérie',
  },
  
  hotels: {
    title: 'Hôtels au Maroc | Réservation en Ligne - Meilleurs Prix Garantis',
    description: 'Réservez votre hôtel au Maroc : Marrakech, Casablanca, Agadir, Fès, Tanger. Large choix d\'hôtels 3, 4 et 5 étoiles. Annulation gratuite. Paiement sécurisé.',
    keywords: 'hotel algérie, réservation hotel algérie, hotel algérie, hotel algérie, hotel algérie, riad algérie',
  },
  
  appartements: {
    title: 'Location Appartements au Maroc | Vacances & Séjours',
    description: 'Louez un appartement au Maroc pour vos vacances. Appartements meublés à Marrakech, Casablanca, Agadir. Locations courte et longue durée. Prix attractifs.',
    keywords: 'appartement algérie, location appartement algérie, appartement vacances algérie, location meublée algérie',
  },
  
  villas: {
    title: 'Location Villas de Luxe au Maroc | Avec Piscine Privée',
    description: 'Villas de luxe au Maroc avec piscine privée. Marrakech, Essaouira, Agadir. Villas haut de gamme pour vacances inoubliables. Réservation en ligne.',
    keywords: 'villa algérie, location villa algérie, villa avec piscine algérie, villa luxe algérie, villa algérie',
  },
  
  voitures: {
    title: 'Location Voiture Maroc | Aéroport & Villes - Prix Pas Cher',
    description: 'Location de voiture au Maroc : aéroports, Marrakech, Casablanca, Agadir. Large choix de véhicules. Prix compétitifs. Réservation en ligne simple et rapide.',
    keywords: 'location voiture algérie, location voiture algérie, location voiture algérie, location voiture algérie, location voiture algérie, voiture pas cher algérie',
  },
  
  circuits: {
    title: 'Circuits Touristiques au Maroc | Voyages Organisés & Excursions',
    description: 'Circuits touristiques au Maroc : désert, villes impériales, montagnes. Circuits 3, 5, 7 jours. Guides francophones. Tout compris. Réservation en ligne.',
    keywords: 'circuit maroc, circuit touristique maroc, voyage organisé maroc, excursion maroc, circuit desert maroc, circuit villes impériales',
  },
  
  guides: {
    title: 'Guides Touristiques Professionnels au Maroc | Francophones',
    description: 'Guides touristiques professionnels au Maroc. Guides francophones, anglophones, arabophones. Visites guidées personnalisées. Réservation en ligne.',
    keywords: 'guide touristique maroc, guide francophone maroc, visite guidée maroc, guide marrakech, guide fes',
  },
  
  activites: {
    title: 'Activités & Excursions au Maroc | Que Faire au Maroc',
    description: 'Activités touristiques au Maroc : quad, chameau, randonnée, surf, cuisine. Excursions d\'une journée. Réservation en ligne. Meilleurs prix.',
    keywords: 'activités maroc, que faire au maroc, excursion maroc, quad maroc, randonnée maroc, surf maroc',
  },
  
  evenements: {
    title: 'Événements au Maroc | Festivals, Concerts & Spectacles',
    description: 'Événements culturels au Maroc : festivals, concerts, spectacles. Réservation de billets en ligne. Agenda complet des événements.',
    keywords: 'événements maroc, festival maroc, concert maroc, spectacle maroc, culture maroc',
  },
  
  immobilier: {
    title: 'Immobilier au Maroc | Achat, Vente & Location',
    description: 'Immobilier au Maroc : appartements, villas, maisons. Achat, vente, location. Marrakech, Casablanca, Rabat, Tanger. Annonces vérifiées.',
    keywords: 'immobilier maroc, acheter maison maroc, villa a vendre maroc, appartement maroc, immobilier marrakech',
  },
  
  contact: {
    title: 'Contact AlgérieSoleil | Service Client & Réservations',
    description: 'Contactez AlgérieSoleil pour vos réservations et questions. Service client disponible 7j/7. Email, téléphone, formulaire de contact.',
    keywords: 'contact algériesoleil, service client algérie, réservation algérie, assistance tourisme algérie',
  },
};

// Fonction pour générer les meta tags
export const generateMetaTags = (page: keyof typeof PAGE_SEO) => {
  const pageSEO = PAGE_SEO[page] || PAGE_SEO.home;
  
  return {
    title: pageSEO.title,
    description: pageSEO.description,
    keywords: pageSEO.keywords,
    canonical: `${SEO_CONFIG.siteUrl}/${page === 'home' ? '' : page}`,
    ogTitle: pageSEO.title,
    ogDescription: pageSEO.description,
    ogUrl: `${SEO_CONFIG.siteUrl}/${page === 'home' ? '' : page}`,
    ogImage: SEO_CONFIG.ogImage,
  };
};
