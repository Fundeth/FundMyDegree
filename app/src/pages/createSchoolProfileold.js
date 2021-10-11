import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import BasicInfoSchool from "../components/forms/basicInfoSchool";
import ReviewSchool from "../components/forms/reviewSchool";
import AddressSchool from "../components/forms/addressSchool";
import Accreditation from "../components/forms/accreditation";
import { insertSchool } from "../adapters/MoralisAdapter";
import { useSelector, useDispatch } from "react-redux";
import ContactSchool from "../components/forms/contactSchool";
import formValidation from "../components/forms/validation";
import { ValidationError } from "react-moralis";

const CreateSchoolProfile = () => {
const [page, setPage] = useState(0);
const profile = useSelector((state) => state.profile);
  
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(inputText);
console.log(mailformat);
if((inputText!== "") && (inputText.match(mailformat)))
{
//alert("Valid email address!");
//document.form1.text1.focus();
return true;
}
else
{
//alert("You have entered an invalid email address!");
//document.form1.text1.focus();
return false;
}
}

function ValidateURL(inputText)
{
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
console.log(inputText);

if((inputText!== "") && (inputText.match(regex)))
{
return true;
}
else
{
return false;
}
}



  function goNextPage() {
    
      var flag = true;   
      //formValidation();  
      console.log("outside");
      console.log(profile.publicView.firstName);
      //console.log(errorMessage);
      if((page === 0) && ((profile.publicView.firstName === "") || (profile.website === "") || (profile.email==="") || (profile.schoolphone==="") || (ValidateEmail(profile.email)===false)||(ValidateURL(profile.website)===false))) {   
        console.log("inside");
          flag = false;
          var errorMessage = "Please fill up ";
          var errorMessage1 ="";
          if(profile.publicView.firstName == ""){
            errorMessage = errorMessage+ "school name,";   
            console.log(errorMessage+ "inside school name");
            } 
          if(profile.website == ""){
            errorMessage = errorMessage+ "website, ";   
            }   
          if(profile.email == ""){
            errorMessage = errorMessage+ "email, ";   
            }   
          if(profile.schoolphone == ""){
            errorMessage = errorMessage+ "school phone ";   
            console.log(errorMessage+ "inside school phone");
            } 
          if(ValidateURL(profile.website)===false){
              errorMessage1 = errorMessage1+ "incorrect website, ";  
            }
          if(ValidateEmail(profile.email) === false){            
            errorMessage1 = errorMessage1+ "incorrect email address ";    
            }       
                       
          //alert(errorMessage);
          //$('#div_element').load(errorMessage +  ' #div_element');
          document.getElementById('div_element').innerHTML = errorMessage;
          document.getElementById('div_element1').innerHTML = errorMessage1;
      } 
      if((page === 1) && ((profile.address1 == "") || (profile.city == "") || (profile.state=="") || (profile.postalCode=="") || (profile.country==""))) {   
        //console.log(errorMessage+ "inside");
          flag = false;
          var errorMessage = "Please fill up ";
          if(profile.address1 == ""){
            errorMessage = errorMessage+ "address, ";   
            } 
          if(profile.city == ""){
            errorMessage = errorMessage+ "city, ";   
            }   
          if(profile.state == ""){
            errorMessage = errorMessage+ "state, ";   
            }   
          if(profile.postalCode == ""){
            errorMessage = errorMessage+ "postal code, ";   
            }  
          if(profile.country == ""){
            errorMessage = errorMessage+ "country";   
            }                    
          document.getElementById('div_element').innerHTML = errorMessage;
      } 
      if((page === 2) && ((profile.schoolContact == "") || (profile.schoolContactEmail == "") || (profile.schoolContactPhone=="")||(ValidateEmail(profile.schoolContactEmail) === false))) {   
        //console.log(errorMessage+ "inside");
          flag = false;
          var errorMessage = "Please fill up ";
          var errorMessage1 = "";
          if(profile.schoolContact == ""){
            errorMessage = errorMessage+ "school contact person,";   
            } 
          if(profile.schoolContactEmail == ""){
            errorMessage = errorMessage+ "school contact person email, ";   
            }   
          if(profile.schoolContactPhone == ""){
            errorMessage = errorMessage+ "school contact person phone ";   
            }   
          if(ValidateEmail(profile.schoolContactEmail) === false){            
              errorMessage1 = errorMessage1+ "incorrect email address ";   
          }            
          document.getElementById('div_element').innerHTML = errorMessage;
          document.getElementById('div_element1').innerHTML = errorMessage1;
      }
      if((page === 3) && ((profile.schoolAccreditation == ""))) {   
        //console.log(errorMessage+ "inside");
          flag = false;
          var errorMessage = "Please fill up ";
          if(profile.schoolAccreditation == ""){
            errorMessage = errorMessage+ "school accreditation";   
            }                  
          document.getElementById('div_element').innerHTML = errorMessage;
      }  
      
      //flag=profile.flag;
      //document.getElementById('div_element').innerHTML = profile.errorMessage;
  if(flag == true){
    document.getElementById('div_element').innerHTML = "";
    document.getElementById('div_element1').innerHTML = "";
    setPage((page) => page + 1);
    }
  }

  function goPreviousPage() {
    document.getElementById('div_element').innerHTML = "";
    document.getElementById('div_element1').innerHTML = "";
    setPage((page) => page - 1);
  }
  return (
    <div className="flex flex-col w-screen">
        <div className="flex flex-row ml-16 mr-16 mt-12">
            <div className="w-1/4"> 
                <SideNav 
                  formType="Create School Profile"
                  fieldGroups = {["Basic Info", "Address", "Contact Information", "Accreditation", "Review"]}
                  page={page}
                  setPage={setPage}
                />
            </div>

            <div className="flex flex-col mt-4 w-full ml-32 text-black">
                {page === 0 && <BasicInfoSchool />}
                {page === 1 && <AddressSchool />}
                {page === 2 && <ContactSchool />}
                {page === 3 && <Accreditation />}
                {page === 4 && <ReviewSchool />}
           
              <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/2">
                <div className="ml-2 flex flex-row text-gray-800" id="div_element"></div>                    
                </div>                
              </div>
              <div className="flex flex-row mt-12">
              <div className="flex flex-col w-1/2">
                <div className="ml-2 flex flex-row text-gray-800" id="div_element1"></div>                    
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
                    insertSchool(profile).then((res) => {
                        console.log(`res on creation ${res}`);
                      }).catch((err) => {
                        console.log(`error ${err}`);
                      });
                  }}>
                  Submit profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
      );};

export default CreateSchoolProfile;
