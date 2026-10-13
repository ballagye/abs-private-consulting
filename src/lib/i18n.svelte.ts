export type Lang = 'fr' | 'en';

/** Langue courante (état global réactif Svelte 5). */
export const i18n = $state<{ lang: Lang }>({ lang: 'fr' });

const ui = {
  fr: {
    menu: 'Menu',
    close: 'Fermer',
    become: 'Devenir membre',
    navAbout: 'Qui sommes-nous',
    navServices: 'Services',
    navMethod: 'Méthode',
    navMembership: 'Adhésion',
    navFounder: 'Le fondateur',
    navContact: 'Contact',
    heroKicker: 'Conciergerie privée · Londres — Paris',
    heroL1: 'Vous demandez.',
    heroL2: 'Nous orchestrons.',
    heroSub:
      'Un coordinateur personnel, 24h/24 et 7j/7, pour votre agenda, vos voyages et vos envies, partout dans le monde.',
    heroCta2: 'Nos services',
    heroCall: 'Quelle que soit l’heure, quelqu’un vous répond.',
    svcKicker: 'Nos services',
    svcTitle1: 'Votre prochain départ',
    svcTitle2: 'commence ici.',
    svcLede:
      'Une demande qui n’entre dans aucune case ? C’est souvent là que nous sommes le plus utiles. Touchez un service pour en découvrir le détail.',
    methKicker: 'Méthode',
    methTitle1: 'Comment nous',
    methTitle2: 'travaillons',
    methLede:
      'L’abonnement permet de réorganiser entièrement votre semaine et de mettre en place des services récurrents. Le reste se règle par un simple appel.',
    interest: 'Ce qui vous intéresse',
    aboutKicker: 'Qui sommes-nous',
    manifestoA:
      'Deux amis d’enfance, une même exigence. Forts de leurs carrières dans le luxe et l’assistance personnelle aux célébrités, ils ont fondé ABS VIP Consulting avec une conviction :',
    manifestoEm: 'le vrai luxe, c’est le temps qu’on vous rend.',
    emblemTitle: 'Une maison, un emblème',
    emblemP1:
      'Le monogramme ABS, entouré de ses volutes, signe chaque brochure, chaque carte de membre et chaque échange.',
    emblemP2:
      'Relation, exigence, efficacité : trois mots qui guident chaque mission, à Londres, à Paris et partout où nos membres en ont besoin.',
    talk: 'Parlons-en',
    medalAlt: 'Médaille ABS VIP Consulting',
    memKicker: 'Le cercle',
    memTitleA: 'L’',
    memTitleEm: 'adhésion',
    cardFlip: 'Retourner la carte de membre',
    cardTag: 'Coordinatrice de style de vie · Assistance mondiale',
    cardName: 'Votre nom',
    cardNo: 'Adhésion n° 9090-0001',
    cardAssist: 'Assistance 24h/24 et 7j/7',
    cardHint: 'Touchez la carte pour la retourner',
    offerA: 'Une seule carte,',
    offerEm: 'un seul numéro',
    offerB: 'à appeler.',
    priceLabel: 'Adhésion annuelle',
    pricePer: 'par an',
    priceLede:
      'Une adhésion d’un an, renouvelable, pour vous et votre famille. Votre coordinateur vous accompagne partout dans le monde, 24h/24 et 7j/7.',
    memCta: 'Demander une adhésion',
    memNote: 'Les conditions de l’adhésion sont précisées lors de votre premier échange.',
    foundKicker: 'Le fondateur',
    foundRole: 'Co-fondateur, ABS VIP Consulting',
    foundP1:
      'ABS VIP Consulting est née d’une amitié d’enfance et d’une conviction partagée : offrir à chaque client un interlocuteur qui s’engage personnellement, de la première demande au dernier détail.',
    foundP2:
      'Relation, professionnalisme, efficacité : trois mots qui guident chaque mission, à Londres, à Paris et partout où nos membres en ont besoin.',
    foundSig: 'Votre interlocuteur, en personne.',
    foundWrite: 'Lui écrire',
    founderAlt: 'Portrait d’Abdoulaye, co-fondateur d’ABS VIP Consulting',
    contactKicker: 'Contact',
    contactA: 'Parlons de ce dont',
    contactEm: 'vous avez besoin',
    fName: 'Nom complet',
    fEmail: 'E-mail',
    fTel: 'Téléphone (facultatif)',
    fMsg: 'Votre demande',
    fConsent: 'J’accepte que ces informations soient utilisées pour me recontacter.',
    fSend: 'Envoyer ma demande',
    fOk: 'Merci. Votre messagerie s’ouvre pour finaliser l’envoi.',
    footTag:
      'Conciergerie privée et lifestyle management, entre Londres et Paris, pour une clientèle qui préfère consacrer son temps à l’essentiel.',
    footNav: 'Naviguer',
    footReach: 'Joindre',
    footFollow: 'Suivre',
    footLegal:
      '© 2026 ABS VIP Consulting. Société immatriculée en Angleterre et au Pays de Galles, n° 12366158.',
    brochKicker: 'Nos brochures',
    brochTitle1: 'Notre accompagnement,',
    brochTitle2: 'en détail',
    brochCta: 'Télécharger la brochure',
    brochDesc: 'Notre histoire, l’étendue de nos services et les modalités d’adhésion, présentées dans la brochure originale d’ABS VIP Consulting.',
    brochContact: 'Nous contacter',
    svcCta: 'Demander ce service',
    prev: 'Service précédent',
    next: 'Service suivant',
    more: 'En savoir plus',
    dialogClose: 'Fermer',
    lang: 'EN'
  },
  en: {
    menu: 'Menu',
    close: 'Close',
    become: 'Become a member',
    navAbout: 'About us',
    navServices: 'Services',
    navMethod: 'Our approach',
    navMembership: 'Membership',
    navFounder: 'The founder',
    navContact: 'Contact',
    heroKicker: 'Private concierge · London — Paris',
    heroL1: 'You ask.',
    heroL2: 'We orchestrate.',
    heroSub:
      'A personal coordinator, 24/7, for your schedule, your travel and your wishes, anywhere in the world.',
    heroCta2: 'Our services',
    heroCall: 'Whatever the hour, someone answers.',
    svcKicker: 'Our services',
    svcTitle1: 'Your next departure',
    svcTitle2: 'starts here.',
    svcLede:
      'A request that fits no box? That is often where we are most useful. Select a service to discover the details.',
    methKicker: 'Our approach',
    methTitle1: 'How we',
    methTitle2: 'work',
    methLede:
      'The membership lets us completely reorganise your week and set up recurring services. Everything else is settled with a simple call.',
    interest: 'What interests you',
    aboutKicker: 'About us',
    manifestoA:
      'Two childhood friends, one shared standard. Drawing on careers in luxury and personal assistance to celebrities, they founded ABS VIP Consulting on a conviction:',
    manifestoEm: 'true luxury is the time we give back to you.',
    emblemTitle: 'A house, an emblem',
    emblemP1:
      'The ABS monogram, framed by its scrolls, signs every brochure, every membership card and every exchange.',
    emblemP2:
      'Relationship, standards, efficiency: three words that guide every assignment, in London, in Paris and wherever our members need us.',
    talk: 'Let’s talk',
    medalAlt: 'ABS VIP Consulting medallion',
    memKicker: 'The circle',
    memTitleA: '',
    memTitleEm: 'Membership',
    cardFlip: 'Flip the membership card',
    cardTag: 'Lifestyle coordinator · Worldwide assistance',
    cardName: 'Your name',
    cardNo: 'Membership no. 9090-0001',
    cardAssist: 'Assistance 24/7',
    cardHint: 'Tap the card to flip it',
    offerA: 'One card,',
    offerEm: 'one number',
    offerB: 'to call.',
    priceLabel: 'Annual membership',
    pricePer: 'per year',
    priceLede:
      'A one-year, renewable membership for you and your family. Your coordinator is by your side anywhere in the world, 24/7.',
    memCta: 'Request a membership',
    memNote: 'The terms of membership are set out during your first conversation.',
    foundKicker: 'The founder',
    foundRole: 'Co-founder, ABS VIP Consulting',
    foundP1:
      'ABS VIP Consulting was born of a childhood friendship and a shared conviction: to give every client a contact who commits personally, from the first request to the last detail.',
    foundP2:
      'Relationship, professionalism, efficiency: three words that guide every assignment, in London, in Paris and wherever our members need us.',
    foundSig: 'Your contact, in person.',
    foundWrite: 'Write to him',
    founderAlt: 'Portrait of Abdoulaye, co-founder of ABS VIP Consulting',
    contactKicker: 'Contact',
    contactA: 'Let’s talk about what',
    contactEm: 'you need',
    fName: 'Full name',
    fEmail: 'Email',
    fTel: 'Phone (optional)',
    fMsg: 'Your request',
    fConsent: 'I agree that this information may be used to contact me back.',
    fSend: 'Send my request',
    fOk: 'Thank you. Your mail app is opening to finish sending.',
    footTag:
      'Private concierge and lifestyle management, between London and Paris, for clients who prefer to spend their time on what matters.',
    footNav: 'Navigate',
    footReach: 'Reach us',
    footFollow: 'Follow',
    footLegal:
      '© 2026 ABS VIP Consulting. Company registered in England and Wales, no. 12366158.',
    brochKicker: 'Our brochure',
    brochTitle1: 'Our service,',
    brochTitle2: 'in detail',
    brochCta: 'Download the brochure',
    brochDesc: 'Our story, the full range of our services and the membership terms, presented in the original ABS VIP Consulting brochure.',
    brochContact: 'Contact us',
    svcCta: 'Request this service',
    prev: 'Previous service',
    next: 'Next service',
    more: 'Learn more',
    dialogClose: 'Close',
    lang: 'FR'
  }
} as const;

export type UiKey = keyof (typeof ui)['fr'];

/** Traduction : lit `i18n.lang`, donc réactive dans les composants. */
export function t(key: UiKey): string {
  return ui[i18n.lang][key];
}
