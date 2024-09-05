# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

// VTEX Store Theme by Growth Hacking Team 

## [Unreleased]

### Changed
- `minicart-product-list` in theme to change the default template to use splitItem as false.

## [5.1.0] - 2022-06-07
### Changed
- Fixed height in `list-context.image-list#demo` example.
- Images used in `slider-layout#demo-images` example.
- Amount of products displayed as default in `slider-layout#demo-products`.
- Max-width to 100% in `sliderTrackContainer` in vtex.slider-layout.css.
- Width in `logo#mobile`.
- Benefits bar color to improve contrast.

### Added
- Fold block in home page.
- Pre-load prop in `list-context.image-list#demo`.
- `image-rendering: -webkit-optimize-contrast` in vtex.store-components.css file.
- min-height:450px in `sliderLayoutContainer--carousel` in vtex.slider-layout.css file.
- min-height in `.layoutContainer--shelf` and `slide--shelf` in vtex.slider-layout.css file.
- Height in `logo#mobile` and  `logo#desktop`.

### Removed
- `__fold__.experimentalLazyAssets` from home page.
- Margin-bottom and padding-bottom from `flexRow--deals .flexCol` in vtex.flex-layout.css file.
- `flex-layout.row#2-desktop` block from header-layout.desktop.
- `notification.bar#home` from header.

## [5.0.0] - 2022-05-25

### Changed

- `vtex.reviews-and-ratings` peer dependency from `2.x` t0 `3.x`

## [4.4.2] - 2021-07-02
### Fixed
- Wrong condition subject being used in `condition-layout` example.

## [4.4.1] - 2021-06-28 [YANKED]
### Added
- Example of conditional-layout usage on the product-page

## [4.4.0] - 2021-06-08
### Changed
- `search-fetch-previous` and `search-fetch-more` to use `a` tags to improve SEO performance

## [4.3.0] - 2021-01-14
### Added
- Example of multiple search gallery layouts usage

## [4.2.1] - 2020-12-14
### Fixed
- Unnecessary `max-width` style in the input of `search-bar` block which causes the style to break when the `search-bar` needs to be bigger`.

## [4.2.0] - 2020-11-30
### Added
- Example of [vtex.store-video](https://github.com/vtex-apps/store-video) usage.

## [4.1.0] - 2020-11-16
### Changed
- Update `vtex.order-placed@1.x` to `vtex.order-placed@2.x`.

## [4.0.0] - 2020-10-30
### Added
- Example of [vtex.product-specifications](https://github.com/vtex-apps/product-specifications) usage.

### Changed
- Use new major of [vtex.reviews-and-ratings](https://github.com/vtex-apps/reviews-and-ratings).

## [3.41.0] - 2020-10-08
### Added
- Example of [vtex.product-highlight](https://github.com/vtex-apps/product-highlights) usage.

### Changed
- Change files and folder structure so it's easier to find the blocks.

### Removed
- Unused blocks.

## [3.40.0] - 2020-10-07
### Added
- "Contact us" page as example of [vtex.store-form](https://github.com/vtex-apps/store-form) usage.

## [3.39.2] - 2020-10-06
### Fixed
- `minicart.v2` opening itself on **all** `addToCart` events, including the ones triggered by quantity changes in the checkout cart.

## [3.39.1] - 2020-10-05
### Fixed
- `icon-cart` being bigger than it should.

## [3.39.0] - 2020-09-30
### Added
- Example of how to make the `minicart.v2` block respond to the `addToCart` pixel event.

## [3.38.0] - 2020-09-10
### Added
- `disclosure-layout` example.

### Removed
- `public` folder.

## [3.37.2] - 2020-07-30
### Fixed
- Active **background** `action-secondary` color from `#dbe9fd` to `#d2defc`
- Active **border** `action-secondary` color from `#dbe9fd` to `#d2defc`

## [3.37.1] - 2020-07-08

### Changed
- Change URL of the docs in README

## [3.37.0] - 2020-05-18
### Changed
- PreventRouteChange to `false`.

