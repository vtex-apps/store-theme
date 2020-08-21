import React from 'react'

import styles from './StoreContext.css'

const StoreContext = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className={`${styles.storeContextTitle} lh-copy`}>
          This is an example store built using the VTEX platform. Want to know
          more?
        </div>
      </div>
      <div className="flex justify-center">
        <div className={styles.storeContextReach}>
          <div>Reach us at</div>
          <br />
          <div>
            <a href="https://vtex.com" className={styles.storeContextLink}>
              www.vtex.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

StoreContext.displayName = 'store-context'

export default StoreContext
