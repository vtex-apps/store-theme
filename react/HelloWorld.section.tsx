import React from 'react'

interface Props {
  name?: string
}

function HelloWorld(props: Props) {
  const { name } = props

  return <div>Hello world, {name}</div>
}

HelloWorld.schema = {
  title: 'Hello World',
  description: 'Just a hello world section',
  type: 'object',
  properties: {
    name: {
      title: 'Your name',
      description: 'Just write your first name',
      type: 'string',
    },
  },
}

export default HelloWorld
