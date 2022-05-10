import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import { PageBreak } from '../components/Common/PageBreak'
import MyAlgoWallet from '../components/MyAlgoWallet/MyAlgoWallet'

import { RSVPView } from '../forms/RSVPView'

const Guest = () => {
  const [account, setAccount] = useState({})

  const getAccountDetails = acc => {
    setAccount(acc)
  }
  return (
    <Container>
      <DisplayPageDiv>
        <MyAlgoWallet setAccount={getAccountDetails} />
        <PageBreak />
        <RSVPView acc={account} />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Guest
