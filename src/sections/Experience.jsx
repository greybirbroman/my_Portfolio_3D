import { VerticalTimeline } from 'react-vertical-timeline-component';
import { ExperienceCard, SectionTitle, SectionText, AchievmentCard } from '../components';
import { experiences, achievements } from '../utils/constants';
import { SectionWrapper } from '../hoc';

const sectionText = {
  title: `Experience.`,
  subtitle: `What i have done`,
  text: `Я стремлюсь узнавать что-то новое каждый день, изучаю новые технологии, совершенствую навыки и закрепляю их в новых пет-проектах.`
};

const Experience = () => {
  return (
    <>
      <SectionTitle title={sectionText.title} subtitle={sectionText.subtitle} />
      <SectionText text={sectionText.text}/>
      <article className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
        <ul className='mt-20 flex flex-wrap gap-20 justify-center'>
        {achievements.map((item, index) => (
          <li key={item.id} className='w-fit h-fit'>
            <AchievmentCard index={index} {...item}/>
          </li>
        ))}
      </ul>
      </article>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
