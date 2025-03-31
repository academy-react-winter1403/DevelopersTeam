import { Tag } from "antd";
import React from "react";

const Tags = ({ color, text }) => {
  return (
    <div
      className={`w-auto h-8 bg-[${color}] px-3 rounded-4xl flex justify-center items-center text-white text-sm whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

export default Tags;
