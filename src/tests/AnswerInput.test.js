import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import AnswerInput from '../components/AnswerInput';

let mockShowAnswer = jest.fn();
let mockGetUserAnswer = jest.fn();

const defaultState = {
  userInput: ''
}

describe('AnswerInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AnswerInput
        showAnswer={mockShowAnswer}
        getUserAnswer={mockGetUserAnswer} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should update showAnswer on input', () => {
    expect(wrapper.state('userInput')).toEqual('');

    let mockEvent = { target: { innerText: 'An object is an object.' } }

    wrapper.instance().handleInput(mockEvent);

    expect(wrapper.state('userInput')).toEqual('An object is an object.');
  });

  it('should call showAnswer and getUserAnswer when handleClick in invoked', () => {
    wrapper.instance().handleClick();

    expect(mockShowAnswer).toHaveBeenCalled();
    expect(mockGetUserAnswer).toHaveBeenCalled();
  });
});