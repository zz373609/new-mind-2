import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/index.css'
import styles from './style/index.scss'
import { Table } from 'antd'

class NewTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { columns, dataSource } = this.props
    return <div className={styles.NewTable}>
      <Table
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  }
}

NewTable.propTypes = {
}

export default NewTable
