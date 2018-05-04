import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import Modal from '@vtex/styleguide/lib/Modal'

import withPrefetch from './withPrefetch'
import productQuery from './queries/productQuery.gql'
import ShelfItem from './components/ShelfItem'
import BuyButton from './components/BuyButton'
import WrappedSpinner from './components/WrappedSpinner'
import MiniCart from './components/MiniCart'

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

  handleChange = () => {
    this.setState(state => {
      return { isModalOpen: !state.isModalOpen }
    })
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
              <BuyButton
                id={product.items[0].itemId}
                onClick={this.handleChange}
              />
            </div>
            <Modal
              centered
              isOpen={this.state.isModalOpen}
              onClose={this.handleChange}
            >
              <MiniCart />
            </Modal>
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
