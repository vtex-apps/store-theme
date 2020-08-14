import * as React from "react";
import {
  ProductSpecificationGroup,
  ProductSpecification,
  ProductSpecificationValues,
  ProductSpecificationText
} from "vtex.product-specifications";
import styles from './ProductSpecifications.css'

interface Props {
  text?: string
}

const ProductSpecs = (props: Props) => {
  return (
    <ProductSpecificationGroup>
      <div className={styles.productSpecs}>
        <div className={`bg-muted-4 pa3 t-heading-4 mb2 `}>
          <ProductSpecificationText message={`{groupName}`} />
        </div>
        <ProductSpecification>
          <div className="flex pa3">
            <div className="w-50 w-25-ns pr1">
            <ProductSpecificationText message={`{specificationName}`} />
            </div>
            <div className="w-50 w-75-ns">
            <ProductSpecificationValues>
              <ProductSpecificationText message={`{specificationValue}`} />
            </ProductSpecificationValues>
            </div>
          </div>
        </ProductSpecification>
      </div>
    </ProductSpecificationGroup>
  );
};

ProductSpecs.displayName = "product-specs";

export default ProductSpecs;
