import React, { useEffect, useState } from "react";
import MD5 from "crypto-js/md5";
import { useMoralis } from "react-moralis";
import dp from "../../images/dp2.jpg";
import { uploadFile } from "../../adapters/MoralisAdapter";

const BasicInfo = (props) => {
  const { Moralis, user } = useMoralis();
  console.log(user);
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        Basic Info
      </div>
      <div class="mt-8 ">
        <div className="">
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={(evt) => {
              uploadFile(evt.target.files[0]).then((res) => {
                console.log(res);
                props.setProfilePicture(res.ipfs());
              });
            }}
          />
          <img
            src={props.profilePicture || dp}
            className="profile_avatar_crop inline-flex justify-center h-64 w-96 rounded-xl border-black border-1 cursor-pointer object-cover"
            alt="dp"
            id="img2"
            onClick={() => {
              document.getElementById("avatar").click();
            }}
          />
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">First name</div>
          <input
            value={props.firstName}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
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
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
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
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
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
