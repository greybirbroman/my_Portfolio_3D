import { Tilt } from 'react-tilt';
import { motion as m } from 'framer-motion';
import { github, deploy } from '../assets';
import { fadeIn } from '../utils/motion';
import { CustomLink } from './';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
}) => {
  return (
    <m.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-default"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <CustomLink href={source_code_link} imgUrl={github} />
            {deploy_link && (
              <CustomLink href={deploy_link} imgUrl={deploy} variant="white" />
            )}
          </div>
        </div>
        <div className="mt-5">
          <h4 className="text-white forn-bold text-[24px]">{name}</h4>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </li>
          ))}
        </ul>
      </Tilt>
    </m.div>
  );
};

export default ProjectCard;
