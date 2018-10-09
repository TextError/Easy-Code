import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Html extends Component {
  constructor() {
    super();
    this.state = {
      paragraph: '',
      input: '',
      errors: {}
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.setState(() => ({ paragraph: this.state.input }));
  };

  onChange(e) {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          name='test'
          value={this.state.input}
          onChange={this.onChange}
        />
        <button
          onClick={this.onClick}
        >Click me</button>
        <br />
        <br />
        <p>Value is: {this.state.paragraph}</p>
        <p>{this.state.errors}</p>
      </div>
    )
  }
}

Html.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, null)(Html);
