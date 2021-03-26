// react/HelloWorld.section.tsx
import * as React from 'react'

interface Props {
  name?: string
}

function HelloWorld (props: Props) {
  const { name } = props

  return (
    <div className="t-heading-1">
      Hello, {name}
    </div>
  )
}

HelloWorld.schema = {
  title: "Hello world",
  description: "A Hello World component",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      widget: {
        "ui:widget":"draftjs-rich-text"
     }
    }
  }
}

export default HelloWorld
