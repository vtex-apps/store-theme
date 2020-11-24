import React from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { useCustomClasses } from 'vtex.css-handles'

function MyCustomBlock() {
  const formattedClasses = useCustomClasses(() => ({
    container: 'a',
    foo: 'b',
  }))

  return (
    <div>
      Hello
      <FormattedCurrency value={10} classes={formattedClasses} />
    </div>
  )
}

export default MyCustomBlock
