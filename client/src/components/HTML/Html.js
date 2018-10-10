import React, { Component } from 'react';
import DidYouKnow from './didYouKnow/DidYouKnow';

class Html extends Component {
  render() {
    return (
      <div>
        <DidYouKnow test={(<span>September 9, 1947 <a href='https://en.wikipedia.org/wiki/Grace_Hopper' target='_'>Grace Murray Hopper</a> records 'the first computer bug' in the Harvard Mark II computer's log book: <i>“First actual case of bug being found.”</i></span>)}/>
        html
      </div>
    )
  }
}

export default Html;
