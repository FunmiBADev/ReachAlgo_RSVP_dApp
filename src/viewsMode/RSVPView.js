import React from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import * as backend from '../build/index.startup.mjs'
import SuccessConfirmation from '../components/Common/SuccessConfirmation.js'
import LoadingButton from '../components/Common/LoadingButton.js'
import {
  BodyText,
  BodyTextB
} from '../components/MyAlgoWallet/MyAlgoWallet.styles.js'
import { stdlib, timer } from '../utitlity/utils'

export class RSVPView extends React.Component {
  constructor (props) {
    super(props)
    this.setState({
      mode: 'EnterInfo',
      acc: {}
    })
  }
  async eventRSVP (ctcInfoStr) {
    const ctcInfo = JSON.parse(ctcInfoStr)
    const contractCall = this.props.acc.contract(backend, ctcInfo)
    this.setState({ mode: 'Wait', ctc: contractCall })
    await contractCall.apis.Guest.willAttend()
    this.setState({ mode: 'RSVPd' })
  }

  async copyToClipboard (button) {
    const { acc } = this.props
    navigator.clipboard.writeText(stdlib.formatAddress(acc))
    const origInnerHTML = button.innerHTML
    button.innerHTML = 'Copied'
    button.disabled = true
    await timer(1000)
    button.innerHTML = origInnerHTML
    button.disabled = false
  }

  render () {
    let organise = null
    const parent = this
    const mode = this.state?.mode || 'EnterInfo'
    if (mode === 'EnterInfo') {
      const ctcInfoStr = this.state?.ctcInfoStr || ''
      organise = (
        <div>
          <Form
            onSubmit={() => parent.eventRSVP(ctcInfoStr)}
            className='event-app'
          >
            <Row>
              <Col>
                <Form.Label>
                  Please Provide Event Contract Information
                </Form.Label>
                <Form.Control
                  spellCheck='false'
                  autoComplete='off'
                  size='lg'
                  required
                  as='textarea'
                  rows={3}
                  name='ContractInfo'
                  type='text'
                  placeholder='{}'
                  className='event-input'
                  onChange={e =>
                    this.setState({ ctcInfoStr: e.currentTarget.value })
                  }
                />
              </Col>
            </Row>
            <Row>
              <div className='modal-footer' style={{ marginRight: '4px' }}>
                <Button variant='secondary' type='reset'>
                  Clear Form
                </Button>
                <Button variant='primary' type='submit'>
                  RSVP
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      )
    } else if (mode === 'Wait') {
      organise = (
        <div>
          <LoadingButton addMessage='Please wait while your event RSVP is confirmed' />
        </div>
      )
    } else {
      // 'RSVPd'
      const { acc } = this.props
      organise = (
        <div>
          <Row>
            <Col>
              <Alert variant='info'>
                <SuccessConfirmation addMessage='Your RSVP was succefully confirmed ' />

                <BodyTextB>Your RSVP Address is:</BodyTextB>
              </Alert>
            </Col>
          </Row>
          <div className='event-app'>
            <Col>
              <BodyText className='event-input'>
                {stdlib.formatAddress(acc)}
              </BodyText>
              <Button onClick={e => this.copyToClipboard(e.currentTarget)}>
                <BodyTextB>Copy to clipboard</BodyTextB>
              </Button>
            </Col>
          </div>
        </div>
      )
    }
    return <div className='RSVP'>{organise}</div>
  }
}
