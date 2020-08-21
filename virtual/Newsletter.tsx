import React from 'react'
import { Newsletter } from 'vtex.store-components'

import './Newsletter.css'

const NewsletterBlock = () => {
  return (
    <Newsletter
      label="Get our news first"
      placeholder="Enter your email address"
      submit="Sign up"
    />
  )
}

NewsletterBlock.displayName = 'newsletter'

export default NewsletterBlock
