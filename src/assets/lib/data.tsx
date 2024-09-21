import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import styledicon from "../../assets/icons/styled.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import graphqlicon from "../../assets/icons/graphql.svg";
import apolloicon from "../../assets/icons/apollo.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import tutorchaseWEP from "../../assets/img/tutorchase.webp";
import mayoclinicWEP from "../../assets/img/mayoclinic.webp";
import chatkittyWEP from "../../assets/img/chatkitty.webp";
import dentalcareWEP from "../../assets/img/dentalcare.webp";
import abriWEP from "../../assets/img/abri.webp";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail, FiFolder } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: "Hi, I'm Martin Pascal",
  subtitle: "Senior Front End Engineer ",
  description: "Versatile JavaScript (React) software engineer with over a decade of experience developing web based software using JavaScript, HTML, CSS, working with in small to medium sized Agile teams. Possessing strong software design, analytical & problem solving skills with a \"can do\" attitude and a passion for clean, well-structured code. Excellent communication skills with the ability to work effectively with technical and non-technical persons.",
  buttons: [
    {
      name: "Contact",
      label: "Contact me",
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: "My Projects",
      icon: FiFolder,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "TutorChase",
    description:
      "TutorChase is an online platform designed to connect students with expert tutors for personalized, one-on-one learning sessions. The platform focuses on providing high-quality tutoring services across a wide range of subjects, from academic disciplines like math, science, and literature to specialized exam preparation like SATs, GRE, and A-Levels. My role in building this platform was to design and development using React.js, Next.js so that improve the performance of platform and solving complex problems such as asynchronous API calls.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Next", icon: nextjsicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Figma", icon: figmaicon },
      { name: "Netlify", icon: netlifyicon },
    ],
    image: tutorchaseWEP,
    deploymenturl: "https://www.tutorchase.com/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Mayo Clinic Healthcare",
    description:
      "The Mayo Clinic Healthcare website is a comprehensive digital platform that offers information and access to Mayo Clinic's extensive medical expertise and services. It serves as an online resource for patients, health professionals, and researchers seeking reliable health information, cutting-edge treatments, and specialized care. As healthcare websites are required to meet high standards for accessibility, my role was include ensuring that the platform adheres to WCAG (Web Content Accessibility Guidelines). This means ensuring the site is navigable via screen readers, implementing proper semantic HTML, and making sure colors and contrast meet accessibility standards.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Next", icon: nextjsicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: mayoclinicWEP,
    deploymenturl: "https://www.mayoclinic.org/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "ChatKitty",
    description:
      "ChatKitty is a cloud-based platform that provides developers with tools and APIs to easily build and manage real-time chat functionalities within their applications. It eliminates the need to build complex backend chat infrastructure by offering a fully managed service that integrates seamlessly with mobile, web, and desktop applications. My role was involve in implementing RESTful APIs with sensitive backend developers and resolving performance optimizing challenges and improving the real-time messaging functionality in terms of UI visual part.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Next", icon: nextjsicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "SASS", icon: sassscssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "TypeScript", icon: typescripticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "RESTful APIs", icon: apiicon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon }
    ],
    image: chatkittyWEP,
    deploymenturl: "https://chatkitty.com/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "DentalCare",
    description:
      "The DentalCare web platform is a comprehensive, user-centric solution designed to streamline and enhance the experience of dental care services for both patients and providers. The platform focuses on delivering seamless access to essential dental care features and functionalities through an intuitive, modern interface. As a member of dev team, I have contributed to implementing the intuitive and responsive user interfaces by using React, Material UI, Tailwind CSS framework.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Next", icon: nextjsicon },
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "TypeScript", icon: typescripticon }
    ],
    image: dentalcareWEP,
    deploymenturl: "https://www.dentalcare.com/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "MinervoHub",
    description:
      "The MinervoHub web platform is a digital interactive studio offering a range of creative solutions, including web design, branding, and development services. With a focus on user experience and innovation, it provides tailored strategies for businesses looking to enhance their digital presence. The platform combines cutting-edge technology with artistic design to help brands effectively engage their audiences and achieve their business goals.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Styled Component", icon: styledicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "TypeScript", icon: typescripticon }
    ],
    image: dentalcareWEP,
    deploymenturl: "https://minervohub.com/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Abri",
    description:
      "The Abri website is a sophisticated and user-friendly platform designed to showcase the company's offerings in real estate development and property management. Focused on providing potential clients and investors with a seamless browsing experience, the website features a sleek, modern design that highlights Abri’s expertise and portfolio.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Next", icon: nextjsicon },
      { name: "SCSS", icon: sassscssicon },
      { name: "GraphQL", icon: graphqlicon },
      { name: "Apollo", icon: apolloicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "TypeScript", icon: typescripticon }
    ],
    image: abriWEP,
    deploymenturl: "https://www.abri.co.uk/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: "More Projects on Github",
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const navLinks = [
  { label: "Home", hash: "#home", icon: GoHome },
  { label: "Skills", hash: "#skills", icon: GoStack },
  { label: "Projects", hash: "#projects", icon: GoProject },
  { label: "About me", hash: "#about-me", icon: GoPerson },
  { label: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { label: "Imprint", hash: "#imprint", data: <Imprint /> },
  { label: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:pascalmartin973@gmail.com",
  text: "pascalmartin973@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/masa255",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/evildevking19",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:pascalmartin973@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    quote: `"Their strong problem-solving abilities, excellent communication, and collaborative approach greatly contributed to the success of the project, making them a highly valuable asset."`,
    author: "Gabriel B.",
  },
  {
    quote: `"The web is like a canvas, and code is the paint. Create your masterpiece."`
  },
] as const;

export const aboutMeData = {
  title: "About me",
  description: "A few code snippets about me",
  paragraphs: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: "Contact",
  description: "Write me a message and I will get back to you.",
  inputfields: [
    {
      name: "name",
      placeholder: "Your Name",
      type: "text",
      validation: "Please fill in your name",
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: "Your E-Mail",
      type: "email",
      validation: "Please fill in your email",
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: "Your Subject",
      type: "text",
      validation: "Please fill in your subject",
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: "Your Message",
    name: "message",
    rows: 10,
    validation: "Please fill in your message",
    pattern: "{10}",
  },
  button: {
    value: "Send",
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    description: "By submitting this request, you acknowledge that you have read the Private Policy",
  },
} as const;

export const toastMessages = {
  loadingProject: "🦄 The live demo will open shortly. Starting servers...",
  successEmailSent: "🦄 Thank you for your email. I will get back to you as soon as possible",
  failedEmailSent: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  failedValidationName: "Please fill in your name",
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
