import React from "react";
import axios from "axios";
import PadcastCard from "./padcastCard";

const Padcast = ({data}) => {
 const getPadcast = async () => {
    const res = await axios.get(`https://taha-sepehr.liara.run/podcast/getAll`);
    return res;
  };


  return (
   <div className="grid grid-cols-4 h-96 m-4 border-4 border-borderGray dark:border-gray-700 rounded-4xl">
      <div className="col-span-4 lg:col-span-3 w-full ">
        {data?.Dots?.map((item, index) => (
          <div key={item.courseId || index}>
            <PadcastCard 
              title={item.title}
              img={item.imageLink}
              describe={item.miniDesc}
              teacherName={item.creator}
            //   statusName={item.statusName}
            //   student={item.commandCount}
            //   cost={item.cost}
              likeCount={item.allLike}
              dissLikeCount={item.allDissLike}
              lastUpdate={item.InsertTime}
              id={item.id}
            //   levelName={item.levelName}
              userIsLiked={item.isLike}
            //   userLikedId={item.userLikedId}
              currentUserDissLike={item.isDissLike}
            //   keyMutate="courses"
            />
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Padcast;
