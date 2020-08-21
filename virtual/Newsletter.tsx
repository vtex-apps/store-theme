import React from 'react'
import { Newsletter } from 'vtex.store-components'

import styles from './Newsletter.css'

const NewsletterBlock = () => {
  return (
    <div className={styles.newsletter}>
      <Newsletter
        label="Get our news first"
        placeholder="Enter your email address"
        submit="Sign up"
      />
    </div>
  )
}

NewsletterBlock.displayName = 'newsletter'

export default NewsletterBlock
