import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo_transparent.svg';

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} alt='Logo, Roman Fedorov, Frontend-developer' className='w-[50px] h-[50px] object-contain rounded-full'/>
    </Link>
  );
};

export default Logo;
