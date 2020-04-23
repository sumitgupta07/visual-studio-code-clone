import React from 'react';
import Icon from './Icon';
import { shallow } from 'enzyme';

let handleSelectIcon;
let wrapper;
let mockProps;
beforeEach(() => {
  handleSelectIcon = jest.fn();
  mockProps = {
    label: 'Search',
    onSelectIcon: handleSelectIcon,
    iconClass: 'fas fa-search fa-rotate fa-3x'
  };
  wrapper = shallow(<Icon {...mockProps} />);
});

it('should render Icon component', () => {
  expect(wrapper).toMatchSnapshot();
});
it('should call onSelecIcon when button clicked', () => {
  wrapper.find('button').simulate('click');
  expect(handleSelectIcon).toHaveBeenCalled();
});
it('should pass "Search" as label on click', () => {
  wrapper.find('button').simulate('click');
  expect(handleSelectIcon).toHaveBeenCalledWith(mockProps.label);
});

it('should pass Icon class for Search as props', () => {
  expect(wrapper.find('i').hasClass(mockProps.iconClass)).toBe(true);
});
