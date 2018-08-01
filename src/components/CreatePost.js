import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import './CreatePost.css';

class CreatePost extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const message = this.getMessage.value;
        const payload = {
            id: new Date(),
            message
        };
        this.props.dispatch({
            type:'ADD_POST',
            payload});
        this.getMessage.value = '';
    };

    render() {
        return (
            <div className="create-post-form">
                <h1>Create post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        ref={(input)=>this.getMessage = input}
                        placeholder="Enter post"
                    />
                    <br/>
                    <button>ADD</button>
                </form>
            </div>
        );
    }
}

export default connect()(CreatePost);

