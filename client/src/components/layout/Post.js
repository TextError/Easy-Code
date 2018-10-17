import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../../react-redux/actions/addPost';

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

    const newPost = {
      text: this.state.text
    }

    this.props.addPost(newPost)
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

Post.propTypes = {
  addPost: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(Post);
