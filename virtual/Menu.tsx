import React from 'react'
import { Menu, MenuItem, Submenu } from 'vtex.menu'

const menuItems = [
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
    Submenu: (
      <Submenu width="auto">
        <Menu orientation="vertical"></Menu>
      </Submenu>
    ),
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
  },
]

const MenuVirtual = () => {
  return (
    <Menu experimentalOptimizeRendering={true}>
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          id={menuItem.id}
          type={menuItem.type}
          highlight={menuItem.highlight}
          itemProps={menuItem.itemProps}
          Submenu={menuItem.Submenu}
        />
      ))}
    </Menu>
  )
}

MenuVirtual.displayName = 'menuvirtual'

export default MenuVirtual
