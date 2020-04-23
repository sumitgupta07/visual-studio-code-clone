import React from 'react';
import SelectPane from './SelectPane';
import { shallow } from 'enzyme';

let handleSelectFile;
let wrapper;
let mockProps;
beforeEach(() => {
  handleSelectFile = jest.fn();
  mockProps = {
    currentSelection: 'Search',
    onSelectFile: handleSelectFile
  };
  wrapper = shallow(<SelectPane {...mockProps} />);
});

it('should render SelectPane component', () => {
  expect(wrapper).toMatchSnapshot();
});
it('should render Search Component for currentSelection prop as Search', () => {
  expect(wrapper.find('Search').length).toEqual(1);
});

it('should not render FileExplorer component', () => {
  expect(wrapper.find('FileExplorer').length).toEqual(0);
});
