import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CreateConfirmation from '../components/Common/CreateConfirmation'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import MyAlgoWallet from '../components/MyAlgoWallet/MyAlgoWallet'
import EventForm from '../forms/EventForm'

const Create = () => {
  const [account, setAccount] = useState({})

  const getAccountDetails = acc => {
    setAccount(acc)
  }
  return (
    <Container>
      <DisplayPageDiv>
        <MyAlgoWallet setAccount={getAccountDetails} />
        <PageBreak />

        <EventForm account={account} />
        <LoadingButton addMessage='Please wait while your event contract is generated' />
        <CreateConfirmation />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Create
