import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Address = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        What's your address?
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4">
          <div className="ml-2 flex flex-row text-sm">State</div>
          <input
            value={props.state}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => {
              props.setState(evt.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4">
          <div className="ml-2 flex flex-row text-sm">Country</div>
          <input
            value={props.country}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => {
              props.setCountry(evt.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Address;
