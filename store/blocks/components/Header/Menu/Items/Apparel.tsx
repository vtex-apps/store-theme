import { Menu, MenuItem, Submenu } from 'vtex.menu'

export default function Apparel() {
  return (
    <MenuItem
      __id="category-apparel"
      id="menu-item-category-apparel"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/apparel---accessories/',
        noFollow: false,
        tagTitle: 'Apparel & Accessories',
        text: 'Apparel & Accessories',
      }}
    >
      <Submenu __id="category-apparel" width="auto">
        <Menu __id="category-apparel" orientation="vertical">
          <MenuItem
            __id="category-apparel-clothing"
            id="menu-item-category-clothing-hats"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/apparel---accessories/clothing/',
              noFollow: false,
              tagTitle: 'Clothing',
              text: 'Clothing',
            }}
          />

          <MenuItem
            __id="category-apparel-accessories"
            id="menu-item-category-apparel-accessories"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/apparel---accessories/accessories/',
              noFollow: false,
              tagTitle: 'Accessories',
              text: 'Accessories',
            }}
          />

          <MenuItem
            __id="category-apparel-eyeglasses"
            id="menu-item-category-apparel-eyeglasses"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/apparel---accessories/eyeglasses/',
              noFollow: false,
              tagTitle: 'Eyeglasses',
              text: 'Eyeglasses',
            }}
          />
        </Menu>
      </Submenu>
    </MenuItem>
  )
}
