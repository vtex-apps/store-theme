import React, { Component } from 'react'
import { ExtensionPoint } from 'render'
import Footer from './components/Footer'
import Header from './components/Header'

export default class HomePage extends Component {
  render() {
    return (
      <div className="w-100 h-100">
        <Header />
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
