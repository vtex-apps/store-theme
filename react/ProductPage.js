import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import productQuery from './productQuery.gql'
import ShelfItem from './ShelfItem'
import Footer from './Footer'
import Header from './Header'
import BuyButton from './BuyButton'

class ProductPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const { product, loading } = data
    if (loading) {
      return
    }
    return (
      <div>
        <Header />
        <div className="flex flex-row-ns flex-column-s items-center">
          <ShelfItem
            imageUrl={product.items[0].images[0].imageUrl}
            name={product.items[0].itemId}
            price={product.items[0].sellers[0].commertialOffer.Price}
          />
          <div className="h-20">
            <BuyButton id={product.items[0].itemId} />
          </div>
        </div>
        <div className="mt10">
          <Footer />
        </div>
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
