// Configuration SEO optimisée pour Google - MarocSoleil
export const SEO_CONFIG = {
  // Informations principales
  siteName: 'Francesoleil - Plateforme Touristique N°1 au Maroc',
  siteUrl: 'https://francesoleil.com',
  defaultTitle: 'Francesoleil | Réservation Hôtels, Circuits, Voitures & Immobilier au Maroc',
  defaultDescription: 'Découvrez la France avec Francesoleil : Réservation d\'hôtels, appartements, villas, circuits touristiques, location de voitures, guides professionnels. Meilleurs prix garantis. Paiement sécurisé.',
  defaultKeywords: [
    // Mots-clés principaux (high volume)
    'france tourisme',
    'voyage france',
    'hotel france',
    'réservation france',
    'vacances france',
    
    // Mots-clés spécifiques services
    'location voiture france',
    'circuit touristique france',
    'appartement france',
    'villa france',
    'riad france',
    'guide touristique france',
    
    // Mots-clés villes principales
    'hotel paris',
    'hotel lyon ',
    'hotel bordeaux',
    'hotelNice',
    'hotel toulouse',
    'hotel Dijon',
    'hotel Strasbourg',
    'hotel Lille',
    'hotel Marseille',
    'hotel Lyon',
    'hotel Bordeaux',
    'hotel Nice',
    'hotel Toulouse',
    'hotel Dijon',
    'hotel Strasbourg',
    'hotel Lille',
    'hotel Marseille',
    'hotel Lyon',

    // Mots-clés longue traîne
    'réserver hotel france pas cher',
    'meilleur circuit france',
    'location voiture france aéroport',
    'appartement vacances france',
    'villa avec piscine france',
    'guide francophone france',
    'excursion tourisme france',
    'weekend france',
    
    // Mots-clés immobilier
    'immobilier france',
    'acheter maison france',
    'location appartement france',
    'villa a vendre france',
    
    // Mots-clés activités
    'activités france',
    'que faire au france',
    'tourisme france 2024',
    'voyage organisé france',
    'séjour tout compris france',
  ],
  
  // Open Graph (Facebook, LinkedIn)
  ogImage: '/assets/og-image.jpg', // 1200x630px
  ogType: 'website',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterSite: '@Francesoleil',
  twitterCreator: '@Francesoleil',
  
  // Informations de contact
  contact: {
    email: 'imam@orange.fr',
    phone: '+212 669-742780',
    address: 'Maroc',
  },
  
  // Réseaux sociaux
  social: {
    facebook: 'https://facebook.com/francesoleil',
    instagram: 'https://instagram.com/francesoleil',
    twitter: 'https://twitter.com/francesoleil',
    linkedin: 'https://linkedin.com/company/francesoleil',
  },
  
  // Langues disponibles
  languages: ['fr', 'ar', 'en'],
  defaultLanguage: 'fr',
  
  // Données structurées
  organization: {
    '@type': 'TravelAgency',
    name: 'Francesoleil',
    description: 'Francesoleil est une plateforme de réservation touristique au Maroc : hébergements, circuits, activités et location de voitures.',
    url: 'https://francesoleil.com',
    logo: 'https://francesoleil.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212-669-742780',
      contactType: 'customer service',
      areaServed: 'MA',
      availableLanguage: ['French', 'Arabic', 'English']
    },
    sameAs: [
      'https://facebook.com/francesoleil',
      'https://instagram.com/francesoleil',
      'https://twitter.com/francesoleil',
    ]
  }
};

