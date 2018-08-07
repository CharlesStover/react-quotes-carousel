import React from 'react';
import Quote from './quote/quote';

class Quotes extends React.PureComponent {
  render() {
    return (
      <div
        children={this.props.quotes.map(quote =>
          <Quote {...quote} />
        )}
      />
    );
  }
}

export default Quotes;
