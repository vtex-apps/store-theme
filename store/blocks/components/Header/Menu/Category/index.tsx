import { Menu } from 'vtex.menu'

import MenuItemApparel from '../Items/Apparel'
import MenuItemHomeAndDecor from '../Items/HomeAndDecor'
import MenuItemMore from '../Items/More'

export default function CategoryMenu() {
  return (
    <Menu __id="category-menu">
      <MenuItemApparel />
      <MenuItemHomeAndDecor />
      <MenuItemMore />
    </Menu>
  )
}
