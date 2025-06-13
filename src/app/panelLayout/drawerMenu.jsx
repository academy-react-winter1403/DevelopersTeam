import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { LuBookMarked } from "react-icons/lu";
import { removeData } from "../../core/localStorage/localStorage";
import { MdOutlineLogout } from "react-icons/md";
import { RiFileMarkedLine } from "react-icons/ri";
import { TfiCommentAlt } from "react-icons/tfi";
import { useDarkMode } from "../../context/theme/themeContext";

const DrawerMenu = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeData("authToken");
    navigate("/");
  };

  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="w-52 rounded-2xl p-3 space-y-2 h-64  bg-white dark:bg-[#101828] border-borderGray dark:border-[#101828] border-2 absolute bottom-16 left-10 flex flex-col shadow-lg z-50"
        >
          <NavLink to="/panel/favcourse">
            <h1 className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
              <LuBookMarked />
              <span>علاقه‌مندی دوره</span>
            </h1>
          </NavLink>
          <NavLink to="/panel/favnew">
            <h1 className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
              <RiFileMarkedLine />
              <span>علاقه‌مندی مقالات</span>
            </h1>
          </NavLink>
          <NavLink to="/panel/mycommentscourse">
            <h1 className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
              <TfiCommentAlt />
              <span>کامنت های دوره</span>
            </h1>
          </NavLink>
          <NavLink to="/panel/mycommentsnews">
            <h1 className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
              <TfiCommentAlt />
              <span>کامنت های مقالات</span>
            </h1>
          </NavLink>
          <h1
            onClick={handleLogOut}
            className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded cursor-pointer"
          >
            <MdOutlineLogout className="text-[#FF5454]" />
            <span className="text-[#FF5454]">خروج از حساب</span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DrawerMenu;
