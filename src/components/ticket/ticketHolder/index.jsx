import { Button } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TableHolder from "../table/tableHolder";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AnswerTable from "../table/answerTable";

const TicketHolder = ({ isAnswer }) => {
  const [convertedData, setCovertedData] = useState([]);

  const {
    data: combinedData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["allTickets"],
    queryFn: async () => {
      const [answered, notAnswered] = await Promise.all([
        axios.get(
          `http://taha-sepehr.liara.run/api/ticket/Answerdmine/09339294953`
        ),
        axios.get(
          `http://taha-sepehr.liara.run/api/ticket/Allmine/09339294953`
        ),
      ]);

      const answeredIds = new Set(answered.data.map((ticket) => ticket.id));

      return {
        answered: answered.data,
        notAnswered: notAnswered.data,
        allTickets: [...answered.data, ...notAnswered.data],
        answeredIds,
      };
    },
  });

  return (
    <div className="mt-8">
      <div className="w-full h-auto flex flex-col">
        {!isAnswer && (
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
        )}
        <div className="w-full">
          {!isAnswer && (
            <TableHolder
              data={combinedData?.allTickets}
              answered={combinedData?.answered}
              isSuccess={isSuccess}
              convertedData={convertedData}
              setCovertedData={setCovertedData}
              answeredIds={combinedData?.answeredIds}
            />
          )}
          {isAnswer && (
            <AnswerTable
              data={combinedData?.answered}
              answered={combinedData?.answered}
              isSuccess={isSuccess}
              convertedData={convertedData}
              setCovertedData={setCovertedData}
              answeredIds={combinedData?.answeredIds}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketHolder;
