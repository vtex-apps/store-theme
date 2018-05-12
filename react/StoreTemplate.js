import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ExtensionPoint } from 'render'

import Header from './components/Header'

export default class StoreTemplate extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div>
        <Header />
        <div className="z-1">{this.props.children}</div>
        <ExtensionPoint id="footer" />
      </div>
    )
  }
}
