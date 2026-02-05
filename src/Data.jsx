import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { GrServices } from "react-icons/gr";
import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';
import skillsImg11 from './assets/figma-logo.svg';

import skillsImg6 from './assets/Node.js.svg';
import skillsImg7 from './assets/MongoDB.svg';
import skillsImg8 from './assets/Express.svg';
import skillsImg9 from './assets/Git.svg';
import skillsImg10 from './assets/Postman.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'UgeshKumar',
  },

  {
    title: 'Last Name : ',
    description: 'K',
  },

  {
    title: 'Age : ',
    description: '22 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'Chennai',
  },

  {
    title: 'Phone : ',
    description: '+91 9345887409',
  },

  {
    title: 'Email : ',
    description: 'kmugeshkumar45@mail.com',
  },

  {
    title: 'Skype : ',
    description: 'Ugeshkumar',
  },

  {
    title: 'Langages : ',
    description: 'Tamil, English',
  },
];

export const stats = [
  {
    no: 'Fresher',
    title: 'MERN <br /> Developer',
  },

  {
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    no: '1+',
    title: 'Years <br /> Practice Projects',
  },

  {
    no: 'Strong',
    title: ' In React & <br /> Node',
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },
  {
    id: 11,
    img: skillsImg11,
    title: 'Figma',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'Node Js',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'MongoDB',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'Express Js',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'Git&GitHub',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'PostMan',
    level: 'Advanced',
    category: 'designer',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <GrServices />,
    title: 'Custom Web Application Development',
    desc: 'Building tailor-made, data-driven web applications using MongoDB, Express.js, React.js, and Node.js.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <GrServices />,
    title: 'Front-End Development with React.js',
    desc: 'Designing and developing interactive, high-performance, and responsive user interfaces.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <GrServices />,
    title: 'Back-End Development with Node.js/Express.js',
    desc: 'Creating secure and efficient server-side logic, database schemas, and robust API development.',
  },

  {
    id: 4,
    category: 'education',
    icon: <GrServices />,
    title: 'Database Management (MongoDB)',
    desc: 'Designing, implementing, and managing NoSQL databases to handle large datasets efficiently.',
  },

  {
    id: 5,
    category: 'education',
    icon: <GrServices />,
    title: 'SPA & SaaS Development',
    desc: 'Developing fast, interactive Single Page Applications (SPAs) and complex Software-as-a-Service (SaaS) platforms.',
  },

  {
    id: 6,
    category: 'education',
    icon: <GrServices />,
    title: 'API Integration & Development',
    desc: 'Creating and integrating RESTful APIs to facilitate seamless data communication between front-end and back-end services.',
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'MERN Ecommerce',
    description:
      'A MERN eCommerce website is a full-stack online shopping platform built using MongoDB, Express.js, React.js, and Node.js.',
    skills: [skillsImg4, skillsImg6,skillsImg7,skillsImg8],
    link: 'https://mern-ecommerce-z8wj.onrender.com',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Food Product Design',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg6, skillsImg7],
    link: '',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Restaurant Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Barbershop Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Construction Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];