import React from 'react'
import { Logo } from 'vtex.store-components'
import { Drawer } from 'vtex.store-drawer'
import { StickyLayout } from 'vtex.sticky-layout'
import { Login } from 'vtex.login'
import { Minicart } from 'vtex.minicart'

import styles from './HeaderDesktop.css'
import MenuMobile from './MenuMobile'

const HeaderMobile = () => {
  return (
    <header className={styles.themeHeader}>
      <StickyLayout>
        <div className={`${styles.mainHeaderMobile} flex items-center justify-start`}>
          <div className="flex">
            <Drawer>
              <MenuMobile />
            </Drawer>
          </div>
          <div className="flex items-center">
            <Logo
              title="Logo"
              href="/"
              url="https://storecomponents.vtexassets.com/arquivos/store-theme-logo-mobile.png"
              width="70"
            />
          </div>
          <div className="flex flex-grow-1"></div>
          <div className="flex">
            <Login hideIconLabel showIconProfile />
          </div>
          <div className="flex">
            <Minicart />
          </div>
        </div>
      </StickyLayout>
    </header>
  )
}

HeaderMobile.displayName = "header-mobile"

export default HeaderMobile
