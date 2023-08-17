import React, { Component } from 'react'
import './spotlight.css';
import { SpotDesc, SpotHeader } from './spot-header';
import SpotCard from './spot-card';


export class Spotlight extends Component {
  render() {
    return (
      <>
      <div className='spotlight'>
        <SpotHeader />
        <SpotDesc />
        <SpotCard />
      </div>
      </>
    )
  }
}

export default Spotlight;