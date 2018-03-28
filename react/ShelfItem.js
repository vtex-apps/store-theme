import React from 'react'
import PropTypes from 'prop-types'

export default function ShelfItem({ imageUrl, name, price, productLink }) {
  return (
    <div>
      <a className="link near-black" href={`/p/${productLink}`}>
        <img src={imageUrl} width="200" height="200" />
        <div>{name}</div>
        <div>{price}</div>
      </a>
    </div>
  )
}

ShelfItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  productLink: PropTypes.string,
}
