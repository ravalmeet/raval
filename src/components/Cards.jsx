import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { GiTeleport } from "react-icons/gi";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";

function Cards() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform   rounded-full  cursor-pointer  ">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-gray-800 text-gray-200 rounded-sm">
              <div className="flex mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 ml-10 pt-5 mr-2 rounded-full lg:pt-0  lg:mb-0 lg:ml-0">
                  <GiTeleport className="w-8 h-8  " />
                </div>
                <h6 className="font-bold text-3xl leading-5 ml-5 pt-5 lg:pt-0">
                  Portfolio
                </h6>
              </div>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform   rounded-full  cursor-pointer  ">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-gray-800 text-gray-200 rounded-sm">
              <div className="flex mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 ml-10 pt-5 mr-2 rounded-full lg:pt-0  lg:mb-0 lg:ml-0">
                <AiOutlineFundProjectionScreen className="w-8 h-8 " />
                </div>
                <h6 className="font-bold text-3xl leading-5 ml-5 pt-5 lg:pt-0">
                My Projects
                </h6>
              </div>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform   rounded-full  cursor-pointer  ">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-gray-800 text-gray-200 rounded-sm">
              <div className="flex mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 ml-10 pt-5 mr-2 rounded-full lg:pt-0  lg:mb-0 lg:ml-0">
                <BsFillPersonLinesFill className="w-8 h-8" />
                </div>
                <h6 className="font-bold text-3xl leading-5 ml-5 pt-5 lg:pt-0">
                Contact Me
                </h6>
              </div>
            </div>
          </div>
       
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
