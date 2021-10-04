import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const BasicInfoSchool = () => {
    const dispatch = useDispatch();
    const { updateFirstName, updateSchoolPhone, updateEmail,updateWebsite } = bindActionCreators(actionCreators, dispatch);
    const profile = useSelector((state) => state.profile);
    const email = document.getElementById("email");
    const emailError = document.querySelector('email');
    const url = document.getElementById("url");
    const tel = document.getElementById("tel");
    
    /*const updatePageFirstName  = (firstname) => {
        var errorMessage = "";
        updateFirstName(firstname);
        console.log("outside");
        if((profile.firstName == "")){
            console.log("inside");
            errorMessage = "Please fill up School Name";         
            alert(errorMessage);
        }
    }*/

    /*if(url!==null){
        url.addEventListener('input', function (event) {});}

    if(tel!==null){
        tel.addEventListener('input', function (event) {});}

    if(email!==null){
        email.addEventListener('input', function (event) {
            // Each time the user types something, we check if the
            // form fields are valid.
            if (emailError!==null) {
            if (email.validity.valid) {
              // In case there is an error message visible, if the field
              // is valid, we remove the error message.
              emailError.textContent = ''; // Reset the content of the message
              emailError.className = 'error'; // Reset the visual state of the message
            } else {
              // If there is still an error, show the correct error
              //showError();
            }}
          });}   */     
          
    return (
        <div>
            <div className="flex flex-row text-left text-bold text-3xl ">
                Basic Info
            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">School name</div>
                    <input
                        type="text"
                        id="firstName" 
                        name="firstName"
                        value={profile.firstName}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"                    
                        onChange={(evt) => updateFirstName(evt.target.value)}
                    ></input>
                </div>
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">School Website</div>

                    <input
                        type="url"
                        id="url" 
                        name="url"
                        value={profile.website}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"                        
                        minLength="10"
                        onChange={(evt) => updateWebsite(evt.target.value)}
                    ></input>
                </div>
            </div>

            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">Email</div>
                    <input
                        type="email"
                        id="email" 
                        name="email"
                        value={profile.email}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"                        
                        minLength="10"
                        onChange={(evt) => updateEmail(evt.target.value)}
                    ></input>
                </div>
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">School contact number</div>

                    <input
                        type="tel"
                        id="tel" 
                        name="tel"                
                        value={profile.schoolphone}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"                        
                        minLength="10"
                        onChange={(evt) => updateSchoolPhone(evt.target.value)}
                    ></input>
                </div>
            </div>            
        </div>
    
  )
  
};

export default BasicInfoSchool;
