import React from 'react'
import { Container } from 'react-bootstrap'
import CreateConfirmation from '../components/Common/CreateConfirmation'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import EventForm from '../forms/EventForm'

const Create = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Create Event' />
        <PageBreak />
        <EventForm />
        <LoadingButton addMessage='Please wait while your event contract is generated' />
        <CreateConfirmation />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Create
