import React, { useState } from 'react';
import Modal from '../utils/Modal';
import { Link } from 'react-router-dom';

import HeroImage from '../images/hero-image.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative pb-20">



      {/* Illustration behind hero content */}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}




        <div className="pt-32 pb-12 md:pt-40 md:pb-20">


          <div className="max-w-3xl mx-auto mt-5" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src="https://pbs.twimg.com/media/Fr16Gg3WIAYhpJc?format=jpg&name=small" width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I'm not saying I'm a master of AI, but I did teach my chatbot how to tell dad jokes. Now, it's just as hilarious as I am . They say AI will take over the world, but I'm not worried. I've given my AI assistant a strict 'no world domination' policy. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Meet Raval</cite>
                <div className="text-gray-600 ">
                  <span>CSE'24 , Data Science , Web Development , Financial Trader</span> <a className="text-blue-600 hover:underline" href="#0">@LinkedIn</a>

                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-10" data-aos="zoom-y-out" data-aos-delay="300">
                    <div className=''>

                      <a  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://drive.google.com/file/d/1ZpRJ2XZ2G4-qlcshNd422_GgvVwVq9kY/view?usp=sharing"  target="_blank"  >Download Resume</a>
                    </div>
                    <div>
                      <Link to="/activities" className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" aria-label="Cruip">
                        Recent Activities
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section header */}
          {/* <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Let's Do Some Epic<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Sheets </span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-md text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download Resume</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Recent Activities</a>
                </div>
              </div>
            </div>
          </div> */}

          {/* Hero image */}
          <div>


            {/* Modal
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}



          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;