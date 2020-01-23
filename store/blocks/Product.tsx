import { AddToCartButton } from 'vtex.add-to-cart-button'
import { FlexLayout } from 'vtex.flex-layout'
import { Breadcrumb } from 'vtex.breadcrumb'
import {
  ProductName,
  ProductPrice,
  ProductSeparator,
  SkuSelector,
  AvailabilitySubscriber,
  ShippingSimulator,
  Share,
  ProductImages,
  ProductDescription,
} from 'vtex.store-components'
import { ProductRatingSummary, ProductReviews, ProductQuestionsAndAnswers } from 'vtex.product-review-interfaces'
import { ProductIdentifier } from 'vtex.product-identifier'
import { ProductQuantity } from 'vtex.product-quantity'
import { ProductAssemblyOptions } from 'vtex.product-customizer'
import { StackLayout } from 'vtex.stack-layout'
import { ProductSpecificationBadges } from 'vtex.product-specification-badges'
import { Shelf } from 'vtex.shelf'

export default function Product() {
  return (
    <template name="store.product">
      <FlexLayout.Row __id="product-breadcrumb" marginTop={4}>
        <Breadcrumb __id={null} showOnMobile />
      </FlexLayout.Row>

      <FlexLayout.Row
        __id="product-main"
        marginTop={4}
        colGap={7}
        rowGap={7}
        marginBottom={7}
        paddingTop={7}
        paddingBottom={7}
      >
        <FlexLayout.Col __id="stack" width="60%" rowGap={0}>
          <StackLayout __id="">
            <FlexLayout.Row __id="product-image">
              <ProductImages __id="" displayThumbnailsArrows />
            </FlexLayout.Row>
            <ProductSpecificationBadges
              __id=""
              specificationGroupName="Group"
              specificationName="On Sale"
              visibleWhen="True"
              displayValue="SPECIFICATION_NAME"
            />
          </StackLayout>
        </FlexLayout.Col>

        <FlexLayout.Col __id="right-col" preventVerticalStretch rowGap={0}>
          <ProductName __id={null} />
          <ProductRatingSummary __id={null} />
          <ProductPrice __id="product-details" showInstallments showSavings />
          <ProductSeparator __id={null} />
          <ProductIdentifier.Product __id={null} />
          <SkuSelector __id="" variationsSpacing={3} showValueNameForImageVariation />
          <ProductQuantity __id={null} />
          <ProductAssemblyOptions __id={null} />
          <FlexLayout.Row __id="buy-button" marginTop={4} marginBottom={7}>
            <AddToCartButton __id={null} />
          </FlexLayout.Row>
          <AvailabilitySubscriber __id={null} />
          <ShippingSimulator __id={null} />
          <Share
            __id="default"
            social={{
              Facebook: true,
              WhatsApp: true,
              Twitter: false,
              Pinterest: true,
            }}
          />
        </FlexLayout.Col>
      </FlexLayout.Row>

      <FlexLayout.Row __id="description" marginBottom={7}>
        <ProductDescription __id={null} />
      </FlexLayout.Row>

      <Shelf.RelatedProducts __id={null} />
      <ProductReviews __id={null} />
      <ProductQuestionsAndAnswers __id={null} />
    </template>
  )
}
