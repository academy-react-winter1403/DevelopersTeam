import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import TableHolder from "../table/tableHolder";

const TicketHolder = () => {
  return (
    <div className="mt-8">
      <div className="w-full h-auto flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="w-full h-10 font-bold text-xl">تیکت های من</h2>
          <NavLink to="/panel/ticket/add">
            <Button
              color="primary"
              variant="outlined"
              size="large"
              style={{ fontFamily: "yekan" }}
            >
              ایجاد تیکت
            </Button>
          </NavLink>
        </div>
        <div className="border border-red-950 w-full">
          <TableHolder />
        </div>
      </div>
    </div>
  );
};

export default TicketHolder;
