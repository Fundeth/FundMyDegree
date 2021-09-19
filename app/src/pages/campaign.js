import React, { useEffect, useState } from "react";

const Campaign = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
      Campaign
  </div>
 
  )
};

export default Campaign;
