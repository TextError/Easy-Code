import React, { Component } from 'react';
import '../../../style/DidYouKnow.css';

class DidYouKnow extends Component {
  render() {
    return (
      <div className='did-you-know'>
        <h1><strong>Did you know: </strong></h1>
        <div className='did-you-know-box'>
          <p>{this.props.test}</p>
        </div>
    </div>
    )
  }
}

export default DidYouKnow;
