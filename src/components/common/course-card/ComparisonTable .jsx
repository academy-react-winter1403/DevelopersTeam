import React from "react";

const ComparisonTable = ({ courses }) => (
  <div className="rounded-lg border bg-white shadow-lg px-4 py-6 max-w-xl mx-auto mt-6">
    <h3 className="text-lg font-bold mb-4">جدول مقایسه دوره‌ها</h3>
    <table className="w-full text-center border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 bg-gray-100">ویژگی</th>
          {courses.map((course) => (
            <th key={course.courseId} className="border px-4 py-2 bg-gray-100">
              {course.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">مدرس</td>
          {courses.map((course) => (
            <td key={course.courseId + "-teacher"} className="border px-4 py-2">
              {course.teacherName}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">سطح</td>
          {courses.map((course) => (
            <td key={course.courseId + "-level"} className="border px-4 py-2">
              {course.levelName}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">وضعیت</td>
          {courses.map((course) => (
            <td key={course.courseId + "-status"} className="border px-4 py-2">
              {course.statusName}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">تعداد دانشجو</td>
          {courses.map((course) => (
            <td key={course.courseId + "-student"} className="border px-4 py-2">
              {course.commandCount}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">هزینه</td>
          {courses.map((course) => (
            <td key={course.courseId + "-cost"} className="border px-4 py-2">
              {course.cost}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">تاریخ آپدیت</td>
          {courses.map((course) => (
            <td key={course.courseId + "-update"} className="border px-4 py-2">
              {course.lastUpdate}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">توضیحات</td>
          {courses.map((course) => (
            <td key={course.courseId + "-desc"} className="border px-4 py-2">
              {course.describe}
            </td>
          ))}
        </tr>
        {/* ویژگی‌های دیگر مثل لایک و دیسلایک */}
        <tr>
          <td className="border px-4 py-2">لایک</td>
          {courses.map((course) => (
            <td key={course.courseId + "-like"} className="border px-4 py-2">
              {course.likeCount}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">دیس‌لایک</td>
          {courses.map((course) => (
            <td key={course.courseId + "-disslike"} className="border px-4 py-2">
              {course.dissLikeCount}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
