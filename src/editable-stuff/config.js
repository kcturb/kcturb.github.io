// Navigation Bar SECTION
const navBar = {
    show: true,
  };
  
  // Main Body SECTION
  const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Krishan",
    middleName: "",
    lastName: "Chand",
    message: " Passionate about changing the world with technology. ",
    icons: [
      {
        image: "fa-github",
        url: "https://github.com/hashirshoaeb",
      },
      {
        image: "fa-facebook",
        url: "https://www.facebook.com/hashirshoaeb",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/hashirshoaeb/",
      },
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/hashirshoaeb/",
      },
      {
        image: "fa-twitter",
        url: "https://www.twitter.com/hashirshoaeb/",
      },
    ],
  };
  
  // ABOUT SECTION
  // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
  //a) your Instagram username
  //      i.e:profilePictureLink:"johnDoe123",
  //b) a link to an hosted image
  //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
  //c) image in "editable-stuff" directory and use require("") to import here,
  //      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
  //d) If you do not want any picture to be displayed, just leave it empty :)
  //      i.e: profilePictureLink: "",
  // For Resume either provide link to your resume or import from "editable-stuff" directory
  //     i.e resume: require("../editable-stuff/resume.pdf"),
  //         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
  
  const about = {
    show: true,
    heading: "About Me",
    imageSize: 375,
    message:
      "I am a research scholar at the Department of Mechanical Engineering, Indian Institute of Technology Guwahati. My research interests lie predominantly in understanding turbulent convection through one of the classical problem-Rayleigh Benard Convection (RBC). I use Direct Numerical Simulation (DNS) and Large Eddy Simulation (LES) techniques to simulate the flows. I currently work on both standard and non-standard variants of RBC to understand the heat transfer phenomenon. In the leisure time, I play sports- cricket, basketball, and hockey.",
    resume: "https://docs.google.com/document/d/1FjhA05W0O_OdA9KxlTKjHu9n-qID22XH/edit",
  };
  
  // PROJECTS SECTION
  // Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
  //      i.e: reposLength: 0,
  // If you want to display specfic projects, add the repository names,
  //      i.e ["repository-1", "repo-2"]
  const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "kcturb", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
  };
  
  
  // SKILLS SECTION
  const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "Python", value: 90 },
      { name: "SQL", value: 75 },
      { name: "Data Structures", value: 85 },
      { name: "C/C++", value: 65 },
      { name: "JavaScript", value: 90 },
      { name: "React", value: 65 },
      { name: "HTML/CSS", value: 55 },
      { name: "C#", value: 80 },
    ],
    softSkills: [
      { name: "Formal writing", value: 80 },
      { name: "Goal-Oriented", value: 80 },
      { name: "Collaboration", value: 90 },
      { name: "Adaptability", value: 85 },
      { name: "Problem Solving", value: 75 },
      { name: "Creativity", value: 90 },
    ],
  };
  
  // GET IN TOUCH SECTION
  const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
      "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "hashirshoaeb@gmail.com",
  };
  
  const experiences = {
    show: false,
    heading: "Experiences",
    data: [
      {
        role: 'Software Engineer',// Here Add Company Name
        companylogo: require('../assets/img/dell.png'),
        date: 'June 2018 – Present',
      },
      {
        role: 'Front-End Developer',
        companylogo: require('../assets/img/boeing.png'),
        date: 'May 2017 – May 2018',
      },
    ]
  }
  
  // Blog SECTION
  // const blog = {
  //   show: false,
  // };
  
  export { navBar, mainBody, about, repos, skills, getInTouch, experiences };