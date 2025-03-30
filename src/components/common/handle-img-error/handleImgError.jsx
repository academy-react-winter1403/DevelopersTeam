import React, { useState } from "react";
import img from './../../../assets/images/courses/courseimg.svg'


const ImageError = ({src}) => {
  return (
    <img
      className=""
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = {img};
      }}
      src={src}
      alt=""
    />
  );
};

export default ImageError;
