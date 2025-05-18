import { Button } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TableHolder from "../table/tableHolder";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TicketHolder = () => {
  const [convertedData, setCovertedData] = useState([]);

  const { data , isSuccess } = useQuery({
    queryKey: ["answerTickets"],
    queryFn: async () => {
      const res = await axios.get(
        `http://taha-sepehr.liara.run/api/ticket/Answerdmine/09339294953`
      );
      return res.data;
    },
  });

  console.log("data",data);

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
          <TableHolder
            data={data}
            isSuccess={isSuccess}
            convertedData={convertedData}
            setCovertedData={setCovertedData}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketHolder;
