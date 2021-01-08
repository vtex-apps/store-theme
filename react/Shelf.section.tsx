import React from 'react'
import { ProductSummaryList } from 'vtex.product-summary'
import { SliderLayout } from 'vtex.slider-layout'

import ProductSummary from './components/ProductSummary'

function Shelf() {
  return (
    <div>
      <ProductSummaryList
        installmentCriteria="MAX_WITHOUT_INTEREST"
        ProductSummary={ProductSummary}
      >
        <SliderLayout />
      </ProductSummaryList>
    </div>
  )
}

Shelf.schema = {
  title: 'Shelf',
}

export default Shelf
