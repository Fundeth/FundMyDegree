import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

const Profile = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
     profile
  </div>
 
  )
};

export default Profile;
