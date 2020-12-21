import React from 'react'
import { ProductSummaryImage, ProductSummaryCustom } from 'vtex.product-summary'
import { ProductBrand, ProductName } from 'vtex.store-components'
import { RatingSummary } from 'vtex.reviews-and-ratings'
import {
  ProductHighlights,
  ProductHighlightWrapper,
  ProductHighlightText,
} from 'vtex.product-highlights'
import { SellingPrice } from 'vtex.product-price'
import type { ProductTypes } from 'vtex.product-context'

interface Props {
  product: ProductTypes.Product
}

function ProductSummary({ product }: Props) {
  return (
    <ProductSummaryCustom product={product}>
      <div className="">
        <div className="">
          <ProductSummaryImage />

          <ProductHighlights type="collection">
            <ProductHighlightWrapper>
              <ProductHighlightText message="{highlightName}" />
            </ProductHighlightWrapper>
          </ProductHighlights>
        </div>

        <div className="">
          <div>
            <ProductBrand displayMode="text" />
          </div>

          <div>
            <ProductName tag="div" />
          </div>

          <div>
            <RatingSummary />
          </div>

          <div>
            <SellingPrice />
          </div>
        </div>
      </div>
    </ProductSummaryCustom>
  )
}

export default ProductSummary
