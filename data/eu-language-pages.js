import { SITE_PHONE_DISPLAY, SITE_URL, SITE_WHATSAPP_URL } from '../lib/site';

/** Shared commercial facts. Language pages must not invent different prices. */
const PRODUCTS = {
  pvc: { href: '/vinyl-banners', price: '25.00', from: '€25' },
  rollup: { href: '/roll-up-banners-ireland', price: '80.00', from: '€80' },
  xxl: { href: '/extra-wide-roll-up-banners-ireland#quote-builder', price: '398.96', from: '€398.96' },
  fabric: { href: '/fabric-banner-stands-ireland', price: null, from: null },
  curved: { href: '/curved-banner-stands-ireland', price: null, from: null },
  popup: { href: '/pop-up-walls-ireland', price: '511.65', from: '€511.65' },
  stage: { href: '/stage-backdrop-banners-ireland', price: null, from: null },
  tables: { href: '/custom-table-covers-ireland', price: null, from: null },
  flags: { href: '/custom-printed-flags-ireland', price: null, from: null },
  cocktail: { href: '/products/cocktail-napkins', price: null, from: null },
  printed: { href: '/products/premium-linen-feel-napkins', price: null, from: null },
  linen: { href: '/products/premium-linen-feel-napkins', price: '0.24', from: '€0.24' },
  plain: { href: '/plain-napkins-tableware-ireland', price: '0.03', from: '€0.03' },
  wedding: { href: '/wedding-napkins-ireland', price: null, from: null },
  kraft: { href: '/wedding-kraft-napkins-ireland', price: null, from: null },
};

const CLUSTERS = {
  banners: {
    enPath: '/banners-ireland',
    family: 'Banners & Signage',
    accent: 'blue',
    hero: '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp',
    heroWide: true,
    productIds: ['pvc', 'rollup', 'xxl', 'fabric', 'curved', 'popup', 'stage', 'tables', 'flags'],
    primaryHref: '/quote?product=Vinyl+Banners',
  },
  napkins: {
    enPath: '/napkins-ireland',
    family: 'Napkins',
    accent: 'amber',
    hero: '/images/napkins/cocktail-napkin-salty-cod-ireland.webp',
    heroWide: true,
    productIds: ['cocktail', 'printed', 'linen', 'plain', 'wedding', 'kraft'],
    primaryHref: '/products/cocktail-napkins',
  },
  xxl: {
    enPath: '/extra-wide-roll-up-banners-ireland',
    family: 'Banners & Signage',
    accent: 'orange',
    hero: '/ifa/product/extra-wide-rollup/hero-standout-3m.jpg',
    heroWide: true,
    productIds: ['xxl', 'rollup', 'fabric', 'popup'],
    primaryHref: '/extra-wide-roll-up-banners-ireland#quote-builder',
  },
  stands: {
    enPath: '/fabric-banner-stands-ireland',
    family: 'Banners & Signage',
    accent: 'indigo',
    hero: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg',
    heroWide: true,
    productIds: ['fabric', 'curved', 'popup', 'rollup', 'xxl'],
    primaryHref: '/fabric-banner-stands-ireland',
  },
};

const LOCALES = {
  fr: {
    id: 'fr',
    htmlLang: 'fr',
    hreflang: 'fr',
    og: 'fr_FR',
    label: 'Français',
    homeLabel: 'Accueil',
    switchLabel: 'Langue',
    country: 'France',
    also: 'Belgique et Suisse',
  },
  de: {
    id: 'de',
    htmlLang: 'de',
    hreflang: 'de',
    og: 'de_DE',
    label: 'Deutsch',
    homeLabel: 'Start',
    switchLabel: 'Sprache',
    country: 'Deutschland',
    also: 'Österreich und der Schweiz',
  },
  es: {
    id: 'es',
    htmlLang: 'es',
    hreflang: 'es',
    og: 'es_ES',
    label: 'Español',
    homeLabel: 'Inicio',
    switchLabel: 'Idioma',
    country: 'España',
    also: 'otros países de habla hispana',
  },
};

const UI = {
  fr: {
    orderNote:
      'Les pages de commande sont en anglais. Vous pouvez rédiger votre message en français par e-mail ou WhatsApp : nous suivons le brief, et la réponse est en anglais.',
    faqHeading: 'Questions fréquentes',
    rangeHeading: 'La gamme',
    factsHeading: 'En bref',
    relatedHeading: 'Dans la même langue',
    proof: 'Un bon à tirer est envoyé avant l’impression.',
    printedIn: 'Imprimé à Ashbourne, Irlande',
    ctaSecondary: 'Page en anglais',
  },
  de: {
    orderNote:
      'Die Bestellseiten sind auf Englisch. Sie können die Anfrage auf Deutsch per E-Mail oder WhatsApp schicken. Wir arbeiten nach diesem Briefing und antworten auf Englisch.',
    faqHeading: 'Häufige Fragen',
    rangeHeading: 'Das Sortiment',
    factsHeading: 'Kurz gesagt',
    relatedHeading: 'Auf Deutsch',
    proof: 'Sie erhalten einen Proof vor dem Druck.',
    printedIn: 'Gedruckt in Ashbourne, Irland',
    ctaSecondary: 'Englische Seite',
  },
  es: {
    orderNote:
      'Las páginas de pedido están en inglés. Puede escribir el encargo en español por email o WhatsApp. Seguimos ese briefing y respondemos en inglés.',
    faqHeading: 'Preguntas frecuentes',
    rangeHeading: 'La gama',
    factsHeading: 'En resumen',
    relatedHeading: 'En el mismo idioma',
    proof: 'Enviamos una prueba antes de imprimir.',
    printedIn: 'Impreso en Ashbourne, Irlanda',
    ctaSecondary: 'Página en inglés',
  },
};

