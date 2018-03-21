import React from 'react'
import PropTypes from 'prop-types'

export default function Banner({ image }) {
  return (
    <div className="box-banner">
      <a>
        <img src={image} />
      </a>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string,
}

Banner.schema = {
  title: 'Banner',
  description: 'A simple banner component',
  type: 'object',
  properties: {
    image: {
      type: 'string',
      title: 'Image',
    },
  },
}
