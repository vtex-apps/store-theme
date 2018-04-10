import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import productQuery from './queries/productQuery.gql'
import ShelfItem from './components/ShelfItem'
import BuyButton from './components/BuyButton'
import WrappedSpinner from './components/WrappedSpinner'

class ProductPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    data: PropTypes.object,
  }

  static contextTypes = {
    prefetchPage: PropTypes.func,
  }

  componentDidMount() {
    this.context.prefetchPage('store/home')
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
              <ShelfItem
                imageUrl={product.items[0].images[0].imageUrl}
                name={product.productName}
                price={product.items[0].sellers[0].commertialOffer.Price}
              />
            </div>
            <div className="w-20-ns w-90">
              <BuyButton id={product.items[0].itemId} />
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
      slug: props.params.id,
    },
  }),
}

export default graphql(productQuery, options)(ProductPage)
