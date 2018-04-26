import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class THead extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scrollOffset: 0
    }
    this.setScroll = this.setScroll.bind(this)
  }

  static propTypes = {
    lazyLoadUniqueID: PropTypes.any.isRequired,
  }

  componentDidMount () {
    const eventName = `tbodyscroll${this.props.lazyLoadUniqueID}`
    document.addEventListener(eventName, this.setScroll)
  }

  componentWillUnmount () {
    const eventName = `tbodyscroll${this.props.lazyLoadUniqueID}`
    document.removeEventListener(eventName, this.setScroll)
  }

  setScroll (event) {
    const scrollOffset = event.detail.horizontalScroll - 2 * event.detail.horizontalScroll
    this.setState({ scrollOffset })
  }

  render () {
    const { children, className, style, lazyLoadUniqueID, ...rest } = this.props

    return (
      <div
        className={classnames('rt-thead', className)}
        style={{ ...style, marginLeft: this.state.scrollOffset }}
        {...rest}
      >
        {children}
      </div>
    )
  }
}