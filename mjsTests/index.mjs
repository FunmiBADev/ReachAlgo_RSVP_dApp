import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.startup.mjs'

const stdlib = loadStdlib()

const startingBalance = stdlib.parseCurrency(750)
const EventCreatorAccount = await stdlib.newTestAccount(startingBalance)

const eventEnd = 30
const eventName = 'Algo-Reach Hackathon'
const eventDetails = 'More information about the event'

const eventContractCall = EventCreatorAccount.contract(backend)

// launch contract

try {
  await eventContractCall.p.Organiser({
    eventName,
    eventDetails,
    ticketPrice: stdlib.parseCurrency(75),
    eventEnd,
    ready: () => {
      console.warn('The event contract is ready')
      throw 42
    }
  })
} catch (e) {
  if (e !== 42) {
    throw e
  }
}

const guests = await stdlib.newTestAccounts(8, startingBalance)

// handle error
const willError = async x => {
  let err

  try {
    await x()
    err = false
  } catch (terr) {
    err = terr
  }
  if (err === false) {
    throw Error(`Expected to error, but I guess no show`)
  }
  console.warn(`That last call errored as expected`)
}

//handle rsvp
const rsvp = async whoI => {
  const who = guests[whoI]
  const contractCall = who.contract(backend, eventContractCall.getInfo())
  console.warn('RSVP of', stdlib.formatAddress(who))
  await contractCall.apis.Guest.willAttend()
}

//handle checkin
const checkin = async whoI => {
  const who = guests[whoI]
  console.log(`Check in of ${who[0]}`, stdlib.formatAddress(who))
  await eventContractCall.apis.Attendance.guestAttended(who)
}

//handle event end
const eventExpire = async () => {
  console.log('Thats a wrap. Event is now closed!')
  await eventContractCall.apis.Attendance.eventExpire()
}

//Test Scenarios
await rsvp(0)
await rsvp(1) // Not checked in
await rsvp(2)
await rsvp(4)
await rsvp(6)
await rsvp(7) // Not checked in
await willError(() => rsvp(6)) //attempt to rsvp twice
await checkin(4)
await willError(() => checkin(3)) // not matching rsvp found
await willError(() => checkin(5)) // no matching rsvp found
await checkin(0)
await checkin(2)
await checkin(6)
await willError(() => checkin(6)) // attempt to checkin twice

console.log(`We are waiting for the event to end`)
await stdlib.wait(eventEnd)

await eventExpire()

// Show guest balance after event expires
for (const who of [EventCreatorAccount, ...guests]) {
  console.warn(
    stdlib.formatAddress(who),
    'has',
    stdlib.formatCurrency(await stdlib.balanceOf(who))
  )
}
