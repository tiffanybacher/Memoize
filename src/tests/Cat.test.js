import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Cat from '../components/Cat';

describe('Cat', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Cat />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});