import React from 'react'
import { SearchBar, NotificationBar, Logo } from 'vtex.store-components'
import { index as Telemarketing } from 'vtex.telemarketing'
import { LocaleSwitcher } from 'vtex.locale-switcher'
import { StickyLayout } from 'vtex.sticky-layout'
import { Login } from 'vtex.login'
import { Minicart } from 'vtex.minicart'

import MenuVirtual from './Menu'
import styles from './HeaderDesktop.css'

const HeaderDesktop = () => {
  return (
    <header>
      <Telemarketing />

      <NotificationBar content="SELECTED ITEMS ON SALE! CHECK IT OUT!" />

      <div className={`${styles.darkRow} flex`}>
        <nav>
          <ul className="flex list pa0">
            <li className="list">
              <a
                className="mh6 pv5 no-underline t-body c-on-base--inverted"
                href="#"
                title="Shop"
              >
                Shop
              </a>
            </li>
            <li className="list">
              <a
                className="mh6 pv5 no-underline t-body c-on-base--inverted"
                href="/about-us"
              >
                About us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-grow-1"></div>
        <div className="flex">
          <a
            className="mh6 pv5 no-underline t-body c-on-base--inverted"
            href="http://vtex.com"
          >
            Visit vtex.com
          </a>
        </div>
      </div>

      <div className={styles.themeHeader}>
        <StickyLayout>
          <div className={`${styles.mainHeader} flex`}>
            <div className="flex items-center">
              <Logo
                title="Logo"
                href="/"
                url="https://storecomponents.vteximg.com.br/arquivos/store-theme-logo.png"
                width="180"
              />
            </div>
            <div className="flex items-center">
              <MenuVirtual />
            </div>
            <div className="flex flex-grow-1"></div>
            <div className="flex">
              <SearchBar />
            </div>
            <div className="flex">
              <LocaleSwitcher />
            </div>
            <div className="flex">
              <Login hideIconLabel showIconProfile />
            </div>
            <div className="flex">
              <Minicart />
            </div>
          </div>
        </StickyLayout>
      </div>
    </header>
  )
}

HeaderDesktop.displayName = 'header-desktop'

export default HeaderDesktop
