import React from 'react';
import { shallow } from 'enzyme';
import FileExplorer from './FileExplorer';
import { folders } from '../utils/constants';

let handleSelectFile;
let wrapper;
let mockProps;
beforeEach(() => {
  handleSelectFile = jest.fn();
  mockProps = {
    onSelectFile: handleSelectFile
  };
  wrapper = shallow(<FileExplorer {...mockProps} />);
});

it('should render File Explorer component', () => {
  expect(wrapper).toMatchSnapshot();
});
it('should call onSelectFile prop when file name is clicked', () => {
  wrapper.find('#a').simulate('click');
  expect(handleSelectFile).toHaveBeenCalled();
});

it('should all files names of first folder', () => {
  expect(wrapper.find('li').length).toEqual(folders[0].files.length);
});
