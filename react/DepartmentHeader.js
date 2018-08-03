import React, { Component, Fragment } from 'react'
import { ExtensionPoint } from 'render'

export default class DepartmentHeader extends Component {
  render() {
    return (
      <Fragment>
        <ExtensionPoint id="carousel" />
        <ExtensionPoint id="categories" />
      </Fragment>
    )
  }
}
