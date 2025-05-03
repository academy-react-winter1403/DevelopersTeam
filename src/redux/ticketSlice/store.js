import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './ticketSlice'; // ایمپورت ریدوسر تیکت

export const store = configureStore({
  reducer: {
    tickets: ticketReducer, // ثبت ریدوسر مربوط به تیکت‌ها
  },
});
