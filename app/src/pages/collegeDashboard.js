import React, { useEffect, useState } from "react";

const CollegeDashboard = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
      CollegeDashboard
  </div>
 
  )
};

export default CollegeDashboard;
