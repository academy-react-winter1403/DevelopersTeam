import React from "react";
import { Table } from "antd";
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
  {
    title: "وضعیت پرداخت",
    key: "accept",
    dataIndex: "accept",
  },
];

const TableComp = ({
  paymentData,
  pageNum,
  setPageNum,
  itemPerPage,
  totalCount,
}) => (
  <Table
  pagination={{
    total: totalCount,
    current: pageNum,
    pageSize: itemPerPage,
    onChange: setPageNum,
  }}
    columns={columns}
    dataSource={paymentData}
    rowHoverable={false}

  />
);
export default TableComp;
