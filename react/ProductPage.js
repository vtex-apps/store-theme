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
        {loading && <WrappedSpinner />}
        {!loading && (
          <div className="flex flex-row-ns flex-column-s items-center">
            <div className="w-20 mr6">
              <ShelfItem
                imageUrl={product.items[0].images[0].imageUrl}
                name={product.productName}
                price={product.items[0].sellers[0].commertialOffer.Price}
              />
            </div>
            <div className="h-20">
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
