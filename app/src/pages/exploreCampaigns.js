import React, { useEffect, useState } from "react";

const ExploreCampaigns = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
    ExploreCampaigns
  </div>
 
  )
};

export default ExploreCampaigns;
