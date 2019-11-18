import { HeaderLayout, HeaderRow, HeaderSpacer } from 'vtex.store-header'
import { Telemarketing } from 'vtex.telemarketing'
import { Notification, Logo, SearchBar, InfoCard } from 'vtex.store-components'
import { Menu, MenuItem, Submenu } from 'vtex.menu'
import { LocaleSwitcher } from 'vtex.locale-switcher'
import { Login } from 'vtex.login'
import { Minicart } from 'vtex.minicart'
import { ProductSummary } from 'vtex.product-summary'
import { Drawer } from 'vtex.store-drawer'

export default function Header() {
  return (
    <>
      <template name="header">
        <HeaderLayout.Desktop __id="">
          <HeaderRow __id="1-desktop" fullWidth>
            <Telemarketing __id={null} />
          </HeaderRow>

          <HeaderRow __id="2-desktop" fullWidth>
            <Notification.Bar
              __id="home"
              content="SELECTED ITEMS ON SALE! CHECK IT OUT!"
            />
          </HeaderRow>

          <HeaderRow __id="3-desktop" blockClass="menu-link" inverted="true">
            <Menu __id="websites">
              <MenuItem
                __id="shop"
                id="menu-item-shop"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '#',
                  noFollow: false,
                  tagTitle: 'Shop',
                  text: 'Shop',
                }}
              />
              <MenuItem
                __id="about-us"
                id="menu-item-about-us"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/about-us',
                  noFollow: false,
                  tagTitle: 'about-us',
                  text: 'About Us',
                }}
              />
            </Menu>
            <HeaderSpacer __id={null} />
            <Menu __id="institucional">
              <MenuItem
                __id="vtex-website"
                id="menu-item-vtex-website"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'external',
                  href: 'http://vtex.com',
                  noFollow: false,
                  tagTitle: 'visit vtex.com',
                  text: 'visit vtex.com',
                }}
              />
            </Menu>
          </HeaderRow>

          <HeaderRow __id="4-desktop" sticky blockClass="main-header">
            <Logo
              __id="desktop"
              title="Logo"
              href="/"
              url="https://storecomponents.vteximg.com.br/arquivos/store-theme-logo.png"
              width="180"
            />
            <Menu __id="category-menu">
              <MenuItem
                __id="category-clothing"
                id="menu-item-category-clothing"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/apparel---accessories/clothing/',
                  noFollow: true,
                  tagTitle: 'Clothing',
                  text: 'Clothing',
                }}
              >
                <Submenu __id="category-clothing" width="auto">
                  <Menu __id="category-clothing" orientation="vertical">
                    <MenuItem
                      __id="category-clothing-hats"
                      id="menu-item-category-clothing-hats"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/hats/',
                        noFollow: true,
                        tagTitle: 'Hats',
                        text: 'Hats',
                      }}
                    />

                    <MenuItem
                      __id="category-clothing-shoes"
                      id="menu-item-category-clothing-shoes"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/shoes/',
                        noFollow: true,
                        tagTitle: 'Shoes',
                        text: 'Shoes',
                      }}
                    />

                    <MenuItem
                      __id="category-clothing-bags"
                      id="menu-item-category-clothing-bags"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/bags/',
                        noFollow: true,
                        tagTitle: 'Bags',
                        text: 'Bags',
                      }}
                    />
                  </Menu>
                </Submenu>
              </MenuItem>

              <MenuItem
                __id="category-decoration"
                id="menu-item-category-decoration"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/home---decor/',
                  noFollow: true,
                  tagTitle: 'Decoration',
                  text: 'Decoration',
                }}
              />

              <MenuItem
                __id="custom-sale"
                id="menu-item-custom-sale"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/sale/d',
                  noFollow: true,
                  tagTitle: 'Sale',
                  text: 'Sale',
                }}
              >
                <Submenu __id="custom-sale" width="100%">
                  <Menu __id="custom-sale" orientation="vertical">
                    <MenuItem
                      __id="category-clothing-hats"
                      id="menu-item-category-clothing-hats"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/hats/',
                        noFollow: true,
                        tagTitle: 'Hats',
                        text: 'Hats',
                      }}
                    />
                    <MenuItem
                      __id="category-clothing-shoes"
                      id="menu-item-category-clothing-shoes"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/shoes/',
                        noFollow: true,
                        tagTitle: 'Shoes',
                        text: 'Shoes',
                      }}
                    />
                  </Menu>
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
                </Submenu>
              </MenuItem>
            </Menu>
            <HeaderSpacer __id={null} />
            <HeaderSpacer __id={null} />
            <SearchBar __id={null} />
            <LocaleSwitcher __id={null} />
            <Login __id={null} />
            <Minicart
              __id=""
              type="popup"
              showRemoveButton
              showDiscount
              showSku
              labelMiniCartEmpty=""
              labelButtonFinishShopping="Go to checkout"
              enableQuantitySelector
              maxQuantity={10}
              labelClasses="gray"
            >
              <ProductSummary __id={null} />
            </Minicart>
          </HeaderRow>
        </HeaderLayout.Desktop>

        <HeaderLayout.Mobile __id="">
          <HeaderRow __id="1-mobile">
            <Drawer __id="">
              <Menu __id="drawer" orientation="vertical">
                <MenuItem
                  __id="category-clothing"
                  id="menu-item-category-clothing"
                  type="custom"
                  iconId={null}
                  highlight={false}
                  itemProps={{
                    type: 'internal',
                    href: '/apparel---accessories/clothing/',
                    noFollow: true,
                    tagTitle: 'Clothing',
                    text: 'Clothing',
                  }}
                >
                  <Submenu __id="category-clothing" width="auto">
                    <Menu __id="category-clothing" orientation="vertical">
                      <MenuItem
                        __id="category-clothing-hats"
                        id="menu-item-category-clothing-hats"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/hats/',
                          noFollow: true,
                          tagTitle: 'Hats',
                          text: 'Hats',
                        }}
                      />

                      <MenuItem
                        __id="category-clothing-shoes"
                        id="menu-item-category-clothing-shoes"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/shoes/',
                          noFollow: true,
                          tagTitle: 'Shoes',
                          text: 'Shoes',
                        }}
                      />

                      <MenuItem
                        __id="category-clothing-bags"
                        id="menu-item-category-clothing-bags"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/bags/',
                          noFollow: true,
                          tagTitle: 'Bags',
                          text: 'Bags',
                        }}
                      />
                    </Menu>
                  </Submenu>
                </MenuItem>
                <MenuItem
                  __id="category-decoration"
                  id="menu-item-category-decoration"
                  type="custom"
                  iconId={null}
                  highlight={false}
                  itemProps={{
                    type: 'internal',
                    href: '/home---decor/',
                    noFollow: true,
                    tagTitle: 'Decoration',
                    text: 'Decoration',
                  }}
                />
                <MenuItem
                  __id="custom-sale"
                  id="menu-item-custom-sale"
                  type="custom"
                  iconId={null}
                  highlight={false}
                  itemProps={{
                    type: 'internal',
                    href: '/sale/d',
                    noFollow: true,
                    tagTitle: 'Sale',
                    text: 'Sale',
                  }}
                >
                  <Submenu __id="custom-sale" width="100%">
                    <Menu __id="custom-sale" orientation="vertical">
                      <MenuItem
                        __id="category-clothing-hats"
                        id="menu-item-category-clothing-hats"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/hats/',
                          noFollow: true,
                          tagTitle: 'Hats',
                          text: 'Hats',
                        }}
                      />
                      <MenuItem
                        __id="category-clothing-shoes"
                        id="menu-item-category-clothing-shoes"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/shoes/',
                          noFollow: true,
                          tagTitle: 'Shoes',
                          text: 'Shoes',
                        }}
                      />
                    </Menu>
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
                  </Submenu>
                </MenuItem>
              </Menu>
            </Drawer>
            <Logo
              __id="mobile"
              title="Logo"
              href="/"
              url="https://storecomponents.vteximg.com.br/arquivos/store-theme-logo-mobile.png"
              width="70"
            />
            <HeaderSpacer __id={null} />
            <Login __id={null} />
            <Minicart
              __id=""
              type="popup"
              showRemoveButton
              showDiscount
              showSku
              labelMiniCartEmpty=""
              labelButtonFinishShopping="Go to checkout"
              enableQuantitySelector
              maxQuantity={10}
              labelClasses="gray"
            >
              <ProductSummary __id={null} />
            </Minicart>
          </HeaderRow>
        </HeaderLayout.Mobile>
      </template>
      <template name="header.full">
        <HeaderLayout.Desktop __id="">
          <HeaderRow __id="1-desktop" fullWidth>
            <Telemarketing __id={null} />
          </HeaderRow>

          <HeaderRow __id="2-desktop" fullWidth>
            <Notification.Bar
              __id="home"
              content="SELECTED ITEMS ON SALE! CHECK IT OUT!"
            />
          </HeaderRow>

          <HeaderRow __id="3-desktop" blockClass="menu-link" inverted="true">
            <Menu __id="websites">
              <MenuItem
                __id="shop"
                id="menu-item-shop"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '#',
                  noFollow: false,
                  tagTitle: 'Shop',
                  text: 'Shop',
                }}
              />
              <MenuItem
                __id="about-us"
                id="menu-item-about-us"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/about-us',
                  noFollow: false,
                  tagTitle: 'about-us',
                  text: 'About Us',
                }}
              />
            </Menu>
            <HeaderSpacer __id={null} />
            <Menu __id="institucional">
              <MenuItem
                __id="vtex-website"
                id="menu-item-vtex-website"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'external',
                  href: 'http://vtex.com',
                  noFollow: false,
                  tagTitle: 'visit vtex.com',
                  text: 'visit vtex.com',
                }}
              />
            </Menu>
          </HeaderRow>

          <HeaderRow __id="4-desktop" sticky blockClass="main-header">
            <Logo
              __id="desktop"
              title="Logo"
              href="/"
              url="https://storecomponents.vteximg.com.br/arquivos/store-theme-logo.png"
              width="180"
            />
            <Menu __id="category-menu">
              <MenuItem
                __id="category-clothing"
                id="menu-item-category-clothing"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/apparel---accessories/clothing/',
                  noFollow: true,
                  tagTitle: 'Clothing',
                  text: 'Clothing',
                }}
              >
                <Submenu __id="category-clothing" width="auto">
                  <Menu __id="category-clothing" orientation="vertical">
                    <MenuItem
                      __id="category-clothing-hats"
                      id="menu-item-category-clothing-hats"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/hats/',
                        noFollow: true,
                        tagTitle: 'Hats',
                        text: 'Hats',
                      }}
                    />

                    <MenuItem
                      __id="category-clothing-shoes"
                      id="menu-item-category-clothing-shoes"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/shoes/',
                        noFollow: true,
                        tagTitle: 'Shoes',
                        text: 'Shoes',
                      }}
                    />

                    <MenuItem
                      __id="category-clothing-bags"
                      id="menu-item-category-clothing-bags"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/bags/',
                        noFollow: true,
                        tagTitle: 'Bags',
                        text: 'Bags',
                      }}
                    />
                  </Menu>
                </Submenu>
              </MenuItem>

              <MenuItem
                __id="category-decoration"
                id="menu-item-category-decoration"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/home---decor/',
                  noFollow: true,
                  tagTitle: 'Decoration',
                  text: 'Decoration',
                }}
              />

              <MenuItem
                __id="custom-sale"
                id="menu-item-custom-sale"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/sale/d',
                  noFollow: true,
                  tagTitle: 'Sale',
                  text: 'Sale',
                }}
              >
                <Submenu __id="custom-sale" width="100%">
                  <Menu __id="custom-sale" orientation="vertical">
                    <MenuItem
                      __id="category-clothing-hats"
                      id="menu-item-category-clothing-hats"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/hats/',
                        noFollow: true,
                        tagTitle: 'Hats',
                        text: 'Hats',
                      }}
                    />
                    <MenuItem
                      __id="category-clothing-shoes"
                      id="menu-item-category-clothing-shoes"
                      type="custom"
                      iconId={null}
                      highlight={false}
                      itemProps={{
                        type: 'internal',
                        href: '/apparel---accessories/shoes/',
                        noFollow: true,
                        tagTitle: 'Shoes',
                        text: 'Shoes',
                      }}
                    />
                  </Menu>
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
                </Submenu>
              </MenuItem>
            </Menu>
            <HeaderSpacer __id={null} />
            <HeaderSpacer __id={null} />
            <SearchBar __id={null} />
            <LocaleSwitcher __id={null} />
            <Login __id={null} />
            <Minicart
              __id=""
              type="popup"
              showRemoveButton
              showDiscount
              showSku
              labelMiniCartEmpty=""
              labelButtonFinishShopping="Go to checkout"
              enableQuantitySelector
              maxQuantity={10}
              labelClasses="gray"
            >
              <ProductSummary __id={null} />
            </Minicart>
          </HeaderRow>
        </HeaderLayout.Desktop>

        <HeaderLayout.Mobile __id="">
          <HeaderRow __id="1-mobile">
            <Drawer __id="">
              <Menu __id="drawer" orientation="vertical">
                <MenuItem
                  __id="category-clothing"
                  id="menu-item-category-clothing"
                  type="custom"
                  iconId={null}
                  highlight={false}
                  itemProps={{
                    type: 'internal',
                    href: '/apparel---accessories/clothing/',
                    noFollow: true,
                    tagTitle: 'Clothing',
                    text: 'Clothing',
                  }}
                >
                  <Submenu __id="category-clothing" width="auto">
                    <Menu __id="category-clothing" orientation="vertical">
                      <MenuItem
                        __id="category-clothing-hats"
                        id="menu-item-category-clothing-hats"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/hats/',
                          noFollow: true,
                          tagTitle: 'Hats',
                          text: 'Hats',
                        }}
                      />

                      <MenuItem
                        __id="category-clothing-shoes"
                        id="menu-item-category-clothing-shoes"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/shoes/',
                          noFollow: true,
                          tagTitle: 'Shoes',
                          text: 'Shoes',
                        }}
                      />

                      <MenuItem
                        __id="category-clothing-bags"
                        id="menu-item-category-clothing-bags"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/bags/',
                          noFollow: true,
                          tagTitle: 'Bags',
                          text: 'Bags',
                        }}
                      />
                    </Menu>
                  </Submenu>
                </MenuItem>
                <MenuItem
                  __id="category-decoration"
                  id="menu-item-category-decoration"
                  type="custom"
                  iconId={null}
                  highlight={false}
                  itemProps={{
                    type: 'internal',
                    href: '/home---decor/',
                    noFollow: true,
                    tagTitle: 'Decoration',
                    text: 'Decoration',
                  }}
                />
                <MenuItem
                  __id="custom-sale"
                  id="menu-item-custom-sale"
                  type="custom"
                  iconId={null}
                  highlight={false}
                  itemProps={{
                    type: 'internal',
                    href: '/sale/d',
                    noFollow: true,
                    tagTitle: 'Sale',
                    text: 'Sale',
                  }}
                >
                  <Submenu __id="custom-sale" width="100%">
                    <Menu __id="custom-sale" orientation="vertical">
                      <MenuItem
                        __id="category-clothing-hats"
                        id="menu-item-category-clothing-hats"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/hats/',
                          noFollow: true,
                          tagTitle: 'Hats',
                          text: 'Hats',
                        }}
                      />
                      <MenuItem
                        __id="category-clothing-shoes"
                        id="menu-item-category-clothing-shoes"
                        type="custom"
                        iconId={null}
                        highlight={false}
                        itemProps={{
                          type: 'internal',
                          href: '/apparel---accessories/shoes/',
                          noFollow: true,
                          tagTitle: 'Shoes',
                          text: 'Shoes',
                        }}
                      />
                    </Menu>
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
                  </Submenu>
                </MenuItem>
              </Menu>
            </Drawer>
            <Logo
              __id="mobile"
              title="Logo"
              href="/"
              url="https://storecomponents.vteximg.com.br/arquivos/store-theme-logo-mobile.png"
              width="70"
            />
            <HeaderSpacer __id={null} />
            <Login __id={null} />
            <Minicart
              __id=""
              type="popup"
              showRemoveButton
              showDiscount
              showSku
              labelMiniCartEmpty=""
              labelButtonFinishShopping="Go to checkout"
              enableQuantitySelector
              maxQuantity={10}
              labelClasses="gray"
            >
              <ProductSummary __id={null} />
            </Minicart>
          </HeaderRow>
        </HeaderLayout.Mobile>
      </template>
    </>
  )
}
