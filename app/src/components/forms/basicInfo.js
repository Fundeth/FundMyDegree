import React, { useEffect, useState } from "react";

const BasicInfo = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        Basic Info
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">First name</div>
          <input
            value={props.firstName}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => {
              props.setFirstName(evt.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Last name</div>
          <input
            value={props.lastName}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => {
              props.setLastName(evt.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Email</div>

          <input
            value={props.email}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
            onChange={(evt) => {
              props.setEmail(evt.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
