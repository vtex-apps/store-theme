import React from 'react'

const SlotComponent = ({ Custom, SecondCustom, ...rest }) => {
  return (
    <div>
      <div>Slot component</div>
      <Custom {...rest}></Custom>

      <br />
      <div>Second element</div>
      <SecondCustom />
    </div>
  )
}

export default SlotComponent
