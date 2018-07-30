import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './loadPosts';
import getPosts from '../actions/posts';

class AllPost extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {

        return (
            <div className="App">
                <h1>Previous posts</h1>
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
    { getPosts },
)(AllPost);
