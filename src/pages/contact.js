import React from 'react'
import Header from '../components/Header'
import Container from '../components/container'

const Contact = () => {
  return (
    <div>
      <Header textHeader="Contact" />
      <Container>
        <h1>I would like to talk with you</h1>
        <a href="mailto:me@example.com">me@example.com</a>
      </Container>
    </div>
  )
}

export default Contact