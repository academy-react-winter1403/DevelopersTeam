import { Modal } from "antd";
import React from "react";
import FacturePayment from "../facturePayment/facturePayment";

const StepShowFacture = ({
  secondModal,
  handleSecondOk,
  setSecondModal,
  setThirdModal,
  paymentDetail,
  factureData,
  data,
}) => {
  return (
    <Modal
      open={secondModal}
      onOk={handleSecondOk}
      onCancel={() => setSecondModal(false)}
      footer={false}
    >
      <FacturePayment
        setThirdModal={setThirdModal}
        setSecondModal={setSecondModal}
        paymentDetail={paymentDetail}
        factureData={factureData}
        data={data}
      />
    </Modal>
  );
};

export default StepShowFacture;
