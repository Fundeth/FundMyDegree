import React, { useEffect, useState } from "react";

const StudentProfile = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
      StudentProfile
  </div>
 
  )
};

export default StudentProfile;
