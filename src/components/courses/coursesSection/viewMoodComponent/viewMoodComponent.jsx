import React from "react";
import CourseCard from "../../../common/course-card/courseCard";
import GridCourseCard from "../../gridCourseCard/gridCourseCard";

const ViewMoodComponent = ({ data, viewMode }) => {
  return (
    <div className="flex flex-wrap justify-evenly space-y-5 p-2 ">
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
          />
        )
      )}
    </div>
  );
};

export default ViewMoodComponent;
