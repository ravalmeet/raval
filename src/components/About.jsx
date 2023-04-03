import React from "react";

function About() {
  return (
    <div className="flex justify-center overflow-y-hidden" id="about">
      {/* <section class="text-gray-600   mt-64 flex-wrap max-w-[100vw] flex justify-center">
        <div className="title">
          <h1 className="text-3xl flex font-bold mb-4  text-white ml-4 ">
            <p className="text-[#56DABE] font-Roboto">01.&nbsp; </p> About Me
            &nbsp;
            <hr class="ml-4 w-32 h-1 bg-gray-100 rounded border-0 mt-4 dark:bg-gray-700 lg:w-48" />
          </h1>
          <p className="pt-4   max-w-[520px] text-md text-gray-500 font-medium text-center lg:text-left">
            Hello! My name is Meet Raval and I enjoy creating things that live on
            the internet. My interest in web development started back in 2020
            when I decided to start blogging — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS. Fast-forward to today, and I’ve complete a few projects and internships on web technologies where I sharpe my skills on React, Next.js, Tailwind CSS, and Node.js.
          </p>
          <p className="pt-6 max-w-[520px] text-md text-gray-500 font-medium text-center lg:text-left">
          I also working on Problem solving skills and participating on Coding Contest and Hackathon Fequently. Here is My Codechef , Leetcode and Codeforces Profiles.
          </p>
          <p className="pt-6  max-w-[520px] text-md text-gray-500 font-medium text-center lg:text-left">
          My main focus these days is exploring Data Science , Machine Learning and Deep Learning Technologies with Mobile Technologies. For more information, checkout my projects. 
          </p>
        </div>
        <div className="left">
          <img
            className=" mt-24 fill-gray-500 rounded-lg  lg:ml-24 "
            src="https://pbs.twimg.com/media/FepiZZdacAAoYML?format=jpg&name=small"
            alt=""
          />
        </div>

      </section> */}

      {/* <section class="text-gray-600 body-font w-[100vw] flex justify-center">
        <div class="container px-5 py-24 mx-auto flex flex-wrap max-w-[60vw] items-center">
          <h1 className="text-3xl flex font-bold mb-4  text-white ml-4 ">
            <p className="text-[#56DABE] font-Roboto">01.&nbsp; </p> About Me
            &nbsp;
            <hr class="ml-4 w-32 h-1 bg-gray-100 rounded border-0 mt-4 dark:bg-gray-700 lg:w-48" />
          </h1>
          <div class="lg:w-3/5 md:w-1/2 sm:w-full md:pr-16 lg:pr-0 pr-0">
            <p class=" lg:leading-relaxed mt-4">
              {" "}
              Hello! My name is Meet Raval and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2020 when I decided to start blogging — turns out hacking together
              a custom reblog button taught me a lot about HTML & CSS.
              Fast-forward to today, and I’ve complete a few projects and
              internships on web technologies where I sharpe my skills on React,
              Next.js, Tailwind CSS, and Node.js.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section> */}

<div className="pt-40 w-full   pb-20 md:pt-40 lg:w-[60vw]">
  <div className="container m-auto px-6 md:px-12 lg:px-6">
    <div className="lg:flex lg:items-center">
      <div className="space-y-8 lg:w-7/12">

          <h1 className="text-3xl flex font-bold mb-4  text-white ml-4 ">
            <p className="text-[#56DABE] font-Roboto">01.&nbsp; </p> About Me
            &nbsp;
            <hr class="ml-4 w-32 h-1 bg-gray-100 rounded border-0 mt-4 dark:bg-gray-700 lg:w-48" />
          </h1>
          <p className="  max-w-[520px] text-md text-gray-500 font-bold text-center lg:text-left">
            Hello! I am Meet Raval and I enjoy creating things that live on
            the internet. My interest in web development started back in 2020
            when I decided to start blogging — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS. Fast-forward to today, and I’ve complete a few projects and internships on web technologies where I sharpe my skills on React, Next.js, Tailwind CSS, and Node.js.
          </p>
          <p className="max-w-[520px] text-md text-gray-500 font-bold text-center lg:text-left">
          I also working on Problem solving skills and participating on Coding Contest and Hackathon Fequently. Here is My Codechef , Leetcode and Codeforces Profiles.
          </p>
          <p className="  max-w-[520px] text-md text-gray-500 font-bold text-center lg:text-left">
          My main focus these days is exploring Data Science , Machine Learning and Deep Learning Technologies with Mobile Technologies. For more information, checkout my projects. 
          </p>



      </div>
      <div hidden="" className="lg:block lg:w-5/12 pt-10 flex justify-center items-center">
        <img
          src="https://pbs.twimg.com/media/FepiZZdacAAoYML?format=jpg&name=small"
          className="w-[70%] m-4  "
          alt="wath illustration"
          loading="lazy"
          width={320}
          height={280}
        />
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default About;
