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
    dataIndex: 'desc',
    key: 'desc',
    width: 250,
  },
  {
    title: 'اساتید دوره',
    dataIndex: 'teacher',
    key: 'teacher',
    ellipsis: {
      showTitle: false,
    },

  },
  {
    title: 'تاریخ برگزاری',
    dataIndex: 'date',
    key: 'date',
    ellipsis: {
      showTitle: false,
    },

  },
  {
    title: 'قیمت دوره',
    dataIndex: 'price',
    key: 'price',
    ellipsis: {
      showTitle: false,
    },

  },
  {
    title: ' ',
    dataIndex: 'eye',
    key: 'eye',
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
const App = ({data}) => <Table columns={columns} dataSource={data} style={{color:'#000'}} />;
export default App;