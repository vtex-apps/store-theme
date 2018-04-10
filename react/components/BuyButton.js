import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import { FormattedMessage } from 'react-intl'
import Button from '@vtex/styleguide/lib/Button'

import orderFormQuery from '../queries/orderFormQuery.gql'
import addToCartMutation from '../mutations/addToCartMutation.gql'

export class BuyButton extends Component {
  static propTypes = {
    id: PropTypes.string,
    data: PropTypes.object,
    mutate: PropTypes.func,
  }

  handleClick = () => {
    const { data: { orderForm: { orderFormId } }, mutate, id } = this.props
    mutate({
      variables: {
        orderFormId: orderFormId,
        items: [
          {
            id: parseInt(id),
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
    return (
      <Button primary block large onClick={this.handleClick}>
        <FormattedMessage id="dreamstore.buy" />
      </Button>
    )
  }
}

export default compose(
  graphql(orderFormQuery, {
    options: { ssr: false },
  }),
  graphql(addToCartMutation)
)(BuyButton)
