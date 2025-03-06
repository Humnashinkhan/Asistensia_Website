import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    
const [isOpen, setIsOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);


 const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div 
      className={`fixed top-0 left-0  z-50 transition-all duration-300 flex w-full items-center justify-between px-8 py-4 ${
        isScrolled ? 'bg-white shadow-lg h-24 fixed' : 'bg-transparent h-24'
      }`}
    >
      <div className="items-center cursor-pointer">
        <a href="/">
            <img
             className="h-10 w-auto md:ml-40 md:mt-10 mt-5"
             alt="logo"
             src="https://bitbucket.org/sd3lab/dev_pool/raw/7991ee78c53bc41e5b4ddc7ae06520d550dd6e51/app/assets/images/asistensia-logo.png"
             />
        </a>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-3xl text-[#413e66]"/>
         </button>
         <div className="hidden md:flex" >
            <ul className="flex space-x-7 text-lg mt-7 mr-40 cursor-pointer">
                <li 
                className="block relative text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                   <a href="/">Home</a> 
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                    <a href="#about">ABOUT US</a>
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                  <a href="#services">SERVICES </a> 
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                  <a href="#team">TEAM</a> 
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                   <a href="#blog">BLOG </a> 
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                   <a href="#footer">CONTACT US</a>
                </li>
            </ul>
        </div>
        {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">Home</li>
            <li className="text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">ABOUT US</li>
            <li className="text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">SERVICES</li>
            <li className="text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">TEAM</li>
            <li className="text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">BLOG</li>
            <li className="text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">CONTACT US</li>
          </ul>
        </div>
      )}


    </div> 

  );
};

export default Header