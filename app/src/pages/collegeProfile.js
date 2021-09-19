import React, { useEffect, useState } from "react";

const CollegeProfile = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
      CollegeProfile
  </div>
 
  )
};

export default CollegeProfile;
