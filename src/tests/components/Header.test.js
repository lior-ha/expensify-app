import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// Jest makes a snapshot, the first time the test runs (in /__snapshots__).
// When running the test againg Jest compares the code to the snapshot and returns an error if they are different
// To overwrite the snapshot and make a new one, press u.

test('should render Header correctly', () => {
    // Using Enzyme
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();    
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');


    // Using ReactShallowRenderer
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});