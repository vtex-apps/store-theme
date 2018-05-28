import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryWrapper from './components/GalleryWrapper'

export default class SearchPage extends Component {
  treatSearchTerm() {
    const { params: { term, term1, term2 } } = this.props

    let result = term
    if (term1) { result = `${result}/${term1}` }
    if (term2) { result = `${result}/${term2}` }

    return result
  }

  treatCategories() {
    const { params: { term, term1, term2 } } = this.props
    const result = []

    result.push(term)
    if (term1) { result.push(term1) }
    if (term2) { result.push(term) }

    return result
  }

  render() {
    const query = this.treatSearchTerm()
    const categories = this.treatCategories()

    return (
      <div className="vtex-dreamstore__container w-100 h-100">
        <GalleryWrapper query={query} categories={categories} />
      </div>
    )
  }
}

SearchPage.propTypes = {
  params: PropTypes.shape({
    term: PropTypes.string.isRequired,
    term1: PropTypes.string,
    term2: PropTypes.string,
  }),
}
