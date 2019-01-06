import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import styles from './style/index.scss'
import { Product } from '../../components'

@connect(state => state)
class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { history, match, homepage } = this.props
    const { language } = homepage
    return <div style={{
      width: '68.25%',
      margin: '0 auto',
      background: '#fff',
      padding: '86px 7.45%'
    }}>
      <div style={{
        borderBottom: '1px solid #ddd', marginBottom: 68, paddingBottom: 10
      }}>
        <Breadcrumb separator={<span style={{ fontSize: 10, fontWeight: 600 }}>&gt;</span>}>
          <Breadcrumb.Item>{<span style={{ fontSize: 10 }} className={styles[language]}>{language === 'zh' ? '项目' : 'PROJECT'}</span>}</Breadcrumb.Item>
          <Breadcrumb.Item>{<span style={{ fontSize: 10 }} className={styles[language]}>{match.params.id}</span>}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <Product />
      </div>
    </div>
  }
}

Project.propTypes = {
  history: PropTypes.object
}
export default Project
