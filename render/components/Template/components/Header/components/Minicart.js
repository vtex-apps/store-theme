import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import React, {Component, PropTypes} from 'react'

// eslint-disable-next-line
class Minicart extends Component {
  handleMinicartClick = () => {
    window.location.href = '/checkout/#/cart'
  }

  render () {
    const {orderForm} = this.props.data
    const qty = orderForm ? orderForm.items.length : 0
    return (
      <button
        className="flex-inline items-center bn pointer dim pv3 pl3 pr2 relative bg-transparent"
        title="Carrinho"
        onClick={this.handleMinicartClick}
      >
        {
          qty ? (
            <div>
              <span className="dib br-pill ph1 mb1 bg-gold f6 black absolute bottom-0 right-0">{qty < 10 ? `0${qty}` : qty}</span>
              <span className="clip"> product(s)</span>
            </div>
          ) : null
        }
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-light-primary" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
    )
  }
}

Minicart.propTypes = {
  data: PropTypes.object,
}

const orderFormQuery = gql`{
  orderForm {
    orderFormId,
    items {
      quantity
    }
  }
}`

const MinicartWithData = graphql(orderFormQuery, {
  options: {ssr: false},
})(Minicart)

export default MinicartWithData
