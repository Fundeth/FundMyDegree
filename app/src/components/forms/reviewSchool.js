import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const ReviewSchool = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div>
            <div className="flex flex-row text-left text-bold text-3xl ">
                Review
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
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                    
                </div>
                
                <div className="flex flex-col w-1/4 ml-8">   
                <div className="ml-2 flex flex-row text-sm">School website</div>
                     
                    <input
                        value={profile.website}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">Email</div>
                    <input
                        type="email"
                        id="email" 
                        name="email"
                        value={profile.email}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                    
                </div>
                
                <div className="flex flex-col w-1/4 ml-8">   
                <div className="ml-2 flex flex-row text-sm">School phone number</div>                     
                    <input
                        type="tel"
                        id="tel" 
                        name="tel"
                        value={profile.schoolphone}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-7/12">
                <div className="flex flex-row text-sm">Address 1</div>

                    <input
                        type="text"
                        id="address1" 
                        name="address1"
                        value={profile.address1}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-7/12">
                <div className="ml-2 flex flex-row text-sm">Address 2</div>

                    <input
                        value={profile.address2}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                <div className="ml-2 flex flex-row text-sm">City</div>
                    <input
                        type="text"
                        id="city" 
                        name="city"
                        value={profile.city}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>
                <div className="flex flex-col w-1/4 ml-8">
                <div className="ml-2 flex flex-row text-sm">State</div>
                    <input
                        type="text"
                        id="state" 
                        name="state"
                        value={profile.state}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>
            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                <div className="ml-2 flex flex-row text-sm">Postal Code</div>

                    <input
                        type="text"
                        id="postal" 
                        name="postal"
                        value={profile.postalCode}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>
                <div className="flex flex-col w-1/4 ml-8">
                <div className="ml-2 flex flex-row text-sm">Country</div>
                    <input
                        type="text"
                        id="country" 
                        name="country"
                        value={profile.country}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>
            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                <div className="ml-2 flex flex-row text-sm">Contact person name</div>
                    <input
                        type="text"
                        id="schoolContact" 
                        name="schoolContact"
                        value={profile.schoolContact}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>
                <div className="flex flex-col w-1/4 ml-8">
                <div className="ml-2 flex flex-row text-sm">Contact person email</div>
                    <input
                        type="email"
                        id="emailContact" 
                        name="emailContact"
                        value={profile.schoolContactEmail}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>
            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                <div className="ml-2 flex flex-row text-sm">Contact person phone number</div>
                    <input
                        type="text"
                        id="contactPhone" 
                        name="contactPhone"
                        value={profile.schoolContactPhone}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>                
            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-7/12">
                <div className="ml-2 flex flex-row text-sm">Accreditation information</div>
                    <input
                        type="text"
                        id="accreditation" 
                        name="accreditation"
                        value={profile.schoolAccreditation}
                        autoFocus
                        required
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                    ></input>
                </div>                
            </div>
        </div>        
    )
};

export default ReviewSchool;