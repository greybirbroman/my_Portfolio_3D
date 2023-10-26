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
  git,
  figma,
  myYoutube,
  myDalle,
  moviesExplorer,
  nike,
  yandex,
  home,
  redux,
  typescript,
  metaversus,
  rent,
  business,
  achievment,
  achievment2
} from '../assets';


export const navLinks = [
  {
    id: '#about',
    title: 'About',
  },
  {
    id: '#experience',
    title: 'Experience'
  },
  {
    id: '#work',
    title: 'Works',
  },
  {
    id: '#contact',
    title: 'Contact',
  },
];

const services = [
  {
    id: 1,
    title: 'Умею и хочу работать в команде.',
    icon: web,
  },
  {
    id: 2,
    title: 'Ответственный и знаю как это важно.',
    icon: backend,
  },
  {
    id: 3,
    title: 'Не конфликтный и коммуникабельный.',
    icon: mobile,
  },
  {
    id: 4,
    title: 'Готов учиться новому.',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Frontend Developer (education)',
    company_name: 'Yandex.Practicum',
    icon: yandex,
    iconBg: 'lightgray',
    date: 'January 2022 - December 2022',
    points: [
      'HTML, CSS, JavaScript: вводный модуль.',
      'Расширенные возможности HTML и CSS.',
      'Адаптивная верстка и работа с макетом Figma.',
      'Базовый JavaScript и работа с браузером.',
      'JavaScript - непростые концепции.',
      'Интерфейсы с использованием React.',
      'Основы бэкенда для фронтенд-разработчиков.',
      'Защищенная дипломная работа.',
    ],
  },
  {
    title: 'Self-study',
    company_name: 'Home',
    icon: home,
    iconBg: 'lightgray',
    date: 'December 2022 - Present',
    points: [
      'Изучение React, TypeScript, Redux, ReduxToolkit.',
      'Sanity and StoryBook.',
      'Next.js and SSR.',
      'Fetch, Axios, API.',
      'Tailwind CSS.',
      'Framer Motion.',
      'Three.js.',
    ],
  },
];

const testimonials = [
  {
    testimonial: '',
    name: 'Некрашевич Марина',
    designation: 'Врач-стоматолог',
    company: 'Denteria',
    image: '',
  },
];

const projects = [
  {
    name: 'Business Card',
    description: 'Интерактивная страница - визитка врача стоматолога',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'orange-text-gradient',
      },
      {
        name: 'sanity',
        color: 'pink-text-gradient',
      },
    ],
    image: business,
    source_code_link: 'https://github.com/greybirbroman/dr_nekrashevich_next',
    deploy_link: 'https://msnek.ru/'
  },
  {
    name: 'Metaversus web 3.0',
    description:
      'Интерактивная страница современного сайта с приятным дизайном и анимацией готовая к масштабированию.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'orange-text-gradient',
      },
    ],
    image: metaversus,
    source_code_link: 'https://github.com/greybirbroman/metaversus',
    deploy_link: 'https://metaversus-green-seven.vercel.app/'
  },
  {
    name: 'Nike Landing',
    description:
      'Интерактивная страница брендовой обуви готовая к масштабированию.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: nike,
    source_code_link: 'https://github.com/greybirbroman/nike_landing',
    deploy_link: 'https://nike-landing-sepia.vercel.app/'
  },
  {
    name: 'Car Rent',
    description:
      'Интерактивная страница современного сайта посвященная аренде автомобилей. Используется RapidAPI, AI для генерации изображений.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'orange-text-gradient',
      },
    ],
    image: rent,
    source_code_link: 'https://github.com/greybirbroman/car_rent_ts',
    deploy_link: 'https://car-rent-ts-one.vercel.app/'
  },
  {
    name: 'My YouTube Clone',
    description:
      'Проект представляет собой SPA построеное с помощью библиотеки React. Реализована возможность поиска любых видео и каналов на YouTube благодаря использованию Rapid API (YouTube v3).',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'materialUI',
        color: 'green-text-gradient',
      },
      {
        name: 'rapidAPI',
        color: 'pink-text-gradient',
      },
    ],
    image: myYoutube,
    source_code_link: 'https://github.com/greybirbroman/youtube-clone-project',
    deploy_link: 'https://romansyoutube.netlify.app/',
  },
  {
    name: 'My DALL-E (MERN)',
    description:
      'Full Stack приложение. Функционал приложения позволяет генерировать изображение с помощью OpenAI API по текстовому запросу. Изображения хранятся в базе данных. Изображением можно поделиться с сообществом, а также сохранить на устройство.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'cloudinary',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
    ],
    image: myDalle,
    source_code_link:
      'https://github.com/greybirbroman/my_dalle_clone/tree/main/frontend',
    deploy_link: 'https://romansdalle.netlify.app/'
  },
  {
    name: 'Movies Explorer (MERN)',
    description:
      'Дипломная работа на курсе web-разработчик в Яндекс.Практикум. Интерактивная страница для поиска и сохранения фильмов. Пользователь может осуществлять поиск фильмов в соответствии с запросом по стороннему API, поиск фильмов с установленным фильтром, добавление/удаление своих любимых фильмов, просмотр трейлера фильма, просмотр описания фильма.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'figma',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
    ],
    image: moviesExplorer,
    source_code_link:
      'https://github.com/greybirbroman/movies-explorer-frontend',
  },
];

const achievements = [
  {
    id: 1,
    name: 'Благодарственное письмо',
    image: achievment
  },
  {
    id: 2,
    name: 'Сертификат',
    image: achievment2
  }
]

export { services, technologies, experiences, testimonials, projects, achievements };
