import React from "react";

const LoadingSpinner = () => (
  <div className="w-full flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent"></div>
    <span className="mr-4 text-blue-800 font-semibold">در حال بارگذاری...</span>
  </div>
);

export default LoadingSpinner;
