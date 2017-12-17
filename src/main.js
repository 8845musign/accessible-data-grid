import React from 'react'
import ReactDOM from 'react-dom'

import Grid from './Grid'
import LinkFormatter from './Grid/formatters/Link'

const data = [
  {
    id: 'id1',
    name: {
      label: 'テスト太郎',
      href: 'https://abroller.tech/'
    },
    sex: '男',
    birth: '2011/11/09'
  },
  {
    id: 'id2',
    name: {
      label: 'テスト花子',
      href: 'https://abroller.tech/'
    },
    sex: '女',
    birth: '1988/12/06'
  },
  {
    id: 'id3',
    name: {
      label: 'テスト三郎',
      href: 'https://abroller.tech/'
    },
    sex: '男',
    birth: '2012/11/09'
  },
  {
    id: 'id4',
    name: {
      label: 'テス美',
      href: 'https://abroller.tech/'
    },
    sex: '女',
    birth: '1995/11/09'
  },
];

const columns = [
  { key: "name", label: "名前", formatter: LinkFormatter },
  { key: "sex", label: "性別", options: ["男", "女"] },
  { key: "birth", label: "生年月日" },
]

ReactDOM.render(
  <section>
    <h1 id="heading">サンプルグリッド</h1>
    <Grid ariaLabelledby="heading" data={data} columns={columns} />
  </section>,
  document.getElementById('app')
);