import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import RSVPForm from '../forms/RSVPForm'

const Guest = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <LoadingButton addMessage='Please wait while event RSVP is confirmed' />
        <PageBreak />
        <RSVPForm />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Guest
