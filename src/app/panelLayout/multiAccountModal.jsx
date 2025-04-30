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
} from "../../redux/slices/accountSlice";
import {
  getData,
  removeData,
  setData,
} from "../../core/localStorage/localStorage";

const MultiAccountModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accounts = useSelector((state) => state.accounts.accounts);
  const currentAccount = useSelector((state) => state.accounts.currentAccount);

  useEffect(() => {
    const storedAccounts = getData("accounts") || [];
    const storedCurrentAccount = getData("currentAccount") || null;

    dispatch(setAccounts(storedAccounts));
    dispatch(setCurrentAccount(storedCurrentAccount));
  }, [dispatch]);

  const switchAccount = (account) => {
    setData("currentAccount", JSON.stringify(account));
    dispatch(setCurrentAccount(account));
    setIsModalOpen(false);
  };

  const addAccount = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };

  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const handleLogOut = () => {
    const remainingAccounts = accounts.filter(
      (account) => account.id !== currentAccount.id
    );
    localStorage.setItem("accounts", JSON.stringify(remainingAccounts));

    if (remainingAccounts.length > 0) {
      localStorage.setItem(
        "currentAccount",
        JSON.stringify(remainingAccounts[0])
      );
    } else {
      removeData("currentAccount");
      removeData("authToken");
      navigate("/login");
    }
  };

  return (
    <>
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
            } p-2 mt-5`}
          >
            <div className="flex space-x-3 items-center justify-between">
              <div className="flex space-x-3 items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src={img} alt="" className="w-14 h-14" />
                </div>
                <div>
                  <h1 className="font-semibold dark:text-white">{item.id}</h1>
                  <h1 className="font-semibold dark:text-white text-gray">
                    {userData?.phoneNumber}
                  </h1>
                </div>
              </div>
              <div onClick={handleLogOut} className="cursor-pointer">
                <CiLogout className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>
        ))}
        <NavLink
          to="/login"
          className="w-full flex flex-col items-center mt-4 cursor-pointer"
        >
          <IoIosAddCircleOutline className="w-5 h-5 text-gray" />
          <span className="text-base text-gray">اضافه کردن حساب کاربری</span>
        </NavLink>
      </Modal>
    </>
  );
};

export default MultiAccountModal;
