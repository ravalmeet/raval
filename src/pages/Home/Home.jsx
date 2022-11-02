import React from "react";
import About from "../../components/About";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";

import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Skills from "../../components/Skills";
import Work from "../../components/Work";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="  bg-[#0A192F] overflow-y-hidden">
      <Header />

      <HeroSection />

      <About/>

      <Skills color="pink" />

      <Work />

      <Projects/>

      <Contact/>

      <Footer className="pb-4"/>

      {/* <div
        className="flex flex-col fixed invisible lg:visible 
        inset-x-0
        bottom-0
        p-4 "
      >
        <FiGithub className="text-white text-2xl font-bold my-4 mx-4 hover:-translate-y-2 duration-200 cursor-pointer hover:text-[#56DABE]" />
        <FiInstagram className="text-white text-2xl font-bold my-4 mx-4 hover:-translate-y-2 duration-200 cursor-pointer hover:text-[#56DABE]" />
        <FiTwitter className="text-white text-2xl font-bold my-4 mx-4 hover:-translate-y-2 duration-200 cursor-pointer hover:text-[#56DABE]" />
        <FiLinkedin className="text-white text-2xl font-bold my-4 mx-4 hover:-translate-y-2 duration-200 cursor-pointer hover:text-[#56DABE]" />
        <hr class="ml-6 w-1 h-20  text-white  rounded border-0 mt-4 dark:bg-gray-700" />
      </div>

      <div
        className="flex flex-col fixed invisible lg:visible 
       
        bottom-0
        right-0
        p-4 "
      >
        <AiOutlineMail className="text-white text-2xl font-bold my-4 mx-4 hover:-translate-y-2 duration-200 cursor-pointer hover:text-[#56DABE]" />
        <hr class="ml-6 mr-4 w-1 h-20  text-white  rounded border-0 mt-4 dark:bg-gray-700" />
      </div> */}
    </div>
  );
}

export default Home;
