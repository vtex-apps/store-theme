import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'render'

class Banner extends Component {
  static propTypes = {
    altText: PropTypes.string,
    image: PropTypes.string,
    page: PropTypes.string,
    targetParams: PropTypes.object,
  }

  static schema = {
    component: 'Banner',
    description: 'A simple banner component',
    type: 'object',
    properties: {
      alt: {
        type: 'string',
        title: 'Alt text',
      },
      image: {
        type: 'string',
        title: 'Image',
      },
      page: {
        type: 'string',
        title: 'Link',
      },
      targetParams: {
        type: 'object',
        title: 'Target params',
        properties: {
          params: {
            type: 'string',
            title: 'Params',
          },
        },
      },
    },
  }

  render() {
    const { altText, image, page, targetParams } = this.props
    return (
      <div className="flex items-center">
        <Link className="mb0" page={page} params={targetParams}>
          <img src={image} alt={altText} />
        </Link>
      </div>
    )
  }
}

export default Banner
