// const all = ['Artem', 'Anna', 'Maksim', 'Svetlana', 'David', 'Roman', 'Kate'];
// const boys = ['Artem', 'Maksim', 'David', 'Roman'];
// Написати код який буде повертати масив жіночих імен

// 1 Оголосити масив жіночих імен
// 2 запустити цикл і в ньому перевіряти, чи існує його елемент в масиві чоловічих імен
// 3 якщо не існує, то додавати в масив жіночих імен


// let all = ['Artem', 'Anna', 'Maksim', 'Svetlana', 'David', 'Roman', 'Kate'];
// const boys = ['Artem', 'Maksim', 'David', 'Roman'];
// for (let name of all) {
//     if (!boys.includes(name)) {
//         girl.push(name)
//     }
// }
// console.log(girl);

// ---------------------------------------------------------------------------------------------------

// 1 Запустити цикл for-of і в ньому перебирати імена All
// 2 Перевіряти за допомогою indexOf, чи включає масив чоловічих імя з цьклу
// 3 Якщо включає, видаляємо його з масиву all

// Дод.умови:
// 1. Не виористовувати інклудс
// 2. Мутувати стартовий масив

// let all = ['Artem', 'Anna', 'Maksim', 'Svetlana', 'David', 'Roman', 'Kate'];
// const boys = ['Artem', 'Maksim', 'David', 'Roman'];

// for (let i = all.length - 1; i >= 0; i -= 1) {
//     if (boys.indexOf(all[i]) !== -1) {
//         all.splice(i, 1)
//     }
// }

// for (let i = 0; i < all.length; i += 1) {
//     if (~boys.indexOf(all[i])) {
//         all.splice(i, 1)
//         i -= 1;
//     }
// }

// console.log(all)

// ---------------------------------------------------------------------------------------------------

// let a = -1
// const b = ~a;
// console.log(!!b);
// const c = -(a + 1)
// console.log(!!c);

// ---------------------------------------------------------------------------------------------------

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// const arr = ["Alex", "Jacob", "Mark", "Max"];
// switch (arr.length) {
//     case 0:
//         console.log('no one likes this');
//         break;
//     case 1:
//         console.log(`${arr[0]} like this`);
//         break;
//     case 2:
//         console.log(`${arr[0]} and ${arr[1]} like this`);
//         break;
//     case 3:
//         console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`);
//         break;
//     default:
//         console.log(`${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`);
// }

// ---------------------------------------------------------------------------------------------------

// Потрібно мутувати масив так що залишились тільки імена.
// let names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];
//     for (let i = 0; i < names.length; i += 1) {
//         if (typeof names[i] !== "string") {
//             names.splice(i, 1)
//         }
//     }
// console.log(names)

// ---------------------------------------------------------------------------------------------------

// Потрібно створити функцію яка буде виводити стрінгу з даними про користувача
// Hello my name Andrew I am 26 years old

// const users = [
//     ['Andrew', 26],
//     ['Vlad', 20],
//     ['Anton', 37]
// ]
// function fn(arrgs) {
//     for (let arg of arrgs) {
//         console.log(`Hello my name ${arg[0]} I am ${arg[1]} years old`)
//     }
// }
// fn(users)

// ---------------------------------------------------------------------------------------------------

// // створити функцію яка буде здатна прийняти різну к-ть аргументів перевірити чи вони являються числовим
// значенням і ті які являються числовими значеннями просумувати їх.Функція повинна поернути сумму моїхчисел
// addOverNum(15, 32, 6, 13, 19, 8)
// addOverNum(20, 74, 11, 62, 46, 12, 36)
// addOverNum(15, 'boo', 6, true, 19, 8)

// function fn() {
//     let summ = 0;
//     elems = Array.from(arguments)
//     for (let elem of elems) {
//         if (typeof elem === "number") {
//             summ += elem;
//         }
//     }
//     return summ;
// }
// console.log(fn(15, 'boo', 6, true, 19, 8))

// ---------------------------------------------------------------------------------------------------

// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на
// декілька масивів
// console.log(boo(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(boo(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// function boo(data, count) {
//     let i = 0;
//     const result = [];
//     while (i <= data.length) {
//         if (count === data.length) {
//             result.push(data);
//             break;
//         }
//         result.push(data.slice(i, i + count));
//         i += count;
//     }
//     return result;
// }
// console.log(boo([1, 2, 3, 4, 5, 6, 7], 8))

// ---------------------------------------------------------------------------------------------------

// Напишіть функцію, яка заповнює новий масив заданим значенням.

// fill(3,'a') // ['a', 'a', 'a']

// function fn(count, elem) {
//     const resoult = [];
//     for (let i = 0; i < count; i++) {
//         resoult.push(elem)
//     }
//     return resoult;
// }
// console.log(fn(3,'a'))

// ---------------------------------------------------------------------------------------------------

// Створити функцію яка буде порівнювати 2 масива, якщо вони однакові то повертати true, якщо ні то false

// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];

// function fn(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i += 1) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(fn(arr1, arr3))

// ---------------------------------------------------------------------------------------------------
