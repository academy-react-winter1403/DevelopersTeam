import React, { useEffect } from "react";
import { Modal } from "antd";
import img from "./../../assets/images/panel/img.svg";
import { CiLogout } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setAccounts,
  setCurrentAccount,
  updateCurrentAccountProfile,
} from "../../redux/slices/accountSlice";
import {
  getData,
  removeData,
  setData,
} from "../../core/localStorage/localStorage";
import http from "./../../core/services/interceptor";

const MultiAccountModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accounts = useSelector((state) => state.accounts.accounts);
  const currentAccount = useSelector((state) => state.accounts.currentAccount);

  useEffect(() => {
    const storedAccounts = getData("accounts") || [];
    const storedCurrentAccount = getData("currentAccount");

    const parsedAccounts = Array.isArray(storedAccounts)
      ? storedAccounts
      : JSON.parse(storedAccounts || "[]");

    const parsedCurrentAccount =
      storedCurrentAccount && typeof storedCurrentAccount === "string"
        ? JSON.parse(storedCurrentAccount)
        : storedCurrentAccount;

    dispatch(setAccounts(parsedAccounts));
    if (parsedCurrentAccount) {
      dispatch(setCurrentAccount(parsedCurrentAccount));
    }
  }, [dispatch]);

  const switchAccount = (account) => {
    setData("currentAccount", account);
    dispatch(setCurrentAccount(account));
    setIsModalOpen(false);
    fetchProfileData(account.token);
  };

  const fetchProfileData = async (token) => {
    try {
      const res = await http.get(`/SharePanel/GetProfileInfo`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(updateCurrentAccountProfile(res.data));
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
    }
  };

  const addAccount = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  const handleLogOut = (accountId, e) => {
    e.stopPropagation();
    const remainingAccounts = accounts.filter(
      (account) => account.id !== accountId
    );

    setData("accounts", remainingAccounts);
    dispatch(setAccounts(remainingAccounts));

    if (currentAccount?.id === accountId) {
      if (remainingAccounts.length > 0) {
        const newCurrent = remainingAccounts[0];
        setData("currentAccount", newCurrent);
        dispatch(setCurrentAccount(newCurrent));
        fetchProfileData(newCurrent.token);
      } else {
        removeData("currentAccount");
        removeData("authToken");
        navigate("/login");
      }
    }
  };

  return (
    <Modal
      title="حساب های کاربری"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
      width="434px"
    >
      {accounts.map((item) => (
        <div
          onClick={() => switchAccount(item)}
          key={item.id}
          className={`w-full ${
            currentAccount?.id === item.id
              ? "text-navyBlue bg-lightBlue rounded-full"
              : ""
          } p-2 mt-5 cursor-pointer`}
        >
          {console.log(item)}
          <div className="flex space-x-3 items-center justify-between">
            <div className="flex space-x-3 items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={item.profileData?.picture || img}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold dark:text-white">
                  {item.profileData?.name || `User ${item.id}`}
                </h1>
                {/* <h1 className="font-semibold dark:text-white text-gray">
                  {item.phoneOrGmail || item.profileData?.phoneNumber || ""}
                </h1> */}
              </div>
            </div>
            <div
              onClick={(e) => handleLogOut(item.id, e)}
              className="cursor-pointer p-2"
            >
              <CiLogout className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>
      ))}
      <div
        onClick={addAccount}
        className="w-full flex flex-col items-center mt-4 cursor-pointer"
      >
        <IoIosAddCircleOutline className="w-5 h-5 text-gray" />
        <span className="text-base text-gray">اضافه کردن حساب کاربری</span>
      </div>
    </Modal>
  );
};

export default MultiAccountModal;
