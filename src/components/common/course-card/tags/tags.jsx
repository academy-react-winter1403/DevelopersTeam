import React from "react";

const TagsA = ({ text }) => {
  return (
    <div
      className={`w-auto h-8 bg-[#5A7EFF] px-3 rounded-4xl flex justify-center items-center text-white text-sm whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

const TagsB = ({ text }) => {
  return (
    <div
      className={`w-auto h-8 bg-[#5A7EFF] px-3 rounded-4xl flex justify-center items-center text-white text-sm whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

export { TagsA, TagsB };
