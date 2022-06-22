import React from "react";

import { FaBlogger } from "react-icons/fa";
import { AiOutlineFundProjectionScreen,AiOutlineContacts, AiFillYoutube } from "react-icons/ai";
import { RiOpenSourceLine } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";

function Skills() {
  return (
    
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-xl text-black  md:text-4xl font-bold text-center pt-4">
      Hey👋 What you Want to See ??
      </p>

      <div className="flex flex-wrap justify-center pt-2 relative">

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden   hover:bg-gray-200 shadow-2xl  rounded-xl sm:w-52 curson-pointer">
          <a href="https://portfolio-main-iota.vercel.app/">
            <AiOutlineFundProjectionScreen
              color="#2196f3"
              className="mx-auto text-4xl"
            />
            <p className="mt-6 text-xl font-semibold text-center">
              Personal Portfolio
            </p>
          </a>
        </div>

        {/* <div className="flex flex-col w-40  p-10 m-6 overflow-hidden hover:bg-gray-200 bg-white shadow-2xl rounded-xl sm:w-52">
          <a href="">
            <RiOpenSourceLine color="#2196f3" className="mx-auto text-4xl " />
            <p className="mt-6 text-xl font-semibold text-center">
              Open-Source Contribution
            </p>
          </a>
        </div> */}
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden hover:bg-gray-200 bg-white shadow-2xl rounded-xl sm:w-52">
          <a href="">
            <AiFillYoutube color="red" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
              Youtube Channel
            </p>
          </a>
        </div>
        {/* <div className="flex flex-col w-40  p-10 m-6 overflow-hidden hover:bg-gray-200 bg-white shadow-2xl rounded-xl sm:w-52">
          <a href="">
            <GiAchievement color="#00C0A3" className="mx-auto text-4xl" />
            <p className="mt-6 text-base font-semibold text-center">
              Achievements Experience
            </p>
          </a>
        </div> */}

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden hover:bg-gray-200 bg-white shadow-2xl rounded-xl sm:w-52">
          <a href="">
            <FaBlogger color="orange" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
              Contact Details
            </p>
          </a>
        </div>
        {/* <div className="flex flex-col w-40  p-10 m-6 overflow-hidden hover:bg-gray-200 bg-white shadow-2xl rounded-xl sm:w-52">
          <a href="">
            <AiOutlineContacts color="black" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
              Contact Details
            </p>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
