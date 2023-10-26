import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Works, Parallax } from './sections';
import { Header, StarsCanvas, MotionScroll } from './components';
import useMotionScroll from './utils/hooks/useMotionScroll';

const App = () => {
  const { ref, scaleX } = useMotionScroll();
  return (
    <BrowserRouter>
      <div ref={ref} className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <MotionScroll style={{ scaleX }}/>
          <Header />
          <Hero />
        </div>
        <Parallax title='What About Me?' />
        <About />
        <Experience />
        <Parallax title='What About My Works?' type='sun' />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
