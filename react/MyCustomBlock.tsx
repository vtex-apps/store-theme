import React from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { useCustomClasses } from 'vtex.css-handles'

import style from './style.css'
import styleModule from './style.module.css'
import './style.global.css'
import './global.css'
import './theme.css'

function MyCustomBlock() {
  const formattedClasses = useCustomClasses(() => ({
    currencyContainer: [style.currency, styleModule.currency],
    currencyCode: [
      'globalCurrencyCode',
      'styleGlobalCurrencyCode',
      'themeGlobalCurrencyCode',
    ],
  }))

  return (
    <div>
      Hello
      <FormattedCurrency value={10} classes={formattedClasses} />
    </div>
  )
}

export default MyCustomBlock
