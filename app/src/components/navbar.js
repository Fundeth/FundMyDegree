import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo2 from "../images/logo2.png";

const Navbar = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <nav className={`${
      animated ? "" : "translate-y-10 opacity-0"
    } transform transition flex justify-between items-center h-16 text-black mx-auto px-4 sticky top-0 z-10 bg-white bg-clip-padding shadow-lg`}
    role="navigation">
      <div class="flex flex-shrink-0 text-black mr-6 pl-8 pr-8">
        <img src={logo2} className="h-12" />
      </div>
      <div className="px-4 cursor-pointer lg:hidden xl:hidden 2xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div class="md:hidden sm:hidden w-full block flex-grow lg:flex lg:w-auto items-center justify-end pr-8">
        <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-green-900 mr-4 ">
            I am a student
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-green-900 mr-4">
            I am an university
            </a>
        </div>
        <button class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-green-900 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Notification">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>        
        </button>
        <div>
          <a href="#" class="rounded-full py-3 px-6 inline-block text-sm bg-green-100 leading-none border text-black hover:border-green-900 hover:text-white hover:bg-green-800 mt-4 lg:mt-0 transform transition-colors ease-in-out duration-500 ">Connect Wallet</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
