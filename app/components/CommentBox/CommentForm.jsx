'use strict';

import React, { Component } from 'react';

/*class CommentForm extends Component{
  render() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
}*/

class CommentForm extends Component{
  state = {
    name: '',
    text: ''
  }
  updateField(field, e) {
    var state = {};
    state[field] = e.target.value;
    this.setState(state);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onPost({
      name:this.state.name,
      text:this.state.text
    });
    this.setState({
      name:'',
      text:''
    });
  }
  render () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input placeholder="你的大名" value={this.state.name} onChange={this.updateField.bind(this, 'name')}/>
        <input placeholder="说点儿什么..."
          value={this.state.text} onChange={this.updateField.bind(this, 'text')}
        />
      <input type="submit" value="提交" />
      </form>
    );
  }
}

export default CommentForm;