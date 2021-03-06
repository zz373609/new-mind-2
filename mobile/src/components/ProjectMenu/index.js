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
      <div style={{ verticalAlign: 'middle', width: '300px', height: '150px', minWidth: 218, minHeight: 112, background: 'rgba(0,0,0,0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {
          product.map((item, index) => {
            return <Project key={index} index={index} item={item} hidden={hidden} history={history} language={language} />
          })
        }
      </div>
    </div>
  }
}

const Project = ({ item, history, hidden, language, index }) => {
  return <div onClick={(e) => {
    e.stopPropagation()
    history.push({
      pathname: item.location
    })
    hidden()
  }}
    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', cursor: 'pointer', width: '40%', marginTop: '7px' }}
    className={styles.project}
  >
    <div style={index === 0 ? {
      height: '80px',
      width: '80px',
      borderRadius: '50%',
      background: '#f1f2f3',
      position: 'relative'
    } : {
        height: '80px',
        width: '80px',
        borderRadius: '50%',
        background: '#f1f2f3',
        position: 'relative',
        marginLeft: '18px'
      }} >
      <div style={{
        height: '80px',
        width: '80px',
        borderRadius: '50%',
      }} className={styles.cover} />
      <img style={{ width: '100%', borderRadius: '50%' }} src={item.top_logo} />
    </div>
    <span style={index == 1 ? { width: '100%', textAlign: 'center', marginTop: '10px', fontSize: '10px', fontWeight: '300', marginLeft: '18px', color: 'white' } :
      { width: '100%', textAlign: 'center', marginTop: '10px', fontSize: '10px', fontWeight: '300', color: 'white' }
    }>{item.title[language]}</span>
  </div>
}

ProjectMenu.propTypes = {
  history: propTypes.object
}
export default ProjectMenu
