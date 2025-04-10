import React from "react";
import UserInfo from "../userInfo/userInfo";
import UserProfioleImage from "../userProfioleImage/userProfioleImage";
import UserAddress from "../userAddress/userAddress";
import { Links } from "react-router-dom";
import { Tabs } from "antd";
import LinksTab from "../links/links";

const ProfileTabs = () => {
  const items = [
    {
      key: "1",
      label: "اطلاعات شخصی",
      children: <UserInfo />,
    },
    {
      key: "2",
      label: "عکس پروفایل",
      children: <UserProfioleImage />,
    },
    {
      key: "3",
      label: "آدرس سکونت",
      children: <UserAddress />,
    },
    {
      key: "4",
      label: "لینک ها",
      children: <LinksTab />,
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
        tabBarGutter={32}
        style={{
          fontFamily: "yekan",
          fontSize: "20px",
        }}
      />
    </div>
  );
};

export default ProfileTabs;
