import React, { Component } from 'react'
import { ProjectMenu, BottomNav } from '../../components'
import styles from './index.scss'
class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: null
    }
  }
  render () {
    const { history, dispatch, homepage } = this.props
    const links = [
      { link: '/', value_zh: '主页' },
      { link: window.location.pathname, value_zh: '项目' },
      { link: '/column/articles', value_zh: '专栏' },
      { link: '/about', value_zh: '关于' },
      { link: '/contact', value_zh: '联系我们' }
    ]
    return (<nav style={{ height: 50, width: '100vw', background: 'rgba(0,0,0,0.1)', boxShadow: 'inset 0 0 10px #aaa', margin: '0 auto', position: 'fixed', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ margin: 0, padding: 0, display: 'flex' }}>
          {links.map((i, index) => {
            return (
              <li
                key={index}
                style={{
                  margin: '0 30px',
                  padding: 0,
                  listStyle: 'none',
                  cursor: 'pointer',
                  color: '#fff',
                  position: 'relative'
                }}
                onClick={() => {
                  this.setState({
                    activeIndex: index
                  })
                  if (i.value_zh === '项目') {
                    dispatch({
                      type: 'homepage/updateState',
                      payload: {
                        key: 'showProjectMenu',
                        value: true
                      }
                    })
                  } else if (i.value_zh === '音乐') {
                    dispatch({
                      type: 'homepage/updateState',
                      payload: {
                        key: 'showMusicPlayer',
                        value: true
                      }
                    })
                  } else {
                    dispatch({
                      type: 'homepage/updateState',
                      payload: {
                        key: 'showProjectMenu',
                        value: false
                      }
                    })
                    dispatch({
                      type: 'homepage/updateState',
                      payload: {
                        key: 'showMusicPlayer',
                        value: false
                      }
                    })
                  }
                  history.push(i.link)
                }}
              >
                <span style={{
                  fontSize: 12, fontWeight: 300, display: 'inline-block', padding: '14px 0',
                  borderBottom: index === this.state.activeIndex ? '2px solid #fff' : 'none'
                }}>{i.value_zh}</span>
                {index === 1 && <ProjectMenu history={history} key='projectmenu' visible={homepage.showProjectMenu} />}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>)
  }
}
export default NavBar
