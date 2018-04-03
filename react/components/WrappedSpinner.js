import React, { Component } from 'react'
import Spinner from '@vtex/styleguide/lib/Spinner'
import spinnerStyle from './spinner.css'

export default class WrappedSpinner extends Component {
  render() {
    return (
      <div className="w-100 flex justify-center">
        <div className="w-10">
          <Spinner style={spinnerStyle} />
        </div>
      </div>
    )
  }
}
