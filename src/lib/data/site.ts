/** Contenu éditorial repris du site ABS d'origine (version française). */

import type { asset } from '$app/paths';

/** Chemin d'un fichier de static/, sans « / » initial (typé par SvelteKit). */
export type StaticPath = Parameters<typeof asset>[0];

export interface SiteImage {
  src: StaticPath;
  alt: string;
  /** `contain` : image à faible résolution, affichée sans l'agrandir ni la rogner */
  fit?: 'cover' | 'contain';
}

export interface Service {
  title: string;
  en: string;
  short: string;
  long: string[];
  image?: SiteImage;
}

export const contact = {
  phone: '+33 6 79 90 90 90',
  phoneHref: 'tel:+33679909090',
  email: 'info@absvipconsulting.com',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/absvipconsulting/' },
    { label: 'Facebook', href: 'https://facebook.com/AbsVipConsulting/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@absvipconsulting' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCLRfExOGpiOmGDnj7E2m4eQ' }
  ]
};

export const nav = [
  { href: "#apropos", key: "navAbout" },
  { href: "#services", key: "navServices" },
  { href: "#methode", key: "navMethod" },
  { href: "#adhesion", key: "navMembership" },
  { href: "#fondateur", key: "navFounder" },
  { href: "#contact", key: "navContact" }
] as const;

export const values = [
  { title: 'La relation', text: 'Un interlocuteur qui vous connaît, et une confiance qui se construit dans la durée.' },
  { title: 'L’exigence', text: 'Des standards issus du luxe et de l’assistance aux personnalités, appliqués à chaque demande.' },
  { title: 'L’efficacité', text: 'Une réponse rapide et juste, à toute heure, sans que vous ayez à y penser.' }
];

export const images: Record<"medal" | "founder" | "protection" | "brochure", SiteImage> = {
  medal: { src: 'images/abs-medaille.webp', alt: 'Médaille ABS VIP Consulting', fit: 'contain' },
  founder: { src: 'images/abs-fondateur.webp', alt: 'Portrait d’Abdoulaye, co-fondateur d’ABS VIP Consulting' },
  protection: {
    src: 'images/protection-rapprochee.jpg',
    alt: 'Agent de protection rapprochée escortant une cliente à la sortie d’un palace parisien'
  },
  brochure: { src: 'images/brochure-couverture.jpg', alt: 'Couverture de la brochure ABS VIP Consulting 2025', fit: 'contain' }
};

