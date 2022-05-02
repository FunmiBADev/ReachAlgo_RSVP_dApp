import React from 'react'
import * as backend from '../../build/index.startup.mjs'
import { stdlib } from '../App'

export class RSVPGuest extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo' })
  }
  async doRSVP (ctcInfoStr) {
    const ctcInfo = JSON.parse(ctcInfoStr)
    const ctc = this.props.acc.contract(backend, ctcInfo)
    this.setState({ mode: 'Wait', ctc })
    await ctc.apis.Guest.willAttend()
    this.setState({ mode: 'Done' })
  }
  render () {
    let me = null
    const parent = this
    const mode = this.state?.mode || 'EnterInfo'
    if (mode === 'EnterInfo') {
      const ctcInfoStr = this.state?.ctcInfoStr || ''
      me = (
        <div>
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
            onClick={() => parent.doRSVP(ctcInfoStr)}
          >
            RSVP
          </button>
        </div>
      )
    } else if (mode === 'Wait') {
      me = <div>Please wait while your RSVP is confirmed.</div>
    } else {
      // 'Done'
      const { acc } = this.props
      me = (
        <div>
          You have RSVP'd.
          <br />
          Your address is:
          <pre className='ContractInfo'>{stdlib.formatAddress(acc)}</pre>
        </div>
      )
    }
    return <div className='RSVP'>{me}</div>
  }
}
