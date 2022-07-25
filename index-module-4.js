// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const mens = ['Artem', 'Maksim', 'David', 'Roman'];
// const womens = []

// users.forEach(user => !mens.includes(user) ? womens.push(user) : '');
// console.log(womens);


// users.forEach((user, index, array) => [mens.includes(user) ? array[index] = 0 : null]);
// const a = [...new Set(users)].join(' ').replace('0 ', '').split(' ');
// console.log(a);

// ---------------------------------------------------------------------------------------------------

// Відібрати набре і не є нан

// const value = ['a', 2, 4, true, 5, 6, 'b', NaN];
// const result = [];
// value.forEach(val => typeof (val) === 'number' && !isNaN(val) ? result.push(val) : null);
// console.log(result);

// ---------------------------------------------------------------------------------------------------

// Створити функцію яка приймає 2 параметри обєкт юзерів, та колбек функцію
// (колбек) функція приймає масив обєктів (кожен обєкт це окремий юзер), та виводить в консолі імя та вік кожного юзера
//  'Name David, age 25'

// const users = {
//     user: {
//         name: 'David',
//         age: 25
//     },
//     user1: {
//         name: 'Denis',
//         age: 30
//     },
//     user3: {
//         name: 'Kate',
//         age: 18
//     },
//     user4: {
//         name: 'Dima',
//         age: 40
//     },
//     user5: {
//         name: 'Kris',
//         age: 22
//     }
// };

// const printer = values => values.forEach(element => console.log(`Name ${element.name}, age ${element.age}`));
// const fn = (users, callback) => { values = Object.values(users); callback(values);}
// fn(users, printer);

// ---------------------------------------------------------------------------------------------------

