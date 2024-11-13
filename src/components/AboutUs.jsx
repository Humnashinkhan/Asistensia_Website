import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./AboutUs.css"
import { faCheckCircle, faCheckDouble, faIdBadge } from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
  return (
    <div className=" bg-[#fff] w-full h-[750px] flex flex-wrap">
      <div className="relative about-img-wrapper">
        <img
         className="w-96 mt-24 ml-48 transition duration-500 transform hover:scale-105 border-8 border-solid border-white"
         alt="about-img"
         src="https://asistensia.com/assets/about-img-5653c8506cf39df77a5ff65c60d79290e34bbbb639ba525faff018aaa147d0fa.jpg"
         />
    </div>
    <div className="mt-24 ml-10">
      <h1 className="text-[#413e66] font-semibold text-3xl">About Us</h1>
      <h2 className="text-[#696592] font-medium text-[22px] italic pt-5">The team that lets you build more, while configuring less</h2>
       <p className="text-[#444] font-medium text-[16px]  pt-5">A software development house with 8 years of experience building & maintaining<br/> 
        software for enterprise organizations and applications for startups</p>  
        <h2 className="text-[#444] font-medium text-[16px]  pt-7">Asistensia is based on three pillars:</h2>   
        <ul>
          <li 
          className="text-[#444] font-normal text-[16px] pt-6">
           <FontAwesomeIcon icon={faCheckDouble} className="text-[#1bb1dc] pr-2"/>
             Streamlined processes.
          </li>
          <li 
          className="text-[#444] font-normal text-[16px]  pt-3"> 
          <FontAwesomeIcon icon={faCheckDouble} className="text-[#1bb1dc] pr-2"/>
             Proven technologies.
          </li>
          <li 
          className="text-[#444] font-normal text-[16px]  pt-3">
            <FontAwesomeIcon icon={faCheckDouble} className="text-[#1bb1dc] pr-2"/>
            Talented people.
            </li>
          <p className="text-[#444] font-normal text-[16px]  pt-10">The combination of these things makes us one of the top software development<br/>
             companies.</p>
          </ul>  
    </div>
    </div>
  )
}

export default AboutUs