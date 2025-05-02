import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useDarkMode } from "../../../../../context/theme/themeContext";

const CalenderComp = () => {
  const { darkMode } = useDarkMode();

  const handleAddEvent = () => {
    alert("رویداد جدید اضافه شد!");
  };

  const handleRemoveEvent = () => {
    alert("رویداد حذف شد!");
  };

  return (
    <div
      className="custom-multi-datepicker col-span-2 order-1 md:order-2"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        backgroundColor: darkMode ? "#1e2939" : "#FEFDFF",
        borderRadius: "16px",
        boxShadow: darkMode ? "0px 2px 8px rgba(0,0,0,0.8)" : "0px 2px 8px rgba(0,0,0,0.2)",
        overflow: "hidden",
        border: "1px solid #ced4da"
      }}
    >
      <Calendar
        calendar={persian}
        locale={persian_fa}
        style={{
          border: "none",
          width: "100%",
          height: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: darkMode ? "#fff" : "#000",
          background: "inherit"
        }}
        shadow={false}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          backgroundColor: darkMode ? "#1e2939" : "#f4f4f4",
          borderTop: `1px solid ${darkMode ? "#464E57" : "#ced4da"}`
        }}
      >
        <button
          onClick={handleAddEvent}
          style={{
            padding: "5px 10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: darkMode ? "#0066ff" : "#007bff",
            color: "#fff",
            fontSize: "0.8rem",
            cursor: "pointer"
          }}
        >
          افزودن
        </button>
        <button
          onClick={handleRemoveEvent}
          style={{
            padding: "5px 10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: darkMode ? "#ff4d4f" : "#dc3545",
            color: "#fff",
            fontSize: "0.8rem",
            cursor: "pointer"
          }}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default CalenderComp;
