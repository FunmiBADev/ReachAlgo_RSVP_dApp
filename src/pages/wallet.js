import React from 'react'
import { Container } from 'react-bootstrap'
import { WarningPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'
import MyAlgoWallet from '../components/MyAlgoWallet/MyAlgoWallet'

const WalletConnect = () => {
  return (
    <Container>
      <WarningPageDiv>
        <MyAlgoWallet />
        <PageBreak />
      </WarningPageDiv>
    </Container>
  )
}

export default WalletConnect
