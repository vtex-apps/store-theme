import { MenuItem } from 'vtex.menu'

export default function Decoration() {
  return (
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
  )
}
