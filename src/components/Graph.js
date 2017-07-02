import React from 'react';
import Axis from './Axis';
import GraphBody from './GraphBody';

export default class Graph extends React.Component {
	//In the ES6+ class world, prop types and defaults live as static properties on the class itself
  static defaultProps = { width: 800, height: 600 };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axis
          x={20}
          y={this.props.height - 100}
          length={this.props.width}
          horizontal={true}
        />
        <Axis
          x={20}
          y={0}
          length={this.props.height - 100}
          horizontal={false}
        />
        <GraphBody
          x={20}
          y={this.props.height - 100}
          data={this.props.data}
        />
      </svg>
    )
  }
}
