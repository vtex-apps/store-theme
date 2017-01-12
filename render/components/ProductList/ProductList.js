import {ShimmerLoading} from 'vtex.loading'
import React, {Component, PropTypes} from 'react'

// Page Components
import Loading from './components/Loading'
import OrderBy from 'vtex.order-by'
import ListProduct from './components/ListProduct'

const fallbackTitle = <ShimmerLoading className="ma3 h2 w-30 center" />
const gridPlaceholder = Array(5).fill(null).map((_, idx) => {
  return (
    <div className="tc mh-1 w-48 w-23-l mb3" key={idx}>
      <Loading />
    </div>
  )
})

// eslint-disable-next-line
class ProductList extends Component {
  constructor (props) {
    super(props)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange (value) {
    this.props.refetch({sort: value})
    window.browserHistory.replace(`?sort=${value}`)
  }

  findLowestOffer (skus) {
    let defaultSkuIndex = 0
    let lowestOffer
    skus.map((sku, skuIndex) => {
      let isLowest
      const offers = sku.offers || []
      offers.map(offer => {
        if (offer.price === 0) return
        else if (!lowestOffer || (lowestOffer && offer.price < lowestOffer.price)) {
          lowestOffer = offer
          defaultSkuIndex = skuIndex
          isLowest = true
        }
      })
      if (isLowest) defaultSkuIndex = skuIndex
    })
    return skus[defaultSkuIndex]
  }

  checkAvailability (skus) {
    return !!skus.find((sku) => sku.offers.find((offer) => offer.availability > 0))
  }

  render () {
    const {loading, category, searchTerm, products, sort} = this.props
    const categoryTitle = category ? (
      <div className="fl-l w-60-l">
        <h2 className="font-display tc tl-l f2 f1-ns normal pv2 ma0 mt1-ns primary">{category}</h2>
      </div>
    ) : null
    const searchTitle = searchTerm ? (
      <div className="fl-l w-60-l">
        <h2 className="font-display tc tl-l f2 f1-ns normal pv2 ma0 mt1-ns primary">Resultados para "{searchTerm}"</h2>
      </div>
    ) : null

    return (
      <div>
        <div className="cf bg-white bb b--black-10 pb1-l mb2 mb4-l">
          <div className="mw8-m mw9-l center ph3">
            {
              loading
              ? fallbackTitle
              : categoryTitle || searchTitle
            }
            <div className="flex flex-wrap w-100 pv2 fr-l w-40-l tr-l">
              <div className="w-100 dn">
                <span className="dib secondary">Filtrar por:</span>
                <button className="f5 dib bg-white pv1 ph2 lh-solid mb2 br2 pointer secondary ba b--light-primary" type="button">Tamanho <svg className="v-mid" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z" /></svg></button>
                <button className="f5 dib bg-white pv1 ph2 lh-solid mb2 br2 pointer secondary ba b--light-primary" type="button">Marca <svg className="v-mid" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z" /></svg></button>
              </div>
              { loading ? null : <OrderBy sort={sort} onSelectChange={this.handleSelectChange} /> }
            </div>
          </div>
        </div>
        <div className="mw8-m mw9-l center">
          <div className="flex flex-wrap w-100 pb4 pb5-ns">
            {
              loading
              ? gridPlaceholder
              : products.map((product, index) => {
                const {skus} = product
                const isAvailable = this.checkAvailability(skus)
                const lowestOffer = this.findLowestOffer(skus)
                return (
                  <ListProduct
                    name={product.name}
                    slug={product.slug}
                    imageUrl={lowestOffer.images[0].src}
                    price={lowestOffer.offers[0].price}
                    listPrice={lowestOffer.offers[0].listPrice}
                    isAvailable={isAvailable}
                    key={index}
                    />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

ProductList.propTypes = {
  data: PropTypes.object,
  sort: PropTypes.string,
  refetch: PropTypes.func,
  loading: PropTypes.bool,
  category: PropTypes.string,
  searchTerm: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object),
}

export default ProductList
