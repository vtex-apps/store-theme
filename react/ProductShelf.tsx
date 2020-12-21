import React from 'react'
import { ProductSummaryList } from 'vtex.product-summary'
import { SliderLayout } from 'vtex.slider-layout'

import ProductSummary from './components/ProductSummary'

const sliderLayoutItemsPerPage = {
  desktop: 5,
  tablet: 3,
  phone: 1,
}

function ProductShelf() {
  return (
    <ProductSummaryList ProductSummary={ProductSummary} orderBy="">
      <SliderLayout
        itemsPerPage={sliderLayoutItemsPerPage}
        infinite
        fullWidth={false}
      />
    </ProductSummaryList>
  )
}

export default ProductShelf
