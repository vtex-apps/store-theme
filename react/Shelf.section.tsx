import React from 'react'
import { ProductSummaryList } from 'vtex.product-summary'
import { SliderLayout } from 'vtex.slider-layout'

import ProductSummary from './components/ProductSummary'

interface Props {
  title?: string
}

function Shelf({ title }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <ProductSummaryList
        installmentCriteria="MAX_WITHOUT_INTEREST"
        ProductSummary={ProductSummary}
      >
        <SliderLayout />
      </ProductSummaryList>
    </div>
  )
}

export default Shelf
