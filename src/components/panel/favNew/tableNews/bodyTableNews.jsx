import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: " ",
    dataIndex: "img",
    key: "img",
    width: 150,
  },
  {
    title: "نام دوره",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: 150,
    ellipsis: {
      showTitle: false,
    },
  },

  {
    title: " درباره مقاله",
    dataIndex: "desc",
    key: "desc",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "منتشر کننده",
    dataIndex: "teacher",
    key: "teacher",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " تاریخ انتشار",
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

    width: 150,
  },
];

const BodyTableNews = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    style={{ color: "#000" }}
    rowHoverable={false}
  />
);
export default BodyTableNews;
