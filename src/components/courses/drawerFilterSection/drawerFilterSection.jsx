import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FiSearch } from "react-icons/fi";
import SelectDropdown from "../selectDropdown/selectDropdown";
import { GrShareOption } from "react-icons/gr";
import { IoLayersOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import PriceSlider from "../priceSlider/priceSlider";
import { PiMoneyWavyLight } from "react-icons/pi";
import DateInput from "../dateInput/dateInput";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const DrawerFilterSection = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const title = (
    <div className="flex justify-between items-center w-full absolute top-5 left-0 px-10">
      <p>ترتیب و فیلتر</p>
      <Button
        shape="round"
        danger
        icon={<IoIosClose className="text-2xl mt-1" />}
        onClick={() => setOpen(false)}
        style={{ fontFamily: "yekan" }}
      >
        بستن
      </Button>
    </div>
  );

  return (
    <>
      <Button
        type="primary"
        shape="round"
        onClick={showLoading}
        style={{ fontFamily: "yekan" }}
      >
        ترتیب و فیلتر
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={title}
        closeIcon={""}
        placement="bottom"
        open={open}
        loading={loading}
      >
        <div className="space-y-5">
          <SelectDropdown
            icon={<GrShareOption className="text-2xl" />}
            inputLabel={"دسته‌بندی"}
            placeholder="انتخاب کنید"
          />
          <SelectDropdown
            icon={<IoLayersOutline className="text-2xl" />}
            inputLabel={"سطح آموزشی"}
            placeholder="انتخاب کنید"
          />
          <SelectDropdown
            icon={<LiaChalkboardTeacherSolid className="text-2xl" />}
            inputLabel={"اساتید"}
            placeholder="انتخاب کنید"
          />
          <PriceSlider
            icon={<PiMoneyWavyLight className="text-2xl" />}
            inputLabel={"قیمت"}
          />
          <DateInput
            icon={<IoCalendarOutline className="text-2xl" />}
            inputLabel={"تاریخ برگزاری"}
          />
        </div>
      </Drawer>
    </>
  );
};
export default DrawerFilterSection;
