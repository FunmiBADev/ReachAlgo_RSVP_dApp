import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import CheckinForm from '../forms/CheckinForm'

const Checkin = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Event Checkin' />
        <PageBreak />
        <LoadingButton addMessage='Please wait while your event checkin is completed' />
        <PageBreak />
        <CheckinForm />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Checkin
