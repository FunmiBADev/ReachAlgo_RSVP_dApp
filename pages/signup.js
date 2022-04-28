import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'

const SignUp = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Signup Page' />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default SignUp
