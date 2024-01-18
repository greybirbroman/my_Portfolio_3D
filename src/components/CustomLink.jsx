import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ href, imgUrl, variant }) => {
  return (
    <Link
      to={href}
      target="_blank"
      className={`${
        variant === 'white' ? 'bg-white' : 'black-gradient'
      } w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
    >
      <img
        src={imgUrl}
        alt="Link, icon"
        className="w-2/3 h-2/3 object-contain"
      />
    </Link>
  );
};

export default CustomLink;
