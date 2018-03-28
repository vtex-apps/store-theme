import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import Button from '@vtex/styleguide/lib/Button'

import orderFormQuery from './orderFormQuery.gql'
import addToCartMutation from './addToCartMutation.gql'

class BuyButton extends Component {
  static propTypes = {
    sku: PropTypes.string,
    data: PropTypes.object,
    mutate: PropTypes.func,
  }

  handleClick = () => {
    const { data: { orderForm: { orderFormId } }, mutate, sku } = this.props
    mutate({
      variables: {
        orderFormId: orderFormId,
        items: [
          {
            id: parseInt(sku),
            index: 1,
            quantity: 1,
            seller: 1,
          },
        ],
      },
      refetchQueries: [{ query: orderFormQuery }],
    })
  }

  render() {
    console.log('$$$$$$$$$$$$$$$$$$$', this.props.data)
    return (
      <Button primary onClick={this.handleClick}>
        Buy
      </Button>
    )
  }
}

export default compose(graphql(orderFormQuery), graphql(addToCartMutation))(
  BuyButton
)
