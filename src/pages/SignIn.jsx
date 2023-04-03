import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from './events.json';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-4">
            <div className="pt-32 pb-12 md:pt-32 md:pb-20">

              {/* Page header */}


              <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

                <div className="max-w-screen-lg sm:mx-auto pb-8 lg:py-8">
                  <h3 className="h3">Recent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Activities :  </span> </h3>
                </div>

                <div className="max-w-screen-lg sm:mx-auto">



                  {jsonData.map((project, index) => (
                    <div key={index}>
                      <div className="flex flex-col shadow-xl  mb-4   gap-4 items-start py-4 transition duration-300 transform rounded-xl sm:px-8 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">




                        <div className="mb-4  lg:mb-0">

                          <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                            {project.title}
                          </h5>
                          <div className="relative pr-8">
                            <p className="text-base text-gray-700 font-semibold md:text-lg">
                              {project.description}
                            </p>
                          </div>

                          <div className="relative pt-2 pr-8 flex flex-col ">
                            <h6 className="text-base text-gray-500 font-semibold md:text-md">
                              Tags : {project.tags.join(' , ')}
                            </h6>

                            <h6 className="text-base text-gray-500 font-semibold md:text-md">
                              Date : {project.date}
                            </h6>

                          </div>
                        </div>
                        <div className="flex justify-start w-56 lg:justify-end">
                          <a
                            href={project.link}
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            target="_blank"
                          >
                            Learn More
                            <svg
                              className="inline-block w-3 ml-2"
                              fill="currentColor"
                              viewBox="0 0 12 12"
                            >
                              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                          </a>

                        </div>
                      </div>
                    </div>
                  ))}




                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Banner />

    </div>
  );
}

export default SignIn;