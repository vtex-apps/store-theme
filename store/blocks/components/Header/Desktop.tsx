import { HeaderLayout, HeaderRow, HeaderSpacer } from 'vtex.store-header'
import { Telemarketing } from 'vtex.telemarketing'
import { Notification, Logo, SearchBar } from 'vtex.store-components'
import { LocaleSwitcher } from 'vtex.locale-switcher'
import { Login } from 'vtex.login'

import MenuCategory from './Menu/Category'
import MenuInstitutional from './Menu/Institutional'
import MenuWebsites from './Menu/Websites'
import Minicart from './Minicart'

export default function Desktop() {
  return (
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
        <MenuWebsites />
        <HeaderSpacer __id={null} />
        <MenuInstitutional />
      </HeaderRow>

      <HeaderRow __id="4-desktop" sticky blockClass="main-header">
        <Logo
          __id="desktop"
          title="Logo"
          href="/"
          url="https://storecomponents.vteximg.com.br/arquivos/store-theme-logo.png"
          width="180"
        />
        <MenuCategory />
        <HeaderSpacer __id={null} />
        <HeaderSpacer __id={null} />
        <SearchBar __id={null} />
        <LocaleSwitcher __id={null} />
        <Login __id={null} />
        <Minicart />
      </HeaderRow>
    </HeaderLayout.Desktop>
  )
}
