// gitprofile.config.js

const config = {
  github: {
    username: 'mattreda11', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['mattreda11.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'matthew-joseph-reda',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://mattreda11.github.io',
    phone: '',
    email: 'matthew.reda1199@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML5',
    'CSS',
    'Java',
    'Spring Boot',
    'JavaScript',
    'React.js',
    'React Native',
    'Node.js',
    'Bootstrap',
    'Tailwind',
    'MySQL',
    'MSSQL',
    'MongoDB',
    'Entity Framework',
    'PHP',
    'Laravel',
    'Python',
    'C#',
    '.NET',
    'ASP.NET Core',
    'WPF',
    'Unity',
    'Blender',
    'AWS',
    'Azure',
    'Git',
  ],
  experiences: [
    {
      company: "Centre d'expertise et de recherche appliquée en sciences pharmaceutiques - CERASP",
      position: 'Virtual Reality Developer',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://vrai-dev.johnabbott.qc.ca/',
    },
    {
      company: "Centre d'expertise et de recherche appliquée en sciences pharmaceutiques - CERASP",
      position: 'Virtual Reality Development Intern',
      from: 'March 2023',
      to: 'May 2023',
      companyLink: 'https://vrai-dev.johnabbott.qc.ca/',
    },
    {
      company: 'National Bank of Canada',
      position: 'Senior Customer Service Representative',
      from: 'February 2020',
      to: 'April 2021',
      companyLink: 'https://www.nbc.ca/',
    },
    {
      company: 'National Bank of Canada',
      position: 'Customer Service Representative',
      from: 'September 2019',
      to: 'February 2020',
      companyLink: 'https://www.nbc.ca/',
    },
  ],
 certifications: [
    {
      name: 'Front End Web Developer',
      body: 'John Abbott College',
      year: 'October 2022',
    },
    {
      name: 'Software Developer',
      body: 'John Abbott College',
      year: 'June 2023',
    },
  ],
  education: [
    {
      institution: 'John Abbott College',
      degree: 'Full Stack Developer A.E.C',
      from: '2022',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Alpha Athletika',
      description:
        'Alpha Athletika is a new performance center located in Montreal who gifted me the opportunity to develop their first official website using a template with JavaScript, HTML and CSS',
      link: 'https://alphaathletika.com',
    },
    {
      title: 'TicketBlaster',
      description:
        'TicketBlaster is a project designed to be an alternative clone of Ticketmaster. Designed as a project to show skills developed with React.js, Node.js, HTML, CSS and MongoDB.',
      link: 'https://clever-hotteok-f60642.netlify.app/',
    },
    {
      title: 'RegexRecords',
      description:
        'RegexRecords is a project designed to be an alternative clone of Discogs, a community where users can create collections of records, as well as, buy and sell vinyl records. Designed as a project to show skills developed with React.js, Vite.js, Laravel, HTML, CSS and Microsoft Azure.',
      link: 'http://calm-springs-25332.herokuapp.com/login/',
    },
    {
      title: 'Dice Game',
      description:
        'Dice game developed using Python programming language and deployed on an AWS Ubuntu server.',
      link: 'http://ec2-44-204-37-245.compute-1.amazonaws.com/',
    },
    // {
    //   title: 'Regex Records',
    //   description:
    //     'Discogs website clone using Laravel PHP back-end and React.js front-end',
    //   imageUrl:
    //     'https://fsd05regex.blob.core.windows.net/blob-storage/Regex-Records.jpg',
    //   link: 'https://laravelprojectfsd05.com',
    // },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'business',
      'emerald',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by Matthew Reda ✌`,
};

export default config;
