import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

describe('Nav', () => {
  let wrapper; 
  
  beforeEach(() => {
    wrapper = shallow(
      <Nav />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      slide: 0
    });
  });
});