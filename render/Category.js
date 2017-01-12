import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'

// Page Components
import parseQuery from './utils/parseQuery'
import Template from './components/Template'
import ProductList from './components/ProductList'

// eslint-disable-next-line
class Category extends Component {
  render () {
    const {data, sort} = this.props
    const loading = data ? data.loading : true
    const refetch = data ? data.refetch : null
    const products = loading ? [] : data.products
    const category = loading ? '' : data.category.name

    return (
      <Template>
        <ProductList
          category={category}
          products={products}
          refetch={refetch}
          loading={loading}
          sort={sort}
        />
      </Template>
    )
  }
}

Category.propTypes = {
  data: PropTypes.object,
  sort: PropTypes.string,
}

const query = gql`
  query CategoryQuery($category: String, $sort: String) {
    products(category: $category, sort: $sort, pageSize: 50) {
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
          availability,
          price,
          listPrice
        }
      }
    }

    category(slug: $category) {
      name,
      slug
    }
  }
`

const mapSlugToQuery = (state) => {
  const {route, history} = state.context
  const {path} = history[history.length - 1]
  const {sort} = parseQuery(path) || {}
  const {category} = state.placeholders[route].settings || {}
  return {category, sort}
}

const CategoryWithData = graphql(query, {
  options: ({category, sort}) => ({variables: {category, sort}, skip: !category}),
})(Category)

const CategoryWithDataConnected = connect(mapSlugToQuery)(CategoryWithData)
delete CategoryWithDataConnected.fetchData

export default CategoryWithDataConnected
