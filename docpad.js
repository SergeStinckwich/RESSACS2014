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
        photo: "themes/ird/img/speaker.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Institut de physique du globe de Paris",
        link: {
          href: "http://www.ipgp.fr/~beaudu/",
          text: "Page web"
        },
        presentation: {
          title: "Le SI WEBOBS: un ensemble d’outils intégrés de gestion pour les observatoires telluriques",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: ""
        }
      },
      {
        name: "Emile Faye",
        photo: "themes/ird/img/emile-faye.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Biodiversité et évolution des complexes plantes-insectes ravageurs-antagonistes, IRD",
        link: {
          href: "http://emilefaye.com/",
          text: "Page web"
        },
        presentation: {
          title: "High resolution U.A.V. thermal imagery for the study of pest dynamics in the tropical Andes",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
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
