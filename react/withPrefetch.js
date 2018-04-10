import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function withPrefetch() {
  return WrappedComponent => {
    class WithPrefetchWrapper extends Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            prefetch={this.context.prefetchPage}
          />
        )
      }
    }

    WithPrefetchWrapper.contextTypes = {
      prefetchPage: PropTypes.func,
    }

    return WithPrefetchWrapper
  }
}
