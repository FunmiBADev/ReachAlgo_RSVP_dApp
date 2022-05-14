import { Alert } from 'react-bootstrap'
import React from 'react'
import { BodyTextB } from '../MyAlgoWallet/MyAlgoWallet.styles'

const ConnectWalletAlert = () => {
  return (
    <div>
      <Alert variant='danger'>
        <BodyTextB>
          Please connect wallet before initiating your transaction.
        </BodyTextB>
      </Alert>
    </div>
  )
}

export default ConnectWalletAlert
