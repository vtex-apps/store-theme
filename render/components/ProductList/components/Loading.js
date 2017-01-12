import React, {Component} from 'react'
import {ShimmerLoading, TextLineLoading} from 'vtex.loading'

// eslint-disable-next-line
class Loading extends Component {
  render () {
    return (
      <div className="ph2">
        <ShimmerLoading
          style={{
            width: '100%',
            maxWidth: '380px',
            paddingBottom: '100%',
          }}
        />
        <div className="mt1">
          <TextLineLoading width="100" />
          <TextLineLoading width="90" />
        </div>
      </div>
    )
  }
}

export default Loading
