import React from 'react';
import { shallow } from 'enzyme';
import NotFountPage from '../../components/NotFountPage';

test('should render NotFountPage correctly', () => {
    const wrapper = shallow(<NotFountPage />);
    expect(wrapper).toMatchSnapshot();
})