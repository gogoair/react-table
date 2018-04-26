import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ReactList from 'react-list'

export default class TbodyWithLazyLoad extends Component {
  constructor (props) {
    super(props)

    this.rowsRenderer = this.rowsRenderer.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
    this.trackScroll = this.trackScroll.bind(this)
  }

  static propTypes = {
    makePageRow: PropTypes.func,
    pageRows: PropTypes.array,
    tBodyProps: PropTypes.object,
    rowMinWidth: PropTypes.number,
    dataLength: PropTypes.number,
    rowHeight: PropTypes.number,
    pageSize: PropTypes.number,
    lazyLoadUniqueID: PropTypes.any.isRequired,
  }

  trackScroll (event) {
    const eventName = `tbodyscroll${this.props.lazyLoadUniqueID}`;
    const horizontalScrollEvent = new CustomEvent(eventName, {
      detail: {
        horizontalScroll: event.target.scrollLeft,
      },
    });

    document.dispatchEvent(horizontalScrollEvent);
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
      reactListProps,
    } = this.props

    return (
      <div
        style={{
          overflow: 'auto',
          flex: 'none',
          height: rowHeight * pageSize,
        }}
        onScroll={this.trackScroll}
      >
        <div
          className={classnames(tBodyProps.className, 'rt-tbody')}
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
            {...reactListProps}
          />
        </div>
      </div>
    )
  }
}