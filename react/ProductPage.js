import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { ExtensionPoint } from 'render'
import withPrefetch from './withPrefetch'
import productQuery from './queries/productQuery.gql'

import WrappedSpinner from './components/WrappedSpinner'

class ProductPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    data: PropTypes.object,
    prefetch: PropTypes.func,
  }

  state = {
    isModalOpen: false,
  }

  componentDidMount() {
    this.props.prefetch('store/home')
  }

  render() {
    const { data } = this.props
    const { loading, variables, product } = data

    return (
      <div>
        {loading ? (
          <WrappedSpinner />
        ) : (
          <div className="pv9-ns">
            <div className="vtex-product-details-container">
              <ExtensionPoint
                id="breadcrumb"
                slug={variables.slug}
                categories={product.categories}
              />
              <ExtensionPoint id="product-details" slug={variables.slug} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

const options = {
  options: props => ({
    variables: {
      slug: props.params.slug,
    },
  }),
}

export default compose(graphql(productQuery, options), withPrefetch())(
  ProductPage
)
