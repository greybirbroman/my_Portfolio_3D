import { useRef } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type, title }) => {
  const typeGradient = () =>
    type !== 'sun'
      ? 'bg-gradient-to-b from-[#111132] to-[#0c0c1d]'
      : 'bg-gradient-to-b from-[#111132] to-[#505064]';

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textTransform = useTransform(scrollYProgress, [0, 1], ['0', '500%']);
  const backgroundTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ['0', '100%']
  );

  return (
    <section
      ref={ref}
      className={`h-screen w-full mx-auto relative flex items-center justify-center overflow-hidden ${typeGradient()}`}
    >
      <m.h3
        style={{ y: textTransform }}
        className='text-4xl sm:text-6xl capitalize font-semibold p-4'
      >
        {title}
      </m.h3>
      <div className='bg-mountains w-full h-full absolute bg-bottom bg-cover z-30'></div>
      <m.div
        style={{ y: backgroundTransform }}
        className={`${
          type !== 'sun' ? 'bg-planets' : 'bg-sun'
        } w-full h-full absolute bg-bottom bg-cover z-20`}
      ></m.div>
      <m.div
        style={{ x: backgroundTransform }}
        className='bg-stars w-full h-full absolute bg-bottom bg-cover z-10'
      ></m.div>
    </section>
  );
};

export default Parallax;
