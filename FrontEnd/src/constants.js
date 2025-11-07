// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';



import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import adobe from './assets/certificate_logo/adobe_logo.jpg';
import awsSummit from './assets/certificate_logo/aws_logo.jpg';
import edunet from './assets/certificate_logo/cyber_logo.jpg';
import loreal from './assets/certificate_logo/loreal_logo.jpg';
import nit from './assets/certificate_logo/nit_logo.jpg';
import walmart from './assets/certificate_logo/walmart_logo.png';


// Experience Section Logo's
import blueStockLogo from './assets/company_logo/bluestock-logo.png';


// Education Section Logo's
import bcetLogo from './assets/education_logo/bcet-logo.jpg';
import davLogo from './assets/education_logo/dav-logo.jpg';
import ndrvLogo from './assets/education_logo/ndrv-logo.jpeg';

// Project Section Logo's
import sortAlgoLogo from './assets/project_logo/sortAlgo-logo.png';
import newsLogo from './assets/project_logo/news-logo.png';
import weatherLogo from './assets/project_logo/weather-Logo.png';
import dsaLogo from './assets/project_logo/dsa-Logo.png';
import qrLogo from './assets/project_logo/qr-Logo.png';
import myportLogo from './assets/project_logo/port-Logo.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: blueStockLogo,
      role: "SDE Intern",
      company: "BlueStock Fintech",
      date: "June 2025 - July 2025",
      desc: "Developed a Crypto Price Tracker Web App during my internship at Bluestock Fintech, featuring real-time crypto data, responsive UI, and smooth user experience.",
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "CoinGecko API",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bcetLogo,
      school: "Bengal College Of Engineering And Technology, Durgapur",
      date: "Sept 2022 - Present(June 2026)",
      grade: "6.89 CGPA",
      desc: "BTech student in Computer Science and Engineering with a strong foundation in DSA, OOP, DBMS, Web Development, and Software Engineering. Actively engaged in workshops and technical events to enhance hands-on skills.",
      degree: "Bachelor of Technology (BTech-CSE)",
    },
    {
      id: 1,
      img: davLogo,
      school: "DAV High School, Asansol",
      date: "June 2020 - May 2022",
      grade: "68.4%",
      desc:"I completed my Higher Secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science. During this time, I developed a strong analytical foundation and gained early exposure to programming concepts, which sparked my interest in technology and software development.",
      degree: "WBCHSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: ndrvLogo,
      school: "N.D.Rashtriya Vidyalaya, Sitarampur",
      date: "Jan 2019 - May 2020",
      grade: "57.8%",
      desc: "I completed my class 10 education from N.D.Rashtriya Vidyalaya, Sitarampur, under the WBBSE board. This phase helped shape my discipline, curiosity, and interest in pursuing a career in technology.",
      degree: "WBBSE(X)",
    },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "Sorting Algorithm Visualizer",
    description: "A web-based tool that visualizes sorting algorithms step by step with animations, helping users understand how different algorithms work.",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    image: sortAlgoLogo,
    github: "https://github.com/RahulPrasadKeshri/Sorting-Visualizer",
    webapp: "https://algosortvisualize.netlify.app/",
  },
  {
    id: 1,
    title: "DailyNews-Aaj Ki News",
    description: "A full-stack web application that aggregates news from multiple sources using APIs, providing categorized and real-time news updates.",
    tags: ["HTML", "CSS", "JavaScript", "Gnews API"],
    image: newsLogo,
    github: "https://github.com/RahulPrasadKeshri/DailyNews-Aaj-Ki-News",
    webapp: "https://dailynews-aajkinews.netlify.app/",
  },
  {
    id: 2,
    title: "weather Detector",
    description: "Detect a real time weather using api, Built with React and TailwindCSS ",
    tags: ["React.js", "Weather API", "TailwindCSS"],
    image: weatherLogo,
    github: "https://github.com/RahulPrasadKeshri/Weather-Detector",
    webapp: "https://visualize-weather.netlify.app/",
  },
  {
    id: 3,
    title: "Generalize DSA",
    description: "learn about data structure and algorithm with visualization like sorting, searching etc. ",
    tags: ["React.js", "TailwindCSS"],
    image: dsaLogo,
    github: "https://github.com/RahulPrasadKeshri/Generalize-DSA",
    webapp: "https://dsa-sikho.netlify.app/",
  },
  {
    id: 4,
    title: "Generate QR",
    description: "Generate a qr code using any link where you can showcase in your linkedin or instagram. ",
    tags: ["HTML","CSS","JavaScript"],
    image: qrLogo,
    github: "https://github.com/RahulPrasadKeshri/Generate-QR",
    webapp: "https://qr-generate-karo.netlify.app/",
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "Developed a fully responsive personal portfolio website using React.js and Node.js. The site highlights my technical skills, projects, and resume. Implemented a secure contact form with backend integration to receive user messages directly via email. Designed a clean, modern UI using Tailwind CSS for an engaging user experience. ",
    tags: ["React.Js","Tailwind CSS","Node.Js","NodeMailer"],
    image: myportLogo,
    github: "https://github.com/rahulkeshri123/News-Aggregator",
    webapp: "https://news-aggregator-123.vercel.app/",
  },
];

export const certifications = [
  {
    id: 0,
    title: "Adobe India Hackathon",
    img: adobe,
    org: "Adobe",
    date: "August 2025",
  },
  {
    id: 1,
    title: "AWS SUMMIT",
    img: awsSummit,
    org: "Amazon Web Services",
  
  },
  {
    id: 2,
    title: "EDUNET - IBM_Cyber Security",
    img: edunet,
    org: "EDUNET",
    
  },
  {
    id: 3,
    title: "Loreal",
    img: loreal,
    org: "LOREAL",
    
  },
  {
    id: 4,
    title: "Unmanned Vechile",
    img: nit,
    org: "NIT Durgapur",
  
  },
  {
    id: 5,
    title: "Sparkathon",
    img: walmart,
    org: "Walmart",
  },
];
 