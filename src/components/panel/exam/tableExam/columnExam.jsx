import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: " ",
    dataIndex: "img",
    key: "img",
  },
  {
    title: "آیدی کاربر",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: " حاضرین",
    dataIndex: "user",
    key: "user",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " ساعت شروع ",
    dataIndex: "date",
    key: "date",
    ellipsis: {
      showTitle: false,
    },
  },
 
 
  {
    title: " ",
    dataIndex: "eye",
    key: "eye",
    ellipsis: {
      showTitle: false,
    },

    width: 80,
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
