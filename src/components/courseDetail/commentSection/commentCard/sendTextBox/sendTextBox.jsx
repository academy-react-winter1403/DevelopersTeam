import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import React, { useState, useRef, useEffect } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import http from "./../../../../../core/services/interceptor";
import toast from "react-hot-toast";
import EmojiPicker from "emoji-picker-react";

const SendTextBox = ({ isOpen, courseId, commentId }) => {
  const queryClient = useQueryClient();
  const emojiPickerRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [activeField, setActiveField] = useState(null); // Track which field is active

  // Close picker when clicking outside
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
    const formData = new FormData();
    formData.append("CommentId", commentId);
    formData.append("CourseId", courseId);
    formData.append("Title", values.Title);
    formData.append("Describe", values.Describe);
    const res = await http.post(`/Course/AddReplyCourseComment`, formData);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: addCommentReply,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
      toast.success("نظرتان با موفقیت ثبت شد");
    },
    onError: (error) => {
      // console.log("dd", error);
      // if (error?.response.data.ErrorMessage) {
      // } else toast.error("ابتدا وارد شوید");
      toast.error(error?.response.message);
    },
  });

  const onEmojiClick = (emojiObject, { setFieldValue, values }) => {
    if (!activeField) return;

    setFieldValue(activeField, values[activeField] + emojiObject.emoji);
  };

  const handleFieldFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  return (
    <div>
      {!isOpen && (
        <div className="mt-3 sm:mt-4 h-auto rounded-3xl text-sm sm:text-md border border-[#3772FF] p-3 sm:p-6 flex gap-2">
          <div className="flex-1">
            <Formik
              onSubmit={mutate}
              initialValues={{
                Title: "",
                Describe: "",
              }}
            >
              {({ handleSubmit, setFieldValue, values }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="space-y-2 flex space-x-5 relative"
                >
                  <div className="flex space-x-5">
                    <button
                      type="submit"
                      className="border cursor-pointer border-navyBlue bg-navyBlue w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center"
                    >
                      <RiTelegram2Line className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </button>
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
                      name="Title"
                      placeholder="عنوان"
                      variant="borderless"
                      size="large"
                      className="placeholder:text-gray border-b border-borderGray pb-2 outline-none"
                      onFocus={() => handleFieldFocus("Title")}
                    />
                    <Field
                      as="textarea"
                      name="Describe"
                      rows={1}
                      placeholder="نظر خود را وارد کنید"
                      maxLength={100}
                      variant="borderless"
                      className="placeholder:text-gray outline-none"
                      onFocus={() => handleFieldFocus("Describe")}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendTextBox;
