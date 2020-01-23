import DesktopHeader from './components/Header/Desktop'
import MobileHeader from './components/Header/Mobile'

export default function Header() {
  return (
    <>
      <template name="header">
        <DesktopHeader />

        <MobileHeader />
      </template>

      <template name="header.full">
        <DesktopHeader />

        <MobileHeader />
      </template>
    </>
  )
}
