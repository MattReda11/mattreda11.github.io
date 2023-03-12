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
    linkedin: 'matthew-reda-ab813215b',
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
    'Material UI',
    'Cirrus UI',
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
    'AWS',
    'Azure',
    'Git',
  ],
  experiences: [
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
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
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
      title: 'TicketBlaster',
      description:
        'TicketBlaster is a project designed to be an alternative clone of Ticketmaster. Designed as a project to show skills developed with React.js, Node.js, HTML, CSS and MongoDB.',
      imageUrl:
        'https://fsd05regex.blob.core.windows.net/blob-storage/ticketblaster.jpg',
      link: 'https://clever-hotteok-f60642.netlify.app/',
    },
    {
      title: 'Dice Game',
      description:
        'Dice game developed using Python programming language and deployed on an AWS Ubuntu server.',
      imageUrl:
        'https://fsd05regex.blob.core.windows.net/blob-storage/dicegame.jpg',
      link: 'http://ec2-44-204-37-245.compute-1.amazonaws.com/',
    },
    {
      title: 'Regex Records',
      description:
        'Discogs website clone using Laravel PHP back-end and React.js front-end',
      imageUrl:
        'https://fsd05regex.blob.core.windows.net/blob-storage/Regex-Records.jpg',
      link: 'https://laravelprojectfsd05.com',
    },
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
    defaultTheme: 'luxury',

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
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
