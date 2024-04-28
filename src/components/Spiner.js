import React, { Component } from 'react'
import loading from './loading.gif'

export class Spiner extends Component {
  render() {
    const mystyle = {
    };
    return (
      <div style={mystyle} className='text-center conatiner my-3'>
        <img  src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spiner