import {
  FooterLayout
} from 'vtex.store-footer'
import { FlexLayout } from 'vtex.flex-layout'
import { Menu, MenuItem, Submenu } from 'vtex.menu'
import { RichText } from 'vtex.rich-text'

import { AcceptedPaymentMethods, MenuItemElectronics, MenuItemsClothing, SocialNetworks } from './CommonsFooter'

export default function FooterMobile() {
  return (
    <FooterLayout.Mobile __id="">
      <FlexLayout.Row __id="1-footer-mobile" paddingTop={4} paddingBottom={4}>
        <Menu __id="footer-mobile" orientation="vertical">
          <MenuItem
            __id="clothing-mobile"
            id="menu-item-category-clothing"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/clothing/d',
              noFollow: true,
              tagTitle: 'Clothing',
              text: 'Clothing',
            }}
          >
            <Submenu.Accordion __id="clothing">
              <Menu __id="clothing-accordion" orientation="vertical">
                <MenuItemsClothing />
              </Menu>
            </Submenu.Accordion>
          </MenuItem>

          <MenuItem
            __id="decoration-mobile"
            itemProps={{ tagTitle: 'Decoration', text: 'Decoration' }}
          >
            <Submenu.Accordion __id="decoration">
              <Menu __id="footer-decoration-mobile">
                <MenuItemElectronics />
              </Menu>
            </Submenu.Accordion>
          </MenuItem>

          <MenuItem
            __id="sale-mobile"
            itemProps={{ tagTitle: 'Sale', text: 'Sale' }}
          >
            <Submenu.Accordion __id="sale">
              <Menu __id="footer-sale-mobile" orientation="vertical">
                <MenuItemElectronics />
              </Menu>
            </Submenu.Accordion>
          </MenuItem>
        </Menu>
      </FlexLayout.Row>

      <FlexLayout.Row
        __id="2-footer-mobile"
        blockClass="payment-methods"
        paddingTop={4}
        paddingBottom={4}
      >
        <FlexLayout.Col __id="footer-1-mobile">
          <AcceptedPaymentMethods />
          <SocialNetworks />
          <RichText
            __id="footer-mobile"
            text="All stock and product photos are from photos.icons8.com"
            blockClass="Footer"
          />
        </FlexLayout.Col>
      </FlexLayout.Row>
    </FooterLayout.Mobile>
  )
}
