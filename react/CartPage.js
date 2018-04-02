import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import Footer from './Footer'
import Header from './Header'
import ShelfItem from './ShelfItem'
import orderFormQuery from './orderFormQuery.gql'

// eslint-disable-next-line
class CartPage extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data: { loading, orderForm } } = this.props
    return (
      <div className="w-100 h-100">
        <Header />
        {!loading &&
          orderForm.items.map(product => (
            <ShelfItem
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.skuName}
              price={product.sellingPrice}
            />
          ))}
        <div className="mt10">
          <Footer />
        </div>
      </div>
    )
  }
}

export default graphql(orderFormQuery)(CartPage)
