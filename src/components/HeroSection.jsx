import React from "react";

function HeroSection() {
  return (
    <div clasName="">
      <section class="mb-34 pt-20   overflow-y-hidden ">
        <div class="px-6 md:px-12   text-gray-200 text-center lg:pt-36 lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="lg:pl-28  items-center">
              <div class="lg:mt-0">
                <p className="font-Roboto mt-16 text-[#56DABE]">
                  Hi, my name is
                </p>
                <p className="text-4xl  text-gray-200 text-center lg:text-left mt-4  leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] ">
                  Raval
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    {" "}
                    Meet.
                  </span>
                </p>
                <p className="text-4xl  text-gray-400 text-center lg:text-left mt-4  leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] ">
                  Let's do Epic Sheets.
                </p>
                <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[520px] text-lg text-gray-500 font-semibold text-center lg:text-left">
                  My areas of interest are Data Science, Machine learning, and
                  Web development. I enjoy problem-solving, research, and
                  development.
                </p>
              </div>
              <a href="https://www.linkedin.com/in/meetraval/" target="_blank" rel="noreferrer">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0A192F]  rounded-md group-hover:bg-opacity-0">
                  Contact Me
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
