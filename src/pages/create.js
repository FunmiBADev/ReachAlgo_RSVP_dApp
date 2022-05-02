import React from 'react'
import { Container } from 'react-bootstrap'

import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import EventForm from '../forms/EventForm'
import EventList from '../forms/EventList'

const Create = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <LoadingButton addMessage='Please wait while your event contract is generated' />
        <PageBreak />
        <EventForm />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Create
