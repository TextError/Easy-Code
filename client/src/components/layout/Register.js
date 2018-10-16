import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      email: '',
      password: '',
      password2: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type='name'
            name='userName'
            value={this.state.userName}
            placeholder='Name'
            onChange={this.onChange}
          />
          <input 
            type='email'
            name='email'
            value={this.state.email}
            placeholder='Email'
            onChange={this.onChange}
          />
          <input 
            type='password'
            name='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.onChange}
          />
          <input 
            type='password'
            name='password2'
            value={this.state.password2}
            placeholder='Confirm password'
            onChange={this.onChange}
          />
          <button onClick={this.onClick}>Register</button>
        </form>
      </div>
    )
  }
}

export default Register;