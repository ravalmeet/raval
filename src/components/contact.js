import { FaArrowRight } from 'react-icons/fa';
import { FaBlogger } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiFillYoutube } from "react-icons/ai";
import { RiOpenSourceLine } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";

export default function ContactMe() {
  return (
    // <div className="max-w-lg w-full text-center m-auto pt-36 pb-10" id="contactme">
    //   <h1 className="text-4xl">Interested in working together?</h1>
    //   <a href="mailto:me.shivansh007@gmail.com">
    //     <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
    //       <div className="flex flex-row items-center">
    //         <span className="mr-3 ">Get in touch</span>
    //         <FaArrowRight color="white" />
    //       </div>
    //     </span>
    //   </a>
    // </div>
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
      </div>
      <div class="flex flex-wrap -m-4">

        <div class="flex flex-wrap justify-center pt-2 relative md:w-1/3">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden   hover:bg-gray-200 shadow-2xl  rounded-xl sm:w-52 curson-pointer">
          <a href="">
            <AiOutlineFundProjectionScreen
              color="#2196f3"
              className="mx-auto text-4xl"
            />
            <p className="mt-6 text-xl font-semibold text-center">
              Personal Portfolio
            </p>
          </a>
        </div>
        </div>
        <div class="flex flex-wrap justify-center pt-2 relative md:w-1/3">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden   hover:bg-gray-200 shadow-2xl  rounded-xl sm:w-52 curson-pointer">
          <a href="">
            <AiOutlineFundProjectionScreen
              color="#2196f3"
              className="mx-auto text-4xl"
            />
            <p className="mt-6 text-xl font-semibold text-center">
              Personal Portfolio
            </p>
          </a>
        </div>
        </div>
        <div class="flex flex-wrap justify-center pt-2 relative md:w-1/3">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden   hover:bg-gray-200 shadow-2xl  rounded-xl sm:w-52 curson-pointer">
          <a href="">
            <AiOutlineFundProjectionScreen
              color="#2196f3"
              className="mx-auto text-4xl"
            />
            <p className="mt-6 text-xl font-semibold text-center">
              Personal Portfolio
            </p>
          </a>
        </div>
        </div>
      </div>
    </div>
  </section>
  );
}