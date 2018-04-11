import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import Button from '@vtex/styleguide/lib/Button'
import CloseIcon from '@vtex/styleguide/lib/icon/Close'
import orderFormQuery from '../queries/orderFormQuery.gql'
import updateItemsMutation from '../mutations/updateItemsMutation.gql'
import MiniCartItem from './MiniCartItem'

class MiniCart extends Component {
  static propTypes = {
    data: PropTypes.object,
    mutate: PropTypes.func,
  }

  handleRemoveItem = ({ target: { id } }) => {
    const { mutate, data: { orderForm } } = this.props
    const itemPayload = orderForm.items.find(item => item.id === id)
    const index = orderForm.items.indexOf(itemPayload)
    const updatedItem = [itemPayload].map(item => {
      return {
        id: parseInt(item.id),
        index: index,
        quantity: 0,
        seller: 1,
      }
    })

    mutate({
      variables: {
        orderFormId: orderForm.orderFormId,
        items: updatedItem,
      },
      refetchQueries: [{ query: orderFormQuery }],
    })
  }

  getItemId = detailUrl => {
    const regExp = /\/([^)]+)\//
    return regExp.exec(detailUrl)[1]
  }

  render() {
    const { data } = this.props
    if (data.loading) {
      return null
    }
    return (
      <div className="pa3">
        {data.orderForm.items.map(item => (
          <div className="flex flex-row" key={item.id}>
            <MiniCartItem
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.sellingPrice}
              productId={this.getItemId(item.detailUrl)}
            />
            <Button id={item.id} onClick={this.handleRemoveItem}>
              <CloseIcon />
            </Button>
          </div>
        ))}
      </div>
    )
  }
}

export default compose(graphql(orderFormQuery), graphql(updateItemsMutation))(
  MiniCart
)
