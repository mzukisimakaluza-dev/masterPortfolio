/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mzukisi's Portfolio",
  description:
    "A passionate developer and linux enthusiast. I will read your Dockerfile and docker-compose.yml before README.md.",
  og: {
    title: "Mzukisi Makaluza Portfolio",
    type: "website",
    url: "http://mzukisimakaluza.com/",
  },
};

//Home Page
const greeting = {
  title: "Mzukisi Makaluza",
  logo_name: "MzukisiMakaluza",
  nickname: "Smurphy",
  subTitle:
    "A passionate developer and linux enthusiast. I will read your Dockerfile and docker-compose.yml before your README.md.",
  resumeLink:
    "https://drive.google.com/file/d/1o5VDU8KAI4dR-psIkHF9y2TJHQNjasTl/view?usp=share_link",
  portfolio_repository: "https://github.com/mzukisimakaluza-dev/masterPortfolio",
  githubProfile: "https://github.com/mzukisimakaluza-dev",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mzukisimakaluza-dev",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mzukisi-makaluza-310951162/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mzukisimakaluza@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software Development, Automation & Testing/Debugging",
      // fileName: "DataScienceImg",
      skills: [
        "⚡ Development of Web-based software",
        "⚡ Development of Linux-based microservices with C/C++",
        "⚡ Network Analysis with Wireshark",
        "⚡ Automating server functionalities and setups with Bash",
        "⚡ Reading Linux Server logs and traces",
        "⚡ API Test Automation with Python Scripts",
      ],
      softwareSkills: [
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites (front-end) using VueJS",
        "⚡ Creating application backend in Node (with Express & Mongo or Elasticsearch)",
        "⚡ Familiar with Creating application backend logic in Python",
        "⚡ Building Linux-based microservices with C/C++"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Virtual Servers/Environments",
      // fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with Docker networks and Containers",
        "⚡ Python Virtual Environments",
        "⚡ Familiar with Linux's virtual network interfaces",
        "⚡ Virtual development inside docker containers ( Keeping the host clean )",
      ],
      softwareSkills: [
        {
          skillName: "Python pip3",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Neural Networks and Deep Learning",
      iconifyClassname: "simple-icons:matrix",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.coursera.org/account/accomplishments/verify/3VR8FKJKNXH7",
    },
    {
      siteName: "Front-end Web Development with React",
      iconifyClassname: "simple-icons:react",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.coursera.org/account/accomplishments/verify/QHKEHNWYWX92",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mzukisimakaluza",
    },
    {
      siteName: "CodeWars",
      iconifyClassname: "simple-icons:codewars",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.codewars.com/users/Smurphy7440",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3VR8FKJKNXH7",
      alt_name: "DeepLearning.AI",
      color_code: "#8C151599",
    },
    {
      title: "Frontend Web Development with React",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QHKEHNWYWX92",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with various well-established companies and startups in Cape Town all geared towards the software development of customer facing products.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Tester",
          company: "Uman Technologies (TSN Systems GmbH)",
          company_url: "https://tsn.systems/",
          logo_path: "TSN-Logo-RGB.png",
          duration: "April 2022 - Present",
          location: "Century City, Cape Town, South Africa",
          description:
            "I am working in the automotive industry to test and diagnose time-sensitive systems, helping clients measure the accurancy of their systems. Common protocols are PTP (IEEE802.1AS) for syncronisation, IEEE1722 and IEEE1733.",
          color: "#0879bf",
        },
        {
          title: "Student Engineer",
          company: "Aurecon Group Pty. Ltd",
          company_url: "https://www.aurecongroup.com/",
          logo_path: "aurecon_feature_image-2.jpg",
          duration: "Nov 2019 - Jan 2020",
          location: "Century City, Cape Town, South Africa",
          description:
            "During my time at Aurecon I worked on the following projects: 1. Designing A Water Level Sensor - I got to work with ultrasonic sensors, ESP8266, Raspberry Pi, GSM Module and also software programs Node-Red, Grafana, InfluxDB. 2. Configuring A VPN for secure PLC remote access - I got to work with a PLC and learned a lot about networking concepts such as Dynamic and Static IP Addressing, NAT, Subnetting.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Sintrex",
          company_url: "https://sintrex.com/",
          logo_path: "sintrex.jpeg",
          duration: "Mar 2021 - July 2022",
          location: "Cape Town, South Africa",
          description:
            "Building features on an internal project using the following stack: VueJS, NodeJS, Elasticsearch and Kibana. I learned a lot about git, agile development and navigating remote linux servers.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Student Club Member",
          company: "University of Cape Town",
          company_url:
            "https://www.linkedin.com/company/gdscuct/?originalSubdomain=za",
          logo_path: "dsc_logo.png",
          duration: "Apr 2019 - Nov 2020",
          location: "Rondenbosch, Cape Town, South Africa",
          description:
            "We had a well established developer club at the University of Cape Town which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities in Web and Mobile-based development in ReactJS and Node.",
          color: "#0C9D58",
        },
        {
          title: "Zaio Developer Student",
          company: "Zaio",
          company_url:
            "https://www.zaio.io/",
          logo_path: "zaio.png",
          duration: "Jan 2019 - Nov 2020",
          location: "Rondenbosch, Cape Town, South Africa",
          description:
            "The very first exposure I had in Software Development was with a foundation at the University of Cape Town known as Zaio which was still new at the time. My interest in this field has grown remarkebly ever since.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
