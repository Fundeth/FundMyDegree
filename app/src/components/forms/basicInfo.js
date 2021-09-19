import React, { useEffect, useState } from "react";

const BasicInfo = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
          What's your name?
      </div>
      <div className="flex flex-row mt-12">
          <div className="flex flex-col w-1/4 mr-8">
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm">First name</div>
          </div>
          <div className="flex flex-col w-1/4 ml-8">                        
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm ">Last name</div>
          </div>

      </div>

      <div className="flex flex-row text-left text-bold text-3xl mt-16">
          What's your email?
      </div>
      <div className="flex flex-row mt-12">
          <div className="flex flex-col w-1/4 mr-8">
              <input
                  autoFocus
                  className="flex flex-row bg-transparent outline-none border-b-2 border-black justify-center"
              ></input>
              <div className="flex flex-row text-sm">Email</div>
          </div>
      </div>
  </div>
 
  )
};

export default BasicInfo;
