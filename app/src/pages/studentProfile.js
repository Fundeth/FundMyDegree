import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Profile from "../components/profile";

const StudentProfile = () => {
  let { id } = useParams();

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row ml-16 mr-16 mt-12">
          <div className="w-3/5"> 
            <Profile 
              profileId={id}
            />
          </div>
          <div className="w-2/5  "> 
            <div className="h-1/4 mt-32 mr-16 ml-16 border-1 shadow-xl sticky">
              <div className="flex flex-col text-center h-1/6"></div>

                <div className="flex flex-col text-center h-2/6">
                  <div className="text-xl mb-2 h-3/6">
                    <span className="font-semibold">{`$10,000 raised`}</span>
                    {` of $25,000`}
                  </div>
                  <div className="relative w-3/4 justify-center ml-12 mr-12">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                      <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  </div>
                  <div className="text-sm mb-2 h-1/6">
                    <span className="">{`10 people donated to this campaign`}</span>
                  </div>
                  <div className="">
                  </div>
                </div>
                <div className="flex flex-col text-center items-center justify-end h-2/6">
                <button className="w-48 bg-green-600 text-white rounded-full py-3 px-3 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none">Donate</button>
                </div>
              </div>
            </div>  
      </div>
    </div>
  
  )
};

export default StudentProfile;