const COPY = {
  fr: {
    index: {
      slug: '',
      shortLabel: 'France',
      title: 'Banderoles et serviettes personnalisées pour la France | PrintNPack',
      description:
        'PrintNPack imprime banderoles PVC, roll-up XXL, banderoles avec support et serviettes personnalisées en Irlande, et les expédie en France. Devis en ligne.',
      keywords:
        'banderole publicitaire France, impression banderole, serviettes personnalisées, roll-up XXL, banderole avec support, kakemono, impression grand format',
      h1: 'Banderoles et serviettes pour la France',
      lead: 'PrintNPack est un imprimeur à Ashbourne, en Irlande. Nous produisons des banderoles de tous types, des kakemonos XXL, des banderoles avec support et des serviettes personnalisées, puis nous les expédions en France, en Belgique et en Suisse. Le port est confirmé avec le devis.',
    },
    banners: {
      slug: 'impression-banderoles',
      shortLabel: 'Banderoles',
      title: 'Impression de banderoles | PVC, roll-up et grand format | France',
      description:
        'Impression de banderoles pour la France : bâche PVC dès 25 €, roll-up avec cassette dès 80 €, XXL 2 m et supports tissu. Imprimé en Irlande, expédié dans l’UE. Dès 1 pièce.',
      keywords:
        'impression banderole, banderole publicitaire, banderole PVC, bâche publicitaire, roll-up, kakemono, oriflamme, impression grand format France, banderole sur mesure',
      eyebrow: 'Banderoles, tous types',
      h1: 'Impression de banderoles pour la France',
      heroAlt: 'Banderole publicitaire imprimée par PrintNPack, expédiée depuis l’Irlande',
      lead: 'PrintNPack imprime des banderoles publicitaires à Ashbourne, en Irlande, et les expédie en France. Bâche PVC dès 25 €, roll-up avec cassette dès 80 €, kakemono XXL de 2 mètres de large, et banderole avec support en tissu tendu. Une seule pièce suffit. Délai habituel : 3 à 5 jours ouvrés après validation du visuel.',
      cta: 'Demander un devis',
      sections: [
        {
          heading: 'Quelle banderole choisir ?',
          paragraphs: [
            'La bâche PVC 510 g/m², ourlée et œilletée, convient aux vitrines, façades, grilles et chantiers. En cas de vent, la maille PVC laisse passer l’air. Le roll-up (kakemono) est un affichage intérieur portable : le visuel se range dans une cassette lourde, livrée avec le premier exemplaire. Une réimpression seule part de 35 € si vous avez déjà la cassette.',
            'Pour un stand de salon, passez au roll-up extra-large de 200 cm de large, ou à une banderole avec support : tissu tendu sur cadre aluminium, droit ou courbé, de 2,5 à 6 m. Les fonds de scène polyester se font sur mesure, jusqu’à 50 m. Housses de table et drapeaux complètent le même envoi.',
          ],
        },
        {
          heading: 'Commande depuis la France',
          paragraphs: [
            'Indiquez le type, le format fini et la quantité. Envoyez le logo en PDF, AI ou PNG net. Nous préparons un bon à tirer avant d’imprimer. L’atelier est à Ashbourne, comté de Meath. L’envoi vers la France est intra-UE ; les frais de port sont chiffrés avec le devis, ils ne sont pas inclus dans le prix de la bâche.',
            'Même gamme pour la Belgique et la Suisse francophones. Les pages produit détaillées restent en anglais : le configurateur y calcule le format. Votre message peut être en français.',
          ],
        },
      ],
      facts: [
        { label: 'PVC', value: 'Dès 25 €, dès 1 pièce' },
        { label: 'Roll-up', value: 'Dès 80 € avec cassette' },
        { label: 'Réimpression', value: 'Dès 35 €' },
        { label: 'XXL', value: '200 cm de large, dès 398,96 €' },
        { label: 'Extérieur', value: 'PVC 510 g/m², ou maille si vent' },
        { label: 'Délai', value: '3 à 5 jours ouvrés après BAT' },
        { label: 'Expédition', value: 'France, port confirmé au devis' },
      ],
      products: {
        pvc: { title: 'Bâches PVC', desc: 'Extérieur, œillets et ourlets, formats sur mesure. Vitrines, événements, grilles.' },
        rollup: { title: 'Roll-up / kakemono', desc: 'Dès 80 € avec cassette lourde. Réimpression du visuel dès 35 €.' },
        xxl: { title: 'Roll-up XXL', desc: '200 cm de large, jusqu’à 3 m de haut. Support Silver XL inclus.' },
        fabric: { title: 'Banderole avec support', desc: 'Tissu tendu sur cadre aluminium droit. Kit complet ou visuel seul.' },
        curved: { title: 'Support courbé', desc: 'Mur tissu en arc, visible de côté. 3 à 5 m.' },
        popup: { title: 'Mur pop-up', desc: 'Stand parapluie droit ou courbé, dès 489,30 € HT.' },
        stage: { title: 'Fond de scène', desc: 'Polyester grand format, du 3 × 3 m jusqu’à 50 m.' },
        tables: { title: 'Housses de table', desc: 'Nappes imprimées pour salons, jusqu’à 1,5 × 6 m.' },
        flags: { title: 'Drapeaux', desc: 'Sublimation, dès 1 pièce, œillets ou fourreau.' },
      },
      faqs: [
        { q: 'Imprimez-vous des banderoles livrées en France ?', a: 'Oui. PrintNPack imprime à Ashbourne, en Irlande, et expédie en France, en Belgique et en Suisse. Le port est confirmé avec le devis. L’envoi Irlande–France reste dans l’UE.' },
        { q: 'Quel est le prix d’une banderole ?', a: 'Les bâches PVC partent d’environ 25 €. Un roll-up complet avec cassette part de 80 €. Une réimpression de visuel part de 35 €. Un roll-up XXL de 2 m de large part de 398,96 €, jusqu’à 450 € pour 200 × 300 cm. Le devis dépend du format.' },
        { q: 'Peut-on commander une seule banderole ?', a: 'Oui. Il n’y a pas de minimum sur les banderoles PVC, les roll-up et les XXL. Un seul visuel pour une vitrine, un salon ou un chantier est accepté.' },
        { q: 'Quelle matière pour l’extérieur ?', a: 'PVC 510 g/m² avec ourlet et œillets pour la plupart des usages extérieurs. Maille PVC pour les grilles et les zones exposées au vent.' },
        { q: 'Le roll-up est-il livré avec le support ?', a: 'Le premier roll-up est livré avec la cassette. Si vous avez déjà le pied, commandez seulement la réimpression, dès 35 €. Les modèles XXL incluent le pied Silver XL et un sac de transport.' },
        { q: 'En combien de temps est-ce imprimé ?', a: 'Le délai courant est de 3 à 5 jours ouvrés après validation du bon à tirer. Un délai plus court est parfois possible : indiquez la date.' },
      ],
    },
    napkins: {
      slug: 'serviettes-personnalisees',
      shortLabel: 'Serviettes',
      title: 'Serviettes personnalisées | Cocktail, restaurant et mariage | France',
      description:
        'Serviettes en papier personnalisées pour la France. Cocktail 10 × 10 cm dès 50 pièces, serviettes effet lin dès 0,24 €. Imprimées en Irlande, livrées dans l’UE.',
      keywords:
        'serviettes personnalisées, serviettes en papier avec logo, serviettes cocktail, serviettes de table imprimées, serviettes mariage, serviettes restaurant, airlaid, impression serviettes France',
      eyebrow: 'Serviettes, tous types',
      h1: 'Serviettes personnalisées pour la France',
      heroAlt: 'Serviette cocktail imprimée avec un logo de restaurant',
      lead: 'PrintNPack imprime des serviettes personnalisées à Ashbourne, en Irlande, pour les restaurants, bars, hôtels et mariages en France. Serviette cocktail blanche, 10 × 10 cm fermée et 20 × 40 cm ouverte, dès 50 pièces. Serviettes effet lin dès 0,24 €, dès 25 pièces. Le prix dépend de la quantité et du motif. Le port vers la France est chiffré avec le devis.',
      cta: 'Voir les serviettes cocktail',
      sections: [
        {
          heading: 'Quel format de serviette ?',
          paragraphs: [
            'La serviette cocktail, 10 × 10 cm fermée, se place sous un verre au bar, en apéritif ou au vin d’honneur. Ouverte, elle mesure 20 × 40 cm. Le minimum est de 50 pièces : logo pour un café, ou prénoms et date pour un mariage. Gardez le motif au centre, un filet trop près du bord peut être coupé.',
            'Au service, la serviette déjeuner 33 cm 2 plis est le format le plus utilisé en café et en brasserie. Le 40 cm couvre l’hôtel, la gastronomie et le repas de mariage. L’airlaid effet lin donne le tombé d’un tissu, sans blanchisserie. Le kraft écru non blanchi convient aux mariages et aux tables qui veulent un papier recyclé visible.',
          ],
        },
        {
          heading: 'Restaurants, mariages et envoi',
          paragraphs: [
            'Les serviettes effet lin partent de 25 pièces, dès 0,24 €. Le prix dépend de la quantité et du motif. Les serviettes blanches sans impression se commandent à la caisse, dès environ 0,03 €, pour les gros volumes. Le papier de soie couleur, 500 × 750 mm, est vendu par boîte de 480 feuilles.',
            'Nous imprimons en Irlande et expédions en France, en Belgique et en Suisse. Comptez le transport dans le devis, surtout pour un mariage daté : passez commande trois à quatre semaines avant. Les fiches produit sont en anglais.',
          ],
        },
      ],
      facts: [
        { label: 'Cocktail', value: '10 × 10 cm fermé, dès 50' },
        { label: 'Ouverte', value: '20 × 40 cm' },
        { label: 'Effet lin', value: 'Dès 0,24 €, dès 25' },
        { label: 'Quantité', value: 'Dès 25 pièces' },
        { label: 'Sans impression', value: 'Dès environ 0,03 € à la caisse' },
        { label: 'Déjeuner / dîner', value: '33 cm et 40 cm' },
        { label: 'Expédition', value: 'France, port au devis' },
      ],
      products: {
        cocktail: { title: 'Serviettes cocktail', desc: 'Blanches, 10 × 10 cm fermées. Logo ou faire-part. Dès 50.' },
        printed: { title: 'Serviettes papier logo', desc: '10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 et 20 × 20 cm. Dès 25 pièces, prix sur devis.' },
        linen: { title: 'Effet lin', desc: 'Dès 0,24 €. Le prix dépend de la quantité et du motif. Dès 25 pièces.' },
        plain: { title: 'Serviettes en gros', desc: 'Blanches sans impression, à la caisse. Dès environ 0,03 €.' },
        wedding: { title: 'Serviettes de mariage', desc: 'Prénoms, date ou monogramme sur papier ou effet lin.' },
        kraft: { title: 'Kraft mariage', desc: 'Papier écru non blanchi, noms ou monogramme.' },
      },
      faqs: [
        { q: 'Livrez-vous des serviettes personnalisées en France ?', a: 'Oui. Elles sont imprimées à Ashbourne, en Irlande, et expédiées en France, en Belgique et en Suisse. Le port est confirmé sur le devis. L’envoi reste dans l’UE.' },
        { q: 'Quel est le minimum pour des serviettes cocktail ?', a: '50 pièces. Fermées, elles mesurent 10 × 10 cm. Ouvertes, 20 × 40 cm. Convient à un bar, un restaurant ou un vin d’honneur.' },
        { q: 'Quel est le prix d’une serviette avec logo ?', a: 'Les serviettes effet lin partent de 0,24 €. Le prix dépend de la quantité et du motif. Minimum 25 pièces. Le cocktail personnalisé part de 50 pièces.' },
        { q: 'Quelle taille pour un restaurant ?', a: 'Le 33 cm 2 plis couvre le café et la brasserie. Le cocktail va sous le verre. Le 40 cm va à l’hôtel, à la gastronomie et au dîner de mariage.' },
        { q: 'Peut-on imprimer un mariage ?', a: 'Oui. Prénoms, date ou monogramme, sur papier blanc, effet lin ou kraft écru. Commandez trois à quatre semaines avant la date. Le port vers le lieu en France est au devis.' },
        { q: 'Les serviettes sans logo existent-elles ?', a: 'Oui. Serviettes blanches en gros, à la caisse, dès environ 0,03 €, pour la restauration à fort volume.' },
      ],
    },
    xxl: {
      slug: 'banderoles-xxl',
      shortLabel: 'XXL',
      title: 'Roll-up XXL 2 mètres | Banderole extra-large | France',
      description:
        'Roll-up XXL pour la France : 200 cm de large, XL, XXL et XXXL jusqu’à 3 m. Dès 398,96 € avec pied Silver XL. Impression UV, tissu Airtex 330, classe B1. Dès 1 pièce.',
      keywords:
        'roll-up XXL, kakemono XXL, banderole extra large, roll-up 2 mètres, kakemono 200 cm, roll up salon, banderole 3 mètres, impression roll-up France',
      eyebrow: 'Banderoles XXL',
      h1: 'Roll-up XXL de 2 mètres pour la France',
      heroAlt: 'Roll-up extra-large de 2 mètres de large avec pied Silver XL',
      lead: 'Un roll-up XXL PrintNPack mesure 200 cm de large, soit le double d’un kakemono classique. Trois hauteurs : XL 200 × 200 cm à 398,96 €, XXL 200 × 250 cm à 418,49 €, XXXL 200 × 300 cm à 450 €. Chaque prix inclut le pied Silver XL, le sac de transport et l’impression UV recto sur Airtex 330, classé B1. Dès une pièce, expédié en France.',
      cta: 'Configurer le XXL',
      sections: [
        {
          heading: 'XL, XXL et XXXL',
          paragraphs: [
            'La largeur est toujours 200 cm, pour aligner plusieurs kakemonos en un seul fond de stand. Le XL (200 × 200 cm) tient un petit stand ou une arcade. Le XXL (200 × 250 cm) couvre un hall plus haut. Le XXXL (200 × 300 cm) est le fond de 3 mètres pour un salon, un lancement ou une scène intérieure. Deux personnes sont utiles pour monter le 3 m.',
            'Le visuel rentre dans la cassette Silver XL. On déploie la tige, on clippe la barre haute, la tension fait le reste. Une notice part avec la commande. Ce format est intérieur : le PVC extérieur et les roll-up étroits (dès 80 €) sont d’autres produits.',
          ],
        },
        {
          heading: 'Salon en France',
          paragraphs: [
            'Ces kakemonos partent de l’atelier d’Ashbourne vers les parcs d’exposition en France, en Belgique et en Suisse. Le prix affiché est le produit, pas le transport : le port d’un colis de cette taille est confirmé au devis. Commande dès 1 pièce. Beaucoup de stands prennent un XXXL, puis ajoutent un XL ou un XXL pour un mur continu.',
            'Fichier en PDF ou AI, bords perdus compris. Bon à tirer avant impression. Le configurateur en anglais est sur la page XXL : choisissez XL, XXL ou XXXL et le pied Silver XL.',
          ],
        },
      ],
      facts: [
        { label: 'Largeur', value: '200 cm sur les trois tailles' },
        { label: 'XL', value: '200 × 200 cm — 398,96 €' },
        { label: 'XXL', value: '200 × 250 cm — 418,49 €' },
        { label: 'XXXL', value: '200 × 300 cm — 450 €' },
        { label: 'Inclus', value: 'Pied Silver XL, sac, impression UV' },
        { label: 'Matière', value: 'Airtex 330, B1, intérieur' },
        { label: 'Minimum', value: '1 pièce' },
      ],
      products: {
        xxl: { title: 'Choisir XL, XXL ou XXXL', desc: 'Configurateur : 200 × 200, 200 × 250 ou 200 × 300 cm.' },
        rollup: { title: 'Roll-up standard', desc: 'Plus étroit, dès 80 € avec cassette, si 2 m est trop large.' },
        fabric: { title: 'Mur tissu', desc: 'Cadre aluminium au-delà du kakemono, jusqu’à 6 m.' },
        popup: { title: 'Mur pop-up', desc: 'Stand courbe ou droit, dès 489,30 € HT.' },
      },
      faqs: [
        { q: 'Qu’est-ce qu’un roll-up XXL ?', a: 'C’est un kakemono intérieur de 200 cm de large, environ le double d’un roll-up standard. PrintNPack propose XL 200 × 200 cm, XXL 200 × 250 cm et XXXL 200 × 300 cm, avec pied Silver XL et sac.' },
        { q: 'Quel est le prix livré en France ?', a: 'Le produit : 398,96 € en XL, 418,49 € en XXL, 450 € en XXXL, pied et impression inclus. Le port vers la France est en plus et confirmé au devis.' },
        { q: 'Peut-on n’en commander qu’un ?', a: 'Oui. Le minimum est d’une pièce. Un seul XXXL suffit pour un salon, et des XL ou XXL peuvent suivre pour élargir le mur.' },
        { q: 'Est-ce utilisable dehors ?', a: 'Non. L’Airtex 330 et le classement B1 visent les halls, salons et halls d’accueil. Pour l’extérieur, prenez une bâche PVC.' },
        { q: 'Comment ça se monte ?', a: 'Le visuel sort de la cassette Silver XL. On déploie la tige, on fixe la barre du haut, la cassette tend le panneau. Une notice est jointe. À deux pour le XXXL de 3 m.' },
        { q: 'Livrez-vous un parc expo en France ?', a: 'Oui, depuis Ashbourne, Irlande, vers une adresse en France, en Belgique ou en Suisse. Le transport est chiffré avec la commande.' },
      ],
    },
    stands: {
      slug: 'banderoles-avec-support',
      shortLabel: 'Avec support',
      title: 'Banderole avec support | Cadre tissu et mur d’image | France',
      description:
        'Banderole avec support pour la France : tissu tendu sur cadre aluminium, droit ou courbé, 2,5 à 6 m. Kit complet ou visuel seul. Roll-up avec cassette dès 80 €. Expédition UE.',
      keywords:
        'banderole avec support, stand parapluie, mur d’image, cadre aluminium tissu tendu, stand tissu, baner avec structure, photocall tissu, roll-up avec pied, mur de stand France',
      eyebrow: 'Banderoles avec support',
      h1: 'Banderoles avec support pour la France',
      heroAlt: 'Banderole tissu tendu sur cadre aluminium pour un stand d’exposition',
      lead: 'Une banderole avec support, c’est un visuel tenu par une structure, pas une bâche à œillets. PrintNPack fournit le tissu tendu sur cadre aluminium droit (mur d’image), le cadre courbé, le mur pop-up dès 489,30 € HT, et le roll-up dont la cassette est le support, dès 80 €. Impression en Irlande, envoi en France.',
      cta: 'Voir le cadre tissu',
      sections: [
        {
          heading: 'Cadre droit, cadre courbé, cassette',
          paragraphs: [
            'Le nom commercial du cadre droit est « straight stretch » ou mur textile. En français on cherche aussi banderole avec structure, mur d’image ou stand tissu. Formats courants : 250 × 228 cm, 300 × 230 cm, 400 × 230 cm, 500 × 230 cm et 600 × 230 cm. Kit complet (cadre + visuel) ou visuel seul si le cadre existe déjà. Simple ou double face.',
            'Le cadre courbé enroule le visuel : on le voit de côté dans une allée de salon. Le roll-up est plus étroit et se range dans une cassette. Le pop-up est un mur magnétique ou textile, droit ou courbé, dès 489,30 € HT. Le XXL 2 m est un roll-up large avec pied Silver XL, pas un cadre.',
          ],
        },
        {
          heading: 'Réimprimer sans racheter le cadre',
          paragraphs: [
            'Choisissez « visuel seul » si vous avez déjà la structure. Envoyez les cotes du cadre si ce n’est pas un format standard. Le tissu se change d’un salon à l’autre, le cadre reste.',
            'Livraison depuis Ashbourne vers la France, la Belgique et la Suisse. Le port d’un cadre est chiffré à part. La page de devis du cadre est en anglais ; le message peut être en français, avec largeur, hauteur et recto ou recto-verso.',
          ],
        },
      ],
      facts: [
        { label: 'Cadre droit', value: '250 à 600 cm de large, haut. ~230 cm' },
        { label: 'Cadre courbé', value: '3 à 5 m, kit ou visuel seul' },
        { label: 'Pop-up', value: 'Dès 489,30 € HT' },
        { label: 'Roll-up + cassette', value: 'Dès 80 €' },
        { label: 'XXL + pied', value: 'Dès 398,96 €, 200 cm de large' },
        { label: 'Réassort', value: 'Visuel seul, cadre conservé' },
        { label: 'Expédition', value: 'France, port au devis' },
      ],
      products: {
        fabric: { title: 'Cadre droit', desc: 'Tissu tendu, mur d’image. Kit ou visuel de remplacement.' },
        curved: { title: 'Cadre courbé', desc: 'Visible dans l’allée. 3 à 5 m.' },
        popup: { title: 'Mur pop-up', desc: 'Droit ou courbé, dès 489,30 € HT. Option LED selon devis.' },
        rollup: { title: 'Roll-up avec cassette', desc: 'Le support est la cassette. Dès 80 €, réimpression dès 35 €.' },
        xxl: { title: 'XXL avec pied Silver XL', desc: '200 cm de large. Le pied est inclus dans le prix.' },
      },
      faqs: [
        { q: 'Qu’est-ce qu’une banderole avec support ?', a: 'C’est un visuel imprimé monté sur une structure : cadre aluminium et tissu tendu, mur courbé, pop-up, ou roll-up dont la cassette sert de pied. Ce n’est pas une bâche PVC à œillets.' },
        { q: 'Peut-on ne racheter que le visuel ?', a: 'Oui pour les cadres tissu, droits ou courbés. Indiquez les mesures du cadre existant s’il n’est pas standard. Le roll-up se réimprime dès 35 € si vous gardez la cassette.' },
        { q: 'Quelle différence avec un roll-up ?', a: 'Le roll-up est un panneau étroit qui s’enroule dans une cassette. La banderole avec cadre étire un tissu sur une structure plus large et plus plate, réutilisable d’un salon à l’autre.' },
        { q: 'Quels formats de cadre ?', a: '250 × 228, 300 × 230, 400 × 230, 500 × 230 et 600 × 230 cm pour le droit. Hauteur typique autour de 2,3 m. Le courbé va d’environ 3 à 5 m. Autres formats sur devis.' },
        { q: 'Livrez-vous le support en France ?', a: 'Oui, cadre, pop-up ou roll-up, depuis l’Irlande vers la France, la Belgique et la Suisse. Le port est confirmé avec le devis.' },
        { q: 'Le pop-up inclut-il la livraison en France ?', a: 'Le prix dès 489,30 € HT est celui du stand. La livraison en France est chiffrée en plus. En Irlande, certaines offres incluent la livraison : ce n’est pas le même calcul pour l’UE.' },
      ],
    },
  },
  de: {
    index: {
      slug: '',
      shortLabel: 'Deutschland',
      title: 'Werbebanner und Servietten mit Logo für Deutschland | PrintNPack',
      description:
        'PrintNPack druckt PVC-Banner, XXL-Roll-ups, Banner mit Gestell und Servietten mit Logo in Irland und liefert nach Deutschland. Angebot auf Anfrage.',
      keywords:
        'Werbebanner Deutschland, Banner drucken, Servietten bedrucken, XXL Roll-up, Banner mit Gestell, Rollup, Textilspannrahmen',
      h1: 'Banner und Servietten für Deutschland',
      lead: 'PrintNPack druckt in Ashbourne, Irland. Wir produzieren Werbebanner aller Art, XXL-Roll-ups, Banner mit Gestell und bedruckte Servietten und liefern nach Deutschland, Österreich und in die Schweiz. Der Versand wird mit dem Angebot bestätigt.',
    },
    banners: {
      slug: 'bannerdruck',
      shortLabel: 'Banner',
      title: 'Bannerdruck | PVC, Roll-up und Großformat | Deutschland',
      description:
        'Bannerdruck für Deutschland: PVC-Banner ab 25 €, Roll-up mit Kassette ab 80 €, XXL mit 2 m Breite und Textilbanner mit Gestell. Gedruckt in Irland, Versand in der EU. Ab 1 Stück.',
      keywords:
        'Banner drucken, Werbebanner, PVC Banner, Bannerdruck Deutschland, Roll-up Banner, Rollup, Spannbanner, Großformatdruck, Banner nach Maß',
      eyebrow: 'Banner, alle Arten',
      h1: 'Bannerdruck für Deutschland',
      heroAlt: 'Bedrucktes Werbebanner von PrintNPack, Versand aus Irland',
      lead: 'PrintNPack druckt Werbebanner in Ashbourne, Irland, und liefert nach Deutschland. PVC-Banner ab 25 €, Roll-up mit Kassette ab 80 €, XXL-Roll-up mit 2 m Breite und Textilbanner mit Aluminiumgestell. Ab 1 Stück. Üblich sind 3–5 Werktage nach Freigabe der Druckdaten.',
      cta: 'Angebot anfragen',
      sections: [
        {
          heading: 'Welches Banner passt?',
          paragraphs: [
            'PVC mit 510 g/m², Saum und Ösen eignet sich für Schaufenster, Fassaden, Bauzäune und Gerüste. Bei Wind lässt Mesh-PVC die Luft durch. Ein Roll-up ist ein tragbares Innendisplay: das Motiv verschwindet in einer schweren Kassette, die beim ersten Exemplar dabei ist. Ein reiner Nachdruck beginnt bei 35 €, wenn die Kassette schon da ist.',
            'Für eine Messestandwand eignet sich das 200 cm breite XXL-Roll-up oder ein Banner mit Gestell: Spanntuch auf geradem oder gebogenem Alurahmen, etwa 2,5 bis 6 m. Polyester-Bühnenhintergründe gibt es nach Maß, bis 50 m. Tischhusen und Fahnen gehen in derselben Lieferung mit.',
          ],
        },
        {
          heading: 'Bestellung aus Deutschland',
          paragraphs: [
            'Nennen Sie Art, Endformat und Menge. Logo als PDF, AI oder scharfes PNG. Sie bekommen einen Proof vor dem Druck. Die Druckerei steht in Ashbourne, County Meath. Der Versand nach Deutschland bleibt innerhalb der EU. Die Fracht steht nicht im Bannerpreis, sie wird mit dem Angebot genannt.',
            'Dieselbe Auswahl gilt für Österreich und die Schweiz. Die ausführlichen Produktseiten sind auf Englisch, dort rechnet der Konfigurator das Format. Die Anfrage selbst kann auf Deutsch sein.',
          ],
        },
      ],
      facts: [
        { label: 'PVC', value: 'Ab 25 €, ab 1 Stück' },
        { label: 'Roll-up', value: 'Ab 80 € mit Kassette' },
        { label: 'Nachdruck', value: 'Ab 35 €' },
        { label: 'XXL', value: '200 cm breit, ab 398,96 €' },
        { label: 'Außen', value: 'PVC 510 g/m², Mesh bei Wind' },
        { label: 'Zeit', value: '3–5 Werktage nach Freigabe' },
        { label: 'Versand', value: 'Deutschland, Fracht im Angebot' },
      ],
      products: {
        pvc: { title: 'PVC-Banner', desc: 'Außen, Ösen und Saum, Maßformate. Schaufenster, Events, Zäune.' },
        rollup: { title: 'Roll-up', desc: 'Ab 80 € mit schwerer Kassette. Motiv-Nachdruck ab 35 €.' },
        xxl: { title: 'XXL-Roll-up', desc: '200 cm breit, bis 3 m hoch. Silver-XL-Fuß ist enthalten.' },
        fabric: { title: 'Banner mit Gestell', desc: 'Spanntuch auf geradem Alurahmen. Komplettset oder nur Druck.' },
        curved: { title: 'Gebogenes Gestell', desc: 'Gewölbte Textilwand, von der Seite sichtbar. 3–5 m.' },
        popup: { title: 'Pop-up-Wand', desc: 'Gerade oder gebogen, ab 489,30 € zzgl. MwSt.' },
        stage: { title: 'Bühnenhintergrund', desc: 'Polyester im Großformat, von 3 × 3 m bis 50 m.' },
        tables: { title: 'Tischhusen', desc: 'Bedruckte Messehussen, bis 1,5 × 6 m.' },
        flags: { title: 'Fahnen', desc: 'Sublimation, ab 1 Stück, Ösen oder Hohlsaum.' },
      },
      faqs: [
        { q: 'Drucken Sie Banner mit Lieferung nach Deutschland?', a: 'Ja. PrintNPack druckt in Ashbourne, Irland, und versendet nach Deutschland, Österreich und in die Schweiz. Die Fracht wird mit dem Angebot bestätigt. Der Versand Irland–Deutschland bleibt in der EU.' },
        { q: 'Was kostet ein Werbebanner?', a: 'PVC-Banner beginnen bei etwa 25 €. Ein Roll-up mit Kassette beginnt bei 80 €. Ein Motiv-Nachdruck beginnt bei 35 €. Ein 2 m breites XXL-Roll-up beginnt bei 398,96 €, bis 450 € für 200 × 300 cm. Der Preis hängt vom Format ab.' },
        { q: 'Kann ich ein einzelnes Banner bestellen?', a: 'Ja. PVC, Roll-up und XXL haben keine Mindestmenge. Ein Motiv für Schaufenster, Messe oder Baustelle reicht.' },
        { q: 'Welches Material für draußen?', a: 'PVC 510 g/m² mit Saum und Ösen für die meisten Außeneinsätze. Mesh-PVC für Zäune und windige Stellen.' },
        { q: 'Ist das Gestell beim Roll-up dabei?', a: 'Das erste Roll-up kommt mit Kassette. Wenn Sie den Fuß schon haben, bestellen Sie nur den Nachdruck, ab 35 €. XXL-Modelle enthalten den Silver-XL-Fuß und eine Tragetasche.' },
        { q: 'Wie schnell wird gedruckt?', a: 'Üblich sind 3–5 Werktage nach Freigabe des Proofs. Kürzer geht manchmal: nennen Sie das Datum.' },
      ],
    },
    napkins: {
      slug: 'servietten-bedrucken',
      shortLabel: 'Servietten',
      title: 'Servietten bedrucken | Cocktail, Restaurant und Hochzeit | Deutschland',
      description:
        'Papierservietten mit Logo für Deutschland. Cocktailservietten 10 × 10 cm ab 50 Stück, Servietten in Leinenoptik ab 0,24 €. Gedruckt in Irland, Versand in der EU.',
      keywords:
        'Servietten bedrucken, Papierservietten mit Logo, Cocktailservietten, Servietten personalisiert, Hochzeitsservietten, Restaurant Servietten, Airlaid, Serviettendruck Deutschland',
      eyebrow: 'Servietten, alle Arten',
      h1: 'Servietten bedrucken für Deutschland',
      heroAlt: 'Bedruckte Cocktailserviette mit Restaurantlogo',
      lead: 'PrintNPack bedruckt Servietten in Ashbourne, Irland, für Restaurants, Bars, Hotels und Hochzeiten in Deutschland. Weiße Cocktailserviette, geschlossen 10 × 10 cm und offen 20 × 40 cm, ab 50 Stück. Servietten in Leinenoptik ab 0,24 €, ab 25 Stück. Der Preis hängt von Menge und Motiv ab. Der Versand nach Deutschland wird im Angebot genannt.',
      cta: 'Cocktailservietten ansehen',
      sections: [
        {
          heading: 'Welches Serviettenformat?',
          paragraphs: [
            'Die Cocktailserviette, geschlossen 10 × 10 cm, liegt unter dem Glas an der Bar, zum Aperitif oder zum Sektempfang. Offen misst sie 20 × 40 cm. Mindestens 50 Stück: Logo für ein Café, oder Namen und Datum für eine Hochzeit. Das Motiv bleibt in der Mitte, ein Rand zu weit außen kann abgeschnitten werden.',
            'Im Service ist die 33-cm-Lunchserviette, 2-lagig, das übliche Format für Café und Restaurant. 40 cm gilt für Hotel, Fine Dining und das Hochzeitsessen. Airlaid in Leinenoptik fällt wie Stoff, ohne Wäscherei. Ungebleichtes Kraftpapier passt zu Hochzeiten und Tischen, die Recyclingpapier zeigen wollen.',
          ],
        },
        {
          heading: 'Gastronomie, Hochzeit, Versand',
          paragraphs: [
            'Servietten in Leinenoptik starten bei 25 Stück, ab 0,24 €. Der Preis hängt von Menge und Motiv ab. Weiße Servietten ohne Druck gibt es im Karton, ab etwa 0,03 €, für hohe Mengen. Farbiges Seidenpapier, 500 × 750 mm, kommt mit 480 Bogen je Karton.',
            'Wir drucken in Irland und liefern nach Deutschland, Österreich und in die Schweiz. Die Fracht gehört ins Angebot, besonders bei einem festen Hochzeitstermin: drei bis vier Wochen vorher bestellen. Die Produktseiten sind auf Englisch.',
          ],
        },
      ],
      facts: [
        { label: 'Cocktail', value: '10 × 10 cm geschlossen, ab 50' },
        { label: 'Offen', value: '20 × 40 cm' },
        { label: 'Leinenoptik', value: 'Ab 0,24 €, ab 25' },
        { label: 'Menge', value: 'Ab 25 Stück' },
        { label: 'Unbedruckt', value: 'Ab etwa 0,03 € im Karton' },
        { label: 'Lunch / Dinner', value: '33 cm und 40 cm' },
        { label: 'Versand', value: 'Deutschland, Fracht im Angebot' },
      ],
      products: {
        cocktail: { title: 'Cocktailservietten', desc: 'Weiß, 10 × 10 cm geschlossen. Logo oder Namen. Ab 50.' },
        printed: { title: 'Papierservietten mit Logo', desc: '10 × 10 cm Cocktail, 10 × 20, 12 × 20, 15 × 20 und 20 × 20 cm. Ab 25 Stück, Preis auf Anfrage.' },
        linen: { title: 'Leinenoptik', desc: 'Ab 0,24 €. Der Preis hängt von Menge und Motiv ab. Ab 25 Stück.' },
        plain: { title: 'Servietten im Karton', desc: 'Weiß, ohne Druck. Ab etwa 0,03 €.' },
        wedding: { title: 'Hochzeitsservietten', desc: 'Namen, Datum oder Monogramm auf Papier oder Airlaid.' },
        kraft: { title: 'Kraft, Hochzeit', desc: 'Ungebleichtes Papier, Namen oder Monogramm.' },
      },
      faqs: [
        { q: 'Liefern Sie bedruckte Servietten nach Deutschland?', a: 'Ja. Sie werden in Ashbourne, Irland, gedruckt und nach Deutschland, Österreich und in die Schweiz versendet. Die Fracht steht im Angebot. Der Versand bleibt in der EU.' },
        { q: 'Wie viele Cocktailservietten sind das Minimum?', a: '50 Stück. Geschlossen 10 × 10 cm, offen 20 × 40 cm. Für Bar, Restaurant oder Empfang.' },
        { q: 'Was kostet eine Serviette mit Logo?', a: 'Servietten in Leinenoptik beginnen bei 0,24 €. Der Preis hängt von Menge und Motiv ab. Minimum 25 Stück. Personalisierte Cocktailservietten gibt es ab 50 Stück.' },
        { q: 'Welche Größe für ein Restaurant?', a: '33 cm, 2-lagig, für Café und Alltag. Cocktail unter dem Glas. 40 cm für Hotel, Fine Dining und das Hochzeitsessen.' },
        { q: 'Geht eine Hochzeit?', a: 'Ja. Namen, Datum oder Monogramm auf Weiß, Leinenoptik oder Kraft. Drei bis vier Wochen vor dem Termin bestellen. Die Fracht zur Location in Deutschland wird angeboten.' },
        { q: 'Gibt es Servietten ohne Logo?', a: 'Ja. Weiße Großmengen im Karton, ab etwa 0,03 €, für viel Frequenz in der Gastronomie.' },
      ],
    },
    xxl: {
      slug: 'xxl-rollup-banner',
      shortLabel: 'XXL',
      title: 'XXL-Roll-up 2 Meter | Extra breites Banner | Deutschland',
      description:
        'XXL-Roll-up für Deutschland: 200 cm breit, XL, XXL und XXXL bis 3 m. Ab 398,96 € mit Silver-XL-Fuß. UV-Druck, Airtex 330, B1. Ab 1 Stück.',
      keywords:
        'XXL Roll-up, extra breites Roll-up, Rollup 2 Meter, 200 cm Roll-up, Messe Roll-up, Roll-up 3 Meter, XXL Banner Deutschland',
      eyebrow: 'XXL-Banner',
      h1: 'XXL-Roll-up mit 2 Metern Breite für Deutschland',
      heroAlt: 'Extra breites Roll-up, 2 Meter breit, mit Silver-XL-Fuß',
      lead: 'Ein XXL-Roll-up von PrintNPack ist 200 cm breit, etwa doppelt so breit wie ein normales Roll-up. Drei Höhen: XL 200 × 200 cm für 398,96 €, XXL 200 × 250 cm für 418,49 €, XXXL 200 × 300 cm für 450 €. Im Preis sind Silver-XL-Fuß, Tragetasche und einseitiger UV-Druck auf Airtex 330, B1-zertifiziert. Ab 1 Stück, Versand nach Deutschland.',
      cta: 'XXL konfigurieren',
      sections: [
        {
          heading: 'XL, XXL und XXXL',
          paragraphs: [
            'Die Breite bleibt 200 cm, damit mehrere Roll-ups eine durchgehende Standwand ergeben. XL (200 × 200 cm) für kompakte Stände. XXL (200 × 250 cm) für höhere Foyers. XXXL (200 × 300 cm) ist der 3-Meter-Hintergrund für Messe, Launch oder Innenbühne. Zu zweit aufbauen, wenn es 3 m hoch ist.',
            'Das Motiv fährt in die Silver-XL-Kassette. Stange ausziehen, Oberleiste einhängen, die Kassette spannt das Tuch. Eine Anleitung liegt bei. Das Format ist für innen. PVC für außen und schmale Roll-ups ab 80 € sind andere Produkte.',
          ],
        },
        {
          heading: 'Messe in Deutschland',
          paragraphs: [
            'Die Roll-ups gehen aus Ashbourne an Messeadressen in Deutschland, Österreich und der Schweiz. Der genannte Preis ist der Artikel, nicht die Fracht. Ein Paket dieser Größe wird extra kalkuliert. Mindestmenge: 1 Stück. Viele Stände nehmen ein XXXL und ergänzen später XL oder XXL.',
            'Datei als PDF oder AI, mit Beschnitt. Proof vor dem Druck. Der englische Konfigurator steht auf der XXL-Seite: XL, XXL oder XXXL und der Silver-XL-Fuß.',
          ],
        },
      ],
      facts: [
        { label: 'Breite', value: '200 cm in allen drei Größen' },
        { label: 'XL', value: '200 × 200 cm — 398,96 €' },
        { label: 'XXL', value: '200 × 250 cm — 418,49 €' },
        { label: 'XXXL', value: '200 × 300 cm — 450 €' },
        { label: 'Dabei', value: 'Silver-XL-Fuß, Tasche, UV-Druck' },
        { label: 'Material', value: 'Airtex 330, B1, innen' },
        { label: 'Minimum', value: '1 Stück' },
      ],
      products: {
        xxl: { title: 'XL, XXL oder XXXL', desc: 'Konfigurator: 200 × 200, 200 × 250 oder 200 × 300 cm.' },
        rollup: { title: 'Normales Roll-up', desc: 'Schmaler, ab 80 € mit Kassette, wenn 2 m zu breit ist.' },
        fabric: { title: 'Textilwand', desc: 'Alurahmen jenseits vom Roll-up, bis 6 m.' },
        popup: { title: 'Pop-up-Wand', desc: 'Gebogen oder gerade, ab 489,30 € zzgl. MwSt.' },
      },
      faqs: [
        { q: 'Was ist ein XXL-Roll-up?', a: 'Ein Innendisplay mit 200 cm Breite, etwa doppelt so breit wie ein Standard-Roll-up. PrintNPack liefert XL 200 × 200 cm, XXL 200 × 250 cm und XXXL 200 × 300 cm, mit Silver-XL-Fuß und Tasche.' },
        { q: 'Was kostet die Lieferung nach Deutschland?', a: 'Der Artikel: 398,96 € als XL, 418,49 € als XXL, 450 € als XXXL, Fuß und Druck inklusive. Die Fracht nach Deutschland kommt dazu und steht im Angebot.' },
        { q: 'Reicht ein einzelnes Stück?', a: 'Ja. Minimum ist 1 Stück. Ein XXXL trägt eine Messe, XL oder XXL können die Wand später verbreitern.' },
        { q: 'Geht das draußen?', a: 'Nein. Airtex 330 und B1 gelten für Hallen, Messen und Foyers. Draußen nehmen Sie PVC.' },
        { q: 'Wie wird es aufgebaut?', a: 'Das Motiv kommt aus der Silver-XL-Kassette. Stange ausziehen, Oberleiste befestigen, die Kassette spannt das Tuch. Anleitung liegt bei. Zu zweit beim 3-m-XXXL.' },
        { q: 'Liefern Sie an eine Messe in Deutschland?', a: 'Ja, aus Ashbourne, Irland, an eine Adresse in Deutschland, Österreich oder der Schweiz. Der Transport wird mit der Bestellung kalkuliert.' },
      ],
    },
    stands: {
      slug: 'banner-mit-gestell',
      shortLabel: 'Mit Gestell',
      title: 'Banner mit Gestell | Textilspannrahmen und Messewand | Deutschland',
      description:
        'Banner mit Gestell für Deutschland: Spanntuch auf Alurahmen, gerade oder gebogen, 2,5–6 m. Komplettset oder nur Druck. Roll-up mit Kassette ab 80 €. EU-Versand.',
      keywords:
        'Banner mit Gestell, Textilspannrahmen, Messewand, Banner mit Rahmen, Spannrahmen, Pop-up Wand, Roll-up mit Kassette, Textildisplay Deutschland',
      eyebrow: 'Banner mit Gestell',
      h1: 'Banner mit Gestell für Deutschland',
      heroAlt: 'Textilbanner auf Aluminiumrahmen als Messestandwand',
      lead: 'Ein Banner mit Gestell ist ein Druck auf einer Struktur, keine Ösenplane. PrintNPack liefert Spanntuch auf geradem Alurahmen (Textilwand), den gebogenen Rahmen, eine Pop-up-Wand ab 489,30 € zzgl. MwSt. und das Roll-up, dessen Kassette das Gestell ist, ab 80 €. Druck in Irland, Versand nach Deutschland.',
      cta: 'Textilrahmen ansehen',
      sections: [
        {
          heading: 'Gerader Rahmen, Bogen, Kassette',
          paragraphs: [
            'Der gerade Rahmen heißt im Handel Straight Stretch oder Textilspannrahmen. Gesucht wird auch Banner mit Struktur, Messewand oder Medienwand. Übliche Maße: 250 × 228 cm, 300 × 230 cm, 400 × 230 cm, 500 × 230 cm und 600 × 230 cm. Komplettset aus Rahmen und Druck, oder nur der Druck, wenn der Rahmen schon steht. Einseitig oder beidseitig.',
            'Der gebogene Rahmen zieht das Motiv in die Tiefe, sichtbar aus dem Gang. Das Roll-up ist schmaler und verschwindet in der Kassette. Das Pop-up ist eine gerade oder gebogene Wand, ab 489,30 € zzgl. MwSt. Das 2-m-XXL ist ein breites Roll-up mit Silver-XL-Fuß, kein Spannrahmen.',
          ],
        },
        {
          heading: 'Nur den Druck neu bestellen',
          paragraphs: [
            'Wählen Sie „nur Grafik“, wenn die Struktur schon da ist. Schicken Sie die Maße, falls es kein Standardrahmen ist. Das Tuch wechselt von Messe zu Messe, der Rahmen bleibt.',
            'Versand aus Ashbourne nach Deutschland, Österreich und in die Schweiz. Die Fracht für einen Rahmen wird extra genannt. Die Angebotsseite des Rahmens ist auf Englisch. Die Nachricht kann auf Deutsch sein, mit Breite, Höhe und ein- oder zweiseitig.',
          ],
        },
      ],
      facts: [
        { label: 'Gerader Rahmen', value: '250–600 cm breit, Höhe ca. 230 cm' },
        { label: 'Gebogen', value: '3–5 m, Set oder nur Druck' },
        { label: 'Pop-up', value: 'Ab 489,30 € zzgl. MwSt.' },
        { label: 'Roll-up + Kassette', value: 'Ab 80 €' },
        { label: 'XXL + Fuß', value: 'Ab 398,96 €, 200 cm breit' },
        { label: 'Nachbestellung', value: 'Nur Druck, Rahmen bleibt' },
        { label: 'Versand', value: 'Deutschland, Fracht im Angebot' },
      ],
      products: {
        fabric: { title: 'Gerader Rahmen', desc: 'Spanntuch, Textilwand. Set oder Ersatzdruck.' },
        curved: { title: 'Gebogener Rahmen', desc: 'Aus dem Gang sichtbar. 3–5 m.' },
        popup: { title: 'Pop-up-Wand', desc: 'Gerade oder gebogen, ab 489,30 € zzgl. MwSt. LED je nach Angebot.' },
        rollup: { title: 'Roll-up mit Kassette', desc: 'Die Kassette ist das Gestell. Ab 80 €, Nachdruck ab 35 €.' },
        xxl: { title: 'XXL mit Silver-XL-Fuß', desc: '200 cm breit. Der Fuß ist im Preis.' },
      },
      faqs: [
        { q: 'Was ist ein Banner mit Gestell?', a: 'Ein bedrucktes Motiv auf einer Struktur: Alurahmen mit Spanntuch, gebogene Textilwand, Pop-up, oder ein Roll-up, dessen Kassette der Fuß ist. Keine PVC-Plane mit Ösen.' },
        { q: 'Kann ich nur den Druck nachkaufen?', a: 'Ja, bei geraden und gebogenen Textilrahmen. Maße schicken, wenn der Rahmen kein Standard ist. Ein Roll-up wird ab 35 € neu gedruckt, wenn die Kassette bleibt.' },
        { q: 'Was ist der Unterschied zum Roll-up?', a: 'Das Roll-up ist ein schmales Motiv in einer Kassette. Das Banner mit Rahmen spannt Stoff über eine breitere, flache, wiederverwendbare Struktur.' },
        { q: 'Welche Rahmenmaße gibt es?', a: '250 × 228, 300 × 230, 400 × 230, 500 × 230 und 600 × 230 cm beim geraden Rahmen. Höhe meist um 2,3 m. Gebogen etwa 3 bis 5 m. Andere Maße auf Anfrage.' },
        { q: 'Liefern Sie das Gestell nach Deutschland?', a: 'Ja. Rahmen, Pop-up oder Roll-up aus Irland nach Deutschland, Österreich und in die Schweiz. Die Fracht steht im Angebot.' },
        { q: 'Ist die Lieferung im Pop-up-Preis enthalten?', a: 'Ab 489,30 € zzgl. MwSt. ist der Stand. Die Lieferung nach Deutschland kommt dazu. In Irland ist bei manchen Angeboten die Lieferung enthalten. Das gilt nicht automatisch für die EU.' },
      ],
    },
  },
  es: {
    index: {
      slug: '',
      shortLabel: 'España',
      title: 'Banderolas y servilletas personalizadas para España | PrintNPack',
      description:
        'PrintNPack imprime lonas PVC, roll ups XXL, banderolas con soporte y servilletas personalizadas en Irlanda y las envía a España. Presupuesto a petición.',
      keywords:
        'banderolas publicitarias España, impresión de lonas, servilletas personalizadas, roll up XXL, banderola con soporte, expositor enrollable',
      h1: 'Banderolas y servilletas para España',
      lead: 'PrintNPack imprime en Ashbourne, Irlanda. Producimos banderolas de todos los tipos, roll ups XXL, banderolas con soporte y servilletas personalizadas, y las enviamos a España. El transporte se confirma con el presupuesto.',
    },
    banners: {
      slug: 'impresion-banderolas',
      shortLabel: 'Banderolas',
      title: 'Impresión de banderolas | Lona PVC, roll up y gran formato | España',
      description:
        'Impresión de banderolas para España: lona PVC desde 25 €, roll up con base desde 80 €, XXL de 2 m y soportes de tela. Impreso en Irlanda, envío en la UE. Desde 1 unidad.',
      keywords:
        'impresión de banderolas, lona publicitaria, lona PVC, banderola personalizada, roll up, expositor enrollable, impresión gran formato España, pancarta',
      eyebrow: 'Banderolas, todos los tipos',
      h1: 'Impresión de banderolas para España',
      heroAlt: 'Banderola publicitaria impresa por PrintNPack, enviada desde Irlanda',
      lead: 'PrintNPack imprime banderolas publicitarias en Ashbourne, Irlanda, y las envía a España. Lona PVC desde 25 €, roll up con base desde 80 €, roll up XXL de 2 metros de ancho y banderola con soporte de tela tensada. Desde 1 unidad. Plazo habitual: 3 a 5 días laborables tras aprobar el diseño.',
      cta: 'Pedir presupuesto',
      sections: [
        {
          heading: 'Qué banderola conviene',
          paragraphs: [
            'La lona PVC de 510 g/m², con dobladillo y ollados, sirve para escaparates, fachadas, vallas y andamios. Si hay viento, la lona microperforada deja pasar el aire. El roll up es un display de interior: el gráfico se guarda en una base pesada, incluida en el primer pedido. Reimprimir solo el gráfico sale desde 35 € si ya tiene la base.',
            'Para un stand, pase al roll up extra ancho de 200 cm o a una banderola con soporte: tela tensada sobre estructura de aluminio, recta o curva, de 2,5 a 6 m. Los fondos de escenario en poliéster se hacen a medida, hasta 50 m. Fundas de mesa y banderas pueden ir en el mismo envío.',
          ],
        },
        {
          heading: 'Pedido desde España',
          paragraphs: [
            'Indique el tipo, la medida final y la cantidad. Envíe el logo en PDF, AI o PNG nítido. Preparamos una prueba antes de imprimir. El taller está en Ashbourne, condado de Meath. El envío a España es intra-UE. El porte no va incluido en el precio de la lona: se confirma con el presupuesto.',
            'La misma gama sirve en otros países de habla hispana de la UE, con el porte según destino. Las fichas de producto están en inglés: allí el configurador calcula la medida. El mensaje puede ir en español.',
          ],
        },
      ],
      facts: [
        { label: 'PVC', value: 'Desde 25 €, desde 1 unidad' },
        { label: 'Roll up', value: 'Desde 80 € con base' },
        { label: 'Reimpresión', value: 'Desde 35 €' },
        { label: 'XXL', value: '200 cm de ancho, desde 398,96 €' },
        { label: 'Exterior', value: 'PVC 510 g/m², o microperforada' },
        { label: 'Plazo', value: '3 a 5 días laborables tras la prueba' },
        { label: 'Envío', value: 'España, porte en el presupuesto' },
      ],
      products: {
        pvc: { title: 'Lonas PVC', desc: 'Exterior, ollados y dobladillo, medidas a medida. Escaparates, eventos, vallas.' },
        rollup: { title: 'Roll up', desc: 'Desde 80 € con base pesada. Reimpresión del gráfico desde 35 €.' },
        xxl: { title: 'Roll up XXL', desc: '200 cm de ancho, hasta 3 m de alto. Base Silver XL incluida.' },
        fabric: { title: 'Banderola con soporte', desc: 'Tela tensada sobre estructura recta. Kit completo o solo gráfico.' },
        curved: { title: 'Soporte curvo', desc: 'Muro de tela en arco, visible de lado. 3 a 5 m.' },
        popup: { title: 'Muro pop-up', desc: 'Recto o curvo, desde 489,30 € más IVA.' },
        stage: { title: 'Fondo de escenario', desc: 'Poliéster a gran formato, de 3 × 3 m hasta 50 m.' },
        tables: { title: 'Fundas de mesa', desc: 'Manteles impresos para ferias, hasta 1,5 × 6 m.' },
        flags: { title: 'Banderas', desc: 'Sublimación, desde 1 unidad, ollados o funda.' },
      },
      faqs: [
        { q: '¿Imprimen banderolas con envío a España?', a: 'Sí. PrintNPack imprime en Ashbourne, Irlanda, y envía a España. El porte se confirma con el presupuesto. El envío Irlanda–España sigue dentro de la UE.' },
        { q: '¿Cuánto cuesta una banderola?', a: 'Las lonas PVC empiezan en unos 25 €. Un roll up completo con base empieza en 80 €. Reimprimir el gráfico empieza en 35 €. Un roll up XXL de 2 m de ancho empieza en 398,96 €, hasta 450 € en 200 × 300 cm. El presupuesto depende de la medida.' },
        { q: '¿Se puede pedir una sola banderola?', a: 'Sí. No hay mínimo en lonas PVC, roll ups ni XXL. Vale un solo diseño para un escaparate, una feria o una obra.' },
        { q: '¿Qué material va en exterior?', a: 'PVC de 510 g/m² con dobladillo y ollados para la mayoría de usos exteriores. Lona microperforada en vallas y sitios con viento.' },
        { q: '¿El roll up incluye el soporte?', a: 'El primero incluye la base. Si ya la tiene, pida solo la reimpresión, desde 35 €. Los XXL incluyen la base Silver XL y una bolsa de transporte.' },
        { q: '¿En cuánto tiempo se imprime?', a: 'Lo habitual son 3 a 5 días laborables después de aprobar la prueba. A veces se puede acortar: indique la fecha.' },
      ],
    },
    napkins: {
      slug: 'servilletas-personalizadas',
      shortLabel: 'Servilletas',
      title: 'Servilletas personalizadas | Cóctel, restaurante y boda | España',
      description:
        'Servilletas de papel personalizadas para España. Cóctel de 10 × 10 cm desde 50 unidades, efecto lino desde 0,24 €. Impresas en Irlanda, envío en la UE.',
      keywords:
        'servilletas personalizadas, servilletas de papel con logo, servilletas de cóctel, servilletas impresas, servilletas de boda, servilletas para restaurante, airlaid, España',
      eyebrow: 'Servilletas, todos los tipos',
      h1: 'Servilletas personalizadas para España',
      heroAlt: 'Servilleta de cóctel impresa con el logo de un restaurante',
      lead: 'PrintNPack imprime servilletas personalizadas en Ashbourne, Irlanda, para restaurantes, bares, hoteles y bodas en España. Servilleta de cóctel blanca, 10 × 10 cm cerrada y 20 × 40 cm abierta, desde 50 unidades. Servilletas efecto lino desde 0,24 €, desde 25 unidades. El precio depende de la cantidad y del diseño. El porte a España se confirma con el presupuesto.',
      cta: 'Ver servilletas de cóctel',
      sections: [
        {
          heading: 'Qué tamaño de servilleta',
          paragraphs: [
            'La servilleta de cóctel, 10 × 10 cm cerrada, va bajo el vaso en la barra, el aperitivo o el cóctel de boda. Abierta mide 20 × 40 cm. El mínimo es 50 unidades: logo de un café, o nombres y fecha de una boda. Deje el diseño en el centro; un borde demasiado al canto se puede cortar.',
            'En sala, la servilleta de 33 cm y 2 capas es la más usada en cafetería y restaurante. La de 40 cm cubre hotel, alta cocina y el banquete. El airlaid efecto lino cae como tela, sin lavandería. El kraft sin blanquear encaja en bodas y mesas que quieren papel reciclado a la vista.',
          ],
        },
        {
          heading: 'Restaurantes, bodas y envío',
          paragraphs: [
            'Las servilletas efecto lino empiezan en 25 unidades, desde 0,24 €. El precio depende de la cantidad y del diseño. Las blancas sin impresión se piden por caja, desde unos 0,03 €, para mucho volumen. El papel de seda de color, 500 × 750 mm, va en cajas de 480 hojas.',
            'Imprimimos en Irlanda y enviamos a España. Cuente el transporte en el presupuesto, sobre todo si la boda tiene fecha: pida con tres o cuatro semanas. Las fichas de producto están en inglés.',
          ],
        },
      ],
      facts: [
        { label: 'Cóctel', value: '10 × 10 cm cerrada, desde 50' },
        { label: 'Abierta', value: '20 × 40 cm' },
        { label: 'Efecto lino', value: 'Desde 0,24 €, desde 25' },
        { label: 'Cantidad', value: 'Desde 25 unidades' },
        { label: 'Sin impresión', value: 'Desde unos 0,03 € por caja' },
        { label: 'Lunch / cena', value: '33 cm y 40 cm' },
        { label: 'Envío', value: 'España, porte en el presupuesto' },
      ],
      products: {
        cocktail: { title: 'Servilletas de cóctel', desc: 'Blancas, 10 × 10 cm cerradas. Logo o nombres. Desde 50.' },
        printed: { title: 'Papel con logo', desc: 'Cóctel 10 × 10 cm, 10 × 20, 12 × 20, 15 × 20 y 20 × 20 cm. Desde 25 unidades, precio bajo presupuesto.' },
        linen: { title: 'Efecto lino', desc: 'Desde 0,24 €. El precio depende de la cantidad y del diseño. Desde 25.' },
        plain: { title: 'Servilletas al por mayor', desc: 'Blancas sin impresión, por caja. Desde unos 0,03 €.' },
        wedding: { title: 'Servilletas de boda', desc: 'Nombres, fecha o monograma en papel o efecto lino.' },
        kraft: { title: 'Kraft de boda', desc: 'Papel crudo sin blanquear, nombres o monograma.' },
      },
      faqs: [
        { q: '¿Envían servilletas personalizadas a España?', a: 'Sí. Se imprimen en Ashbourne, Irlanda, y se envían a España. El porte se confirma en el presupuesto. El envío sigue dentro de la UE.' },
        { q: '¿Cuál es el mínimo de servilletas de cóctel?', a: '50 unidades. Cerradas miden 10 × 10 cm. Abiertas, 20 × 40 cm. Sirven para un bar, un restaurante o un cóctel.' },
        { q: '¿Cuánto cuesta una servilleta con logo?', a: 'El efecto lino empieza en 0,24 €. El precio depende de la cantidad y del diseño. Mínimo 25 unidades. El cóctel personalizado sale desde 50 unidades.' },
        { q: '¿Qué tamaño para un restaurante?', a: '33 cm y 2 capas para cafetería y servicio diario. Cóctel bajo el vaso. 40 cm para hotel, alta cocina y cena de boda.' },
        { q: '¿Se puede imprimir una boda?', a: 'Sí. Nombres, fecha o monograma en blanco, efecto lino o kraft. Pida con tres o cuatro semanas. El porte al lugar en España va en el presupuesto.' },
        { q: '¿Hay servilletas sin logo?', a: 'Sí. Blancas al por mayor, por caja, desde unos 0,03 €, para hostelería de mucho volumen.' },
      ],
    },
    xxl: {
      slug: 'banderolas-xxl',
      shortLabel: 'XXL',
      title: 'Roll up XXL de 2 metros | Banderola extra ancha | España',
      description:
        'Roll up XXL para España: 200 cm de ancho, XL, XXL y XXXL hasta 3 m. Desde 398,96 € con base Silver XL. Impresión UV, Airtex 330, clase B1. Desde 1 unidad.',
      keywords:
        'roll up XXL, expositor enrollable XXL, banderola extra ancha, roll up 2 metros, roll up 200 cm, roll up feria, banderola 3 metros España',
      eyebrow: 'Banderolas XXL',
      h1: 'Roll up XXL de 2 metros para España',
      heroAlt: 'Roll up extra ancho de 2 metros con base Silver XL',
      lead: 'Un roll up XXL de PrintNPack mide 200 cm de ancho, cerca del doble de un roll up normal. Tres alturas: XL 200 × 200 cm a 398,96 €, XXL 200 × 250 cm a 418,49 €, XXXL 200 × 300 cm a 450 €. El precio incluye la base Silver XL, la bolsa y la impresión UV a una cara sobre Airtex 330, certificado B1. Desde 1 unidad, con envío a España.',
      cta: 'Configurar el XXL',
      sections: [
        {
          heading: 'XL, XXL y XXXL',
          paragraphs: [
            'El ancho es siempre 200 cm, para alinear varios roll ups en un solo fondo de stand. El XL (200 × 200 cm) cabe en un stand corto. El XXL (200 × 250 cm) cubre un vestíbulo más alto. El XXXL (200 × 300 cm) es el fondo de 3 metros para una feria, un lanzamiento o un escenario interior. Hacen falta dos personas para montar los 3 m.',
            'El gráfico entra en la base Silver XL. Se saca el mástil, se engancha la barra superior y la base tensa la tela. Las instrucciones van en el pedido. Este formato es de interior. La lona PVC de exterior y los roll ups estrechos (desde 80 €) son otros productos.',
          ],
        },
        {
          heading: 'Feria en España',
          paragraphs: [
            'Estos roll ups salen de Ashbourne hacia recintos en España. El precio publicado es el producto, no el transporte: el porte de un bulto de este tamaño se confirma en el presupuesto. Pedido desde 1 unidad. Muchos stands piden un XXXL y luego suman un XL o un XXL para una pared continua.',
            'Archivo en PDF o AI, con sangrado. Prueba antes de imprimir. El configurador en inglés está en la página XXL: elija XL, XXL o XXXL y la base Silver XL.',
          ],
        },
      ],
      facts: [
        { label: 'Ancho', value: '200 cm en las tres tallas' },
        { label: 'XL', value: '200 × 200 cm — 398,96 €' },
        { label: 'XXL', value: '200 × 250 cm — 418,49 €' },
        { label: 'XXXL', value: '200 × 300 cm — 450 €' },
        { label: 'Incluye', value: 'Base Silver XL, bolsa, impresión UV' },
        { label: 'Material', value: 'Airtex 330, B1, interior' },
        { label: 'Mínimo', value: '1 unidad' },
      ],
      products: {
        xxl: { title: 'Elegir XL, XXL o XXXL', desc: 'Configurador: 200 × 200, 200 × 250 o 200 × 300 cm.' },
        rollup: { title: 'Roll up estándar', desc: 'Más estrecho, desde 80 € con base, si 2 m sobra.' },
        fabric: { title: 'Muro textil', desc: 'Estructura de aluminio más allá del roll up, hasta 6 m.' },
        popup: { title: 'Muro pop-up', desc: 'Curvo o recto, desde 489,30 € más IVA.' },
      },
      faqs: [
        { q: '¿Qué es un roll up XXL?', a: 'Es un expositor de interior de 200 cm de ancho, cerca del doble de un roll up estándar. PrintNPack tiene XL 200 × 200 cm, XXL 200 × 250 cm y XXXL 200 × 300 cm, con base Silver XL y bolsa.' },
        { q: '¿Cuál es el precio con envío a España?', a: 'El producto: 398,96 € en XL, 418,49 € en XXL, 450 € en XXXL, con base e impresión. El porte a España va aparte y se confirma en el presupuesto.' },
        { q: '¿Se puede pedir solo uno?', a: 'Sí. El mínimo es una unidad. Un XXXL basta para una feria, y un XL o XXL puede ampliar el muro después.' },
        { q: '¿Sirve en exterior?', a: 'No. Airtex 330 y la clase B1 son para pabellones, ferias y vestíbulos. En exterior, lona PVC.' },
        { q: '¿Cómo se monta?', a: 'El gráfico sale de la base Silver XL. Se despliega el mástil, se fija la barra superior y la base tensa el panel. Van instrucciones. Mejor entre dos en el XXXL de 3 m.' },
        { q: '¿Lo envían a un recinto ferial en España?', a: 'Sí, desde Ashbourne, Irlanda, a una dirección en España. El transporte se calcula con el pedido.' },
      ],
    },
    stands: {
      slug: 'banderolas-con-soporte',
      shortLabel: 'Con soporte',
      title: 'Banderola con soporte | Estructura textil y photocall | España',
      description:
        'Banderola con soporte para España: tela tensada en estructura de aluminio, recta o curva, de 2,5 a 6 m. Kit completo o solo gráfico. Roll up con base desde 80 €. Envío UE.',
      keywords:
        'banderola con soporte, photocall con estructura, muro textil, display textil, banner con estructura, roll up con base, expositor para feria España',
      eyebrow: 'Banderolas con soporte',
      h1: 'Banderolas con soporte para España',
      heroAlt: 'Banderola de tela tensada sobre estructura de aluminio para un stand',
      lead: 'Una banderola con soporte es un gráfico sujeto por una estructura, no una lona con ollados. PrintNPack suministra tela tensada en estructura recta de aluminio, la estructura curva, el muro pop-up desde 489,30 € más IVA, y el roll up cuya base es el soporte, desde 80 €. Impresión en Irlanda, envío a España.',
      cta: 'Ver la estructura textil',
      sections: [
        {
          heading: 'Estructura recta, curva y base de roll up',
          paragraphs: [
            'El nombre comercial de la estructura recta es straight stretch o muro textil. En español también se busca photocall con estructura, banner con marco o display de tela. Medidas habituales: 250 × 228 cm, 300 × 230 cm, 400 × 230 cm, 500 × 230 cm y 600 × 230 cm. Kit completo (estructura + gráfico) o solo el gráfico si la estructura ya existe. A una o dos caras.',
            'La estructura curva envuelve el gráfico y se ve desde el pasillo. El roll up es más estrecho y se guarda en la base. El pop-up es un muro recto o curvo, desde 489,30 € más IVA. El XXL de 2 m es un roll up ancho con base Silver XL, no una estructura rígida.',
          ],
        },
        {
          heading: 'Reimprimir sin comprar otra estructura',
          paragraphs: [
            'Elija solo el gráfico si ya tiene la estructura. Envíe las medidas si no es un tamaño estándar. La tela cambia de feria en feria y la estructura se queda.',
            'Envío desde Ashbourne a España. El porte de una estructura se cotiza aparte. La página de presupuesto está en inglés. El mensaje puede ir en español, con ancho, alto y una o dos caras.',
          ],
        },
      ],
      facts: [
        { label: 'Estructura recta', value: '250 a 600 cm de ancho, alto ~230 cm' },
        { label: 'Curva', value: '3 a 5 m, kit o solo gráfico' },
        { label: 'Pop-up', value: 'Desde 489,30 € más IVA' },
        { label: 'Roll up + base', value: 'Desde 80 €' },
        { label: 'XXL + base', value: 'Desde 398,96 €, 200 cm de ancho' },
        { label: 'Reposición', value: 'Solo gráfico, se conserva la estructura' },
        { label: 'Envío', value: 'España, porte en el presupuesto' },
      ],
      products: {
        fabric: { title: 'Estructura recta', desc: 'Tela tensada, muro textil. Kit o gráfico de recambio.' },
        curved: { title: 'Estructura curva', desc: 'Visible desde el pasillo. 3 a 5 m.' },
        popup: { title: 'Muro pop-up', desc: 'Recto o curvo, desde 489,30 € más IVA. LED según presupuesto.' },
        rollup: { title: 'Roll up con base', desc: 'La base es el soporte. Desde 80 €, reimpresión desde 35 €.' },
        xxl: { title: 'XXL con base Silver XL', desc: '200 cm de ancho. La base va en el precio.' },
      },
      faqs: [
        { q: '¿Qué es una banderola con soporte?', a: 'Es un gráfico impreso montado en una estructura: aluminio con tela tensada, muro curvo, pop-up, o un roll up cuya base hace de soporte. No es una lona PVC con ollados.' },
        { q: '¿Se puede comprar solo el gráfico?', a: 'Sí, en las estructuras de tela rectas o curvas. Indique las medidas si no es un tamaño estándar. El roll up se reimprime desde 35 € si conserva la base.' },
        { q: '¿En qué se diferencia de un roll up?', a: 'El roll up es un panel estrecho que se enrolla en una base. La banderola con estructura tensa tela sobre un marco más ancho, más plano y reutilizable.' },
        { q: '¿Qué medidas de estructura hay?', a: '250 × 228, 300 × 230, 400 × 230, 500 × 230 y 600 × 230 cm en la recta. Altura típica de unos 2,3 m. La curva va de unos 3 a 5 m. Otras medidas bajo presupuesto.' },
        { q: '¿Envían el soporte a España?', a: 'Sí. Estructura, pop-up o roll up, desde Irlanda a España. El porte se confirma con el presupuesto.' },
        { q: '¿El precio del pop-up incluye el envío a España?', a: 'Desde 489,30 € más IVA es el stand. El envío a España se cotiza aparte. En Irlanda algunas ofertas incluyen la entrega. Ese cálculo no vale igual para la UE.' },
      ],
    },
  },
};

