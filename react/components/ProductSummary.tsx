import React from 'react'
import { useCustomClasses } from 'vtex.css-handles'
import type { ProductTypes } from 'vtex.product-context'
import {
  ProductSummaryCustom,
  ProductSummaryImage,
  ProductSummaryName,
} from 'vtex.product-summary'
import styles from './ProductSummary.module.css'

interface Props {
  product: ProductTypes.Product
}

function ProductSummary({ product }: Props) {
  const summaryClasses = useCustomClasses(() => ({
    clearLink: styles.clearLink,
    container: 'pa3'
  }))

  return (
    <ProductSummaryCustom product={product} classes={summaryClasses}>
      <ProductSummaryImage aspectRatio="1:1" />
      <ProductSummaryName />
    </ProductSummaryCustom>
  )
}

export default ProductSummary
