import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as backend from '../build/index.startup.mjs'
import SuccessConfirmation from '../components/Common/SuccessConfirmation.js'
import LoadingButton from '../components/Common/LoadingButton.js'
import { BodyTextB } from '../components/MyAlgoWallet/MyAlgoWallet.styles.js'
import { stdlib } from '../utitlity/utils'

export class RSVPView extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo', acc: {} })
  }
  async eventRSVP (ctcInfoStr) {
    const ctcInfo = JSON.parse(ctcInfoStr)
    const contractCall = this.props.acc.contract(backend, ctcInfo)
    this.setState({ mode: 'Wait', ctc: contractCall })
    await contractCall.apis.Guest.willAttend()
    this.setState({ mode: 'Done' })
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
          What is the event info?
          <br />
          <textarea
            className='ContractInfo'
            spellCheck='false'
            onChange={e => this.setState({ ctcInfoStr: e.currentTarget.value })}
            placeholder='{}'
          />
          <br />
          <button
            disabled={!ctcInfoStr}
            onClick={() => parent.eventRSVP(ctcInfoStr)}
          >
            RSVP
          </button>
        </div>
      )
    } else if (mode === 'Wait') {
      organise = (
        <div>
          <LoadingButton addMessage='Please wait while your event RSVP is confirmed' />
        </div>
      )
    } else {
      // 'Done'
      const { acc } = this.props
      organise = (
        <div>
          <Row>
            <Col>
              <SuccessConfirmation addMessage=' Your RSVP was succefully confirmed, Your Address is:' />
            </Col>
          </Row>
          <Col>
            <BodyTextB className='ContractInfo'>
              {stdlib.formatAddress(acc)}
            </BodyTextB>
          </Col>
        </div>
      )
    }
    return <div className='RSVP'>{organise}</div>
  }
}
