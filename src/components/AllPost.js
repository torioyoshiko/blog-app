import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './loadPosts';
import getPosts from '../actions/posts';
class AllPost extends Component {
    render() {
        return (
            <div className="App">
                <h1>Previous posts</h1>
                <button onClick={this.props.onGetPosts}>Load previous posts</button>
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
                {/*не будут отображаться старые посты*/}
            </div>
        );
    }
}

const addStateToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(
    addStateToProps,
    dispatch =>({
        onGetPosts: () =>{
            dispatch(getPosts());
        }
    })
)(AllPost);