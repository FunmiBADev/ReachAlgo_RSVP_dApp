'reach 0.1'

export const startup = Reach.App(() => {
  const Event = Participant('Organiser', {
    eventName: Bytes(128),
    eventDetails: Bytes(250),
    ticketPrice: UInt,
    eventEnd: UInt,
    ready: Fun([], Null)
  })

  const Guest = API('Guest', {
    willAttend: Fun([], Bool)
  })

  const ConfirmAttendance = API('Attendance', {
    guestAttended: Fun([Address], Bool),
    eventExpire: Fun([], Bool)
  })
  init()

  Event.only(() => {
    const eventName = declassify(interact.eventName)
    const eventDetails = declassify(interact.eventDetails)
    const ticketPrice = declassify(interact.ticketPrice)
    const eventEnd = declassify(interact.eventEnd)
  })

  Event.publish(eventName, eventDetails, ticketPrice, eventEnd)
  Event.interact.ready()

  const RSVPs = new Map(
    Object({
      attended: Bool
    })
  )

  const [isContinue, ticketsBooked] = parallelReduce([true, 0])
    .define(() => {})
    .invariant(
      //invariant are conditions definied to prevent theorem violations
      true &&
        balance() == ticketsBooked * ticketPrice &&
        RSVPs.size() == ticketsBooked
    )
    .while(isContinue)
    .api(
      Guest.willAttend, //API call to handle RSVP
      () => {
        // function to handle RSVP and  prevent duplicate RSVP
        // assumptions that must be true to call willAttend
        check(isNone(RSVPs[this]), 'No RSVP match found')
      },
      () => ticketPrice, // function to handle payment
      c => {
        //function that handles and store RSVP confirmations
        //1. check that no RSVP exists
        check(isNone(RSVPs[this]), 'No RSVP match found')
        // 2. If no RSVP save RSVP but set attendance is sent to false
        RSVPs[this] = { attended: false }
        c(true) // confirm that API call was successful
        return [isContinue, ticketsBooked + 1] // Add to guest list
      }
    )
    .api(
      ConfirmAttendance.guestAttended, // API call to handle checkin
      who => {
        //Check that 'who' actually RSVP'd
        check(isSome(RSVPs[who]), 'Guest Checkin match found')
        //Ensures that the 'who' calling the checkin api is the Event Deployer Only
        check(this == Event, 'Event Organiser here')
      },
      _ => 0, // No payment required during check in.
      (who, c) => {
        check(isSome(RSVPs[who]), 'Guest Checkin match found')
        check(this == Event, 'Event Organiser here')
        transfer(ticketPrice).to(who)
        delete RSVPs[who]
        c(true)
        return [isContinue, ticketsBooked - 1] // remove from guest list so money can be returned
      }
    )
    .timeout(eventEnd, () => {
      const [[], c] = call(ConfirmAttendance.eventExpire)
      c(true) // successful API call
      // Event.publish()
      return [false, ticketsBooked]
    })

  const leftovers = ticketsBooked // whats left after removing checked in guests
  transfer(leftovers * ticketPrice).to(Event)
  commit()

  exit()
})
