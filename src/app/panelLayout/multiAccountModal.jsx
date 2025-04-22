// import React, { useState } from "react";
// import { Button, Modal } from "antd";
// import img from "./../../assets/images/panel/img.svg";
// import { CiLogout } from "react-icons/ci";
// import { IoIosAddCircleOutline } from "react-icons/io";

// const MultiAccountModal = ({ isModalOpen, showModal, setIsModalOpen }) => {
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Modal
//         title="حساب های کاربری"
//         open={isModalOpen}
//         // onOk={handleOk}
//         onCancel={handleCancel}
//         footer={false}
//         width="434px"
//         height="638px"
//       >
//         <div className="w-full p-2 space-y-5 mt-5">
//           <div className="flex space-x-3 items-center justify-between">
//             <div className="flex space-x-3 items-center">
//               <div className="w-14 h-14 rounded-full overflow-hidden">
//                 <img src={img} alt="" className="w-14 h-14" />
//               </div>
//               <div>
//                 <h1 className="font-semibold dark:text-white">پارسا آقایی</h1>
//                 <h1 className="font-semibold dark:text-white text-gray">
//                   09121231234
//                 </h1>
//               </div>
//             </div>
//             <div>
//               <CiLogout className="w-6 h-6 text-red-500" />
//             </div>
//           </div>
//         </div>
//         <div className="w-full flex flex-col items-center mt-4 cursor-pointer">
//           <IoIosAddCircleOutline className="w-5 h-5 text-gray" />
//           <span className="text-base text-gray">اضافه کردن حساب کاربری</span>
//         </div>
//       </Modal>
//     </>
//   );
// };
// export default MultiAccountModal;
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import img from "./../../assets/images/panel/img.svg";
import { CiLogout } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { getData, setData } from "../../core/localStorage/localStorage";
import { useQuery } from "@tanstack/react-query";

const MultiAccountModal = ({ isModalOpen, showModal, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [accounts, setAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAccounts = getData("accounts") || [];
    setAccounts(storedAccounts);
    setCurrentAccount(getData("currentAccount") || null);
  }, []);

  const switchAccount = (account) => {
    setData("currentAccount", account);
    setCurrentAccount(account);
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
  function onSelect(id) {
    alert(id)
  }

  return (
    <>
      <Modal
        title="حساب های کاربری"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        width="434px"
        height="638px"
      >
        {accounts.map((item) => {
          return (
            <div  onClick={()=>switchAccount(item)} className={`w-full ${currentAccount.id ==item.id && "bg-blue-900 "} p-2 space-y-5 mt-5`}>
              <div className="flex space-x-3 items-center justify-between">
                <div className="flex space-x-3 items-center">
                  <div
                    onClick={() => switchAccount(item)}
                    className="w-14 h-14 rounded-full overflow-hidden"
                  >
                    <img src={img} alt="" className="w-14 h-14" />
                  </div>
                  <div>
                    <h1 className="font-semibold dark:text-white">

                    {item.id}
                    </h1>
                    <h1 className="font-semibold dark:text-white text-gray">
                      {userData?.phoneNumber}
                    </h1>
                  </div>
                </div>
                <div>
                  <CiLogout className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          );
        })}
        <NavLink to="/login" className="w-full flex flex-col items-center mt-4 cursor-pointer">
          <IoIosAddCircleOutline className="w-5 h-5 text-gray" />
          <span className="text-base text-gray">اضافه کردن حساب کاربری</span>
        </NavLink>
      </Modal>
    </>
  );
};
export default MultiAccountModal;