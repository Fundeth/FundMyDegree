import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import Profile from "../components/profile";
import { useSelector, useDispatch } from "react-redux";
import { setCampaign } from "../store/actionCreators";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { fromWei } from "../utils/utils";
import { fetchCampaign, getUser } from "../adapters/MoralisAdapter";

const StudentProfile = () => {
  let { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const campaignContract = useSelector(
    (state) => state.contract.campaignContract
  );
  const { setProfile } = bindActionCreators(actionCreators, dispatch);
  const profile = useSelector((state) => state.profile.publicView);

  const [localLoading, setLocalLoading] = useState(true);

  const [target, setTarget] = useState(0);
  const [received, setReceived] = useState(0);
  const [school, setSchool] = useState({});
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [oneLiner, setOneLiner] = useState("");

  useEffect(() => {
    if (!loading) {
      console.log(campaignContract);
      console.log(profile);
      setLocalLoading(true);
      if (!profile) {
        getUser().then((user) => {
          console.log(user);
          setProfile(user);
        });
      }
      campaignContract.getCampaign(profile?.get("campaign_id")).then((res) => {
        console.log(res);
        console.log(res.target);
        setTarget(parseInt(fromWei(res.target)));
        setReceived(parseInt(fromWei(res.received)));

        fetchCampaign(res.info).then((res2) => {
          console.log(res2);
          setSchool(res2.school.label);
          setMajor(res2.major);
          setDescription(res2.description);
          setDegree(res2.degree);
          setYear(res2.year);
          setOneLiner(res2.oneLiner);
        });
        setLocalLoading(false);
      });
    }
    console.log(location);
  }, []);

  if (loading || localLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row ml-16 mr-16 mt-12">
        <div className="w-3/5">
          <Profile
            profileId={id}
            description={description}
            school={school}
            major={major}
            oneLiner={oneLiner}
            degree={degree}
            year={year}
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
                    style={{ width: `${received / target}` }}
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
                <button className="w-48 bg-green-600 text-white rounded-full py-3 px-3 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none">
                  Donate
                </button>
              )}
              {profile?.get("ethAddress") ===
                location.pathname.split("/")[2] && (
                <button className="w-48 bg-green-600 text-white rounded-full py-3 px-3 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none">
                  Disburse
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
