import { CheckoutSummary, SummaryTotalizers } from 'vtex.checkout-summary'
import {
  Minicart as VTEXMinicart,
  MinicartBaseContent,
  MinicartProductList,
  MinicartSummary,
} from 'vtex.minicart'
import { ProductList } from 'vtex.product-list'

export default function Minicart() {
  return (
    <VTEXMinicart.V2 __id="">
      <MinicartBaseContent __id="">
        <>
          <MinicartProductList __id="">
            <ProductList __id={null} />
          </MinicartProductList>
          <MinicartSummary __id="">
            <CheckoutSummary.Compact
              __id=""
              totalizersToShow={['Items', 'Discounts']}
            >
              <SummaryTotalizers
                __id="minicart"
                showTotal={true}
                showDelivryTotal={false}
              />
            </CheckoutSummary.Compact>
          </MinicartSummary>
        </>
      </MinicartBaseContent>
    </VTEXMinicart.V2>
  )
}
