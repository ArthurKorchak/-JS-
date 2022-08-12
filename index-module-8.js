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
const content = document.querySelector('.content');

elemGen(instruments);

document.querySelector('.goods').addEventListener ('click', () => {
    elemGen(instruments);
});

document.querySelector('.fav').addEventListener('click', () => {
    if (localStorage.getItem('itemsFavorite')) {
        const currentFavoritr = Array.from(JSON.parse(localStorage.getItem('itemsFavorite')));
        elemGen(currentFavoritr);
        content.insertAdjacentHTML("afterbegin", `<div class="contentHead">
            <p>Товарів обрано: ${currentFavoritr.length}</p>
            <button class="favoreClear">🗑️ Очистити обране</button>
        </div>`);
        cleaner((document.querySelector('.favoreClear')), 'Favorite', 'НЕМАЄ ОБРАНОГО!')
    } else {
        content.innerHTML = 'НЕМАЄ ОБРАНОГО!';
    };
});

document.querySelector('.basket').addEventListener('click', () => {
    if (localStorage.getItem('itemsBasket')) {
        const currentBask = Array.from(JSON.parse(localStorage.getItem('itemsBasket')));
        elemGen(currentBask);
        content.insertAdjacentHTML("afterbegin", `<div class="contentHead">
            <p>Товарів у корзині: ${currentBask.length}</p>
            <p>Загальна вартість: ${currentBask.reduce((acc, el) => { return acc += el.price; }, 0)} credit</p>
            <button class="buy">✔️ Замовити</button>
            <button class="basketClear">🗑️ Очистити корзину</button>
        </div>`);
        cleaner((document.querySelector('.basketClear')), 'Basket', 'КОРЗИНА ПОРОЖНЯ!');
        document.querySelector('.buy').addEventListener('click', () => {
            console.log(currentBask);
            localStorage.setItem(`itemsBasket`, []);
            document.querySelector('.content').innerHTML = '✔️ Обробка замовлення';
        });
    } else {
       content.innerHTML = 'КОРЗИНА ПОРОЖНЯ!';
    };
});

document.addEventListener('submit', (event) => {
    event.preventDefault();
    const itemName = event.target[0].value;
    event.target[0].value = '';
    elemGen(instruments.filter((elem) => itemName && elem.name.toLowerCase().includes(itemName.toLowerCase())));
});

operator('Favorite');
operator('Basket');

function operator(param) {
    content.addEventListener("click", (event) => {
    const id = Number(event.target.parentNode.id);
    const currentElem = instruments.find(elem => elem.id === id && event.target.classList.contains(`to${param}`));
        if (currentElem) {
            if (localStorage.getItem(`items${param}`)) {
                const variable = Array.from(JSON.parse(localStorage.getItem(`items${param}`)));
                if (!variable.some((el) => el.id === id)) {
                    variable.push(currentElem);
                    localStorage.setItem(`items${param}`, JSON.stringify(variable));
                };
            } else {
                const start = [];
                start.push(currentElem);
                localStorage.setItem(`items${param}`, JSON.stringify(start));
            };
        };
    });
};

function cleaner(place, data, mass) {
    place.addEventListener('click', () => {
        localStorage.setItem(`items${data}`, []);
        document.querySelector('.content').innerHTML = `${mass}`;
    });
};

function elemGen(instruments) {
    const gen = instruments.reduce((acc, {id, img, name, price}) => {
        return acc +=
            `<div class="card" id="${id}">
                <img src="${img}" width="200">
                <div class="foot">
                    <p class="name">${name}</p>
                    <p class="price">${price} credit</p>
                </div>
                <button class="toBasket">Купити</button>
                <button class="toFavorite">Додати в обрані</button>
            </div>`
    }, ``);
    content.innerHTML = `<div class="wrapper">${gen}</div>`;
};