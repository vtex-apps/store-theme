import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'

// Page Components
import Link from 'vtex.render/Link'
import parseQuery from './utils/parseQuery'
import Template from './components/Template'
import ProductList from './components/ProductList'

// eslint-disable-next-line
class Search extends Component {
  render () {
    const {data, searchTerm, sort} = this.props
    const loading = data ? data.loading : true
    const refetch = data ? data.refetch : null
    const products = loading ? [] : data.products

    return (
      <Template searchTerm={searchTerm}>
        {
          !loading && products.length === 0
            ? (
              <div>
                <h2 className="font-display tc f2 f1-ns fw4 pa2 ma0 mv4 primary">
                  We didn't found anything matching your search :(
                  But there are many nice things <Link className="link" to="/">here</Link>...
                </h2>
              </div>
            )
            : (
              <ProductList
                searchTerm={searchTerm}
                products={products}
                refetch={refetch}
                loading={loading}
                sort={sort}
              />
            )
        }
      </Template>
    )
  }
}

Search.propTypes = {
  data: PropTypes.object,
  searchTerm: PropTypes.string,
  sort: PropTypes.string,
}

const query = gql`
  query ProductsQuery($query: String, $sort: String) {
    products(query: $query, sort: $sort, pageSize: 50) {
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
  }
`

const mapSearchTermToQuery = (state) => {
  const {route, history} = state.context
  const {path} = history[history.length - 1]
  const {sort} = parseQuery(path) || {}
  const {searchTerm, slug} = state.placeholders[route].settings || {}
  return {searchTerm, slug, sort}
}

const SearchWithData = graphql(query, {
  options: ({searchTerm, sort}) => ({variables: {query: searchTerm, sort}, skip: !searchTerm}),
})(Search)

const SearchWithDataConnected = connect(mapSearchTermToQuery)(SearchWithData)
delete SearchWithDataConnected.fetchData

export default SearchWithDataConnected
