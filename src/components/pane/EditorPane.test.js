import React from 'react';
import { shallow, mount } from 'enzyme';
import EditorPane from './EditorPane';
import { folders } from '../utils/constants';

let wrapper;
let mockProps;
beforeEach(() => {
  mockProps = {
    activeFile: {
      id: 'a',
      fileName: 'index.js',
      content: 'Placeholder for index.js. It has App.js as child components'
    }
  };
  wrapper = shallow(<EditorPane {...mockProps} />);
});

it('should render snapshot of Editor Pane Component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render all tab items for all files of first folder', () => {
  expect(wrapper.find('FileTab').length).toEqual(folders[0].files.length);
});

it('should render active file content', () => {
  //wrapper re-assigned to search deep in the Content component
  wrapper = mount(<EditorPane {...mockProps} />);
  expect(wrapper.find('FileContent').text()).toEqual(
    mockProps.activeFile.content
  );
});
