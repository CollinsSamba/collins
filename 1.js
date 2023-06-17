// // finding the largest of two numbers
// function findLargestNumber(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// const a = 10;
// const b = 20;
// const largestNumber = findLargestNumber(a, b);
// console.log(largestNumber); // prints 20

// // finding the largest of two numbers using while loop
// function findLargestNumber(num1, num2) {
//   let largestNum;
//   let i = 0;
//   while (i < 1) {
//     if (num1 > num2) {
//       largestNum = num1;
//     } else {
//       largestNum = num2;
//     }
//     i++;
//   }
//   return largestNum;
// }

// const a = 10;
// const b = 20;
// const largestNumber = findLargestNumber(a, b);
// console.log(largestNumber); // prints 20

// // Find the largest of three numbers
// function findLargestNumber(num1, num2, num3) {
//   let largestNum;
//   if (num1 > num2 && num1 > num3) {
//     largestNum = num1;
//   } else if (num2 > num1 && num2 > num3) {
//     largestNum = num2;
//   } else {
//     largestNum = num3;
//   }
//   return largestNum;
// }

// const a = 10;
// const b = 20;
// const c = 15;
// const largestNumber = findLargestNumber(a, b, c);
// console.log(largestNumber); // prints 20

// Finding the largest of three numbers using while loop
function findLargestNumber(num1, num2, num3) {
  let largestNum = num1;
  let i = 0;
  while (i < 2) {
    if (num2 > largestNum) {
      largestNum = num2;
    }
    if (num3 > largestNum) {
      largestNum = num3;
    }
    i++;
  }
  return largestNum;
}

const a = 10;
const b = 20;
const c = 15;
const largestNumber = findLargestNumber(a, b, c);
console.log(largestNumber); // prints 20