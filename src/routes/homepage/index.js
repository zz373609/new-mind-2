import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { TopBanner, BottomNav } from '../../components'
import './style/index.css'
import styles from './style/index.scss'

@connect(state => ({
  homepage: state.homepage,
  loading: state.loading
}))
class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { homepage, loading, history } = this.props
    return <div style={{ width: '100vw', minWidth: '1024px', margin: '0 auto' }}>
      <header style={{ width: '100%' }}>
        <TopBanner />
      </header>
      <main style={{ width: '65.625vw', border: '1px solid', margin: '0 auto' }}>
        <div style={{ margin: '100px 118px', height: 2000, border: '1px solid' }}>展示页</div>
      </main>
      <footer style={{ width: '100%', border: '1px solid' }}>
        <BottomNav />
      </footer>
    </div>
  }
}

HomePage.propTypes = {
  homepage: PropTypes.object,
  loading: PropTypes.object
}

export default HomePage
