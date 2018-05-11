import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import WrappedSpinner from './WrappedSpinner'
import productsQuery from '../queries/productsQuery.gql'

import { ExtensionPoint } from 'render'

class GalleryWrapper extends Component {
  render() {
    const { query, data } = this.props
    const loading = data.loading
    console.log(data.products)

    return (
      <div>
        {loading ? (
          <WrappedSpinner />
        ) : (
          <div className="w-100">
            <ExtensionPoint
              id="gallery"
              search={query}
              products={data.products}
            />
          </div>
        )}
      </div>
    )
  }
}

GalleryWrapper.defaultProps = {
  query: 'lg',
}

GalleryWrapper.propTypes = {
  query: PropTypes.string.isRequired,
  /** Graphql data response. */
  data: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        productId: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categories: PropTypes.array,
        link: PropTypes.string,
        linkText: PropTypes.string.isRequired,
        brand: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            itemId: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            referenceId: PropTypes.arrayOf(
              PropTypes.shape({
                Value: PropTypes.string.isRequired,
              }),
            ),
            images: PropTypes.arrayOf(
              PropTypes.shape({
                imageUrl: PropTypes.string.isRequired,
                imageTag: PropTypes.string.isRequired,
              }),
            ).isRequired,
            sellers: PropTypes.arrayOf(
              PropTypes.shape({
                commertialOffer: PropTypes.shape({
                  Price: PropTypes.number.isRequired,
                  ListPrice: PropTypes.number.isRequired,
                }).isRequired,
              }),
            ).isRequired,
          }),
        ).isRequired,
      }),
    ),
    loading: PropTypes.bool.isRequired,
  }),
}

const options = {
  options: ({
    category,
    collection,
    orderBy,
    maxItems = 20,
    query = 'lg',
  }) => ({
    variables: {
      category,
      query,
      collection,
      specificationFilters: [],
      orderBy,
      from: 0,
      to: maxItems - 1,
    },
    ssr: false,
  }),
}

const GalleryWrapperWithData = graphql(productsQuery, options)(GalleryWrapper)

export default GalleryWrapperWithData
