import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import { Spin } from "antd";

const AiChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "سلام ! چطور میتونم کمکت کنم ؟",
      insertDate: new Date(),
      isSender: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: sendMessage } = useMutation({
    mutationFn: async (content) => {
      const res = await axios.post(
        `https://ai.liara.ir/api/v1/6836c1e36e5f11e370198f26/chat/completions`,
        {
          model: "openai/gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            ...messages.map((msg) => ({
              role: msg.isSender ? "assistant" : "user",
              content: msg.text,
            })),
            { role: "user", content },
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2ODM2YmZkMGI0NWZiZTY3ZDM3MmRlZWEiLCJ0eXBlIjoiYXV0aCIsImlhdCI6MTc0ODQzNTgxNn0.5Pv1mSgKSyXOP97PmYyVK-7KHdhJX21IsFX3aCi6pz0",
          },
        }
      );
      return res.data;
    },
    onError: (error) => {
      toast.error("مشکلی به وجود آمده");
      // console.error(error);
      setIsLoading(false);
    },
  });

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSubmit = async (values, { resetForm }) => {
    if (!values.text.trim()) {
      toast.error("لطفا پیام را وارد کنید");
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: values.text,
      insertDate: new Date(),
      isSender: false,
    };

    setMessages((prev) => [...prev, newMessage]);
    resetForm();
    setIsLoading(true);

    try {
      const response = await sendMessage(values.text);
      const replyMessage = {
        id: messages.length + 2,
        text: response.choices[0].message.content,
        insertDate: new Date(),
        isSender: true,
      };
      setMessages((prev) => [...prev, replyMessage]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full mt-8 mx-auto bg -white rounded-lg overflow-hidden">
      <div className="w-full border-b border-gray-200 dark:border-gray-800 p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
        <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form className="flex items-center space-x-2">
              <Field
                as="input"
                name="text"
                className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="برام بنویس ..."
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex-1 p-4 mt-5 overflow-y-auto shadow-sm rounded-2xl bg-white dark:bg-gray-800">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isSender ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${
                  message.isSender
                    ? "bg-blue-100 text-gray-800"
                    : "bg-blue-600 text-white"
                }`}
              >
                <div>
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isSender ? "text-gray-500" : "text-blue-100"
                    }`}
                  >
                    {formatTime(message.insertDate)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-blue-100 text-gray-800 rounded-lg p-3 max-w-xs">
                <div className="flex space-x-2">
                  <Spin />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiChat;
