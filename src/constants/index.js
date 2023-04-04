import {
    web,
    backend,
    mobile,
    creator,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    myYoutube,
    myDalle,
    moviesExplorer,
    mesto,
    yandex,
    home
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
      title: "Basic Backend",
      icon: backend,
    },
    {
      title: "Want to explore React Native",
      icon: mobile,
    },
    {
      title: "My Future Knowledge",
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
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Frontend Developer (education)",
      company_name: "Yandex Pracicum",
      icon: yandex,
      iconBg: "#383E56",
      date: "January 2022 - December 2022",
      points: [
        "HTML, CSS, JavaScript: вводный модуль.",
        "Расширенные возможности HTML и CSS.",
        "Адаптивная верстка и работа с макетом Figma.",
        "Базовый JavaScript и работа с браузером.",
        "JavaScript - непростые концепции.",
        "Интерфейсы с использованием React.",
        "Основы бэкенда для фронтенд-разработчиков.",
        "Защищенная дипломная работа.",
      ],
    },
    {
      title: "Self-study",
      company_name: "Home",
      icon: home,
      iconBg: "#06b6d4",
      date: "December 2022 - Present",
      points: [
        "Глубокое и детальное изучение React.",
        "TypeScript.",
        "Fetch, Axios, API.",
        "Tailwind CSS.",
        "Framer Motion.",
        "Three.js.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "Некрашевич Марина",
      designation: "Врач-стоматолог",
      company: "Denteria",
      image: "",
    },
  ]

  const projects = [
    {
      name: "My YouTube Clone",
      description:
        "Проект представляет собой SPA построеное с помощью библиотеки React. Реализована возможность поиска любых видео и каналов на YouTube благодаря использованию Rapid API (YouTube v3).",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialUI",
          color: "green-text-gradient",
        },
        {
          name: "rapidAPI",
          color: "pink-text-gradient",
        },
      ],
      image: myYoutube,
      source_code_link: "https://github.com/greybirbroman/youtube-clone-project",
    },
    {
      name: "My DALL-E (MERN)",
      description:
        "Full Stack приложение. Сборка: React + Vite. Функционал приложения позволяет генерировать изображение с помощью OpenAI API по текстовому запросу. Изображения хранятся в базе данных. Изображением можно поделиться с сообществом, а так же сохранить на устройство.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "cloudinary",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
      ],
      image: myDalle,
      source_code_link: "https://github.com/greybirbroman/my_dalle_clone/tree/main/frontend",
    },
    {
      name: "Movies Explorer (MERN)",
      description:
        "Дипломная работа на курсе web-разработчик в Яндекс.Практикум. Интерактивная страница для поиска и сохранения фильмов. Пользователь может осуществлять поиск фильмов в соответствии с запросом по стороннему API, поиск фильмов с установленным фильтром, добавление/удаление своих любимых фильмов, просмотр трейлера фильма, просмотр описания фильма.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
      ],
      image: moviesExplorer,
      source_code_link: "https://github.com/greybirbroman/movies-explorer-frontend",
    },
    {
      name: "Mesto (MERN)",
      description:
        "Интерактивная страница для размещения фотографий. Реализована авторизация и регистрация пользователей, возможность добавлять, удалять, менять статус фотографии.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
      ],
      image: mesto,
      source_code_link: "https://github.com/greybirbroman/react-mesto-api-full",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };