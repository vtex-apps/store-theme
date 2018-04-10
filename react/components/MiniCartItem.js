import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedNumber } from 'react-intl'
import { Link } from 'render'

export default class MiniCartItem extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    productLink: PropTypes.string,
  }

  static contextTypes = {
    culture: PropTypes.object,
  }

  render() {
    const { imageUrl, name, price, productLink } = this.props
    return (
      <div className="w-100 pv5 dim">
        <Link
          className="pointer flex flex-row link serious-black f4"
          page={'store/product'}
          params={{ id: productLink }}
        >
          <img src={imageUrl} />
          <div>
            <span className="pt6 f4">{name}</span>
            <div className="f5 fw7">
              <FormattedNumber
                value={price}
                style="currency"
                currency={this.context.culture.currency}
                minimumFractionDigits={2}
                maximumFractionDigits={2}
              />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
