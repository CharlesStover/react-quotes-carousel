import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Quotes from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('react-quotes', () => {

  it('should render without crashing', () => {
    shallow(<Quotes quotes={[]} />);
  });
});
