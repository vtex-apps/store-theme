import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryWrapper from './components/GalleryWrapper'

export default class SearchPage extends Component {
  render() {
    return (
      <div className="vtex-dreamstore__container w-100 h-100">
        <GalleryWrapper query={this.props.params.term} />
      </div>
    )
  }
}

SearchPage.propTypes = {
  params: PropTypes.shape({
    term: PropTypes.string.isRequired,
  }),
}
