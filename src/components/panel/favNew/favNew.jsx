import React, { useEffect, useState } from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableFaveNews from "./tableNews/tableFaveNews";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";


const FavNew = () => {
  const [convertedData, setCovertedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getFavNews = async () => {
    const res = await http.get(
      `/SharePanel/GetMyFavoriteNews`
    );
    return res;
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["favNewsPanel"],
    queryFn: getFavNews,
  });

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!data) return;
    if (!query.trim()) {
      setFilteredData(data);
      return;
    }

    const filteredFavNews = data.myFavoriteNews.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData({
      ...data,
      myFavoriteNews: filteredFavNews,
      totalCount: filteredFavNews.length,
    });
  };
  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl">
          علاقه مندی مقالات
        </h2>
      </div>
      <FavBottomCourse handleSearch={handleSearch}/>
      {filteredData && (
        <TableFaveNews
          data={filteredData}
          convertedData={convertedData}
          setCovertedData={setCovertedData}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default FavNew;
