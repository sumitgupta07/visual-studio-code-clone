import React from 'react';
import NavBar from './NavBar';
import { mount } from 'enzyme';
import { labels } from '../utils/constants';

let handleSelect;
let wrapper;
let mockProps;
beforeEach(() => {
  handleSelect = jest.fn();
  mockProps = {
    onSelectNav: handleSelect
  };
  wrapper = mount(<NavBar {...mockProps} />);
});

it('should render NavBar component', () => {
  expect(wrapper).toMatchSnapshot();
});
it('should pass Search as label for Icon with id: Search', () => {
  expect(wrapper.find('#Search').prop('label')).toEqual('Search');
});

it('should call onSelectNav prop with parameter "FileExplorer"', () => {
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(handleSelect).toHaveBeenCalledWith(labels.FileExplorer);
});

it('should call onSelectNav prop with parameter "Debug"', () => {
  wrapper
    .find('#Debug')
    .find('button')
    .simulate('click');
  expect(handleSelect).toHaveBeenCalledWith(labels.Debug);
});
