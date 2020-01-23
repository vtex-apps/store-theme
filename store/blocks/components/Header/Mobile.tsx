import { HeaderLayout, HeaderRow, HeaderSpacer } from 'vtex.store-header'
import { Logo } from 'vtex.store-components'
import { Menu } from 'vtex.menu'
import { Login } from 'vtex.login'
import { Drawer } from 'vtex.store-drawer'

import MenuItemClothing from './Menu/Items/Clothing'
import MenuItemDecoration from './Menu/Items/Decoration'
import MenuItemCustomSale from './Menu/Items/CustomSale'
import Minicart from './Minicart'

export default function Mobile() {
  return (
    <HeaderLayout.Mobile __id="">
      <HeaderRow __id="1-mobile">
        <Drawer __id="">
          <Menu __id="drawer" orientation="vertical">
            <MenuItemClothing />
            <MenuItemDecoration />
            <MenuItemCustomSale />
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
        <Minicart />
      </HeaderRow>
    </HeaderLayout.Mobile>
  )
}
