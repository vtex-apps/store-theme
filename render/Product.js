import gql from 'graphql-tag'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import React, {Component, PropTypes} from 'react'
import {sendEvent} from 'vtex.navigation-capture'
import {StickyContainer, Sticky} from 'react-sticky'

// Page Components
import imageUrl from './utils/imageUrl'
import Gallery from 'vtex.gallery'
import Template from './components/Template'
import Breadcrumb from 'vtex.breadcrumb'
import Description from './components/Description'
import Recommendation from 'vtex.recommendation'
import Specifications from './components/Specifications'
import PriceAndBuy from 'vtex.price-and-buy'

const productMetaTags = (title, description, currency, image, offers) => [
  {'property': 'og:type', 'content': 'og:product'},
  {'property': 'og:image', 'content': image},
  {'property': 'og:image:width', 'content': 640},
  {'property': 'og:image:height', 'content': 640},
  {'property': 'product:plural_title', 'content': title},
  {'property': 'product:original_price:amount', 'content': offers.listPrice},
  {'property': 'product:original_price:currency', 'content': currency},
  {'property': 'product:price:amount', 'content': offers.price},
  {'property': 'product:price:currency', 'content': currency},
]

// eslint-disable-next-line
class ProductPage extends Component {
  constructor (props) {
    super(props)
    this.handleSKUSelect = this.handleSKUSelect.bind(this)
    this.productImageUrl = this.productImageUrl.bind(this)
    this.selectedSku = this.selectedSku.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize () {
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.setState({
          isMobile: window.innerWidth <= 480,
        })
        this.resizeTimeout = null
      }, 300)
    }
  }

  isStickyActive () {
    if (window && window.innerWidth) {
      return this.state && this.state.isMobile ? !this.state.isMobile : window.innerWidth > 480
    }
  }

  handleSKUSelect (skuId) {
    this.setState({
      selectedSkuId: skuId,
    })
  }

  toggleSticky () {
    if (window && window.innerWidth) {
      return window.innerWidth > 480
    }
  }

  productImageUrl (sku) {
    const productImage = sku && sku.images ? sku.images[0] : null
    return productImage ? imageUrl(this.props.account, productImage.src, 640) : ''
  }

  selectedSku (product) {
    const skus = product && product.skus ? product.skus : []
    const selectedSkuId = this.state ? this.state.selectedSkuId : null
    if (!selectedSkuId) {
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
    return skus.find((sku) => (sku.id === selectedSkuId)) || skus[0]
  }

  checkAvailability (skus) {
    return !!skus.find((sku) => sku.offers.find((offer) => offer.availability > 0))
  }

  productOffers (selectedSku) {
    const offers = selectedSku && selectedSku.offers ? selectedSku.offers : []
    const price = offers[0] ? offers[0].price : 0
    const listPrice = offers[0] ? offers[0].listPrice : 0
    const qty = offers[0] ? offers[0].availability : 0
    return {price, listPrice, qty}
  }

  componentWillMount () {
    if (window && window.document) {
      window.addEventListener('resize', this.handleResize)
    }
  }

  componentDidMount () {
    sendEvent('productView')
  }

  componentWillUnmount () {
    this.resizeTimeout = null
    if (window && window.document) {
      window.addEventListener('resize', this.handleResize)
    }
  }

  render () {
    const {currency, data} = this.props
    const {loading, product} = data || {}
    const productName = product && product.name ? product.name : ''
    const brand = product && product.brand ? product.brand : {}
    const description = product && product.description ? product.description : ''
    const properties = product && product.properties ? product.properties : []
    const skus = product && product.skus ? product.skus : []
    const isAvailable = this.checkAvailability(skus)
    const sku = this.selectedSku(product)
    const skuId = sku ? sku.id : null
    const image = this.productImageUrl(sku)
    const offers = this.productOffers(sku)
    const title = product && product.name ? `${product.name} - Pilates Lovers` : null
    const customTags = productMetaTags(title, description, currency, image, offers)
    const isSticky = this.toggleSticky()

    return (
      <Template title={title} customTags={customTags}>
        <article>
          <StickyContainer className="flex flex-row flex-wrap w-100 mw8-m mw9-l center ph1 ph2-m ph3-l">
            <div className="order-1 w-100 w-40-l pl4-l">
              <Sticky isActive={isSticky}>
                <PriceAndBuy
                  brand={brand}
                  productName={productName}
                  isProductAvailable={isAvailable}
                  offers={offers}
                  skuId={skuId}
                  onSkuSelect={this.handleSKUSelect}
                  loading={loading}
                />
              </Sticky>
            </div>
            <div className="order-0 w-100 w-60-l">
              <section className="br2 ba bg-white b--black-10 mv2 mv3-l">
                <Gallery selectedSku={sku} />
              </section>
            </div>
            <div className="order-2 w-100 w-60-l">
              <section className="br2 ba bg-white b--black-10 mv2 mv3-l overflow-hidden">
                <Description text={description} />
                <Specifications properties={properties} />
                <Breadcrumb productName={productName} />
              </section>
            </div>
          </StickyContainer>
          <div className="w-100">
            <Recommendation title="Las personas también visitaram" />
          </div>
        </article>
      </Template>
    )
  }
}

ProductPage.propTypes = {
  account: PropTypes.string,
  currency: PropTypes.string,
  data: PropTypes.object,
  skuId: PropTypes.string,
}

const query = gql`
query Product($slug: String){
  product(slug: $slug) {
    slug,
    name,
    description,
    brand {
      name,
      slug,
    },
    properties {
      facet {
        slug,
        name,
        values
      }
    },
    skus {
      id,
      offers {
        price,
        listPrice,
        availability
      },
      images {
        src,
        title
      }
    }
  }
}
`

const mapSlugToQuery = (state) => {
  const {route, account, culture: {currency}} = state.context
  const {slug} = state.placeholders[route].settings || {}
  return {account, currency, slug}
}

const ProductPageWithData = graphql(query, {
  options: ({slug}) => ({
    variables: {slug},
    skip: !slug,
    returnPartialData: true,
  }),
})(ProductPage)

const ProductPageWithDataConnected = connect(mapSlugToQuery)(ProductPageWithData)
delete ProductPageWithDataConnected.fetchData

export default ProductPageWithDataConnected
