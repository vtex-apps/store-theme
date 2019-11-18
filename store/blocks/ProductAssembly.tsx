import {
  ProductAssemblyOptions,
  AssemblyOptionInputValues,
  AssemblyOptionItemImage,
  AssemblyOptionItemName,
  AssemblyOptionItemPrice,
  AssemblyOptionItemChildrenDescription,
  AssemblyOptionItemCustomize,
  AssemblyOptionItemQuantitySelector,
} from 'vtex.product-customizer'
import { FlexLayout } from 'vtex.flex-layout'
import { StickyLayout } from 'vtex.sticky-layout'
import { BuyButton } from 'vtex.store-components'

export default function ProductAssembly() {
  return (
    <>
      <ProductAssemblyOptions __id="">
        <FlexLayout.Row
          __id="product-assembly-options"
          colGap={2}
          preserveLayoutOnMobile
          colSizing="auto"
        >
          <FlexLayout.Col __id="product-assembly-image" marginRight={4}>
            <AssemblyOptionItemImage __id={null} />
          </FlexLayout.Col>

          <FlexLayout.Col
            __id="product-assembly-middle"
            width="grow"
            verticalAlignment="middle"
          >
            <AssemblyOptionItemName __id={null} />
            <AssemblyOptionItemPrice __id={null} />
            <AssemblyOptionItemChildrenDescription __id={null} />
            <AssemblyOptionItemCustomize
              __id="sec-level"
              buttonProps={{ collapse: 'left' }}
            >
              <AssemblyOptionItemImage __id={null} />
              <AssemblyOptionItemName __id={null} />
              <AssemblyOptionItemPrice __id={null} />
              <AssemblyOptionItemQuantitySelector __id={null} />
            </AssemblyOptionItemCustomize>
          </FlexLayout.Col>

          <FlexLayout.Col
            __id="product-assembly-quantity"
            verticalAlign="middle"
          >
            <AssemblyOptionItemQuantitySelector __id={null} />
          </FlexLayout.Col>
        </FlexLayout.Row>
        <AssemblyOptionInputValues __id="" optionsDisplay="box" />
      </ProductAssemblyOptions>

      <StickyLayout __id="buy-button" position="bottom">
        <FlexLayout.Row __id="buy-button" marginTop={4} marginBottom={7}>
          <BuyButton __id={null} />
        </FlexLayout.Row>
      </StickyLayout>
    </>
  )
}
