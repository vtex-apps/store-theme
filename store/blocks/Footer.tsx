import {
  FooterLayout,
  FooterSpacer,
  SocialNetworks,
  AcceptedPaymentMethods,
} from 'vtex.store-footer'
import { FlexLayout } from 'vtex.flex-layout'
import { Menu, MenuItem, Submenu } from 'vtex.menu'
import { RichText } from 'vtex.rich-text'

export default function Footer() {
  return (
    <template name="footer">
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

            <MenuItem
              __id="shorts"
              id="menu-item-shorts"
              type="custom"
              iconId={null}
              highlight={false}
              itemProps={{
                type: 'internal',
                href: '/clothing/shorts',
                noFollow: true,
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
                noFollow: true,
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
                noFollow: true,
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
                noFollow: true,
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
                noFollow: true,
                tagTitle: 'Cropped',
                text: 'Cropped',
              }}
            />
          </Menu>

          <Menu __id="footer-decoration" orientation="vertical">
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

          <SocialNetworks
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
        </FlexLayout.Row>

        <FlexLayout.Row __id="footer-2-desktop" blockClass="payment-methods">
          <AcceptedPaymentMethods
            __id=""
            paymentMethods={['MasterCard', 'Visa', 'Diners Club']}
          />
        </FlexLayout.Row>

        <FlexLayout.Row __id="footer-3-desktop" blockClass="credits">
          <RichText
            __id="footer"
            blockClass="footer"
            text="All stock and product photos are from photos.icons8.com"
          />
        </FlexLayout.Row>
      </FooterLayout.Desktop>

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
                href: '/clothing/d"',
                noFollow: true,
                tagTitle: 'Clothing',
                text: 'Clothing',
              }}
            >
              <Submenu.Accordion __id="clothing">
                <Menu __id="clothing-accordion" orientation="vertical">
                  <MenuItem
                    __id="shorts"
                    id="menu-item-shorts"
                    type="custom"
                    iconId={null}
                    highlight={false}
                    itemProps={{
                      type: 'internal',
                      href: '/clothing/shorts"',
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
                      href: '/clothing/tank-tops"',
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
                      href: '/clothing/shirts"',
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
                      href: '/clothing/sweatshirt"',
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
                      href: '/clothing/cropped"',
                      noFollow: false,
                      tagTitle: 'Cropped',
                      text: 'Cropped',
                    }}
                  />
                </Menu>
              </Submenu.Accordion>
            </MenuItem>

            <MenuItem
              __id="decoration-mobile"
              itemProps={{ tagTitle: 'Decoration', text: 'Decoration' }}
            >
              <Submenu.Accordion __id="decoration">
                <Menu __id="footer-decoration-mobile">
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
                </Menu>
              </Submenu.Accordion>
            </MenuItem>

            <MenuItem
              __id="sale-mobile"
              itemProps={{ tagTitle: 'Sale', text: 'Sale' }}
            >
              <Submenu.Accordion __id="sale">
                <Menu __id="footer-sale-mobile" orientation="vertical">
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
            <AcceptedPaymentMethods
              __id=""
              paymentMethods={['MasterCard', 'Visa', 'Diners Club']}
            />
            <SocialNetworks
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
            <RichText
              __id="footer-mobile"
              text="All stock and product photos are from photos.icons8.com"
              blockClass="Footer"
            />
          </FlexLayout.Col>
        </FlexLayout.Row>
      </FooterLayout.Mobile>
    </template>
  )
}
