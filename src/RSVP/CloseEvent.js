import React from 'react'
import * as backend from '../build/index.startup.mjs'

export class CloseEvent extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo' })
  }
  async doClose (ctcInfoStr) {
    const ctcInfo = JSON.parse(ctcInfoStr)
    const ctc = this.props.acc.contract(backend, ctcInfo)
    this.setState({ mode: 'Wait', ctc })
    await ctc.apis.Attendance.eventExpire()
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
            onClick={() => parent.doClose(ctcInfoStr)}
          >
            Close
          </button>
        </div>
      )
    } else if (mode === 'Wait') {
      me = <div>Please wait while your close is confirmed.</div>
    } else {
      // 'Done'
      me = <div>You have closed the event.</div>
    }
    return <div className='Close'>{me}</div>
  }
}
