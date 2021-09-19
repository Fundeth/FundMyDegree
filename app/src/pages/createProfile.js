import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import Name from "../components/forms/basicInfo";
import Review from "../components/forms/review";
import Address from "../components/forms/address";
import Education from "../components/forms/education";

const CreateProfile = () => {
  const [animated, setAnimated] = useState(false);
  const [page, setPage] = useState(0);

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
                <SideNav/>
            </div>

            <div className="flex flex-col mt-12 w-full ml-32 text-black">
                {page === 0 && <Name />}
                {page === 1 && <Address />}
                {page === 2 && <Education />}
                {page === 3 && <Review />}

                <div className="flex-row mt-16 ml-96 pl-16">
                <button 
                    class="w-32 border-2 border-red-600 text-red-600 rounded-full py-3 px-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    type="button"
                    onClick={goPreviousPage}
                >
                    Previous
                </button>
                <button 
                    class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    type="button"
                    onClick={goNextPage}
                >
                    Next
                </button>

                </div>
            </div>
        </div>
    </div>

 
  )
};

export default CreateProfile;
