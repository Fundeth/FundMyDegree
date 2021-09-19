import React, { useEffect, useState } from "react";

const StudentDashboard = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
  <div>
        StudentDashboard
  </div>
 
  )
};

export default StudentDashboard;
