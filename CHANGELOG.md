# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.1-beta] - 2019-04-08

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
