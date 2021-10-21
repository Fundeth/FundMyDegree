import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

const Paragraph = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        Add a catchy line for your campaign
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/2 mr-8">
          <textarea
            value={props.oneLiner}
            autoFocus
            rows="2"
            className="flex flex-row bg-transparent outline-none border-1 rounded-lg border-black justify-center bg-white"
            onChange={(evt) => props.setOneLiner(evt.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-row text-left text-bold text-3xl mt-16">
        Tell the world your 'why'
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/2 mr-8">
          <textarea
            value={props.description}
            autoFocus
            rows="10"
            className="flex flex-row bg-transparent outline-none border-1 rounded-lg border-black justify-center bg-white"
            onChange={(evt) => props.setDescription(evt.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
