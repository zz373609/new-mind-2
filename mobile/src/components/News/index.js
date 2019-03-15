import React, { Component } from 'react'
import styles from './index.scss'

class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeFilter: 'All'
    }
  }
  render () {
    let { newses } = this.props
    const { timeFilter } = this.state
    let times = newses.map(i => i.date.substring(0,4)).sort((a,b)=>{
      return a - b
    })
    times.unshift('All')
    console.log(times)
    if (timeFilter !== 'All') {
      newses = newses.filter(i => i.date.substring(0,4).indexOf(timeFilter) > -1)
    }
    return (<div style={{ width: '68.25%', margin: '0 auto' }}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        {times.map((i, index) => (
          <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
            <span style={{ fontFamily: 'Helvetical', fontSize: 12, cursor: 'pointer' }}
              onClick={() => {
                this.setState({
                  timeFilter: i
                })
              }}>{i}</span>
            {index !== times.length - 1 && <span style={{ fontSize: 8, lineHeight: '8px', margin: '0 4px' }}>/</span>}
          </div>
        ))}
      </div>
      <div>
        {newses.map((i, index) => (
          <div style={{ borderBottom: '1px solid #ddd', marginTop: '30px' }} key={index}>
            <img style={{ width: '100%' }} src={i.cover} />
            <div style={{ fontFamily: 'Microsoft Yahei', fontSize: '12px', color: '#333', margin: '10px 0' }}>{i.content}</div>
          </div>
        ))}
      </div>
    </div>)
  }
}
export default News
