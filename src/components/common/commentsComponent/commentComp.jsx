import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import http from "../../../core/services/interceptor";
import Item from "./Item";
import { useQuery } from "@tanstack/react-query";
import { RiH1 } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";

const CommentComp = ({ id }) => {
  const [count, setCount] = useState(4);
  const getNewsComment = async () => {
    const res = await http.get(`/News/GetNewsComments?NewsId=${id}`);
    return res;
  };

  const { data } = useQuery({
    queryKey: "newsComment",
    queryFn: getNewsComment,
  });

  return (
    <div className="flex items-center flex-col">
      <h2 className="w-11/12 mx-auto  bg-blue-500 text-white rounded-2xl  px-2 py-1 text-[10px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <BiCommentDetail />
        نظرات شما
      </h2>

      {data?.map((item, index) => index < count && <Item commentObj={item} />)}
      <button onClick={()=>setCount(e=>e+4)} className="flex items-center gap-2 w-11/12  bg-lightGray rounded-2xl justify-center h-10">
      <MdOutlineComment />
        نمایش بیشتر</button>
    </div>
  );
};

export default CommentComp;
