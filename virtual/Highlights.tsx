import React from 'react'
import { Image } from 'vtex.store-image'

import styles from './Highlights.css'

const highlights = [
  {
    imageSrc: 'https://storecomponents.vteximg.com.br/arquivos/box.png',
    text: 'Free shipping',
  },
  {
    imageSrc:
      'https://storecomponents.vteximg.com.br/arquivos/delivery-fast.png',
    text: 'One day delivery',
  },
  {
    imageSrc: 'https://storecomponents.vteximg.com.br/arquivos/store.png',
    text: 'Pick up in store',
  },
  {
    imageSrc: 'https://storecomponents.vteximg.com.br/arquivos/coupon.png',
    text: 'Exclusive deals',
  },
]

interface HighlightProps {
  imageSrc: string
  text: string
}

const Highlight = ({ imageSrc, text }: HighlightProps) => {
  return (
    <div className="flex flex-column items-center c-on-base--inverted mv4 mv-0">
      <div><Image src={imageSrc} maxHeight="24px" /></div>
      <div>{text}</div>
    </div>
  )
}

const Highlights = () => {
  return (
    <div className={`${styles.highlights} flex bg-muted-3 pv4`}>
      <div className="mw9 center ph3 ph5-m ph2-xl w-100">
        <div className="flex flex-column flex-row-ns mt0 ph0 pv2 justify-around w-100">
          {highlights.map((highlight, index) => (
            <Highlight
              key={index}
              imageSrc={highlight.imageSrc}
              text={highlight.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

Highlights.displayName = 'highlights'

export default Highlights
