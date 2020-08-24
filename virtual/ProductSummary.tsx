import React from 'react'
import { ProductImages, ProductName } from 'vtex.store-components'
import { ProductSummaryQuantity } from 'vtex.product-quantity'
import {
  ProductSummaryCustom,
  ProductSummaryName,
  ProductSummaryImage,
  ProductSummarySKUSelector,
} from 'vtex.product-summary'
import {
  ListPrice,
  SellingPrice,
  Savings,
  Installments,
} from 'vtex.product-price'
import { Wrapper as AddToCartButton } from 'vtex.add-to-cart-button'
import {
  ModalTrigger,
  Modal,
  ModalContent,
  ModalHeader,
  ModalActions,
} from 'vtex.modal-layout'
import { IconExpand } from 'vtex.store-icons'
import { ProductLink } from 'vtex.store-link'
import { RatingInline } from 'vtex.reviews-and-ratings'

import styles from './ProductSummary.css'

const QuickView = () => {
  return (
    <ModalTrigger>
      <div className="absolute top-0 right-0 pa4">
        <IconExpand />
      </div>
      <Modal>
        <ModalHeader />
        <div className="flex">
          <div className="flex">
            <ProductImages />
          </div>
          <div className="flex">
            <ModalContent>
              <ProductName />
              <div className="flex">
                <div className="flex #list-price-savings"></div>
                <div className="flex #selling-price"></div>
                <div className="flex">
                  <Installments />
                </div>
              </div>
              <ProductSummarySKUSelector />
            </ModalContent>
            <ModalActions>
              <div className="flex">
                <div className="flex">
                  <ProductSummaryQuantity showLabel={false} size="regular" />
                </div>
                <div className="flex flex-grow-1">
                  <AddToCartButton />
                </div>
              </div>
              <div className="flex">
                <ProductLink
                  buttonProps={{ variant: 'secondary' }}
                  displayMode="button"
                  label="View details"
                  href="/{slug}/p"
                />
              </div>
            </ModalActions>
          </div>
        </div>
      </Modal>
    </ModalTrigger>
  )
}

interface Props {
  product: any
}

const ProductSummary = ({ product }: Props) => {
  return (
    <ProductSummaryCustom product={product}>
      <div className={`${styles.productSummary} ph3 flex flex-column flex-grow-1`}>
        <div className="flex relative">
          <ProductSummaryImage
            maxHeight={300}
            aspectRatio="1:1"
            showBadge={false}
          />
          <QuickView />
        </div>
        <div className="flex">
          <ProductSummaryName />
        </div>
        <div className="flex">
          <RatingInline />
        </div>
        <div className="flex flex-grow-1"></div>
        <div className="flex">
          <ListPrice message="{listPriceValue}" />
        </div>
        <div className="flex">
          <div className="flex">
            <SellingPrice message="{sellingPriceValue}" />
          </div>
          <div className="flex">
            <Savings markers={['discount']} message="-{savingsPercentage}" />
          </div>
        </div>
        <div className="flex">
          <Installments message="Up to {installmentsNumber}x {installmentValue}{hasInterest, select, true {, {interestRate} of interest} false { interest-free}}"/>
        </div>
        <div className="flex">
          <AddToCartButton />
        </div>
      </div>
    </ProductSummaryCustom>
  )
}

ProductSummary.displayName = 'product-summary.theme'

export default ProductSummary
