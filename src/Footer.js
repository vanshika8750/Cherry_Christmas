import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    
  render() {
    return (
      <div className='foot'>
        <div className='first'>
        <div className='comp comp1'>Copyright 2045</div>
        <div className='comp'>Cherry</div>
          <div className='comp'>All Rights Reserved.</div>
        </div>
        <div className='second'>
            <div className='comp comp2'>
                privacy
            </div>
            <div className='comp'>Terms</div>
            <div className='comp'>FAQ</div>
        </div>
        <div className="third">
          Made with love by <h2>--Vanshika Jain--</h2>
        </div>
      </div>
    )
  }
}

export default Footer
