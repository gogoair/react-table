import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ReactList from 'react-list'

export default class TbodyWithLazyLoad extends Component {
  constructor (props) {
    super(props)

    this.rowsRenderer = this.rowsRenderer.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
  }

  static propTypes = {
    makePageRow: PropTypes.func,
    pageRows: PropTypes.array,
    tBodyProps: PropTypes.object,
    rowMinWidth: PropTypes.number,
    dataLength: PropTypes.number,
    rowHeight: PropTypes.number,
    pageSize: PropTypes.number,
  }

  rowsRenderer (items, ref) {
    return (
      <div ref={ref}>
        {items.map((d, i) => this.props.makePageRow(d, i))}
      </div>
    )
  }

  rowRenderer (index, key) {
    return this.props.pageRows[index]
  }

  render () {
    const {
      tBodyProps,
      rowMinWidth,
      dataLength,
      rowHeight,
      pageSize,
    } = this.props

    return (
      <div style={{
        overflow: 'auto',
        flex: 'none',
        height: rowHeight * pageSize,
      }}>
        <div
          className={classnames(tBodyProps.className)}
          style={{
            ...tBodyProps.style,
            minWidth: `${rowMinWidth}px`,
            overflow: 'hidden'
          }}
          {...tBodyProps.rest}
        >
          <ReactList
            itemsRenderer={this.rowsRenderer}
            itemRenderer={this.rowRenderer}
            length={dataLength}
            type='uniform'
            useStaticSize
          />
        </div>
      </div>
    )
  }
}