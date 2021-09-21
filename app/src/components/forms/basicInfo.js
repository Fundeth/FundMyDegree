import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const BasicInfo = () => {
    const dispatch = useDispatch();
    const { updateFirstName, updateLastName, updateEmail } = bindActionCreators(actionCreators, dispatch);
    const profile = useSelector((state) => state.profile);

    return (
        <div>
            <div className="flex flex-row text-left text-bold text-3xl ">
                What's your name?
            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/4 mr-8">
                    <input
                        value={profile.firstName}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateFirstName(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">First name</div>
                </div>
                <div className="flex flex-col w-1/4 ml-8">                        
                    <input
                        value={profile.lastName}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateLastName(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm ">Last name</div>
                </div>

            </div>

            <div className="flex flex-row text-left text-bold text-3xl mt-16">
                What's your email?
            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/4 mr-8">
                    <input
                        value={profile.email}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateEmail(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">Email</div>
                </div>
            </div>
        </div>
    
  )
};

export default BasicInfo;
