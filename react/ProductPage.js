import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import Spinner from '@vtex/styleguide/lib/Spinner'
import productQuery from './productQuery.gql'
import ShelfItem from './ShelfItem'

class ProductPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const { product, loading } = data
    if (loading) {
      return <Spinner />
    }
    return (
      <div>
        <ShelfItem
          imageUrl={product.items[0].images[0].imageUrl}
          name={product.items[0].name}
          price={product.items[0].sellers[0].commertialOffer.Price}
          productLink="/"
        />
      </div>
    )
  }
}

const options = {
  options: props => ({
    variables: {
      slug: props.params.id,
    },
  }),
}

export default graphql(productQuery, options)(ProductPage)
