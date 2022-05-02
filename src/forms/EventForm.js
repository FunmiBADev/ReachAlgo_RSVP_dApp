import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const initialState = {
  id: 0,
  eventName: '',
  ticketPrice: 0,
  eventEnd: 0
}
const EventForm = props => {
  const [eventData, setEventData] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault()
    props.onSubmit({
      id: nanoid(),
      eventName: eventData.eventName,
      ticketPrice: eventData.ticketPrice,
      eventEnd: eventData.eventEnd
    })
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
    <Form onSubmit={handleSubmit} className='event-app'>
      <Row>
        <Col>
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            autoComplete='off'
            size='lg'
            required
            as='textarea'
            rows={5}
            name='eventName'
            type='text'
            placeholder='Enter Event Name'
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
  )
}

export default EventForm
