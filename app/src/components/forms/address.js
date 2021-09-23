import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Address = () => {
    const dispatch = useDispatch();
    const { updateAddress, updateAddress2, updateCity, updateState, updateCountry, updatePostalCode } = bindActionCreators(actionCreators, dispatch);
    const profile = useSelector((state) => state.profile);

    return (
        <div>
            <div className="flex flex-row text-left text-bold text-3xl ">
                What's your address?
            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/2">
                    <div className="ml-2 flex flex-row text-sm">Address 1</div>

                    <input
                        value={profile.address1}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => updateAddress(evt.target.value)}
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/2">
                    <div className="ml-2 flex flex-row text-sm">Address 2</div>

                    <input
                        value={profile.address2}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => updateAddress2(evt.target.value)}
                    ></input>
                </div>

            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">City</div>
                    <input
                        value={profile.city}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => updateCity(evt.target.value)}
                    ></input>
                </div>
                <div className="flex flex-col w-1/4 ml-8">
                    <div className="ml-2 flex flex-row text-sm">State</div>
                    <input
                        value={profile.state}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => updateState(evt.target.value)}
                    ></input>
                </div>
            </div>
            <div className="flex flex-row mt-8">
                <div className="flex flex-col w-1/4 mr-8">
                    <div className="ml-2 flex flex-row text-sm">Postal Code</div>
                    <input
                        value={profile.postalCode}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => updatePostalCode(evt.target.value)}
                    ></input>
                </div>
                <div className="flex flex-col w-1/4 ml-8">
                    <div className="ml-2 flex flex-row text-sm">Country</div>
                    <input
                        value={profile.country}
                        autoFocus
                        className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                        onChange={(evt) => updateCountry(evt.target.value)}
                    ></input>
                </div>
            </div>
        </div>
 
  )
};

export default Address;
