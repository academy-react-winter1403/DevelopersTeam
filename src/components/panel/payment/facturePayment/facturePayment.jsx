import React, { useRef } from "react";
import domtoimage from "dom-to-image-more";

const FacturePayment = ({ paymentDetail, setThirdModal, setSecondModal }) => {
  const elementRef = useRef(null);

  const generateAndDownloadImage = () => {
    const el = elementRef.current;
    const originalTransform = el.style.transform;
    const originalWidth = el.style.width;

    el.style.transform = "scale(2)";
    el.style.transformOrigin = "top left";
    el.style.width = `${el.offsetWidth * 2}px`;

    domtoimage
      .toPng(el, {
        quality: 1,
        bgcolor: "#ffffff",
        width: el.scrollWidth,
        style: {
          transform: "scale(1)",
          margin: "0 auto",
        },
      })
      .then((dataUrl) => {
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
      })
      .finally(() => {
        el.style.transform = originalTransform;
        el.style.width = originalWidth;
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        ref={elementRef}
        className="w-full max-w-3xl bg-gray-100 dark:bg-slate-800 text-black dark:text-white shadow-lg rounded-lg p-6"
      >
        <h1 className="text-center text-2xl font-bold mb-2">رسید پرداخت</h1>
        <p className="text-center mb-6 text-lg">آکادمی بحرالعلوم</p>

        <table className="table-auto w-full text-base border border-slate-300 dark:border-slate-700">
          <tbody>
            <tr className="border-t border-slate-300 dark:border-slate-700">
              <td className="w-1/2 p-2 border-l border-slate-300 text-center font-semibold">
                نام دوره :
              </td>
              <td className="w-1/2 p-2 text-center">{paymentDetail?.title}</td>
            </tr>
            <tr className="border-t border-slate-300 dark:border-slate-700">
              <td className="w-1/2 p-2 border-l border-slate-300 text-center font-semibold">
                قیمت :
              </td>
              <td className="w-1/2 p-2 text-center">{paymentDetail?.paid}</td>
            </tr>
            <tr className="border-t border-slate-300 dark:border-slate-700">
              <td className="w-1/2 p-2 border-l border-slate-300 text-center font-semibold">
                آیدی دوره :
              </td>
              <td className="w-1/2 p-2 text-center">
                {paymentDetail?.courseId}
              </td>
            </tr>
            <tr className="border-t border-b border-slate-300 dark:border-slate-700">
              <td className="w-1/2 p-2 border-l border-slate-300 text-center font-semibold">
                شناسه پرداخت:
              </td>
              <td className="w-1/2 p-2 text-center">
                {paymentDetail?.paymentInvoiceNumber}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={generateAndDownloadImage}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        تبدیل به تصویر و دانلود
      </button>
    </div>
  );
};

export default FacturePayment;
