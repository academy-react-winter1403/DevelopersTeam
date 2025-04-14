import React, { useEffect, useState } from "react";
import http from "./../../../core/services/interceptor";
import Item from "./Item";
const Provider = ({ newsId, commentId }) => {
  const [data, setData] = useState([]);
  const getReplays = async () => {
    const api = await http.get(`/News/GetRepliesComments?Id=${commentId}`);
    setData(api);
  };
  useEffect(() => {
    getReplays();
  }, []);
  return (
    <div>
      {data.map((el) => (
        <Item commentObj={el} isReplay={true} />
      ))}
    </div>
  );
};

export default Provider;
