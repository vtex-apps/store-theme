import { OrderPlaced } from 'vtex.order-placed'
import { MyAccount } from 'vtex.my-account'
import { LoginContent } from 'vtex.login'

export default function Blocks() {
  return (
    <>
      <template name="store.orderplaced">
        <OrderPlaced __id={null} />
      </template>
      <template
        name="store.account"
        parent={{ challenge: 'challenge.profile' }}
      >
        <MyAccount __id={null} />
      </template>
      <template name="store.login">
        <LoginContent
          __id="default"
          isInitialScreenOptionOnly={false}
          defaultOption={1}
          showPasswordVerificationIntoTooltip
        />
      </template>
    </>
  )
}
