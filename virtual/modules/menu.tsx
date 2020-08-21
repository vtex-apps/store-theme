import React from 'react'
import { Menu, MenuItem, Submenu } from 'vtex.menu'
import { InfoCard } from 'vtex.store-components'

export const apparelItems = [
  {
    id: 'menu-item-category-apparel-clothing',
    type: 'custom',
    iconId: null,
    highlight: false,
    itemProps: {
      type: 'internal',
      href: '/apparel---accessories/clothing/',
      noFollow: false,
      tagTitle: 'Clothing',
      text: 'Clothing',
    },
  },
  {
    id: 'menu-item-category-apparel-accessories',
    type: 'custom',
    iconId: null,
    highlight: false,
    itemProps: {
      type: 'internal',
      href: '/apparel---accessories/accessories/',
      noFollow: false,
      tagTitle: 'Accessories',
      text: 'Accessories',
    },
  },
  {
    id: 'menu-item-category-apparel-eyeglasses',
    type: 'custom',
    iconId: null,
    highlight: false,
    itemProps: {
      type: 'internal',
      href: '/apparel---accessories/eyeglasses/',
      noFollow: false,
      tagTitle: 'Eyeglasses',
      text: 'Eyeglasses',
    },
  },
]

const apparelSubmenu = ({ isOpen }: { isOpen: boolean }) => (
  <Submenu width="auto" isOpen={isOpen}>
    <Menu orientation="vertical">
      {apparelItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          id={menuItem.id}
          type={menuItem.type}
          highlight={menuItem.highlight}
          itemProps={menuItem.itemProps}
        />
      ))}
    </Menu>
  </Submenu>
)

const moreSubmenu = ({ isOpen }: { isOpen: boolean }) => (
  <Submenu width="100%" isOpen={isOpen}>
    <div className="flex">
      <div className="w-50">
        <Menu orientation="vertical">
          <MenuItem
            id="menu-item-about-us"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/about-us',
              noFollow: true,
              tagTitle: 'About us',
              text: 'About us',
            }}
          />
        </Menu>
      </div>
      <div className="w-50">
        <InfoCard
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
      </div>
    </div>
  </Submenu>
)

export const menuItems = [
  {
    id: 'menu-item-category-apparel',
    type: 'custom',
    iconId: null,
    highlight: false,
    itemProps: {
      type: 'internal',
      href: '/apparel---accessories/',
      noFollow: false,
      tagTitle: 'Apparel & Accessories',
      text: 'Apparel & Accessories',
    },
    Submenu: apparelSubmenu,
  },
  {
    id: 'menu-item-category-home',
    type: 'custom',
    iconId: null,
    highlight: false,
    itemProps: {
      type: 'internal',
      href: '/home---decor/',
      noFollow: false,
      tagTitle: 'Home & Decor',
      text: 'Home & Decor',
    },
  },
  {
    id: 'menu-item-custom-sale',
    type: 'custom',
    iconId: null,
    highlight: false,
    itemProps: {
      type: 'internal',
      href: '#',
      noFollow: true,
      tagTitle: 'More',
      text: 'More',
    },
    Submenu: moreSubmenu,
  },
]
