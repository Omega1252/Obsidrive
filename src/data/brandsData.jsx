// src/data/brandsData.js

const brandsData = {
  ferrari: {
    name: "Ferrari",
    tagline: "Where Passion Meets Precision",
    background: "/img/cars/ferrari/Ferrari.jpg",
    logo: "/img/logos/ferrari2.svg",
    palette: {
      accent: "#e50914",       // Rosso Corsa improvisé
      background: "#0f0f0f",   // fond Obsidrive
    },
    about: `Fondée en 1947 à Maranello par Enzo Ferrari, la marque est née de la course. Ferrari est devenue un symbole absolu d'excellence mécanique, de passion italienne et de design audacieux. Chaque voiture Ferrari est une œuvre d’art roulante, pensée pour l’émotion autant que pour la performance.`,
    history: `Enzo Ferrari ne voulait à l’origine fabriquer que des voitures de course. Pourtant, la demande a rapidement évolué vers des modèles de route exclusifs, sans jamais trahir l’ADN racing de la marque. Ferrari a construit sa légende à travers la Formule 1, des moteurs mythiques, et une identité forte : passion, performance, prestige.`,
    figures: [
      { label: "Année de fondation", value: "1947" },
      { label: "Victoires F1", value: "+240" },
      { label: "Chevaux max produits", value: "1 050 (SF90 XX Stradale)" },
      { label: "Usine", value: "Maranello, Italie" }
    ],
    models: [
      {
        name: "LaFerrari",
        image: "/img/cars/ferrari/ferrari-laferrari.jpg",
        link: "/marques/Ferrari/laferrari.html",
      },
      {
        name: "SF90 Stradale",
        image: "/img/cars/ferrari/Ferrari.jpg",
        link: "/marques/Ferrari/sf90.html",
      },
      {
        name: "812 Superfast",
        image: "/img/cars/ferrari/ferrari-812.jpg",
        link: "/marques/Ferrari/812superfast.html",
      }
    ],
    funFacts: [
      "Le logo du cheval cabré vient d’un aviateur italien de la WWI.",
      "Ferrari limite volontairement sa production pour préserver l’exclusivité.",
      "La couleur \"Rosso Corsa\" est indissociable de la marque en compétition.",
    ],
    brandModelsLink: "/marques/Ferrari/FerrariModels",
    allModels: [
  {
    name: "LaFerrari",
    image: "/img/cars/ferrari/ferrari-laferrari.jpg",
    link: "/marques/ferrari/laferrari.html",
  },
  {
    name: "SF90 Stradale",
    image: "/img/cars/ferrari/Ferrari.jpg",
    link: "/marques/ferrari/sf90.html",
  },
  {
    name: "812 Superfast",
    image: "/img/cars/ferrari/ferrari-812.jpg",
    link: "/marques/ferrari/812superfast.html",
  },
  {
    name: "Enzo Ferrari",
    image: "/img/cars/ferrari/enzo-ferrari.jpg",
    link: "/marques/ferrari/Enzo-ferrari.html",
  },
  {
    name: "F50",
    image: "/img/cars/ferrari/F50.jpg",
    link: "/marques/ferrari/F50.html",
  },
  {
    name: "F40",
    image: "/img/cars/ferrari/F40.jpg",
    link: "/marques/ferrari/F40.html",
  },
  {
    name: "Monza SP1",
    image: "/img/cars/ferrari/Monza-SP1.jpg",
    link: "/marques/ferrari/Monza-SP1.html",
  },
  {
    name: "Daytona SP3",
    image: "/img/cars/ferrari/Daytona SP3.jpg",
    link: "/marques/ferrari/Daytona-SP3.html",
  },
  {
    name: "F8 Triturbo",
    image: "/img/cars/ferrari/F8-Triturbo.jpg",
    link: "/marques/ferrari/F8-Triturbo.html",
  },
  {
    name: "488 GTB",
    image: "/img/cars/ferrari/488-GTB.jpg",
    link: "/marques/ferrari/488-GTB.html",
  },
  {
    name: "458 Speciale",
    image: "/img/cars/ferrari/458 Speciale.jpg",
    link: "/marques/ferrari/458-Speciale.html",
  },
  {
    name: "F430",
    image: "/img/cars/ferrari/F430.jpg",
    link: "/marques/ferrari/F430.html",
  },
  {
    name: "360 Moderna",
    image: "/img/cars/ferrari/360 Moderna.jpg",
    link: "/marques/ferrari/360-Moderna.html",
  },
  {
    name: "599 GTO",
    image: "/img/cars/ferrari/599 GTO .jpg",
    link: "/marques/ferrari/599-GTO.html",
  },
  {
    name: "Purosangue",
    image: "/img/cars/ferrari/Purosangue.jpg",
    link: "/marques/ferrari/Purosangue.html",
  },
],
  },
  lamborghini: {
    name: "Lamborghini",
    tagline: "Beyond Fear. Beyond Limits.",
    background: "/img/cars/lamborghini/lamborghini.jpg",
    logo: "/img/logos/lamborghini2.svg",
    palette: {
        accent: "#f7d000",
        background: "#0f0f0f",
    },
    about: `Fondée en 1963 par Ferruccio Lamborghini, la marque est née d’une volonté de défier Ferrari avec des supercars plus confortables et plus puissantes. Lamborghini incarne l’exubérance, l’agressivité stylistique et la brutalité mécanique.`,
    history: `Le premier modèle, la 350 GT, lance la légende. Mais c’est la Miura dans les années 60 qui place Lamborghini comme pionnier des supercars modernes. Des modèles iconiques comme la Countach, Diablo ou Aventador ont ensuite marqué chaque génération.`,
    figures: [
        { label: "Année de fondation", value: "1963" },
        { label: "Modèle le plus rapide", value: "Revuelto (350+ km/h)" },
        { label: "Nombre de modèles V12", value: "+15" },
        { label: "Siège", value: "Sant'Agata Bolognese, Italie" },
    ],
    models: [
        {
        name: "Aventador",
        image: "/img/cars/lamborghini/aventador.jpg",
        link: "/models/lamborghini/aventador.html",
        },
        {
        name: "Huracán",
        image: "/img/cars/lamborghini/huracan.jpg",
        link: "/models/lamborghini/huracan.html",
        },
        {
        name: "Revuelto",
        image: "/img/cars/lamborghini/revuelto.jpg",
        link: "/models/lamborghini/revuelto.html",
        },
    ],
    brandModelsLink: "/marques/Lamborghini/LamborghiniModels",
    allModels: [
  {
    name: "Aventador",
    image: "/img/cars/lamborghini/aventador.jpg",
    link: "/marques/lamborghini/aventador.html",
  },
  {
    name: "Huracán",
    image: "/img/cars/lamborghini/huracan.jpg",
    link: "/marques/lamborghini/huracan.html",
  },
  {
    name: "Revuelto",
    image: "/img/cars/lamborghini/revuelto.jpg",
    link: "/marques/lamborghini/revuelto.html",
  },
  {
    name: "Sesto Elemento",
    image: "/img/cars/lamborghini/sesto-elemento.jpg",
    link: "/marques/lamborghini/sesto-elemento.html",
  },
  {
    name: "Veneno",
    image: "/img/cars/lamborghini/veneno.jpg",
    link: "/marques/lamborghini/veneno.html",
  },
  {
    name: "Sián FKP 37",
    image: "/img/cars/lamborghini/sian-fkp37.jpg",
    link: "/marques/lamborghini/sian-fkp37.html",
  },
  {
    name: "Centenario",
    image: "/img/cars/lamborghini/centenario.jpg",
    link: "/marques/lamborghini/centenario.html",
  },
  {
    name: "Murciélago",
    image: "/img/cars/lamborghini/murcielago.jpg",
    link: "/marques/lamborghini/murcielago.html",
  },
  {
    name: "Diablo",
    image: "/img/cars/lamborghini/diablo.jpg",
    link: "/marques/lamborghini/diablo.html",
  },
  {
    name: "Countach",
    image: "/img/cars/lamborghini/countach.jpg",
    link: "/marques/lamborghini/countach.html",
  },
  {
    name: "Miura",
    image: "/img/cars/lamborghini/miura.jpg",
    link: "/marques/lamborghini/miura.html",
  },
  {
    name: "Urus",
    image: "/img/cars/lamborghini/urus.jpg",
    link: "/marques/lamborghini/urus.html",
  },
  {
    name: "Essenza SCV12",
    image: "/img/cars/lamborghini/essenza-scv12.jpg",
    link: "/marques/lamborghini/essenza-scv12.html",
  },
],
    funFacts: [
        "Le taureau dans le logo fait référence au signe astrologique de Ferruccio Lamborghini.",
        "La Countach a inventé le concept de supercar en forme de coin futuriste.",
        "Le modèle Essenza SCV12 est réservé uniquement à un usage sur circuit.",
    ]
    },
    bugatti: {
  name: "Bugatti",
  tagline: "L’Art de la Vitesse",
  background: "/img/cars/bugatti/bugatti.jpg",
  logo: "/img/logos/bugatti2.svg",
  palette: {
    accent: "#0e3fa9",
    background: "#0f0f0f",
  },
  about: `Fondée en 1909 par Ettore Bugatti, la marque s’est rapidement imposée comme une légende dans le monde automobile.
Aujourd’hui, elle incarne la fusion ultime entre performance extrême, luxe absolu et héritage historique.`,
  history: `Bugatti s’est illustrée en compétition dès les années 20 avec des modèles comme la Type 35.
Après une période de silence, la renaissance de la marque avec la Veyron en 2005 a bouleversé le monde des hypercars.
Suivront la Chiron, la Bolide, et maintenant la Tourbillon.`,
  figures: [
    { label: "Année de fondation", value: "1909" },
    { label: "Puissance max", value: "1 825 ch (Bolide)" },
    { label: "Vitesse max", value: "490 km/h (Chiron Super Sport 300+)" },
    { label: "Siège", value: "Molsheim, France" },
  ],
  models: [
    {
      name: "Veyron",
      image: "/img/cars/bugatti/veyron.jpg",
      link: "/models/bugatti/veyron.html",
    },
    {
      name: "Chiron",
      image: "/img/cars/bugatti/chiron.jpg",
      link: "/models/bugatti/chiron.html",
    },
    {
      name: "Bolide",
      image: "/img/cars/bugatti/bolide.jpg",
      link: "/models/bugatti/bolide.html",
    },
  ],
  brandModelsLink: "/marques/bugatti/BugattiModels",
  allModels: [
  {
    name: "Veyron",
    image: "/img/cars/bugatti/veyron.jpg",
    link: "/marques/bugatti/veyron.html",
  },
  {
    name: "Chiron",
    image: "/img/cars/bugatti/chiron.jpg",
    link: "/marques/bugatti/chiron.html",
  },
  {
    name: "Chiron Super Sport 300+",
    image: "/img/cars/bugatti/chiron-300plus.jpg",
    link: "/marques/bugatti/chiron-300plus.html",
  },
  {
    name: "Divo",
    image: "/img/cars/bugatti/divo.jpg",
    link: "/marques/bugatti/divo.html",
  },
  {
    name: "Centodieci",
    image: "/img/cars/bugatti/centodieci.jpg",
    link: "/marques/bugatti/centodieci.html",
  },
  {
    name: "La Voiture Noire",
    image: "/img/cars/bugatti/la-voiture-noire.jpg",
    link: "/marques/bugatti/la-voiture-noire.html",
  },
  {
    name: "Bolide",
    image: "/img/cars/bugatti/bolide.jpg",
    link: "/marques/bugatti/bolide.html",
  },
  {
    name: "Tourbillon",
    image: "/img/cars/bugatti/tourbillon.jpg",
    link: "/marques/bugatti/tourbillon.html",
  },
],
  funFacts: [
    "La Veyron a été la première voiture de série à dépasser les 1 000 chevaux.",
    "Chaque Bugatti est assemblée à la main à Molsheim, en Alsace.",
    "La Chiron peut consommer 100 litres de carburant en 12 minutes à pleine vitesse.",
  ]
},
mclaren: {
  name: "McLaren",
  tagline: "Innovation. Performance. Legacy.",
  background: "/img/cars/mclaren/mclaren.jpg",
  logo: "/img/logos/mclaren.svg",
  palette: {
    accent: "#ff6c00",
    background: "#0f0f0f",
  },
  about: `Fondée en 1963 par Bruce McLaren, la marque britannique s’est imposée dans le sport auto avant de révolutionner le monde des supercars.
Chaque McLaren incarne la précision technologique et l’aérodynamisme extrême, dérivé de la F1.`,
  history: `D’abord écurie de Formule 1, McLaren a brillé avec des légendes comme Ayrton Senna. 
En 1992, elle crée la McLaren F1, considérée comme l’une des meilleures voitures de tous les temps. 
Aujourd’hui, McLaren continue d’innover avec des modèles comme la P1 hybride ou la Senna.`,
  figures: [
    { label: "Année de fondation", value: "1963" },
    { label: "Chevaux max", value: "1 055 ch (Speedtail)" },
    { label: "Vitesse max", value: "403 km/h (Speedtail)" },
    { label: "Siège", value: "Woking, Angleterre" },
  ],
  models: [
    {
      name: "McLaren F1",
      image: "/img/cars/mclaren/mclaren-f1.jpg",
      link: "/models/mclaren/f1.html",
    },
    {
      name: "P1",
      image: "/img/cars/mclaren/mclaren-p1.jpg",
      link: "/models/mclaren/p1.html",
    },
    {
      name: "Senna",
      image: "/img/cars/mclaren/mclaren.jpg",
      link: "/models/mclaren/senna.html",
    },
  ],
  brandModelsLink: "/marques/McLaren/McLarenModels",
  allModels: [
  {
    name: "McLaren F1",
    image: "/img/cars/mclaren/mclaren-f1.jpg",
    link: "/marques/mclaren/f1.html",
  },
  {
    name: "P1",
    image: "/img/cars/mclaren/mclaren-p1.jpg",
    link: "/marques/mclaren/p1.html",
  },
  {
    name: "Senna",
    image: "/img/cars/mclaren/mclaren.jpg",
    link: "/marques/mclaren/senna.html",
  },
  {
    name: "Speedtail",
    image: "/img/cars/mclaren/speedtail.jpg",
    link: "/marques/mclaren/speedtail.html",
  },
  {
    name: "Artura",
    image: "/img/cars/mclaren/artura.jpg",
    link: "/marques/mclaren/artura.html",
  },
  {
    name: "765LT",
    image: "/img/cars/mclaren/765lt.jpg",
    link: "/marques/mclaren/765lt.html",
  },
],
  funFacts: [
    "La McLaren F1 détient toujours le record de la voiture atmosphérique la plus rapide du monde (386 km/h).",
    "La position de conduite centrale de la F1 est inspirée des voitures de course.",
    "McLaren développe tous ses modèles dans son propre centre technologique à Woking.",
  ]
},
bmw: {
  name: "BMW",
  tagline: "The Ultimate Driving Machine",
  background: "/img/cars/bmw/bmw.jpg",
  logo: "/img/logos/bmw.svg",
  palette: {
    accent: "#0066b1",
    background: "#0f0f0f",
  },
  about: `Fondée en 1916 à Munich, BMW (Bayerische Motoren Werke) est synonyme d’ingénierie allemande de précision, de sportivité élégante et de conduite dynamique.
Que ce soit en thermique ou en électrique, BMW reste une référence du plaisir de conduite.`,
  history: `Initialement fabricant de moteurs d’avion, BMW s’est orienté vers l’automobile dans les années 1920.
L’entreprise a marqué l’histoire avec des séries mythiques comme la 3, la 5 ou la M, et s’impose désormais aussi dans l’électrique avec la gamme i.`,
  figures: [
    { label: "Année de fondation", value: "1916" },
    { label: "Chevaux max", value: "745 ch (BMW XM Label Red)" },
    { label: "Vitesse max", value: "305 km/h (M8 Competition)" },
    { label: "Siège", value: "Munich, Allemagne" },
  ],
  models: [
    {
      name: "BMW M3",
      image: "/img/cars/bmw/bmw-m3.jpg",
      link: "/models/bmw/m3.html",
    },
    {
      name: "BMW M5",
      image: "/img/cars/bmw/bmw-m5.jpg",
      link: "/models/bmw/m5.html",
    },
  ],
  brandModelsLink: "/marques/BMW/BMWModels",
  allModels: [
  {
    name: "BMW M3",
    image: "/img/cars/bmw/bmw-m3.jpg",
    link: "/marques/bmw/m3.html",
  },
  {
    name: "BMW M5",
    image: "/img/cars/bmw/bmw-m5.jpg",
    link: "/marques/bmw/m5.html",
  },
  {
    name: "BMW M8 Competition",
    image: "/img/cars/bmw/bmw-m8.jpg",
    link: "/marques/bmw/m8.html",
  },
],
  funFacts: [
    "Le logo BMW représente une hélice stylisée sur fond bleu et blanc (couleurs de la Bavière).",
    "La BMW M3 E30 est l'une des voitures les plus iconiques de l'histoire du sport auto.",
    "BMW possède aussi Rolls-Royce Motor Cars depuis 1998.",
  ]
},
audi: {
  name: "Audi",
  tagline: "Vorsprung durch Technik",
  background: "/img/cars/Audi/audi.jpg",
  logo: "/img/logos/audi.svg",
  about: `Audi, fondée officiellement en 1909, est une marque allemande premium reconnue pour son design épuré, ses technologies de pointe et sa sportivité raffinée. 
Son slogan "Vorsprung durch Technik" reflète son ADN : l’avance par la technologie.`,
  history: `Audi trouve ses origines dans le regroupement des quatre marques allemandes Auto Union (d'où les quatre anneaux). 
Depuis les années 80, elle est à la pointe avec la transmission quattro, les moteurs TFSI ou encore l’électrification avec la gamme e-tron.`,
  figures: [
    { label: "Année de fondation", value: "1909" },
    { label: "Chevaux max", value: "830 ch (Audi PB18 e-tron)" },
    { label: "Vitesse max", value: "330 km/h (R8 V10 Plus)" },
    { label: "Siège", value: "Ingolstadt, Allemagne" },
  ],
  models: [
    {
      name: "Audi R8",
      image: "/img/cars/Audi/audi-r8.jpg",
      link: "/marques/audi/r8.html",
    },
    {
      name: "RS6 Avant",
      image: "/img/cars/Audi/audi-rs6.jpg",
      link: "/marques/audi/PB-18.html",
    },
    {
      name: "R8 ABT",
      image: "/img/cars/Audi/audi-r8-abt.jpg",
      link: "/marques/audi/r8-abt.html",
    },
  ],
  funFacts: [
    `Le nom "Audi" est une traduction latine de "Horch", le nom du fondateur.`,
    "L’Audi Quattro a révolutionné le rallye avec sa transmission intégrale.",
    "La calandre \"Singleframe\" est devenue une signature esthétique de la marque.",
  ],
  brandModelsLink: "/marques/audi/AudiModels",
  allModels: [
  {
    name: "Audi R8",
    image: "/img/cars/Audi/audi-r8.jpg",
    link: "/marques/audi/r8.html",
  },
  {
    name: "PB18 R8 ABT",
    image: "/img/cars/Audi/audi-r8-abt.jpg",
    link: "/marques/audi/rb-ABT.html",
  },
  {
    name: "RS6 Avant",
    image: "/img/cars/Audi/audi-rs6.jpg",
    link: "/marques/audi/rs6.html",
  },
  {
    name: "RS7 Sportback",
    image: "/img/cars/Audi/audi-rs7.jpg",
    link: "/marques/audi/rs7.html",
  },
  {
    name: "PB18 e-tron",
    image: "/img/cars/Audi/audi-pb18.jpg",
    link: "/marques/audi/pb18.html",
  },
],
  palette: {
    accent: "#bb0a30",
    background: "#0f0f0f",
  }
},
mercedes: {
  name: "Mercedes-Benz",
  tagline: "The Best or Nothing",
  background: "/img/cars/Mercedes/Mercedes.jpg",
  logo: "/img/logos/mercedes.svg",
  about: `Mercedes-Benz est l’incarnation du luxe automobile à l’allemande. Fondée sur l’héritage de Karl Benz, la marque allie élégance, innovation, performance et sécurité.
Des berlines classiques aux hypercars AMG, chaque Mercedes incarne l’excellence.`,
  history: `Le nom Mercedes provient d’une voiture de course conçue en 1901. En 1926, Daimler et Benz fusionnent pour créer Mercedes-Benz.
Depuis, la marque s’est illustrée autant en Formule 1 qu’auprès des chefs d’État, et reste un pilier de l’ingénierie allemande.`,
  figures: [
    { label: "Année de fondation", value: "1926 (origine en 1886)" },
    { label: "Chevaux max", value: "1 049 ch (AMG One)" },
    { label: "Vitesse max", value: "352 km/h (AMG One)" },
    { label: "Siège", value: "Stuttgart, Allemagne" },
  ],
  models: [
    {
      name: "AMG One",
      image: "/img/cars/Mercedes/Mercedes.jpg",
      link: "/marques/mercedes/amg-one.html",
    },
    {
      name: "G63 AMG",
      image: "/img/cars/Mercedes/mercedes-g63.jpg",
      link: "/marques/mercedes/g63.html",
    },
    {
      name: "EQS",
      image: "/img/cars/Mercedes/mercedes-eqs.jpg",
      link: "/marques/mercedes/eqs.html",
    },
  ],
  funFacts: [
    "La Mercedes-AMG One embarque un moteur dérivé directement de la F1.",
    "La Classe G était à l’origine un véhicule militaire développé avec l’Iran dans les années 70.",
    "Mercedes est la première marque à avoir proposé l’ABS en série.",
  ],
  brandModelsLink: "/marques/mercedes/MercedesModels",
  allModels: [
  {
    name: "AMG One",
    image: "/img/cars/Mercedes/Mercedes.jpg",
    link: "/marques/mercedes/amg-one.html",
  },
  {
    name: "G63 AMG",
    image: "/img/cars/Mercedes/mercedes-g63.jpg",
    link: "/marques/mercedes/g63.html",
  },
  {
    name: "EQS",
    image: "/img/cars/Mercedes/mercedes-eqs.jpg",
    link: "/marques/mercedes/eqs.html",
  },
  {
    name: "Classe S",
    image: "/img/cars/Mercedes/mercedes-sclass.jpg",
    link: "/marques/mercedes/s-class.html",
  },
  {
    name: "CLK GTR",
    image: "/img/cars/Mercedes/clk-gtr.jpg",
    link: "/marques/mercedes/clk-gtr.html",
  },
  {
    name: "Vision AVTR",
    image: "/img/cars/Mercedes/mercedes-avtr.jpg",
    link: "/marques/mercedes/avtr.html",
  },
  {
    name: "SLR Stirling Moss",
    image: "/img/cars/Mercedes/mercedes-slr-stirling-moss.jpg",
    link: "/marques/mercedes/slr.html",
  },
],
  palette: {
    accent: "#005691",
    background: "#0f0f0f",
  }
},
pagani: {
  name: "Pagani",
  tagline: "L’art de la vitesse",
  background: "/img/cars/Pagani/Pagani.jpg",
  logo: "/img/logos/pagani.svg",
  about: `Pagani est une marque italienne de supercars fondée par Horacio Pagani. Chaque voiture est une œuvre d’art mécanique mêlant fibre de carbone, artisanat de luxe et performances extrêmes.
Leur philosophie : repousser les limites de la perfection, à la main.`,
  history: `En 1992, Horacio Pagani quitte Lamborghini pour fonder sa propre marque, convaincu du potentiel de la fibre de carbone.
En 1999, la Zonda C12 choque le monde automobile par son design, sa puissance et son niveau de finition.
Depuis, Pagani enchaîne les hypercars légendaires comme la Huayra ou l’Utopia.`,
  figures: [
    { label: "Année de fondation", value: "1992" },
    { label: "Modèle le plus puissant", value: "Huayra R – 850 ch" },
    { label: "Production annuelle", value: "Environ 40 voitures" },
    { label: "Lieu", value: "Modène, Italie" },
  ],
  models: [
    {
      name: "Zonda",
      image: "/img/cars/pagani/pagani-zonda.jpg",
      link: "/marques/pagani/zonda.html",
    },
    {
      name: "Huayra",
      image: "/img/cars/pagani/pagani-huayra.jpg",
      link: "/marques/pagani/huayra.html",
    },
    {
      name: "Utopia",
      image: "/img/cars/pagani/pagani-utopia.jpg",
      link: "/marques/pagani/utopia.html",
    },
  ],
  funFacts: [
    "La fibre de carbone utilisée chez Pagani est brevetée et mêle titane pour plus de rigidité.",
    "Chaque voiture est faite à la main, avec un niveau de personnalisation extrême.",
    "La Zonda est toujours produite à l’unité, malgré son âge.",
  ],
  brandModelsLink: "/marques/pagani/models/pagani_models.html",
  allModels: [
  {
    name: "Zonda",
    image: "/img/cars/pagani/pagani-zonda.jpg",
    link: "/marques/pagani/zonda.html",
  },
  {
    name: "Huayra",
    image: "/img/cars/pagani/pagani-huayra.jpg",
    link: "/marques/pagani/huayra.html",
  },
  {
    name: "Huayra R",
    image: "/img/cars/pagani/pagani-huyra-r.jpg",
    link: "/marques/pagani/huayra-r.html",
  },
  {
    name: "Utopia",
    image: "/img/cars/pagani/pagani-utopia.jpg",
    link: "/marques/pagani/utopia.html",
  },
],
  palette: {
    accent: "#004b87",
    background: "#1c1c1c",
  }
},
brabus: {
  name: "Brabus",
  tagline: "Plus que du luxe. De la puissance sans compromis.",
  background: "/img/cars/brabus/brabus.jpg",
  logo: "/img/logos/brabus.svg",
  about: `Brabus est une entreprise allemande spécialisée dans la personnalisation et la performance extrême de véhicules de luxe, principalement Mercedes-Benz. 
Elle transforme des modèles déjà puissants en monstres mécaniques de performance et de design, toujours avec un niveau de finition ultra premium.`,
  history: `Fondée en 1977 à Bottrop, Brabus est née de la passion de Bodo Buschmann pour la vitesse et l'exclusivité. 
En quelques années, la marque devient la référence du tuning haut de gamme, avec des records de vitesse, un style distinctif noir & chrome, et une réputation sans faille.`,
  figures: [
    { label: "Année de fondation", value: "1977" },
    { label: "Puissance max (BRABUS Rocket 1000)", value: "1 000+ ch" },
    { label: "Vitesse max homologuée", value: "370+ km/h" },
    { label: "Siège", value: "Bottrop, Allemagne" },
  ],
  models: [
    {
      name: "Rocket 900",
      image: "/img/cars/brabus/brabus-rocket.jpg",
      link: "/marques/brabus/rocket900.html",
    },
    {
      name: "G900",
      image: "/img/cars/brabus/brabus.jpg",
      link: "/marques/brabus/g900.html",
    },
    {
      name: "Brabus 700",
      image: "/img/cars/brabus/brabus-700.jpg",
      link: "/marques/brabus/brabus700.html",
    },
  ],
  funFacts: [
    "Brabus propose même des bateaux de luxe customisés (Brabus Marine).",
    "Chaque moteur Brabus est signé à la main par un ingénieur.",
    "Le Rocket 900 peut faire le 0 à 100 km/h en moins de 3,5 secondes.",
  ],
  brandModelsLink: "/marques/brabus/models/brabus_models.html",
  allModels: [
  {
    name: "Rocket 900",
    image: "/img/cars/brabus/brabus-rocket.jpg",
    link: "/marques/brabus/rocket900.html",
  },
  {
    name: "G900",
    image: "/img/cars/brabus/brabus.jpg",
    link: "/marques/brabus/g900.html",
  },
  {
    name: "Brabus 700",
    image: "/img/cars/brabus/brabus-700.jpg",
    link: "/marques/brabus/brabus700.html",
  },
],
  palette: {
    accent: "#a60000",
    background: "#0d0d0d",
  }
},
"rolls-royce": {
  name: "Rolls-Royce",
  tagline: "La quintessence du raffinement automobile",
  background: "/img/cars/Rolls-royce/rolls-royce.jpg",
  logo: "/img/logos/rolls-royce2.svg",
  about: `Fondée au début du XXe siècle, Rolls-Royce incarne l’excellence, le confort et la sophistication extrême.
Chaque voiture est construite sur-mesure, mêlant haute couture automobile et innovation silencieuse.`,
  history: `En 1904, Charles Rolls et Henry Royce s’associent pour créer ce qui allait devenir une légende de l’automobile de luxe.
Connue d’abord pour ses moteurs d’aviation, la marque s’est illustrée par des modèles mythiques comme la Phantom ou la Silver Ghost.
Aujourd’hui, Rolls-Royce allie artisanat classique et technologies du futur.`,
  figures: [
    { label: "Année de fondation", value: "1904" },
    { label: "Modèle phare", value: "Phantom VIII" },
    { label: "Production annuelle", value: "Environ 6 000 véhicules" },
    { label: "Siège", value: "Goodwood, Angleterre" },
  ],
  models: [
    {
      name: "Phantom",
      image: "/img/cars/Rolls-royce/rolls-phantom.jpg",
      link: "/marques/rolls-royce/phantom.html",
    },
    {
      name: "Ghost",
      image: "/img/cars/Rolls-royce/rolls-ghost.jpg",
      link: "/marques/rolls-royce/ghost.html",
    },
    {
      name: "Spectre",
      image: "/img/cars/Rolls-royce/rolls-spectre.jpg",
      link: "/marques/rolls-royce/spectre.html",
    },
  ],
  funFacts: [
    "Chaque Rolls-Royce contient de la laine et du bois rares travaillés à la main.",
    "Le célèbre “Spirit of Ecstasy” est un emblème qui se rétracte automatiquement.",
    "Rolls-Royce Spectre est le premier modèle 100% électrique de la marque.",
  ],
  brandModelsLink: "/marques/rolls-royce/models/rollsroyce_models.html",
  allModels: [
  {
    name: "Phantom",
    image: "/img/cars/Rolls-royce/rolls-phantom.jpg",
    link: "/marques/rolls-royce/phantom.html",
  },
  {
    name: "Ghost",
    image: "/img/cars/Rolls-royce/rolls-ghost.jpg",
    link: "/marques/rolls-royce/ghost.html",
  },
  {
    name: "Spectre",
    image: "/img/cars/Rolls-royce/rolls-spectre.jpg",
    link: "/marques/rolls-royce/spectre.html",
  },
  {
    name: "Cullinan",
    image: "/img/cars/Rolls-royce/rolls-cullinan.jpg",
    link: "/marques/rolls-royce/cullinan.html",
  },
  {
    name: "Wraith",
    image: "/img/cars/Rolls-royce/rolls-wraith.jpg",
    link: "/marques/rolls-royce/wraith.html",
  },
],
  palette: {
    accent: "#3b235f",
    background: "#121212",
  }
},
porsche: {
  name: "Porsche",
  tagline: "Ingénierie de précision. Esprit de compétition.",
  background: "/img/cars/porsche/porsche.jpg",
  logo: "/img/logos/porsche2.jpg",
  about: `Fondée en 1931 par Ferdinand Porsche, la marque est aujourd’hui l’un des piliers mondiaux du sport automobile. 
Porsche incarne la fusion entre l’innovation technique, le design intemporel et l’héritage de la compétition.`,
  history: `Du lancement de la 356 à l’icône 911, Porsche a marqué chaque décennie par son excellence. 
Avec une présence constante en endurance et en rallye, la marque a façonné son ADN autour de la performance.
Aujourd’hui, elle se réinvente avec des modèles électriques comme la Taycan, sans jamais trahir son identité.`,
  figures: [
    { label: "Année de fondation", value: "1931" },
    { label: "Modèle le plus emblématique", value: "911" },
    { label: "Victoires en endurance", value: "+700" },
    { label: "Siège", value: "Stuttgart, Allemagne" },
  ],
  models: [
    {
      name: "911",
      image: "/img/cars/porsche/porsche-911.jpg",
      link: "/marques/porsche/911.html",
    },
    {
      name: "Taycan",
      image: "/img/cars/porsche/porsche-taycan.jpg",
      link: "/marques/porsche/taycan.html",
    },
    {
      name: "918 Spyder",
      image: "/img/cars/porsche/porsche-918.jpg",
      link: "/marques/porsche/918.html",
    },
  ],
  funFacts: [
    "La 911 a connu plus de 1 000 déclinaisons depuis sa sortie en 1964.",
    "Porsche a développé le tout premier moteur hybride en... 1900 !",
    "La Taycan a été la première voiture à charger à plus de 270 kW.",
  ],
  brandModelsLink: "/marques/porsche/models/porsche_models.html",
  allModels: [
  {
    name: "Porsche 911",
    image: "/img/cars/porsche/porsche-911.jpg",
    link: "/marques/porsche/911.html",
  },
  {
    name: "Taycan",
    image: "/img/cars/porsche/porsche-taycan.jpg",
    link: "/marques/porsche/taycan.html",
  },
  {
    name: "918 Spyder",
    image: "/img/cars/porsche/porsche-918.jpg",
    link: "/marques/porsche/918.html",
  },
  {
    name: "Panamera",
    image: "/img/cars/porsche/porsche-panamera.jpg",
    link: "/marques/porsche/panamera.html",
  },
  {
    name: "Cayman GT4",
    image: "/img/cars/porsche/porsche-gt4.jpg",
    link: "/marques/porsche/gt4.html",
  },
],
  palette: {
    accent: "#d5001c",
    background: "#161616",
  }
},
"aston-martin": {
  name: "Aston Martin",
  tagline: "Power, Beauty and Soul",
  background: "/img/cars/Aston-Martin/aston-martin.jpg",
  logo: "/img/logos/aston-martin2.svg",
  about: `Marque britannique fondée sur l’élégance, la performance et le style, Aston Martin incarne l’essence du luxe sportif. 
Connue pour ses modèles de Grand Tourisme et son lien iconique avec James Bond, chaque Aston Martin est une pièce d’ingénierie et de raffinement.`,
  history: `Créée en 1913 par Lionel Martin et Robert Bamford, Aston Martin a traversé les époques avec une identité bien marquée. 
Elle s’est illustrée aussi bien sur circuit qu’au cinéma, notamment grâce aux célèbres DB5, DB11 ou encore la Valkyrie, preuve de son évolution vers l’hypercar.`,
  figures: [
    { label: "Année de fondation", value: "1913" },
    { label: "Modèle le plus puissant", value: "Aston Martin Valkyrie – 1 160 ch" },
    { label: "Vitesse max record", value: "355 km/h" },
    { label: "Siège", value: "Gaydon, Royaume-Uni" },
  ],
  models: [
    {
      name: "DB11",
      image: "/img/cars/Aston-Martin/astonmartin-db11.jpg",
      link: "/marques/astonmartin/db11.html",
    },
    {
      name: "Valkyrie",
      image: "/img/cars/Aston-Martin/astonmartin-valkyrie.jpg",
      link: "/marques/astonmartin/valkyrie.html",
    },
    {
      name: "Vantage",
      image: "/img/cars/Aston-Martin/astonmartin-vantage.jpg",
      link: "/marques/astonmartin/vantage.html",
    },
  ],
  funFacts: [
    "La DB5 est devenue culte grâce à James Bond dans \"Goldfinger\" (1964).",
    "La Valkyrie est co-développée avec Red Bull Racing.",
    "Le logo ailé s’inspire du dieu sumérien de la vitesse.",
  ],
  brandModelsLink: "/marques/astonmartin/models/astonmartin_models.html",
  allModels: [
  {
    name: "DB11",
    image: "/img/cars/Aston-Martin/astonmartin-db11.jpg",
    link: "/marques/aston-martin/db11.html",
  },
  {
    name: "Valkyrie",
    image: "/img/cars/Aston-Martin/astonmartin-valkyrie.jpg",
    link: "/marques/aston-martin/valkyrie.html",
  },
  {
    name: "Vantage",
    image: "/img/cars/Aston-Martin/astonmartin-vantage.jpg",
    link: "/marques/aston-martin/vantage.html",
  },
],
  palette: {
    accent: "#003b2b",
    background: "#111111",
  }
},
chevrolet: {
  name: "Chevrolet",
  tagline: "Find New Roads",
  background: "/img/cars/chevrolet/chevrolet.jpg",
  logo: "/img/logos/chevrolet.svg",
  about: `Chevrolet est une marque américaine emblématique connue pour ses voitures robustes, accessibles et puissantes. 
Des muscle cars aux pick-ups, en passant par des véhicules haute performance comme la Corvette, Chevrolet a marqué l’histoire automobile.`,
  history: `Fondée en 1911 par Louis Chevrolet et William C. Durant, Chevrolet devient rapidement un pilier du groupe General Motors.
La marque est célèbre pour ses innovations techniques et ses modèles légendaires comme la Camaro, la Impala ou encore la Corvette.`,
  figures: [
    { label: "Année de fondation", value: "1911" },
    { label: "Modèle le plus rapide", value: "Corvette ZR1 – 341 km/h" },
    { label: "Ventes globales", value: "+200 millions de véhicules" },
    { label: "Siège", value: "Détroit, Michigan, USA" },
  ],
  models: [
    {
      name: "Corvette C8",
      image: "/img/cars/chevrolet/chevrolet-corvette-c8.jpg",
      link: "/marques/chevrolet/corvette-c8.html",
    },
    {
      name: "Camaro",
      image: "/img/cars/chevrolet/chevrolet-camaro.jpg",
      link: "/marques/chevrolet/camaro.html",
    },
    {
      name: "Impala",
      image: "/img/cars/chevrolet/chevrolet-impala.jpg",
      link: "/marques/chevrolet/impala.html",
    },
  ],
  funFacts: [
    "La Corvette est la première supercar américaine à moteur central (depuis la C8).",
    "La Camaro est une rivale historique de la Ford Mustang depuis 1966.",
    "Chevrolet a longtemps sponsorisé Manchester United.",
  ],
  brandModelsLink: "/marques/chevrolet/models/chevrolet_models.html",
  allModels: [
  {
    name: "Corvette C8",
    image: "/img/cars/chevrolet/chevrolet-corvette-c8.jpg",
    link: "/marques/chevrolet/corvette-c8.html",
  },
  {
    name: "Camaro",
    image: "/img/cars/chevrolet/chevrolet-camaro.jpg",
    link: "/marques/chevrolet/camaro.html",
  },
  {
    name: "Impala",
    image: "/img/cars/chevrolet/chevrolet-impala.jpg",
    link: "/marques/chevrolet/impala.html",
  },
],
  palette: {
    accent: "#f9c000",
    background: "#1c1f26",
  }
},
dodge: {
  name: "Dodge",
  tagline: "Domestic. Not Domesticated.",
  background: "/img/cars/Dodge/dodge.jpg",
  logo: "/img/logos/dodge2.svg",
  about: `Dodge est l'incarnation de la puissance brute et du style américain. 
Connue pour ses muscle cars iconiques comme la Charger ou la Challenger, la marque repousse les limites en matière de performance et de caractère.`,
  history: `Fondée en 1900 par les frères Dodge, la marque a d'abord produit des composants pour Ford avant de lancer ses propres véhicules. 
Aujourd’hui, Dodge est célèbre pour ses V8 HEMI, ses looks agressifs et sa philosophie « anti-conventionnelle ».`,
  figures: [
    { label: "Année de fondation", value: "1900" },
    { label: "Modèle le plus puissant", value: "Challenger SRT Demon 170 – 1025 ch" },
    { label: "Quarter Mile", value: "8.91 sec (Demon 170)" },
    { label: "Siège", value: "Auburn Hills, Michigan, USA" },
  ],
  models: [
    {
      name: "Challenger SRT",
      image: "/img/cars/Dodge/dodge-challenger.jpg",
      link: "/marques/dodge/challenger.html",
    },
    {
      name: "Charger SRT",
      image: "/img/cars/Dodge/dodge-charger.jpg",
      link: "/marques/dodge/charger.html",
    },
    {
      name: "Viper",
      image: "/img/cars/Dodge/dodge-viper.jpg",
      link: "/marques/dodge/viper.html",
    },
  ],
  funFacts: [
    "La Dodge Viper a été conçue sans aides électroniques à ses débuts.",
    "La Challenger SRT Demon 170 est livrée avec un parachute en option.",
    "Dodge organise ses propres events de drag race : le \"Roadkill Nights\".",
  ],
  brandModelsLink: "/marques/dodge/models/dodge_models.html",
  allModels: [
  {
    name: "Challenger SRT",
    image: "/img/cars/Dodge/dodge-challenger.jpg",
    link: "/marques/dodge/challenger.html",
  },
  {
    name: "Charger SRT",
    image: "/img/cars/Dodge/dodge-charger.jpg",
    link: "/marques/dodge/charger.html",
  },
  {
    name: "Viper",
    image: "/img/cars/Dodge/dodge-viper.jpg",
    link: "/marques/dodge/viper.html",
  },
],
  palette: {
    accent: "#cc0000",
    background: "#121212",
  }
},
nissan: {
  name: "Nissan",
  tagline: "Innovation that excites.",
  background: "/img/cars/nissan/nissan.jpg",
  logo: "/img/logos/nissan2.svg",
  about: `Nissan est l'un des plus grands constructeurs japonais, connu pour ses modèles innovants, sportifs et technologiques. 
De la légendaire GT-R à la citadine électrique Leaf, Nissan incarne la puissance maîtrisée et la modernité.`,
  history: `Fondée en 1933, Nissan a su évoluer d'une petite entreprise nippone à un leader mondial de l'automobile. 
La Skyline GT-R, devenue une icône mondiale, incarne l'excellence japonaise dans les circuits comme sur route.`,
  figures: [
    { label: "Année de fondation", value: "1933" },
    { label: "Modèle le plus iconique", value: "Nissan GT-R R35" },
    { label: "Voitures électriques vendues", value: "+650 000 Leaf" },
    { label: "Siège", value: "Yokohama, Japon" },
  ],
  models: [
    {
      name: "GT-R R35",
      image: "/img/cars/nissan/nissan-gtr.jpg",
      link: "/marques/nissan/gtr-r35.html",
    },
    {
      name: "370Z",
      image: "/img/cars/nissan/nissan-370z.jpg",
      link: "/marques/nissan/370z.html",
    },
    {
      name: "Leaf",
      image: "/img/cars/nissan/nissan-leaf.jpg",
      link: "/marques/nissan/leaf.html",
    },
  ],
  funFacts: [
    'La GT-R R35 est surnommée "Godzilla" pour ses performances monstrueuses.',
    "La Skyline originale date de 1957 (avant même qu’elle soit une GT-R).",
    "La Leaf fut la voiture électrique la plus vendue au monde pendant plusieurs années.",
  ],
  brandModelsLink: "/marques/nissan/models/nissan_models.html",
  allModels: [
  {
    name: "GT-R R35",
    image: "/img/cars/nissan/Nissan.jpg",
    link: "/marques/nissan/gtr-r35.html",
  },
  {
    name: "370Z",
    image: "/img/cars/nissan/nissan-370z.jpg",
    link: "/marques/nissan/370z.html",
  },
  {
    name: "Leaf",
    image: "/img/cars/nissan/nissan-leaf.jpg",
    link: "/marques/nissan/leaf.html",
  },
],
  palette: {
    accent: "#e60012",
    background: "#111111",
  }
},
toyota: {
  name: "Toyota",
  tagline: "Let’s Go Places, Faster.",
  background: "/img/cars/toyota/toyota-supra.jpg",
  logo: "/img/logos/toyota.png",
  about: `Toyota est un constructeur japonais de renommée mondiale, reconnu pour sa fiabilité, son innovation technologique et sa gamme hybride pionnière. 
De la mythique Supra à la révolutionnaire Prius, Toyota allie performance et durabilité.`,
  history: `Fondée en 1937, Toyota est devenue un géant de l’automobile. Elle est l’une des premières marques à démocratiser l’hybride avec la Prius, 
tout en marquant les esprits avec des modèles iconiques comme la Celica ou la Supra.`,
  figures: [
    { label: "Année de fondation", value: "1937" },
    { label: "Modèle le plus iconique", value: "Toyota Supra" },
    { label: "Véhicules hybrides vendus", value: "+20 millions" },
    { label: "Siège", value: "Toyota City, Japon" },
  ],
  models: [
    {
      name: "Supra",
      image: "/img/cars/toyota/toyota-supra.jpg",
      link: "/marques/toyota/supra.html",
    },
    {
      name: "GR Yaris",
      image: "/img/cars/toyota/toyota-gr-yaris.jpg",
      link: "/marques/toyota/gr-yaris.html",
    },
  ],
  funFacts: [
    "La GR Yaris a été développée avec les équipes du WRC (rallye mondial).",
    "La Supra MK4 est une légende du tuning et de Fast & Furious.",
    "Toyota a vendu plus de 20 millions de voitures hybrides dans le monde.",
  ],
  brandModelsLink: "/marques/toyota/models/toyota_models.html",
  allModels: [
  {
    name: "Supra",
    image: "/img/cars/toyota/toyota-supra.jpg",
    link: "/marques/toyota/supra.html",
  },
  {
    name: "GR Yaris",
    image: "/img/cars/toyota/toyota-gr-yaris.jpg",
    link: "/marques/toyota/gr-yaris.html",
  },
],
  palette: {
    accent: "#eb0a1e",
    background: "#1a1a1a",
    section: "#1f1f1f",
  }
},
ford: {
  name: "Ford",
  tagline: "Go Further, Go Faster.",
  background: "/img/cars/ford/ford.jpg",
  logo: "/img/logos/ford2.svg",
  about: `Ford est l’un des pionniers de l’automobile, reconnu pour son influence historique sur l’industrie 
et pour ses modèles sportifs comme la Mustang ou la légendaire GT40. 
La marque symbolise la puissance américaine et l’innovation.`,
  history: `Fondée en 1903 par Henry Ford, la marque a révolutionné l’automobile avec la production en série. 
Ford a aussi marqué les esprits avec ses performances en endurance, notamment avec la mythique GT40 aux 24h du Mans.`,
  figures: [
    { label: "Année de fondation", value: "1903" },
    { label: "Modèle le plus iconique", value: "Ford Mustang" },
    { label: "Palmarès sportif", value: "Quadruple vainqueur du Mans" },
    { label: "Siège", value: "Dearborn, Michigan, USA" },
  ],
  models: [
    {
      name: "Mustang",
      image: "/img/cars/ford/ford-mustang.jpg",
      link: "/marques/ford/mustang.html",
    },
    {
      name: "GT40",
      image: "/img/cars/ford/ford-gt40.jpg",
      link: "/marques/ford/gt40.html",
    },
    {
      name: "Shelby",
      image: "/img/cars/ford/ford-shelby.jpg",
      link: "/marques/ford/shelby.html",
    },
  ],
  funFacts: [
    "La GT40 a battu Ferrari quatre fois d'affilée au Mans (1966-1969).",
    "La Mustang est l'une des sportives les plus vendues au monde.",
    "Ford a démocratisé la voiture avec la célèbre Ford T.",
  ],
  brandModelsLink: "/marques/ford/models/ford_models.html",
  allModels: [
  {
    name: "Mustang GT500",
    image: "/img/cars/ford/ford-mustang.jpg",
    link: "/marques/ford/mustang-gt500.html",
  },
  {
    name: "GT40",
    image: "/img/cars/ford/ford-gt40.jpg",
    link: "/marques/ford/gt40.html",
  },
  {
    name: "Shelby GT500",
    image: "/img/cars/ford/ford-shelby.jpg",
    link: "/marques/ford/shelby-gt500.html",
  },
],
  palette: {
    accent: "#003399",
    background: "#121212",
    section: "#1f1f1f",
  }
},
koenigsegg: {
  name: "Koenigsegg",
  tagline: "Beyond Hypercar Limits.",
  background: "/img/cars/koenigsegg/koenigsegg.jpg",
  logo: "/img/logos/koenigsegg.png",
  about: `Koenigsegg est un constructeur suédois fondé avec une seule mission : repousser les limites de la performance automobile. 
De la technologie révolutionnaire à la vitesse brute, chaque modèle est une œuvre d’ingénierie extrême.`,
  history: `Fondée en 1994 par Christian von Koenigsegg, la marque s'est rapidement imposée comme une référence absolue dans le monde des hypercars. 
Koenigsegg allie innovation radicale, matériaux de pointe, et records de vitesse.`,
  figures: [
    { label: "Année de fondation", value: "1994" },
    { label: "Modèle le plus rapide", value: "Jesko Absolut" },
    { label: "Record notable", value: "0-400-0 km/h en 31.49 sec" },
    { label: "Siège", value: "Ängelholm, Suède" },
  ],
  models: [
    {
      name: "Jesko",
      image: "/img/cars/koenigsegg/koenigsegg-jesko.jpg",
      link: "/marques/koenigsegg/jesko.html",
    },
    {
      name: "Regera",
      image: "/img/cars/koenigsegg/koenigsegg-regera.jpg",
      link: "/marques/koenigsegg/regera.html",
    },
    {
      name: "Gemera",
      image: "/img/cars/koenigsegg/koenigsegg-agera.jpg", // à corriger si besoin
      link: "/marques/koenigsegg/agera.html", // idem
    },
  ],
  funFacts: [
    "Le Jesko peut atteindre plus de 500 km/h (en théorie).",
    "Le moteur du Gemera est un 3 cylindres bi-turbo de 1700 chevaux (!).",
    "Le Regera n’a pas de boîte de vitesses classique (transmission directe unique).",
  ],
  brandModelsLink: "/marques/koenigsegg/models/koenigsegg_models.html",
  allModels: [
  {
    name: "Jesko",
    image: "/img/cars/koenigsegg/koenigsegg-jesko.jpg",
    link: "/marques/koenigsegg/jesko.html",
  },
  {
    name: "Regera",
    image: "/img/cars/koenigsegg/koenigsegg-regera.jpg",
    link: "/marques/koenigsegg/regera.html",
  },
  {
    name: "Agera",
    image: "/img/cars/koenigsegg/koenigsegg-agera.jpg",
    link: "/marques/koenigsegg/agera.html",
  },
],
  palette: {
    accent: "#f5a300",
    background: "#111111",
    section: "#1e1e1e",
  }
},
hennessey: {
  name: "Hennessey",
  tagline: "Built to Dominate.",
  background: "/img/cars/hennessey/hennessey.jpg",
  logo: "/img/logos/henessey.png",
  about: `Hennessey Performance est une entreprise américaine spécialisée dans la fabrication et la préparation de voitures ultra-performantes. 
Connu pour ses records de vitesse, Hennessey est synonyme de puissance brute.`,
  history: `Fondée en 1991 par John Hennessey, la marque a commencé en modifiant des supercars pour les rendre encore plus extrêmes. 
Elle est aujourd'hui connue mondialement pour ses modèles comme la Venom GT et la Venom F5.`,
  figures: [
    { label: "Année de fondation", value: "1991" },
    { label: "Modèle le plus puissant", value: "Venom F5 (1817 ch)" },
    { label: "Objectif vitesse", value: "500+ km/h" },
    { label: "Siège", value: "Sealy, Texas, USA" },
  ],
  models: [
    {
      name: "Venom F5",
      image: "/img/cars/hennessey/hennessey-venomf5.jpg",
      link: "/marques/hennessey/venom-f5.html",
    },
    {
      name: "Venom GT",
      image: "/img/cars/hennessey/hennessey-venomgt.jpg",
      link: "/marques/hennessey/venom-gt.html",
    },
  ],
  funFacts: [
    "La Venom GT a atteint 435 km/h en 2014, battant la Veyron sur route fermée.",
    'Le moteur de la F5 est un V8 bi-turbo nommé "Fury".',
    "Hennessey modifie aussi des pick-ups, SUV et muscle cars à plus de 1000 ch.",
  ],
  brandModelsLink: "/marques/hennessey/models/hennessey_models.html",
  allModels: [
  {
    name: "Venom F5",
    image: "/img/cars/hennessey/hennessey-venomf5.jpg",
    link: "/marques/hennessey/venom-f5.html",
  },
  {
    name: "Venom GT",
    image: "/img/cars/hennessey/hennessey-venomgt.jpg",
    link: "/marques/hennessey/venom-gt.html",
  },
],
  palette: {
    accent: "#d60000",
    background: "#111111",
    section: "#1d1d1d",
  }
},
apollo: {
  name: "Apollo",
  tagline: "Emotion meets Engineering.",
  background: "/img/cars/apollo/apollo.jpg",
  logo: "/img/logos/apollo.png",
  about: `Apollo est un constructeur allemand d’hypercars qui allie art automobile, performances extrêmes et design futuriste. 
Chaque modèle est pensé comme une œuvre sculptée pour la piste comme pour la route.`,
  history: `Dérivée de Gumpert, la marque Apollo renaît avec l’Intensa Emozione. Sa mission : faire vibrer l’automobile en fusionnant émotion brute et technologies avancées. 
L’ADN de la marque reste axé sur l’adrénaline pure.`,
  figures: [
    { label: "Année de renaissance", value: "2016" },
    { label: "Modèle phare", value: "Apollo IE" },
    { label: "Production ultra-limitée", value: "10 exemplaires de l’IE" },
    { label: "Siège", value: "Denkendorf, Allemagne" },
  ],
  models: [
    {
      name: "Intensa Emozione",
      image: "/img/cars/apollo/apollo-ie.jpg",
      link: "/marques/apollo/intensa-emozione.html",
    },
    {
      name: "Project EVO",
      image: "/img/cars/apollo/apollo-evo.jpg",
      link: "/marques/apollo/project-evo.html",
    }
  ],
  funFacts: [
    "L’Apollo IE utilise un V12 atmosphérique de 6.3L à plus de 9000 tr/min.",
    "Le design s’inspire des formes biologiques et de l’aérodynamique naturelle.",
    "La marque vise une expérience émotionnelle intense avant tout.",
  ],
  brandModelsLink: "/marques/apollo/models/apollo_models.html",
  allModels: [
  {
    name: "Intensa Emozione",
    image: "/img/cars/apollo/apollo-ie.jpg",
    link: "/marques/apollo/intensa-emozione.html",
  },
  {
    name: "Project EVO",
    image: "/img/cars/apollo/apollo-evo.jpg",
    link: "/marques/apollo/project-evo.html",
  },
  {
    name: "Gumpert Apollo",
    image: "/img/cars/apollo/gumpert-apollo.jpg",
    link: "/marques/apollo/gumpert-apollo.html",
  },
],
  palette: {
    accent: "#9b0000",
    background: "#0e0e0e",
    section: "#1a1a1a",
  }
}
};

export default brandsData;