import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Education = () => {
  const dispatch = useDispatch();
  const { updateEducationLevel } = bindActionCreators(actionCreators, dispatch);
  const profile = useSelector((state) => state.profile);

  return (
  <div>
    <div className="flex flex-row text-left text-bold text-3xl ">
          Tell us about your education
    </div>
    <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/4 mr-8">
            <input
                value={profile.educationLevel}
                autoFocus
                className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                onChange={(evt) => updateEducationLevel(evt.target.value)}
            ></input>
            <div className="flex flex-row text-sm">Highest level of education</div>
        </div>
    </div>
  </div>
 
  )
};

export default Education;
