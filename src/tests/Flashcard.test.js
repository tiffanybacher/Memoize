import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Flashcard from '../components/Flashcard'

describe('Flashcard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Flashcard />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have a default state', () => {
    
  });
});