## [3.36.0] - 2020-05-11
### Added
- Add input values for recursive assemblies

## [3.35.0] - 2020-04-13
### Added
- `aspectRatio` and `maxHeight` on `product-summary-image#shelf`.

### Fixed
- Some styles on product summary and price components.

## [3.34.0] - 2020-04-07
### Added
- `fetch-more` and `fetch-previous` buttons on mobile.

## [3.33.0] - 2020-04-02
### Changed
- Price blocks on `product-summary` and on the PDP to use the new blocks from `vtex.product-price`
- Product title style on PDP.

## [3.32.0] - 2020-03-20
### Changed
- Use `__fold__.experimentalLazyAssets` on home.

## [3.31.0] - 2020-03-19
### Added
- `product-gifts` block to `store.product`.

## [3.30.1] - 2020-03-06
### Fixed
- Fix version of the app.

## [3.29.0] - 2020-03-06

## [3.28.0] - 2020-03-05
### Added
- `__fold__` blocks on home.
- `aspectRatio` prop on `product-images`.

## [3.27.0] - 2020-03-03
### Added
- `store.not-found#search` block.

## [3.26.1] - 2020-02-20
### Changed
- Limit the width of the search bar input instead of its container.

### Fixed
- Logo animation when header sticks to the top of the page.

### Added
- `prefers-reduced-motion` query to remove animation for users which don't want unnecessary animations.

## [3.26.0] - 2020-02-18
### Changed
- Refactor the `header` with native IO blocks.

### Added
- Animations to the `header` when it sticks to the top of the page.

## [3.25.0] - 2020-02-06
### Changed
- `vtex.carousel` in favor of using `list-context.image-list` and `slider-layout`.
- `vtex.shelf` in favor of using `list-context.product-list` and `slider-layout`.

## [3.24.0] - 2020-02-05
### Added
- `height` on `product-summary-image`

## [3.23.2] - 2020-02-03
### Changed
- Make search use cold prices by default.

## [3.23.1] - 2020-01-27
### Fixed
- Use default `minicart.v2` from `vtex.minicart`.

## [3.23.0] - 2020-01-27
### Added
- `store.not-found#product` block.

## [3.22.0] - 2020-01-23
### Added
- `product-bookmark` blocks.

## [3.21.2] - 2020-01-22
### Fixed
- Layout on search pages with few results but a big filter sidebar.

## [3.21.1] - 2019-12-27
### Fixed
- Use docs builder.

## [3.21.0] - 2019-12-20
### Added
- `showValueNameForImageVariation` to `sku-selector`.

### Changed
- Remove product-identifier.

## [3.20.2] - 2019-12-19
### Fixed
- Menu links and layout

## [3.20.1] - 2019-12-18
### Changed
- Use `styles-builder@2.x`.

## [3.20.0] - 2019-12-17
### Changed
- Use new flexible `minicart.v2` and `add-to-cart-button`.

### Added
- Custom CSS styles for `product-identifier`.

## [3.20.0-beta.0] - 2019-12-11

## [3.20.0-beta] - 2019-12-06

## [3.19.2] - 2019-12-16
### Fixed
- `minItemsPerPage` prop in `shelf#home` block.

## [3.19.1] - 2019-12-03

## [3.18.2] - 2019-12-03
### Fixed
- Add missing dependencies

## [3.18.1] - 2019-11-11
### Fixed
- Use the proper API to space SKU Selector

## [3.18.0] - 2019-11-11
### Fixed
- Product page spacing issues.

### Added
- Product description.

## [3.17.2] - 2019-11-08
### Added
- Use `skusFilter` `FIRST_AVAILABLE` value.

## [3.17.1] - 2019-11-06
### Fixed
- Remove usage of deprecated selectors.

## [3.17.0] - 2019-11-06
### Changed
- PreventRouteChange to `true`.

## [3.16.2] - 2019-10-17

### Changed

- Default font.

## [3.16.1] - 2019-10-08

## [3.16.0] - 2019-10-07

