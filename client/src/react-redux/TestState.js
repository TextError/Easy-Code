import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//actions
import { testAction } from './actions/testActions';

class TestState extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    const user = {
      name: this.state.name,
      password: this.state.password
    }
    this.props.testAction(user);
  };

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const name = this.props.test.user.name
    return (
      <div>
        <input
          placeholder= 'Name' 
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.onChange}
        />
        <input 
          placeholder= 'Password'
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.onChange}
        />
        <button
          onClick={this.onClick}
        >Click me</button>
        <br />
        <br />
        <p>Your name is: {name}</p>
      </div>
    )
  }
}

TestState.propTypes = {
  testAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  test: state.test
});

export default connect(mapStateToProps, { testAction })(TestState);
