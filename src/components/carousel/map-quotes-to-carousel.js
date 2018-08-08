import React from 'react';
import Quote from '../quote/quote';

const mapQuotes = quote =>
  <Quote
    key={quote.quote}
    {...quote}
  />;

const mapQuotesToCarousel = quotes =>
  <React.Fragment>
    <Quote {...quotes[quotes.length - 1]} />
    {quotes.map(mapQuotes)}
    <Quote {...quotes[0]} />
  </React.Fragment>;

export default mapQuotesToCarousel;
