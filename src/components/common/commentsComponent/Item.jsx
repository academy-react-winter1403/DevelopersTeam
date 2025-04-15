import React, { useEffect, useRef, useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import Provider from "./Provider";
import { Field, Form, Formik } from "formik";
import DateComp2 from "../date/dateComp2";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";
import CommentLikeDislike from "./commentLikeDislike";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import http from "../../../core/services/interceptor";
import EmojiPicker from "emoji-picker-react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Item = ({
  commentObj,
  isReplay,
  pictureAddress,
  autor,
  inserDate,
  title,
  describe,
  newsId,
  id,
  isMyCommentNews,
}) => {
  const [open, setOpen] = useState(false);
  const [openAnser, setOpenAnser] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addCommentReply = async (values) => {
    const res = await http.post(`/News/CreateNewsReplyComment`, values);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: addCommentReply,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsComment"]);
      toast.success("نظرتان با موفقیت ثبت شد");
    },
    onError: () => {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  const addDefaultImg = (e) => {
    e.target.src = defaultImg;
  };
  return (
    <div
      className={`w-full m-1 sm:m-2 ${isReplay && "space-x-2 sm:space-x-3"}`}
    >
      <div className="w-full flex my-1 sm:my-2">
        {isReplay && (
          <div className="w-1 sm:w-2 h-40 sm:h-52 bg-navyBlue mr-4 sm:mr-10 dark:bg-blue-600 rounded-sm"></div>
        )}
        <div className="px-1 sm:px-2 w-full">
          <div className="mt-1 sm:mt-2">
            <div className="flex gap-1 sm:gap-2 py-2 sm:py-4">
              <img
                src={pictureAddress || defaultImg}
                alt="Profile"
                className="border rounded-full w-10 h-10 sm:w-12 sm:h-12 dark:border-gray-600"
                onError={addDefaultImg}
              />
              <div>
                <h2 className="font-medium text-xs sm:text-sm md:text-base dark:text-white">
                  {autor}
                </h2>
                <h2 className="text-gray-500 dark:text-gray-400 text-xs">
                  <DateComp2 inserDate={inserDate} />
                </h2>
              </div>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2 overflow-hidden">
            <p className="text-xs sm:text-sm dark:text-gray-300">{title}</p>
            <p className="text-xs sm:text-sm dark:text-gray-300">{describe}</p>
          </div>
          {isMyCommentNews && (
            <div className="flex space-x-5 mt-5">
              <AiOutlineLike className="w-6 h-6" />
              <span>2</span>
              <AiOutlineDislike className="w-6 h-6 " />
              <span>4</span>
            </div>
          )}

          {!isMyCommentNews && (
            <div className="flex p-2 sm:p-4 gap-1 sm:gap-2 items-center flex-wrap">
              <CommentLikeDislike commentObj={commentObj} />

              <button
                onClick={() => setOpenAnser((e) => !e)}
                className="px-2 h-8 sm:h-10 whitespace-nowrap rounded-full text-xs sm:text-sm text-navyBlue dark:text-blue-400 text-center border border-navyBlue dark:border-blue-400 leading-6 sm:leading-8   sm:px-2"
              >
                {!openAnser ? "جواب دادن" : "بستن"}
              </button>

              <div
                onClick={() => setOpen((e) => !e)}
                className="text-xs sm:text-sm text-center h-5 flex items-center space-x-1 sm:space-x-2 cursor-pointer dark:text-gray-400"
              >
                <span className="underline">مشاهده جواب ها</span>
                {open ? (
                  <IoIosArrowUp size={14} />
                ) : (
                  <IoIosArrowDown size={14} />
                )}
              </div>
            </div>
          )}

          {openAnser && (
            <div className="mt-3 sm:mt-4 h-auto rounded-3xl text-sm sm:text-md border border-[#3772FF] p-3 sm:p-6 flex gap-2">
              <div className="flex-1">
                <Formik
                  onSubmit={mutate}
                  initialValues={{
                    title: "",
                    describe: "",
                    newsId: newsId,
                    userId: 40330,
                    userIpAddress: "1.1.1.1",
                    parentId: id,
                  }}
                >
                  {({ handleSubmit }) => (
                    <Form
                      onSubmit={handleSubmit}
                      className="space-y-2 flex space-x-5"
                    >
                      <div className="flex space-x-5">
                        <button
                          type="submit"
                          className="border cursor-pointer border-navyBlue bg-navyBlue w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center"
                        >
                          <RiTelegram2Line className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </button>
                        {/* <div className="border border-[#F1F1F1] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center">
                          <CiFaceSmile className="w-3 h-3 sm:w-4 sm:h-4 text-navyBlue" />
                        </div> */}
                        <div className="relative">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowPicker(!showPicker);
                            }}
                            className="border cursor-pointer border-[#F1F1F1] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center"
                          >
                            <CiFaceSmile className="w-3 h-3 sm:w-4 sm:h-4 text-navyBlue" />
                          </div>
                          {showPicker && (
                            <div
                              ref={emojiPickerRef}
                              className="absolute bottom-full left-0 z-50"
                            >
                              <EmojiPicker
                                onEmojiClick={(emoji) =>
                                  onEmojiClick(emoji, { setFieldValue, values })
                                }
                                width={300}
                                height={400}
                                theme="auto"
                                skinTonesDisabled={true}
                                searchDisabled={true}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full flex flex-col space-y-3">
                        <Field
                          as="input"
                          name="title"
                          placeholder="عنوان"
                          variant="borderless"
                          size="large"
                          className="placeholder:text-gray border-b border-borderGray pb-2 outline-none"
                        />
                        <Field
                          as="textarea"
                          name="describe"
                          rows={1}
                          placeholder="نظر خود را وارد کنید"
                          maxLength={100}
                          variant="borderless"
                          className="placeholder:text-gray outline-none"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          )}

          {open && <Provider commentId={id} newsId={newsId} />}
        </div>
      </div>
    </div>
  );
};

export default Item;
