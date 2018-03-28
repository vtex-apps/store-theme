import React, { Component } from 'react'
import { ExtensionPoint } from 'render'
import Footer from './Footer'
import Header from './Header'

// eslint-disable-next-line
export default class HomePage extends Component {
  render() {
    return (
      <div className="w-100 h-100">
        <Header name="Dreamstore" />
        <ExtensionPoint id="carousel" />
        <ExtensionPoint id="banner" />
        <ExtensionPoint id="shelf" />
        <Footer />
      </div>
    )
  }
}
