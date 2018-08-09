import React from 'react';
import View from './carousel-view';

export default class Carousel extends React.PureComponent {
  render() {
    return (
      <View
        incoming={this.props.children[0]}
        outgoing={this.props.children[1]}
      />
    );
  }
}
