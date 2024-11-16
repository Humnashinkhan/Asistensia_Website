import React from 'react'

const GetInTouch = () => {
  return (
    <div className="bg-[#2d2b46] w-full h-64 md:h-48">
        <h3 
        className="text-[#fff] text-[28px] font-bold text-center md:text-left md:ml-40 pt-8">
           Get In Touch
        </h3>
     <div className="md:flex md:ml-40 justify-between md:mr-40 mt-5 text-center ">
        <p className="text-[#fff]">Need an urgent support? or Got an amazing business idea? Let’s bring it to market together.</p>
        <button 
        className="text-white text-[16px] font-bold border-2 border-solid border-white px-5 py-2 hover:bg-[#1bb1dc] mt-8 md:mt-0">
          <a href="#footer"> Get In Touch
          </a>
        </button>
    </div>
    </div>
  )
}

export default GetInTouch