import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'

const Checkin = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Checkin for Event here' />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Checkin