### Added

- The `search-fetch-previous` block to the search result.

## [3.15.1] - 2019-09-23

## [3.15.0] - 2019-09-18

### Added

- Add sitemap builder with about-us url

## [3.14.0] - 2019-09-18

### Added

- Product Customizer to PDP.

## [3.13.1] - 2019-09-10

### Fixed

- Use `search-fetch-more`.

## [3.13.0] - 2019-09-10

### Changed

- Use flexble layout for `search-result`.

## [3.12.0] - 2019-08-27

### Added

- Accordion menu to footer on mobile.

## [3.11.0] - 2019-08-20

### Changed

- Use `flex-layout` to define the `footer` block.

### Fixed

- Missing padding in the Footer.

## [3.10.0] - 2019-08-16

### Removed

- `product-add-to-list-button` from `flex-layout.col#product-image` so that it isn't rendered in the products page.

### Added

- New props (`minItemsPerPage` and `paginationDotsVisibility`) for the Shelf component to `shelf#home`.

## [3.9.1] - 2019-08-14

### Fixed

- Remove incorrect props from search-result block.

## [3.9.0] - 2019-08-07

### Added

- created a `breadcrumb` block with `showOnMobile` set to true

## [3.8.0] - 2019-08-01

### Added

- `mobileLayout` prop to `search-result` block.

## [3.7.2] - 2019-07-31

### Fixed

- Add product-review-form block to avoid falling back to the default layout.

## [3.7.1] - 2019-07-26

### Changed

- fixed some errors in the category-menu

## [3.7.0] - 2019-07-23

### Added

- `displayThumbnailsArrows` to the `product-images` block.

## [3.6.1] - 2019-07-17

### Changed

- Split the blocks.json into multiple files.

## [3.6.0] - 2019-07-04

### Added

- Add `product-identifier.product` to the product page.
- Add `product-identifier.summary` to the product summary.

## [3.5.1] - 2019-06-12

### Fixed

- Show the heart icon of wish list in product details.

## [3.5.0] - 2019-06-11

### Added

- Product Review interfaces to PDP and shelf.

### Changed

- `product-summary` to `product-summary.shelf` so it's possible to add product review interfaces in the shelf.

## [3.4.2] - 2019-06-11

### Added

- Example of institutional page.

## [3.4.1] - 2019-06-10

### Changed

- Use new `filter-navigator`.

## [3.4.0] - 2019-06-04

## [3.3.0] - 2019-06-04

### Changed

- Changed logo position in header.

## [3.3.0] - 2019-06-04

### Changed

- Product details is now broken down into smaller blocks, inserted directly into `store.product`.

## [3.2.1] - 2019-05-28

### Fixed

- `labelListPrice` and `labelSellingPrice` defaults.

## [3.2.0] - 2019-05-28

### Added

- `LocaleSwitcher` component to the `Header`.

## [3.1.1] - 2019-05-27

## [3.1.0] - 2019-05-25

### Fixed

- Changed the way props are declared in product-summary and product-details.

### Changed

- New store layout using flexible blocks for Header and Footer.

## [2.4.1] - 2019-05-17

### Added

- Add `under construction` status to product kit

## [2.4.0] - 2019-05-09

### Added

- Add `labelListPrice` in product-details and summary blocks.

## [2.3.1] - 2019-05-06

## [2.3.0] - 2019-03-27

### Added

- Add `product-highlights` in `product-details#default` block.

## [2.2.2] - 2019-05-02

- Add `store.orderplaced` block definition to `blocks.json`.

## [2.2.1] - 2019-03-18

### Fixed

- Include missing dependencies. Previously, it was working only due to a dependency leak on IO, but the store-theme was breaking since that problem was fixed.

## [2.2.0] - 2019-02-18

### Changed

- Update app name to `store-theme` instead of `dreamstore`.
- Change `related-products` for `shelf.relatedProducts`.

## [2.1.0] - 2019-02-12

### Added

- Add product-specifications in product-details block.

## [2.0.2] - 2019-02-05

