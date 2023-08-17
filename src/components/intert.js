import React, { Component } from 'react'
import './intert.css';
import poto from './img/intert.png';
import { IntertDesc, IntertHeader } from './intert-header';
import { Container } from 'react-bootstrap';


export class Intert extends Component {
  render() {
    return (
      <>
      <div className='intert'>
        <Container>
        <IntertHeader />
        <IntertDesc />
        <img src={poto} alt='intert' />
        </Container>
      </div>
      </>
    )
  }
}

export default Intert;