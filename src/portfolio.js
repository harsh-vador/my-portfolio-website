/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Harsh Vador",
  logo_name: "Harsh Vador",
  nickname: "Full Stack Developer",
  subTitle:
    "An aspiring developer who loves to take on new projects that challenges his analytical and technological capacities.",
  resumeLink:
    "https://drive.google.com/file/d/1OtaqgBxmjZ6zxkS7mN3yosuC8If85wKT/view?usp=sharing",
  portfolio_repository: "https://github.com/harsh-vador",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/harsh-vador",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harsh-vador/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=hvharsh201@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Hackerrank",
    link: "https://www.hackerrank.com/hvharsh201",
    fontAwesomeIcon: "fa-brands fa-hackerrank", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#FE7A16", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using Angular and React",
        "⚡ Implementing secure access to database",
        "⚡ Creating application backend in MySQL",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
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
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ReactJS",
      progressPercentage: "90%",
    },
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },

    {
      Stack: "Bootstrap",
      progressPercentage: "95%",
    },

    {
      Stack: "SQL",
      progressPercentage: "80%",
    },

    {
      Stack: "PHP",
      progressPercentage: "75%",
    },
    {
      Stack: "CSS",
      progressPercentage: "95%",
    },
    {
      Stack: "JavaScript",
      progressPercentage: "75%",
    },

    {
      Stack: "jQuery",
      progressPercentage: "55%",
    },
    {
      Stack: "C/C++",
      progressPercentage: "40%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visual Studio", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Google Firebase",
      progressPercentage: "95%",
    },
    {
      Stack: "Microsoft Office",
      progressPercentage: "90%",
    },
    {
      Stack: "Google Docs",
      progressPercentage: "90%",
    },
    {
      Stack: "MySQL Database", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },

    {
      Stack: "Github",
      progressPercentage: "80%",
    },
    {
      Stack: "Postman",
      progressPercentage: "80%",
    },
    {
      Stack: "MongoDB",
      progressPercentage: "60%",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/hvharsh201",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://leetcode.com/user9879Ch/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://github.com/harsh-vador",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@hvharsh201",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "K.J Somaiya Institute of Engineering and Information Technology,Somaiya University",
      subtitle: "B.Tech (Information Technology)",
      logo_path: "somaiya_logo.png",
      alt_name: "KJSIEIT",
      duration: "May 2018 - May 2022",
      cgpa: "8.80 / 10.00",
      website_link: "https://kjsieit.somaiya.edu.in/en",
    },
    {
      title:
        "K. J Somaiya College of Science and Commerce,University of Mumbai",
      subtitle: "Higher Secondary School (Computer Science)",
      logo_path: "somaiya_logo.png",
      alt_name: "KJSSC",
      duration: "May 2016 - May 2018",
      cgpa: "7.90 / 10.00",
      website_link: "https://kjssc.somaiya.edu.in/en",
    },
    {
      title: "Sheth Karamshi Kanji English School",
      subtitle: "Secondary School",
      logo_path: "skkes_logo.jpg",
      alt_name: "SKKES",
      duration: "May 2006 - May 2016",
      cgpa: "10.00 / 10.00",
      website_link: "https://kjssc.somaiya.edu.in/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programming for Everybody Python",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/25e738591f79d8531afea3fe001f8119",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/c6510935a8b4d23c98b34b010d7fff76",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },

    {
      title: "Front-End Web Development with React",
      subtitle: "- Jogesh K. Muppala",
      logo_path: "hongkong_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "The HongKong University of Science and Technology",
      color_code: "#8C151599",
    },
    {
      title: "100 days of code: The complete Python Pro Bootcamp for 2022",
      subtitle: "- Dr. Angela Yu",
      logo_path: "udemy_logo.png",
      certificate_link: "",
      alt_name: "The HongKong University of Science and Technology",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a Final Year student pursuing Information Technology gaining experience from voluntary works on sites like stackoverflow, github and working as an intern.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        /*
		{
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
		*/
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Hexaware Technologies",
          company_url: "https://hexaware.com/",
          logo_path: "hexaware_logo.png",
          duration: "May 2021 - Feb 2022",
          location: "Mumbai, Maharashtra",
          description:
            "Designed and developed front-end and backend application using React JS and Node JS.Participated in 50+ weekly code reviews to ensure code quality and system efficiency and ensured the performance and quality of the web-app.Wrote structured, tested, readable and maintainable code",
          color: "#0071C5",
        },
        {
          title: "Full Stack Web Developer",
          company: "oneAgrow Agritech Pvt Ltd.",
          company_url: "https://www.greattr.com/",
          logo_path: "oneagrow_logo.png",
          duration: "Dec 2020 - Feb 2021",
          location: "Mumbai,Maharashtra",
          description:
            "Designed, developed and tested JavaScript, jQuery and React JS to make a high performing website which meets web core vitals. Used React-Router to turn application into a Single Page Application. Experienced in working           with React-Redux architecture. Improved and optimized animation logic to increase performance on low-end devices. Implemented end-to-end integration of CRUD operations on Firebase-Firestore using Firebase-functions. Extensively used Git for version controlling and maintaining code on multiple branches.",
          color: "#0071C5",
        },
        {
          title: "Web Developer",
          company: "oneAgrow Agritech Pvt Ltd.",
          company_url: "https://www.greattr.com/",
          logo_path: "oneagrow_logo.png",
          duration: "Aug 2020 - Oct 2020",
          location: "Mumbai,Maharashtra",
          description:
            "Developed layout from scratch for React JS website using css, bootstrap. Integrated the website's forms with Firebase backend to store and manipulate data on Firestore. Created backend functions in Nodejs and used Postman         extensively to test them. Worked with Nodemailer to auto generate responses upon requests from website.",
          color: "#0071C5",
        },
        {
          title: "Research Intern",
          company: "Institution's Innovation Council(IIC)",
          company_url: "https://www.mic.gov.in/innovation-council/iic",
          logo_path: "iic_logo.png",
          duration: "June 2020 - July 2020",
          location: "IIT Delhi,Mumbai,Maharashtra",
          description:
            "Connected with various industry experts and submitted a research report of the project assigned.",
          color: "#0071C5",
        },
        {
          title: "Web Developer",
          company: "Image Online Pvt. Ltd.",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "image_online_logo.jpg",
          duration: "Dec 2019 - Jan 2020",
          location: "Mumbai,Maharashtra",
          description:
            "Designed the IOT Inventory Management System in a group of five interns, which keeps a track on issue and return of various IOT Components by students of the department.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Rotaractor",
          company: "Rotaract District 3141",
          company_url: "https://rotaract3141.org/",
          logo_path: "rotaract_logo.png",
          duration: "Dec 2017 - Dec 2018",
          location: "Mumbai,Maharashtra",
          description:
            "I actively participated as a General Body Member of Rotaract District 3141 and a part of many social activities.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Applications and deploy them. Stil trying to gain experience by trying my hands on different projects. Most of these are academic projects with some personal projects in between.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Harsh_Vador.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with building various Web Applications as well as Basic Programming, ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://miftaulmannan.wordpress.com/projects/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mumbai,Maharashtra",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/6FsGE2PMjjCFXnZE7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-9768514716",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
