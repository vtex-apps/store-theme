import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { ProductSummaryList } from 'vtex.product-summary'

import ProductSummary from './ProductSummary'

import styles from './Shelf.css'

const itemsPerPage = { desktop: 5, tablet: 3, phone: 1 }

const ShelfBlock = () => {
  return (
    <div className={`${styles.themeShelf} flex justify-center`}>
      <div className="mw9 w-100">
        <div className="flex justify-center items-center">
          <h2 className="t-heading-2 fw2 c-muted-2">Summer</h2>
        </div>
        <ProductSummaryList
          orderBy="OrderByScoreDESC"
          hideUnavailableItems={false}
          installmentCriteria="MAX_WITHOUT_INTEREST"
          maxItems={10}
          skusFilter="FIRST_AVAILABLE"
          ProductSummary={ProductSummary}
        >
          <SliderLayout
            itemsPerPage={itemsPerPage}
            infinite
            fullWidth={false}
            usePagination
            showPaginationDots="always"
            showNavigationArrows="always"
          />
        </ProductSummaryList>
      </div>
    </div>
  )
}

ShelfBlock.displayName = 'shelf-block'

export default ShelfBlock
