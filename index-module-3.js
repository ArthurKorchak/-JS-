// Створити один об'єкт, у якому будуть усі зачення ключів семи об'єкктів записані в масивах.

// const users = [
//     {
//       id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       id: "249b6175-5c30-44c6-b154-f120923736f5",
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       id: "e1bf46ab-7168-491e-925e-f01e21394812",
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
// ];
  
// const keys = Object.keys(users[0]);
// const result = {};
// for (const key of keys) {
//   result[key] = [];
//   for (const user of users) {
//     result[key].push(user[key])
//   }
// }
// console.log(result)

// ---------------------------------------------------------------------------------------------------

// Створити метод об"єкта який примаэ 1 параметр - назву факультету й рахувати загальну к-ть очок на
// факультеті

// const hogvarts = {
//   griffindor: [{
//       name: "Harry",
//       points: 15
//     },
//     {
//       name: "Hermiona",
//       points: 16
//     },
//     {
//       name: "Ron",
//       points: 14
//     },
//   ],
//   sliserin: [{
//       name: "Draco",
//       points: 25
//     },
//     {
//       name: "Goyl",
//       points: 40
//     },
//     {
//       name: "Crabbe",
//       points: 5
//     },
//   ],

//   getTotalPoints(facult) {
//     let counter = 0;
//       for (let i = 0; i < this[facult].length; i++) {
//         counter += this[facult][i].points;
//     }
//     return counter;
//   }
// }
// console.log(hogvarts.getTotalPoints("sliserin"))

// ---------------------------------------------------------------------------------------------------

// Порахувати скільки ззаробив кожен  юзер
// (функція приймає 2 параметри
// 1 параметр масив
// 2 параметр  імя робітника
// Функція повертає скільки він заробив (salary*month) )

// Порахувати загальну суму заробітку всіх робітників()
// (функція приймає 1 параметр масив, і повертає загалну суму заробітку всіх робітників);

// const workers = [{
//         name: 'Alex',
//         salary: 3500,
//         month: 12,
//     },
//     {
//         name: 'Dima',
//         salary: 2500,
//         month: 9,
//     },
//     {
//         name: 'Oleg',
//         salary: 1500,
//         month: 36,
//   },
// ];

// function getWorcerSalary(workers, user) {
//   let salary = 0;
//   for (const worker of workers) {
//     if (worker.name === user) {
//       salary = worker.salary * worker.month;
//       return salary;
//     }
//   }
// }

// function getAllWorcerSalary(workers) {
//   let salary = 0;
//   for (const worker of workers) {
//     salary += worker.salary * worker.month;
//   }
//   return salary;
// }

// console.log(getAllWorcerSalary(workers))

// ---------------------------------------------------------------------------------------------------

// Потрібно порахувати вік всіх юзерів

// Потрібно створити функцію яка буде приймати 2 параметри
// 1 параметр масив
// 2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//   { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]

// function fn(friends) {
//   let counter = 0;
//   for (const friend of friends) {
//     if (typeof friend.age === 'number') {
//       counter += friend.age;
//     }
//   }
//   return counter;
// }

// function fnUserBook(friends, bookName) {
//   const users = [];
//   for (const friend of friends) {
//     if (friend.books.includes(bookName)) {
//       users.push(friend.name)
//     }
//   }
//   toString(users)
//   return users.join(', ');
// }

// console.log(fnUserBook(friends, "Harry Potter"))

// ---------------------------------------------------------------------------------------------------

// Створити функцію яка приймає 1 параметр і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно
// сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати даний масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 15,
// }, {
//     id: 'sku2',
//     qty: 21,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]


// 1. Запустити цикл фор оф
// 2. В циклі запустити ще один цикл фор оф
// 3. При збігу виконувати сумування і видалення

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]

// function fn(products) {
//   for (let i = 0; i < products.length; i++) {
//     for (let j = i + 1; j < products.length; j++) {
//       if (products[i].id === products[j].id) {
//         products[i].qty += products[j].qty;
//         products.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
//   return products;
// }

// console.log(fn(products))

// ---------------------------------------------------------------------------------------------------

// Створити функцію яка буде повертати обєкт
//  {
//    a:5
//    s:7
//  }

// const str = 'sasftsaddghfuaaasdda'

// function fn(str) {
//   const symbols = str.split('');
//   const result = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!Object.keys(result).includes(str[i])) {
//       result[str[i]] = 1;
//     } else {
//       result[str[i]] += 1;
//     }
//   }
//   return result;
// }

// console.log(fn(str))

// ---------------------------------------------------------------------------------------------------

// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//     name : '*',
//     privat : 1000,
//     mono: 1500,
    
//     getSum() {
//         const cardName = prompt();
//         if (!cardName) {
//             return 'Хибне введення';
//         } else if (this[cardName]) {
//             return this[cardName];
//         } else {
//             return 'Карта неіснує';
//         }
//     },

//     addCard() {
//         const cardName = prompt();
//         if (!cardName) {
//             return 'Хибне введення';
//         } else if (this[cardName]) {
//             return 'Карта вже існує';
//         } else {
//             this[cardName] = 0;
//         }
//     },

//     getMoney() {
//         const cardName = prompt();
//         const sum = Number(prompt());
//         if (!cardName) {
//             return 'Хибне введення';
//         } else if (sum > this[cardName]) {
//             return 'Недостатньо коштів';
//         } else if (this[cardName]) {
//             this[cardName] -= sum;
//         } else {
//             return 'Карта неіснує';
//         }
//     },

//     addMoney() {
//         const cardName = prompt();
//         const sum = Number(prompt());
//         if (!cardName) {
//             return 'Хибне введення';
//         } else if (this[cardName]) {
//             this[cardName] += sum;
//         } else {
//             return 'Карта неіснує';
//         }
//     },
// }

// console.log(bankSystem.addMoney())

// ---------------------------------------------------------------------------------------------------

// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
//not found

// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: ['Ivan']
//     },
//     {
//         name: 'Eva',
//         know: ['Jhon', 'Ivan']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// //Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];
// // jhon
// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// //Not found
// const people4 = [{
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
// },
// {
//     name: 'Jhon',
//     know: []
// },
// {
//     name: 'Eva',
//     know: ['Alex']
// },
// {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex']
// },
// ];

// function fn(peaples) {
//     let count = 0;
//     let target = `Нарциса не знайдено`;
//     for (const people of peaples) {
//         if (people.know.length === 0) {
//             count += 1;
//             let counter = 0;
//             for (const pep of peaples) {
//                 if (pep.know.includes(people.name)) {
//                     counter += 1;
//                 }
//             }
//             if (count > 1) {
//                 return `Нарциса не знайдено`
//             }
//             if (counter === (peaples.length - 1)) {
//                 target = `Нарцисом є ${people.name}`
//             }
//         }
//     }
//     return target;
// }

// console.log(fn(people4));

// ---------------------------------------------------------------------------------------------------

// потрібно створити функцію я буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// turn([12,3,5,6,2,15,7],2);
// { 1 : 29, 2 : 21}

// function fn(buyers, cases) {
//     const cas = [];
//     for (let i = 0; i < cases; i++) {
//         cas.push(0);
//     }
//     for (let j = 0; j < buyers.length; j++) {
//         let count = 0;
//         for (let i = 0; i < cas.length; i++) {
//             if (cas[i] < cas[i-1]) {
//                 count = i;
//             }
//         }
//         cas[count] += buyers[j];  
//     }
//     const a = {};
//     for (let i = 0; i < cas.length; i++) {
//         a[i + 1] = cas[i];
//     }
//     return a;
// }

// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2))

// ---------------------------------------------------------------------------------------------------
