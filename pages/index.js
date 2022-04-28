import React from 'react'
import { Container } from 'react-bootstrap'
import { DisplayPageDiv } from '../components/Common/DisplayPageWrapper'
import { PageBreak } from '../components/Common/PageBreak'
import { PageHeader } from '../components/Common/PageHeader'

const Home = () => {
  return (
    <Container>
      <DisplayPageDiv>
        <PageHeader addDescription='Home Page' />
        <PageBreak />
      </DisplayPageDiv>
    </Container>
  )
}

export default Home
