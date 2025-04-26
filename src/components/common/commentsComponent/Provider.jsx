import React, { useEffect, useState } from "react";
import http from "./../../../core/services/interceptor";
import Item from "./Item";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
const Provider = ({ newsId, commentId }) => {
  const getReplays = async () => {
    const res = await http.get(`/News/GetRepliesComments?Id=${commentId}`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["replyNewsComment", commentId],
    queryFn: () => getReplays(),
  });

  useEffect(() => {
    // console.log(data);
  }, [data]);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div>
      {data?.length === 0 ? (
        <h2 className="text-gray text-sm mt-5">هیچ پاسخی وجود ندارد</h2>
      ) : (
        data.map((el) => (
          <Item
            commentObj={el}
            pictureAddress={el.pictureAddress}
            autor={el.autor}
            inserDate={el.inserDate}
            title={el.title}
            describe={el.describe}
            newsId={el.newsId}
            id={el.id}
            isReplay={true}
          />
        ))
      )}
    </div>
  );
};

export default Provider;
