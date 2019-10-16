import React from "react";
import FizzBuzz from './component/fizzbuzz.component'
import "./App.css";


// Moved the JavaScript logic code for Fizzbuzz into the component folder

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <FizzBuzz/>
      </header>
    </div>
  );
}

export default App;
