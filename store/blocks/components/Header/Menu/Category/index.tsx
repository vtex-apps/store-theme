import { Menu, MenuItem, Submenu } from 'vtex.menu'
import { InfoCard } from 'vtex.store-components'

import MenuItemClothing from '../Items/Clothing'

export default function CategoryMenu() {
  return (
    <Menu __id="category-menu">
      <MenuItemClothing />

      <MenuItem
        __id="category-decoration"
        id="menu-item-category-decoration"
        type="custom"
        iconId={null}
        highlight={false}
        itemProps={{
          type: 'internal',
          href: '/home---decor/',
          noFollow: true,
          tagTitle: 'Decoration',
          text: 'Decoration',
        }}
      />

      <MenuItem
        __id="custom-sale"
        id="menu-item-custom-sale"
        type="custom"
        iconId={null}
        highlight={false}
        itemProps={{
          type: 'internal',
          href: '/sale/d',
          noFollow: true,
          tagTitle: 'Sale',
          text: 'Sale',
        }}
      >
        <Submenu __id="custom-sale" width="100%">
          <Menu __id="custom-sale" orientation="vertical">
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
          </Menu>
          <InfoCard
            __id="home"
            id="info-card-home"
            isFullModeStyle={false}
            textPosition="left"
            imageUrl="https://storecomponents.vteximg.com.br/arquivos/banner-infocard2.png"
            headline="Clearance Sale"
            callToActionText="DISCOVER"
            callToActionUrl="/sale/d"
            blockClass="info-card-home"
            textAlignment="center"
          />
        </Submenu>
      </MenuItem>
    </Menu>
  )
}