### Fixed

- Moved hard-coded store version dependency from 2.0.0 to 2.x

## [2.0.1] - 2019-02-05

### Added

- Add new required blocks for `ProductDetail`.

## [2.0.0] - 2019-02-01

### Added

- Add profile challenge block on account.
- Bye `pages.json`! Welcome `store-builder`.
- Add styles builder 1.x
- Two new nav icons.
- New Icon for telemarketing.
- Default padding setted on body.
- Dreamstore with Design Tokens! :tada

### Changed

- Configure blocks props.
- Remove `global.css` and bump `vtex.store` to 2.0.0.
- Adjust search-result blocks configuration.

## [1.18.6] - 2018-12-20

### Fixed

- Remove Fabriga font from global.css.

## [1.18.5] - 2018-11-23

### Changed

- Update Search Result icons.

## [1.18.4] - 2018-11-23

### Changed

- Update Profile and Minicart Icon.

## [1.18.3] - 2018-11-07

### Fixed

- Fix paddings to match header.

## [1.18.2] - 2018-11-01

### Added

- `IconPack` component to serve the icon used by the dreamstore components.

## [1.18.1] - 2018-10-25

## [1.18.0] - 2018-10-02

### Added

- Component definitions for `vtex.search-result` new extension points.

## [1.17.0] - 2018-10-02

### Removed

- Remove unused queries and tests.

## [1.16.0] - 2018-09-26

### Changed

- Import footer from the new app `vtex.dreamstore-footer`.

## [1.15.2] - 2018-09-20

### Fixed

- Remove Category Menu CSS class definition.

### Changed

- Remove `package-lock.json` from react/ folder.

## [1.15.1] - 2018-09-19

### Changed

- Moved product details breadcrumb to be inside of the `ProductDetails`.

## [1.15.0] - 2018-09-18

### Added

- `Header` standalone component.

## [1.14.1] - 2018-09-18

### Added

- Add again Telemarketing app to the Header extension point.

## [1.14.0] - 2018-09-14

### Added

- `Logo` and `SearchBar` as extensions of the `Header`.

## [1.13.3] - 2018-09-12

### Added

- Page padding class to allow apps to have same default padding.

### Removed

- Unused dependency `vtex.product-summary`

## [1.13.2] - 2018-09-05

### Fixed

- **HotFix** Remove telemarketing app from dreamstore.

## [1.13.1] - 2018-09-05

### Fixed

- Fix malformed release.

## [1.13.0] - 2018-09-05

### Added

- Add `vtex.my-account` app.

## [1.12.2] - 2018-08-30

### Changed

- Bump version of `vtex.store-components` and `vtex.styleguide`.

## [1.12.1] - 2018-08-24

### Fixed

- Fix carousel position in home page.

## [1.12.0] - 2018-08-24

### Changed

- Renamed `SearchResult` to `index`.
- Bumped `vtex.search-result` to version 1.x.

## [1.11.0] - 2018-08-24

### Changed

- Bump major of `vtex.category-menu`.

## [1.10.5] - 2018-08-17

### Changed

- Update `menu` and `minicart` versions to 1.x.

## [1.10.4] - 2018-08-17

## [1.10.3] - 2018-08-16

### Fixed

- Rollback rename `CategoriesHighlights`.

## [1.10.2] - 2018-08-16

### Changed

- Undeprecate v1.10.1.

## [1.10.1] - 2018-08-15

### Changed

- `CategoriesHighlights` to `CategoriesHightlighted`.
- Bump `vtex.telemarketing` to 1.x.

## [1.10.0] - 2018-08-14

## [1.9.5] - 2018-08-13

### Added

- Component `ImpersonateCustomer` to `Header`.
- DepartmentHeader component to wrap Carousel and MainCategories components.
- Department page template.

## [1.9.4] - 2018-08-02

### Changed

- Bump `vtex.styleguide` major version.

## [1.9.3] - 2018-07-30

### Fixed

- Fix the `my-orders` rendering error.

