import React, {Component} from 'react';
import Graph from './Graph';



class App extends Component {
  render() {
    return (
      <Graph data={this.props.data}></Graph>
    );
  }
}

export default App;
