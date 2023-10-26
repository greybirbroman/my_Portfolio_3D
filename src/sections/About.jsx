import React from 'react';
import { SectionWrapper } from '../hoc';
import { SectionTitle, SectionText, ServiceCard } from '../components';
import { TechList } from '../components';
import { services } from '../constants';

const myGithubLink = 'https://github.com/greybirbroman';

const sectionText = {
  title: `Overview.`,
  subtitle: `Introduction`,
  text: `Frontend-разработчик из Санкт-Петербурга. Я фанат продуманных и интересных интерфейсов. Это портфолио мой первый опыт
  использования Three.js. Я постоянно обучаюсь, изучаю лучшие практики и горю мечтой стать частью Web 3.0. Высоко мотивирован и
  готов фокусироваться на Вашем бизнесе, чтобы помогать ему развиваться и расти.`,
  span: `Давайте работать вместе!`,
};

const About = () => {
  return (
    <section className='flex flex-col'>
      <SectionTitle subtitle={sectionText.subtitle} title={sectionText.title} />
      <SectionText
        text={sectionText.text}
        span={sectionText.span}
        href={myGithubLink}
      />
      <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <li key={service.id}>
            <ServiceCard index={index} {...service} />
          </li>
        ))}
      </ul>
      <TechList />
    </section>
  );
};

export default SectionWrapper(About, 'about');
