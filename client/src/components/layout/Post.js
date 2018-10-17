import React, { Component } from 'react'

class Post extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      errors: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state.text);
    this.setState({ text: ''});
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <textarea
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
            error={errors.text}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Post;
