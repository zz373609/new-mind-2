import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

@connect(state => ({
  loading: state.loading
}))
class CMS extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { history } = this.props
    return <div style={{ margin: '0 auto', background: 'white' }}>
      <Tabs>
        <TabPane tab='文章' key='1'>

        </TabPane>
        <TabPane tab='音乐' key='2'>

        </TabPane>
        <TabPane tab='商品' key='3'>

        </TabPane>
      </Tabs>
    </div>
  }
}

CMS.propTypes = {
  history: PropTypes.object
}
export default CMS
