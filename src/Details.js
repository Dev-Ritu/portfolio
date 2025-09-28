// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/projects/Ritu.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nodejs from "./assets/techstack/nodejs.png";
import restApi from "./assets/techstack/resAPi.png";
import agGrid from "./assets/techstack/aggrid.png";
import sourceTree from "./assets/techstack/sourcetree.png";
import fork from "./assets/techstack/fork.png";

// Porject Images
import tavaTrip from "./assets/projects/taav-trip.png";
import tavaCloud from "./assets/projects/tava_cloud.png";
import understory from "./assets/projects/understory.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ritu",
  tagline: "I build things for web",
  img: profile,
  about: `I'm an innovative and results-driven Software Developer specializing in front-end development, user interface design, and project management. Proficient in React.js, Tailwind, CSS, JavaScript, HTML, Bootstrap, Redux, Material UI, and Git. Skilled in UX/UI principles, Figma design, and optimizing code for enhanced software performance. I excel in troubleshooting, cross-functional collaboration, and efficient task management, ensuring timely delivery of top-notch software solutions.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ritu-kumari-39208120b",
  github: "https://github.com/Dev-Ritu",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineer",
    Company: `Quarks Technosoft Pvt Lmt`,
    Location: "Noida",
    Type: "Full Time",
    Duration: "March 2025 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Computer Science and Engineering",
    Company: "YMCA University, Faridabad",
    Location: "Haryana",
    Type: "Regular",
    Duration: "Aug 2019 - May 2022",
  },
  {
    Position: "Computer Engineering",
    Company: `Govt. Polytechnic For Women, Faridabd`,
    Location: "Haryana",
    Type: "Regular",
    Duration: "Aug 2016 - May 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  github: github,
  figma: figma,
  nodejs: nodejs,
  fork: fork,
  sourceTree,
  restApi,
  agGrid,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Tava Cloud",
    image: tavaCloud,
    description: `Developed a no-code platform with intuitive drag-and-drop nodes for endpoint design, and created
frontend app templates for seamless user development`,
    techstack: "HTML/CSS, React, Redux, tailwind.css",
    previewLink: "https://tava.cloud/",
  },
  {
    title: "Tava Trip",
    image: tavaTrip,
    description: `Built a comprehensive flight and hotel booking application with user-friendly interfaces and
robust search functionalities, optimizing performance for a seamless booking experience`,
    techstack: "React, Redux, tailwind.css",
    previewLink: "https://www.tavatrip.com/",
  },
  {
    title: "Under-Story",
    image: understory,
    description: `Contributed to the development of insurance solutions tailored for the climate era`,
    techstack: "CSS, react-native for web, context API",
    previewLink: "https://understoryweather.com/",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ritu.1706kumari@gmail.com",
  phone: "+91 7011315746",
};
