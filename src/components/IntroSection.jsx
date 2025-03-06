import React from 'react'
import Header from './Header'

const IntroSection = () => {
  return (
    <div>
        <Header/>
    <div className="w-full">
     <img 
      className='w-full h-[700px]'
      alt="bg-img"
      src="https://bitbucket.org/sd3lab/dev_pool/raw/7991ee78c53bc41e5b4ddc7ae06520d550dd6e51/app/assets/images/intro-bg.jpg"
    />
   <div className="top-[54%] text-center left-20 md:text-left md:top-1/3 absolute md:left-44 text-[#413e66] max-w-md">
    <h1 className="text-4xl md:text-5xl font-bold">Quick Solutions <br/>
         for Your <span className="text-[#1bb1dc]">Business!</span></h1>
   </div>
     <button 
     className="absolute top-[67%] left-40 md:top-[56%] md:left-44 text-white font-semibold bg-[#1bb1dc] hover:bg-[#1993bb] px-8 py-2 rounded-md">
       <a href="#footer"> GET STARTED
       </a>
    </button>

   <div className="absolute top-[16%] right-8 md:top-1/4 md:right-16 md:mr-40">
    <img
     className="h-[16rem] w-full md:w-[600px] md:h-[26rem]"
     alt="side_image"
     src="https://www.cjbyte.com/assets/img/Chris-Byte-Solutions-Private-Limited-intro-img.webp"
     />
   </div>
  </div>
    </div>
  )
}

export default IntroSection