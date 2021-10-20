import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTarget } from "../../store/actionCreators";
import { actionCreators } from "../../store/index";

const Target = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        What's your target amount to be raised through crowdfunding?
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">
            Target amount to raise
          </div>

          <input
            value={props.target}
            type="number"
            min="0"
            step="1000"
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => props.setTarget(evt.target.value)}
          ></input>
        </div>
      </div>
      <div
        class="w-1/2 mt-8 flex items-center bg-blue-100 text-bluefmd text-sm px-4 py-3 rounded-xl"
        role="alert"
      >
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p>
          This amount can only be disbursed once your college verifies your
          enrollment
        </p>
      </div>
    </div>
  );
};

export default Target;
