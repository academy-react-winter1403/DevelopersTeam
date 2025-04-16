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
