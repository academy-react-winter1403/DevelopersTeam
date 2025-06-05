import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "ساعت شروع ",
    dataIndex: "sTime",
    key: "sTime",
  },

  {
    title: " ساعت پایان",
    dataIndex: "eTime",
    key: "eTime",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "تعداد جلسات ",
    dataIndex: "week",
    key: "week",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "تاریخ شروع" ,
    dataIndex: "start",
    key: "start",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " تاریخ پایان" ,
    dataIndex: "end",
    key: "end",
    ellipsis: {
      showTitle: false,
    },
  },
  // {
  //   title: "وضعیت ",
  //   dataIndex: "status",
  //   key: "status",
  //   ellipsis: {
  //     showTitle: false,
  //   },
  //   width: 150,
  // },
  
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
