import React from 'react'
import AcceptedPayments from './components/AcceptedPayments'
import SocialNetworkBlock from './components/SocialNetworks'
import { Menu } from 'vtex.menu'

const MenuFooterMobile = () => (
  <Menu></Menu>
)

const FooterMobile = () => {
  return (
    <footer>
      <div className="flex">
        <MenuFooterMobile />
      </div>
      <div className="flex">
        <div className="flex">
          <AcceptedPayments />
        </div>
        <div className="flex">
          <SocialNetworkBlock />
        </div>
        <div className="flex">
          All stock and product photos are from photos.icons8.com
        </div>
      </div>
    </footer>
  )
}

FooterMobile.displayName = 'footer-mobile'

export default FooterMobile
