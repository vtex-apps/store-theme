import React from 'react'
import { SocialNetworks } from 'vtex.store-footer'

const socialNetworks = [
  {
    "name": "Facebook",
    "url": "https://www.facebook.com/vtexonline/"
  },
  {
    "name": "Instagram",
    "url": "https://www.instagram.com/vtextruecloud/"
  },
  {
    "name": "Twitter",
    "url": "https://twitter.com/vtexonline"
  },
  {
    "name": "Youtube",
    "url": "https://www.youtube.com/user/VTEXTV"
  }
]

const SocialNetworkBlock = () => {
  return (
    <SocialNetworks socialNetworks={socialNetworks} />
  )
}

export default SocialNetworkBlock
