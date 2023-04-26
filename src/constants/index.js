import {
  spl,
  school,
  rapid,
  fservices,
  flogistics,
  group,
  dmv,
  coex,
  jvex,
  masplants,
  todo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  freeny,
  jsa,
  pearson,
  self,
  threejs,
  vue,
  bootstrap,
  nextjs,
  stripe,
  graphql,
  aws,
  django,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Vue.js",
    icon: vue,
  },{
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Django",
    icon: django,
  },
];

const experiences = [
  {
    title: "Project Manager",
    company_name: "JSA Contracting INC",
    icon: jsa,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - Sep 2020",
    points: [
      "Participated in the making of business cases prior to overseeing projects to ensure completion within set deadlines and budgets.",
      "Enhanced operational efficiency by creating an internal tool for bi-weekly payments to contractors and onboarding new vendors and employees.",
      "Measured performance metrics, including monitoring and maintaining technical processes.",
      "Collaborated with office and field managers to construct business process design, key business metrics, and reporting protocols.",
    ],
  },
  {
    title: "Enrollment & Help Desk Analyst",
    company_name: "Pearson Vue",
    icon: pearson,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Jan 2021",
    points: [
      "Diagnosed technical issues for 40+ clients per day by phone, email, and chat, as a tier 1 support for customer support, solving issues within 10 minutes on average.",
      "Successfully reached solutions for 90% of computer errors, and escalated more complex tickets to higher tiers to assist clients as quickly as possible.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Self-employed",
    icon: self,
    iconBg: "#E6DEDD",
    date: "Apr 2020 - Present",
    points: [
      "Coordinate with over 20 local businesses during the initial lockdown of Covid-19 in 2020, to help transition from purely brick-and-mortar to online sustainable businesses. Designed, coded, maintained, tested, implemented, and validated the frontend and backend of client’s web applications.",
      "Develop and tested prototypes, quality assurance processes, demos, & user interfaces throughout the software development process to create appropriate and superior deliverables before shipping to clients.",
      "Implement a variety of APIs, set up Google Analytics, and optimize customer facing user experience based on the end users' needs.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Freeny Group",
    icon: freeny,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Present",
    points: [
      "Design, develop, & perform cross-browser testing for 10+ front-end web and sass applications to ensure performance, superior visual quality, and ensure user needs are met.",
      "Spearhead the development of Freeny Group’s sister company, Freeny Driving School. Designed and developed a Django-based full-stack web application that serves as an online education dashboard and e-commerce store that allows students and teachers alike to manage their courses.",
    ],
  },
];

const projects = [
  {
    name: "SPL Cleaning",
    description:
      "SPL Cleaning is a user-friendly web-based platform that connects homeowners, local businesses, and residential property managers with professional cleaning services. With a strong online presence, SPL Cleaning has increased its client leads by 20%, making it the go-to platform for hassle-free booking of cleaning services.",
    tags: [
      {
        name: "VUE JS Framework",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
    ],
    image: spl,
    source_code_link: "https://github.com/mj-creatives/Spl-new",
    web_link: "https://www.spl-cleaning.com",
  },
  {
    name: "Freeeny Driving School",
    description:
      "Freeny Driving School offers an online learning platform for driving education, providing easy course management, payment, and access to course materials. With Freeny Driving School, students can conveniently manage their courses and profiles online, making it an ideal for anyone seeking a hassle-free driving education.",    
    tags: [
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link: "https://github.com/FreenyGroup/freenydrivingschool",
    web_link: "https://www.freenydrivingschool.com",
  },
  {
    name: "Rapid Supply Chain",
    description:
      "Rapid Supply Chain is an in-depth platform relating to a global transportation business that operates in a variety of countries. It's meant to demonstrate how the experienced and qualified personnel provide reliable, efficient and cost-effective international transportation services to support clients operating needs.",
    tags: [
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: rapid,
    source_code_link: "https://github.com/FreenyGroup/rapidglobalsupplychain",
    web_link: "https://www.rapidglobalsupplychain.com",
  },
  {
    name: "Freeny Services",
    description:
      "Freeny Services is a dependable and secure transportation provider, serving Michigan, Illinois, Wisconsin, and Ohio. They offer an array of transportation solutions for students attending out-of-district, long-distance, charter, or special education schools, making it an ideal choice for parents seeking reliable transportation option for their children.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Vue3",
        color: "orange-text-gradient",
      },
      {
        name: "Babel",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "orange-text-gradient",
      },
    ],
    image: fservices,
    source_code_link: "https://github.com/FreenyGroup/FreenyServicesFinal",
    web_link: "https://www.freenyservices.com",
  },
  {
    name: "Freeny Logistics",
    description:
      "Freeny Logistics is a transportation provider serving Pennsylvania, offering a variety of transportation options for students attending out-of-district, long-distance, charter, or special education schools. With a focus on safety and reliability, Freeny Logistics is a ideal for parents seeking a dependable transportation service for their children.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: flogistics,
    source_code_link: "https://github.com/FreenyGroup/FreenyLogisticsFinal",
    web_link: "https://www.freenylogistics.com",
  },
  {
    name: "Freeny Group",
    description:
      "From providing underserved students with transportation through DMV CAB Corporation to offering the ultimate transportation experience for all occasions, The Freeny Group and its sister companies are committed to providing safe, reliable, and comfortable transportation services across the country.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: group,
    source_code_link: "https://github.com/FreenyGroup/FreenyGroupFinal2",
    web_link: "https://www.freenygroup.com,"
  },
  {
    name: "DMV CAB",
    description:
      "DMVCAB.com was developed to provide transportation solutions for students with special needs, VIPs, Diplomats, and individuals seeking economy or luxury car rentals. The website offers an easy-to-use platform that features informative content and a modern design that ensures a seamless user experience.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Gulp",
        color: "pink-text-gradient",
      },
    ],
    image: dmv,
    source_code_link: "https://github.com/FreenyGroup/dmvcab.com",
    web_link: "https://www.dmvcab.com",
  },
  {
    name: "CoEx Fitness",
    description:
      "CoEx Fitness is an intuitive exercise database that enables users to search for exercises based on body parts and equipment, providing detailed information on each exercise. With CoEx Fitness, users can easily find and learn about exercises to achieve their fitness goals and maintain a healthy lifestyle.",
    tags: [
      {
        name: "RestAPI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: coex,
    source_code_link: "https://github.com/mj-creatives/jv-exercises",
    web_link: "https://www.jv-exercises.netlify.app",
  },
  {
    name: "JVEX",
    description:
      "JVEX is a cutting-edge platform built with OpenAI that utilizes Codex, a powerful tool that can translate natural language into code. With JVEX, users can perform a variety of natural language tasks and easily translate their ideas into functional code, making it an ideal platform for anyone looking to streamline their coding workflow.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jvex,
    source_code_link: "https://github.com/mj-creatives/jvex",
    web_link: "https://www.jvex.vercel.app",
  },
  {
    name: "Mas Plants",
    description:
      "MasPlants is a locally owned plant store that provides delivery and pickup options for plant enthusiasts and beginners alike. With a wide selection of plants to choose from, customers can easily find their next plant at MasPlants and enjoy the convenience of having it delivered straight to their doorstep or picking it up in-store.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Apollo",
        color: "orange-text-gradient",
      },
      {
        name: "Graphql",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
    ],
    image: masplants,
    source_code_link: "https://github.com/mj-creatives/mas-plants",
    web_link: "https://www.masplants.netlify.app",
  },
  {
    name: "JV Todo",
    description:
      "The JV Todo App is a user-authenticated to-do application that simplifies daily task management. With easy task addition, deletion, and updating functionalities, the JV Todo App surpasses traditional to-do applications, making it an ideal choice for anyone seeking an intuitive and efficient way to manage their daily tasks.",
    tags: [
      {
        name: "Pocketbase",
        color: "blue-text-gradient",
      },
      {
        name: "Alpine.js",
        color: "orange-text-gradient",
      },
      {
        name: "PicoCSS",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/mj-creatives/jv_todoapp",
    web_link: "https://www.jvtodoapp.netlify.app",
  },
];

export { services, technologies, experiences, projects };