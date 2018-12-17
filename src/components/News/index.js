import React, { Component } from 'react'
import styles from './index.scss'
import { mockNews } from './mock/mock.js'
let times = mockNews.map(i => i.time)
times.unshift('All')
class News extends Component {
  render () {
    return (<div style={{ width: '68.25%', margin: '0 auto' }}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        {times.map((i, index) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Helvetical', fontSize: 12, cursor: 'pointer' }}>{i}</span>
            {index !== times.length - 1 && <span style={{ fontSize: 8, lineHeight: '8px', margin: '0 4px' }}>/</span>}
          </div>
        ))}
      </div>
      <div>
        {mockNews.map((i, index) => (
          <div style={{ borderBottom: '1px solid #ddd', marginTop: '30px' }}>
            <img style={{ width: '100%' }} src={i.linkUrl} />
            <div style={{ fontFamily: 'Microsoft Yahei', fontSize: '12px', color: '#333', margin: '10px 0' }}>{i.title}</div>
          </div>
        ))}
      </div>
    </div>)
  }
}
export default News
