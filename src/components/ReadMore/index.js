// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  ContentContainer,
  Heading,
  Para,
  ImageElement,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [show, setShow] = useState(false)

  const onShowBtn = () => {
    setShow(prev => !prev)
  }
  const {reactHooksDescription} = props
  const lessContent = reactHooksDescription.slice(0, 170)

  return (
    <BgContainer>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <ImageElement
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />

        {show ? (
          <Description>{reactHooksDescription}</Description>
        ) : (
          <Description>{lessContent}</Description>
        )}

        <Button type="button" onClick={onShowBtn}>
          {!show ? 'Read More' : 'Read Less'}
        </Button>
      </ContentContainer>
    </BgContainer>
  )
}

export default ReadMore
