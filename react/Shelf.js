import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import productsQuery from './queries/productsQuery.gql'

import ShelfItem from './components/ShelfItem'
import WrappedSpinner from './components/WrappedSpinner'

class Shelf extends Component {
  static propTypes = {
    data: PropTypes.object,
    query: PropTypes.string,
  }

  static schema = {
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

  trimName = name => {
    return name.length > 20 ? `${name.substring(0, 18)}...` : name
  }

  render() {
    const { data } = this.props
    console.log(data)
    return (
      <div>
        {data.loading && <WrappedSpinner />}
        {!data.loading && (
          <div className="flex flex-row-ns flex-column-s items-center">
            {data.products.map(product => (
              <ShelfItem
                key={product.productId}
                imageUrl={product.items[0].images[0].imageUrl}
                name={this.trimName(product.productName)}
                price={product.items[0].sellers[0].commertialOffer.Price}
                productLink={product.linkText}
              />
            ))}
          </div>
        )}
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

const ShelfWithData = graphql(productsQuery, options)(Shelf)

export default ShelfWithData
