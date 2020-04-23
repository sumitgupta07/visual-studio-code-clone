import React from 'react';
import { shallow } from 'enzyme';
import FileTab from './FileTab';
import { folders } from '../utils/constants';

let handleClick;
let wrapper;
let mockProps;
beforeEach(() => {
  handleClick = jest.fn();
  mockProps = {
    onClick: handleClick,
    file: {
      id: 'a',
      fileName: 'index.js',
      content: 'Placeholder for index.js. It has App.js as child components'
    },
    activeFile: {
      id: 'b',
      fileName: 'App.js',
      content:
        'Placeholder for App.js. It has Header and Content as child components'
    }
  };
  wrapper = shallow(<FileTab {...mockProps} />);
});

it('should render FileTab component', () => {
  expect(wrapper).toMatchSnapshot();
});
it('should have only 1 li item', () => {
  expect(wrapper.find('li').length).toEqual(1);
});

it('should have render label for file item only and not for activeFile item', () => {
  expect(wrapper.find('#a').length).toEqual(1);
  expect(wrapper.find('#b').length).toEqual(0);
});

it('should call onClick with current "file" as parameter when current "file" is clicked', () => {
  wrapper.find('#a').simulate('click');
  expect(handleClick).toBeCalledWith(mockProps.file);
});
