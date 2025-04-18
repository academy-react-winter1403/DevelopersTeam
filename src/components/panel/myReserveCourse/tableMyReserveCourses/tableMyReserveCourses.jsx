import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: " ",
    dataIndex: "img",
    key: "img",
  },
  {
    title: "نام دوره",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "اساتید دوره",
    dataIndex: "teacher",
    key: "teacher",
    ellipsis: {
      showTitle: false,
    },
    width: 200,
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
    title: "زمان رزرو",
    dataIndex: "reserveDate",
    key: "reserveDate",
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
    title: "وضعیت ثبت نام",
    dataIndex: "register",
    key: "register",
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

    width: 100,
  },
];

const TableMyReserveCourses = ({ data }) => (
  <Table columns={columns} dataSource={data} style={{ color: "#000" }} />
);
export default TableMyReserveCourses;
