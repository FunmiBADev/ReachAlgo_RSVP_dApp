import React from 'react'
import { Container } from 'react-bootstrap'
import { WarningPageDiv } from '../components/Common/DisplayPageWrapper'
import LoadingButton from '../components/Common/LoadingButton'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'

const WalletConnect = () => {
  return (
    <Container>
      <WarningPageDiv>
        <PageHeader addDescription='Connect Wallet' />
        <PageBreak />
        <LoadingButton addMessage='Please wait while we connect to your account. If this takes more than a few seconds, there may be something wrong.' />
        <PageBreak />
      </WarningPageDiv>
    </Container>
  )
}

export default WalletConnect
