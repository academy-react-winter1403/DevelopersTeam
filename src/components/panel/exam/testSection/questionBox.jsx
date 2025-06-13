import { useMutation } from "@tanstack/react-query";
import { Spin } from "antd";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate, useNavigation } from "react-router-dom";

const QuestionBox = ({
  tests,
  currentQuestionIndex,
  selectedOption,
  handlePrevQuestion,
  handleNextQuestion,
  handleOptionSelect,
  id,
  answers,
  timeLeft,
}) => {
  const navigate = useNavigate();
  const { mutate: submitTest, isLoading } = useMutation({
    mutationFn: async () => {
      const submissionData = {
        UserId: "1",
        Time: formatTimeForSubmission(timeLeft),
        examId: id,
        tests: Object.keys(answers).map((questionId) => ({
          id: questionId,
          option: answers[questionId],
        })),
      };

      const response = await axios.post(
        `https://taha-sepehr.liara.run/Exam/add`,
        submissionData
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("ثبت شد");
      navigate("/panel/exampage");
    },
  });

  const formatTimeForSubmission = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== tests.length) {
      return;
    }
    submitTest();
  };

  if (!tests || tests.length === 0) {
    return "ازمونی ثبت نشده";
  }

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="mb-8">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-4">
                {tests[currentQuestionIndex].question}
              </h3>
              <div className="space-y-3">
                {["op1", "op2", "op3", "op4"].map((op) => (
                  <div
                    key={op}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedOption === tests[currentQuestionIndex][op]
                        ? "bg-navyBlue text-white border-navyBlue"
                        : "hover:bg-gray-100 border-gray-200"
                    }`}
                    onClick={() =>
                      handleOptionSelect(tests[currentQuestionIndex][op])
                    }
                  >
                    {tests[currentQuestionIndex][op]}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentQuestionIndex === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                قبلی
              </button>
              {currentQuestionIndex < tests.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-navyBlue text-white rounded-lg hover:bg-blue-700"
                >
                  بعدی
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-navyBlue text-white rounded-lg  "
                  disabled={isLoading}
                >
                  {isLoading ? <Spin /> : "اتمام آزمون"}
                </button>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionBox;
