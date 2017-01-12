import gql from 'graphql-tag'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import React, {Component, PropTypes} from 'react'

// Page Components
import parseQuery from './utils/parseQuery'
import Template from './components/Template'
import ProductList from './components/ProductList'

// eslint-disable-next-line
class Brand extends Component {
  render () {
    const {data, sort} = this.props
    const loading = data ? data.loading : true
    const refetch = data ? data.refetch : null
    const products = loading ? [] : data.products
    const brand = loading ? '' : data.brand.name

    return (
      <Template>
        <ProductList
          category={brand}
          products={products}
          refetch={refetch}
          loading={loading}
          sort={sort}
        />
      </Template>
    )
  }
}

Brand.propTypes = {
  data: PropTypes.object,
  sort: PropTypes.string,
}

const query = gql`
  query BrandQuery($brand: String, $sort: String) {
    products(brands: $brand, sort: $sort, pageSize: 50) {
      name,
      slug,
      brand {
        name,
        slug
      },
      skus {
        images {
          src
        },
        offers {
          price,
          listPrice,
          availability
        }
      }
    }

    brand(slug: $brand) {
      name
    }
  }
`

const mapSlugToQuery = (state) => {
  const {route, history} = state.context
  const {path} = history[history.length - 1]
  const {sort} = parseQuery(path) || {}
  const {brand} = state.placeholders[route].settings || {}
  return {brand, sort}
}

const BrandWithData = graphql(query, {
  options: ({brand, sort}) => ({variables: {brand, sort}, skip: !brand}),
})(Brand)

const BrandWithDataConnected = connect(mapSlugToQuery)(BrandWithData)
delete BrandWithDataConnected.fetchData

export default BrandWithDataConnected
