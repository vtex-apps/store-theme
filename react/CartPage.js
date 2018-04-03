import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import ShelfItem from './components/ShelfItem'
import WrappedSpinner from './components/WrappedSpinner'
import orderFormQuery from './queries/orderFormQuery.gql'

class CartPage extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data: { loading, orderForm } } = this.props
    return (
      <div className="w-100 h-100">
        {loading && <WrappedSpinner />}
        {!loading &&
          orderForm.items.map(product => (
            <ShelfItem
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.skuName}
              price={product.sellingPrice}
            />
          ))}
      </div>
    )
  }
}

export default graphql(orderFormQuery, {
  options: { ssr: false },
})(CartPage)
