import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
     <div name='Home' className='flex justify-between ml-10 mr-10 mt-40'>
      <div className='w-1/2 space-y-2'> 
        <h1 className='text-xl'>Welcome In My Feed</h1>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
             <h1>Hello, I'm a</h1>
       <ReactTyped className='text-3xl text-red-600 font-bold'
      strings={[
        "Coder",
        "Progrmmer",
        "Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
    
      loop={true}
    />
        </div>
        <br />
        <p>
       This is my personal portfolio website. All the information provided on it is accurate and true.
I developed this website using React.js as part of my minor project. It showcases my fundamental understanding of React, including key concepts and features commonly used in modern React applications.


        </p>
  <br />
  <br />
        <div className='flex justify-between '>
             <div className='space-y-2'>
                 <h1>Available on</h1>
        <div className='flex space-x-5 text-2xl'>
            <a href="https://www.facebook.com/" target="_blank"> <FaFacebook className='hover:scale-125 hover:cursor-pointer'></FaFacebook></a>
           <a href="https://www.linkedin.com/" target="_blank">  <FaLinkedin className='hover:scale-125 hover:cursor-pointer'></FaLinkedin></a>
            <a href="https://www.telegram.com/" target="_blank"> <FaTelegram className='hover:scale-125 hover:cursor-pointer'></FaTelegram></a>
            <a href="https://www.youtube.com/" target="_blank"> <FaYoutube className='hover:scale-125 hover:cursor-pointer'></FaYoutube></a>

        </div>
             </div>
        
           <div className='space-y-2'>
             <h1>Currently working on</h1>
        <div className='flex space-x-5 text-2xl  '>
            <SiMongodb className='hover:scale-125 hover:cursor-pointer'></SiMongodb>
            <SiExpress className='hover:scale-125 hover:cursor-pointer'></SiExpress>
            <FaReact className='hover:scale-125 hover:cursor-pointer' ></FaReact>
          
            <FaNodeJs className='hover:scale-125 hover:cursor-pointer'></FaNodeJs>
        </div>
           </div>
        </div>

  


      </div>
      <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img className='rounded-full md:w-[450px] md:h-[450px]' src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" />
      </div>
       
    
    </div>
    <br />
    <hr className='border-red-500' />
    </>
  )
}

export default Home