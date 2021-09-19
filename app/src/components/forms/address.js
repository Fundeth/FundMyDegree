import React, { useEffect, useState } from "react";

const Address = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
          What's your address?
      </div>
      <div className="flex flex-row mt-12">
          <div className="flex flex-col w-7/12 mr-8">
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm">Address 1</div>
          </div>

      </div>
      <div className="flex flex-row mt-12">
          <div className="flex flex-col w-1/4 mr-8">
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm">City</div>
          </div>
          <div className="flex flex-col w-1/4 mr-8">
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm">State</div>
          </div>
      </div>
      <div className="flex flex-row mt-12">
          <div className="flex flex-col w-1/4 mr-8">
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm">Postal Code</div>
          </div>
          <div className="flex flex-col w-1/4 mr-8">
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm">Country</div>
          </div>
      </div>
  </div>
 
  )
};

export default Address;
