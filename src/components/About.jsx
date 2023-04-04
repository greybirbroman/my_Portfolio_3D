import React from 'react';
import { Tilt } from 'react-tilt';
import { motion as m } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <m.div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        variants={fadeIn('right', 'spring', 0.5 * index, 0, 75)} // direction, type, delay, duration
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt={title} className='w-16 h-16' />
          <h3 className='text-white text-[20px] text-center font-bold'>
            {title}
          </h3>
        </div>
      </m.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </m.div>
      <m.p
        className='mt-4 text-secondary text-md max-w-3xl leading-[25px] font-extralight tracking-wider'
        variants={fadeIn('', '', 0.1, 1)} // direction, type, delay, duration
      >
        Я начинающий Frontend-разработчик. Выпускник курса "Web-разработчик"
        онлайн школы Яндекс.Практикум. Пишу код на JavaScript и использую
        фреймворк React. Это портфолио мой первый опыт использования Three.js. Я
        быстро обучаюсь, высоко мотивирован и хочу создавать настоящие, полезные и удобные
        пользователю продукты. Давайте работать вместе!
      </m.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
