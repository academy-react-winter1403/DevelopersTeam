import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket } from '../../redux/ticketSlice'; // اکشن افزودن تیکت

const TicketForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: Date.now(), // شناسه یکتا
      title,
      description,
      status: 'pending', // وضعیت اولیه
      date: new Date().toLocaleDateString(), // تاریخ ثبت
    };
    dispatch(addTicket(newTicket)); // ارسال اکشن افزودن تیکت
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="عنوان"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="توضیحات"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">افزودن تیکت</button>
    </form>
  );
};

export default TicketForm;
