import React, { Component } from 'react';
import './Research.css';
import { ResearchDesc, ResearchHeader } from './research-header';

export class Research extends Component {
  render() {
    return (
      <div className='research'>
        <ResearchHeader />
        <ResearchDesc />
        <input className="searchb" type="text" name="search" placeholder="Search" ></input>
      </div>
    )
  }
}

export default Research;