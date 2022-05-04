import React, { useState } from 'react'
import EventForm from './EventForm'

const EventList = () => {
  const [events, setEvents] = useState([])

  const addEvent = ev => {
    if (!ev.text || /^\s*$/.test(ev.text)) {
      return
    }
    const newEvents = [ev, ...events]
    setEvents(newEvents)
    console.log(...events)
  }
  return (
    <div>
      <h1>Event List</h1>
      <EventForm onSubmit={addEvent} />
    </div>
  )
}

export default EventList
