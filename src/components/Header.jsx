import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
      <div className="absolute flex w-full items-center justify-between px-8 py-4 ">
      <div className="items-center cursor-pointer">
            <img
             className="h-10 w-auto md:ml-40 md:mt-10 mt-5"
             alt="logo"
             src="https://asistensia.com/assets/asistensia-4cb14fceec388d06474a50f4868eb2c3f7de2a835f78083e78365b5d70bc9068.png"
             />
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-3xl text-[#413e66]"/>
         </button>
         <div className="hidden md:flex" >
            <ul className="flex space-x-7 text-lg mt-7 mr-40 cursor-pointer">
                <li 
                className="block relative text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                    Home
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                    ABOUT US
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                    SERVICES
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                    TEAM
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                    BLOG
                </li>
                <li 
                className="block relative text-[#413e66] hover:text-[#1bb1dc] uppercase text-sm font-sans font-bold px-2 py-2 transition duration-300">
                    CONTACT US
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