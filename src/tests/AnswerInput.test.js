import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import AnswerInput from '../components/AnswerInput';

describe('AnswerInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AnswerInput />
    );
  });

  it('should match snapshot', () +> {
    expect(wrapper).toMatchSnapshot();
  });
});