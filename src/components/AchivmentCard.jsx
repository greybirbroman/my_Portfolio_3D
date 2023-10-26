import { motion as m } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const AchievmentCard = ({ index, name, image }) => {
  return (
    <m.div
      className='rounded-2xl sm:w-[460px] w-full cursor-pointer relative h-fit'
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      whileHover={{ scale: 1.2 }}
    >
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover object-top rounded-2xl'
      />
    </m.div>
  );
};

export default AchievmentCard;
