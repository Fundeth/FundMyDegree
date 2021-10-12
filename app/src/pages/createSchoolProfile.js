import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import { insertSchool } from "../adapters/MoralisAdapter";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Accreditation from "../components/forms/accreditation";
import BasicInfoSchool from "../components/forms/basicInfoSchool";
import AddressSchool from "../components/forms/addressSchool";
import ReviewSchool from "../components/forms/reviewSchool";
import ContactSchool from "../components/forms/contactSchool";
import { ValidateForm } from "../utils/utils";

const CreateSchoolProfile = () => {
  const [page, setPage] = useState(0);
  const loading = useSelector((state) => state.loading.loading);
  const history = useHistory();
  const profile = useSelector((state) => state.profile.publicView);
  const [firstName, setFirstName] = useState(profile?.get("first_name"));
  const [email, setEmail] = useState(profile?.get("email"));
  const [address1, setAddress1] = useState(profile?.get("address_line1"));
  const [address2, setAddress2] = useState(profile?.get("address_line2"));
  const [city, setCity] = useState(profile?.get("city"));
  const [state, setState] = useState(profile?.get("state"));
  const [country, setCountry] = useState(profile?.get("country"));
  const [postalCode, setPostalCode] = useState(profile?.get("zip_pin"));
  const [website, setWebsite] = useState(profile?.get("website"));
  const [accreditation, setAccreditation] = useState(
    profile?.get("accreditation")
  );
  const [schoolContact, setSchoolContact] = useState(
    profile?.get("schoolContact")
  );
  const [schoolContactEmail, setschoolContactEmail] = useState(
    profile?.get("schoolContactEmail")
  );
  const [schoolContactPhone, setschoolContactPhone] = useState(
    profile?.get("schoolContactPhone")
  );
  const [schoolphone, setschoolphone] = useState(profile?.get("schoolphone"));
  const [flag, setFlag] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");

  function goNextPage() {
    if (page === 0) {
      console.log("inside gonext page 0");
      var propForm = {
        firstName: firstName,
        website: website,
        email: email,
        schoolphone: schoolphone,
        page: page,
        errorMessage: errorMessage,
        errorMessage1: errorMessage1,
        flag: flag,
      };
      propForm = ValidateForm(propForm);
    }

    if (page === 1) {
      console.log("inside gonext page 1");
      var propForm = {
        address1: address1,
        city: city,
        state: state,
        country: country,
        postalCode: postalCode,
        page: page,
        errorMessage: errorMessage,
        errorMessage1: errorMessage1,
        flag: flag,
      };
      propForm = ValidateForm(propForm);
    }

    if (page === 2) {
      console.log("inside gonext page 2");
      var propForm = {
        schoolContact: schoolContact,
        schoolContactEmail: schoolContactEmail,
        schoolContactPhone: schoolContactPhone,
        page: page,
        errorMessage: errorMessage,
        errorMessage1: errorMessage1,
        flag: flag,
      };
      propForm = ValidateForm(propForm);
    }

    if (page === 3) {
      console.log("inside gonext page 3");
      var propForm = {
        accreditation: accreditation,
        page: page,
        errorMessage: errorMessage,
        errorMessage1: errorMessage1,
        flag: flag,
      };
      propForm = ValidateForm(propForm);
    }

    if (propForm.flag === true) {
      console.log("inside Gonext true block");
      document.getElementById("div_element").innerHTML = "";
      document.getElementById("div_element1").innerHTML = "";
      setPage((page) => page + 1);
    } else {
      console.log("inside Gonext false block");
      document.getElementById("div_element").innerHTML =
        propForm.errorMessage.toString();
      document.getElementById("div_element1").innerHTML =
        propForm.errorMessage1.toString();
    }
  }
  function goPreviousPage() {
    document.getElementById("div_element").innerHTML = "";
    document.getElementById("div_element1").innerHTML = "";
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
            formType="Create School Profile"
            fieldGroups={[
              "Basic Info",
              "Address",
              "School Contact",
              "Accreditation",
              "Review",
            ]}
            page={page}
            setPage={setPage}
          />
        </div>

        <div className="flex flex-col mt-4 w-full ml-32 text-black">
          {page === 0 && (
            <BasicInfoSchool
              firstName={firstName}
              setFirstName={setFirstName}
              website={website}
              setWebsite={setWebsite}
              email={email}
              setEmail={setEmail}
              schoolphone={schoolphone}
              setschoolphone={setschoolphone}
            />
          )}
          {page === 1 && (
            <AddressSchool
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
          {page === 2 && (
            <ContactSchool
              schoolContact={schoolContact}
              setSchoolContact={setSchoolContact}
              schoolContactEmail={schoolContactEmail}
              setschoolContactEmail={setschoolContactEmail}
              schoolContactPhone={schoolContactPhone}
              setschoolContactPhone={setschoolContactPhone}
            />
          )}
          {page === 3 && (
            <Accreditation
              accreditation={accreditation}
              setAccreditation={setAccreditation}
            />
          )}
          {page === 4 && (
            <ReviewSchool
              firstName={firstName}
              setFirstName={setFirstName}
              website={website}
              setWebsite={setWebsite}
              email={email}
              setEmail={setEmail}
              schoolphone={schoolphone}
              setschoolphone={setschoolphone}
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
              schoolContact={schoolContact}
              setSchoolContact={setSchoolContact}
              schoolContactEmail={schoolContactEmail}
              setschoolContactEmail={setschoolContactEmail}
              schoolContactPhone={schoolContactPhone}
              setschoolContactPhone={setschoolContactPhone}
              accreditation={accreditation}
              setAccreditation={setAccreditation}
            />
          )}

          <div className="flex flex-row mt-12">
            <div className="flex flex-col w-1/2">
              <div
                className="ml-2 flex flex-row text-gray-800"
                id="div_element"
              ></div>
            </div>
          </div>
          <div className="flex flex-row mt-12">
            <div className="flex flex-col w-1/2">
              <div
                className="ml-2 flex flex-row text-gray-800"
                id="div_element1"
              ></div>
            </div>
          </div>

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
              {page !== 4 && page !== 0 && (
                <button
                  class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={goNextPage}
                >
                  Next
                </button>
              )}

              {page !== 4 && page === 0 && (
                <button
                  class="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={goNextPage}
                >
                  Next
                </button>
              )}

              {page === 4 && (
                <button
                  class="w-48 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                  type="button"
                  onClick={() => {
                    insertSchool(
                      firstName,
                      website,
                      email,
                      schoolphone,
                      address1,
                      address2,
                      city,
                      state,
                      country,
                      postalCode,
                      schoolContact,
                      schoolContactEmail,
                      schoolContactPhone,
                      accreditation
                    )
                      .then((res) => {
                        console.log(`res on creation ${res}`);
                        history.push("/collegeDashboard");
                      })
                      .catch((err) => {
                        console.log(`error ${err}`);
                      });
                  }}
                >
                  Submit profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSchoolProfile;
