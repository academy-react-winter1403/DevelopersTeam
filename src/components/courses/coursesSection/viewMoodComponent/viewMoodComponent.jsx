import React, { useState, useEffect } from "react";
import CourseCard from "../../../common/course-card/courseCard";
import GridCourseCard from "../../gridCourseCard/gridCourseCard";
import ComparisonTable from "./../../../common/course-card/ComparisonTable ";
import { GrClose } from "react-icons/gr";

const ViewMoodComponent = ({ data, viewMode }) => {
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (compareList.length === 2) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [compareList]);

  const handleToggleCompare = (courseId) => {
    setCompareList((prev) => {
      if (prev.includes(courseId)) {
        return prev.filter((id) => id !== courseId);
      } else if (prev.length < 2) {
        return [...prev, courseId];
      } else {
        return prev;
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCompareList([]);
  };

  const selectedCourses = data?.courseFilterDtos?.filter((item) =>
    compareList.includes(item.courseId)
  );

  return (
    <div>
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
              isSelected={compareList.includes(item.courseId)}
              onToggleCompare={() => handleToggleCompare(item.courseId)}
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
              isSelected={compareList.includes(item.courseId)}
              onToggleCompare={() => handleToggleCompare(item.courseId)}
            />
          )
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <button
              className=" cursor-pointer float-right"
              onClick={handleCloseModal}
            >
              <GrClose />
            </button>
            <ComparisonTable courses={selectedCourses} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMoodComponent;
