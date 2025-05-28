import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "عنوان",
    dataIndex: "hwTitle",
    key: "hwTitle",
  },

  {
    title: "توضیحات",
    dataIndex: "hwDescribe",
    key: "hwDescribe",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "جلسه",
    dataIndex: "sessionTitle",
    key: "sessionTitle",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "نام گروه",
    dataIndex: "groupName",
    key: "groupName",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "تاریخ",
    dataIndex: "homeWorkDate",
    key: "homeWorkDate",
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
