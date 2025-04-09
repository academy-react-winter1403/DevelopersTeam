import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const TableTopCourses = () => {
  return (
    <div class=" overflow-x-auto">
      <table class="w-full mx-auto text-sm text-right rtl:text-right rounded-3xl">
        <thead class="text-xs uppercase bg-[#F0F0F0] mx-auto border rounded-2xl w-[1180px] ">
          <tr className="text-[#787878] font-semibold text-[16px] ">
            <th scope="col" class="px-6 py-3">
              نام دوره
            </th>
            <th scope="col" class="px-6 py-3 ">
              درباره دوره
            </th>
            <th scope="col" class="px-6 py-3 ">
              اساتید دوره
            </th>
            <th scope="col" class="px-6 py-3 ">
              تاریخ برگزاری
            </th>
            <th scope="col" class="px-6 py-3 ">
              قیمت دوره
            </th>
            <th scope="col" class="px-6 py-3 ">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900  dark:text-white"
            >
              ری‌اکت جی‌اس
            </th>
            <td class="px-6 py-4 overflow-hidden text-[#787878] ">
              آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های
              مفید برای یادگیری بهتر
            </td>
            <td class="px-6 py-4">جحسن اسفندیاری</td>
            <td class="px-6 py-4">25 اردیبهشت 1403</td>
            <td class="px-6 py-4"> 1.800.000تومان</td>
            <td class="px-6 py-4">
              <MdOutlineRemoveRedEye className="w-6 h-6"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTopCourses;
