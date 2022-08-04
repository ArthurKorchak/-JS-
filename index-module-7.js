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
}];

elemGen(instruments);

window.addEventListener("click", (event) => {
    const id = Number(event.target.parentNode.id);
    const currentElem = instruments.find(elem => elem.id === id);
    console.log(currentElem);
    console.log(currentElem.name);
    console.log(currentElem.price);
});

function elemGen(instruments) {
    const addPlace = document.querySelector("body");
    const gen = instruments.reduce((acc, {id, img, name, price}) => {
        return acc += 
            `<div class="card" id="${id}">
                <img src="${img}" width="250"></img>
                <div class="foot">
                    <p class="name">${name}</p>
                    <p class="price">${price} кредитів</p>
                </div>
                <button>Купити</button>
            </div>`
    }, ``);
    addPlace.insertAdjacentHTML("afterbegin", gen);
};

// --------------------------------------------------------------------------------------------------- 01
