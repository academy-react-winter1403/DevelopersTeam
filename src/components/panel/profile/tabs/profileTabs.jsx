import React from "react";
import UserInfo from "../userInfo/userInfo";
import UserProfioleImage from "../userProfioleImage/userProfioleImage";
import UserAddress from "../userAddress/userAddress";
import { Links } from "react-router-dom";
import { Tabs } from "antd";
import LinksTab from "../links/links";
import "./ProfileTabs.css";

const ProfileTabs = ({data}) => {
  
  const items = [
    {
      key: "1",
      label: "اطلاعات شخصی",
      children: <UserInfo data={data} />,
    },
    {
      key: "2",
      label: "عکس پروفایل",
      children: <UserProfioleImage data={data} />,
    },
    {
      key: "3",
      label: "آدرس سکونت",
      children: <UserAddress data={data} />,
    },
    {
      key: "4",
      label: "لینک ها",
      children: <LinksTab data={data} />,
    },
  ];
  return (
    <div className="mt-10 md:mr-5  custom-tabs ">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default ProfileTabs;
