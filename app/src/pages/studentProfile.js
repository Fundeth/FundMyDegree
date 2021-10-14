import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import Profile from "../components/profile";
import { useSelector, useDispatch } from "react-redux";
import { setCampaign } from "../store/actionCreators";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { fromWei } from "../utils/utils";
import { fetchCampaign, getUserProfile } from "../adapters/MoralisAdapter";
import DisburseModal from "../components/disburseModal";
import DonateModal from "../components/donateModal";
import { initContracts } from "../adapters/contracts";

const StudentProfile = () => {
  const history = useHistory();
  const location = useLocation();
  const [profilePublicView, setProfilePublicView] = useState(null);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showDisburseModal, setShowDisburseModal] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const campaignContract = useSelector(
    (state) => state.contract.campaignContract
  );
  const profile = useSelector((state) => state.profile.publicView);
  const { setCampaignContract } = bindActionCreators(actionCreators, dispatch);

  const [target, setTarget] = useState(0);
  const [received, setReceived] = useState(0);
  const [school, setSchool] = useState({});
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [oneLiner, setOneLiner] = useState("");

  useEffect(() => {
    getUserProfile(location.pathname.split("/")[2]).then((user) => {
      console.log(user);
      setProfilePublicView(user);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(campaignContract).length !== 0) {
      campaignContract
        .getCampaign(location.pathname.split("/")[2])
        .then((res) => {
          console.log(`res from contract ${JSON.stringify(res)}`);
          console.log(`received ${parseInt(res.received)}`);

          setTarget(parseInt(fromWei(res.target)));
          setReceived(parseInt(fromWei(res.received)));

          fetchCampaign(res.info).then((res2) => {
            console.log(`res2: ${JSON.stringify(res2)}`);
            setSchool(res2.school);
            setMajor(res2.major);
            setDescription(res2.description);
            setDegree(res2.degree);
            setYear(res2.year);
            setOneLiner(res2.oneLiner);
          });
        });
    } else {
      initContracts().then((res) => {
        console.log(res);
        res.campaignContract
          .getCampaign(location.pathname.split("/")[2])
          .then((res) => {
            console.log(`res from contract ${JSON.stringify(res)}`);
            console.log(`received ${parseInt(res.received)}`);

            setTarget(parseInt(fromWei(res.target)));
            setReceived(parseInt(fromWei(res.received)));

            fetchCampaign(res.info).then((res2) => {
              console.log(`res2: ${JSON.stringify(res2)}`);
              setSchool(res2.school);
              setMajor(res2.major);
              setDescription(res2.description);
              setDegree(res2.degree);
              setYear(res2.year);
              setOneLiner(res2.oneLiner);
            });
          });
      });
    }
  }, []);

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row ml-16 mr-16 mt-12">
        <div className="w-3/5">
          <Profile
            profilePublicView={profilePublicView}
            description={description}
            school={school}
            major={major}
            oneLiner={oneLiner}
            degree={degree}
            year={year}
            setShowDisburseModal={setShowDisburseModal}
            setShowDonateModal={setShowDonateModal}
          />
        </div>
        <div className="w-2/5  ">
          {profile?.get("ethAddress") === location.pathname.split("/")[2] && (
            <div className="flex flex-row items-center justify-center">
              <button
                className="w-24 bg-white text-green-600 text-xs rounded-full py-1 px-1 border-1 border-green-600"
                onClick={() => {
                  history.push("/editProfile");
                }}
              >
                Edit Profile
              </button>
            </div>
          )}
          <div className="h-1/4 mt-32 mr-16 ml-16 border-1 shadow-xl sticky">
            <div className="flex flex-col text-center h-1/6"></div>

            <div className="flex flex-col text-center h-2/6">
              <div className="text-xl mb-2 h-3/6">
                <span className="font-semibold">{`$${received} raised`}</span>
                {` of $${target}`}
              </div>
              <div className="relative w-3/4 justify-center ml-12 mr-12">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                  <div
                    style={{ width: `${(received * 100) / target}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
              <div className="text-sm mb-2 h-1/6">
                <span className="">{`10 people donated to this campaign`}</span>
              </div>
              <div className=""></div>
            </div>
            <div className="flex flex-col text-center items-center justify-end h-2/6">
              {profile?.get("ethAddress") !==
                location.pathname.split("/")[2] && (
                <button
                  className="w-48 bg-green-600 text-white rounded-full py-3 px-3 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  onClick={() => setShowDonateModal(true)}
                >
                  Donate
                </button>
              )}
              {profile?.get("ethAddress") ===
                location.pathname.split("/")[2] && (
                <button
                  className="w-48 bg-green-600 text-white rounded-full py-3 px-3 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  onClick={() => setShowDisburseModal(true)}
                >
                  Disburse
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <DisburseModal
        showDisburseModal={showDisburseModal}
        setShowDisburseModal={setShowDisburseModal}
        student={location.pathname.split("/")[2]}
      />
      <DonateModal
        showDonateModal={showDonateModal}
        setShowDonateModal={setShowDonateModal}
        student={location.pathname.split("/")[2]}
        received={received}
        setReceived={setReceived}
      />
    </div>
  );
};

export default StudentProfile;
