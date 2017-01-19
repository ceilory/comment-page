'use strict';

import React, { Component } from 'react';
import Comment from './Comment.jsx';

class CommentList extends Component{
  render() {
    /*return (
        <div className="commentList">
          <Comment author="作者 1">评论 1</Comment>
          <Comment author="作者 2">评论 2</Comment>
        </div>
      );*/

    let commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      )
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
}

export default CommentList;