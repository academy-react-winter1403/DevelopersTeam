import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "نام دوره",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "عنوان",
    dataIndex: "type",
    key: "type",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "نظر",
    dataIndex: "insertTime",
    key: "insertTime",
    ellipsis: {
      showTitle: false,
    },
  },
];

const TableComp = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    style={{ color: "#000" }}
    rowHoverable={false}
  />
);
export default TableComp;
