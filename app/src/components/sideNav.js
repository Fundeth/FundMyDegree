import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

const SideNav = (props) => {
  const [animated, setAnimated] = useState(false);
  console.log(props)
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
    <div className="flex flex-col sticky">
        <div className="flex-row bg-green-100 h-16 text-center text-bold text-xl justify-center rounded-t-lg">
            Create Profile
        </div>
        <button className="flex-row h-12 items-center justify-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100">
            Basic Info
        </button>
        <button className="flex-row h-12 items-center justify-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100">
            Address
        </button>
        <button className="flex-row h-12 items-center justify-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100">
            Education
        </button>
        <button className="flex-row h-12 items-center justify-center border-b-2 border-l-2 border-r-2 hover:bg-gray-100 rounded-b-lg">
            Review
        </button>
    </div>

  </div>
 
  )
};

export default SideNav;
