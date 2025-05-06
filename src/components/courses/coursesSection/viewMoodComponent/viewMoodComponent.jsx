import React, { useState } from "react";
import CourseCard from "../../../common/course-card/courseCard";
import GridCourseCard from "../../gridCourseCard/gridCourseCard";
import ComparisonTable from "./../../../common/course-card/ComparisonTable "; // جدول مقایسه

const ViewMoodComponent = ({ data, viewMode }) => {
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // مدیریت نمایش مدال

  const handleToggleCompare = (courseId) => {
    setCompareList((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId) // حذف دوره از لیست
        : prev.length < 2 // محدودیت 2 آیتم مقایسه
        ? [...prev, courseId]
        : prev // باقی‌ماندن به حالت فعلی
    );
  };

  const selectedCourses = data?.courseFilterDtos?.filter((item) =>
    compareList.includes(item.courseId)
  );

  return (
    <div>
      {/* نمایش کارت‌های دوره */}
      <div className="flex flex-wrap justify-evenly space-y-5 p-2">
        {data?.courseFilterDtos?.map((item, index) =>
          viewMode === "list" ? (
            <CourseCard
              key={index}
              title={item.title}
              img={item.tumbImageAddress}
              describe={item.describe}
              teacherName={item.teacherName}
              statusName={item.statusName}
              student={item.commandCount}
              cost={item.cost}
              likeCount={item.likeCount}
              dissLikeCount={item.dissLikeCount}
              lastUpdate={item.lastUpdate}
              id={item.courseId}
              levelName={item.levelName}
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikedId}
              currentUserDissLike={item.currentUserDissLike}
              keyMutate="courses"
              isSelected={compareList.includes(item.courseId)} // دوره انتخاب‌شده
              onToggleCompare={() => handleToggleCompare(item.courseId)} // مدیریت انتخاب
            />
          ) : (
            <GridCourseCard
              key={index}
              title={item.title}
              img={item.tumbImageAddress}
              describe={item.describe}
              teacherName={item.teacherName}
              statusName={item.statusName}
              student={item.commandCount}
              cost={item.cost}
              likeCount={item.likeCount}
              dissLikeCount={item.dissLikeCount}
              id={item.courseId}
              lastUpdate={item.lastUpdate}
              levelName={item.levelName}
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikedId}
              currentUserDissLike={item.currentUserDissLike}
              keyMutate="courses"
              isSelected={compareList.includes(item.courseId)} // دوره انتخاب‌شده
              onToggleCompare={() => handleToggleCompare(item.courseId)} // مدیریت انتخاب
            />
          )
        )}
      </div>

      {/* دکمه و مدال مقایسه */}
      {compareList.length === 2 && (
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsModalOpen(true)} // باز کردن مدال
          >
            نمایش مقایسه
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
                <button
                  className="text-red-500 float-right"
                  onClick={() => setIsModalOpen(false)} // بستن مدال
                >
                  بستن
                </button>
                <ComparisonTable courses={selectedCourses} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewMoodComponent;
