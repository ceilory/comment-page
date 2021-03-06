'use strict';
import React, { Component } from 'react';
import marked from 'marked';

class Comment extends Component {
  render() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.autor}
        </h2>
        {/*this.props.children*/}
        <span dangerouslySetInnerHTML = {{__html: rawMarkup}} />
      </div>
    )
  }
}

export default Comment;