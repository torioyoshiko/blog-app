import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './loadPosts'
import getPosts from '../actions/posts'
import './AllPost.css'

class AllPost extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <div className="previous-post">
        <h1>
Previous posts
        </h1>
        {this.props.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
}

const addStateToProps = state => ({
  posts: state,
})

export default connect(
  addStateToProps,
  { getPosts },
)(AllPost)
