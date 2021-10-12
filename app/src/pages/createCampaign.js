import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import Target from "../components/forms/target";
import ReviewCampaign from "../components/forms/reviewCampaign";
import SchoolInfo from "../components/forms/schoolInfo";
import Paragraph from "../components/forms/paragraph";
import { createCampaign, healthCheck } from "../adapters/contracts";
import {
  uploadCampaign,
  saveCampaign,
  getAllSchools,
  getUser,
} from "../adapters/MoralisAdapter";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

const CreateCampaign = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [schoolOptions, setSchoolOptions] = useState([]);
  const campaignContract = useSelector(
    (state) => state.contract.campaignContract
  );
  const profile = useSelector((state) => state.profile.publicView);
  const campaign = useSelector((state) => state.campaign);
  const [target, setTarget] = useState(campaign?.target);
  const [school, setSchool] = useState(campaign?.school);
  const [major, setMajor] = useState(campaign?.major);
  const [email, setEmail] = useState(campaign?.email);
  const [studentId, setStudentId] = useState(campaign?.studentId);
  const [oneLiner, setOneLiner] = useState(campaign?.oneLiner);
  const [description, setDescription] = useState(campaign?.description);
  const [degree, setDegree] = useState(campaign?.degree);
  const [year, setYear] = useState(campaign?.year);
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const { setLoading, setProfile } = bindActionCreators(
    actionCreators,
    dispatch
  );
  function goNextPage() {
    setPage((page) => page + 1);
  }
  function goPreviousPage() {
    setPage((page) => page - 1);
  }

  useEffect(() => {
    console.log("eieieieie");
    setLoading(true);
    let validSchools = [];
    if (!profile) {
      getUser().then((user) => {
        console.log(user);
        setProfile(user);
      });
    }
    getAllSchools().then((schools) => {
      console.log(schools);
      schools.map((school) => {
        validSchools.push({
          value: school.get("ethAddress"),
          label: school.get("first_name"),
        });
      });
      setSchoolOptions(validSchools);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
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
          {page === 0 && <Target target={target} setTarget={setTarget} />}
          {page === 1 && (
            <SchoolInfo
              schoolOptions={schoolOptions}
              school={school}
              setSchool={setSchool}
              major={major}
              setMajor={setMajor}
              degree={degree}
              setDegree={setDegree}
              year={year}
              setYear={setYear}
              email={email}
              setEmail={setEmail}
              studentId={studentId}
              setStudentId={setStudentId}
            />
          )}
          {page === 2 && (
            <Paragraph
              oneLiner={oneLiner}
              setOneLiner={setOneLiner}
              description={description}
              setDescription={setDescription}
            />
          )}
          {page === 3 && (
            <ReviewCampaign
              target={target}
              setTarget={setTarget}
              school={school}
              setSchool={setSchool}
              major={major}
              setMajor={setMajor}
              email={email}
              setEmail={setEmail}
              studentId={studentId}
              setStudentId={setStudentId}
              oneLiner={oneLiner}
              setOneLiner={setOneLiner}
              description={description}
              setDescription={setDescription}
            />
          )}

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
                    uploadCampaign({
                      id: Date.now() + Math.random(),
                      school: school,
                      major: major,
                      degree: degree,
                      year: year,
                      email: email,
                      studentId: studentId,
                      oneLiner: oneLiner,
                      description: description,
                    }).then((res) => {
                      console.log(res.hash());
                      console.log(school);
                      createCampaign(
                        campaignContract,
                        school.value, //ethAddress
                        Date.parse("2022-03-19T20:23:01.804Z"),
                        Date.parse("2022-03-19T20:23:01.804Z"),
                        target,
                        res.hash()
                      ).then((res2) => {
                        console.log(res2);
                        saveCampaign(
                          school,
                          major,
                          oneLiner,
                          degree,
                          target
                        ).then(
                          history.push({
                            pathname: `/studentProfile/${profile.get(
                              "ethAddress"
                            )}`,
                          })
                        );
                      });
                    });
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
