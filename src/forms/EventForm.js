import { nanoid } from 'nanoid'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as backend from '../build/index.startup.mjs'
import { stdlib } from '../utitlity/utils'

const EventForm = ({ account }) => {
  const [eventData, setEventData] = useState('')
  const [contractDeploying, setContractDeploying] = useState(false)

  const Views = {
    isLoading: 'is loading',
    createEvent: 'create event',
    eventContractDeployed: 'event contract deployed'
  }
  const [view, setView] = useState(Views.createEvent)

  const deployEvent = async (eName, eeventDetails, tPrice, deadline) => {
    const contractCall = await account.contract(backend)
    setContractDeploying(true)
    setView(Views.isLoading)
    console.log(account)
    console.log({ eName, eeventDetails, tPrice, deadline })
    try {
      await contractCall.p.Organiser({
        eventName: '',
        eventDetails: '',
        ticketPrice: stdlib.parseCurrency(tPrice),
        eventEnd: stdlib.bigNumberify(deadline),
        ready: () => {
          throw 42
        }
      })
    } catch (err) {
      if (err !== 42) {
        throw err
      }
    }
    const ctcInfoStr = JSON.stringify(await contractCall.getInfo(), null, 2)
    setView(Views.eventContractDeployed)
    console.log(ctcInfoStr)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setContractDeploying(true)
    deployEvent(
      eventData.eventName,
      eventData.eventDetails,
      eventData.ticketPrice,
      eventData.eventEnd
    )
    setContractDeploying(false)
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
      <Form
        onSubmit={!contractDeploying ? handleSubmit : null}
        className='event-app'
      >
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
            <Button
              variant='primary'
              disabled={contractDeploying}
              type='submit'
            >
              {contractDeploying ? 'Deploying...' : 'Deploy'}
            </Button>
          </div>
        </Row>
      </Form>
    </>
  )
}

export default EventForm
