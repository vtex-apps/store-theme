import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import Footer from './components/Footer'
import Header from './components/Header'
import ShelfItem from './components/ShelfItem'
import WrappedSpinner from './components/WrappedSpinner'
import orderFormQuery from './queries/orderFormQuery.gql'

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
        <div className="mt10">
          <Footer />
        </div>
      </div>
    )
  }
}

export default graphql(orderFormQuery, {
  options: { ssr: false },
})(CartPage)
