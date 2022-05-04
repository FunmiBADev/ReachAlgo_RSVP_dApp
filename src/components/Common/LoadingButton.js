import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

const LoadingButton = ({ addMessage }) => {
  return (
    <Button variant='primary' disabled>
      <Spinner
        as='span'
        animation='grow'
        size='sm'
        role='status'
        aria-hidden='true'
      />
      <h3>{addMessage}</h3>
    </Button>
  )
}

export default LoadingButton
