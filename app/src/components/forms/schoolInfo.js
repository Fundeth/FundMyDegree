import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const SchoolInfo = () => {
  const dispatch = useDispatch();
  const { updateStudentId, updateSchoolName, updateMajor, updateSchoolEmail } = bindActionCreators(actionCreators, dispatch);
  const campaign = useSelector((state) => state.campaign);

  return (
    <div>
    <div className="flex flex-row text-left text-bold text-3xl ">
        Which school are you going to?
    </div>
    <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/2 mr-8">
        <div className="ml-2 flex flex-row text-sm">School Name</div>

            <input
                value={campaign.schoolName}
                autoFocus
                className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                onChange={(evt) => updateSchoolName(evt.target.value)}
            ></input>
        </div>
    </div>

    <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
        <div className="ml-2 flex flex-row text-sm">Major</div>

            <input
                value={campaign.major}
                autoFocus
                className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                onChange={(evt) => updateMajor(evt.target.value)}
            ></input>
        </div>
    </div>

    <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
        <div className="flex flex-row text-sm">School email</div>

            <input
                value={campaign.schoolEmail}
                autoFocus
                className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                onChange={(evt) => updateSchoolEmail(evt.target.value)}
            ></input>
        </div>
        <div className="flex flex-col w-1/4 mr-8">
        <div className="ml-2 flex flex-row text-sm">Student Id</div>

            <input
                value={campaign.studentId}
                autoFocus
                className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                onChange={(evt) => updateStudentId(evt.target.value)}
            ></input>
        </div>
    </div>

</div>
 
  )
};

export default SchoolInfo;
