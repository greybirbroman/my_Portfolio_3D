import {useRef} from 'react'
import { useScroll, useSpring } from 'framer-motion'

const useMotionScroll = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['end end', 'start start'],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 20,
      dumping: 30
    })

  return {
    ref,
    scaleX
  }
}

export default useMotionScroll
