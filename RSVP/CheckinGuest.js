import React from 'react'
import * as backend from '../build/index.startup.mjs'

export class CheckinGuest extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo' })
  }
  async doCheckin (ctcInfoStr, who) {
    const ctcInfo = JSON.parse(ctcInfoStr)
    const ctc = this.props.acc.contract(backend, ctcInfo)
    this.setState({ mode: 'Wait', ctc, who })
    await ctc.apis.Attendance.guestAttended(who)
    this.setState({ mode: 'Done' })
  }
  render () {
    let me = null
    const parent = this
    const mode = this.state?.mode || 'EnterInfo'
    if (mode === 'EnterInfo') {
      const ctcInfoStr = this.state?.ctcInfoStr || ''
      const who = this.state?.who || ''
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
          Who is checking in?
          <br />
          <textarea
            onChange={e =>
              this.setState({
                who: e.currentTarget.value
              })
            }
          />
          <br />
          <button
            disabled={!ctcInfoStr}
            onClick={() => parent.doCheckin(ctcInfoStr, who)}
          >
            RSVP
          </button>
        </div>
      )
    } else if (mode === 'Wait') {
      me = <div>Please wait while your checkin is confirmed.</div>
    } else {
      // 'Done'
      const who = this.state?.who || ''
      me = (
        <div>
          Done! You have checked in {who}.
          <br />
        </div>
      )
    }
    return <div className='Checkin'>{me}</div>
  }
}