export const services: Service[] = [
  {
    title: 'Vols et jets privés',
    en: '',
    short: 'Vols réguliers ou jet privé, vers toutes les destinations.',
    long: [
      'Indiquez-nous la destination et la date : nous nous occupons du reste, au départ de tous les grands aéroports.',
      'En jet privé, plus de files d’attente, de correspondances ni de bagages égarés. Voyagez en famille ou tenez vos réunions en vol, à l’abri des oreilles indiscrètes.'
    ]
  },
  {
    title: 'Chauffeur privé',
    en: '',
    short: 'Van haut de gamme ou berline, avec un chauffeur discret.',
    long: [
      'Nos chauffeurs travaillent selon les standards les plus exigeants, avec la plus grande discrétion.',
      'Le service s’adapte à votre agenda : changement de programme en cours de route, imprévu de dernière minute, tout est géré pour que votre journée reste fluide.'
    ]
  },
  {
    title: 'Hôtels d’exception',
    en: '',
    short: 'Les adresses les plus prestigieuses, partout dans le monde.',
    long: [
      'Voyage d’affaires, escapade romantique ou séjour en famille : nous trouvons l’adresse juste pour chaque occasion.',
      'Nos relations dans le secteur nous ouvrent les portes des plus beaux hôtels, restaurants, bars et clubs, au Royaume-Uni, aux États-Unis, aux Émirats et bien au-delà.'
    ]
  },
  {
    title: 'Voyages sur mesure',
    en: '',
    short: 'Un voyage pensé pour vous, et uniquement pour vous.',
    long: [
      'Yachts, îles privées, resorts d’exception ou retraites de luxe : nos partenaires, spécialistes du voyage haut de gamme, composent le séjour idéal.',
      'Donnez-nous les dates, la destination et le nombre de voyageurs. Nous dessinons le reste, du premier transfert au dernier dîner.'
    ]
  },
  {
    title: 'Shopping privé',
    en: '',
    short: 'Pièces de créateurs, objets rares, cadeaux uniques.',
    long: [
      'Le cadeau parfait, sans y passer des heures. Grâce à notre expertise du sourcing de produits de luxe, nos spécialistes trouvent ce que vous cherchez, et souvent ce que vous n’osiez pas chercher.',
      'Dernières créations des grandes maisons, pièces de collection rares, cadeaux personnalisés : votre liste d’envies est entre de bonnes mains.'
    ]
  },
  {
    title: 'Protection rapprochée',
    en: '',
    short: 'Votre sérénité, confiée à des professionnels aguerris.',
    image: images.protection,
    long: [
      'Votre sécurité passe avant tout.',
      'Nous mettons à votre disposition des agents de protection rapprochée expérimentés, avec un dispositif conçu selon vos besoins.'
    ]
  },
  {
    title: 'Art et collections',
    en: '',
    short: 'Constituer une collection dont vous serez fier.',
    long: [
      'Bâtir une collection privée est une aventure passionnante et gratifiante.',
      'Que vous soyez déjà collectionneur, amateur éclairé ou que vous souhaitiez le devenir, notre réseau vous conseille à chaque étape.'
    ]
  },
  {
    title: 'Investissements',
    en: '',
    short: 'Des opportunités alignées avec votre situation.',
    long: [
      'Investir est l’un des meilleurs moyens de faire fructifier son patrimoine, et les options sont nombreuses.',
      'Avec nos partenaires spécialisés, nous vous aidons à identifier les placements adaptés à votre situation financière, au bon moment.'
    ]
  }
];

export const steps = [
  {
    title: 'Un premier échange, en toute confidentialité',
    text: 'Nous prenons le temps de comprendre votre rythme, vos habitudes et vos exigences. Rien n’est standard.'
  },
  {
    title: 'Votre semaine, réorganisée',
    text: 'Nous structurons votre agenda et mettons en place les services dont vous avez besoin chaque semaine : chauffeur, réservations, courses, rendez-vous.'
  },
  {
    title: 'Un appel suffit, à toute heure',
    text: 'Réservation de dernière minute, voyage d’affaires, cadeau introuvable : vous demandez, nous nous occupons du reste, où que vous soyez.'
  }
];

export const perks = [
  'Une équipe joignable 24h/24 et 7j/7, où que vous soyez',
  'Votre agenda hebdomadaire entièrement réorganisé',
  'Réservations de dernière minute : restaurants, clubs, hôtels',
  'L’accès à notre réseau au Royaume-Uni, aux États-Unis, aux Émirats et au-delà',
  'Un service discret, pensé pour vous seul'
];

