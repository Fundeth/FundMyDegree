import { React, useState } from "react";
import { disburse } from "../adapters/contracts";
import { useSelector, useDispatch } from "react-redux";

const DisburseModal = (props) => {
  const [disburseAmount, setDisburseAmount] = useState(0);
  const campaignContract = useSelector(
    (state) => state.contract.campaignContract
  );

  return (
    <div>
      {props.showDisburseModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Disburse</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowDisburseModal(false)}
                  >
                    <span className="text-black">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="text-md">Your disbursement amount</div>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <input
                      type="number"
                      min="0"
                      step="1000"
                      autoFocus
                      className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left"
                      onChange={(evt) => setDisburseAmount(evt.target.value)}
                    ></input>
                  </p>
                  <div
                    class="mt-8 flex items-center bg-red-100 text-red-800 text-sm px-4 py-3 rounded-xl"
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
                      This amount will be received by your school once they
                      verify your enrollment
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowDisburseModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="w-32 bg-green-600 text-white rounded-full py-3 px-6 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none"
                    type="button"
                    onClick={() => {
                      console.log(disburseAmount);

                      disburse(campaignContract, disburseAmount).then((res) => {
                        props.setShowDisburseModal(false);
                      });
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};

export default DisburseModal;
