import {
  SearchResultLayout,
  SearchNotFoundLayout,
  SearchTitle,
  FilterNavigator,
  TotalProducts,
  OrderBy,
  SearchFetchPrevious,
  SearchContent,
  Gallery,
  NotFound,
  SearchFetchMore,
  SearchLayoutSwitcher,
} from 'vtex.search-result'
import { FlexLayout } from 'vtex.flex-layout'
import { Breadcrumb } from 'vtex.breadcrumb'
import ProductSummaryShelf from '../ProductSummaryShelf'

export default function Layout() {
  return (
    <SearchResultLayout __id="">
      <SearchResultLayout.Desktop
        __id=""
        pagination="show-more"
        preventRouteChange
        mobileLayout={{ mode1: 'small', mode2: 'normal' }}
      >
        <FlexLayout.Row __id="searchbread" fullWidth preserveLayoutOnMobile>
          <Breadcrumb.Search __id={null} />
        </FlexLayout.Row>

        <FlexLayout.Row __id="searchtitle">
          <SearchTitle.V2 __id={null} />
        </FlexLayout.Row>

        <FlexLayout.Row __id="result" fullWidth preventHorizontalStretch>
          <FlexLayout.Col __id="filter" blockClass="filterCol">
            <FilterNavigator.V3 __id={null} />
          </FlexLayout.Col>

          <FlexLayout.Col __id="content" width="grow">
            <FlexLayout.Row __id="searchinfo">
              <FlexLayout.Col __id="productCount" blockClass="productCountCol">
                <TotalProducts.V2 __id={null} />
              </FlexLayout.Col>
              <FlexLayout.Col __id="orderby" blockClass="orderByCol">
                <OrderBy.V2 __id={null} />
              </FlexLayout.Col>
            </FlexLayout.Row>

            <FlexLayout.Row __id="fetchprevious" marginBottom={3}>
              <SearchFetchPrevious __id={null} />
            </FlexLayout.Row>

            <FlexLayout.Row __id="products">
              <SearchContent __id="">
                <Gallery __id="">
                  <ProductSummaryShelf />
                </Gallery>

                <NotFound __id={null} />
              </SearchContent>
            </FlexLayout.Row>

            <FlexLayout.Row __id="fetchmore" marginTop={3}>
              <SearchFetchMore __id={null} />
            </FlexLayout.Row>
          </FlexLayout.Col>
        </FlexLayout.Row>
      </SearchResultLayout.Desktop>

      <SearchResultLayout.Mobile
        __id=""
        pagination="show-more"
        mobileLayout={{ mode1: 'small', mode2: 'normal' }}
      >
        <FlexLayout.Row
          __id="searchinfomobile"
          preserveLayoutOnMobile
          colSizing="auto"
          colJustify="around"
        >
          <FlexLayout.Col __id="orderByMobile" blockClass="orderByMobileCol">
            <OrderBy.V2 __id={null} />
          </FlexLayout.Col>
          <FlexLayout.Col __id="filterMobile" blockClass="filterMobileCol">
            <FilterNavigator.V3 __id={null} />
          </FlexLayout.Col>
          <FlexLayout.Col __id="switcherMobile" blockClass="switcherMobileCol">
            <SearchLayoutSwitcher __id={null} />
          </FlexLayout.Col>
        </FlexLayout.Row>
        <FlexLayout.Row __id="searchbread" fullWidth preserveLayoutOnMobile>
          <Breadcrumb.Search __id={null} />
        </FlexLayout.Row>
        <FlexLayout.Row
          __id="productCountMobile"
          blockClass="productCountMobileRow"
        >
          <TotalProducts.V2 __id={null} />
        </FlexLayout.Row>
        <FlexLayout.Row __id="contentmobile" preserveLayoutOnMobile>
          <SearchContent __id="">
            <Gallery __id="">
              <ProductSummaryShelf />
            </Gallery>

            <NotFound __id={null} />
          </SearchContent>
        </FlexLayout.Row>
      </SearchResultLayout.Mobile>
      <SearchNotFoundLayout __id=""></SearchNotFoundLayout>
    </SearchResultLayout>
  )
}