/** Version anglaise des services (même ordre que `services`). */
export const servicesEn: Service[] = [
  {
    title: 'Flights and private jets',
    en: '',
    short: 'Scheduled flights or a private jet, to any destination.',
    long: [
      'Tell us the destination and the date: we take care of the rest, from every major airport.',
      'By private jet, no more queues, connections or lost luggage. Travel with your family or hold meetings in flight, away from prying ears.'
    ]
  },
  {
    title: 'Private chauffeur',
    en: '',
    short: 'A premium van or sedan, with a discreet chauffeur.',
    long: [
      'Our chauffeurs work to the most demanding standards, with the utmost discretion.',
      'The service adapts to your schedule: a change of plan en route or a last-minute surprise, everything is handled so your day stays seamless.'
    ]
  },
  {
    title: 'Exceptional hotels',
    en: '',
    short: 'The most prestigious addresses, worldwide.',
    long: [
      'Business trip, romantic getaway or family holiday: we find the right address for every occasion.',
      'Our relationships across the industry open the doors to the finest hotels, restaurants, lounges and clubs, in the UK, the US, the UAE and far beyond.'
    ]
  },
  {
    title: 'Bespoke travel',
    en: '',
    short: 'A journey designed for you, and you alone.',
    long: [
      'Yachts, private islands, exceptional resorts or luxury retreats: our partners, specialists in high-end travel, compose the ideal stay.',
      'Give us the dates, the destination and the number of travellers. We design the rest, from the first transfer to the last dinner.'
    ]
  },
  {
    title: 'Private shopping',
    en: '',
    short: 'Designer pieces, rare objects, unique gifts.',
    long: [
      'The perfect gift, without spending hours on it. With our expertise in sourcing luxury goods, our specialists find what you are looking for, and often what you did not dare to look for.',
      'The latest creations from the great houses, rare collector’s pieces, personalised gifts: your wish list is in good hands.'
    ]
  },
  {
    title: 'Close protection',
    en: '',
    short: 'Your peace of mind, entrusted to seasoned professionals.',
    image: images.protection,
    long: [
      'Your safety comes first.',
      'We provide experienced close-protection officers, with an arrangement designed around your needs.'
    ]
  },
  {
    title: 'Art and collections',
    en: '',
    short: 'Building a collection you will be proud of.',
    long: [
      'Building a private collection is an exciting and rewarding journey.',
      'Whether you are already a collector, a discerning enthusiast or wish to become one, our network advises you at every step.'
    ]
  },
  {
    title: 'Investments',
    en: '',
    short: 'Opportunities aligned with your situation.',
    long: [
      'Investing is one of the best ways to grow your wealth, and the options are many.',
      'With our specialist partners, we help you identify investments suited to your financial situation, at the right time.'
    ]
  }
];

/**
 * Visuel affiché dans la moitié droite au survol de chaque service (même ordre).
 * Le dépôt ABS ne contient que 4 images : la photo de protection est recadrée
 * différemment selon le service (voiture, palace, agent).
 */
export const serviceVisuals: { image: SiteImage; pos: string }[] = [
  { image: images.brochure, pos: '50% 50%' },
  { image: images.protection, pos: '50% 50%' },
  { image: images.protection, pos: '50% 50%' },
  { image: images.brochure, pos: '50% 50%' },
  { image: images.medal, pos: '50% 50%' },
  { image: images.protection, pos: '50% 50%' },
  { image: images.medal, pos: '50% 50%' },
  { image: images.brochure, pos: '50% 50%' }
];

/** Version anglaise de la méthode (même ordre que `steps`). */
export const stepsEn = [
  {
    title: 'A first conversation, in complete confidence',
    text: 'We take the time to understand your rhythm, your habits and your standards. Nothing is standard.'
  },
  {
    title: 'Your week, reorganised',
    text: 'We structure your schedule and put in place the services you need every week: chauffeur, bookings, errands, appointments.'
  },
  {
    title: 'One call is enough, at any hour',
    text: 'Last-minute booking, business trip, impossible-to-find gift: you ask, we take care of the rest, wherever you are.'
  }
];

export const valuesEn = [
  { title: 'Relationship', text: 'A contact who knows you, and trust that is built over time.' },
  { title: 'Standards', text: 'Standards drawn from luxury and personal assistance, applied to every request.' },
  { title: 'Efficiency', text: 'A fast, accurate answer at any hour, without you having to think about it.' }
];

export const perksEn = [
  'A team reachable 24/7, wherever you are',
  'Your weekly schedule completely reorganised',
  'Last-minute bookings: restaurants, clubs, hotels',
  'Access to our network in the UK, the US, the Emirates and beyond',
  'A discreet service, designed for you alone'
];
