import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const TechList = () => {
  return (
    <ul className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <li className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </li>
      ))}
    </ul>
  );
};

export default TechList;
