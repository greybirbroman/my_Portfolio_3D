import { motion as m } from 'framer-motion';

const MotionScroll = ({ style }) => {
  return (
    <m.div
      style={style}
      className="h-[10px] gradient-scroll z-50 fixed w-full"
    />
  );
};

export default MotionScroll;
