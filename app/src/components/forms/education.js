import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Education = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        Tell us about your education
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">
            Highest level of education
          </div>

          <input
            value={props.educationLevel}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => {
              props.setEducationLevel(evt.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Education;
