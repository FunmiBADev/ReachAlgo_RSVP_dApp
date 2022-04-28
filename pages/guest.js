import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'

const Contact = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='RSVP for event' />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Contact
