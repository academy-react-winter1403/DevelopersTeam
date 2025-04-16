import React from "react";
import Map from "./map/map";

const UserAddress = () => {
  return (
    <div className="w-full mb-10 ">
      <h1 className="text-navyBlue">
        داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید
      </h1>
      <div className="ml-10 rounded-2xl mt-2 w-full px-3">
        <Map />
      </div>
    </div>
  );
};

export default UserAddress;
