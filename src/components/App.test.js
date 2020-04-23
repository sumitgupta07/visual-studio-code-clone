import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from './root/Header';
import Content from './root/Content';
import Footer from './root/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render App component', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('renders Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).length).toEqual(1);
});

it('renders Content component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Content).length).toEqual(1);
});

it('renders Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).length).toEqual(1);
});
