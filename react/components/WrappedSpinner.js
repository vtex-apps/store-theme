import React, { Component } from 'react'
import { Spinner } from 'vtex.styleguide'

export default class WrappedSpinner extends Component {
  render() {
    return (
      <div className="w-100 flex justify-center">
        <div className="w-10">
          <Spinner />
        </div>
      </div>
    )
  }
}