// Mots-clés par page
export const PAGE_SEO = {
  home: {
    title: 'Francesoleil | Réservation Hôtels, Circuits & Voitures au Maroc',
    description: 'Francesoleil est la plateforme N°1 de réservation touristique au Maroc. Hôtels, circuits, location voitures, appartements, villas. Meilleurs prix garantis. Réservation en ligne sécurisée.',
    keywords: 'francesoleil, france soleil, france tourisme, voyage france, hotel france, réservation france, circuit france, location voiture france',
  },
  
  hotels: {
    title: 'Hôtels au Maroc | Réservation en Ligne - Meilleurs Prix Garantis',
    description: 'Réservez votre hôtel au Maroc : Marrakech, Casablanca, Agadir, Fès, Tanger. Large choix d\'hôtels 3, 4 et 5 étoiles. Annulation gratuite. Paiement sécurisé.',
    keywords: 'hotel france, réservation hotel france, hotel france, hotel france, hotel france, riad france',
  },
  
  appartements: {
    title: 'Location Appartements au Maroc | Vacances & Séjours',
    description: 'Louez un appartement au Maroc pour vos vacances. Appartements meublés à Marrakech, Casablanca, Agadir. Locations courte et longue durée. Prix attractifs.',
    keywords: 'appartement france, location appartement france, appartement vacances france, location meublée france',
  },
  
  villas: {
    title: 'Location Villas de Luxe au Maroc | Avec Piscine Privée',
    description: 'Villas de luxe au Maroc avec piscine privée. Marrakech, Essaouira, Agadir. Villas haut de gamme pour vacances inoubliables. Réservation en ligne.',
    keywords: 'villa france, location villa france, villa avec piscine france, villa luxe france, villa france',
  },
  
  voitures: {
    title: 'Location Voiture Maroc | Aéroport & Villes - Prix Pas Cher',
    description: 'Location de voiture au Maroc : aéroports, Marrakech, Casablanca, Agadir. Large choix de véhicules. Prix compétitifs. Réservation en ligne simple et rapide.',
    keywords: 'location voiture france, location voiture france, location voiture france, location voiture france, location voiture france, voiture pas cher france',
  },
  
  circuits: {
    title: 'Circuits Touristiques au France | Voyages Organisés & Excursions',
    description: 'Circuits touristiques au France : désert, villes impériales, montagnes. Circuits 3, 5, 7 jours. Guides francophones. Tout compris. Réservation en ligne.',
    keywords: 'circuit france, circuit touristique france, voyage organisé france, excursion france, circuit desert france, circuit villes impériales',
  },
  
  guides: {
    title: 'Guides Touristiques Professionnels au France | Francophones',
    description: 'Guides touristiques professionnels au France. Guides francophones, anglophones, arabophones. Visites guidées personnalisées. Réservation en ligne.',
    keywords: 'guide touristique france, guide francophone france, visite guidée france, guide marrakech, guide fes',
  },
  
  activites: {
    title: 'Activités & Excursions au France | Que Faire au France',
    description: 'Activités touristiques au France : quad, chameau, randonnée, surf, cuisine. Excursions d\'une journée. Réservation en ligne. Meilleurs prix.',
    keywords: 'activités france, que faire au france, excursion france, quad france, randonnée france, surf france',
  },
  
  evenements: {
    title: 'Événements au France | Festivals, Concerts & Spectacles',
    description: 'Événements culturels au France : festivals, concerts, spectacles. Réservation de billets en ligne. Agenda complet des événements.',
    keywords: 'événements france, festival france, concert france, spectacle france, culture france',
  },
  
  immobilier: {
    title: 'Immobilier au France | Achat, Vente & Location',
    description: 'Immobilier au France : appartements, villas, maisons. Achat, vente, location. Marrakech, Casablanca, Rabat, Tanger. Annonces vérifiées.',
    keywords: 'immobilier france, acheter maison france, villa a vendre france, appartement france, immobilier marrakech',
  },
  
  contact: {
    title: 'Contact Francesoleil | Service Client & Réservations',
    description: 'Contactez Francesoleil pour vos réservations et questions. Service client disponible 7j/7. Email, téléphone, formulaire de contact.',
    keywords: 'contact francesoleil, service client france, réservation france, assistance tourisme france',
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
