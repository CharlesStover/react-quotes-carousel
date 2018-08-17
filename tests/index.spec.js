import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Quotes from '../index';

Enzyme.configure({ adapter: new Adapter() });

const quotes = [
  { author: 'A', company: 'B', image: 'C', quote: 'D' },
  { author: 'B', company: 'C', image: 'D', quote: 'A' },
  { author: 'C', company: 'D', image: 'A', quote: 'B' },
  { author: 'D', company: 'A', image: 'B', quote: 'C' }
];

describe('react-quotes', () => {

  it('should render without crashing', () => {
    mount(<Quotes quotes={quotes} />);
  });

  it('should shuffle without crashing', () => {
    mount(
      <Quotes
        quotes={quotes}
        shuffle
      />
    );
  });
});