function localePagePath(localeId, slug) {
  return slug ? `/${localeId}/${slug}` : `/${localeId}`;
}

function buildProducts(cluster, productCopy) {
  return CLUSTERS[cluster].productIds.map((id) => {
    const product = PRODUCTS[id];
    const copy = productCopy[id];
    return {
      id,
      href: product.href,
      price: product.price,
      from: product.from,
      title: copy.title,
      desc: copy.desc,
    };
  });
}

const DELIVERY_AREAS = {
  de: [
    { country: 'Deutschland', cities: ['Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dresden', 'Hannover', 'Nürnberg', 'Bremen', 'Essen', 'Dortmund'] },
    { country: 'Österreich', cities: ['Wien', 'Graz', 'Linz', 'Salzburg'] },
    { country: 'Schweiz', cities: ['Zürich', 'Genf', 'Basel', 'Bern'] },
  ],
  fr: [
    { country: 'France', cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Lille', 'Bordeaux', 'Nantes', 'Strasbourg', 'Nice'] },
    { country: 'Belgique', cities: ['Bruxelles'] },
    { country: 'Suisse', cities: ['Genève'] },
  ],
  es: [
    { country: 'España', cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Málaga', 'Zaragoza'] },
  ],
};

function joinAnd(items, andWord) {
  if (items.length < 2) return items.join('');
  return `${items.slice(0, -1).join(', ')} ${andWord} ${items[items.length - 1]}`;
}

function deliveryPlacePhrase(localeId) {
  const groups = DELIVERY_AREAS[localeId];
  if (localeId === 'de') {
    const [germany, austria, switzerland] = groups;
    return `${joinAnd(germany.cities, 'und')}, sowie ${joinAnd(austria.cities, 'und')}, ${joinAnd(switzerland.cities, 'und')}`;
  }
  if (localeId === 'fr') {
    const [france, belgium, switzerland] = groups;
    return `${joinAnd(france.cities, 'et')}, ainsi qu’à ${belgium.cities[0]} et à ${switzerland.cities[0]}`;
  }
  return joinAnd(groups[0].cities, 'y');
}

function areaServedPlaces(localeId) {
  return DELIVERY_AREAS[localeId].flatMap((group) => group.cities.map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'Country', name: group.country },
  })));
}

