import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { ImageList } from 'vtex.store-image'

import styles from './HeaderDesktop.css'

const images = [
  {
    image:
      'https://storecomponents.vteximg.com.br/arquivos/banner-principal.png',
    mobileImage:
      'https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg',
  },
  {
    image: 'https://storecomponents.vteximg.com.br/arquivos/banner.jpg',
    mobileImage:
      'https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg',
  },
]
const itemsPerPage = { desktop: 1, tablet: 1, phone: 1 }

const Carousel = () => {
  return (
    <div className={`${styles.mainRow} flex justify-center`}>
      <div className="mw9">
        <ImageList height={720} images={images}>
          <SliderLayout
            itemsPerPage={itemsPerPage}
            infinite
            showNavigationArrows="desktopOnly"
            showPaginationDots="never"
          />
        </ImageList>
      </div>
    </div>
  )
}

Carousel.displayName = 'carousel-block'

export default Carousel
