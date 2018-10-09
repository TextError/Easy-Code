import React, { Component } from 'react';

class Html extends Component {
  constructor() {
    super();
    this.state = {
      paragraph: '',
      input: ''
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.setState(() => ({ paragraph: this.state.input }))
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
      </div>
    )
  }
}

export default Html;
