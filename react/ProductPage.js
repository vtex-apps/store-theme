import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProductPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    return <div><p>{JSON.stringify(this.props)}</p></div>
  }
}
