import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,

} from 'react-icons/fa';


import {SiTableau} from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi';

import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1C1C1C] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '100px' }} />
      </div>

      
      <ul className='hidden md:flex'>
        <li className="hover:text-[#E50072] duration-700">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="hover:text-[#E50072] duration-700">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="hover:text-[#E50072] duration-700">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#E50072] duration-700">
          <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>

       
       
      </ul>

    
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

     
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-50'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
       
      </ul>

     
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/reignerlastimosa'
            >
               Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E50072]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://mail.google.com/mail/?view=cm&fs=1&to=email@lastimosareignerc@gmail.com"
            >
             Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/reigner-lastimosa-271577244/'
            >
            
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#043A7A]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://public.tableau.com/app/profile/reigner.c.lastimosa'
            >
              Tableau <SiTableau size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;