import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedNumber } from 'react-intl'
import { Link } from 'render'

export default class ShelfItem extends Component {
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
      <div className="w-20">
        <Link
          className="pointer flex flex-column link near-black"
          page={'store/product'}
          params={{ id: productLink }}
        >
          <img src={imageUrl} width="200" height="200" />
          <span>{name}</span>
          <FormattedNumber
            value={price}
            style="currency"
            currency={this.context.culture.currency}
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />
        </Link>
      </div>
    )
  }
}
