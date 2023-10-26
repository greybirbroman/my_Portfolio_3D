import { ProjectCard, SectionTitle, SectionText } from '../components';
import { SectionWrapper } from '../hoc';
import { projects } from '../utils/constants';

const sectionText = {
  title: `Projects.`,
  subtitle: `My works`,
  text: `Познакомьтесь с моими проектами. В них я демонстрирую свои умения и навыки
  взаимодействия с разными технологиями. У каждого проекта есть
  описание, ссылка на репозиторий и теги. Вы, так же, можете посмотреть исходный код
  и проверить как они работают перейдя по ссылкам на изображении.`,
};

const Works = () => {
  return (
    <>
      <SectionTitle title={sectionText.title} subtitle={sectionText.subtitle} />
      <SectionText text={sectionText.text} />
      <ul className='mt-20 flex flex-wrap items-start justify-center gap-7'>
        {projects.map((project, index) => (
          <li key={`project-${index}`}>
            <ProjectCard {...project} index={index} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(Works, 'work');
