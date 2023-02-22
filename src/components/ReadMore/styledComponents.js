// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-height: 100vh;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-family: 'Roboto';
`
export const Para = styled.p`
  font-size: 14px;
  text-align: center;
`

export const ImageElement = styled.img`
  width: 100%;
  height: auto;
`
export const Description = styled.p`
  font-size: 14px;
`

export const Button = styled.button`
  background-color: orange;
  border-style: none;
  color: white;
  padding: 7px 13px;
  cursor: pointer;
`