## [1.9.2] - 2018-07-27

### Changed

- Update `vtex.login` version.

## [1.9.1] - 2018-07-24

### Changed

- Bump my-orders version dependency to use stable.

## [1.7.0] - 2018-07-09

### Added

- Loading extension to pages.json

## [1.6.0] - 2018-7-6

### Added

- Add ProductKit to pages.json

## [1.5.1] - 2018-7-6

### Removed

- Moved `store/login/container` to `vtex.store`.

## [1.5.0] - 2018-7-6

### Added

- `vtex.login/LoginContent` to `store/login/container` extension point.

## [1.4.0] - 2018-7-6

### Added

- Add `SearchResult` to the brand page.

## [1.3.2] - 2018-7-4

### Changed

- Use `store-components/Header` instead internal component `Header`.

## [1.3.1] - 2018-6-27

### Changed

- `pages.json` to inject `search-result` into `CategoryPage`

### Fixed

- Remove the integration with `vtex.my-orders-app`.

## [1.3.0] - 2018-6-20

### Added

- Add `vtex.shelf/RelatedProducts` component to the product page.

## [1.2.2] - 2018-6-15

### Fixed

- Fix incorrect build made by builder-hub

## [1.2.1] - 2018-6-14

### Fixed

- Fix my-orders-app version in manifest.json

## [1.2.0] - 2018-6-14

### Added

- Add integration with `vtex.search-result`.
- Add integration with `vtex.my-orders-app`.

### Removed

- Remove dependency `vtex.gallery`.
- Remove `GalleryWrapper` component.
- Remove file `queries/productsQuery.gql`.

### Fixed

- Adapt Top Menu CSS to integrate `vtex.login`.

## [1.1.0] - 2018-6-8

### Added

- _Login_ component to the _Header_.
- Add `vtex.styleguide` dependency.

## [1.0.0] - 2018-6-4

### Added

- Add the breadcrumb component to the SearchPage and ProductPage

### Fixed

- Removed redundant Spinner in _ProductPage_ Component.

### Added

- **Breaking Change** Now, dreamstore-theme is a template based on `vtex.store`.
- Add free billing policy in `manifest.json`.
- Add the breadcrumb component to the `SearchPage` and `ProductPage`.

### Changed

- Changed `postreleasy` script to publish only on vtex vendor.

## [0.3.5] - 2018-05-21

### Fixed

- Fix pages dependency to be able to use `ExntesionContainer` again.
- `Topbar` when scrolled overlapped the `VTEX-topbar`.
- Update css product details class for the spinner be in the center.

## [0.3.4] - 2018-05-19

### Changed

- Update version of `vtex.storecomponents` to 1.x

## [0.3.3] - 2018-05-18

### Added

- Add toast message system to be used on error scenarios.

### Fixed

- Fix padding top of product page content

## [0.3.2] - 2018-05-18

### Fixed

- Top menus covering great portion of the page.
- Fix pages error when ExtensionContainer was used.

## [0.3.1] - 2018-05-12

### Fixed

- Display category menu only in large screens.
- Fix padding-top of Product page.

## [0.3.0] - 2018-05-12

### Added

- Add category menu and fix padding.
- Add the search bar component and make header responsive again.

### Fixed

- Fix minicart div position
- Remove flex box from product page to fix non-expected behavior of react-slick

## [0.2.0] - 2018-05-11

### Added

- Show success toast when a product is add to the cart.
- Add responsive layout to the header.
- Add gallery to the search page.

## [0.1.0] - 2018-05-11

### Added

- Add the search bar component

### Changed

- Replace own Footer implementation by `vtex.storecomponents/Footer` component.

## [0.0.11] - 2018-05-09

### Added

- Add Product Details app.

### Deprecated

- Remove legacy implementations of buy button and minicart.

## [0.0.10] - 2018-05-09

### Added

- Add Minicart app.

## [0.0.9] - 2018-05-07

### Added

- Add Menu app on top bar.

### Deprecated

- Remove the own implementation of shelf to add the app.
