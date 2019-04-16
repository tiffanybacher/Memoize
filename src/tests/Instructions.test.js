import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Instructions from '../components/Instructions';

let mockAnswerIsShown = false;
let mockSavedMsgIsShown = false;

describe('Instructions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Instructions
        answerIsShown={mockAnswerIsShown}
        savedMsgIsShown={mockSavedMsgIsShown} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});