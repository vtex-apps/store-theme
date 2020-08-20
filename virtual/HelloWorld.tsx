import React from 'react'
import styles from './styles.css'

const HelloWorld = () => {
  return (
    <>
      <h1 className={styles.foo}>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
    </>
  )
}

HelloWorld.displayName = 'helloworld'

HelloWorld.schema = {
  title: 'Olarrr',
}

export default HelloWorld
