import React, { useRef, useState } from "react";
import domtoimage from "dom-to-image-more";

const FacturePayment = ({ paymentDetail, setThirdModal, setSecondModal }) => {
  const elementRef = useRef(null);

  const generateAndDownloadImage = () => {
    const originalTransform = elementRef.current.style.transform;
    const originalWidth = elementRef.current.style.width;

    elementRef.current.style.transform = "scale(2)";
    elementRef.current.style.transformOrigin = "top left";
    elementRef.current.style.width = `${elementRef.current.offsetWidth * 2}px`;

    domtoimage
      .toPng(elementRef.current, {
        quality: 1,
        bgcolor: "#ffffff",
        width: elementRef.current.scrollWidth,
        style: {
          transform: "scale(1)",
          margin: "0 auto",
        },
      })
      .then((dataUrl) => {
        elementRef.current.style.transform = originalTransform;
        elementRef.current.style.width = originalWidth;

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `facture_${
          paymentDetail?.paymentInvoiceNumber || Date.now()
        }.png`;
        link.click();
        setSecondModal(false);
        setThirdModal(true);
      })
      .catch((error) => {
        console.error("Error generating image:", error);
        elementRef.current.style.transform = originalTransform;
        elementRef.current.style.width = originalWidth;
      });
  };

  return (
    <div className=" ">
      <div
        id="big"
        className="lg:w-10/12 md:w-11/12 w-full mx-auto my-auto inset-0"
      >
        <table
          ref={elementRef}
          className="table-auto w-full text-base bg-gray-400 dark:bg-slate-800 dark:text-white"
        >
          <tbody>
            <h1 className="text-center text-2xl font-semibold mt-2">
              رسید پرداخت
            </h1>
            <p className="text-center">اکادمی بحرالعلوم</p>
            <tr className="flex justify-around border-t border-slate-100 dark:border-slate-900">
              <td className="border-l-2 border-black w-6/12 text-center">
                نام دوره :
              </td>
              <td className="w-6/12 text-center">{paymentDetail?.title}</td>
            </tr>
            <tr className="flex justify-around border-t border-slate-100 dark:border-slate-900">
              <td className="border-l-2 border-black w-6/12 text-center">
                قیمت :
              </td>
              <td className="w-6/12 text-center">{paymentDetail?.paid}</td>
            </tr>
            <tr className="flex justify-around border-t border-slate-100 dark:border-slate-900">
              <td className="border-l-2 border-black w-6/12 text-center">
                ایدی دوره :
              </td>
              <td className="w-6/12 text-center">{paymentDetail?.courseId}</td>
            </tr>
            <tr className="flex justify-around border-y border-slate-100 dark:border-slate-900">
              <td className="border-l-2 border-black w-6/12 text-center">
                شناسه پرداخت:
              </td>
              <td className="w-6/12 text-center">
                {paymentDetail?.paymentInvoiceNumber}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="cursor-pointer mt-4 border border-borderGray p-3 rounded-full "
        onClick={() => {
          generateAndDownloadImage();
          setThirdModal(true);
        }}
      >
        تبدیل به تصویر و دانلود
      </button>
    </div>
  );
};

export default FacturePayment;
