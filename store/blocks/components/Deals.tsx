import { FlexLayout } from 'vtex.flex-layout'
import { RichText } from 'vtex.rich-text'
import { Image } from 'vtex.store-components'

interface Props {
  id: number
  imageSrc: string
  text: string
}

const { Col } = FlexLayout

function Deals({id, imageSrc, text}: Props) {
  return (
    <Col __id={`deals${id}`}>
      <Image
        __id={`deals${id}`}
        src={imageSrc}
        maxHeight="24px"
      />
      <RichText __id={`deals${id}`} text={text} blockClass="deals" />
    </Col>
  )
}

export default Deals