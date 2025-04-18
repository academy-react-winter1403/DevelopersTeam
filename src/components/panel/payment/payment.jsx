import React from "react";
import { NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <table
        // ref={elementRef}
        class="table-auto w-full text-xl bg-slate-400 dark:bg-slate-800 dark:text-white "
      >
        <tbody>
          <h1 className="text-center text-2xl font-semibold mt-2">
            رسید پرداخت
          </h1>
          <p className="text-center">اکادمی بحرالعلوم</p>
          <tr className=" flex justify-around border-t border-slate-100 dark:border-slate-900">
            <td className=" border-l-2 border-black w-6/12 text-center">
              نام دوره :{" "}
            </td>
            {/* <td className="w-6/12 text-center">{course?.title}</td> */}
          </tr>
          <tr className=" flex justify-around border-t border-slate-100 dark:border-slate-900">
            <td className=" border-l-2 border-black w-6/12 text-center">
              قیمت :{" "}
            </td>
            {/* <td className="w-6/12 text-center">{course?.cost}</td> */}
          </tr>
          <tr className=" flex justify-around border-t border-slate-100 dark:border-slate-900">
            <td className=" border-l-2 border-black w-6/12 text-center">
              ایدی دوره :{" "}
            </td>
            {/* <td className="w-6/12 text-center">{course?.courseId}</td> */}
          </tr>
          <tr className=" flex justify-around border-t border-slate-100 dark:border-slate-900">
            <td className=" border-l-2 border-black w-6/12 text-center">
              ظرفیت دوره :{" "}
            </td>
            {/* <td className="w-6/12 text-center">{course?.capacity}</td> */}
          </tr>
          <tr className=" flex justify-around border-y border-slate-100 dark:border-slate-900">
            <td className=" border-l-2 border-black w-6/12 text-center">
              شناسه پرداخت:{" "}
            </td>
            {/* <td className="w-6/12 text-center">{dataParams.peyCode}</td> */}
          </tr>
          <div className="flex max-w-80 h-16 m-2">
            <button
              className="butten1 md:w-6/12 w-full mx-auto   "
              // onClick={htmlToImageConvert}
              type="submit"
            >
              ادامه
            </button>
            <NavLink
              to="/dashboard/booking"
              className="butten2 text-center py-2  md:w-6/12 mx-auto"
            >
              برگشت
            </NavLink>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
