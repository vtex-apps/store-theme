import React from 'react'
import { Menu, MenuItem } from 'vtex.menu'
import { menuItems } from './modules/menu'

const MenuMobile = () => {
  return (
    <Menu orientation="vertical">
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

MenuMobile.displayName = 'menu-mobile'

export default MenuMobile
