import React, { Component } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line
export default class SearchPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    return (
      <div className="pa4 ph7 pt0 georgia mw8 center f4 h-100">
        <p>{JSON.stringify(this.props)}</p>
      </div>
    )
  }
}
