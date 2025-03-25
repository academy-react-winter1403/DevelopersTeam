import { Slider } from "antd";
import React from "react";

const PriceSlider = ({ icon, inputLabel }) => {
  const onChange = (value) => {
    console.log("onChange: ", value);
  };
  const onChangeComplete = (value) => {
    console.log("onChangeComplete: ", value);
  };
  return (
    <div  className="flex flex-col space-y-1 px-4">
      <div className="text-xs sm:text-sm lg:text-base flex items-center gap-2 ">
        {icon}
        {inputLabel}
      </div>
      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
      />
    </div>
  );
};

export default PriceSlider;
