import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: " ",
    dataIndex: "img",
    key: "img",
  },
  {
    title: " عنوان",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
   {
    title: "توضیحات",
    dataIndex: "describe",
    key: "describe",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " تاریخ شروع ",
    dataIndex: "date",
    key: "date",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " ساعت شروع ",
    dataIndex: "clock",
    key: "date",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "سطح ",
    dataIndex: "lev",
    key: "lev",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "میانگین ",
    dataIndex: "average",
    key: "average",
    ellipsis: {
      showTitle: false,
    },
  },
 
 
  {
    title: " حذف",
    dataIndex: "delet",
    key: "delet",
    ellipsis: {
      showTitle: false,
    },

    width: 130,
  },
];

const ColumnExam = ({ data, totalCount, pageNum, setPageNum, itemPerPage }) => (
  <Table
    pagination={{
      total: totalCount,
      current: pageNum,
      pageSize: itemPerPage,
      onChange: setPageNum,
    }}
    columns={columns}
    dataSource={data}
    style={{ color: "#000" }}
    rowHoverable={false}
  />
);
export default ColumnExam;
