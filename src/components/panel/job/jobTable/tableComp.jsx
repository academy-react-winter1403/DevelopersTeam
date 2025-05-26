import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "نام شغل",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "درباره شغل",
    dataIndex: "about",
    key: "about",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "نام شرکت",
    dataIndex: "companyTitle",
    key: "companyTitle",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "شروع",
    dataIndex: "start",
    key: "start",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "پایان",
    dataIndex: "end",
    key: "end",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "وضعیت کار",
    dataIndex: "status",
    key: "status",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
  },
  {
    title: "ویرایش",
    dataIndex: "edit",
    key: "edit",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
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
