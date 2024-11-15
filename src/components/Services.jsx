import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faGlobe, faMobile, faSitemap, faVial } from '@fortawesome/free-solid-svg-icons'
import { faAws, faCloudscale, faCloudversify, faDigitalOcean, faGoogle, faJenkins, faMicrosoft, faWordpress } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  return (
    <div className="bg-[#f5f8fd] w-screen md:w-full md:h-[240vh]">
      <h1 className="text-[36px] text-[#413e66] text-center font-bold relative font-montserrat pt-12">Services</h1>
        <p className="text-[16px] text-center text-[#535074] pt-5 pb-10">Simple Solutions for Complex Problems.</p>


    <div className="ml-5 mr-60 items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faGem} className="text-[#fe3a2d] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Ruby On Rail</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">If you’re looking for a great Ruby on Rails experts, then look no further!</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faWordpress} className="text-[#fe3a2d] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">WordPress</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Custom wordpress website, optimiztion and SEO friendly</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faMobile} className="text-[#042a6e] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Mobile Development</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Asistensia has expertise in both native and cross-platform technologies</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faVial} className="text-[#8892BF] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Software Testing</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Numerous types of quality assurance testing for web and mobile applications</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faAws} className="text-[#ff689b] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">AWS DevOps</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">We use AWS for provision and managing thousands of containers for startups. </p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faMicrosoft} className="text-[#e98e06] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Microsoft Azure DevOps</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Do you prefer Microsoft Azure? Asistensia has Azure Cloud experts for your need.</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faGoogle} className="text-[#3fcdc7] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Google Cloud Platform DevOps</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Want to build scalable apps using Google's global, reliable infrastructure</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faDigitalOcean} className="text-[#41cf2e] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Digital Ocean DevOps</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Using Digital Ocean? Asistensia help setup and manage their complete stack on 24/7 basis.</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faGlobe} className="text-[#2282ff] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Managed Kubernetes</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Asistensia can bootstrap a new Kubernetes cluster, or help manage an existing Kubernetes cluster.
         </p>
       </div>

     <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faSitemap} className="text-[#8660fe] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Infrastructure as code</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Asistensia can convert your Cloud infrastructure into version controlled Terraform templates.
       </p>
      </div>

     <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faJenkins} className="text-[#fe3a2d] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">CI & CD</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">We setup and manage both integration and continuous delivery pipelines for startups and software development companies</p>
        </div>

     <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faCloudversify} className="text-[#08cbfe] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Cloud Automation</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Using different automation tools and frameworks, we draw a plan to convert available resources into infrastructure as a code</p>
        </div>

    <div className="md:ml-40 w-[350px] h-60 p-8 relative overflow-hidden rounded-lg m-2 mb-10 bg-white shadow-lg shadow-[rgba(68,88,144,0.1)] transition duration-500 transform hover:scale-110 ease-in-out text-center">
        <FontAwesomeIcon icon={faCloudscale} className="text-[#00fe5f] text-[3em]" />
         <h4 className="font-semibold text-[18px] text-[#111] p-2 hover:text-[#1bb1dc]">Cloud Management</h4>
         <p className="text-left pt-2 text-[14px] leading-normal text-[#444]">Many times, our team takes full responsibility of managing customer app stack running on AWS, Azure, GCP or Digital Ocean.</p>
         </div>
      </div>
    </div>
  
  )
}

export default Services