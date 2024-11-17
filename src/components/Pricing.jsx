import React from 'react'

const Pricing = () => {
  return (
    <div className="bg-[#f5f8fd] w-full md:h-[100vh]">
       <h4 className="text-[36px] font-bold text-center text-[#413e66] pt-16">Pricing</h4>
         <p className="text-[#535074] text-center pt-4">Get Premium Support</p>
         <div className="md:flex justify-between md:ml-40 md:mr-44 pt-10 md:pt-16"> 

         <div className="bg-white h-96 md:w-64 text-center m-4 transition duration-500 transform hover:scale-105 ease-in-out hover: border-t-sky-400 hover:border-t-4 shadow-lg">
          <div className="text-[#535074]">
            <h3 
             className="text-[64px] pt-5">
             <span className="text-[28px] font-normal">$</span>
                 700
              <span className="text-[16px]">/month</span>
             </h3> 
             <h4 className="font-normal text-[24px]">Starter Plan</h4>
             <ul className="pt-5">
              <li>20 Hours per Month</li>
              <li className="pt-2">Business Hours</li>
              <li className="pt-2">24/7 System Support</li>
            </ul>
            <button 
            className="text-white bg-[#1bb1dc] mt-10 px-4 py-2 rounded-sm hover:bg-[#1993bb]">
              <a href="#footer">CHOOSE PLAN
              </a>
            </button>
          </div>
         </div>

         <div className="bg-white h-96 md:w-64 text-center m-4 transition duration-500 transform hover:scale-105 ease-in-out hover: border-t-sky-400 hover:border-t-4 shadow-lg">
          <div className="text-[#535074]">
            <h3 
             className="text-[64px] pt-5">
             <span className="text-[28px] font-normal">$</span>
                 1500
              <span className="text-[16px]">/month</span>
             </h3> 
             <h4 className="font-normal text-[24px]">Standard Plan</h4>
             <ul className="pt-5">
              <li>60 Hours per Month</li>
              <li className="pt-2">24/7 System Support</li>
              <li className="pt-2">Production Monitoring</li>
            </ul>
            <button 
            className="text-white bg-[#1bb1dc] mt-10 px-4 py-2 rounded-sm hover:bg-[#1993bb]">
              <a href="#footer">CHOOSE PLAN
              </a>
            </button>
          </div>
         </div>

         <div className="bg-white h-96 md:w-64 text-center m-4 transition duration-500 transform hover:scale-105 ease-in-out hover: border-t-sky-400 hover:border-t-4 shadow-lg">
          <div className="text-[#535074]">
            <h3 
             className="text-[64px] pt-5">
             <span className="text-[28px] font-normal">$</span>
                 2500
              <span className="text-[16px]">/month</span>
             </h3> 
             <h4 className="font-normal text-[24px]">Plus Plan</h4>
             <ul className="pt-5">
              <li>100 Hours per Month</li>
              <li className="pt-2">24/7 Production Monitoring</li>
              <li className="pt-2">Business Hours DevOps</li>
            </ul>
            <button 
            className="text-white bg-[#1bb1dc] mt-10 px-4 py-2 rounded-sm hover:bg-[#1993bb]">
              <a href="#footer">CHOOSE PLAN
              </a>
            </button>
          </div>
         </div>

         <div className="bg-white h-96 md:w-64 text-center m-4 transition duration-500 transform hover:scale-105 ease-in-out hover: border-t-sky-400 hover:border-t-4 shadow-lg">
          <div className="text-[#535074]">
            <h3 
             className="text-[64px] pt-5">
             <span className="text-[28px] font-normal">$</span>
                 2999
              <span className="text-[16px]">/month</span>
             </h3> 
             <h4 className="font-normal text-[24px]">Premium Plan</h4>
             <ul className="pt-5">
              <li>80 Hours per Month</li>
              <li className="pt-2">24/7 Production Management</li>
              <li className="pt-2">Business Hours DevOps</li>
            </ul>
            <button 
            className="text-white bg-[#1bb1dc] mt-10 px-4 py-2 rounded-sm hover:bg-[#1993bb]">
             <a href="#footer">CHOOSE PLAN
             </a>
            </button>
          </div>
         </div>

         </div>
    </div>
  )
}

export default Pricing