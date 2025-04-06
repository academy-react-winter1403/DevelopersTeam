import { Progress } from "antd";
import React from "react";

const ProgressComp = () => {
  return (
    <div className="col-span-2 border">
      <Progress type="circle" percent={75} style={{width:"300px",border:'1px solid red'}} />
    </div>
  );
};

export default ProgressComp;
