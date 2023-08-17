import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Line1 } from './counter-content';

export class Counter extends Component {
  render() {
    return (
      <>
      <Container>
        <Line1 />
      </Container>
      </>
    )
  }
}

export default Counter;