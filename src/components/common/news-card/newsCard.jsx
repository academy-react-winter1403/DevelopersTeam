import React from "react";

const NewsCard = ({ image , googleTitle}) => {
  return (
    <div className="h-[400px] w-1/5 border-2 border-gray-200 rounded-2xl bg-gray-50">

      <div className="h-1/3 rounded-3xl">
        <img src={image} alt="" />
      </div>

      <div>
        <h2 className="mt-14 mr-2">{googleTitle}</h2>
      </div>

    </div>
  );
};

export default NewsCard;
