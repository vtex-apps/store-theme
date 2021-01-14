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
      <h3 className="t-heading-3 c-on-base mv0 mt3 mh3">{title}</h3>
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
  title: "Product Shelf",
  description: "Products from a collection or the best selling ones",
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string"
    }
  }
}

export default Shelf
