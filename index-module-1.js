// const students = "Vadim, Svitlana, Olesia, Ruslan"
// let newString = students;
// let dot;
// let word;
// while (newString) {
//     dot = newString.indexOf(',');
//     word = newString.slice(0, dot);
//     if (newString.includes(',')) {
//         console.log(word);
//         newString = newString.replace((word + ", "), '');
//     } else {
//         console.log(newString)
//         newString = ""
//     }
// }

// const students = "Vadim, Svitlana, Olesia, Ruslan";
// let newString = students;
// let word = "";
// for (let i = 0; i < newString.length; i += 1) {
//     if (newString[i] !== "," && newString.includes(',')) {
//         word = word + newString[i];
//     } else if (!newString.includes(',')) {
//         console.log(newString.slice(i, newString.length));
//         break;
//     } else {
//       newString = newString.slice(i + 1, newString.length);
//       console.log(word);
//       word = '';
//       i = 0;
//     }
// }

// let firstStr = '1,2,3,2,1,2,2,4';
// for (let i = 0; i <= firstStr.length; i += 1) {
//     for (let j = firstStr.length; j >= 0; j -=1) {
//         if ((firstStr[j] === firstStr[i]) && (j !== i) && (firstStr[i] !== ',')) {
//             firstStr = firstStr.slice(0, j) + firstStr.slice(j + 2);
//         }
//     }
// }
// console.log(firstStr);