import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";

const multiModal = ({ data, handleLogOut, switchAccount }) => {
  const [account, setAccount] = useState();
  const getProfileData = async (token) => {
    try {
      const res = await axios.get(
        "https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo",
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      setAccount(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <div
      onClick={() => switchAccount(data)}
      key={data.id}
      className={`w-full ${
        account?.id === data.id ? "text-navyBlue bg-lightBlue rounded-full" : ""
      } p-2 mt-5 cursor-pointer`}
    >
      <div className="flex space-x-3 items-center justify-between">
        <div className="flex space-x-3 items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={account?.currentPictureAddress}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="flex flex-col font-semibold dark:text-white">
              <span>
                {account?.fName || "بی نام"} {account?.lName}
              </span>
              <span className="text-gray">
                {account?.phoneNumber || "بی نام"}
              </span>
            </h1>
          </div>
        </div>
        <div
          onClick={(e) => handleLogOut(data.id, e)}
          className="cursor-pointer p-2"
        >
          <CiLogout className="w-6 h-6 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default multiModal;
