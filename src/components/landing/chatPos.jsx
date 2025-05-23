import React, { useState } from "react";
import ChatBox from "./chatBox";
import { FaCircleArrowRight } from "react-icons/fa6";
import { TbMessageCircleUser } from "react-icons/tb";

const ChatPos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleModal}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700  "
        aria-label="Open chat"
      >
        <TbMessageCircleUser className="w-7 h-7" />
      </button>

      {isModalOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 flex flex-col">
          {/* Modal Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold text-lg">پشتیبانی</h3>
            <button
              onClick={toggleModal}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <FaCircleArrowRight />
            </button>
          </div>

          <div className="flex-1">
            <ChatBox />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPos;
