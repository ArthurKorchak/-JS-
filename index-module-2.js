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
// for (let i = 0; i < names.length; i += 1) {
//         if (typeof names[i] !== "string")
//             names.splice(i, 1)
//     }
// console.log(names)