import React, { Component, Fragment } from 'react'
import { ExtensionPoint } from 'render'

export default class SimpleTemplate extends Component {
  render() {
    return (
      <Fragment>
        <ExtensionPoint id="top" />
        <ExtensionPoint id="middle" />
        <ExtensionPoint id="bottom" />
      </Fragment>
    )
  }
}
