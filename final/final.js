
//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');
// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");

let itemsArray = [
    {
        "23b_bvo@liceum.ztu.edu.ua": {
            email: "23b_bvo@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Башинська Вікторія",
            project: "Dudi 3",
            github_project: "https://github.com/ViktoriaBashinska/Phaser2stGame",
            demo_project: "https://viktoriabashinska.github.io/Phaser2stGame/",
            google_drive: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
            feedback_form: "https://forms.gle/jHMQsybKdMdUHXKA7",
            github_market_project: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
            demo_market_project: "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
            market_page: "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
            final_page: "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html",
            img_author: "",
            img_game: ""
        },
        "23b_bdo@liceum.ztu.edu.ua": {
            email: "23b_bdo@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Біденко Дмитро",
            project: "виживання проти зомбаря",
            github_project: "https://github.com/dimasvoinboecvolk/Phaser2ndGame",
            demo_project: "https://dimasvoinboecvolk.github.io/Phaser2ndGame/",
            google_drive: "https://drive.google.com/drive/folders/18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-?usp=drive_link",
            feedback_form: "https://forms.gle/RDawcnD98QcHnRZw7",
            github_market_project: "https://github.com/dimasvoinboecvolk/GameMarket-bidenkko",
            demo_market_project: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/",
            market_page: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/market.html",
            final_page: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html",
            img_author: "",
            img_game: ""
        },
        "23b_bmv@liceum.ztu.edu.ua": {
            email: "23b_bmv@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Бовсуновського Максима",
            project: "дота 2",
            github_project: "https://github.com/maksbovs/Phaser2ndGame",
            demo_project: "https://maksbovs.github.io/Phaser2ndGame/",
            google_drive: "https://drive.google.com/drive/folders/1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1?usp=sharing",
            feedback_form: "https://forms.gle/G2WLe25CYPCQjowTA",
            github_market_project: "https://github.com/maksbovs/GameMarket_Bovsunoskiy",
            demo_market_project: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/",
            market_page: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/market.html",
            final_page: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html",
            img_author: "",
            img_game: ""
        },
        "23b_vvi@liceum.ztu.edu.ua": {
            email: "23b_vvi@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Волинець Владислав",
            project: "Пес Патрон на завданні",
            github_project: "https://github.com/volynets-vlad/Phaser2ndGame?authuser=0",
            demo_project: "https://volynets-vlad.github.io/Phaser2ndGame/?authuser=0",
            google_drive: "https://drive.google.com/drive/folders/1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy?usp=classroom_web&authuser=0",
            feedback_form: "https://forms.gle/5DGf6yDiZLAVGu7o9?authuser=0",
            github_market_project: "https://github.com/volynets-vlad/GameMarket_Volynets",
            demo_market_project: "https://volynets-vlad.github.io/GameMarket_Volynets/",
            market_page: "https://volynets-vlad.github.io/GameMarket_Volynets/market.html",
            final_page: "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html",
            img_author: "",
            img_game: ""
        },
        "23b_gas@liceum.ztu.edu.ua": {
            email: "23b_gas@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Галетко Артем",
            project: "",
            github_project: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
            demo_project: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
            google_drive: "https://drive.google.com/drive/folders/1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL?usp=drive_link",
            feedback_form: "https://forms.gle/cz6ZfWN7UFPUgwFC7?authuser=0",
            github_market_project: "https://github.com/Artem4ikGAletko/GameMarket_Haletko",
            demo_market_project: "https://artem4ikgaletko.github.io/GameMarket_Haletko/",
            img_author: "",
            img_game: ""
        },
        "23b_gbs@liceum.ztu.edu.ua": {
            email: "23b_gbs@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Гордійчук Богдан",
            project: "Zhytomur squad Snyok",
            github_project: "https://github.com/malintovi/Phaser2ndGame?authuser=0",
            demo_project: "https://malintovi.github.io/Phaser2ndGame/?authuser=0",
            google_drive: "https://drive.google.com/drive/folders/1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl?usp=sharing",
            feedback_form: "https://forms.gle/VaDXCem7gVuEvumQ9",
            github_market_project: "https://github.com/malintovi/GameMarket_Hordiichuk",
            demo_market_project: "https://malintovi.github.io/GameMarket_Hordiichuk/",
            market_page: "https://malintovi.github.io/GameMarket_Hordiichuk/market.html",
            final_page: "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0",
            img_author: "",
            img_game: ""
        },
        "23b_gai@liceum.ztu.edu.ua": {
            email: "23b_gai@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Гоцман Артем",
            project: "Run_Dude",
            github_project: "https://github.com/GOLDEN-ZTU/Phaser2ndGame",
            demo_project: "https://golden-ztu.github.io/Phaser2ndGame/",
            google_drive: "https://drive.google.com/drive/folders/17jcUqrZBQaD6g0UtpsljRbQN-EcUqnT2",
            feedback_form: "https://forms.gle/NTmMk1yqBNhaoXzj9",
            github_market_project: "https://github.com/GOLDEN-ZTU/GameMarket_Hotsman.git",
            demo_market_project: "https://golden-ztu.github.io/GameMarket_Hotsman/",
            market_page: "https://golden-ztu.github.io/GameMarket_Hotsman/market.html",
            final_page: "https://golden-ztu.github.io/GameMarket_Hotsman/final/final.html",
            img_author: "",
            img_game: ""
        },
        "23b_god@liceum.ztu.edu.ua": {
            email: "23b_god@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Гуменюк Олег",
            project: "",
            github_project: "https://github.com/OlegGumenuk",
            demo_project: "https://oleggumenuk.github.io/Phaser2ndGame/",
            google_drive: "https://drive.google.com/drive/folders/10tRQ_WUvgqz0yGnm0J7WduMyziVFyoE5?usp=drive_link",
            feedback_form: "https://forms.gle/iXKinscde4Cbqe6e7",
            github_market_project: "https://github.com/OlegGumenuk/GameMarket_Gumenuk",
            demo_market_project: "https://oleggumenuk.github.io/GameMarket_Gumenuk/",
            img_author: "",
            img_game: ""
        },
        "23b_dis@liceum.ztu.edu.ua": {
            email: "23b_dis@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Дєдух Ілля",
            project: "kozak_battleground",
            github_project: "https://github.com/Dyeduh/Phaser2ndGame",
            demo_project: "https://dyeduh.github.io/Phaser2ndGame/",
            google_drive: "https://drive.google.com/drive/folders/1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy?usp=classroom_web&authuser=5",
            feedback_form: "https://docs.google.com/forms/d/e/1FAIpQLSe7zr5KaMa5DfxzbKWN0Iz5FJs6ZoEX-4Vz5MB9erOUlKl0yQ/viewform?usp=sf_link&authuser=5",
            github_market_project: "https://github.com/Dyeduh/GameMarket_Dyeduh",
            demo_market_project: "https://dyeduh.github.io/GameMarket_Dyeduh/",
            market_page: "https://dyeduh.github.io/GameMarket_Dyeduh/market.html?authuser=0",
            final_page: "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0",
            img_author: "",
            img_game: ""
        },
        "23b_dao@liceum.ztu.edu.ua": {
            email: "23b_dao@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Дідківській Андрій",
            project: "Баобаб",
            github_project: "https://github.com/AndriyDidkivskij/Phaser2ndGame",
            demo_project: "https://andriydidkivskij.github.io/Phaser2ndGame/",
            google_drive: "https://drive.google.com/drive/folders/1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
            feedback_form: "https://forms.gle/WNDGSsahKLzHH7LW7",
            github_market_project: "https://github.com/AndriyDidkivskij/GameMarket_Didkivskij",
            demo_market_project: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/",
            market_page: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/market.html?authuser=0",
            final_page: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html"
,
            img_author: "",
            img_game: ""
        },
        "23b_zbv@liceum.ztu.edu.ua": {
            email: "23b_zbv@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Заєць Богдан",
            project: "",
            github_project: "https://github.com/niccer5/Phaser1stGame",
            demo_project: "https://niccer5.github.io/Phaser1stGame/",
            google_drive: "https://drive.google.com/drive/folders/1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
            feedback_form: "https://forms.gle/EcWrBsp6jhMA78Kd9",
            github_market_project: "https://github.com/niccer5/-GameMarket_Zayets",
            demo_market_project: "https://niccer5.github.io/-GameMarket_Zayets/",
            img_author: "",
            img_game: ""
        },
        "23b_kav@liceum.ztu.edu.ua": {
            email: "23b_kav@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Кравчук Андрій",
            project: "",
            github_project: "https://github.com/yawty1",
            demo_project: "https://yawty1.github.io/Phaser2ndGame1/",
            google_drive: "https://drive.google.com/drive/folders/1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea?usp=drive_link",
            feedback_form: "https://forms.gle/1n5FQ3NmUX6fWiiB6",
            github_market_project: "https://github.com/yawty1/GameMarket_Kravchuk",
            demo_market_project: "https://yawty1.github.io/GameMarket_Kravchuk/",
            img_author: "",
            img_game: ""
        },
        "23b_kmv@liceum.ztu.edu.ua": {
            email: "23b_kmv@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Кучер Максим",
            project: "Jfr",
            github_project: "https://github.com/KucherMaks/Phaser2ndGame?authuser=4&hl=ru",
            demo_project: "https://kuchermaks.github.io/Phaser2ndGame/?authuser=4&hl=ru",
            google_drive: "https://drive.google.com/drive/folders/1OGZCkFefm150MhQfef1UEbgJImuC4diT?usp=sharing",
            feedback_form: "https://forms.gle/yaJ2EMs6hNbRpTTg9",
            github_market_project: "https://github.com/KucherMaks/GameMarket_Kucher",
            demo_market_project: "https://kuchermaks.github.io/GameMarket_Kucher/",
            market_page: "https://kuchermaks.github.io/GameMarket_Kucher/market.html",
            final_page: "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html",
            img_author: "",
            img_game: ""
        },
        "23b_lkm@liceum.ztu.edu.ua": {
            email: "23b_lkm@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Лавренко Каріна",
            project: "Dudi 2",
            github_project: "https://github.com/KarinaLavrenko/Phaser2stGame?authuser=0",
            demo_project: "https://karinalavrenko.github.io/Phaser2stGame/?authuser=0",
            google_drive: "https://drive.google.com/drive/folders/1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9?usp=classroom_web&authuser=0",
            feedback_form: "https://forms.gle/XbBbwwGJ8kJ5tTya8?authuser=0",
            github_market_project: "https://github.com/KarinaLavrenko/GameMarket_Lavrenko?authuser=0",
            demo_market_project: "https://karinalavrenko.github.io/GameMarket_Lavrenko/",
            market_page: "https://karinalavrenko.github.io/GameMarket_Lavrenko/market.html?authuser=0",
            final_page: "https://karinalavrenko.github.io/GameMarket_Lavrenko/final/final.html?authuser=0",
            img_author: "",
            img_game: ""
        }
    }
]
console.log(itemsArray)


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