import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Paragraph = () => {
  const dispatch = useDispatch();
  const { updateDescription, updatePitch } = bindActionCreators(actionCreators, dispatch);
  const campaign = useSelector((state) => state.campaign);

  return (
  <div>
    <div className="flex flex-row text-left text-bold text-3xl ">
          Tell the world why you are pursuing what you are pursuing
    </div>
    <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/2 mr-8">
            <textarea
                value={campaign.description}
                autoFocus
                rows="10"
                className="flex flex-row bg-transparent outline-none border-1 rounded-lg border-black justify-center"
                onChange={(evt) => updateDescription(evt.target.value)}
            ></textarea>
        </div>
    </div>
  </div>
 
  )
};

export default Paragraph;
