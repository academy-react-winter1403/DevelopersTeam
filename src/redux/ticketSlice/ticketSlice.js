import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [], // آرایه‌ای از تمام تیکت‌ها
  },
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push(action.payload); // افزودن یک تیکت جدید
    },
    updateTicket: (state, action) => {
      const index = state.tickets.findIndex(ticket => ticket.id === action.payload.id);
      if (index !== -1) {
        state.tickets[index] = action.payload; // به‌روزرسانی تیکت مشخص‌شده
      }
    },
    removeTicket: (state, action) => {
      state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload); // حذف تیکت مشخص‌شده
    },
  },
});

export const { addTicket, updateTicket, removeTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
