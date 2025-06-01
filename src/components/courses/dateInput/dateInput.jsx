import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DateInput = ({ icon, inputLabel, selectedDate, setSelectedDate }) => {
  const handleDate = (e) => {
    console.log(e.target.value);
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <div dir="ltr" className="flex flex-col space-y-1 px-4">
      <div dir="rtl" className="text-xs sm:text-sm flex items-center gap-2 ">
        {icon}
        {inputLabel}
      </div>

      <input name="date" type="date" onChange={(e) => handleDate(e)} />

      {/* <DatePicker
        name="date"
        calendar={persian}
        locale={persian_fa}
        onChange={(e) => setSelectedDate(new Date(e))}
        style={{
          height: "2.25rem",
          width: "100%",
          color: "#6b7280",
          outline: "none",
          borderRadius: "0.75rem",
          padding: "1.25rem",
          paddingRight: "1.25rem",
          border: "1px solid #f4f4f4",
          backgroundColor: "#f4f4f4",
          transitionProperty: "all",
          transitionDuration: "300ms",
        }}
        placeholder="تاریخ را وارد کنید"
      /> */}
    </div>
  );
};

export default DateInput;
