import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center justify-between xs:px-3 lg:px-[60px] py-4'>
      <img src={logo} className='xs:w-32 lg:w-48' />
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-Primary-0 text-2xl'>
          <FaBars />
        </button>
      </div>
      <ul
        className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-6 lg:space-y-0 lg:space-x-[6rem] lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:flex ${
          menuOpen ? 'block bg-white-0 z-40 animate-bounce-to-bottom' : 'hidden bg-transparent'
        }`}
      >
        <FaTimes className='text-[30px] text-Primary-0 absolute top-8 right-9 lg:hidden xs:block' onClick={toggleMenu} />
        <li onClick={toggleMenu} className='text-Primary-0 font-Mulish lg:text-[17px] xs:text-[22px] font-normal lg:text-left'>
          Home
        </li>
        <li onClick={toggleMenu} className='text-Primary-0 font-Mulish lg:text-[17px] xs:text-[22px] font-normal lg:text-left xs:pt-[3rem] lg:pt-0'>
          About
        </li>
        <li onClick={toggleMenu} className='text-Primary-0 font-Mulish lg:text-[17px] xs:text-[22px] font-normal lg:text-left xs:pt-[3rem] lg:pt-0'>
          Solutions
        </li>
        <Link to='/waitlist' onClick={toggleMenu}>
          <li className='border-Primary-0 border lg:py-1.5 xs:py-2 lg:px-[30px] xs:px-[50px] rounded-[8px] text-Primary-0 hover:bg-Primary-0 hover:text-white-0 xs:mt-[3rem] lg:mt-0 lg:text-[17px] xs:text-[20px]'>
            Join Now
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;