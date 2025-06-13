import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuestionBox from "./testSection/questionBox";

const Test = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const { data } = useQuery({
    queryKey: ["tests", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://taha-sepehr.liara.run/Exam/exam/${id}`
      );
      return res.data;
    },
  });

  const tests = data?.data.tests;
  const totalTime = data?.data.time ? parseInt(data.data.time) : 0;

  useEffect(() => {
    if (show && totalTime > 0) {
      setTimeLeft(totalTime * 60);
      setTimerActive(true);
    }
  }, [show, totalTime]);

  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timeLeft, timerActive]);

  const handleStart = () => {
    setShow(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnswers({
      ...answers,
      [tests[currentQuestionIndex].id]: option,
    });
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setSelectedOption(answers[tests[currentQuestionIndex - 1].id] || null);
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div>
      {!tests || tests.length === 0 ? (
        <div className="w-full h-14 mt-6 px-5 bg-white rounded-3xl flex justify-between items-center">
          <div>
            <span className="text-navyBlue">تستی وجود ندارد !</span>
          </div>
        </div>
      ) : !show ? (
        <div className="w-full h-14 mt-6 px-5 bg-white rounded-3xl flex justify-between items-center">
          <div>
            <span className="text-navyBlue">{data?.data?.title || "-"}</span>
          </div>
          <div className="flex space-x-8 items-center w-auto">
            <span className="">{data?.data?.time || "-"} دقیقه</span>
            <button
              onClick={handleStart}
              className="flex w-28 h-8 cursor-pointer text-white items-center bg-navyBlue dark:bg-gray-700 rounded-full justify-center"
            >
              شروع آزمون
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-navyBlue">
              {data?.data?.title}
            </h2>
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full">
              زمان باقیمانده: {formatTime(timeLeft)}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <span>
                سوال {currentQuestionIndex + 1} از {tests?.length}
              </span>
            </div>
          </div>

          <QuestionBox
            tests={tests}
            selectedOption={selectedOption}
            currentQuestionIndex={currentQuestionIndex}
            handlePrevQuestion={handlePrevQuestion}
            handleNextQuestion={handleNextQuestion}
            handleOptionSelect={handleOptionSelect}
            id={id}
            answers={answers}
            timeLeft={timeLeft}
            setAnswers={setAnswers}
          />
        </div>
      )}
    </div>
  );
};

export default Test;
