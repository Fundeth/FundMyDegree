import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { updateWebsite, updateLinkedIn, updatePortfolio } = bindActionCreators(actionCreators, dispatch);
  const profile = useSelector((state) => state.profile);

  return (
  <div>
    <div className="flex flex-row text-left text-bold text-3xl ">
          Show us your best work
    </div>
    <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/4 mr-8">
            <input
                value={profile.website}
                autoFocus
                className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                onChange={(evt) => updateWebsite(evt.target.value)}
            ></input>
            <div className="flex flex-row text-sm">Website</div>
            <input
                value={profile.linkedIn}
                autoFocus
                className="mt-12 flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                onChange={(evt) => updateLinkedIn(evt.target.value)}
            ></input>
            <div className="flex flex-row text-sm">LinkedIn</div>
            <input
                value={profile.portfolio}
                autoFocus
                className="mt-12 flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                onChange={(evt) => updatePortfolio(evt.target.value)}
            ></input>
            <div className="flex flex-row text-sm">Link to Portfolio</div>
        </div>
    </div>
  </div>
 
  )
};

export default Portfolio;