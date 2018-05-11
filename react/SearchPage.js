import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryWrapper from './components/GalleryWrapper'

export default class SearchPage extends Component {
  render() {
    return <GalleryWrapper query={this.props.params.term} />
  }
}

SearchPage.propTypes = {
  params: PropTypes.shape({
    term: PropTypes.string.isRequired,
  }),
}
