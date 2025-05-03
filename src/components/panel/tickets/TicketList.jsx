import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTicket } from '../../redux/ticketSlice'; // اکشن حذف تیکت

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets); // دریافت لیست تیکت‌ها
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTicket(id)); // اکشن حذف تیکت
  };

  return (
    <div>
      <h2>لیست تیکت‌ها</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>وضعیت: {ticket.status}</p>
            <button onClick={() => handleRemove(ticket.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
