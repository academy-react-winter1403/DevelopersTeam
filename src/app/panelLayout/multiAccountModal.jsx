import React, { useEffect, useState } from "react";
import { Modal } from "antd";
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
import axios from "axios";
import MultiModal from "./multiModal";
 
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
    getProfileData(account.token);
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
        getProfileData(newCurrent.token);
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
        <MultiModal
          handleLogOut={handleLogOut}
          switchAccount={switchAccount}
          data={item}
        />
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
