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
    <div className="flex items-center flex-col w-full">
      <h2 className="w-full bg-blue-500 dark:bg-blue-600 text-white rounded-xl sm:rounded-2xl px-2 py-1 text-xs sm:text-sm lg:text-xl text-center cursor-pointer flex justify-center items-center gap-1 sm:gap-2">
        <BiCommentDetail className="text-sm sm:text-base" />
        نظرات شما
      </h2>

      {data?.map(
        (item, index) =>
          index < count && (
            <Item
              key={item.id}
              commentObj={item}
              pictureAddress={item.pictureAddress}
              autor={item.autor}
              inserDate={item.inserDate}
              title={item.title}
              describe={item.describe}
              newsId={item.newsId}
              id={item.id}
            />
          )
      )}
      {data?.length > count && (
        <button
          onClick={() => setCount((e) => e + 4)}
          className="flex items-center gap-1 sm:gap-2 w-full bg-lightGray dark:bg-gray-700 rounded-xl sm:rounded-2xl justify-center h-8 sm:h-10 dark:text-white text-xs sm:text-sm mt-2"
        >
          <MdOutlineComment className="text-sm sm:text-base" />
          نمایش بیشتر
        </button>
      )}
    </div>
  );
};

export default CommentComp;
