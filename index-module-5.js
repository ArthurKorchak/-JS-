// Написати функцію, яка приймає масив цілих чисел, та повертє новий масив,
// який містить послідовний підмасив, сума елементів якого є найбільшою.
// Якщо переданий пустий масив, функція повертає також пустий масив.
// values = [-19, 66, -6, -32, -73, -51, -31, -64, -93, -34]; // [66] sum = 66
// values = [-43, -77, 92, 43, -87, -12, -22, -47, 97, 19]; // [92, 43] sum = 135
// values = [39, -37, -22, -9, -56, 63, -56, 19, 56, -28]; // [63, -56, 19, 56] sum = 82

// const getMaxSubArray = (array) => {
//     if (array.length === 0) {return []};
//     const results = {};
//     array.reduce((acc, elem) => {
//             acc[1] += elem;
//             acc[0].push(elem);
//             acc[1] > acc[2] ? results[acc[1]] = [...acc[0]] : null;
//             acc[2] = Math.max(acc[2], acc[1]); 
//             acc[1] < 0 ? acc = [[], 0, acc[2]] : null;
//             return acc;
//             }, [[], 0, 0]);
//     return results[Math.max(...(Object.keys(results)).map((item) => Number(item)))];
// }

// console.log(values);
// let ret;
// const repeats = 1000;
// console.time('getMaxSubArray x' + repeats);
// for (let i = 0; i < repeats; i++) {
//     ret = getMaxSubArray(values);
// }
// console.timeEnd('getMaxSubArray x' + repeats);
// console.log(ret);

// ---------------------------------------------------------------------------------------------------