const CITY_FAQ = {
  de: {
    banners: {
      q: 'Bannerdruck in München, Berlin oder Hamburg?',
      a: (where) => `Ja. Der Bannerdruck entsteht in Ashbourne, Irland, und geht an eine Adresse in ${where}. Die Fracht steht im Angebot.`,
    },
    napkins: {
      q: 'Servietten bedrucken für Köln, Frankfurt oder Wien?',
      a: (where) => `Ja. Die Servietten werden in Ashbourne, Irland, bedruckt und an eine Adresse in ${where} geschickt. Die Fracht steht im Angebot.`,
    },
    xxl: {
      q: 'XXL-Roll-up für eine Messe in München, Berlin oder Düsseldorf?',
      a: (where) => `Ja. Das XXL-Roll-up wird in Ashbourne, Irland, gedruckt und an eine Messeadresse in ${where} geschickt. Die Fracht steht im Angebot.`,
    },
    stands: {
      q: 'Messewand oder Textilspannrahmen für München, Berlin oder Hamburg?',
      a: (where) => `Ja. Messewand und Textilspannrahmen werden in Ashbourne, Irland, gedruckt und an eine Adresse in ${where} geschickt. Die Fracht für den Rahmen steht im Angebot.`,
    },
  },
  fr: {
    banners: {
      q: 'Impression de banderoles à Paris, Lyon ou Marseille ?',
      a: (where) => `Oui. L’impression se fait à Ashbourne, en Irlande, puis l’envoi part vers une adresse à ${where}. Le port est confirmé avec le devis.`,
    },
    napkins: {
      q: 'Serviettes personnalisées à Paris, Lyon ou Bruxelles ?',
      a: (where) => `Oui. Les serviettes sont imprimées à Ashbourne, en Irlande, et expédiées à une adresse à ${where}. Le port est confirmé avec le devis.`,
    },
    xxl: {
      q: 'Roll-up XXL pour un salon à Paris, Lyon ou Lille ?',
      a: (where) => `Oui. Le roll-up XXL est imprimé à Ashbourne, en Irlande, et expédié vers un parc d’exposition à ${where}. Le port est confirmé avec le devis.`,
    },
    stands: {
      q: 'Banderole avec support à Paris, Lyon ou Marseille ?',
      a: (where) => `Oui. La banderole avec support est imprimée à Ashbourne, en Irlande, et expédiée à une adresse à ${where}. Le port du cadre est confirmé avec le devis.`,
    },
  },
  es: {
    banners: {
      q: '¿Impresión de banderolas en Madrid, Barcelona o Valencia?',
      a: (where) => `Sí. La impresión se hace en Ashbourne, Irlanda, y el envío sale hacia una dirección en ${where}. El porte se confirma con el presupuesto.`,
    },
    napkins: {
      q: '¿Servilletas personalizadas en Madrid, Barcelona o Sevilla?',
      a: (where) => `Sí. Las servilletas se imprimen en Ashbourne, Irlanda, y se envían a una dirección en ${where}. El porte se confirma con el presupuesto.`,
    },
    xxl: {
      q: '¿Roll up XXL para una feria en Madrid, Barcelona o Bilbao?',
      a: (where) => `Sí. El roll up XXL se imprime en Ashbourne, Irlanda, y se envía a un recinto ferial en ${where}. El porte se confirma con el presupuesto.`,
    },
    stands: {
      q: '¿Banderola con soporte en Madrid, Barcelona o Valencia?',
      a: (where) => `Sí. La banderola con soporte se imprime en Ashbourne, Irlanda, y se envía a una dirección en ${where}. El porte de la estructura se confirma con el presupuesto.`,
    },
  },
};

