import React, { Component } from 'react'
import propTypes from 'prop-types'
class ProjectMenu extends Component {
  render () {
    const { history, visible } = this.props
    return <div key='projectmenu' style={{
      position: 'absolute',
      top: '54px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: visible ? 'block' : 'none'
    }}>
      <div style={{ verticalAlign: 'middle', width: '21.36vw', height: '10.96vw', minWidth: 218, minHeight: 112, background: 'rgba(0,0,0,0.3)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div onClick={() => {
          history.push({
            pathname: '/project/seat'
          })
        }} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', cursor: 'pointer' }}>
          <div style={{ height: '7.6vw', width: '7.6vw', minHeight: '77.82px', minWidth: '77.82px', borderRadius: '50%', background: '#f1f2f3' }} />
          <span>冥想坐具</span>
        </div>
        <div onClick={() => {
          history.push({
            pathname: '/project/desk'
          })
        }} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', cursor: 'pointer' }}>
          <div style={{ height: '7.6vw', width: '7.6vw', minHeight: '77.82px', minWidth: '77.82px', borderRadius: '50%', background: '#f1f2f3' }} />
          <span>冥想桌</span>
        </div>
      </div>
    </div>
  }
}
ProjectMenu.propTypes = {
  history: propTypes.object
}
export default ProjectMenu
