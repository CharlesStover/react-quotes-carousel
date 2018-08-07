import React from 'react';
import Quote from './quote/quote';
import shuffle from './shuffle';

class Quotes extends React.PureComponent {
  render() {
    const quotes = shuffle(this.props.quotes);
    return (
      <div
        children={quotes.map(quote =>
          <Quote
            key={quote.quote}
            {...quote}
          />
        )}
      />
    );
  }
}

export default Quotes;
