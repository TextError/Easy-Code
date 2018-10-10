import React, { Component } from 'react';

//Redux
import { randomFacts } from '../../react-redux/actions/randomFactsActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Css
import DidYouKnow from './didYouKnow/DidYouKnow';

class Html extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.randomFacts;
  }

  render() {
    return (
      <div>
        <DidYouKnow test={(<span>September 9, 1947 <a href='https://en.wikipedia.org/wiki/Grace_Hopper' target='_'>Grace Murray Hopper</a> records 'the first computer bug' in the Harvard Mark II computer's log book: <i>“First actual case of bug being found.”</i></span>)}/>
        html
        <button onClick={this.onClick}>Next</button>
      </div>
    )
  }
}

export default connect(null, { randomFacts })(Html);
