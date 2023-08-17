import React, { Component } from 'react'
import './ecosystem.css';
import { EcoDesc, EcoHeader } from './eco-header';
import Ecocard from './eco-cards';


export class Ecosystem extends Component {
  render() {
    return (
      <>
      <div className='ecoo'>
      <EcoHeader />
      <EcoDesc />
      <Ecocard />
      </div>
      </>
    )
  }
}

export default Ecosystem;