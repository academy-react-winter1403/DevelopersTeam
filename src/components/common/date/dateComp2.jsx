import React from "react";

const DateComp2 = ({ inserDate }) => {
  return (
    <div>
      {new Date(inserDate).toLocaleDateString("fa-IR")}
    </div>
  );
};

export default DateComp2;
