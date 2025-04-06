import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import http from "./../../../core/services/interceptor";
import Item from "./Item";

const CommentComp = ({ id }) => {
  const [data, setData] = useState([]);
  const getComment = async () => {
    const res = await http.get("/News/GetNewsComments?NewsId=" + id);
    setData(res);
  };
  useEffect(() => {
    getComment();
  }, []);

  return (
    <div>
      <h2 className="w-11/12 mx-auto bg-blue-500 text-white rounded-2xl  px-2 py-1 text-[10px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <BiCommentDetail />
        نظرات شما
      </h2>

      {data.map((el) => (
        <Item data={el} />
      ))}
    </div>
  );
};

export default CommentComp;
