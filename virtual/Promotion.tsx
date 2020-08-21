import React from 'react'
import { InfoCard } from 'vtex.store-components'

import styles from './Promotion.css'

const Promotion = () => {
  return (
    <div className={styles.promotion}>
      <InfoCard
        id="info-card-home"
        isFullModeStyle={false}
        textPosition="left"
        imageUrl="https://storecomponents.vteximg.com.br/arquivos/banner-infocard2.png"
        headline="Clearance Sale"
        callToActionText="DISCOVER"
        callToActionUrl="/sale/d"
        blockClass="info-card-home"
        textAlignment="center"
      />
    </div>
  )
}

Promotion.displayName = 'promotion'

export default Promotion
