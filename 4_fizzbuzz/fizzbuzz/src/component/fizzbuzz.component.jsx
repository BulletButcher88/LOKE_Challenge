import React from 'react';


class FizzBuzz extends React.Component {


fizzLogic() {
  return (
    Array.from({ length: 100 })
    .map((_, n) => 
     n === 0 ? 0 : n % 15 === 0? "FizzBuzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : n
    )
    .join(", ")
  )
}
  

render() {
  return (
      <div>
        {this.fizzLogic()}
      </div>
      )};
}

export default FizzBuzz;