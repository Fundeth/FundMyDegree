import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Portfolio = (props) => {
  const dispatch = useDispatch();
  const { updateWebsite, updateLinkedIn, updatePortfolio } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const profile = useSelector((state) => state.profile);

  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        Show us your best work
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Website</div>
          <input
            value={props.website}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => {
              props.setWebsite(evt.target.value);
            }}
          ></input>
          <div className="ml-2 mt-8 flex flex-row text-sm">LinkedIn</div>
          <input
            value={props.linkedIn}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => {
              props.setLinkedIn(evt.target.value);
            }}
          ></input>
          <div className="ml-2 mt-8 flex flex-row text-sm">
            Link to Portfolio
          </div>
          <input
            value={props.portfolio}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => {
              props.setPortfolio(evt.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
