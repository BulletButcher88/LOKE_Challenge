// TODO: implement this function

// function fibonacci(n) {
//   throw new Error("Not implemented");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i, fibonacci(i));
// }


// _________________________________ ANSWER_________________________________

// COMMENT: I found two approaches for a fibonacci function, an iterative solution and a reclusive solution. Despite the iterative function having more lines of code, it is quicker to call as a sequence Big O = O(n), where as the recursive solution Big O = O(n^2).

// 1st solution: iterative 

function fibonacci(n) {
  let arr = [0 , 1]
  for( let x = 2; x <= n; x++){
    let a = arr[x - 1];
    let b = arr[x -2]
    arr.push(a + b);
  }
  return arr[n]
}

for (let i = 1; i < 10; i++) {
  console.log("index " + i, "=  " + fibonacci(i))
}



// 2nd solution: recursive 

// function fibonacci(n) {
//   if (n < 2) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// for (let i = 1; i < 10; i++) {
//   console.log("index " + i, "=  " + fibonacci(i))
// }