import { useState, useEffect, useRef } from 'react';

const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if(ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
        document.removeEventListener('click', handleOutsideClick)
    }
  },[])

  return {
    ref,
    isOpen,
    toggleMenu
  };
};

export default useNavbar;