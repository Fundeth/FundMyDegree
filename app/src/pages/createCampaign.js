import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import Target from "../components/forms/target";
import ReviewCampaign from "../components/forms/reviewCampaign";
import SchoolInfo from "../components/forms/schoolInfo";
import Paragraph from "../components/forms/paragraph";
import { createCampaign } from "../adapters/contracts";
import { useSelector } from "react-redux";

const CreateCampaign = () => {
  const [page, setPage] = useState(0);
  const campaignContract = useSelector(
    (state) => state.contract.campaignContract
  );
  const campaign = useSelector((state) => state.campaign);

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
            formType="Create Campaign"
            fieldGroups={["Target", "School Info", "Paragraph", "Review"]}
            page={page}
            setPage={setPage}
          />
        </div>

        <div className="flex flex-col mt-4 w-full ml-32 text-black">
          {page === 0 && <Target />}
          {page === 1 && <SchoolInfo />}
          {page === 2 && <Paragraph />}
          {page === 3 && <ReviewCampaign />}

          <div className="flex flex-row mt-16">
            <div className="flex flex-col w-1/3 justify-center">
              {page !== 0 && (
                <button
                  class="text-gray-800 transition duration-500 ease-in-out inline-flex outline-none"
                  type="button"
                  onClick={goPreviousPage}
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Previous</span>
                </button>
              )}
            </div>

            <div className="flex flex-col w-1/3 items-center">
              {page !== 3 && page !== 0 && (
                <button
                  class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={goNextPage}
                >
                  Next
                </button>
              )}

              {page !== 3 && page === 0 && (
                <button
                  class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={goNextPage}
                >
                  Next
                </button>
              )}

              {page === 3 && (
                <button
                  class="w-48 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={() => {
                    //createCampaign(campaignContract, , )
                  }}
                >
                  Create Campaign
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
