import React from 'react';
import shuffleArray from '../../constants/shuffle-array';
import Quote from '../quote/quote';

const mapQuotes = (quotes, shuffleQuotes) =>
  (
    shuffleQuotes ?
      shuffleArray(quotes) :
      quotes
  )
    .map(quote =>
      <Quote
        key={quote.quote}
        {...quote}
      />
    );

export default mapQuotes;
