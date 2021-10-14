import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import {
  getUser,
  getActiveStudents,
  fetchCampaign,
} from "../adapters/MoralisAdapter";
import { getCampaign } from "../adapters/contracts";
import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import { fromWei } from "../utils/utils";
import VerificationModal from "../components/verificationModal";

const CollegeDashboard = () => {
  const [students, setStudents] = useState([]);
  const [numReceived, setNumReceived] = useState(0);
  const [numDisbursed, setNumDisbursed] = useState(0);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [studentIdx, setStudentIdx] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.loading.loading);
  const profile = useSelector((state) => state.profile.publicView);
  const { setProfile, setLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const campaignContract = useSelector(
    (state) => state.contract.campaignContract
  );
  useEffect(() => {
    if (!profile) {
      setLoading(true);
      getUser().then((user) => {
        console.log(user);
        setProfile(user);
        console.log(`gettting active students`);
      });
    }
    getActiveStudents().then((activeStudents) => {
      console.log(activeStudents);
      let studentArray = [];
      let receivedCount = 0;
      let disbursedCount = 0;
      activeStudents.map((activeStudent) => {
        let activeStudentObj = {
          amount: 0,
          receivedAmount: 0,
          name: "",
          ethAddress: "",
          major: "",
          degree: "",
          studentId: "",
          email: "",
        };
        console.log(`getting campaign for ${activeStudent.get("ethAddress")}`);
        activeStudentObj.name = `${activeStudent.get(
          "first_name"
        )} ${activeStudent.get("last_name")}`;
        activeStudentObj.ethAddress = activeStudent.get("ethAddress");
        getCampaign(campaignContract, activeStudent.get("ethAddress"))
          .then((res) => {
            console.log(parseInt(fromWei(res.balance)));
            console.log(parseInt(fromWei(res.installmentAmount)));

            activeStudentObj.amount = parseInt(fromWei(res.installmentAmount));
            activeStudentObj.receivedAmount = parseInt(
              fromWei(res.received - res.balance)
            );
            fetchCampaign(res.info).then((res2) => {
              console.log(`res2: ${JSON.stringify(res2)}`);
              activeStudentObj.major = res2.major;
              activeStudentObj.degree = res2.degree;
              activeStudentObj.studentId = res2.studentId;
              activeStudentObj.email = res2.email;
            });

            if (activeStudentObj.amount > 0) {
              disbursedCount = disbursedCount + 1;
            }
            if (activeStudentObj.receivedAmount > 0) {
              receivedCount = receivedCount + 1;
            }

            studentArray.push(activeStudentObj);
          })
          .finally((a) => {
            setStudents(studentArray);
            setNumDisbursed(disbursedCount);
            setNumReceived(receivedCount);
          });
      });
    });
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
            Pending Approvals - {`${numDisbursed}`}
          </div>
          <div className="h-56">
            <div className="border-1 shadow-lg min-h-full">
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
              {students.map((student, idx) => {
                if (student.amount > 0) {
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
                            onClick={() => {
                              setStudentIdx(idx);
                              setShowVerificationModal(true);
                            }}
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              {numDisbursed === 0 && (
                <div className="mt-16 text-center text-grey-500 opacity-20 font-semibold text-2xl">
                  No Disbursements Pending
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-3/5">
          <div className="font-bold text-black text-lg mb-4">
            Received funds
          </div>
          <div className="h-56">
            <div className="border-1 shadow-lg  min-h-full">
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
              {students.map((student) => {
                if (student.receivedAmount > 0) {
                  return (
                    <div className="flex flex-row h-12 items-center  border-b-1">
                      <div class="w-1/2">
                        <div className="flex flex-col items-start justify-center ml-2">
                          {student.name}
                        </div>
                      </div>
                      <div class="w-1/4">
                        <div className="flex flex-col items-start justify-center">
                          {`$${student.receivedAmount}`}
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
                }
              })}
              {numReceived === 0 && (
                <div className="mt-16 text-center text-grey-500 opacity-20 font-semibold text-2xl">
                  No received funds yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <VerificationModal
        setShowVerificationModal={setShowVerificationModal}
        showVerificationModal={showVerificationModal}
        students={students}
        setStudents={setStudents}
        studentIdx={studentIdx}
      />
    </div>
  );
};

export default CollegeDashboard;
