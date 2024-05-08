
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

//viznachennya masivu
let itemsArray = ['', '', '', '']
//vivedennya masivu v consol
console.log(itemsArray)
//vivedennya elementiv masivu v consol
for (let i = 0; i < itemsArray.length; i++) {
    console.log(itemsArray[i])
}