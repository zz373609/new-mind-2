import React, { Component } from 'react'
import styles from './index.scss'
class NavBar extends Component {
  render () {
    const { history } = this.props
    const links = [
      { link: '/', value: '主页' },
      { link: '/project', value: '项目' },
      { link: '/music', value: '音乐' },
      { link: '/column', value: '专栏' },
      { link: '/about', value: '关于' },
      { link: '/contact', value: '联系我们' }
    ]
    return (<nav style={{ height: 40, width: '100vw', border: '1px solid', background: 'rgba(0,0,0,0.1)', margin: '0 auto', position: 'fixed' }}>
      导航
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ margin: 0, padding: 0, display: 'flex' }}>
          {links.map((i, index) => {
            return (
              <li
                key={index}
                style={{ margin: '0 10px', padding: 0, listStyle: 'none', cursor: 'pointer' }}
                onClick={() => {
                  history.push(i.link)
                }}
              >{i.value}</li>
            )
          })}
        </ul>
      </div>
    </nav>)
  }
}
export default NavBar
