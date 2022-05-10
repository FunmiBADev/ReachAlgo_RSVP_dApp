import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as backend from '../build/index.startup.mjs'
import { BodyTextB } from '../components/MyAlgoWallet/MyAlgoWallet.styles.js'

export class CheckinView extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo', acc: {} })
  }
  async eventCheckin (ctcInfoStr, guest) {
    const ctcInfo = JSON.parse(ctcInfoStr)
    const contractCall = this.props.acc.contract(backend, ctcInfo)
    this.setState({ mode: 'Wait', contractCall, guest })
    await contractCall.apis.Attendance.guestAttended(guest)
    this.setState({ mode: 'Done' })
    console.log(guest, ctcInfo)
  }

  render () {
    let organise = null
    const parent = this
    const mode = this.state?.mode || 'EnterInfo'
    if (mode === 'EnterInfo') {
      const ctcInfoStr = this.state?.ctcInfoStr || ''
      const guest = this.state?.guest || ''
      organise = (
        <div>
          <Form
            className='event-app'
            onSubmit={() => parent.eventCheckin(ctcInfoStr, guest)}
          >
            <Row>
              <Col>
                <Form.Label>Provide Contract Information</Form.Label>
                <Form.Control
                  autoComplete='off'
                  spellCheck='false'
                  size='lg'
                  required
                  as='textarea'
                  rows={5}
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
              <Col>
                <Form.Label>Checkin Address</Form.Label>
                <Form.Control
                  autoComplete='off'
                  size='lg'
                  spellCheck='false'
                  required
                  as='textarea'
                  name='rsvpAddress'
                  type='text'
                  placeholder='Please enter your RSVP wallet address'
                  className='event-input'
                  onChange={e =>
                    this.setState({
                      who: e.currentTarget.value
                    })
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
                  Checkin
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      )
    } else if (mode === 'Wait') {
      organise = (
        <div>
          <LoadingButton addMessage='Please wait while your event checkin is completed' />
        </div>
      )
    } else {
      // 'Done'
      const guest = this.state?.guest || ''
      organise = (
        <div>
          <BodyTextB> Done! You have checked in {guest}.</BodyTextB>

          <br />
        </div>
      )
    }
    return <div className='Checkin'>{organise}</div>
  }
}
