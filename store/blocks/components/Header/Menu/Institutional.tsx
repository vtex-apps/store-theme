import { Menu, MenuItem } from 'vtex.menu'

export default function Institutional() {
  return (
    <Menu __id="institucional">
      <MenuItem
        __id="vtex-website"
        id="menu-item-vtex-website"
        type="custom"
        iconId={null}
        highlight={false}
        itemProps={{
          type: 'external',
          href: 'http://vtex.com',
          noFollow: false,
          tagTitle: 'visit vtex.com',
          text: 'visit vtex.com',
        }}
      />
    </Menu>
  )
}
