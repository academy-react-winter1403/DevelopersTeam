import React, { useState, useEffect } from "react";
import CourseCard from "../../../common/course-card/courseCard";
import GridCourseCard from "../../gridCourseCard/gridCourseCard";
import ComparisonTable from "./../../../common/course-card/ComparisonTable ";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <div>
      <div className="flex flex-wrap justify-around space-y-5 p-2">
        {data?.courseFilterDtos?.map((item, index) =>
          viewMode === "list" ? (
            <motion.div
              key={item.courseId}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CourseCard
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
            </motion.div>
          ) : (
            <motion.div
              key={item.courseId}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="pl-6"
            >
              <GridCourseCard
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
            </motion.div>
          )
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <button
              className="cursor-pointer float-right"
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
