import React from 'react'
import '../../../style/DidYouKnow.css';

export default (props) => {
  return (
    <div className='did-you-know'>
      <h1><strong>Did you know: </strong></h1>
      <div className='did-you-know-box'>
        <p>{props.test}</p>
      </div>
    </div>
  )
};

