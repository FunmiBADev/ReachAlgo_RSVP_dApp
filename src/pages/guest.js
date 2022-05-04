import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import RSVPForm from '../forms/RSVPForm'

const Guest = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Event RSVP' />
        <PageBreak />
        <LoadingButton addMessage='Please wait while your event RSVP is confirmed' />
        <PageBreak />
        <RSVPForm />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Guest
