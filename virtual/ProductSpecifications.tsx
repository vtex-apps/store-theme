import * as React from 'react'
import {
  ProductSpecificationGroup,
  ProductSpecification,
  ProductSpecificationValues,
  ProductSpecificationText,
} from 'vtex.product-specifications'

import styles from './ProductSpecifications.css'

const ProductSpecs = () => {
  const _state = React.useState(1)
  console.log(_state)

  return (
    <ProductSpecificationGroup>
      <div className={styles.productSpecs}>
        <div className="bg-muted-4 pv3 ph5 t-heading-5 mb2">
          <ProductSpecificationText message="{groupName}" />
        </div>
        <ProductSpecification>
          <div className={`flex pv5 ph5 ${styles.productSpecLine}`}>
            <div className="w-50 w-25-ns pr1 b">
              <ProductSpecificationText message="{specificationName}" />
            </div>
            <div className="w-50 w-75-ns">
              <ProductSpecificationValues>
                <ProductSpecificationText message="{specificationValue}" />
              </ProductSpecificationValues>
            </div>
          </div>
        </ProductSpecification>
      </div>
    </ProductSpecificationGroup>
  )
}

ProductSpecs.displayName = 'product-specs'

ProductSpecs.schema = {

}

export default ProductSpecs
