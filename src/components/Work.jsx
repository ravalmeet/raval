import React from 'react'

function Work() {
  return (
    <div className='flex justify-center text-white font-Poppins ' id="work">
      <div class="mb-16 mt-44 w-full m-auto px-6  lg:w-[70vw]  ">

      <h1 className="text-3xl   flex font-bold mb-8  text-white ml-4 ">
            <p className="text-[#56DABE] font-Roboto">03.&nbsp; </p> Some Things I’ve Built
            &nbsp;
            <hr class="ml-4 w-20 h-1 bg-gray-100 rounded border-0 mt-4 dark:bg-gray-700 lg:w-48" />
          </h1>
        <div class="flex  p-3 rounded-2xl flex-col mb-16 sm:flex-row">
          <div class="flex  items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              class="rounded-lg"
              src="https://pbs.twimg.com/media/Ff6G4M0aMAEGJP_?format=jpg&name=large"
              alt=""
            />
          </div>
          <div
            class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
          >
            <p
              class="mb-2 text-sm font-Roboto font-bold tracking-widest text-center text-[#56DABE] uppercase sm:text-left"
            >
              Featured Project
            </p>
            <p class="font-bold sm:text-left md:text-4xl">
              Raval Theme
            </p>
            <p class="text text-gray-400 font-bold mt-2 md:text-left">
            A minimal, dark blue theme for VS Code. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </p>
            <p class="text-gray-400 font-semibold font-Roboto mt-2 md:text-left">
            VS Code Sublime Text Atom iTerm2 Hyper
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-16 sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
            <img
              class="rounded-lg"
              src="https://pbs.twimg.com/media/Ff6GNzcagAA9wZh?format=jpg&name=large"
              alt=""
            />
          </div>
          <div
            class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16"
          >
            <p
              class="mb-2 text-sm font-Roboto font-bold tracking-widest text-center text-[#56DABE] uppercase sm:text-left"
            >
              Featured Project
            </p>
            <p class="font-bold sm:text-left md:text-4xl">
              Raval Blogs
            </p>
            <p class="text text-gray-400 font-bold mt-2 md:text-left">
              This is my personal blog. I write about my journey as a developer, my projects, and my thoughts on tech. I also write about my life and my experiences. 
            </p>
            <p class="text-gray-400 font-semibold font-Roboto mt-2 md:text-left">
            NextJs TypeScript NodeJs StrapiCLI
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-16 sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              class="rounded-lg"
              src="https://pbs.twimg.com/media/FglFmmXacAAuKOF?format=jpg&name=large"
              alt=""
            />
          </div>
          <div
            class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
          >
            <p
              class="mb-2 text-sm font-Roboto font-bold tracking-widest text-center text-[#56DABE] uppercase sm:text-left"
            >
              Featured Project
            </p>
            <p class="font-bold sm:text-left md:text-4xl">
              Vehical Sharing Application
            </p>
            <p class="text text-gray-400 font-bold mt-2 md:text-left">
            This is a Mobile Application Based on Daily Vehicle Sharing System,This System Helps to Create a Dynamic Cluster Group for Those Employees who travel via same route. 

            </p>
            <p class="text-gray-400 font-semibold font-Roboto mt-2 md:text-left">
            React Native NodeJS MongoDB ExpressJS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work