import React from 'react'
import type { ProductTypes } from 'vtex.product-context'
import {
  ProductSummaryCustom,
  ProductSummaryImage,
  ProductSummaryName,
} from 'vtex.product-summary'

interface Props {
  product: ProductTypes.Product
}

function ProductSummary({ product }: Props) {
  return (
    <ProductSummaryCustom product={product}>
      <ProductSummaryImage aspectRatio="1:1" />
      <ProductSummaryName />
    </ProductSummaryCustom>
  )
}

export default ProductSummary
