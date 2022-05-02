import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const initialState = {
  contractInfo: ''
}
const RSVPForm = props => {
  const [rsvpData, setRsvpData] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault()
    props.onSubmit({
      contractInfo: rsvpData.contractInfo
    })
    setRsvpData('')
  }

  const handleChange = e => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newRsvpData = { ...rsvpData }
    newRsvpData[fieldName] = fieldValue

    setRsvpData(newRsvpData)
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
        <div className='modal-footer' style={{ marginRight: '4px' }}>
          <Button variant='secondary' type='reset'>
            Clear Form
          </Button>
          <Button variant='primary' type='submit'>
            RSVP
          </Button>
        </div>
      </Row>
    </Form>
  )
}

export default RSVPForm
