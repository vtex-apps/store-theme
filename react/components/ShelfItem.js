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
    width: PropTypes.number,
    height: PropTypes.number,
  }

  static contextTypes = {
    culture: PropTypes.object,
  }

  trimName = name => {
    return name.length > 2 ? name.substring(0, 18) : name
  }

  render() {
    const { imageUrl, name, price, productLink } = this.props
    return (
      <div className="w-100 pv5 dim">
        <Link
          className="pointer flex flex-column link serious-black f4"
          page={'store/product'}
          params={{ id: productLink }}
        >
          <img src={imageUrl} alt={name} />
          <span className="pt6 f4">{this.trimName(name)}</span>
          <div className="f2 fw7">
            <FormattedNumber
              value={price}
              style="currency"
              currency={this.context.culture.currency}
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </div>
        </Link>
      </div>
    )
  }
}
