import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
  render() {
    return (
        <div>
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.message}</p>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(Post)