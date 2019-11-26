import { Carousel } from 'vtex.carousel'
import { FlexLayout } from 'vtex.flex-layout'
import { Shelf } from 'vtex.shelf'
import { RichText } from 'vtex.rich-text'
import { InfoCard, Newsletter } from 'vtex.store-components'
import Deals from './components/Deals'
import ProductSummaryShelf from './components/ProductSummaryShelf'

const DEALS = [
  {
    imageSrc: 'https://storecomponents.vteximg.com.br/arquivos/box.png',
    text: 'Free Shipping',
  },
  {
    imageSrc:
      'https://storecomponents.vteximg.com.br/arquivos/delivery-fast.png',
    text: 'One day delivery',
  },
  {
    imageSrc: 'https://storecomponents.vteximg.com.br/arquivos/store.png',
    text: 'Pick up in store',
  },
  {
    imageSrc: 'https://storecomponents.vteximg.com.br/arquivos/coupon.png',
    text: 'Exclusive deals',
  },
]

function Home() {
  return (
    <template name="store.home">
      <Carousel
        __id="home"
        autoplay={false}
        height={720}
        banners={[
          {
            image:
              'https://storecomponents.vteximg.com.br/arquivos/banner-principal.png',
            mobileImage:
              'https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg',
          },
          {
            image: 'https://storecomponents.vteximg.com.br/arquivos/banner.jpg',
            mobileImage:
              'https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg',
          },
        ]}
      />
      <FlexLayout.Row __id="deals" blockClass="deals">
        {DEALS.map(({ imageSrc, text }, id) => {
          return <Deals key={`deals-${id}`} id={id} imageSrc={imageSrc} text={text} />
        })}
      </FlexLayout.Row>
      <Shelf
        __id="home"
        orderBy="OrderByTopSaleDESC"
        paginationDotsVisibility="desktopOnly"
        skusFilter="FIRST_AVAILABLE"
        productList={{
          maxItems: 10,
          itemsPerPage: 5,
          minItemsPerPage: 1.5,
          scroll: 'BY_PAGE',
          arrows: true,
          titleText: 'Top sellers',
        }}
      >
        <ProductSummaryShelf />
      </Shelf>
      <InfoCard
        __id="home"
        id="info-card-home"
        isFullModeStyle={false}
        textPosition="left"
        imageUrl="https://storecomponents.vteximg.com.br/arquivos/banner-infocard2.png"
        headline="Clearance Sale"
        callToActionText="DISCOVER"
        callToActionUrl="/sale/d"
        blockClass="info-card-home"
        textAlignment="center"
      />
      <RichText
        __id="question"
        text={`**This is an example store built using the VTEX platform.\nWant to know more?**`}
        blockClass="question"
      />
      <RichText
        __id="link"
        text={`\n**Reach us at**\nwww.vtex.com.br`}
        blockClass="link"
      />
      <Newsletter __id={null} />
    </template>
  )
}

export default Home
