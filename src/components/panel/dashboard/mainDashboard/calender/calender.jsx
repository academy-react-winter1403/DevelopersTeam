import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useDarkMode } from "../../../../../context/theme/themeContext";

const CalenderComp = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="col-span-2 order-1 md:order-2 ">
      <Calendar
        calendar={persian}
        locale={persian_fa}
        style={{
          border: "none",
          width: "100%",
          height:'100%',
          borderRadius: "16px",
          backgroundColor: darkMode ? "#1e2939" : "#FEFDFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: darkMode ? "#fff" : "#000",
        }}
        shadow={false}
      />
    </div>
  );
};

export default CalenderComp;
