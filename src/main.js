import React from 'react'
import ReactDOM from 'react-dom'

import Grid from './Grid'

const data = [
  {
    id: 'id1',
    name: 'テスト太郎',
    sex: '男',
    birth: '2011/11/09'
  },
  {
    id: 'id2',
    name: 'テスト花子',
    sex: '女',
    birth: '1988/12/06'
  },
  {
    id: 'id3',
    name: 'テスト三郎',
    sex: '男',
    birth: '2012/11/09'
  },
  {
    id: 'id4',
    name: 'テス美',
    sex: '女',
    birth: '1995/11/09'
  },
];

const columns = [
  { key: "name", label: "名前" },
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