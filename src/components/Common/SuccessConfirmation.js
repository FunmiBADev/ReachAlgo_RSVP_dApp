import React from 'react'
import { BodyTextB } from '../MyAlgoWallet/MyAlgoWallet.styles'

const SuccessConfirmation = ({ addMessage }) => {
  return (
    <div>
      <BodyTextB>{addMessage}</BodyTextB>
    </div>
  )
}

export default SuccessConfirmation
