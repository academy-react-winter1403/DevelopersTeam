import React from "react";
import { Table } from "antd";
import "./table.css"; 
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
  },

  {
    title: "اساتید دوره",
    dataIndex: "teacher",
    key: "teacher",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " شروع دوره",
    dataIndex: "date",
    key: "date",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "قیمت دوره",
    dataIndex: "price",
    key: "price",
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

const TableBody = ({ data }) => (
  <Table columns={columns} dataSource={data} style={{ color: "#000" }}   className="custom-ant-table" />
);
export default TableBody;
