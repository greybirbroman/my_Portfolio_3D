import { Tilt } from 'react-tilt';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='w-full cursor-pointer'>
      <m.div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        variants={fadeIn('right', 'spring', 0.75 * index, 2)}
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

export default ServiceCard;
