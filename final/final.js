
//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');
// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");






/* let itemsArray = [
    {
        firsName:"Віталій",
        lastName:"Шатківський",
        Surname:"Миколайович",
        subject:"CS",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        firsName:"Анжела",
        lastName:"Лознюк",
        Surname:"Леонідівна",
        subject:"Українська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    },
    {
        firsName:"Наталія",
        lastName:"Зинюк",
        Surname:"Миколаївна",
        subject:"Хімія та білогія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    },
    {
        firsName:"Наталія",
        lastName:"Венцель",
        Surname:"Василівна",
        subject:"Директор",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    },
    {
        firsName:"Лариса",
        lastName:"Забелло",
        Surname:"Олександрівна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    },
    {
        firsName:"Ірина",
        lastName:"Глібко",
        Surname:"Анатоліївна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
        url:"https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
    },
    {
        firsName:"Ірина",
        lastName:"Боровська-Карандюк",
        Surname:"Анатоліївна",
        subject:"Українська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    },
    {
        firsName:"Василь",
        lastName:"Бабій",
        Surname:"Дмитрович",
        subject:"Фізична культура",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },
    {
        firsName:"Тарас",
        lastName:"Савінков",
        Surname:"Євгенович",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    },
    {
        firsName:"Марія",
        lastName:"Медведєва",
        Surname:"Василівна",
        subject:"Географія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
    },
    {
        firsName:"Вікторія",
        lastName:"Нелипович",
        Surname:"Віталіївна",
        subject:"Математика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    },
    {
        firsName:"Олена",
        lastName:"Чугунова",
        Surname:"Василівна",
        subject:"Математика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/chuhunova-o-v/",
    },
    {
        firsName:"Наталія",
        lastName:"Гончарук",
        Surname:"Олександрівна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna-682x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/honcharuk-n-o/",
    },
    {
        firsName:"Діна",
        lastName:"Варганова",
        Surname:"Олександрівна",
        subject:"Англійська мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/varhanova-dina-oleksandrivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/borysyuk-o-m/",
    },
    {
        firsName:"Марія",
        lastName:"Гетманська",
        Surname:"Олександрівна",
        subject:"Психолог",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
    },
    {
        firsName:"Наталія",
        lastName:"Кучер",
        Surname:"Вікторівна",
        subject:"Фізика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
    {
        firsName:"Олена",
        lastName:"Геча",
        Surname:"Анатоіївна",
        subject:"Історія",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    },
];*/
let itemsArray = [
    {
        title: "Мотокоса 43",
        image: 'img-market/1.png',
        mono: 6,
        pb: 8,
        prise_standart: 5499,
        prise_discount: 4497,
        prise_coupon: 4395,
    },
    {
        title: "Електричний тример 110",
        image: 'https://static.dnipro-m.ua/origin/description/6566/design/m-110.jpg',
        mono: 6,
        pb: 8,
        prise_standart: 4497,
        prise_discount: 3498,
        prise_coupon: 3396,
    },
    {
        title: "Електрична газонокосарка 32",
        image: 'https://images.prom.ua/3772468812_w640_h640_gazonokosilka-elektricheskaya-dnipro-m.jpg',
        mono: 6,
        pb: 8,
        prise_standart: 4497,
        prise_discount: 3297,
        prise_coupon: 3185,
    },
    {
        title: "Акумуляторний обприскувач 12 N",
        image: 'https://hotline.ua/img/tx/449/4492289865.jpg',
        mono: 6,
        pb: 8,
        prise_standart: 2190,
        prise_discount: 1698,
        prise_coupon: 1596,
    },
]
console.log(itemsArray)

//Перевірка існування знайденого блоку
/*if (itemsDiv) {
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
}*/

/*if (itemsDiv) {
    itemsArray
    .forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <div class="item">
            <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
            <p>${item.lastName} ${item.firsName}</p>
            <p>${item.Surname} </p>
            <p>Предмет:${item.subject}</p>
            <p><img src=${item.photo}" class= "item-image"></p>
            <p><a href="${item.url}" target="_blank" class="bonus price">Профіль</a></p>
        </div>
        `;
    });}*/
if (itemsDiv) {
    itemsArray
        .forEach((item, index) => {
            itemsDiv.innerHTML +=
            `
            <!==Блок окремого товару-->
            <div class="item">

                <div class="item-title">${item.title}</div>

                <!--Блок зображення товару-->
                <div class="item-image">
                    <img src="${item.image}" class="item-image"
                </div>
    
                <!--Блок з оплатою частинами-->
                <div class="parts-pay">
                    <div><img scr="img-market/mono-lapka.png" alt="">${item.mono}</div>
                    <div><img src="img-market/pb.jpg" alt="">${item.pd}</div>
                </div>

                <!--Блок ціни-->
                <div class="prise">
                    <div><span>${item.prise_standart}</span><sup>грн</sup><div>
                    <div><span>${item.prise_discount}</span><sup>грн</sup><div>
                </div>
    
                <!--Блок бонусної ціни -->
                <div class="prise bonus">
                    <div>ціна за купоном</div>
                    <div><span>${item.prise_coupon}</span><sup>грн</sup></div>
                </div>
            </div>
            `
        })
} else {
    console.log('Блок товарів не знайдено')
}