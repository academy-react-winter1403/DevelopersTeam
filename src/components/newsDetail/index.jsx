import React from "react";

const NewsDetail = () => {
  return (
    <div className="grid grid-cols-4 h-auto m-4 border-4 border-borderGray rounded-4xl">
      NewsDetail
      <div className="col-span-4 lg:col-span-3 w-full">
        <div className=" ">
          {data?.news.map((item, index) => {
            return (
              <NewsItemCard
                key={item.id}
                addUserProfileImage={item.addUserProfileImage}
                title={item.title}
                miniDescribe={item.miniDescribe}
                addUserFullName={item.addUserFullName}
                insertDate={item.insertDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
