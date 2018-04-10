import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { NoSSR } from 'render'

import Banner from './Banner'

class Carousel extends Component {
  static propTypes = {
    banner1: PropTypes.shape({
      image: PropTypes.string.isRequired,
      page: PropTypes.string,
    }),
    banner2: PropTypes.shape({
      image: PropTypes.string.isRequired,
      page: PropTypes.string,
    }),
  }

  static schema = {
    component: 'Carousel',
    description: 'A simple carousel component',
    type: 'object',
    properties: {
      banner1: {
        type: 'object',
        title: 'Banner 1',
        properties: {
          image: {
            type: 'string',
            title: 'Banner 1 image',
          },
          page: {
            type: 'string',
            title: 'Banner 1 link',
          },
          targetParams: {
            type: 'object',
            title: 'Banner 1 target params',
            properties: {
              params: {
                type: 'string',
                title: 'Params',
              },
            },
          },
        },
      },
      banner2: {
        type: 'object',
        title: 'Banner 2',
        properties: {
          image: {
            type: 'string',
            title: 'Banner 2 image',
          },
          page: {
            type: 'string',
            title: 'Banner 2 link',
          },
          targetParams: {
            type: 'object',
            title: 'Banner 2 target params',
            properties: {
              params: {
                type: 'string',
                title: 'Params',
              },
            },
          },
        },
      },
    },
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
      <Banner
        image={banner1.image}
        altText={banner1.page}
        page={banner1.page}
        targetParams={banner1.targetParams}
      />
    )

    return (
      <NoSSR onSSR={fallback}>
        <Slider {...settings}>
          <div>
            <Banner
              image={banner1.image}
              altText={banner1.page}
              page={banner1.page}
              targetParams={banner1.targetParams}
            />
          </div>
          <div>
            <Banner
              image={banner2.image}
              altText={banner2.page}
              page={banner2.page}
              targetParams={banner2.targetParams}
            />
          </div>
        </Slider>
      </NoSSR>
    )
  }
}

export default Carousel
