import React, { useState } from "react";
import { Button, Modal } from "antd";
import { TiMessage } from "react-icons/ti";
import TicketHolder from "../ticketHolder";
const AnswersModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="text" onClick={showModal}>
        <TiMessage className="w-7 h-7" />
      </Button>
      <Modal
        title="پاسخ های تیکت"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1000px"
        footer={false}
      >
        <TicketHolder isAnswer={true} />

      </Modal>
    </>
  );
};
export default AnswersModal;
