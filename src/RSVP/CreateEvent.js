import React from 'react'
import * as backend from '../../build/index.startup.mjs'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import { loadStdlib } from '@reach-sh/stdlib'

// import { stdlib, defaultPrice, defaultDeadline } from '../App test'

export const stdlib = loadStdlib(process.env)
stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: 'TestNet',
    MyAlgoConnect
  })
)
const { standardUnit } = stdlib
export const defaultPrice = '20'
export const defaultDeadline = '50'

export class CreateEvent extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ mode: 'EnterInfo' })
  }
  async enterInfo (priceStandard, deadline) {
    const ctc = this.props.acc.contract(backend)
    this.setState({ mode: 'Wait', priceStandard, deadline, ctc })
    console.log({ priceStandard, deadline })
    try {
      await ctc.p.Organiser({
        ticketPrice: stdlib.parseCurrency(priceStandard),
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
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2)
    this.setState({ mode: 'Done', ctcInfoStr })
  }
  render () {
    let me = null
    const parent = this
    const mode = this.state?.mode || 'EnterInfo'
    if (mode === 'EnterInfo') {
      const priceStandard = this.state?.priceStandard || defaultPrice
      const deadline = this.state?.deadline || defaultDeadline
      me = (
        <div>
          What is the RSVP fee?
          <br />
          <textarea
            onChange={e =>
              this.setState({
                priceStandard: e.currentTarget.value
              })
            }
            placeholder={defaultPrice}
          />
          <br />
          What is the deadline?
          <br />
          <textarea
            onChange={e =>
              this.setState({
                deadline: e.currentTarget.value
              })
            }
            placeholder={defaultDeadline}
          />
          <br />
          <button onClick={() => parent.enterInfo(priceStandard, deadline)}>
            Launch
          </button>
        </div>
      )
    } else if (mode === 'Wait') {
      me = <div>Please wait while your event is initialized.</div>
    } else {
      // 'Done'
      const ctcInfoStr = this.state?.ctcInfoStr || ''
      me = (
        <div>
          Your event is ready for users to RSVP to!
          <br />
          Please share the following contract info with them:
          <pre className='ContractInfo'>{ctcInfoStr}</pre>
        </div>
      )
    }
    return <div className='Create'>{me}</div>
  }
}
