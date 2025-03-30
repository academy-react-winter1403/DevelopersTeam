import React from "react";

const TimeComponent = ({insertDate}) => {
  return <div>{new Date(insertDate).toLocaleTimeString("fa-IR")}</div>;
};

export default TimeComponent;
