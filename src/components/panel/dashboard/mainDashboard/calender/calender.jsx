import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useDarkMode } from "../../../../../context/theme/themeContext";
import "./dark.css";

const CalenderComp = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="col-span-2 order-1 md:order-2 ">
      <Calendar
        calendar={persian}
        locale={persian_fa}
        className={darkMode && "dark"}
      />
    </div>
  );
};

export default CalenderComp;
