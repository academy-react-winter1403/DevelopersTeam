import React, { useEffect, useState } from "react";
import axios from "axios";
import TableFaveNews from "./tableNews/tableFaveNews";

const Provider = ({ data }) => {
  const [finalData, setFinalData] = useState();
  async function convertData() {
    let convertedData = [];
    for (let index = 0; index < data?.myFavoriteNews.length; index++) {
      const element = data?.myFavoriteNews[index];
    //   console.log(element);
      try {
        await axios
          .get(`${import.meta.env.VITE_BASE_URL}/News/${element?.newsId}`)
          .then((el) => {
            if (el?.data) {
              element["newsData"] = el?.data;
              convertedData.push(element);
            }
          });
      } catch (error) {}
    }
    setFinalData(convertedData);
    // console.log("convertedData",convertedData);
  }

  useEffect(() => {
    if (data) {
      convertData();
    }
  }, [data]);

//   console.log("data2", finalData);

  return data && <TableFaveNews data={finalData} isSuccess={true} />;
};

export default Provider;
