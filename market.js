
//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');
// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");






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
console.log(itemsArray)

//Перевірка існування знайденого блоку
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

/*.forEach((item, index) =>{
    //Виводимо на веб сторінку елемент масиву в блок з класом іtеm
    itemsDiv.innerHTML +=

    <div class= "item">
<h2>Вчитель№ ${index + 1} з ${itemsArray.length}</h2>
<p>${item.firstName} ${item.lastName}</p>
<p>Предмет: ${item.subject}</p>
<p><img src= "${item.photo}" class="item-image"></p>
<p><a href = "${item.url}" target="_blank" class=
"bonus price ">Профіль</a></p>

</div>
})*/