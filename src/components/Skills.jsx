import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

function Skills() {
  return (
    <div>
      <section className="text-gray-600 select-none body-font" id="skills">
      
        <div className="container w-full lg:w-[70vw] px-5 py-24 mx-auto">
        <h1 className="text-3xl flex font-bold mb-8  text-white ml-4 ">
            <p className="text-[#56DABE] font-Roboto">02.&nbsp; </p> Skills
            &nbsp;
            <hr class="ml-4 w-20 h-1 bg-gray-100 rounded border-0 mt-4 dark:bg-gray-700 lg:w-48" />
          </h1>

          <div className="flex flex-wrap justify-center  -m-4">
            <div className="p-4 lg:w-1/3">
              <div className=" bg-opacity-75 px-6 pt-16 pb-12 rounded-lg overflow-hidden h-full bg-[#07111f] ">
                <div className="   text-center relative">
                  <h2 className="tracking-widest text-md title-font font-bold font-Roboto text-[#56DABE] mb-1">
                  &nbsp;&nbsp;&nbsp;&nbsp;WEB  TECHNOLOGIES&nbsp;&nbsp;&nbsp;&nbsp;
                  </h2>
                </div>
                <div className="flex flex-col  mt-10 justify-start">
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    HTML , CSS3 , JavaScript
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    React , ExpressJs , NextJS
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    NodeJs , MongoDB
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Django , Flask , Firebase
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    EtherJS , Solidity , Solona
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Rust , HardHat , TypeScript
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className=" bg-opacity-75 px-6 pt-16 pb-12 rounded-lg overflow-hidden h-full bg-[#07111f] ">
                <div className="   text-center relative">
                  <h2 className="tracking-widest text-md title-font font-bold font-Roboto text-[#56DABE] mb-1">
                  &nbsp;&nbsp;MOBILE TECHNOLOGIES &nbsp;&nbsp;
                  </h2>
                </div>
                <div className="flex flex-col  mt-10 justify-start">
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    React Native , NodeJs
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Flutter , Firebase
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Kotlin , AWS
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Java , Android Studio
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className=" bg-opacity-75 px-6 pt-16 pb-12 rounded-lg overflow-hidden h-full bg-[#07111f] ">
                <div className="   text-center relative">
                  <h2 className="tracking-widest text-md title-font font-bold font-Roboto text-[#56DABE] mb-1">
                  &nbsp;&nbsp;MACHINE LEARNING &nbsp;&nbsp; &nbsp;&nbsp;
                  </h2>
                </div>
                <div className="flex flex-col  mt-10 justify-start">
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Python , Numpy , Pandas
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Scikit-Learn , Matplotlib
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Tensorflow , Keras
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    OpenCV , PyTorch
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    NLTK , Spacy
                  </p>
                  <p className="leading-relaxed mb-3 font-bold text-gray-300">
                    <IoArrowRedoSharp className="inline-block text-gray-500 text-sm" />&nbsp;
                    Excel , PowerBI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
