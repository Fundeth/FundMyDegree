import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Review = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">Review</div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">First name</div>
          <input
            value={props.firstName}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
          ></input>
        </div>

        <div className="flex flex-col w-1/4 ml-8">
          <div className="ml-2 flex flex-row text-sm">Last name</div>

          <input
            value={props.lastName}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
          ></input>
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">State</div>

          <input
            value={props.state}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
          ></input>
        </div>
        <div className="flex flex-col w-1/4 ml-8">
          <div className="ml-2 flex flex-row text-sm">Country</div>

          <input
            value={props.country}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
          ></input>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">
            Highest level of education
          </div>

          <input
            value={props.educationLevel}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
          ></input>
        </div>
        <div className="flex flex-col w-1/4 ml-8">
          <div className="ml-2 flex flex-row text-sm">Email</div>

          <input
            value={props.email}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Review;
