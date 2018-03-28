import React, { Component } from 'react'
import { ExtensionPoint } from 'render'
import Footer from './Footer'
import Header from './Header'

const { account } = global.__RUNTIME__

// eslint-disable-next-line
export default class HomePage extends Component {
  render() {
    return (
      <div className="w-100 h-100">
        <Header name={account} />
        <ExtensionPoint id="carousel" />
        <ExtensionPoint id="banner" />
        <ExtensionPoint id="shelf" />
        <div className="mt10">
          <Footer />
        </div>
      </div>
    )
  }
}
