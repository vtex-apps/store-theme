import Img from 'vtex.render/Img'
import Link from 'vtex.render/Link'
import Price from '../../commons/Price'
import React, {Component, PropTypes} from 'react'

export const LIST_PRODUCT_IMG_WIDTH = 352

// eslint-disable-next-line
class ListProduct extends Component {
  render () {
    const {isAvailable, listPrice, price, name, imageUrl, slug} = this.props
    const unavailableClassNames = isAvailable
    ? 'br2 br--bottom ba bg-white b--black-10 relative mh-1 w-48 w-23-l mb3 pb3'
    : 'br2 br--bottom ba bg-white b--black-10 relative mh-1 w-48 w-23-l mb3 pb3 o-40'
    const unavailableProductPrice = (
      <div className="tl b mt1 primary">
        <span>Produto Esgotado!</span>
      </div>
    )
    const availableProductPrice = listPrice !== price
    ? (
      <div className="cf">
        <div className="fl f6 mt2 black-40">
          <span>De: </span>
          <span className="strike">
            <Price value={listPrice} />
          </span>
        </div>
        <div className="fr dib pv1 ph2 ba br2 b--washed-primary tc mt1 light-primary">
          <span className="clip">Por: </span>
          <Price value={price} />
        </div>
      </div>
    )
    : (
      <div className="dib pv1 ph2 ba br2 b--washed-primary tc mt1 light-primary">
        <Price value={price} />
      </div>
    )

    return (
      <div className={unavailableClassNames}>
        <Link
          className="link db f6 f5-ns"
          title={name}
          to={`/${slug}/p`}
          >
          <Img
            height={LIST_PRODUCT_IMG_WIDTH}
            src={imageUrl}
            alt={name}
            width={LIST_PRODUCT_IMG_WIDTH}
            className="bb b--black-05"
            />
          <div className="f6 f4-ns nowrap truncate lh-title mh1 mh2-ns mv2 black-60" title={name}>
            {name}
          </div>
          <div className="tr mh1 mh2-ns">
            {isAvailable ? availableProductPrice : unavailableProductPrice}
          </div>
        </Link>
      </div>
    )
  }
}

ListProduct.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  listPrice: PropTypes.number,
  isAvailable: PropTypes.bool,
}

export default ListProduct
