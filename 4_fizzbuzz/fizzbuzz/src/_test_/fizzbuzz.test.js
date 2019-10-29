import React from 'react';

import { fizzLogic } from '../component/fizzbuzz.component';


test('fizzLogic function', () => {
	expect(fizzLogic).toHaveBeenCalled()
})


// fake testing runs without errors

// test('testing test', () =>{
//   expect(true).toBeTruthy();
// })


