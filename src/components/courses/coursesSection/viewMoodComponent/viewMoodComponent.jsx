import React, { useState, useEffect } from "react";
import CourseCard from "../../../common/course-card/courseCard";
import GridCourseCard from "../../gridCourseCard/gridCourseCard";
import ComparisonTable from "./../../../common/course-card/ComparisonTable "; // جدول مقایسه

const ViewMoodComponent = ({ data, viewMode }) => {
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // مدیریت نمایش مدال

  // مدیریت غیرفعال‌سازی اسکرول هنگام باز بودن مدال
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // غیرفعال کردن اسکرول
    } else {
      document.body.style.overflow = "auto"; // بازگرداندن اسکرول
    }

    return () => {
      document.body.style.overflow = "auto"; // بازگشت به حالت نرمال در زمان پاکسازی
    };
  }, [isModalOpen]);

  // مدیریت باز شدن مدال بر اساس طول `compareList`
  useEffect(() => {
    if (compareList.length === 2) {
      setIsModalOpen(true); // باز کردن مدال به صورت خودکار
    } else {
      setIsModalOpen(false); // بسته شدن مدال
    }
  }, [compareList]);

  // کنترل انتخاب یا حذف مقایسه کارت
  const handleToggleCompare = (courseId) => {
    setCompareList((prev) => {
      if (prev.includes(courseId)) {
        return prev.filter((id) => id !== courseId); // حذف دوره از لیست مقایسه
      } else if (prev.length < 2) {
        return [...prev, courseId]; // اضافه کردن دوره جدید به لیست مقایسه
      } else {
        return prev; // هیچ تغییری ایجاد نکنید (حداکثر دو دوره قابل انتخاب است)
      }
    });
  };

  // مدیریت بستن مدال (و پاک کردن مقایسه‌ها)
  const handleCloseModal = () => {
    setIsModalOpen(false); // بستن مدال
    setCompareList([]); // پاک کردن انتخاب‌ها
  };

  // انتخاب دوره‌هایی که در مقایسه هستند
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

      {/* مدال مقایسه */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <button
              className="text-red-500 float-right"
              onClick={handleCloseModal} // بستن مدال و پاک کردن انتخاب‌ها
            >
              بستن
            </button>
            <ComparisonTable courses={selectedCourses} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMoodComponent;
