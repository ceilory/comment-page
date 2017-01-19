import React, { Component } from 'react';
import { CommentBox } from '../../components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CommentBox">
        <CommentBox />
      </div>
    )
  }
}

export default App;