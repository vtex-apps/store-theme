import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import productsQuery from './productsQuery.gql'

import ShelfItem from './ShelfItem'

class Shelf extends Component {
  static propTypes = {
    data: PropTypes.object,
    query: PropTypes.string,
  }

  render() {
    const { data } = this.props
    return (
      <div className="flex flex-row-ns flex-column-s">
        {!data.loading &&
          data.products.map(product => (
            <ShelfItem
              key={product.productId}
              imageUrl={product.items[0].images[0].imageUrl}
              name={product.productName}
              price={product.items[0].sellers[0].commertialOffer.Price}
              productLink={product.linkText}
            />
          ))}
      </div>
    )
  }
}

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

const component = graphql(productsQuery, options)(Shelf)

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
