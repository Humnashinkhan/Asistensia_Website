import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
    <div className="bg-[#f5f8fd] w-full h-[90vh] flex justify-between">
      <div className="w-80 ml-40 pt-5">
        <h4 className="text-[34px] uppercase text-[#413e66] font-normal pt-10 tracking-custom">Asistensia</h4>
        <p className="text-[#535074] text-[13px] leading-snug pt-5">Extend your tech team by letting us step in and take 
          charge of everyday tasks. We have an expert team of 
          Full-Stack Engineers with 24/7 Cloud Support.
        </p>
        <h4 className="text-[14px] font-bold text-[#413e66] uppercase pt-8">Our Newsletter</h4>
        <p className="text-[#444] text-[14px] leading-snug pt-5 font-medium">Would you like to receive emails from Asistensia with 
          updates, tech news and special offers of Asistensia? 
          You can unsubscribe any time by clicking the 
          unsubscribe link in the email.
        </p>
         <input
         className="mt-10 p-1 w-52 border-2 border-gray-200"
         type="text"
        />
        <input
        className="text-white bg-[#1bb1dc] px-7 py-1 hover:bg-[#1993bc]" 
        type="submit"
        />
      </div>
      <div className="pt-16">
      <h4 className="font-bold text-[14px] uppercase text-[#413e66]">Useful Links</h4>
      <ul>
        <li className="text-[16px] text-[#696592] pt-2 hover:text-[#1bb1dc]">Home</li>
        <li className="text-[16px] text-[#696592] pt-2 hover:text-[#1bb1dc]">About Us</li>
        <li className="text-[16px] text-[#696592] pt-2 hover:text-[#1bb1dc]">Services</li>
        <li className="text-[16px] text-[#696592] pt-2 hover:text-[#1bb1dc]">Terms of Service</li>
        <li className="text-[16px] text-[#696592] pt-2 hover:text-[#1bb1dc]">Privacy policy</li>
      </ul>
      <h4 className="font-bold text-[14px] uppercase text-[#413e66] pt-9">Contact Us</h4>
      <p className="text-[16px] text-[#444] pt-2">
         John Blankensteinstraat<br/>
         Amsterdam, 1095MB, NL<br/>
         +31 - 0645394656<br/>
         contact@asistensia.com<br/>
         KvK No. 82002525<br/>
         VAT No. NL003628651B77
      </p>
      <div className="text-white pt-3">
       <FontAwesomeIcon 
       icon={faTwitter} 
       className="bg-[#1bb1dc] h-4 p-3 m-2 transition duration-300 cursor-pointer hover:bg-[#1993bc] rounded-full"
      />
      <FontAwesomeIcon 
      icon={faFacebookF} 
      className="bg-[#1bb1dc] h-4 p-3 m-2 transition duration-300 cursor-pointer hover:bg-[#1993bc] rounded-full" 
     />
      <FontAwesomeIcon 
      icon={faLinkedin} 
      className="bg-[#1bb1dc] h-4 p-3 m-2 transition duration-300 cursor-pointer hover:bg-[#1993bc] rounded-full"
    />
    </div>
      </div>
       <div className="pt-16">
        <h4 className="font-bold text-[14px] uppercase text-[#413e66]">Interested in our services?</h4>
        <p className="text-[16px] text-[#444] pt-5 mr-40">We’ll contact you within 24 hours with more information on our next steps.</p>
          <form className="grid gap-5 pt-7">
           <input
           className="w-[30rem] p-2 border-2 border-gray-200" 
           type="text" 
           placeholder='Your Name'
           />
          <input
           className="w-[30rem] p-2 border-2 border-gray-200"  
           type="text" 
           placeholder='Your Email'
           /> 
           <input
          className="w-[30rem] p-2 border-2 border-gray-200"  
           type="text" 
           placeholder='Subject'
           />
            <input 
            className="w-[30rem] h-32 border-2 border-gray-200 pb-20 pl-2" 
           type="text" 
           placeholder='Message'
           />
          </form>
          <input 
          className="m-4 bg-[#1bb1dc] text-white px-6 py-2 rounded-md hover:bg-[#1993dc]"
          type="submit"
          value="Send Message"
          />
       </div>
    </div>
    <div className="p-6 text-center text-[#535074]">
      <h1>© <strong>Asistensia</strong></h1>
    </div>
    </>
  )
}

export default Footer