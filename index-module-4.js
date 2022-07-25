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

// function printer(values) {
//   values.forEach(element => console.log(`Name ${element.name}, age ${element.age})`));
// }
// function fn(users, callback) {
//   const values = Object.values(users);
//   callback(values);
// }
// fn(users, printer);


// const printer = values => values.forEach(element => console.log(`Name ${element.name}, age ${element.age}`));
// const fn = (users, callback) => { values = Object.values(users); callback(values);}
// fn(users, printer);

// ---------------------------------------------------------------------------------------------------

// Створити функцію яка приймає марку авто і колбек функцію для пошуку авто, функція повертає в консоль кількість
// знайдених авто, марку авто, модель і вартість авто
// Кількість знайдених автомобілів 2:
// 1. Honda Accord, ціна 20000
// 2. Honda Civic, ціна 12000
// Колбек функцію приймає марку авто в і шукає в обєкті cars, повертає масив айдішніків

// 1. Створити функцію для вводу моделі та виклику колбек-функції, у ній же будемо
//    виводити данні в консоль;
// 2. Створити колбек-функцію у якій буде формуватись масив айді при пошуку;
// 3. Передати масив айді у функцію вищого порядку і виконати консольні операції виводу.

// const cars = {
//     id1: {
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000
//     },
//     id2: {
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//     },
//     id3: {
//         car: 'BMW',
//         type: '5 siries',
//         price: null,
//     },
//     id4: {
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//     },
//     id5: {
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//     },
// }

// function fn(carModel, callback) {
//   const result = callback(carModel)
//   console.log(`Кількість знайдених автомобілів ${result.length}:`);
//   result.forEach((id, idx) => console.log(`${idx+1}. ${carModel} ${cars[id].type}, ціна ${cars[id].price}`));
// }

// function fnSearcher(carModel) {
//   const ids = [];
//   Object.keys(cars).forEach(brand => carModel === cars[brand].car ? ids.push(brand) : null);
//   return ids;
// }

// fn("Honda", fnSearcher);

// ---------------------------------------------------------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//         .filter(user => user.gender === gender)
//         .reduce((acc, user) => { return acc + user.balance }, 0)
// };

// console.log(getTotalBalanceByGender(users, 'male'))

// ---------------------------------------------------------------------------------------------------

