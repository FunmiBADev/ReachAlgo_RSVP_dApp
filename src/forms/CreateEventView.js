import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import LoadingButton from '../components/Common/LoadingButton'
import * as backend from '../build/index.startup.mjs'
import {
  stdlib,
  defaultEventName,
  defaultEventDescription,
  defaultPrice,
  defaultDeadline
} from '../utitlity/utils'
import SuccessConfirmation from '../components/Common/SuccessConfirmation'
import { BodyTextB } from '../components/MyAlgoWallet/MyAlgoWallet.styles'

const sleep = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds))

export class CreateEventView extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo', acc: {} })
  }
  async createEvent (eName, eEventDetails, ticketPrice, deadline) {
    const contractCall = this.props.acc.contract(backend)
    this.setState({
      mode: 'Wait',
      eName,
      eEventDetails,
      ticketPrice,
      deadline,
      ctc: contractCall
    })
    console.log({ eName, eEventDetails, ticketPrice, deadline })
    try {
      await contractCall.p.Organiser({
        eventName: '',
        eventDetails: '',
        ticketPrice: stdlib.parseCurrency(ticketPrice),
        eventEnd: stdlib.bigNumberify(deadline),
        ready: () => {
          throw 42
        }
      })
    } catch (e) {
      if (e !== 42) {
        throw e
      }
    }
    const ctcInfoStr = JSON.stringify(await contractCall.getInfo(), null, 2)
    this.setState({ mode: 'Done', ctcInfoStr })
    console.log(ctcInfoStr)
  }

  async copyToClipboard (button) {
    const ctcInfoStr = this.state?.ctcInfoStr
    navigator.clipboard.writeText(ctcInfoStr)
    const origInnerHTML = button.innerHTML
    button.innerHTML = 'Copied!'
    button.disabled = true
    await sleep(1000)
    button.innerHTML = origInnerHTML
    button.disabled = false
  }
  render () {
    let organise = null
    const parent = this
    const mode = this.state?.mode || 'EnterInfo'
    if (mode === 'EnterInfo') {
      const eName = this.state?.eName || defaultEventName
      const eEventDetails = this.state?.eEventDetails || defaultEventDescription
      const ticketPrice = this.state?.ticketPrice || defaultPrice
      const deadline = this.state?.deadline || defaultDeadline
      organise = (
        <div>
          <Form
            onSubmit={() =>
              parent.createEvent(eName, eEventDetails, ticketPrice, deadline)
            }
            className='event-app'
          >
            <Row>
              <Col>
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  size='lg'
                  required
                  autoComplete='off'
                  name='eName'
                  type='text'
                  step='0.01'
                  placeholder={defaultEventName}
                  className='event-input'
                  onChange={e =>
                    this.setState({
                      eName: e.currentTarget.value
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Event Details</Form.Label>
                <Form.Control
                  autoComplete='off'
                  size='lg'
                  required
                  as='textarea'
                  rows={5}
                  name='eEventDetails'
                  type='text'
                  placeholder={defaultEventDescription}
                  className='event-input'
                  onChange={e =>
                    this.setState({
                      eEventDetails: e.currentTarget.value
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Event Ticket Price</Form.Label>
                <Form.Control
                  size='lg'
                  required
                  autoComplete='off'
                  name='ticketPrice'
                  type='number'
                  step='0.01'
                  className='event-input'
                  onChange={e =>
                    this.setState({
                      ticketPrice: e.currentTarget.value
                    })
                  }
                  placeholder={defaultPrice}
                />
              </Col>
              <Col>
                <Form.Label>Event Deadline</Form.Label>
                <Form.Control
                  size='lg'
                  required
                  autoComplete='off'
                  name='deadline'
                  type='number'
                  step='0.01'
                  className='event-input'
                  onChange={e =>
                    this.setState({
                      deadline: e.currentTarget.value
                    })
                  }
                  placeholder={defaultDeadline}
                />
              </Col>
            </Row>
            <Row>
              <div className='modal-footer' style={{ marginRight: '4px' }}>
                <Button variant='secondary' type='reset'>
                  Clear Form
                </Button>
                <Button variant='primary' type='submit'>
                  Deploy
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      )
    } else if (mode === 'Wait') {
      organise = (
        <div>
          <LoadingButton addMessage='Please wait while your event contract is deployed' />
        </div>
      )
    } else {
      // 'Done'
      const ctcInfoStr = this.state?.ctcInfoStr || ''
      organise = (
        <div>
          <Row>
            <Col>
              <SuccessConfirmation
                addMessage=' Event contract deployed, Please share contract information with
        prospective guests:'
              />
            </Col>

            <Col>
              <BodyTextB className='ContractInfo'>{ctcInfoStr}</BodyTextB>
            </Col>
            <Button onClick={e => this.copyToClipboard(e.currentTarget)}>
              <BodyTextB>Copy to clipboard</BodyTextB>
            </Button>
          </Row>
        </div>
      )
    }
    return <div className='Create'>{organise}</div>
  }
}
