import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import './css/CreatePost.css';

class CreatePost extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const payload = {
            id: new Date(),
            title,
            message
        };
        this.props.dispatch({
            type:'ADD_POST',
            payload});
        this.getTitle.value = '';
        this.getMessage.value = '';
    };

    render() {
        return (
            <div className="create-post-form">
                <h1>Create post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Enter Post Title"
                        ref={(input)=>this.getTitle = input}
                        className="post-h2"
                        required
                    /> <br/>
                    <input
                        ref={(input)=>this.getMessage = input}
                        placeholder="Enter post"
                        className="post-text"
                        required
                    />
                    <br/>
                    <button>ADD</button>
                </form>
            </div>
        );
    }
}

export default connect()(CreatePost);

