import { navLinks } from '../utils/constants';
import { BurgerMenuButton } from './';
import useNavbar from '../utils/hooks/useNavbar';
import { motion as m } from 'framer-motion';
import {
  sidebarVariants,
  sidebarListItemVariants,
  sidebarItemVariants,
} from '../utils/motion';

const Navbar = () => {
  const { ref, isOpen, toggleMenu } = useNavbar();

  const Links = () => (
    <m.ul
      variants={sidebarListItemVariants}
      className={`w-[200px] sm:w-[400px] flex flex-col items-center justify-center gap-10 sm:gap-20 capitalize text-black bg-white `}
    >
      {navLinks.map((item) => (
        <m.li
          variants={sidebarItemVariants}
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className='text-xl sm:text-5xl'
        >
          <a href={item.id}>{item.title}</a>
        </m.li>
      ))}
    </m.ul>
  );

  return (
    <>
      <m.nav
        ref={ref}
        animate={isOpen ? 'open' : 'closed'}
        className='bg-white flex flex-col items-center justify-center rounded-full'
      >
        <m.div
          variants={sidebarVariants}
          className='fixed top-0 right-0 flex self-end h-full'
        >
          <Links />
        </m.div>
        <BurgerMenuButton onClick={toggleMenu} />
      </m.nav>
    </>
  );
};

export default Navbar;
