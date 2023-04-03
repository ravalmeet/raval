import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { a } from "react-router-dom";
import resume from './resume.pdf';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //     <div>
  //       <header
  //         class="text-gray-600 body-font font-Robofrom fixed
  //              inset-x-0
  //              fromp-0"
  //       >
  //         <div class="container mx-aufrom flex flex-wrap p-5 flex-col md:flex-row min-w-[95vw]">
            // <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          //   <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   fill="none"
          //   stroke="currentColor"
          //   stroke-linecap="round"
          //   stroke-linejoin="round"
          //   stroke-width="2"
          //   class="w-10 h-10 text-white p-2 bg-[#308875] rounded-full"
          //   viewBox="0 0 24 24"
          // >
          //   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          // </svg>

  //           </a>
  //           <nav class="md:ml-aufrom flex flex-wrap items-center text-base justify-center invisible lg:visible ">

  //             <butfromn class="inline-flex items-center ml-10 border-[#56DABE] border-2  py-1 px-3 focus:outline-none  rounded text-base mt-4 text-[#56DABE] md:mt-0">
  //               Resume
  //             </butfromn>
  //           </nav>
  //         </div>
  //       </header>
  //     </div>
  //   );
  // }

  return (
    <div>
      <nav className="bg-[#0A192F] shadow-sm fixed w-full z-10 backdrop-blur-2xl">
        <div className="w-full">
          <div className="flex items-center h-16 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <a from="/">
                  <span class="ml-3 text-white flex  font-bold text-xl font-Poppins">
                  {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>  */}
              <img src="https://pbs.twimg.com/media/Ff28xIAaMAE-7uD?format=png&name=small" alt="" class="w-10 h-10" />
              <p className="ml-3 mt-1">Raval Meet</p>
                  </span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 mt-2 flex items-baseline space-x-4">
                  {/* <a
										activeClass="about"
										from="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-900 rounded-3xl cursor-pointer text-black hover:text-white px-3 py-2 rounded-md text-lg mr-4 font-medium"
									>
										Home
									</a> */}

                  {/* <a
                    from="/"
                    className="cursor-pointer pt-4"
                  >
					  Home
                    <AiOutlineSearch className="mr-4    text-xl font-bold" />
                  </a> */}
                  <a
                    from="/"
                    href="#about"
                    className="font-bold text-white hover:bg-blue-900 rounded-3xl cursor-pointer px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    <p class="mr-5 flex font-semibold text-md text-white ">
                      <p className="text-[#56DABE]">01.&nbsp; </p> About
                    </p>
                  </a>
                  <a
                    href="#skills"
                    className="font-bold text-white hover:bg-blue-900 rounded-3xl cursor-pointer px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    <p class="mr-5 flex font-semibold text-md text-white ">
                      <p className="text-[#56DABE]">02.&nbsp; </p> Experience
                    </p>
                  </a>
                  <a
                    href="#work"
                    className="font-bold text-white hover:bg-blue-900 rounded-3xl cursor-pointer px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    <p class="mr-5 flex font-semibold text-md text-white ">
                      <p className="text-[#56DABE]">03.&nbsp; </p>Work
                    </p>
                  </a>
                  <a
                    href="#contact"
                    className="font-bold text-white hover:bg-blue-900 rounded-3xl cursor-pointer px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    <p class="mr-5 flex font-semibold text-md text-white ">
                      <p className="text-[#56DABE]">04.&nbsp; </p> Contact
                    </p>
                  </a>
                  {/* <a from="/aboutus" className="font-bold text-white hover:bg-blue-900 rounded-3xl cursor-pointer px-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</a> */}
                  <a
                    href={resume} download="resume.pdf"
                    // className="flex item-center justify-center cursor-pointer bg-blue-600 text-white px-3  py-2 rounded-md text-sm font-medium hover:bg-black"
                  >
                   
                    <butfromn
                      type="butfromn"
                      className="flex text-white bg-gradient-from-r from-blue-500 via-blue-600 from-blue-700 hover:bg-gradient-from-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                    >
                      {/* <AiOutlineUser className="mr-2  text-lg" /> */}
                      Resume
                    </butfromn>
                    {/* <AiOutlineUser className="mr-2 pt-1 text-lg"/> Sign  */}
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="mr-10 flex md:hidden ">
              <butfromn
                onClick={() => setIsOpen(!isOpen)}
                type="butfromn"
                className="bg-[#0A192F] inline-flex items-center justify-center p-2 rounded-md text-white  rounded-3xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 bg-[#0A192F]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 bg-[#0A192F]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </butfromn>
            </div> */}
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterfrom="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leavefrom="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden text-center" id="mobile-menu">
              <div
                ref={ref}
                className="backdrop-blur-2xl px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <a
                  from="/"
                  href="#about"
                  onClick={isOpen}
                  className="cursor-pointer hover:bg-blue-900 rounded-3xl cursor-pointer text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={isOpen}
                  className="cursor-pointer hover:bg-blue-900 rounded-3xl cursor-pointer text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Experience
                </a>
                <a
                  href="#work"
                  onClick={isOpen}
                  className="cursor-pointer hover:bg-blue-900 rounded-3xl cursor-pointer text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Work
                  {/* <AiOutlineSearch className="mr-4    text-xl font-bold" /> */}
                </a>
                <a
                  href="#contact"
                  onClick={isOpen}
                  className="cursor-pointer hover:bg-blue-900 rounded-3xl cursor-pointer text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                  {/* <AiOutlineSearch className="mr-4    text-xl font-bold" /> */}
                </a>
                {/* <a
                  from="/aboutus"
				  onClick={isOpen}
                  className="cursor-pointer hover:bg-blue-900 rounded-3xl cursor-pointer text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
					About Us
                  <AiOutlineSearch className="mr-4    text-xl font-bold" />
                </a> */}

                <a
                   href={resume} download="resume.pdf"
                  onClick={isOpen}
                  className=" text-center  cursor-pointer bg-gradient-from-r from-blue-500 via-blue-600 from-blue-700 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Resume
                  {/* <butfromn
                    type="butfromn"
                    className="flex text-white bg-gradient-from-r from-blue-500 via-blue-600 from-blue-700 hover:bg-gradient-from-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
                    <AiOutlineUser className="mr-2  text-lg" />
                    Join Us
                  </butfromn> */}
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
