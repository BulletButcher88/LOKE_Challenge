// TODO: implement this function

// function fibonacci(n) {
//   throw new Error("Not implemented");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i, fibonacci(i));
// }



// COMMENT: Two possible approaches of writing a fibonacci function may be an iterative solution and reclusive solution.  Despite the iterative function having more lines of code, it is quicker to call as a sequence Big O = O(n), where as the recursive solution Big O = O(n^2).


// 1 ANSWER: iterative function

function fibonacci(n) {
  let arr = [0 , 1]
  for( let x = 2; x <= n; x++){
    let a = arr[x - 1];
    let b = arr[x -2]
    arr.push(a + b);
  }
  return arr[n]
}

for (let i = 0; i < 10; i++) {
 console.log(i, fibonacci(i));
}



// 2 ANSWER: recursive solution

// function fibonacci(n) {
//   if (n < 2) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i, fibonacci(i));
// }