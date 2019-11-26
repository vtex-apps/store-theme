import {
  FooterLayout,
  FooterSpacer,
} from 'vtex.store-footer'
import { FlexLayout } from 'vtex.flex-layout'
import { Menu, MenuItem } from 'vtex.menu'
import { RichText } from 'vtex.rich-text'

import { AcceptedPaymentMethods, MenuItemElectronics, MenuItemsClothing, SocialNetworks } from './CommonsFooter'

export default function FooterDesktop() {
  return (
    <FooterLayout.Desktop __id="">
      <FlexLayout.Row
        __id="footer-1-desktop"
        blockClass="menu-row"
        paddingTop={6}
        paddingBottom={3}
      >
        <Menu __id="Products" orientation="vertical">
          <MenuItem
            __id="new"
            id="menu-item-news"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '#',
              noFollow: false,
              tagTitle: 'News',
              text: 'News',
            }}
          />
          <MenuItem
            __id="blackfriday"
            id="menu-item-black-friday"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '#',
              noFollow: false,
              tagTitle: 'BlackFriday',
              text: 'Black Friday',
            }}
          />
          <MenuItem
            __id="sale"
            id="menu-item-sale"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '#',
              noFollow: false,
              tagTitle: 'Sale',
              text: 'Sale',
            }}
          />
          <MenuItem
            __id="personalization"
            id="menu-item-personalization"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '#',
              noFollow: false,
              tagTitle: 'Personalization',
              text: 'Personalization',
            }}
          />
        </Menu>

        <Menu __id="footer-clothing" orientation="vertical">
          <MenuItem
            __id="clothing"
            id="menu-item-clothing"
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
          />
          <MenuItemsClothing />
        </Menu>

        <Menu __id="footer-decoration" orientation="vertical">
          <MenuItemElectronics />
        </Menu>

        <Menu __id="footer-bags" orientation="vertical">
          <MenuItem
            __id="bags"
            id="menu-item-bags"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/bags/d',
              noFollow: true,
              tagTitle: 'Bags',
              text: 'Bags',
            }}
          />

          <MenuItem
            __id="backpacks"
            id="menu-item-backpacks"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/bags/backpacks',
              noFollow: true,
              tagTitle: 'Backpacks',
              text: 'Backpacks',
            }}
          />

          <MenuItem
            __id="backpacks"
            id="menu-item-necessaire"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/bags/necessaire',
              noFollow: true,
              tagTitle: 'Necessaire',
              text: 'Necessaire',
            }}
          />
        </Menu>

        <FooterSpacer __id={null} />

        <SocialNetworks />

      </FlexLayout.Row>

      <FlexLayout.Row __id="footer-2-desktop" blockClass="payment-methods">
        <AcceptedPaymentMethods />
      </FlexLayout.Row>

      <FlexLayout.Row __id="footer-3-desktop" blockClass="credits">
        <RichText
          __id="footer"
          blockClass="footer"
          text="All stock and product photos are from photos.icons8.com"
        />
      </FlexLayout.Row>
    </FooterLayout.Desktop>
  )
}
