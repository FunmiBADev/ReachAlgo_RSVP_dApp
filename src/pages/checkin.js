import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import { PageBreak } from '../components/Common/PageBreak'
import MyAlgoWallet from '../components/MyAlgoWallet/MyAlgoWallet'
import { CheckinView } from '../forms/CheckinView'

const Checkin = () => {
  const [account, setAccount] = useState({})

  const getAccountDetails = acc => {
    setAccount(acc)
  }
  return (
    <Container>
      <DisplayPageDiv>
        <MyAlgoWallet setAccount={getAccountDetails} />
        <PageBreak />

        <PageBreak />
        <CheckinView acc={account} />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Checkin
