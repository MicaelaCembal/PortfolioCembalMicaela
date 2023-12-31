/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import proyectosJson from "./proyectos.json";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Micaela Cembal",
  title: "¡Bienvenidos a mi portfolio!",
  subTitle: emoji(
    "Una apasionada desarrolladora de software 🚀 con experiencia en la creación de aplicaciones móviles y web mediante diferentes librerías y frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/micaelacembal",
  linkedin: "https://www.linkedin.com/in/micaelacembal/",
  gmail: "micaelacembal@gmail.com",
  medium: "https://medium.com/@micaelacembal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "¿Qué hago?",
  subTitle: "AUTODIDACTA DESAROLLADORA CON GANAS DE CONOCER NUEVAS TECNOLOGÍAS",
  skills: [
    emoji(
      "⚡ Desarrolle interfaces de usuario altamente interactivas para aplicaciones web "
    ),
    emoji("⚡ Alto conocimiento en el desarollo de API'S en diversos lengaujes"),
    emoji(
      "⚡ Utilización de FireBase y Bases de datos relacionales SQL"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Argentina de la Empresa",
      logo: require("./assets/images/uadeLogo.png"),
      subHeader: "Ingenieria en Informatica",
      duration: "Marzo 2024 - Diciembre 2028",
    },
    {
      schoolName: "ORT Argentina",
      logo: require("./assets/images/ortLogo.png"),
      subHeader: "Bachillerato con certificación jurisdiccional en Diseño y Desarrollo de Aplicaciones Web y Móviles.",
      duration: "Marzo 2019 - Diciembre 2023",
      desc: "Alumna destacada dentro de los mejores tres promedios de la orientación.",
      descBullets: ["Proyecto final destacado: DONAR+: una plataforma web que ofrece nuevas oportunidades para realizar donaciones de manera segura, fácil y con confianza. La misma surge frente a la necesidad de 18 millones de personas en la Argentina viviendo en la pobreza y que las organizaciones sin fines de lucro no pueden satisfacer la gran demanda de necesidades que estas personas requieren para acceder a una vida mejor. "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Bases de datos",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    },
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "CEO & CO-Founder",
      company: "DONAR+",
      companylogo: require("./assets/images/donarMasLogo.png"),
      date: "Marzo 2023 – Present",
      desc: "Plataforma Web que ofrece nuevas oportunidades para realizar donaciones de manera segura y sencilla, la cual surge frente a la necesidad de 18 millones de personas en la Argentima viviendo en la Arg",
      
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: proyectosJson.map(item => ({
    image: item.images[0],
    projectName: item.title,
    projectDesc: item.description,
    footerLink: [
      {
        name: "Visit Website",
        url: item.url
      }
      // Puedes agregar botones adicionales aquí si es necesario.
    ]
  })),
  display: true // Establece en false para ocultar esta sección, el valor predeterminado es true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Licencias y certificaciones 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
        id: 1,
        title: "Google Code-In Finalist",
        subtitle:
          "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
        image: require("./assets/images/codeInLogo.webp"),
        imageAlt: "Google Code-In Logo",
        isFavorite: false // Nuevo campo para indicar si el logro está en favoritos o no
    },
    {
      id: 2,
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      isFavorite: false // Nuevo campo para indicar si el logro está en favoritos o no
  },
  {
    id: 3,
    title: "Google Code-In Finalist",
    subtitle:
      "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    image: require("./assets/images/codeInLogo.webp"),
    imageAlt: "Google Code-In Logo",
    isFavorite: false // Nuevo campo para indicar si el logro está en favoritos o no
},
{
  id: 4,
  title: "Google Code-In Finalist",
  subtitle:
    "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  image: require("./assets/images/codeInLogo.webp"),
  imageAlt: "Google Code-In Logo",
  isFavorite: false // Nuevo campo para indicar si el logro está en favoritos o no
},
    // Otros logros...
  ],
  display: true // Set false to hide this section, defaults to true
};

export default achievementSection;

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Con amor por desarrollar cosas interesantes, me encanta escribir y enseñar a otros lo que he aprendido.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/p/035cb45c5733/edit",
      title: "Nuevas tecnologías para renovar la esperanza contra el cáncer de mamas",
      description:
        "Un pequeño bulto, hinchazón en un pecho o en la axila, o una simple irritación de la piel o descamación de la zona del pezón, son signos del cáncer de mama"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contacto ☎️"),
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
