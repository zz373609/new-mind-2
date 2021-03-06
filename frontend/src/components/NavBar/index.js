import React, { Component } from 'react'
import { ProjectMenu } from '../../components'
import styles from './index.scss'
import propTypes from 'prop-types'
import { Input, Icon } from 'antd'
import './index.css'
const Search = Input.Search;

class NavBar extends Component {
  render() {
    const { history, dispatch, homepage, diff, product } = this.props
    const { language, navIndex } = homepage
    const links = [
      { link: '/', value_zh: '主页', value_en: 'HOME' },
      { link: window.location.pathname, value_zh: '项目', value_en: 'PROJECT' },
      { link: '/column/articles', value_zh: '专栏', value_en: 'COLUMN' },
      { link: '/about', value_zh: '关于', value_en: 'ABOUT' },
      { link: '/contact', value_zh: '联系我们', value_en: 'CONTACT' }
    ]
    return (<nav className={styles['nav-wrap']} style={{ backgroundColor: diff.background }}>
      <div className={styles['nav-mid']} style={{ cursor: 'pointer' }}>
        <div className={styles['main-logo']} onClick={() => {
          window.location.href = '/'
        }}>
          <img src={diff.logo} style={{ width: '60%', height: '52%', marginRight:'14px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '60%' }}>
          <ul style={{ margin: 0, padding: 0, display: 'flex' }}>
            {links.map((i, index) => {
              return (
                <li
                  key={index}
                  className={styles['link-item']}
                  style={{ color: diff.color }}
                  onMouseOver={() => {
                    dispatch({
                      type: 'homepage/updateState',
                      payload: {
                        key: 'navIndex',
                        value: index
                      }
                    })
                    if (i.value_zh === '项目') {
                      dispatch({
                        type: 'homepage/updateState',
                        payload: {
                          key: 'showProjectMenu',
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
                    }
                  }}
                  onClick={() => {
                    if (i.value_zh != '项目') {
                      document.body.scrollTop = 0
                      document.documentElement.scrollTop = 0
                    }
                    if (i.value_zh === '项目') {
                      dispatch({
                        type: 'homepage/updateState',
                        payload: {
                          key: 'showProjectMenu',
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
                    }
                    history.push(i.link)
                  }}
                >
                  <span className={styles.language} style={index === navIndex ? {
                    borderBottom: diff.bottom,
                    color: diff.selectcolor,
                    fontWeight: diff.fontWeight
                  } : { borderBottom: 'none' }}>{language === 'zh' ? i.value_zh : i.value_en}</span>
                  {index === 1 && <ProjectMenu history={history}
                    language={homepage.language}
                    product={product}
                    key='projectmenu'
                    visible={homepage.showProjectMenu}
                    hidden={() => {
                      dispatch({
                        type: 'homepage/updateState',
                        payload: {
                          key: 'showProjectMenu',
                          value: false
                        }
                      })
                    }}
                  />}
                </li>
              )
            })}
          </ul>
        </div>
        <Input style={{ width: '120px', backgroundColor: 'rgab(225,225,225,0.1) !important' }} size='small' className={styles.inp} prefix={<Icon type='search' />} />
        <span
          onClick={() => {
            dispatch({
              type: 'homepage/updateState',
              payload: {
                key: 'language',
                value: language === 'zh' ? 'en' : 'zh'
              }
            })
            history.push({
              search: `language=${language === 'zh' ? 'en' : 'zh'}`
            })
          }}
          style={{
            width: '5%',
            cursor: 'pointer',
            color: diff.color,
            fontSize: 12
          }}>{language === 'zh' ? 'EN' : '中文'}</span>
      </div>
    </nav>)
  }
}
NavBar.propTypes = {
  history: propTypes.object,
  dispatch: propTypes.func,
  homepage: propTypes.object
}
export default NavBar
