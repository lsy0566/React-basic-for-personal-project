import React, { Component } from 'react';

function tick(){
  const element = (
    <div>
      <h1>heeeee</h1>
      <h2>It is {new Date().toLocaleDateString()}.</h2>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>h2</h1>
      </div>
    );
  }
}

export default App;
