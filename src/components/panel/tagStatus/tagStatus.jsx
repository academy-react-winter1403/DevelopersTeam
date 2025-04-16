import React from "react";

const TagsAccept = ({ text }) => {
  return (
    <div
      className={`w-auto h-8 bg-[#17C96433] px-3 rounded-4xl flex justify-center items-center text-white text-sm whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

const TagsNotAccept = ({ text }) => {
  return (
    <div
      className={`w-24 h-8 bg-[#F3126033] px-3 rounded-4xl flex justify-center items-center text-[#F31260] text-sm whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

const TagsWaiting = ({ text }) => {
  return (
    <div
      className={`w-auto h-8 bg-[#7828C833] px-3 rounded-4xl flex justify-center items-center text-white text-sm whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

export { TagsAccept, TagsNotAccept, TagsWaiting };
