import { Slider } from "antd";
import React, { useState } from "react";
import { PiMoneyWavyLight } from "react-icons/pi";

const PriceSlider = ({
  selectedPriceMin,
  setSelectedPriceMin,
  selectedPriceMax,
  setSelectedPriceMax,
}) => {
  const [priceRange, setPriceRange] = useState({
    min: 100,
    max: 50000000,
  });

  const onChange = (value) => {
    setSelectedPriceMin(value[0]);
    setSelectedPriceMax(value[1]);
  };

  const onChangeComplete = (value) => {};

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  return (
    <div className="flex flex-col px-4">
      <div className="text-xs sm:text-sm flex items-center gap-2 ">
        <PiMoneyWavyLight className="text-2xl" />
        قیمت
      </div>
      <div className="flex justify-between text-sm">
        <span>حداکثر: {formatPrice(selectedPriceMax)}</span>
        <span>حداقل: {formatPrice(selectedPriceMin)}</span>
      </div>
      <Slider
        range
        min={priceRange.min}
        max={priceRange.max}
        step={10000}
        defaultValue={[priceRange.min, priceRange.max]}
        value={[selectedPriceMin, selectedPriceMax]}
        onChange={onChange}
        tooltip={{
          formatter: (value) => formatPrice(value),
        }}
      />
    </div>
  );
};

export default PriceSlider;
