import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class CreatePost extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            message
        };
        console.log(data);
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getMessage.value = '';
    };

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea
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