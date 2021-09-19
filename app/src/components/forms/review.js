import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Review = () => {
    const educationLevel = useSelector((state) => state.profile.educationLevel);
    return (
    <div>
        <div className="flex flex-row text-left text-bold text-3xl ">
            Review
        </div>
        <div className="flex flex-row mt-12">
            <div className="flex flex-col w-1/4 mr-8">
                <input
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm">First name</div>
            </div>
            <div className="flex flex-col w-1/4 ml-8">                        
                <input
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm ">Last name</div>
            </div>

        </div>
        <div className="flex flex-row mt-12">
            <div className="flex flex-col w-7/12 mr-8">
                <input
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm">Address 1</div>
            </div>

        </div>
        <div className="flex flex-row mt-12">
            <div className="flex flex-col w-1/4 mr-8">
                <input
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm">City</div>
            </div>
            <div className="flex flex-col w-1/4 mr-8">
                <input
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm">State</div>
            </div>
        </div>
        <div className="flex flex-row mt-12">
            <div className="flex flex-col w-1/4 mr-8">
                <input
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm">Postal Code</div>
            </div>
            <div className="flex flex-col w-1/4 mr-8">
                <input
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm">Country</div>
            </div>
        </div>
        <div className="flex flex-row mt-12">
            <div className="flex flex-col w-1/4 mr-8">
                <input
                    value={educationLevel}
                    autoFocus
                    className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                ></input>
                <div className="flex flex-row text-sm">Highest level of education</div>
            </div>
        </div>
    </div>
    
    )
};

export default Review;