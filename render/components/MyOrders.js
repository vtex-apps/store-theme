import gql from 'graphql-tag'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import MyOrdersComponent from 'vtex.my-orders'
import React, {Component, PropTypes} from 'react'

// eslint-disable-next-line
class MyOrders extends Component {
  constructor () {
    super()
    this.cancelOrder = this.cancelOrder.bind(this)
  }

  cancelOrder (orderFormId, reason) {
    this.props.mutate({variables: {orderFormId, reason}})
  }

  render () {
    const {data} = this.props
    const {loading, orders: ordersFromGraphQL} = data
    const orders = loading ? [] : ordersFromGraphQL

    return (
      <div>
        <h1 className="db tc font-display fw6 f2-ns normal tl-ns pl2-ns black-70 mt2 mb0 bb b--black-10">My Orders</h1>
        <MyOrdersComponent
          orders={orders}
          ft={{sac: false}}
          cancelOrderFn={this.cancelOrder}
        />
      </div>
    )
  }
}

MyOrders.propTypes = {
  data: PropTypes.object,
  mutate: PropTypes.func,
}

const query = gql`
  query {
    orders {
      value,
      creationDate,
      paymentData {
        payments {
          group,
          paymentSystemName,
          lastDigits,
          value
        }
      },
      shippingData {
        address {
          receiverName,
          street,
          number,
          complement,
          neighborhood,
          city,
          state,
          postalCode
        },
        logisticsInfo {
          itemId,
          slas {
            shippingEstimate
          }
        }
      },
      totals {
        value,

      },
      state,
      allowCancellation,
      orderId,
      orderGroup,
      items {
        id,
        imageUrl,
        detailUrl,
        name,
        additionalInfo {
          brandName
        },
        quantity,
        price
      }
      storePreferencesData {
        currencyCode
        countryCode
        currencySymbol
      }
    }
  }
`

const mutation = gql`
  mutation cancelOrder($orderFormId: String, $reason: String) {
    cancelOrder(orderFormId: $orderFormId, reason: $reason)
  }
`

const MyOrdersWithData = graphql(query, {
  options: {ssr: false, forceFetch: true},
})(MyOrders)

const MyOrdersWithMutation = graphql(mutation)(MyOrdersWithData)

const MyOrdersConnected = connect()(MyOrdersWithMutation)
delete MyOrdersConnected.fetchData

export default MyOrdersConnected
