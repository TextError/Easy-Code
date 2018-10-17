import React, { Component } from 'react'

class Post extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      error: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange() {

  }

  render() {
    return (
      <div>
        <input 
          type='text'
          name='post'
          value={this.state.text}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Post;
