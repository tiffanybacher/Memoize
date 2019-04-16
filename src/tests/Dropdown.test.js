import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Dropdown from '../components/Dropdown';

const mockShowDropdown = false;
const mockHideDropdown = jest.fn();

describe('Dropdown', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown
        showDropdown={mockShowDropdown}
        hideDropdown={mockHideDropdown} />
    );
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide dropdown menu on mouseleave', () => {
  wrapper.instance().handleMouseLeave();

  expect(mockHideDropdown).toBeCalled();
  });
});