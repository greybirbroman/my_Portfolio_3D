import React from 'react';
import { styles } from '../styles';
import { motion as m } from 'framer-motion'
import { titleVariants } from '../utils/motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <m.div variants={titleVariants} initial='initial' whileInView='animate' className='cursor-default'>
      <p className={styles.sectionSubText}>{subtitle}</p>
      <h2 className={styles.sectionHeadText}>{title}</h2>
    </m.div>
  );
};

export default SectionTitle;
