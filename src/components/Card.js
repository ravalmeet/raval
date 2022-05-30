import React from "react";
import profile from '../images/image.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter , FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Card() {
    return(
        <div className=" relative w-full">

             <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5 md:items-center max-w-[100vw]' >
                <div className = "">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                        Raval Meet
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Developer / Programmer

                    </p>
                    <div className="flex align-center justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" target="_blank" href="https://github.com/ravalmeet">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-900 rounded-full hover:text-white transition-colors duration-300" target="_blank"  href="https://www.linkedin.com/in/meetraval/">
              <FaLinkedin className = "rounded-lg" />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" target="_blank" href="https://twitter.com/Meetravall1">
              <FaTwitter />
              <span class="sr-only">Twitter</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" target="_blank"  href="mailto:ravalmeett@gmail.com">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card; 
