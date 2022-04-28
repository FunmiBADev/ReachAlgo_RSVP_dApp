import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import { CreateEvent } from '../RSVP/CreateEvent'

const Create = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Manage Event Page' />
        <PageBreak />
        <CreateEvent />
      </DisplayPageDiv>
    </Container>
  )
}

export default Create
