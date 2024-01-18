import React from 'react';
import { styles } from '../styles';
import { Logo, Navbar } from './';

const Header = () => {
  return (
    <>
      <header
        className={`${styles.paddingX} w-full flex items-center justify-between py-5 fixed top-0 z-50`}
      >
        <Logo />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
