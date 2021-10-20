import React from "react";

const Footer = () => {
  return (
    <div className="h-24 flex flex-row w-full text-black border-t-2  bg-greyfmd shadow-lg">
      <div className="w-3/4"></div>
      <div className="w-1/4 flex flex-row">
        <div class="flex flex-wrap mx-2 w-1/2 transform transition duration-500 ease-linear hover:scale-105 content-center">
          <a href="https://spect.gitbook.io/spect-docs/" target="_blank">
            Documentation
          </a>
        </div>
        <div className="flex flex-wrap mx-2 w-1/2 transform transition duration-500 ease-linear hover:scale-105 content-center">
          <a href="https://discord.gg/vXT9QNM9pS" target="_blank">
            Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
