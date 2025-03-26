import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src); // تنظیم تصویر اولیه با مقدار props.src

  const handleImageError = () => {
    setImgSrc('default-image.jpg'); // مسیر تصویر پیش‌فرض در صورت خطای بارگذاری
  };

  return (
    <img 
      src={imgSrc} 
      onError={handleImageError} 
      alt={alt} 
      className={className} // ارسال کلاس‌های CSS به صورت prop
    />
  );
}

export default ImageWithFallback;