function cityDeliveryFaq(localeId, clusterId) {
  const copy = CITY_FAQ[localeId][clusterId];
  return { q: copy.q, a: copy.a(deliveryPlacePhrase(localeId)) };
}

function buildPage(localeId, clusterId) {
  const locale = LOCALES[localeId];
  const cluster = CLUSTERS[clusterId];
  const copy = COPY[localeId][clusterId];
  const ui = UI[localeId];
  const path = localePagePath(localeId, copy.slug);

  return {
    kind: 'page',
    locale: localeId,
    cluster: clusterId,
    family: cluster.family,
    accent: cluster.accent,
    htmlLang: locale.htmlLang,
    ogLocale: locale.og,
    path,
    slug: copy.slug,
    shortLabel: copy.shortLabel,
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    eyebrow: copy.eyebrow,
    h1: copy.h1,
    hero: cluster.hero,
    heroWide: cluster.heroWide,
    heroAlt: copy.heroAlt,
    lead: copy.lead,
    cta: copy.cta,
    primaryHref: cluster.primaryHref,
    ctaSecondary: ui.ctaSecondary,
    secondaryHref: cluster.enPath,
    sections: copy.sections,
    facts: copy.facts,
    products: buildProducts(clusterId, copy.products),
    faqs: [...copy.faqs, cityDeliveryFaq(localeId, clusterId)],
    areaServed: areaServedPlaces(localeId),
    orderNote: ui.orderNote,
    faqHeading: ui.faqHeading,
    rangeHeading: ui.rangeHeading,
    factsHeading: ui.factsHeading,
    relatedHeading: ui.relatedHeading,
    proof: ui.proof,
    printedIn: ui.printedIn,
    homeLabel: locale.homeLabel,
    country: locale.country,
    phone: SITE_PHONE_DISPLAY,
    email: 'info@printnpack.ie',
    whatsapp: SITE_WHATSAPP_URL,
  };
}

