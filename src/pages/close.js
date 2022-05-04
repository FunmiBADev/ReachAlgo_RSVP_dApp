import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import CloseForm from '../forms/CloseForm'

const CloseEvent = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Event Close' />
        <PageBreak />
        <LoadingButton addMessage='Please wait while your event contract is terminated' />
        <PageBreak />
        <CloseForm />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default CloseEvent
