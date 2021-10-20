import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import dp1 from "../images/dp1.jpg";

const ProfileCard = (props) => {
  const history = useHistory();
  return (
    <div>
      <div class="max-w-sm w-full">
        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="items-center mb-4">
            <img
              className="mr-4 h-56 w-96 items-center border-green-100 rounded-t-xl object-cover"
              src={props.campaign.get("cropped_pic")}
            ></img>
          </div>
          <div class="px-4">
            <div class="flex items-center">
              <div>
                <p class="font-bold text-gray-900 text-lg">
                  {props.campaign.get("first_name")}{" "}
                  {props.campaign.get("last_name")}
                </p>
              </div>
            </div>
          </div>
          <div class="bg-cover bg-center h-12 m-4 mt-2 mb-0 justify-center text-md">
            {props.campaign.get("oneLiner")}
          </div>

          <div class="flex flex-row">
            <div class="flex flex-col w-1/2 items-left m-4">
              <p class="uppercase tracking-wide text-sm font-bold text-gray-700">
                Target
              </p>
              <p class="text-2xl text-gray-900">
                ${props.campaign.get("target")}
              </p>
            </div>
            <div class="flex w-1/2 justify-center items-center">
              <button
                class="rounded-full h-12 w-32 bg-green-600 text-center text-white transform transition duration-500 ease-linear hover:scale-105 hover:cursor-pointer"
                onClick={() => {
                  history.push(
                    `studentProfile/${props.campaign.get("ethAddress")}`
                  );
                }}
              >
                View Profile
              </button>
            </div>
          </div>

          <div class="flex p-2 mt-2 border-t border-gray-300 text-gray-700">
            <div class="flex-1 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <p class="ml-2">
                {props.campaign.get("degree")} in {props.campaign.get("major")}
              </p>
            </div>
          </div>
          <div class="flex p-2 mb-2 text-gray-700">
            <div class="flex-1 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <p class="ml-2">{props.campaign.get("school").label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
