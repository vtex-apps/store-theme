import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { NoSSR } from 'render'

class Carousel extends Component {
  static propTypes = {
    banner1: PropTypes.string,
    banner2: PropTypes.string,
  }

  render() {
    const { banner1, banner2 } = this.props
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const fallback = (
      <div>
        <img src={banner1} />
      </div>
    )

    return (
      <NoSSR onSSR={fallback}>
        <Slider {...settings}>
          <div>
            <img src={banner1} />
          </div>
          <div>
            <img src={banner2} />
          </div>
        </Slider>
      </NoSSR>
    )
  }
}

Carousel.schema = {
  title: 'Carousel',
  description: 'A simple carousel component',
  type: 'object',
  properties: {
    banner1: {
      type: 'string',
      title: 'Banner 1',
    },
    banner2: {
      type: 'string',
      title: 'Banner 2',
    },
  },
}

export default Carousel
