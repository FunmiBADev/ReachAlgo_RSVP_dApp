import React from 'react'
import { DisplayPageDiv } from './DisplayPageWrapper'
import { Container } from 'react-bootstrap'

export const PageHeader = ({ addDescription }) => {
  return (
    <DisplayPageDiv>
      <Container>
        <h2>{addDescription}</h2>
      </Container>
    </DisplayPageDiv>
  )
}
