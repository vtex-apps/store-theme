import React from 'react'
import type { ProductTypes } from 'vtex.product-context'
import {
  ProductSummaryCustom,
  ProductSummaryImage,
  ProductSummaryName,
} from 'vtex.product-summary'
import { useCustomClasses } from 'vtex.css-handles'

interface Props {
  product: ProductTypes.Product
}

function ProductSummary({ product }: Props) {
  const customClasses = useCustomClasses(() => ({
    container: 'pa3',
  }))

  return (
    <ProductSummaryCustom product={product} classes={customClasses}>
      <ProductSummaryImage aspectRatio="1:1" />
      <ProductSummaryName />
    </ProductSummaryCustom>
  )
}

export default ProductSummary
