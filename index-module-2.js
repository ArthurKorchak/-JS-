// const all = ['Artem', 'Anna', 'Maksim', 'Svetlana', 'David', 'Roman', 'Kate'];
// const boys = ['Artem', 'Maksim', 'David', 'Roman'];
// Написати код який буде повертати масив жіночих імен

// Дод.умови:
// 1. Не виористовувати інклудс
// 2. Мутувати стартовий масив

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

// 1 Запустити цикл for-of і в ньому перебирати імена All
// 2 Перевіряти за допомогою indexOf, чи включає масив чоловічих імя з цьклу
// 3 Якщо включає, видаляємо його з масиву all

// let all = ['Artem', 'Anna', 'Maksim', 'Svetlana', 'David', 'Roman', 'Kate'];
// const boys = ['Artem', 'Maksim', 'David', 'Roman'];

// // for (let i = all.length - 1; i >= 0; i -= 1) {
// //     if (boys.indexOf(all[i]) !== -1) {
// //         all.splice(i, 1)
// //     }
// // }

// for (let i = 0; i < all.length; i += 1) {
//     if (~boys.indexOf(all[i])) {
//         all.splice(i, 1)
//         i -= 1;
//     }
// }

// console.log(all)

// let a = -1
// const b = ~a;
// console.log(!!b);
// const c = -(a + 1)
// console.log(!!c);