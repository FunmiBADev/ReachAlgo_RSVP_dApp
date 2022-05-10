import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as backend from '../build/index.startup.mjs'
import LoadingButton from '../components/Common/LoadingButton.js'
import { BodyTextB } from '../components/MyAlgoWallet/MyAlgoWallet.styles.js'

export class CloseView extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo', acc: {} })
  }
  async doClose (ctcInfoStr) {
    const ctcInfo = JSON.parse(ctcInfoStr)
    const ctc = this.props.acc.contract(backend, ctcInfo)
    this.setState({ mode: 'Wait', ctc })
    await ctc.apis.Attendance.eventExpire()
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
            onSubmit={() => parent.doClose(ctcInfoStr)}
            className='event-app'
          >
            <Row>
              <Col>
                <Form.Label>Provide Contract Information</Form.Label>
                <Form.Control
                  autoComplete='off'
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
              <div className='modal-footer' style={{ marginRight: '4px' }}>
                <Button variant='secondary' type='reset'>
                  Clear Form
                </Button>
                <Button variant='primary' type='submit' disabled={!ctcInfoStr}>
                  Close Event
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      )
    } else if (mode === 'Wait') {
      organise = (
        <div>
          <LoadingButton addMessage='Please wait while your event contract is terminated' />
        </div>
      )
    } else {
      // 'Done'
      organise = (
        <div>
          <BodyTextB>Event Close Complete</BodyTextB>
        </div>
      )
    }
    return <div className='Close'>{organise}</div>
  }
}
