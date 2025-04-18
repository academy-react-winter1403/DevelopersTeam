import { toPng } from "html-to-image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const FacturePayment = ({ factureData, data }) => {
  const elementRef = useRef(null);
  const [image, setimage] = useState();
  console.log("fffff", factureData);
  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("img");
        link.download = "my-image-name.png";
        link.src = dataUrl;
        setimage(dataUrl);
        // link.click();

        // setTimeout(() => { navigate(`/dashboard/uploadpeyment2/${dataParams.id}`) }, 2000)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();
  console.log(id);
  const getCoursedetail = async () => {
    const res = await HttpProxy.get;
  };

  return (
    <div>
      <div
        id="big"
        className=" lg:w-6/12 md:w-11/12 w-full  mx-auto my-auto inset-0"
      >
        <img src={image} alt="" />
        ---
        <table
          ref={elementRef}
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
              <td className="w-6/12 text-center">
                {factureData?.listOfMyCourses.courseTitle}
              </td>
            </tr>
            <tr className=" flex justify-around border-t border-slate-100 dark:border-slate-900">
              <td className=" border-l-2 border-black w-6/12 text-center">
                قیمت :{" "}
              </td>
              <td className="w-6/12 text-center">
                {factureData?.listOfMyCourses.cost}
              </td>
            </tr>
            <tr className=" flex justify-around border-t border-slate-100 dark:border-slate-900">
              <td className=" border-l-2 border-black w-6/12 text-center">
                ایدی دوره :{" "}
              </td>
              <td className="w-6/12 text-center">
                {factureData?.listOfMyCourses.courseId}
              </td>
            </tr>
            <tr className=" flex justify-around border-t border-slate-100 dark:border-slate-900">
              <td className=" border-l-2 border-black w-6/12 text-center">
                ظرفیت دوره :{" "}
              </td>
              <td className="w-6/12 text-center">
                {factureData?.listOfMyCourses.fullName}
              </td>
            </tr>
            <tr className=" flex justify-around border-y border-slate-100 dark:border-slate-900">
              <td className=" border-l-2 border-black w-6/12 text-center">
                شناسه پرداخت:{" "}
              </td>
              {/* <td className="w-6/12 text-center">{data.peyCode}</td> */}
            </tr>
            <div className="flex max-w-80 h-16 m-2">
              <button
                className="butten1 md:w-6/12 w-full mx-auto   "
                onClick={htmlToImageConvert}
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
      <button>ارسال</button>
    </div>
  );
};

export default FacturePayment;
