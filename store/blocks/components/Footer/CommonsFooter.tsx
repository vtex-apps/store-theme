import { AcceptedPaymentMethods as AcceptedPaymentMethodsBlock, SocialNetworks as SocialNetworksBlock } from 'vtex.store-footer'
import { MenuItem } from 'vtex.menu'

export const AcceptedPaymentMethods = () => (
  <AcceptedPaymentMethodsBlock
    __id=""
    paymentMethods={['MasterCard', 'Visa', 'Diners Club']}
  />
)

export const SocialNetworks = () => (
  <SocialNetworksBlock
    __id=""
    socialNetworks={[
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/vtexonline/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/vtextruecloud/',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/vtexonline',
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/user/VTEXTV',
      },
    ]}
  />
)

export const MenuItemElectronics = () => (
  <>
    <MenuItem
      __id="smartphones"
      id="menu-item-smartphones"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/decoration/smartphones',
        noFollow: true,
        tagTitle: 'Smartphones',
        text: 'Smartphones',
      }}
    />

    <MenuItem
      __id="videogames"
      id="menu-item-videogames"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/decoration/videogames',
        noFollow: true,
        tagTitle: 'Videogames',
        text: 'Videogames',
      }}
    />

    <MenuItem
      __id="tvs"
      id="menu-item-tvs"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/decoration/tvs',
        noFollow: true,
        tagTitle: 'TVs',
        text: 'TVs',
      }}
    />
  </>
)

export const MenuItemsClothing = () => (
  <>
    <MenuItem
      __id="shorts"
      id="menu-item-shorts"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/clothing/shorts',
        noFollow: false,
        tagTitle: 'Shorts',
        text: 'Shorts',
      }}
    />

    <MenuItem
      __id="tank-tops"
      id="menu-item-tank-tops"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/clothing/tank-tops',
        noFollow: false,
        tagTitle: 'Tank tops',
        text: 'Tank tops',
      }}
    />

    <MenuItem
      __id="shirts"
      id="menu-item-shirts"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/clothing/shirts',
        noFollow: false,
        tagTitle: 'Shirts',
        text: 'Shirts',
      }}
    />
    <MenuItem
      __id="sweatshirt"
      id="menu-item-sweat-shirts"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/clothing/sweatshirt',
        noFollow: false,
        tagTitle: 'Sweatshirt',
        text: 'Sweatshirt',
      }}
    />
    <MenuItem
      __id="cropped"
      id="menu-item-cropped"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/clothing/cropped',
        noFollow: false,
        tagTitle: 'Cropped',
        text: 'Cropped',
      }}
    />
  </>
)
