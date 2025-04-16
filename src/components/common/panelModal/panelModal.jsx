// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// const PanelModal = ({isModalOpen,
//   handleOk,
//   handleCancel}) => {
 
//   return (
//     <div>
     
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </div>
//   );
// };
// export default PanelModal;


const PanelModal = ({ isModalOpen, handleOk, handleCancel, course }) => {
  if (!course) return null; // اگر هنوز داده نداریم

  return (
    <Modal
      title={course.title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>توضیح: {course.description}</p>
      <p>مدرسان: {course.teachers.map(t => t.name).join(', ')}</p>
      <p>تاریخ شروع: {course.startDate}</p>
      <p>قیمت: {course.price} تومان</p>
      {/* هر چیز دیگری... */}
    </Modal>
  );
};