function buildIndex(localeId) {
  const locale = LOCALES[localeId];
  const copy = COPY[localeId].index;
  const ui = UI[localeId];
  const pages = Object.keys(CLUSTERS).map((clusterId) => {
    const page = buildPage(localeId, clusterId);
    return {
      cluster: clusterId,
      href: page.path,
      title: page.shortLabel,
      h1: page.h1,
      lead: page.lead,
      accent: page.accent,
    };
  });

  return {
    kind: 'index',
    locale: localeId,
    cluster: 'index',
    family: null,
    htmlLang: locale.htmlLang,
    ogLocale: locale.og,
    path: `/${localeId}`,
    slug: '',
    h1: copy.h1,
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    lead: copy.lead,
    pages,
    orderNote: ui.orderNote,
    homeLabel: locale.homeLabel,
    printedIn: ui.printedIn,
    country: locale.country,
    phone: SITE_PHONE_DISPLAY,
    email: 'info@printnpack.ie',
    whatsapp: SITE_WHATSAPP_URL,
  };
}

const PAGE_CACHE = {};

function allBuiltPages() {
  if (PAGE_CACHE.list) return PAGE_CACHE.list;
  const list = [];
  Object.keys(LOCALES).forEach((localeId) => {
    list.push(buildIndex(localeId));
    Object.keys(CLUSTERS).forEach((clusterId) => {
      list.push(buildPage(localeId, clusterId));
    });
  });
  PAGE_CACHE.list = list;
  return list;
}

