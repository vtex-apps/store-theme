import React from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { useCssHandles, useCustomClasses } from 'vtex.css-handles'

const CSS_HANDLES = ['currency'] as const

const formatCurrencyNamespace = 'vtex-format-currency-0-x-'

function MyCustomBlock() {
  const { handles } = useCssHandles(CSS_HANDLES)

  const formattedClasses = useCustomClasses(() => ({
    currencyContainer: handles.currency,
    currencyCode: `${formatCurrencyNamespace}currencyCode`,
  }))

  return (
    <div>
      Hello
      <FormattedCurrency value={10} classes={formattedClasses} />
    </div>
  )
}

export default MyCustomBlock
