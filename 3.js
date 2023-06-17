// printing the first 10 numbers in javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// printing the first 10 numbers in javascript using while loop
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// printing even numbers in an array
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i]);
      }
    }
  }
  
  const numbers = [10, 45, 32, 78, 56, 91, 24];
  printEvenNumbers(numbers); // prints 10 32 78 56 24

// printing even numbers in an array using while loop

// function printEvenNumbers(arr) {
//     let i = 0;
//     while (i < arr.length) {
//       if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//       }
//       i++;
//     }
//   }
  
//   const numbers = [10, 45, 32, 78, 56, 91, 24];
//   printEvenNumbers(numbers); // prints 10 32 78 56 24