export function getLocaleStaticPaths(localeId) {
  return Object.keys(CLUSTERS).map((clusterId) => ({
    params: { slug: COPY[localeId][clusterId].slug },
  }));
}

export function getLocalePage(localeId, slug) {
  return allBuiltPages().find((page) => page.locale === localeId && page.kind === 'page' && page.slug === slug) || null;
}

export function getLocaleIndex(localeId) {
  return allBuiltPages().find((page) => page.locale === localeId && page.kind === 'index') || null;
}

export function getAlternates(clusterId) {
  if (clusterId === 'index') {
    return Object.keys(LOCALES).map((localeId) => ({
      locale: localeId,
      hreflang: LOCALES[localeId].hreflang,
      og: LOCALES[localeId].og,
      label: LOCALES[localeId].label,
      path: `/${localeId}`,
      href: `${SITE_URL}/${localeId}`,
    }));
  }

  const english = {
    locale: 'en',
    hreflang: 'en-ie',
    og: 'en_IE',
    label: 'English',
    path: CLUSTERS[clusterId].enPath,
    href: `${SITE_URL}${CLUSTERS[clusterId].enPath}`,
  };

  const translated = Object.keys(LOCALES).map((localeId) => {
    const slug = COPY[localeId][clusterId].slug;
    const path = localePagePath(localeId, slug);
    return {
      locale: localeId,
      hreflang: LOCALES[localeId].hreflang,
      og: LOCALES[localeId].og,
      label: LOCALES[localeId].label,
      path,
      href: `${SITE_URL}${path}`,
    };
  });

  return [
    english,
    ...translated,
    { locale: 'x-default', hreflang: 'x-default', og: null, label: 'English', path: english.path, href: english.href },
  ];
}

export function euSitemapEntries() {
  return allBuiltPages().map((page) => ({
    path: page.path,
    priority: page.kind === 'index' ? '0.8' : '0.86',
    changefreq: 'weekly',
  }));
}

export function footerLanguageGroups() {
  return Object.keys(LOCALES).map((localeId) => ({
    href: `/${localeId}`,
    label: LOCALES[localeId].label,
    links: Object.keys(CLUSTERS).map((clusterId) => ({
      href: localePagePath(localeId, COPY[localeId][clusterId].slug),
      label: COPY[localeId][clusterId].shortLabel,
    })),
  }));
}

export function classifyEuLanguagePath(pagePath = '') {
  const page = allBuiltPages().find((item) => item.path === pagePath);
  if (!page) return null;
  return {
    page_type: 'hub',
    product_family: page.family,
    product_slug: page.slug || page.locale,
    product_name: page.h1,
  };
}

export function documentLangFromPage(page = '') {
  if (page === '/fr' || page.startsWith('/fr/')) return 'fr';
  if (page === '/de' || page.startsWith('/de/')) return 'de';
  if (page === '/es' || page.startsWith('/es/')) return 'es';
  return 'en';
}

export { CLUSTERS, LOCALES, SITE_URL };
