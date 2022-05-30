

import React, { useEffect } from 'react'
import About from './components/About'
import Card from './components/Card'
import Footer from './components/Footer'
import Skills from './components/Skills'
import ContactMe from './components/contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
        
    })
  })
  return (
    <div className="relative min-h-screen py-10 px-3 sm:px-5 overflow-y-hidden overflow-x-hidden max-w-screen ">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>  
 
            
            
      <div data-aos="fade-down max-w-screen" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up " data-aos-duration="800" data-aos-delay="400">
        {/* <About /> */}
        <Skills />
        {/* <ContactMe /> */}
        {/* <Footer /> */}

      </div>
    </div>
  );
}
export default Home;
