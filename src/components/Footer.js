import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';


function Footer() {
  return (
    <div className="py-5 border-t-3/2">
            <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" target="_blank" href="https://github.com/ravalmeet">
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" target="_blank"  href="https://www.youtube.com/channel/UCYsr3jCarPijFlxpc8CfEBg">
                <FaYoutube />
                <span class="sr-only">YouTube</span>
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
            <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙 </span>by<a className="text-blue-500 hover:underline" target="_blank" href="mailto:ravalmeett@gmail.com"> Raval Meet</a>
              </p>
              </div>
    </div>
  )
}

export default Footer