import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const initialState = {
  contractInfo: '',
  rsvpAddress: ''
}
const CheckinForm = props => {
  const [checkinData, setCheckinData] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault()
    props.onSubmit({
      contractInfo: checkinData.contractInfo,
      rsvpAddress: checkinData.rsvpAddress
    })
    setCheckinData('')
  }

  const handleChange = e => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newCheckinData = { ...checkinData }
    newCheckinData[fieldName] = fieldValue

    setCheckinData(newCheckinData)
  }
  return (
    <Form onSubmit={handleSubmit} className='event-app'>
      <Row>
        <Col>
          <Form.Label>Contract Information</Form.Label>
          <Form.Control
            autoComplete='off'
            size='lg'
            required
            as='textarea'
            rows={5}
            name='contractInfo'
            type='text'
            placeholder='{}'
            className='event-input'
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Checkin Address</Form.Label>
          <Form.Control
            autoComplete='off'
            size='lg'
            required
            as='textarea'
            name='rsvpAddress'
            type='text'
            placeholder='Please enter your RSVP wallet address'
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
            Checkin
          </Button>
        </div>
      </Row>
    </Form>
  )
}

export default CheckinForm
