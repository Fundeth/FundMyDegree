import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import Name from "../components/forms/basicInfo";
import Review from "../components/forms/review";
import Address from "../components/forms/address";
import Education from "../components/forms/education";
import Portfolio from "../components/forms/portfolio";
import { insertUserBasic } from "../adapters/MoralisAdapter";
import { useSelector, useDispatch } from "react-redux";

const CreateProfile = () => {
  const [page, setPage] = useState(0);
  const profile = useSelector((state) => state.profile);


  function goNextPage() {
    setPage((page) => page + 1);
  }
  function goPreviousPage() {
    setPage((page) => page - 1);
  }
  return (
    <div className="flex flex-col w-screen">
        <div className="flex flex-row ml-16 mr-16 mt-12">
            <div className="w-1/4"> 
                <SideNav 
                  formType="Create Profile"
                  fieldGroups = {["Basic Info", "Profile Picture", "Address", "Education", "Portfolio", "Review"]}
                  page={page}
                  setPage={setPage}
                />
            </div>

            <div className="flex flex-col mt-4 w-full ml-32 text-black">
                {page === 0 && <Name />}
                {page === 2 && <Address />}
                {page === 3 && <Education />}
                {page === 4 && <Portfolio />}
                {page === 5 && <Review />}

                <div className="flex flex-row mt-16">
                  <div className="flex flex-col w-1/3 justify-center">
                    {page !== 0 && (<button 
                        class="text-gray-800 transition duration-500 ease-in-out inline-flex outline-none"
                        type="button"
                        onClick={goPreviousPage}
                    >                   
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Previous</span>
                    </button>)}
                  </div>

                  <div className="flex flex-col w-1/3 items-center">               
                    {page !== 5 && page !== 0 && <button 
                      class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                      type="button"
                      onClick={goNextPage}
                  >
                      Next
                  </button>}

                  {page !== 5 && page === 0 && <button 
                      class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                      type="button"
                      onClick={goNextPage}
                  >
                      Next
                  </button>}

                  {page === 5 && <button 
                      class="w-48 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                      type="button" onClick={() => {
                        insertUserBasic(profile).then((res) => {
                          console.log(`res on creation ${res}`)
                        }).catch((err) => {
                          console.log(`error ${err}`)
                        })
                      }}
                  >   
                      Create Campaign
                  </button>}
                  </div>

 

                </div>
            </div>
        </div>
    </div>

 
  )
};

export default CreateProfile;
