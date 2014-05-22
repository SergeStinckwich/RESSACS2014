module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "RESSACS'14",
      description: "RESeaux de capteurS et Applications Critiques de Surveillance",
      date: "3-4 Juin, 2014",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "IRD",
      address: "32 avenue Henri Varagnat",
      city: "Bondy",
      state: "France"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "S'inscrire!",
        link: "https://docs.google.com/forms/d/1exdOiLFATi-ETwSjR2-oqURJtGBe5t7NV_XeDL87Uds/viewform"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "ird",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-9711668-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Objectifs",
      location: "Lieu",
      speakers: "Conférenciers",
      schedule: "Programme",
      sponsors: "Sponsors",
//      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "François Beauducel",
        photo: "themes/ird/img/francois-beauducel.jpg",
        bio: "François Beauducel est ingénieur des Arts et Métiers, docteur en géophysique et aujourd'hui professeur à l'Institut de Physique du Globe de Paris. Spécialiste de la déformation des volcans actifs en instrumentation et modélisation numérique (Indonésie, Antilles, Réunion, Italie), il a été 7 ans directeur de l'Observatoire volcanologique et sismologique de Guadeloupe.",
        company: "Institut de physique du globe de Paris",
        link: {
          href: "http://www.ipgp.fr/~beaudu/",
          text: "Page web"
        },
        presentation: {
          title: "Le SI WEBOBS: un ensemble d’outils intégrés de gestion pour les observatoires telluriques",
          description: "Les observatoires volcanologiques et sismologiques doivent assurer une double mission de collecte de données pluridisciplinaires à des fins de recherche et une mission de surveillance temps-réel et d'alerte aux autorités. Ces objectifs entrainent la gestion de réseaux de capteurs très variés associés à des données extrêmement hétérogènes (paramètres physico-chimique, échantillonnages manuel/automatique, fréquence et formats d'acquisition, métadonnées ...). Le système WEBOBS, développé depuis 2001 et implanté dans plusieurs observatoires opérationnels, apporte une solution intégrée et effective à ces problématiques.",
          time: ""
        }
      },
      {
        name: "Emile Faye",
        photo: "themes/ird/img/emile-faye.jpg",
        bio: "Emile Faye est doctorant en agro-écologie thermique au laboratoire Biodiversité et évolution des complexes plantes-insectes ravageurs-antagonistes de l’Institut de Recherche pour le Développement (IRD). Ses travaux de thèse s’articulent autour de la relation entre les paysages thermiques et la dynamique de ravageurs des cultures dans les Andes tropicales. Il étudie les microclimats rencontrés par les ravageurs des cultures au moyen de caméras infrarouges et visuelles embarquées sur un hexaptère et de micro-capteurs au sol.",
        company: "Biodiversité et évolution des complexes plantes-insectes ravageurs-antagonistes, IRD",
        link: {
          href: "http://emilefaye.com/",
          text: "Page web"
        },
        presentation: {
          title: "High resolution U.A.V. thermal imagery for the study of pest dynamics in the tropical Andes",
          description: "Les drones sont de nouveaux outils très prometteurs pour la recherche. Equipés de tous types de capteurs, volant bas et lentement, ils permettent l’acquisition  rapide, bon marché et répétable de données spatialisées à très hautes résolutions. Cette présentation exposera les travaux effectués dans les Andes équatoriennes pour la caractérisation des patrons spatio-temporels d'hétérogénéité thermique des agrosystèmes à l’échelle de l’insecte ravageur. L’utilisation de caméra thermique embarquée sur un drone combinée à de nombreux capteurs au sol a permis l’obtention d’orthophotos visuelles et infrarouges de hautes résolutions (1,3 cm/px et 5 cm/px respectivement) et la modélisation du microclimat des agrosystèmes (air, plante et sol). Ces données analysées dans des SIG mettent en évidence l’effet significatif du microclimat sur la présence et distribution des insectes ravageurs dans les agro-systèmes andins.",
          time: ""
        }
      },
      {
        name: "Congduc Pham",
        photo: "themes/ird/img/congduc-pham.jpg",
        bio: "Congduc Pham est professeur d’informatique à l’Université de Pau et Pays de l’Adour. Ses domaines de recherche sont les réseaux de communication et la qualité de service.  Depuis plusieurs années, il s’intéresse aux réseaux de capteurs sans-fils et aux applications critiques de surveillance.",
        company: "Université de Pau",
        link: {
          href: "http://web.univ-pau.fr/~cpham/",
          text: "Page web"
        },
        presentation: {
          title: "Réseaux de capteurs pour la surveillance, d'une démarche adhoc vers une approche standardisée",
          description: "Les réseaux de capteurs sont des technologies très prometteuses pour un grand nombre d'applications à fort impact sociétal et environnemental. De nombreuses infrastructures expérimentales ont été mises en place, souvent de manière adhoc en développant les outils, les protocoles et les environnements logiciels adéquats. Depuis quelques années, nous assistons à l'émergence d'un besoin générique d'adresser et de gérer un grand nombre d'objets communicants (dont les réseaux de capteurs) pour collecter et traiter de grandes masses/flux de données. Dans cette présentation, nous montrerons comment passer d'une gestion adhoc vers une gestion plus générique et standardisé de telles infrastructures pour permettre un connectivité de bout-en-bout avec le réseau Internet et bénéficier de toute la puissance de traitement des nouvelles infrastructures de type cloud.",
          time: ""
        }
      },
      {
        name:"Bernard Pottier",
        photo: "themes/ird/img/bernard-pottier.jpg",
        bio: "Bernard Pottier a travaillé à la réalisation d'outils de conception d'architectures de traitement de 1990 à 2007, dans le cadre de plusieurs projets nationaux et internationaux. Depuis 2008, ses recherches sont tournées vers les réseaux de capteurs sans fil et les méthodes de conception d'applications sociétales et environnementales.",
        company: "Université de Bretagne Occidentale, Lab-STICC",
        link: {
          href:"http://wsn.univ-brest.fr/pottier/",
          text:"Page web"
        },
        presentation: {
          title: "Global warming, global sharing, a case for micro satellites and sensor networks",
          description: "Les capacités des capteurs et des communications sans fil permettent de construire des systèmes de perception physique des évolutions de l'environnement. La réalisation de systèmes de collectes aériens ou satellitaires peut désormais permettre la récupération et la diffusion ouverte de ces informations, parfois lointaines et inaccessibles, à l'image d'un  internet 'spatial'. Nous présentons ce contexte, et les techniques de simulation proposées pour un projet <<MIcro-satellite et réseaux de CApteurs>>.",
          time: ""
          }
        },
        {
          name:"Onil Goubier",
          photo:"themes/ird/img/onil-goubier.jpg",
          bio:"Diplômée de l'ITB Indonésie et de l'université de Rennes I, Onil a travaillé dans les systèmes parallèles, distribués et temps réel, dans l'industrie et en académique. Elle s'intéresse actuellement aux réseaux des capteurs pour des applications de prévention des catastrophes naturelles, et sur des aspects de diffusion sociétale de capteurs.",
          company:"Association Takanea / DRR Indonesia Foundation",
          link:{
            href:"",
            text:""
          },
          presentation: {
            title: "Réseaux de capteurs pour la surveillance des inondations à Jakarta",
            description: "Jakarta est une ville très affectée par des inondations récurrentes, aggravées par les changements climatiques. Les réseaux de capteurs sont une solution prometteuse pour surveiller, alerter, collecter des données et étudier des inondations. Nous présenterons la problématique de Jakarta, l'infrastructure en place et les efforts en réseaux de capteurs.",
            time:""
          }
        },
        {
          name:"Sébastien Chipeaux",
          photo:"themes/ird/img/sebastien-chipeaux.jpg",
          bio:"J'ai soutenu mon doctorat d'Informatique le 17 Décembre 2013. Mon sujet de thèse était la Génération automatique de systèmes multi-agents à partir de modèle pour la simulation de systèmes complexes géographiques à entités mobiles. Les travaux menés au cours de ce doctorat fournissent un méta-modèle graphique et outil de modélisation adaptés à la création de modèles agents qui représentent la dimension géographique et entités mobiles qui composent les systèmes étudiés : par exemple une ville. La simulation générée automatiquement à partir de ce modèle permet à des scientifiques non-informaticiens d'appréhender l'impact de différents scenarii sur le comportement des entités qui peuplent le système : les habitants de la ville par exemple. J'effectue actuellement un post-doctorat dans le cadre d'un projet européen sur la surveillance de machines industrielles à l'aide de réseaux de capteurs pour la maintenance prédictive.",
          company:"",
          link:{
            href:"",
            text:""
          },
          presentation: {
            title: "Réseau de capteurs sans fil pour la surveillance de machines industrielles",
            description: "La thématique réseaux de capteurs est étudiée depuis 10 ans au sein de l'équipe CARTOON du Département d'Informatique des Systèmes Complexes (DISC) du laboratoire FEMTO-ST à l'Université de Franche-Comté. Dans ce cadre nous participons au projet européen MainPreSI dans le cadre de l'INTERREG IV. Nous souhaitons utiliser une technologie innovante basée sur un ensemble capteurs passifs sans fil + interrogateur disant qui alimente, communique et interroge les capteurs disposés sur la machine à surveiller grâce à la technologie RADAR. Plusieurs verrous doivent être levés comme, par exemple, la validité des données reçues par l'interrogateur, la communication entre interrogateur ou encore le traitement des données.",
            time:""
          }
        },
        {
          name:"Hiep Xuan Huynh",
          photo: "themes/ird/img/hiep-xuan-huynh.jpg",
          bio:"Huỳnh Xuân Hiệp is currently associate professor in the Department of Software Engineering, College of Information and Communication Technology, Can Tho  University. He received the engineer, master and Ph.D. degrees in computer science  from Can Tho University (CTU), l’Institut de la Francophonie pour l’Informatique (IFI)  and Polytechnics School of Nantes University (Polytech’Nantes) in 1996, 1998 and 2006 respectively. His research interests includes knowledge discovery from databases, machine learning, simulation, modeling decisions, bioinformatics, embedded systems and wireless sensor network. He is also the head of the DREAM (Decision-support Research for Environmental Applications and Models) multidisciplinary research team associated with l’Institut de Recherche pour le Développement (IRD).",
          company:"Can Tho University, Vietnam",
          link:{
            href:"",
            text:""
          },
          presentation:{
            title:"Mekong Delta: measuring and managing risks, a case for wireless sensor networks",
            description:"",
            time:""
          }
        },
        {
          name:"Stéphane Louise",
          photo:"themes/ird/img/stephane-louise.jpg",
          bio:"Stéphane Louise is working as Research Engineer at CEA-LIST. His current focus is on harvesting the processing power of the emergent embedded manycore platforms through several aspects, and 3 main topics: 1) Programming Languages and compilation, 2) Execution support and execution scheme, and 3) Execution time and architectural constraints. He worked on the MPPA chip architecture and its programming model incollaboration with Kalray, and on the safety critical real-time programming tools OASIS with AREVA-NP. He obtained his PhD from U-Psud in 2002 and is now finalizing his HDR.",
          company:"CEA-LIST",
          link:{
            href:"",
            text:""
          },
          presentation:{
          title:"A Model of Computation for highly parallel and dynamic system",
          description:"Todays challenges in real-time systems including sensor networks is that they have massive scale with high parallelism level, and at the same time they can be highly dynamic, with parts that are intermittently connected to a core system. For fixed (non dynamic) systems, dataflow paradigms works reasonably well, especially for signal processing. But with parts of the system that connect and disconnect in a unpredictable fashion, the usual dataflow models does not work. We want to show how to improve a deterministic dataflow model (mostly CSDF) with data management which retains the deterministic properties of the base modelbut without the constraints of a static (non dynamic) system.",
          time:""
        }
      },
        {
          name:"Florent Arrignon",
          photo:"",
          bio:"MAD-Environnement  is  a  young  innovative  company  based  in  Southern France.  Its  activities  encompass  data  mining,  modelling  and  risk analysis. MAD-Environnement  brings  innovative  and  controlled solutions  to  many  segments  and  activities,  such  as  environmental  and  health  services,  food  processing,  or  shipbuilding  industries. MAD-Environnement  provides  its  skills  via  three  operation  modes:  i) Mathematical and Risk expertise and training, ii) Model building and iii)Software development.",
          company:"MAD Environnement",
          link:{
            href:"http://mad-environnement.com/",
            text:"Web site"
          },
          presentation:{
          title:"Risque  et  réseaux  de  capteurs :  potentiel  d’application  de la méthodologie d’Analyse Globale des Risques",
          description:"Les  réseaux  de  capteurs  sont  des  systèmes  complexes  de par  la  structure  des  éléments  les  constituant,  leur  architecture de  déploiement  et  leur  généricité  d’applications.  Du  fait  de  cette complexité,  un  réseau  de  capteurs  est  exposé  à  de  nombreux  risques de  différentes  natures  (techniques,  environnementaux,  humains, économiques…)  et  à  différents  stades  de  vie  du  réseau  (conception, déploiement,  fonctionnement,  démantèlement…). Pour  obtenir  une vision  globale  des  risques  auxquels  est  exposé  ce  système,  il  est important  d’éviter  de  les  traiter  par  des  disciplines  cloisonnées et  des  outils  trop  spécifiques. L’Analyse  Globale  des  Risques  est une méthode qui permet de répondre à cette contrainte, conformément à  la  norme  ISO  31000  de  management  des  risques.  Par  un  processus invariant  et  indépendant  du  type  de  système  étudié,  elle  permet, à  l’échelle  globale  du  système,  i)  de  générer  la  cartographie de  l’exposition  aux  dangers  pour  chacun  des  éléments  du  système, ii)  de  déterminer  les  échelles  d’évaluation  et  le  référentiel d’acceptabilité  du  risque,  iii)  de  hiérarchiser  les  scénarios  à risques  et  iv)  de  fournir  un  plan  de  management  des  risques.  Le potentiel  d’application  de  cette  méthode  aux  réseaux  de  capteurs est  présenté  par  le  biais  d’illustrations  issues  d’applications  sur d’autres systèmes complexes et par la spécification des besoins pour documenter une telle analyse.",
          time:""
        }
        }
      // {
      //   name: "Steve Jobs",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://github.com/stevie",
      //     text: "@stevie"
      //   },
      //   presentation: {
      //     title: "Presenting iPad",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "14h00"
      //   }
      // },
      // {
      //   name: "Mark Zuckerberg",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Facebook",
      //   link: {
      //     href: "http://twitter.com/zuck",
      //     text: "@zuck"
      //   },
      //   presentation: {
      //     title: "Revealing Facebook Secrets",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "16h00"
      //   }
      // },
      // {
      //   name: "Steve Wozniak",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://twitter.com/woz",
      //     text: "@woz"
      //   },
      //   presentation: {
      //     title: "Why do I prefer Android over iPhone",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "17h00"
      //   }
      //}
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "IRD",
        logo: "themes/ird/img/logo-ird.png",
        url: "http://www.ird.fr/"
      },
      {
        name: "UBO",
        logo: "themes/ird/img/ubo-logo.jpg",
        url: "http://www.univ-brest.fr/"
      },
      {
        name:"RNSC",
        logo: "http://www.doesnotunderstand.org/images/logo-RNSC-small-72dpi.png",
        url:"http://www.doesnotunderstand.org/public/CAPFLEXITE"
      },
      {
        name: "UMMISCO",
        logo: "themes/ird/img/UMMISCO-logo.jpg",
        url:"http://www.ummisco.ird.fr/"
      },
      {
        name: "Lab-STICC",
        logo: "themes/ird/img/labsticc-logo.gif",
        url: "http://labsticc.fr/"
      },
      {
        name: "DSI IRD",
        logo: "themes/ird/img/DSI-logo.png",
        url: "https://www.ird.fr/dsi/"
      }
    ],

    // List of Partners
//    partners: [
//      {
//        name: "BrazilJS",
//        logo: "themes/yellow-swan/img/partner.png",
//        url: "http://braziljs.org"
//      }
//    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
