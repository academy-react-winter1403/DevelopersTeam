import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "نام دوره",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "تاریخ پرداخت",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "شماره پرداخت",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "مبلغ پرداختی",
    key: "payment",
    dataIndex: "payment",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const TableComp = () => <Table columns={columns} dataSource={data} />;
export default TableComp;
