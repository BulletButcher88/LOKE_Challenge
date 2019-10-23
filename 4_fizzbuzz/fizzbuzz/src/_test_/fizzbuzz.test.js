import React from 'react';
import { shallow } from 'enzyme';

import FizzBuzz from '../component/fizzbuzz.component';

describe('<FizzBuzz />', () => {
	it('renders without crashing', () => {
		shallow(<FizzBuzz />);
	});
});



// fake testing runs without errors

// test('testing test', () =>{
//   expect(true).toBeTruthy();
// })


