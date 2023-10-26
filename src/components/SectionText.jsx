import React from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const SectionText = ({ text, span, href }) => {
  return (
    <m.p
      className='mt-4 text-secondary text-md max-w-3xl leading-[25px] font-extralight tracking-wider cursor-default'
      variants={fadeIn('', '', 0.1, 1)}
    >
      {text}{' '}
      {span && (
        <a href={href} target='_blank' className='text-[#915eff]'>
          {span}
        </a>
      )}
    </m.p>
  );
};

export default SectionText;
