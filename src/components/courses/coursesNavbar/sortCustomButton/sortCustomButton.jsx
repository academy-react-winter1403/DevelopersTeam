import { Button } from "antd";
import React from "react";
import { useDarkMode } from "../../../../context/theme/themeContext";

const SortCustomButton = ({ data, selected, setSelected }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <Button
      shape="round"
      onClick={() => setSelected(data)}
      style={{
        fontFamily: "yekan",
        background:
          selected?.id == data.id
            ? darkMode
              ? "#3772ff"
              : "#3772ff"
            : darkMode
            ? "#1e2939"
            : "#fff",
        color: darkMode ? "#fff" : selected?.id == data.id ? "#fff" : "#000",
      }}
    >
      {data.text}
    </Button>
  );
};

export default SortCustomButton;
