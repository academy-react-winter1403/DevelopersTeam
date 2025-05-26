import React from "react";
import { useParams } from "react-router-dom";
import AnswerTable from "../table/answerTable";
import TicketHolder from ".";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AnswerFromAdmin = () => {
  const { id } = useParams();

  const { data: ticketDetailData } = useQuery({
    queryKey: ["ticketDetail"],
    queryFn: async () => {
      const res = await axios.get(
        `https://taha-sepehr.liara.run/api/ticket/admin/byId/${id}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <TicketHolder
          isAnswer={true}
          ticketDetailData={ticketDetailData?.ticket_Message}
        />
      </div>
    </div>
  );
};

export default AnswerFromAdmin;
