import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const term = this.props.params.term
    return (
      <div>
        {/* TODO - Add the searchbar app */}
        {/* <Shelf query={term} /> */}
      </div>
    )
  }
}
