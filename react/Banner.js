import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Banner extends Component {
  static propTypes = {
    image: PropTypes.string,
  }

  render() {
    const { image } = this.props
    return (
      <div className="box-banner">
        <a>
          <img src={image} />
        </a>
      </div>
    )
  }
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

export default Banner
