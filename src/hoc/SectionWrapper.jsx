import { motion as m } from 'framer-motion';
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName, gradient) => 
function HOC() {
    return (
        <m.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 min-h-screen`}
        >
        <span className='hash-span' id={idName}>{''}</span>
            <Component />
        </m.section>
    )
}

export default SectionWrapper
