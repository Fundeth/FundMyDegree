import React, { useEffect, useState } from "react";

const CollegeDashboard = () => {
  const [students, setStudents] = useState([
    { name: "Aditya Chakraborty", amount: 2000 },
    { name: "Shimona Lahiri", amount: 5000 },
    { name: "Shahana Lahiri", amount: 1200 },
  ]);

  return (
    <div className="flex flex-col w-screen  ml-16">
      <div className="font-bold text-green-600 text-xl mb-8 mr-16 mt-12">
        College Dashboard
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col w-3/5">
          <div className="font-bold text-black text-lg mb-4">
            Pending Verifications - {`${students.length}`}
          </div>
          <div className="border-1 shadow-lg">
            <div className="flex flex-row mt-4 border-b-2">
              <div class="w-1/2">
                <div className="flex flex-col items-start justify-center ml-2 mb-4 font-semibold">
                  Student name
                </div>
              </div>
              <div class="w-1/2">
                <div className="flex flex-col items-start justify-center mb-4 font-semibold">
                  Disbursement Amount
                </div>
              </div>
            </div>
            {students.map((student) => {
              return (
                <div className="flex flex-row h-12 items-center  border-b-1">
                  <div class="w-1/2">
                    <div className="flex flex-col items-start justify-center ml-2">
                      {student.name}
                    </div>
                  </div>
                  <div class="w-1/4">
                    <div className="flex flex-col items-start justify-center">
                      {`$${student.amount}`}
                    </div>
                  </div>
                  <div class="w-1/4">
                    <div className="flex flex-col items-center justify-center">
                      <button
                        class="w-24 bg-green-600 text-white rounded-full py-1 px-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                        type="button"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDashboard;

/*{props.proposal.user[0].skills?.map((skill) => {
  return (
    <div className="">
      <span className="hidden lg:flex text-xs bg-blue-100 text-blue-500 flex flex-col justify-center px-2 py mr-2">
        {skill.value}
      </span>
    </div>
  );
})}*/
