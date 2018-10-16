import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../react-redux/actions/registerAction';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser);
  }

  render() {
    const {errors} = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type='name'
            name='userName'
            value={this.state.userName}
            placeholder='Name'
            onChange={this.onChange}
            error={errors.name}
          />
          <input 
            type='email'
            name='email'
            value={this.state.email}
            placeholder='Email'
            onChange={this.onChange}
            error={errors.email}
          />
          <input 
            type='password'
            name='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.onChange}
            error={errors.password}
          />
          <input 
            type='password'
            name='password2'
            value={this.state.password2}
            placeholder='Confirm password'
            onChange={this.onChange}
            error={errors.password2}
          />
          <button 
            type='submit'
          >Register</button>
        </form>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequire,
  errors: PropTypes.object.isRequire
};

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});

export default connect(mapStateToProps, { registerUser })(Register);