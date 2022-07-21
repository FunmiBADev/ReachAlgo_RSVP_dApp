# Welcome to The RSVP App Tutorial

This tutorial walks through the creation of a simple decentralized application. It contains everything you need to know to build and test this application and assumes no prior experience with DApp/blockchain development of any kind. If you want a broad overview before diving in, we recommend going to the [live-site](the-price-is-right.netlify.app) first.

# Installation and Initialization

Refer to the [Reach Installation guide](https://docs.reach.sh/tut/rps/#tut-1) and get Reach set up on your computer. If you experience problems with installing Reach, head over to the [Discord Channel](https://discord.gg/dBsCAjF9kx) and get help.

## Introduction

We are going to be building an RSVP DApp with a trusted attendance oracle.

## Scaffolding and Setup

Create a folder for the project, I recommend putting it under the Reach Directory in your Computer. Make sure your Docker is running.

Run

    mkdir -p ~/reach/RSVPapp && cd ~/reach/RSVPapp

This code would create the folder and enter it.

Confirm that Reach is installed by running

      ./reach version

Open the folder in your preferred editor, I recommend VS code because it is the easiest to work with in my opinion. You can do that by running
`code .` in your terminal.

## Files

The `Index.rsh` file is the primary Reach file and that's what will hold our Reach code. Create it.
Also, create an `Index.mjs` file for the frontend.
These two files will already be there if you ran `./reach init`

## App Logic

We are trying to create an RSVP with a dedicated oracle that creates an Event, sends out Tickets for the Event and has the invitees RSVP with a small fee. The fee will be returned when their attendance is confirmed and their Ticket is checked in. If they do not attend the event, they forfeit the fee.

That is the basis of our app and let's start building.

```js
  1  'reach 0.1'
  2
  3  export  const  startup = Reach.App(() => {
  4  const  Event = Participant('Organiser', {
  5  eventName:  Bytes(128),
  6  eventDetails:  Bytes(250),
  7  ticketPrice:  UInt,
  8  eventEnd:  UInt,
  9  ready:  Fun([], Null)
 10  })

 11

```

- Line 1 indicates that this is a Reach program. You'll always have this at the top of every program.
- Line 3 defines the main export from the program. When you compile, this is what the compiler will look at.
- Line 4 - 10 indicates the properties for creating an event in the program.

```js
 12  const  Guest = API('Guest', {
 13  // confirmPurchase: Fun([UInt], Bool),
 14  willAttend:  Fun([], Bool)
 15   })
 16
 17   const  ConfirmAttendance = API('Attendance', {
 18   guestAttended:  Fun([Address], Bool),
 19   eventExpire:  Fun([], Bool)
 20   })

 21   init()
 22

```

- Line 12-15 defines an API used to manage the RSVP when registering.
- Line 17-20 also defines an API used to manage check-ins and closing of events.
-

```js

 23  Event.only(() => {
 24  const eventName = declassify(interact.eventName)
 25  const eventDetails = declassify(interact.eventDetails)
 26  const ticketPrice = declassify(interact.ticketPrice)
 27  const eventEnd = declassify(interact.eventEnd)
 28 })
 29
 30  Event.publish(eventName, eventDetails, ticketPrice, eventEnd)

 31  Event.interact.ready()
 32

```

- Line 23-28 indicates the different inputs required when deploying an event. Note that when an event is deployed, you won't be able to close the event until the`eventEnd` time specified is expired.
- Line 30-31 deploys the event according to the given input.

```js

  33  const RSVPs = new Map(
  34   Object({
  35     attended: Bool
  36   })
  37  )
  38

```

- Line 23-27 creates an RSVP object using the `newMap` method and sets its value to boolean which means attendance can be either true or false in all cases.

```js

 39  const [isContinue, ticketsBooked] = parallelReduce([true, 0])
 40    .define(() => {})
 41    .invariant(
 42      //invariant are conditions defined to prevent theorem violations
 43      true &&
 44        balance() == ticketsBooked * ticketPrice &&
 45        RSVPs.size() == ticketsBooked
 46    )


```

- The rest of our code from this point handles the logical conditions that prevent cheating in different cases.
- Line 39 stores two functions that are set to `true` and `0` by the `parrallelReduce`
- Line 43-45 is a condition that says the `balance` must be equal to the `ticketPrice` and the RSVP must be equal to the `ticketsBooked`. If the conditions of this logic are not fulfilled the program will throw an error.

```js

 47 .while(isContinue)
 48    .api(
 49      Guest.willAttend,
 50      () => {
 51        check(isNone(RSVPs[this]), 'No RSVP match found')
 52     },
 53      () => ticketPrice, // function to handle payment
 54     c => {
 55       check(isNone(RSVPs[this]), 'No RSVP match found')
 56        RSVPs[this] = { attended: false }
 57        c(true)
 58        return [isContinue, ticketsBooked + 1]
 59      }
 60    )

```

- Line 47-52 defines logical conditions that prevent duplicates of RSVP.
- Line 49 calls an API to handle the RSVP.
- Line 50-52 is a Function that checks the RSVP to prevent duplicates.
- Line 53-59 handles and stores RSVP confirmations. It checks if the RSVP exists and appends it to the `ticketsBooked` if true, otherwise, it sets the `attended` to false

```js

 61 .api(
 62      ConfirmAttendance.guestAttended,
 63      who => {
 64        check(isSome(RSVPs[who]), 'Guest already Checked in')
 65        check(this == Event, 'Event Organiser here')
 66      },
 67      _ => 0, // No payment required during check in.
 68      (who, c) => {
 69        check(isSome(RSVPs[who]), 'Guest already Checked in')
 70        check(this == Event, 'Event Organiser here')
 71        transfer(ticketPrice).to(who)
 72        delete RSVPs[who]
 73        c(true)
 74        return [isContinue, ticketsBooked - 1]
 75      }
 76    )

```

- Line 62 calls API to handle check-ins.
- Line 65 Ensures that the 'who' calling the check-in API is the Event Deployer Only
- Line 63-66 checks 'who' actually RSVP'd.
- Line 67-75 returns the ticket fee to those who successfully check-in.

```js

 77  .timeout(absoluteTime(eventEnd), () => {
 78     const [[], c] = call(ConfirmAttendance.eventExpire)
 79    c(true) // successful API call
 80     return [false, ticketsBooked]
 81    })

 82   const leftovers = ticketsBooked

 83   transfer(leftovers * ticketPrice).to(Event)

 84   commit()

 85   exit()

 86  }

```

- Line 77-81 handles the expiration of the event.
- Line 82-85 takes the leftovers of the ticket fees for those that RSVP'ed and didn't check in and sends them to the deployer of the event.

# Finalization

The `index.rsh` file should look like this.

```js

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
     true &&
       balance() == ticketsBooked * ticketPrice &&
       RSVPs.size() == ticketsBooked
   )
   .while(isContinue)
   .api(
     Guest.willAttend,
     () => {
       check(isNone(RSVPs[this]), 'No RSVP match found')
     },
     () => ticketPrice,
     c => {
       check(isNone(RSVPs[this]), 'No RSVP match found')
       RSVPs[this] = { attended: false }
       c(true)
       return [isContinue, ticketsBooked + 1]
     }
   )
   .api(
     ConfirmAttendance.guestAttended, checkin
     who => {
       check(isSome(RSVPs[who]), 'Guest already Checked in')
       check(this == Event, 'Event Organiser here')
     },
     _ => 0,
     (who, c) => {
       check(isSome(RSVPs[who]), 'Guest already Checked in')
       check(this == Event, 'Event Organiser here')
       transfer(ticketPrice).to(who)
       delete RSVPs[who]
       c(true)
       return [isContinue, ticketsBooked - 1]
     }
   )
   .timeout(absoluteTime(eventEnd), () => {
     const [[], c] = call(ConfirmAttendance.eventExpire)
     c(true)
     return [false, ticketsBooked]
   })

 const leftovers = ticketsBooked //
 
 transfer(leftovers * ticketPrice).to(Event)
 
 commit()
 
 exit()
})

```

# Test

To test our program we come to our `index.mjs` file.

```js
 1 import { loadStdlib } from  '@reach-sh/stdlib'
 2 import  *  as  backend  from  './build/index.startup.mjs'

 3 const  stdlib = loadStdlib()
 4
```

- Line 1-3 makes an import of the reach javascript standard library.

```js
 5  const  startingBalance = stdlib.parseCurrency(750)
 6  const  EventCreatorAccount = await  stdlib.newTestAccount(startingBalance)
 7  const  eventEnd = 80
 8  const  eventName = 'Algo-Reach Hackathon'
 9  const  eventDetails = 'More information about the event'
10  const  eventContractCall = EventCreatorAccount.contract(backend)
11
```

- Line 5-10 stores the parameters for deploying the event in variables using the `const` keyword.

```js
 12 try {
 13   await  eventContractCall.p.Organiser({
 14    eventName,
 15    eventDetails,
 16    ticketPrice:  stdlib.parseCurrency(75),
 17    eventEnd,
 18    ready: () => {
 19       console.warn('The event contract is ready')
 20       throw  42
 21    }
 22  })
 23  } catch (e) {
 24  if (e !== 42) {
 25  throw  e
 26   }
 27 }

 28 const  guests = await  stdlib.newTestAccounts(8, startingBalance)

```

- Line 13 uses the `eventContractCall` to launch the contract.
- Line 14-17 shows the properties of the contract.
- Line 18-20 is a function that logs the given message to the console when the contract is ready.
- Line 23-26
- Line 28 stores `newTestAccount`s in the `guest` variable

```js
29 const willError = async x => {
30  let err

31  try {
32    await x()
33    err = false
34  } catch (terr) {
35    err = terr
36  }
37  if (err === false) {
38    throw Error(`Expected to error, but I guess no show`)
39  }
10  console.warn(`That last call errored as expected`)
41 }

```

- Line 29-41 handles the error for the test.
- In line 38, if the error equals false it throws the given message to the console.
- If there is an error it logs the message in line 40 to the console

```js

42 const rsvp = async whoI => {
43  const who = guests[whoI]
44  const contractCall = who.contract(backend, eventContractCall.getInfo())
45  console.warn('RSVP of', stdlib.formatAddress(who))
46  await contractCall.apis.Guest.willAttend()
47 }

```

- Line 42-47 handles the RSVP, the position of the guests in the
  `newTestAccounts`

```js

48 const checkin = async whoI => {
49  const who = guests[whoI]
50  console.log(`Check in of ${who}`, stdlib.formatAddress(who))
51  await eventContractCall.apis.Attendance.guestAttended(who)
52 }

```

- Line 48-52 handles the checkins.

```js

53 const eventExpire = async () => {
54  console.log('Thats a wrap. Event is now closed!')
55  await eventContractCall.apis.Attendance.eventExpire()
56 }

```

- Line 53 handles the termination of an event.
- Line 54 logs the message to the console as soon as the event expires.
- Line 55 handles the expiry of the contract.

```js
//Test Scenarios

 56 await  rsvp(0)

 57 await  rsvp(1) // Not checked in

 58 await  rsvp(2)

 59 await  rsvp(4)

 60 await  rsvp(6)

 61 await  rsvp(7) // Not checked in

 62 await  willError(() =>  rsvp(6)) //attempt to rsvp twice

 63 await  checkin(4)

 64 await  willError(() =>  checkin(3)) // not matching rsvp found

 65 await  willError(() =>  checkin(5)) // no matching rsvp found

 66 await  checkin(0)

 67 await  checkin(2)

 68 await  checkin(6)

 69 await  willError(() =>  checkin(6)) // attempt to checkin twice

 70 console.log(`We are waiting for the event to end`)

 71 await  stdlib.wait(eventEnd)

 72 await  eventExpire()

 73

```

- Line 56-72 shows the different test scenarios.
- When you attempt to RSVP twice or duplicate an RSVP it gives a `willError`
- In line 70 we are waiting for the event to end in order to check the creator account balance.

```js

74 for (const who of [EventCreatorAccount, ...guests]) {
75  console.warn(
76    stdlib.formatAddress(who),
77    'has',
78    stdlib.formatCurrency(await stdlib.balanceOf(who))
79  )
80 }
```

- Line 75-80 shows guest balance after the event expires, the guests who attended would be credited back their ticket fee, while those who didn't won't be.
- The Event creator takes up the fee of guests who didn't attend.

For the link to the full repo check out the [link](https://github.com/FunmiBADev/ReachAlgo_RSVP_dApp)

For the demo of the app check out this [link](https://github.com/FunmiBADev/ReachAlgo_RSVP_dApp)

# Conclusion

If you made it here it means you have completed the RSVP Dapp tutorial and you have created your first decentralized application.

Our discord community is open to everyone, if you have any questions concerning reach please reach out to us on the [Discord](https://discord.gg/dBsCAjF9kx)
