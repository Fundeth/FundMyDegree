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
                    <input
                        value={profile.address1}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateAddress(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">Address 1</div>
                </div>

            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/2">
                    <input
                        value={profile.address2}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateAddress2(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">Address 2</div>
                </div>

            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/4 mr-8">
                    <input
                        value={profile.city}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateCity(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">City</div>
                </div>
                <div className="flex flex-col w-1/4 ml-8">
                    <input
                        value={profile.state}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateState(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">State</div>
                </div>
            </div>
            <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/4 mr-8">
                    <input
                        value={profile.postalCode}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updatePostalCode(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">Postal Code</div>
                </div>
                <div className="flex flex-col w-1/4 ml-8">
                    <input
                        value={profile.country}
                        autoFocus
                        className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
                        onChange={(evt) => updateCountry(evt.target.value)}
                    ></input>
                    <div className="flex flex-row text-sm">Country</div>
                </div>
            </div>
        </div>
 
  )
};

export default Address;
