import React, { useEffect, useState } from "react";
import ProfileCard from "../components/profileCard";
import { customStyles, schoolOptions, majorOptions } from "../components/constants";
import Select from "react-select";

const ExploreCampaigns = () => {

  return (
  <div>
    <div className="flex bg-beige w-full h-72">
      <div className="flex flex-col w-1/2 items-end justify-center text-md tracking-wider">
        <div className="flex flex-row text-3xl font-bold mb text-right">
          College has never been 
        </div>
        <div className="flex flex-row text-3xl font-bold mb-4 text-right">
          <span className="mr-2">{`more`} </span>
          <span className="text-green-600">{`accessible`}</span>
        </div>
        <div className="flex flex-row text-md text-right mb-8">
          Fund the future of our world
        </div>
        <div className="flex flex-row">
          <button className="rounded-full mr-4 h-12 w-40 bg-green-600 text-center text-white transform transition duration-500 ease-linear hover:scale-105 hover:cursor-pointer">
            Donate now
          </button>
          <button className="rounded-full h-12 w-40 bg-green-600 text-center text-white transform transition duration-500 ease-linear hover:scale-105 hover:cursor-pointer">
            Create a campaign
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-row mt-16 ml-16 mr-16">
      <div className="flex items-center pl-4 w-3/5 text-2xl font-bold text-green-600">Active Campaigns</div>
      <span className="flex items-center mr-4">College: </span>
      <div className="w-1/5">
        <Select
            isMulti
            autoFocus
            options={schoolOptions}
            classNamePrefix="select"
            styles={customStyles}
            className="flex-1 p-1 border-b-1 border-blue-500"
          />
      </div>
      <span className="flex items-center mr-4 ml-8">Major: </span>
      <div className="w-1/5">
        <Select
          isMulti
          autoFocus
          options={majorOptions}
          classNamePrefix="select"
          styles={customStyles}
          className="flex-1 p-1 border-b-1 border-blue-500"
        />
      </div>

    </div>
    <div class="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-12 ml-16 lg:mb-24 justify-center items-center">

      <div>
        <ProfileCard/>
      </div>
      <div>
        <ProfileCard/>
      </div>

      <div>
        <ProfileCard/>
      </div>
    </div>
  </div>
 
  )
};

export default ExploreCampaigns;
