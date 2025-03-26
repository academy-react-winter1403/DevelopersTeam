import React from "react";
import { Pagination } from "antd";

const PaginationSection = ({
  totalCount,
  pageNum,
  itemPerPage,
  setPageNum,
}) => {
  return (
    <div dir="ltr" className="p-5">
      <Pagination
        align="end"
        current={pageNum}
        pageSize={itemPerPage}
        onChange={setPageNum}
        total={totalCount}
        showSizeChanger={false}
        style={{ fontFamily: "yekan" }}
        showLessItems={true}   
        responsive={true}   
        hideOnSinglePage={true}  
      />
    </div>
  );
};

export default PaginationSection;