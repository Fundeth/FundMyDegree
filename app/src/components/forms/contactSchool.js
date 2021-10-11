import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const ContactSchool = (props) => {
    const dispatch = useDispatch();
    const { updateSchoolContact, updateSchoolContactEmail, updateSchoolContactPhone } = bindActionCreators(actionCreators, dispatch);
    const profile = useSelector((state) => state.profile);
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");

    if(email!==null){
        email.addEventListener('input', function (event){});}

    if(tel!==null){
        tel.addEventListener('input', function (event){});}

    return (
        <div>
            <div className="flex flex-row text-left text-bold text-3xl ">
                Please share contact person information:
            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/2">
                    <div className="ml-2 flex flex-row text-sm">Contact Person Name</div>

                    <input
                        value={props.schoolContact}
                        autoFocus                        
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => props.setSchoolContact(evt.target.value)}
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/2">
                    <div className="ml-2 flex flex-row text-sm">Email</div>

                    <input
                        type="email"
                        value={props.schoolContactEmail}
                        autoFocus                        
                        minLength="10"
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => props.setschoolContactEmail(evt.target.value)}
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">Phone Number</div>
                    <input
                        type="tel"
                        value={props.schoolContactPhone}
                        autoFocus                        
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => props.setschoolContactPhone(evt.target.value)}
                    ></input>
                </div>                
            </div>            
        </div>
 
  )
};

export default ContactSchool;
