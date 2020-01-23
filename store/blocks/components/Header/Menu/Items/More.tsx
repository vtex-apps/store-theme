import { Menu, MenuItem, Submenu } from 'vtex.menu'
import { InfoCard } from 'vtex.store-components'
import { FlexLayout } from 'vtex.flex-layout'

export default function More() {
  return (
    <MenuItem
      __id="more"
      id="menu-item-custom-sale"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '#',
        noFollow: true,
        tagTitle: 'More',
        text: 'More',
      }}
    >
      <Submenu __id="custom-more" width="100%">
        <FlexLayout.Row __id="menu-more">
          <FlexLayout.Col __id="menu-more-1">
            <Menu __id="more" orientation="vertical">
              <MenuItem
                __id="about-us"
                id="menu-item-about-us"
                type="custom"
                iconId={null}
                highlight={false}
                itemProps={{
                  type: 'internal',
                  href: '/about-us',
                  noFollow: true,
                  tagTitle: 'About Us',
                  text: 'About Us',
                }}
              />
            </Menu>
          </FlexLayout.Col>
          <FlexLayout.Col __id="menu-more-2">
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
          </FlexLayout.Col>
        </FlexLayout.Row>
      </Submenu>
    </MenuItem>
  )
}
