import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Accreditation = () => {
    const dispatch = useDispatch();
    const { updateAccreditation } = bindActionCreators(actionCreators, dispatch);
    const profile = useSelector((state) => state.profile);

    return (
        <div>
            <div className="flex flex-row text-left text-bold text-3xl ">
                Tell us about your accreditation:
            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/2">
                    <div className="ml-2 flex flex-row text-sm">School Accreditation</div>

                    <input
                        value={profile.schoolAccreditation}
                        autoFocus                        
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => updateAccreditation(evt.target.value)}
                    ></input>
                </div>
            </div>       
        </div>
 
  )
};

export default Accreditation;
