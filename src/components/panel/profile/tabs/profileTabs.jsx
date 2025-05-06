import React, { useState } from "react";
import UserInfo from "../userInfo/userInfo";
import UserProfioleImage from "../userProfioleImage/userProfioleImage";
import UserAddress from "../userAddress/userAddress";
import { Links } from "react-router-dom";
import { Tabs } from "antd";
import LinksTab from "../links/links";
import "./ProfileTabs.css";
import { motion, AnimatePresence } from "framer-motion";
import ChangePass from "../changePass/changePass";

const ProfileTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "اطلاعات شخصی", content: <UserInfo data={data} /> },
    { id: 1, label: "عکس پروفایل", content: <UserProfioleImage data={data} /> },
    {
      id: 2,
      label: "آدرس سکونت",
      content: <UserAddress data={data} />,
    },
    { id: 3, label: "لینک ها", content: <LinksTab data={data} /> },
    { id: 4, label: "تغییر رمز", content: <ChangePass data={data} /> },
  ];

  const contentVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="relative">
        <div className="flex space-x-1 sm:space-x-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-1 font-medium text-xs whitespace-nowrap sm:text-sm  focus:outline-none relative ${
                activeTab === tab.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
                  layoutId="underline"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 mt-2 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="text-gray-700"
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileTabs;
