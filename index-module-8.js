const instruments = [{
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 150
}, {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
    name: 'Перфоратор',
    price: 3000
}, {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
    name: 'Рівень',
    price: 2000
}, {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 175
}];

let items = [];
const wrapp = document.querySelector('.wrapper');

document.querySelector('.fav').addEventListener('click', () => {
    if (localStorage.getItem('itemsInFav')) {
        elemGen(Array.from(JSON.parse(localStorage.getItem('itemsInFav'))));
    } else {
        wrapp.innerHTML = 'НЕМАЄ ОБРАНОГО!';
    };
});

document.querySelector('.basket').addEventListener('click', () => {
    if (localStorage.getItem('itemsBuy')) {
        const currentBask = Array.from(JSON.parse(localStorage.getItem('itemsBuy')))
        elemGen(currentBask);
        wrapp.insertAdjacentHTML("beforeend", `Сума ${currentBask.reduce((acc, el) => {
            return acc += el.price;
        }, 0)} кредитів`);
    } else {
       wrapp.innerHTML = 'КОРЗИНА ПОРОЖНЯ!';
    };
});

const form = document.addEventListener('submit', (event) => {
    const addPlace = document.querySelector(".wrapper");
    event.preventDefault();
    const itemName = event.target[0].value;
    event.target[0].value = ''
    items = instruments.filter((elem) => elem.name.toLowerCase() === itemName.toLowerCase())
    elemGen(items);

    addPlace.addEventListener("click", (event) => {
        const id = Number(event.target.parentNode.id);
        const currentElem = instruments.find(elem => elem.id === id && event.target.classList.contains('buy'));
        if (currentElem) {
            if (localStorage.getItem('itemsBuy')) {
                const variable = Array.from(JSON.parse(localStorage.getItem('itemsBuy')));
                if (!variable.some((el) => el.id === id)) {
                    variable.push(currentElem);
                    localStorage.setItem('itemsBuy', JSON.stringify(variable));
                };
            } else {
                const start = [];
                start.push(currentElem);
                localStorage.setItem('itemsBuy', JSON.stringify(start));
            };
        };
    });

    addPlace.addEventListener("click", (event) => {
        const id = Number(event.target.parentNode.id);
        const currentElem = instruments.find(elem => elem.id === id && event.target.classList.contains('tofavorite'));
        if (currentElem) {
            if (localStorage.getItem('itemsInFav')) {
                const variable = Array.from(JSON.parse(localStorage.getItem('itemsInFav')));
                if (!variable.some((el) => el.id === id)) {
                    variable.push(currentElem);
                    localStorage.setItem('itemsInFav', JSON.stringify(variable));
                };
            } else {
                const start = [];
                start.push(currentElem);
                localStorage.setItem('itemsInFav', JSON.stringify(start));
            };
        };
    });
});

function elemGen(instruments) {
    wrapp.innerHTML = '';
    const gen = instruments.reduce((acc, {id, img, name, price}) => {
        return acc +=
            `<div class="card" id="${id}">
                <img src="${img}" width="200">
                <div class="foot">
                    <p class="name">${name}</p>
                    <p class="price">${price} кредитів</p>
                </div>
                <button class="buy">Купити</button>
                <button class="tofavorite">Додати в обрані</button>
            </div>`
    }, ``);
    wrapp.insertAdjacentHTML("beforeend", gen);
};