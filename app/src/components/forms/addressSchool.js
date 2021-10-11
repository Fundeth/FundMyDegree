import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const AddressSchool = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        What's your address?
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/2">
          <div className="ml-2 flex flex-row text-sm">Address 1</div>

          <input
            value={props.address1}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => props.setAddress1(evt.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/2">
          <div className="ml-2 flex flex-row text-sm">Address 2</div>

          <input
            value={props.address2}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => props.setAddress2(evt.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">City</div>
          <input
            value={props.city}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => props.setCity(evt.target.value)}
          ></input>
        </div>
        <div className="flex flex-col w-1/4 ml-8">
          <div className="ml-2 flex flex-row text-sm">State</div>
          <input
            value={props.state}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => props.setState(evt.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Postal Code</div>
          <input
            value={props.postalCode}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => props.setPostalCode(evt.target.value)}
          ></input>
        </div>
        <div className="flex flex-col w-1/4 ml-8">
          <div className="ml-2 flex flex-row text-sm">Country</div>
          <input
            value={props.country}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => props.setCountry(evt.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AddressSchool;
