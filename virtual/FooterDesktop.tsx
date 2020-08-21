import React from 'react'
import { Menu } from 'vtex.menu'

import AcceptedPayments from './components/AcceptedPayments'
import SocialNetworkBlock from './components/SocialNetworks'

const MenuProducts = () => (
  <Menu>

  </Menu>
)

const MenuFooterClothing = () => (
  <Menu>

  </Menu>
)

const MenuFooterDecoration = () => (
  <Menu>

  </Menu>
)

const MenuFooterBags = () => (
  <Menu>

  </Menu>
)

const FooterDesktop = () => {
  return (
    <footer>
      <div className="flex footer-1-desktop">
        <div className="flex">
          <MenuProducts />
        </div>
        <div className="flex">
          <MenuFooterClothing />
        </div>
        <div className="flex">
          <MenuFooterDecoration />
        </div>
        <div className="flex">
          <MenuFooterBags />
        </div>
        <div className="flex flex-grow-1"></div>
        <SocialNetworkBlock />
      </div>
      <div className="flex footer-2-desktop">
        <AcceptedPayments />
      </div>
      <div className="flex footer-3-desktop">
        All stock and product photos are from photos.icons8.com
      </div>
    </footer>
  )
}

FooterDesktop.displayName = 'footer-desktop'

export default FooterDesktop
