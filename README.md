# ReachAlgo_RSVP_dApp
## Stories
1. For Guest that confirm checkin will get 100% refund of fees. For those that do not check in - they forfeit event fee.

## Object Definitions/ Scaffolding
1. Guest:
  - Bool: willAttendEvent (Booked Ticket = RSVP) ||  Bool: didAttendEvent (Confirm Attendance status)
2. Event:
  - Bytes(128):Event Name 
  - Bytes(128):Event Description 
  - UInt: Event End
  - UInt: Ticket Price
3. Manage Attendance
  - Function: Handle Checkin
  - Function: Handle Event Close

## React Frontend Forms and Fields
1. CreateEvent - To return Contract Information
  - EventName
  - Ticket Price
  - EventDeadline
  - Submit Button
2. RSVP - BookEvent - Return RSVP Confirmation
  - Contract Information
  - Submit button
3. EventCheckin - Return Checkin Confirmation
  - Event Contract Information
  - RSVP'd Wallet Address
  - Submit Button
 4. Close Event - Return Event Close Notification
  - Contract Information
  - Submit button
