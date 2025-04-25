import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "نام دوره",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: "درباره دوره",
    dataIndex: "desc",
    key: "desc",
    width: 250,
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
    title: "تاریخ برگزاری",
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
    width: 80,
  },
];

const App = ({ data, totalCount, pageNum, setPageNum, itemPerPage }) => (
  <Table
    pagination={{
      total: totalCount,
      current: pageNum,
      pageSize: itemPerPage,
      onChange: setPageNum,
      total: totalCount,
    }}
    columns={columns}
    dataSource={data}
    style={{ color: "#000" }}
    rowHoverable={false}
    
  />
);
export default App;
