import React from "react";

const DateComponent = ({ insertDate}) => {
  return (
    <div>
      {new Date(insertDate).toLocaleDateString("fa-IR")}
    </div>
  );
};

export default DateComponent;
