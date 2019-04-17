import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

const handleScroll = jest.fn();
const hideMainFlashcard = jest.fn();
const showAllFlashcards = jest.fn();
const showMissedFlashcards = jest.fn();

const defaultState = {
  slide: 0,
  showDropdown: false
}

describe('Nav', () => {
  let wrapper; 
  
  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        hideMainFlashcard={hideMainFlashcard}
        showAllFlashcards={showAllFlashcards}
        showMissedFlashcards={showMissedFlashcards} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should hide dropdown menu', () => {
    wrapper.instance().hideDropdown();

    expect(wrapper.state('showDropdown')).toEqual(false);
  });
});