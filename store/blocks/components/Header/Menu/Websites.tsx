import { Menu, MenuItem } from 'vtex.menu'

export default function Websites() {
  return (
    <Menu __id="websites">
      <MenuItem
        __id="shop"
        id="menu-item-shop"
        type="custom"
        iconId={null}
        highlight={false}
        itemProps={{
          type: 'internal',
          href: '#',
          noFollow: false,
          tagTitle: 'Shop',
          text: 'Shop',
        }}
      />
      <MenuItem
        __id="about-us"
        id="menu-item-about-us"
        type="custom"
        iconId={null}
        highlight={false}
        itemProps={{
          type: 'internal',
          href: '/about-us',
          noFollow: false,
          tagTitle: 'about-us',
          text: 'About Us',
        }}
      />
    </Menu>
  )
}
