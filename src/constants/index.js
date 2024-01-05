import {
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    infobip,
    atlant,
    ibu,
    bioptimizers
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
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "SQL and NoSQL Proficient",
      icon: mobile,
    },
    {
      title: "Back-end Developer",
      icon: backend,
    },
    {
      title: "Lecturer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Laboratory Assistant",
      company_name: "International Burch University",
      icon: ibu,
      iconBg: "#F3F3F3",
      date: "Oct 2022 - Present",
      points: [
        'Laboratory Assistant on courses:',
        " Programming 1",
        " Database Design and Implementation",
        " Data Structures and Algorithms",
        " Introduction to Blockchain Programming",
        " Database Systems",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "BIOptimizers",
      icon: bioptimizers,
      iconBg: "#C2D600",
      date: "Jan 2022 - Present",
      points: [
        "Building and maintaining sale funnels.",
        "Building A/B split test utilizing Convert platform.",
        "Maintaining and implementing tracking scripts using Google Tag Manager.",
        "Creating automation bots using Selenium framework.",
      ],
    },
    {
      title: "Demonstrator",
      company_name: "International Burch University",
      icon: ibu,
      iconBg: "#F3F3F3",
      date: "Feb 2022 - Aug 2022",
      points: [
        'Demonstrator for the course "Introduction to Web Programming".',
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Atlantbh",
      icon: atlant,
      iconBg: "#212832",
      date: "Oct 2021 - Dec 2021",
      points: [
        "Developing a web applications using React.js and Java Spring Boot.",
        "Collaborating with menthor.",
        "Interacted with other developers with goal to learn.",
        "Built database using Postgres.",
      ],
    },
    {
      title: "Industrial Training",
      company_name: "Infobip",
      icon: infobip,
      iconBg: "#fff",
      date: "May 2021 - Jul 2021",
      points: [
        "Collaborating with rest of team together with menthor.",
        "Worked on building app that will run shortest path algorithms and visualize them.",
        "Worked with Java Spring Boot.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };