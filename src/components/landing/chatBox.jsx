import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaCircleArrowRight } from "react-icons/fa6";
import img from "./../../assets/images/def/Untitled.png";
import DateComponent from "../common/date/dateComponent";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

const ChatBox = () => {
  const queryClient = useQueryClient();

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

      const allTickets = [...answered.data, ...notAnswered.data];

      const ticketMap = new Map();
      allTickets.forEach((ticket) => {
        ticketMap.set(ticket.id, ticket);
      });

      const uniqueTickets = Array.from(ticketMap.values());

      uniqueTickets.sort((a, b) => {
        const lastMsgA = a.ticket_Message[a.ticket_Message.length - 1];
        const lastMsgB = b.ticket_Message[b.ticket_Message.length - 1];
        return new Date(lastMsgA?.insertDate) - new Date(lastMsgB?.insertDate);
      });

      return {
        allTickets: uniqueTickets,
      };
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        `https://taha-sepehr.liara.run/api/ticket/create/09339294953`,
        {
          name: "user",
          type: "user help",
          message: values.message,
          orderId: null,
        }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["allTickets"]);
      toast.success("با موفقیت ارسال شد");
    },
  });

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto rounded-lg overflow-hidden bg-white shadow-lg">
      <div className="bg-blue-600 text-white p-4 flex items-center space-x-3">
        <img src={img} alt="" className="w-10 h-10 rounded-full" />
        <h2 className="text-lg font-semibold">پشتیبانی آنلاین</h2>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-[#1e2939]">
        {isLoading && <p className="text-center">در حال بارگذاری...</p>}
        {combinedData?.allTickets?.map((ticket) => (
          <div
            key={ticket.id}
            className="border-b border-gray-100 pb-2 mb-4 dark:border-gray-900"
          >
            {ticket.ticket_Message.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${
                  message.isSender ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isSender
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {message.text}
                  <div className="text-xs mt-1 opacity-70">
                    <DateComponent insertDate={message.insertDate} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 p-4 bg-white dark:bg-[#1e2939]">
        <Formik
          onSubmit={(values, { resetForm }) => {
            mutate(values);
            resetForm();
          }}
          initialValues={{ message: "" }}
        >
          <Form className="flex gap-2">
            <Field
              type="text"
              name="message"
              placeholder="پیام خود را بنویسید ..."
              className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
            >
              <FaCircleArrowRight />
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChatBox;
