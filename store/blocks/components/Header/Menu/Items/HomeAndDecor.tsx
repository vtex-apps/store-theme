import { MenuItem } from 'vtex.menu'

export default function Home () {
  return (
    <MenuItem
      __id="category-home"
      id="menu-item-category-home"
      type="custom"
      iconId={null}
      highlight={false}
      itemProps={{
        type: 'internal',
        href: '/home---decor/',
        noFollow: false,
        tagTitle: 'Home & Decor',
        text: 'Home & Decor',
      }}
    />
  )
}
