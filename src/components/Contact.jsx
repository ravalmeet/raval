import React from "react";

function Contact() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="contact">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <p className="font-Roboto text-[#56DABE] font-semibold">
              4. What’s Next?
            </p>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <p className="max-w-lg mb-6 mt-4  text-5xl font-Poppins font-bold leading-none tracking-tight text-gray-200 sm:text-5xl md:mx-auto">
                Get In Touch
              </p>
              <p className="font-extrabold text-gray-500">
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
            </div>
            <div>
              <a target="_blank"  href="mailto:ravalmeett@gmail.com">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-8 py-2.5 transition-all ease-in duration-75 bg-[#0A192F]  rounded-md group-hover:bg-opacity-0">
                  Say Hello
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
