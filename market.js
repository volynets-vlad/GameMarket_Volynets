
//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');
// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Вивід знайденого елементу 
    console.log(itemsDiv)
    for (let i = 0; i < 16; i++) {
        itemsDiv.innerHTML += '<div class = "item"></div>'
    }
} else {
    console.log('не знайдено')
}


console.log(itemsArray)

let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 ',
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 30',
    'Акумуляторний оприскувач 10 ',
    'Газонокосарка 44',
    'Електричний тример 111',
    'Електрична газонокосарка 31',
    'Акумуляторний оприскувач 13'
];


if (itemsDiv) {
    itemsArray.forEach((item, index) => {
        let itemNumber = (index + 1).toString().padStart(2, ''); 
        itemsDiv.innerHTML +=
        `
        <div class="item">
            <h2>товар №${index+1} з ${itemsArray.length}</h2>
            <p>${item}</p>
        </div>
        `;
    });
} else {
    console.log('Блок товарів не знайдено');
}