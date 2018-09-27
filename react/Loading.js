import React, { Component } from 'react'
import { Spinner } from 'vtex.styleguide'

const DEFAULT_SCROLL_OPTIONS = { top: 0, left: 0 }

const style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '100px',
  width: '100%',
}

export default class Loading extends Component {
  componentDidMount() {
    let scrollOptions = DEFAULT_SCROLL_OPTIONS
    try {
      scrollOptions = window.browserHistory.location.state.scrollOptions || DEFAULT_SCROLL_OPTIONS
    } catch (e) {}
    setTimeout(() => window.scrollTo(scrollOptions), 0)
  }

  render() {
    return (
      <div style={style}>
        <Spinner />
      </div>
    )
  }
}
