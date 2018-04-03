import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from './components/Footer'
import Header from './components/Header'

export default class StoreTemplate extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <div className="mt10">
          <Footer />
        </div>
      </div>
    )
  }
}
