import { Menu, MenuItem, Submenu } from 'vtex.menu'

export default function Clothing() {
  return (
    <MenuItem
      __id="category-clothing"
      id="menu-item-category-clothing"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/apparel---accessories/clothing/',
        noFollow: true,
        tagTitle: 'Clothing',
        text: 'Clothing',
      }}
    >
      <Submenu __id="category-clothing" width="auto">
        <Menu __id="category-clothing" orientation="vertical">
          <MenuItem
            __id="category-clothing-hats"
            id="menu-item-category-clothing-hats"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/apparel---accessories/hats/',
              noFollow: true,
              tagTitle: 'Hats',
              text: 'Hats',
            }}
          />

          <MenuItem
            __id="category-clothing-shoes"
            id="menu-item-category-clothing-shoes"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/apparel---accessories/shoes/',
              noFollow: true,
              tagTitle: 'Shoes',
              text: 'Shoes',
            }}
          />

          <MenuItem
            __id="category-clothing-bags"
            id="menu-item-category-clothing-bags"
            type="custom"
            iconId={null}
            highlight={false}
            itemProps={{
              type: 'internal',
              href: '/apparel---accessories/bags/',
              noFollow: true,
              tagTitle: 'Bags',
              text: 'Bags',
            }}
          />
        </Menu>
      </Submenu>
    </MenuItem>
  )
}
