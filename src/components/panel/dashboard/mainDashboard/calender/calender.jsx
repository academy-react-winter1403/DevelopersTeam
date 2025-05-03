import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useDarkMode } from "../../../../../context/theme/themeContext";

const CalenderComp = () => {
  const { darkMode } = useDarkMode();

  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleAddEvent = () => {
    if (!selectedDate || !newEvent.trim()) {
      alert("لطفاً تاریخ و عنوان رویداد را وارد کنید!");
      return;
    }
    setEvents([...events, { date: selectedDate, title: newEvent }]);
    setNewEvent("");
    setSelectedDate(null);
    setIsAddModalOpen(false);
    alert("رویداد جدید اضافه شد!");
  };

  const handleRemoveEvent = () => {
    if (events.length === 0) {
      alert("هیچ رویدادی برای حذف وجود ندارد!");
      return;
    }
    const updatedEvents = [...events];
    updatedEvents.pop();
    setEvents(updatedEvents);
    alert("آخرین رویداد حذف شد!");
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
        overflow: "hidden",
      }}
    >
      <Calendar
        calendar={persian}
        locale={persian_fa}
        multiple={false}
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        style={{
          border: "none",
          width: "100%",
          height: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: darkMode ? "#fff" : "#000",
          background: "inherit",
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
          borderTop: `1px solid ${darkMode ? "#464E57" : "#ced4da"}`,
        }}
      >
        <button
          onClick={() => setIsAddModalOpen(true)}
          style={{
            padding: "5px 10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: darkMode ? "#0066ff" : "#007bff",
            color: "#fff",
            fontSize: "0.8rem",
            cursor: "pointer",
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
            cursor: "pointer",
          }}
        >
          حذف
        </button>
        <button
          onClick={() => setIsViewModalOpen(true)}
          style={{
            padding: "5px 10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: darkMode ? "#ffc107" : "#f8c210",
            color: "#000",
            fontSize: "0.8rem",
            cursor: "pointer",
          }}
        >
          مشاهده
        </button>
      </div>

      {isAddModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "400px",
              backgroundColor: darkMode ? "#1e2939" : "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <h4
              style={{
                color: darkMode ? "#fff" : "#000",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              افزودن رویداد جدید
            </h4>
            <input
              type="text"
              placeholder="عنوان رویداد"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ced4da",
                width: "100%",
                marginBottom: "10px",
              }}
            />
            <button
              onClick={handleAddEvent}
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: darkMode ? "#0066ff" : "#007bff",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              ذخیره
            </button>
            <button
              onClick={() => setIsAddModalOpen(false)}
              style={{
                padding: "10px 20px",
                marginTop: "10px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#6c757d",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              لغو
            </button>
          </div>
        </div>
      )}

      {isViewModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "400px",
              backgroundColor: darkMode ? "#1e2939" : "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <h4
              style={{
                color: darkMode ? "#fff" : "#000",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              رویدادهای ثبت‌شده
            </h4>
            {events.length > 0 ? (
              <ul style={{ padding: "0", margin: "0", listStyleType: "none" }}>
                {events.map((event, index) => (
                  <li
                    key={index}
                    style={{
                      color: darkMode ? "#fff" : "#000",
                      fontSize: "0.9rem",
                      margin: "5px 0",
                    }}
                  >
                    {event.date.format()} - {event.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p
                style={{
                  color: darkMode ? "#ccc" : "#555",
                  textAlign: "center",
                }}
              >
                هیچ برنامه‌ای ثبت نشده است.
              </p>
            )}
            <button
              onClick={() => setIsViewModalOpen(false)}
              style={{
                padding: "10px 20px",
                marginTop: "10px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#6c757d",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalenderComp;
