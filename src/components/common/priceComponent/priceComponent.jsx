import React from "react";

const PriceComponent = ({ cost }) => {
  return <div> {new Intl.NumberFormat("fa-IR").format(cost)}</div>;
};

export default PriceComponent;
