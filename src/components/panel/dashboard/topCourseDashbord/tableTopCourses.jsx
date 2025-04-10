import React from 'react';
import { Table, Tooltip } from 'antd';
const columns = [
  {
    title: 'نام دوره',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'درباره دوره',
    dataIndex: 'age',
    key: 'age',
    width: 300,
  },
  {
    title: 'اساتید دوره',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: {
      showTitle: false,
    },

  },
  {
    title: 'تاریخ برگزاری',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: {
      showTitle: false,
    },

  },
  {
    title: 'قیمت دوره',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: {
      showTitle: false,
    },

  },
  {
    title: ' ',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: {
      showTitle: false,
    },

    width: 80,

  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park, Sydney No. 1 Lake Park',
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;