import { HeaderLayout, HeaderRow, HeaderSpacer } from 'vtex.store-header'
import { Logo } from 'vtex.store-components'
import { Menu } from 'vtex.menu'
import { Login } from 'vtex.login'
import { Drawer } from 'vtex.store-drawer'

import MenuItemApparel from './Menu/Items/Apparel'
import MenuItemHomeAndDecor from './Menu/Items/HomeAndDecor'
import MenuItemMore from './Menu/Items/More'
import Minicart from './Minicart'

export default function Mobile() {
  return (
    <HeaderLayout.Mobile __id="">
      <HeaderRow __id="1-mobile">
        <Drawer __id="">
          <Menu __id="drawer" orientation="vertical">
            <MenuItemApparel />
            <MenuItemHomeAndDecor />
            <MenuItemMore />
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
