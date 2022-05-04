import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const EventForm = () => {
  const [eventData, setEventData] = useState('')
  const [eventsData, setEventsData] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    const newEvent = {
      id: nanoid(),
      eventName: eventData.eventName,
      eventDetails: eventData.eventDetails,
      ticketPrice: eventData.ticketPrice,
      eventEnd: eventData.eventEnd
    }

    setEventsData([...eventsData].concat(newEvent))
    console.log(eventsData)
    setEventData('')
  }

  const handleChange = e => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newEventData = { ...eventData }
    newEventData[fieldName] = fieldValue

    setEventData(newEventData)
  }

  return (
    <>
      {' '}
      <Form onSubmit={handleSubmit} className='event-app'>
        <Row>
          <Col>
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              size='lg'
              required
              autoComplete='off'
              name='eventName'
              type='text'
              step='0.01'
              placeholder='Enter Event Name'
              className='event-input'
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Event Details</Form.Label>
            <Form.Control
              autoComplete='off'
              size='lg'
              required
              as='textarea'
              rows={5}
              name='eventDetails'
              type='text'
              placeholder='Enter Event Details'
              className='event-input'
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Event Ticket Price</Form.Label>
            <Form.Control
              size='lg'
              required
              autoComplete='off'
              name='ticketPrice'
              type='number'
              step='0.01'
              placeholder='Enter Event Ticket Price'
              className='event-input'
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Event Deadline</Form.Label>
            <Form.Control
              size='lg'
              required
              autoComplete='off'
              name='eventEnd'
              type='number'
              step='0.01'
              placeholder='Enter Event Deadline'
              className='event-input'
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row>
          <div className='modal-footer' style={{ marginRight: '4px' }}>
            <Button variant='secondary' type='reset'>
              Clear Form
            </Button>
            <Button variant='primary' type='submit'>
              Deploy
            </Button>
          </div>
        </Row>
      </Form>
    </>
  )
}

export default EventForm
