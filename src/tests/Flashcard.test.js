import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Flashcard from '../components/Flashcard'

const mockData = {
    "question": "What is an object in JavaScript?",
    "answer": "An object in JavaScript can be compared to an object in real life. It is a stand alone entity with it's own set of properties and methods.",
    "id": 1,
    "group": 1
  }
let mockAnswerIsShown = false;

describe('Flashcard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Flashcard 
        question={mockData.question}
        answer={mockData.answer}
        answerIsShown={mockAnswerIsShown} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if answerIsShown is true', () => {
  mockAnswerIsShown = true;

  expect(wrapper).toMatchSnapshot();
  });
});