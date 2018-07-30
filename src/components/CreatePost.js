import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

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
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        rows="10"
                        cols="40"
                        ref={(input)=>this.getMessage = input}
                        placeholder="Enter Post"
                    /><br/><br/>
                    <button>Try</button>
                </form>
            </div>
        );
    }
}

export default connect()(CreatePost);

