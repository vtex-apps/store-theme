import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryWrapper from './components/GalleryWrapper'

export default class SearchPage extends Component {
  treatSearchTerm(term) {
    let result = term

    if (result.includes('-')) {
      result = result.replace('-', '/')
    }

    result = result.split(',')

    return result[result.length - 1]
  }

  render() {
    const {
      params: { term },
    } = this.props

    const query = this.treatSearchTerm(term)

    return (
      <div className="vtex-dreamstore__container w-100 h-100">
        <GalleryWrapper query={query} categories={term.split(',')} />
      </div>
    )
  }
}

SearchPage.propTypes = {
  params: PropTypes.shape({
    term: PropTypes.string.isRequired,
  }),
}
