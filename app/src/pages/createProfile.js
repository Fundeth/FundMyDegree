import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import BasicInfo from "../components/forms/basicInfo";
import Review from "../components/forms/review";
import Address from "../components/forms/address";
import Education from "../components/forms/education";
import Portfolio from "../components/forms/portfolio";
import { insertUserBasic } from "../adapters/MoralisAdapter";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const CreateProfile = () => {
  const [page, setPage] = useState(0);
  const loading = useSelector((state) => state.loading.loading);
  const history = useHistory();
  const profile = useSelector((state) => state.profile.publicView);
  const [firstName, setFirstName] = useState(profile?.get("first_name"));
  const [lastName, setLastName] = useState(profile?.get("last_name"));
  const [email, setEmail] = useState(profile?.get("email"));
  const [address1, setAddress1] = useState(profile?.get("address_line1"));
  const [address2, setAddress2] = useState(profile?.get("address_line2"));
  const [city, setCity] = useState(profile?.get("city"));
  const [state, setState] = useState(profile?.get("state"));
  const [country, setCountry] = useState(profile?.get("country"));
  const [postalCode, setPostalCode] = useState(profile?.get("zip_pin"));
  const [educationLevel, setEducationLevel] = useState(profile?.get("degree"));
  const [website, setWebsite] = useState(profile?.get("website"));
  const [linkedIn, setLinkedIn] = useState(profile?.get("linkedIn"));
  const [portfolio, setPortfolio] = useState(profile?.get("portfolio_link"));

  function goNextPage() {
    setPage((page) => page + 1);
  }
  function goPreviousPage() {
    setPage((page) => page - 1);
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (profile) {
    history.push("/editProfile");
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row ml-16 mr-16 mt-12">
        <div className="w-1/4">
          <SideNav
            formType="Create Profile"
            fieldGroups={[
              "Basic Info",
              "Profile Picture",
              "Address",
              "Education",
              "Portfolio",
              "Review",
            ]}
            page={page}
            setPage={setPage}
          />
        </div>

        <div className="flex flex-col mt-4 w-full ml-32 text-black">
          {page === 0 && (
            <BasicInfo
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
            />
          )}
          {page === 2 && (
            <Address
              address1={address1}
              setAddress1={setAddress1}
              address2={address2}
              setAddress2={setAddress2}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              country={country}
              setCountry={setCountry}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
            />
          )}
          {page === 3 && (
            <Education
              educationLevel={educationLevel}
              setEducationLevel={setEducationLevel}
            />
          )}
          {page === 4 && (
            <Portfolio
              website={website}
              setWebsite={setWebsite}
              linkedIn={linkedIn}
              setLinkedIn={setLinkedIn}
              portfolio={portfolio}
              setPortfolio={setPortfolio}
            />
          )}
          {page === 5 && (
            <Review
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              address1={address1}
              setAddress1={setAddress1}
              address2={address2}
              setAddress2={setAddress2}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              country={country}
              setCountry={setCountry}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
              educationLevel={educationLevel}
              setEducationLevel={setEducationLevel}
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
              {page !== 5 && page !== 0 && (
                <button
                  class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={goNextPage}
                >
                  Next
                </button>
              )}

              {page !== 5 && page === 0 && (
                <button
                  class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={goNextPage}
                >
                  Next
                </button>
              )}

              {page === 5 && (
                <button
                  class="w-48 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={() => {
                    insertUserBasic(
                      firstName,
                      lastName,
                      email,
                      address1,
                      address2,
                      city,
                      state,
                      country,
                      postalCode,
                      educationLevel,
                      website,
                      linkedIn,
                      portfolio
                    )
                      .then((res) => {
                        console.log(`res on creation ${res}`);
                        history.push("/createCampaign");
                      })
                      .catch((err) => {
                        console.log(`error ${err}`);
                      });
                  }}
                >
                  Create Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
