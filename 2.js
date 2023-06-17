// checking if a year is a leap year
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
}
  
const year = 2024;
if (isLeapYear(year)) {
console.log(`${year} is a leap year`);
} else {
console.log(`${year} is not a leap year`);
}

// checking if a year is leap using while loop
// // It doesn't make any sense but here it is
// function isLeapYear(year) {
//     let isLeap = false;
//     let i = 0;
//     while (i < 1) {
//       if (year % 4 === 0) {
//         if (year % 100 === 0) {
//           if (year % 400 === 0) {
//             isLeap = true;
//           }
//         } else {
//           isLeap = true;
//         }
//       }
//       i++;
//     }
//     return isLeap;
//   }
  
//   const year = 2024;
//   if (isLeapYear(year)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }

