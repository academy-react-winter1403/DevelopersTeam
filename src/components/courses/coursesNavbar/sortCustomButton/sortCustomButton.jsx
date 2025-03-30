import { Button } from "antd";
import React from "react";

const SortCustomButton = ({ data, selected, setSelected }) => {
  return (
    <Button
      shape="round"
      onClick={() => setSelected(data)}
      style={{
        fontFamily: "yekan",
        background: selected?.id == data.id ? "#3772ff" : "#fff",
        color: selected?.id == data.id ? "#fff" : "#000",
      }}
    >
      {data.text}
    </Button>
  );
};

export default SortCustomButton;
