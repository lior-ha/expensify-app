// Setup Enzyme to support version 16 of React

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});


// Setup for the env files (for the test env)
import DotEnv from 'dotenv';

DotEnv.config({ path: '.env.test' });