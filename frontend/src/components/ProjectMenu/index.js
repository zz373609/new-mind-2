import React, { Component } from 'react'
import propTypes from 'prop-types'
import styles from './index.scss'

class ProjectMenu extends Component {
  render() {
    const { history, visible, hidden, product, language } = this.props
    return <div key='projectmenu' style={{
      position: 'absolute',
      top: '54px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: visible ? 'block' : 'none'
    }}>
      <div style={{ verticalAlign: 'middle', width: '23.36vw', height: '10.96vw', minWidth: 218, minHeight: 112, background: 'rgba(0,0,0,0.3)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        {
          product.map((item, index) => {
            return <Project key={index} item={item} hidden={hidden} history={history} language={language} />
          })
        }
      </div>
    </div>
  }
}

const Project = ({ item, history, hidden, language }) => {
  return <div onClick={(e) => {
    e.stopPropagation()
    history.push({
      pathname: item.location
    })
    hidden()
  }}
    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', cursor: 'pointer', width: '50%' }}
    className={styles.project}
    >
    <div style={{
      height: '7.6vw',
      width: '7.6vw',
      borderRadius: '50%',
      background: '#f1f2f3',
      position: 'relative'
    }} >
      <div style={{
        height: '7.6vw',
        width: '7.6vw',
        borderRadius: '50%'
      }} className={styles.cover} />
      <img style={{ width: '100%', borderRadius: '50%', }} src={item.top_logo} />
    </div>
    <span style={{ width: '100%', textAlign: 'center' }}>{item.title[language]}</span>
  </div>
}

ProjectMenu.propTypes = {
  history: propTypes.object
}
export default ProjectMenu
