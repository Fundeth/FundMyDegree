import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { getUser } from "../adapters/MoralisAdapter";
import { Link, useLocation, useParams, useHistory } from "react-router-dom";

const CollegeDashboard = () => {
  const [students, setStudents] = useState([
    { name: "Aditya Chakraborty", amount: 2000 },
    { name: "Shimona Lahiri", amount: 5000 },
    { name: "Shahana Lahiri", amount: 1200 },
  ]);
  const [receivedAmounts, setReceivedAmounts] = useState([
    { name: "Aditya Chakraborty", amount: 3000 },
    { name: "Shimona Lahiri", amount: 0 },
    { name: "Shahana Lahiri", amount: 5000 },
  ]);
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.loading.loading);
  const profile = useSelector((state) => state.profile.publicView);
  const { setProfile, setLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    if (!loading) {
      if (!profile) {
        setLoading(true);
        getUser().then((user) => {
          console.log(user);
          setProfile(user);
          setLoading(false);
        });
      }
    }
  }, []);
  return (
    <div className="flex flex-col w-screen  ml-16">
      <div className="flex flex-row items-center mb-8 mt-12">
        <div className="font-bold text-green-600 text-xl mr-16 ">
          {profile?.get("first_name")}'s Dashboard
        </div>
        <div className="flex flex-row ">
          <button
            className="w-24 bg-white text-green-600 text-xs rounded-full py-1 px-1 border-1 border-green-600"
            onClick={() => {
              history.push("/editSchoolProfile");
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="flex flex-col w-3/5">
          <div className="font-bold text-black text-lg mb-4">
            Pending Approvals - {`${students.length}`}
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
      <div className="flex flex-row mt-16">
        <div className="flex flex-col w-3/5">
          <div className="font-bold text-black text-lg mb-4">
            Received funds
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
                  Received Amount
                </div>
              </div>
            </div>
            {receivedAmounts.map((receivedAmount) => {
              return (
                <div className="flex flex-row h-12 items-center  border-b-1">
                  <div class="w-1/2">
                    <div className="flex flex-col items-start justify-center ml-2">
                      {receivedAmount.name}
                    </div>
                  </div>
                  <div class="w-1/4">
                    <div className="flex flex-col items-start justify-center">
                      {`$${receivedAmount.amount}`}
                    </div>
                  </div>
                  <div class="w-1/4">
                    <div className="flex flex-col items-center justify-center">
                      <button
                        class="w-24 bg-green-600 text-white rounded-full py-1 px-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                        type="button"
                      >
                        Details
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
