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

const wrapp = document.querySelector('.wrapper');

document.querySelector('.goods').addEventListener ('click', () => {
    elemGen(instruments)
});

document.querySelector('.fav').addEventListener('click', () => {
    if (localStorage.getItem('itemsFavorite')) {
        elemGen(Array.from(JSON.parse(localStorage.getItem('itemsFavorite'))));
    } else {
        wrapp.innerHTML = 'НЕМАЄ ОБРАНОГО!';
    };
});

document.querySelector('.basket').addEventListener('click', () => {
    if (localStorage.getItem('itemsBasket')) {
        const currentBask = Array.from(JSON.parse(localStorage.getItem('itemsBasket')))
        elemGen(currentBask);
        wrapp.insertAdjacentHTML("beforeend", `Сума ${currentBask.reduce((acc, el) => {
            return acc += el.price;
        }, 0)} &curren`);
    } else {
       wrapp.innerHTML = 'КОРЗИНА ПОРОЖНЯ!';
    };
});

document.addEventListener('submit', (event) => {
    event.preventDefault();
    const itemName = event.target[0].value;
    event.target[0].value = '';
    elemGen(instruments.filter((elem) => itemName && elem.name.toLowerCase().includes(itemName.toLowerCase())));
});

wrapp.addEventListener("click", (event) => {
    const id = Number(event.target.parentNode.id);
    const currentElem = instruments.find(elem => elem.id === id && event.target.classList.contains('toBasket'));
    if (currentElem) {
        if (localStorage.getItem('itemsBasket')) {
            const variable = Array.from(JSON.parse(localStorage.getItem('itemsBasket')));
            if (!variable.some((el) => el.id === id)) {
                variable.push(currentElem);
                localStorage.setItem('itemsBasket', JSON.stringify(variable));
            };
        } else {
            const start = [];
            start.push(currentElem);
            localStorage.setItem('itemsBasket', JSON.stringify(start));
        };
    };
});

wrapp.addEventListener("click", (event) => {
    const id = Number(event.target.parentNode.id);
    const currentElem = instruments.find(elem => elem.id === id && event.target.classList.contains('toFavorite'));
    if (currentElem) {
        if (localStorage.getItem('itemsFavorite')) {
            const variable = Array.from(JSON.parse(localStorage.getItem('itemsFavorite')));
            if (!variable.some((el) => el.id === id)) {
                variable.push(currentElem);
                localStorage.setItem('itemsFavorite', JSON.stringify(variable));
            };
        } else {
            const start = [];
            start.push(currentElem);
            localStorage.setItem('itemsFavorite', JSON.stringify(start));
        };
    };
});

function elemGen(instruments) {
    const gen = instruments.reduce((acc, {id, img, name, price}) => {
        return acc +=
            `<div class="card" id="${id}">
                <img src="${img}" width="200">
                <div class="foot">
                    <p class="name">${name}</p>
                    <p class="price">${price} &curren;</p>
                </div>
                <button class="toBasket">Купити</button>
                <button class="toFavorite">Додати в обрані</button>
            </div>`
    }, ``);
    wrapp.innerHTML = gen;
};