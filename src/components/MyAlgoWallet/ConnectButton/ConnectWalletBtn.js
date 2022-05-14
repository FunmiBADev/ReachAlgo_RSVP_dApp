import React from 'react'
import ConnectButton from '.'
import { BodyText } from '../MyAlgoWallet.styles'
import { Col, Row } from 'react-bootstrap'

const ConnectWalletButton = ({ connectWallet, accountAddress, accountBal }) => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <ConnectButton connectWallet={connectWallet} />
          </Col>
          <div>
            <Col>
              <BodyText>Account Address: {accountAddress} </BodyText>
            </Col>
            <Col>
              <BodyText>Account Balance: {accountBal} ALGOS</BodyText>
            </Col>
          </div>
        </Row>
      </div>
    </>
  )
}

export default ConnectWalletButton
