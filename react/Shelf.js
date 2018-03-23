import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ShelfItem from './ShelfItem'

function Shelf({ data }) {
  return (
    <div className="flex flex-row">
      {!data.loading &&
        data.products.map(product => (
          <ShelfItem
            key={product.productId}
            imageUrl={product.items[0].images[0].imageUrl}
            name={product.productName}
            price={product.items[0].sellers[0].commertialOffer.Price}
          />
        ))}
    </div>
  )
}

Shelf.propTypes = {
  data: PropTypes.object,
}

const query = gql`
  query Products(
    $query: String
    $category: String
    $specificationFilters: [String]
    $priceRange: String
    $collection: String
    $orderBy: String
    $from: Int
    $to: Int
    $salesChannel: String
  ) {
    products(
      query: $query
      category: $category
      specificationFilters: $specificationFilters
      priceRange: $priceRange
      collection: $collection
      orderBy: $orderBy
      from: $from
      to: $to
      salesChannel: $salesChannel
    ) {
      productId
      productName
      brand
      linkText
      productReference
      categoryId
      categories
      categoriesIds
      clusterHighlights {
        id
        name
      }
      link
      description
      items {
        itemId
        name
        nameComplete
        complementName
        ean
        referenceId {
          Key
          Value
        }
        measurementUnit
        unitMultiplier
        images {
          imageId
          imageLabel
          imageTag
          imageUrl
          imageText
        }
        sellers {
          sellerId
          sellerName
          addToCartLink
          sellerDefault
          commertialOffer {
            Installments {
              Value
              InterestRate
              TotalValuePlusInterestRate
              NumberOfInstallments
              PaymentSystemName
              PaymentSystemGroupName
              Name
            }
            Price
            ListPrice
            PriceWithoutDiscount
            RewardValue
            PriceValidUntil
            AvailableQuantity
            Tax
            CacheVersionUsedToCallCheckout
            DeliverySlaSamples {
              DeliverySlaPerTypes {
                TypeName
                Price
                EstimatedTimeSpanToDelivery
              }
              Region {
                IsPersisted
                IsRemoved
                Id
                Name
                CountryCode
                ZipCode
                CultureInfoName
              }
            }
          }
        }
        variations {
          name
          values
        }
        attachments {
          id
          name
          required
          domainValues {
            FieldName
            MaxCaracters
            DomainValues
          }
        }
      }
      properties {
        name
        values
      }
      propertyGroups {
        name
        properties
      }
      recommendations {
        buy {
          productId
          productName
        }
        view {
          productId
          productName
        }
      }
    }
  }
`

const options = {
  options: ({
    query = '',
    category = '',
    specificationFilters = '',
    priceRange = '',
    collection = '',
    orderBy = '',
    from = 0,
    to = 8,
    salesChannel = '',
  }) => ({
    variables: {
      query,
      category,
      specificationFilters: specificationFilters ? [specificationFilters] : [],
      priceRange,
      collection,
      orderBy,
      from,
      to: to - 1,
      salesChannel,
    },
  }),
}

const component = graphql(query, options)(Shelf)

component.schema = {
  title: 'Shelf',
  description: 'A product shelf featuring a collection',
  type: 'object',
  properties: {
    orderBy: {
      type: 'string',
      enum: ['OrderByTopSaleDESC', 'OrderByPriceDESC', 'OrderByPriceASC'],
      enumNames: ['Sales', 'Price, descending', 'Price, ascending'],
      title: 'Order by',
    },
    collection: {
      title: 'Collection',
      type: 'string',
    },
    to: {
      title: 'Quantity',
      type: 'string',
    },
  },
}

export default component
