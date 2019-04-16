import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import UserArea from '../components/UserArea';

const mockUserAnswer = 'An object is an object.';
const mockHideAnswer = jest.fn();
const mockUpdateCardSelection = jest.fn();
const mockShowSavedMsg = jest.fn();
const mockHideSavedMsg = jest.fn();
const mockSaveCardToStorage = jest.fn();
const mockUpdateSavedCards = jest.fn();

const defaultState = {
  displayNextBtn: false
}

describe('UserArea', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UserArea 
        userAnswer={mockUserAnswer}
        hideAnswer={mockHideAnswer}
        updateCardSelection={mockUpdateCardSelection}
        showSavedMsg={mockShowSavedMsg}
        hideSavedMsg={mockHideSavedMsg}
        saveCardToStorage={mockSaveCardToStorage}
        updateSavedCards={mockUpdateSavedCards} />
    );
  });

  it('should match snapshot if displayNextBtn is true', () => {
    wrapper.setState({
      displayNextBtn: true
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if displayNextBtn is false', () => {
    wrapper.setState({
      displayNextBtn: false
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it.skip('should call hideSavedMsg, hideAnswer, and updateCardSelection when .next-btn or .accept-btn are clicked', () => {
    
  });

  it.skip('should call saveCard when .save-btn is clicked', () => {

  });

  it('should save card to storage and display .next-btn', () => {
    wrapper.instance().saveCard();

    expect(mockSaveCardToStorage).toBeCalled();
    expect(mockUpdateSavedCards).toBeCalled();
    expect(mockShowSavedMsg).toBeCalled();

    expect(wrapper.state('displayNextBtn')).toEqual(true);
  });
});