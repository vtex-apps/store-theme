import React from 'react'
import type { ProductTypes } from 'vtex.product-context'
import {
  ProductSummaryCustom,
  ProductSummaryImage,
  ProductSummaryName,
} from 'vtex.product-summary'
import { useCustomClasses } from 'vtex.css-handles'
import styles from './ProductSummary.module.css'

interface Props {
  product: ProductTypes.Product
}

function ProductSummary({ product }: Props) {
  const summaryClasses = useCustomClasses(() => ({
    container: 'pa3',
    clearLink: styles.clearLink
  }))

  return (
    <ProductSummaryCustom product={product} classes={summaryClasses}>
      <ProductSummaryImage aspectRatio="1:1" />
      <ProductSummaryName />
    </ProductSummaryCustom>
  )
}

export default ProductSummary
