import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';


class AllPost extends Component {
    render() {
        return (
            <div className="App">
                <h1>Previous posts</h1>
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        );
    }
}

const addStateToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(addStateToProps)(AllPost);