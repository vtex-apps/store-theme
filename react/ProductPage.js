import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'

import withPrefetch from './withPrefetch'
import productQuery from './queries/productQuery.gql'
import { BuyButton } from './components/BuyButton'
import WrappedSpinner from './components/WrappedSpinner'

class ProductPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    data: PropTypes.object,
    prefetch: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  componentDidMount() {
    this.props.prefetch('store/home')
  }

  render() {
    const { data } = this.props
    const { product, loading } = data

    return (
      <div>
        {loading ? (
          <WrappedSpinner />
        ) : (
          <div className="flex flex-column items-center justify-center pv6 pv9-ns">
            <div className="w-20-ns w-90">
              <BuyButton
                id={product.items[0].itemId}
              />
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
