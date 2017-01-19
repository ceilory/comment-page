'use strict';
import React, { Component } from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import $ from 'jquery';

/*class CommentBox extends Component{
  render() {
    return (
      <div className="commentBox">
        <h1> 评论功能 </h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}*/


/*let data = [
  {author: "me", text: "- today is Thursday"},
  {author: "him", text: "# how are you"}
];

class CommentBox extends Component{
  render() {
    return (
      <div className="commentBox">
        <h1> 评论功能 </h1>
        <CommentList data={data} />
        <CommentForm />
      </div>
    );
  }
}*/

class CommentBox extends Component{
  constructor(props){
    super(props);
    this.state = { data: [
      {
        author: '作者 1',
        text: '评论 1'
      },
      {
        author: '作者 2',
        text: ' *评论 2* '
      }
    ] };
  }
  loadCommentsFromServer () {
    let self = this;
    // $.ajax({
    //   url: this.props.url,
    //   method:'post',
    //   dataType:'json',
    //   data: {
    //     json:JSON.stringify({
    //       data:database
    //     })
    //   },
    //   success(res) {
    //     console.log(res)
    //       self.setState({data: res.data})
    //     }
    // });
  }
  handlePost(){

  }
  componentDidMount () {
    this.loadCommentsFromServer();
  }
  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onPost={this.handlePost}/>
      </div>
    );
  }
}

export default CommentBox;