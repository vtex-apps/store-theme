import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QueryString from 'query-string'
import { graphql } from 'react-apollo'
import { ExtensionPoint } from 'render'

export default class GalleryWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = this.getSearchParamsFromUrl()
  }

  getSearchParamsFromUrl() {
    const query = window.location && window.location.pathname.slice(1, -2)
    const queryParams = window.location && QueryString.parse(window.location.search)
    return {
      query,
      map: queryParams && queryParams.map,
      orderBy: queryParams && queryParams.O,
      page: parseInt((queryParams && queryParams.page) || 1),
    }
  }

  componentWillReceiveProps() {
    this.setState(this.getSearchParamsFromUrl())
  }
  
  render() {
    const { query, map, orderBy, page } = this.state
    return (
      <ExtensionPoint id="search-result" pathName={query} map={map} orderBy={orderBy} page={page} />
    )
  }
}

GalleryWrapper.propTypes = {
  query: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
}
