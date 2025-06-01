import React from "react";
import PriceComponent from "../priceComponent/priceComponent";

const ComparisonTable = ({ courses }) => (
  <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden mx-auto mt-6 max-w-4xl">
    <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <h3 className="text-xl font-bold text-gray-800">جدول مقایسه دوره‌ها</h3>
      <p className="text-sm text-gray-600 mt-1">
        مشاهده تفاوت‌های دوره‌های انتخابی
      </p>
    </div>

    <div dir="rtl" className="overflow-x-auto">
      <table className="w-full text-right">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3 bg-gray-50 text-gray-700 font-semibold text-sm">
              نام دوره
            </th>
            {courses.map((course) => (
              <th
                key={course.courseId}
                className="px-6 py-3 bg-gray-50 text-gray-700 font-semibold text-sm min-w-[180px]"
              >
                <div className="flex flex-col items-center">
                  <span className="font-bold text-indigo-600">
                    {course.title}
                  </span>
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-16 h-16 object-cover rounded-md mt-2"
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              مدرس
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-teacher"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <div className="flex items-center justify-end">
                  <span className="ml-2">{course.teacherName}</span>
                  {course.teacherAvatar && (
                    <img
                      src={course.teacherAvatar}
                      alt={course.teacherName}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                </div>
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              سطح
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-level"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.levelName === "مبتدی"
                      ? "bg-blue-100 text-blue-800"
                      : course.levelName === "متوسط"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {course.levelName}
                </span>
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              وضعیت
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-status"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.statusName === "فعال"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {course.statusName}
                </span>
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              تعداد دانشجو
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-student"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <div className="flex items-center justify-start">
                  <svg
                    className="w-4 h-4 text-gray-400 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>{course.commandCount.toLocaleString()}</span>
                </div>
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              هزینه
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-cost"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <div className="flex items-center justify-start">
                  <PriceComponent cost={course.cost} />
                  <span className="text-xs text-gray-400 mr-1">تومان</span>
                </div>
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              تاریخ آپدیت
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-update"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {new Date(course.lastUpdate).toLocaleDateString("fa-IR")}
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
              توضیحات
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-desc"}
                className="px-6 py-4 text-sm text-gray-500"
              >
                <p className="line-clamp-2">{course.describe}</p>
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              لایک
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-like"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <div className="flex items-center justify-start">
                  <svg
                    className="w-4 h-4 text-red-500 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{course.likeCount.toLocaleString()}</span>
                </div>
              </td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
              دیس‌لایک
            </td>
            {courses.map((course) => (
              <td
                key={course.courseId + "-disslike"}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <div className="flex items-center justify-start">
                  <svg
                    className="w-4 h-4 text-gray-500 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{course.dissLikeCount.toLocaleString()}</span>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>

    <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-500">
      <p>برای مشاهده جزئیات بیشتر روی هر دوره کلیک کنید</p>
    </div>
  </div>
);

export default ComparisonTable;
