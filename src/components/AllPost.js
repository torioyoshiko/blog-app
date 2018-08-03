import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './loadPosts';
import getPosts from '../actions/posts';
import './AllPost.css';

class AllPost extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {

        return (
            <div className="previous-post">
                <h1>Previous posts</h1>
                {this.props.posts.map((post) => <Post key={post.id} post={post} className="previous-post-text"/>)}
<<<<<<< HEAD
                {/*cant see old post*/}
=======
                {/*cant see old posts*/}
>>>>>>> f0fad707104d1188d228901625ee052265c337b0
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
