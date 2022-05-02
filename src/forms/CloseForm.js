import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const initialState = {
  contractInfo: ''
}

const CloseForm = props => {
  const [closeEventData, setCloseEventData] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault()
    props.onSubmit({
      contractInfo: closeEventData.contractInfo
    })
    setCloseEventData('')
  }

  const handleChange = e => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newCloseEventData = { ...closeEventData }
    newCloseEventData[fieldName] = fieldValue

    setCloseEventData(newCloseEventData)
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
            Close Event
          </Button>
        </div>
      </Row>
    </Form>
  )
}

export default CloseForm
