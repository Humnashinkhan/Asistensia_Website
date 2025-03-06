import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faSatelliteDish } from '@fortawesome/free-solid-svg-icons'
import { faSketch } from '@fortawesome/free-brands-svg-icons'
const ChooseUs = () => {
  return (
    <div className="w-screen md:w-full h-[180vh] md:h-[150vh]">
     <div>
        <h1 className="text-[36px] text-center text-[#413e66] font-bold pt-12">
            Why choose us?
        </h1>
       <p className="text-center text-[15px] text-[#535074] p-5">
        Several years of work on organization development and service design let us gain the trust of global businesses
        </p>
        </div>

        <div className="md:flex">
            <img
             className="mt-10 w-[90%] md:w-[45%] md:h-96 ml-5"
             alt="img"
             src="https://bitbucket.org/sd3lab/dev_pool/raw/7991ee78c53bc41e5b4ddc7ae06520d550dd6e51/app/assets/images/why-us.jpg"
            />
        <div className="mt-10 md:ml-8">
          <p className="text-[#444] text-[17px] font-normal ml-5 md:ml-0">
            Asistensia is a world-class team working globally. Our clients are business owners looking to create<br/>
             new products or improve existing software solutions.
        </p>
          <p className="mt-8 text-[#444] text-[17px] font-normal ml-5 md:ml-0">
            Our organizational structure is designed to give our clients access to the best talent and the most<br/> 
            effective approaches to build software.
         </p>

         <h4 
         className="mt-3 text-[25px] text-[#413e66] font-semibold">
            <FontAwesomeIcon icon={faSatelliteDish} className="text-[#f058dc] h-4 p-7"/> Streamlined processes
            </h4>
          <p className="ml-20 text-[16px] text-[#555186]">The more efficient workflow, the more efficient the employees. Our process allows for <br/>
            maintaining the quality of work, automating software delivery pipeline and increasing team<br/> 
            morale
        </p>

        <h4 
        className="mt-3 text-[24px] text-[#413e66] font-semibold">
            <FontAwesomeIcon icon={faPeopleCarry} className="text-[#589af1] h-4 p-7"/> Talented people
        </h4>
        <p className="ml-20 text-[16px] text-[#555186]">We seek talented multi-dimensional individuals and invest in them by offering one of the<br/> 
            strongest career mentoring and training programs in our city.
        </p>

        <h4 
        className="mt-3 text-[24px] text-[#413e66] font-semibold">
           <FontAwesomeIcon icon={faSketch} className="text-[#ffb774] h-4 p-7"/>  Proven technologies
        </h4>
        <p className="ml-20 text-[16px] text-[#555186]">The result of our work is software that satisfies the CISQ code quality standards. It is secure, 
            maintainable, efficient, and reliable. With reliable software, it's easy to grow.</p>
       </div>
       </div>
       <div className="md:flex justify-between ml-16 md:ml-64 mt-20 md:mr-64 grid grid-cols-2 gap-8">
         <div className="text-[#555186]">
            <span className="text-[48px] font-bold">100</span>
             <p className="text-[16px] p-2">Clients</p>
       </div>
        <div className="text-[#555186]">
            <span className="text-[48px] font-bold">120</span>
             <p className="text-[16px] p-2">Projects</p>
        </div>
        <div className="text-[#555186]">
            <span className="text-[48px] font-bold">9,999</span>
             <p className="text-[16px] p-2">Hours Of Support</p>
        </div>

       <div className="text-[#555186]">
           <span className="text-[48px] font-bold">11</span>
           <p className="text-[16px] p-2">Hard Workers</p>
       </div>
       </div>
    </div>
  )
}

export default ChooseUs