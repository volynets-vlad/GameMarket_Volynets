
//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');
// Отримання елементу з ідентифікатором items 


let itemsArray = [
    {
        email: "23b_bvo@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Башинська Вікторія",
        project_name: "Dudi 3",
        project_github: "https://github.com/ViktoriaBashinska/Phaser2stGame",
        project_demo: "https://viktoriabashinska.github.io/Phaser2stGame/",
        project_drive: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
        project_form: "https://forms.gle/jHMQsybKdMdUHXKA7",
        gamemarket_github: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
        gamemarket_demo: "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
        gamemarket_market_page: "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
        gamemarket_final_page: "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html",
        img_author: "Башинська.jpg",
        img_game: "Башинськаgame.png"
    },
    {
        email: "23b_bdo@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Біденко Дмитро",
        project_name: "виживання проти зомбаря",
        project_github: "https://github.com/dimasvoinboecvolk/Phaser2ndGame",
        project_demo: "https://dimasvoinboecvolk.github.io/Phaser2ndGame/",
        project_drive: "https://drive.google.com/drive/folders/18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-?usp=drive_link",
        project_form: "https://forms.gle/RDawcnD98QcHnRZw7",
        gamemarket_github: "https://github.com/dimasvoinboecvolk/GameMarket-bidenkko",
        gamemarket_demo: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/",
        gamemarket_market_page: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/market.html",
        gamemarket_final_page: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html",
        img_author: "Біденко.jpg",
        img_game: "Біденкоgame.png"
    },
    {
        email: "23b_bmv@liceum.ztu.edu.ua",
        group: "10-Б 1",
        game: "Бовсуновського Максима",
        project_name: "дота 2",
        project_github: "https://github.com/maksbovs/Phaser2ndGame",
        project_demo: "https://maksbovs.github.io/Phaser2ndGame/",
        project_drive: "https://drive.google.com/drive/folders/1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1?usp=sharing",
        project_form: "https://forms.gle/G2WLe25CYPCQjowTA",
        gamemarket_github: "https://github.com/maksbovs/GameMarket_Bovsunoskiy",
        gamemarket_demo: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/",
        gamemarket_market_page: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/market.html",
        gamemarket_final_page: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html",
        img_author: "Бовсуновський.jpg",
        img_game: "Бовсуновськийgame.png"
    },
    {
        email: "23b_vvi@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Волинець Владислав",
        project_name: "Пес Патрон на завданні",
        project_github: "https://github.com/volynets-vlad/Phaser2ndGame?authuser=0",
        project_demo: "https://volynets-vlad.github.io/Phaser2ndGame/?authuser=0",
        project_drive: "https://drive.google.com/drive/folders/1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy?usp=classroom_web&authuser=0",
        project_form: "https://forms.gle/5DGf6yDiZLAVGu7o9?authuser=0",
        gamemarket_github: "https://github.com/volynets-vlad/GameMarket_Volynets",
        gamemarket_demo: "https://volynets-vlad.github.io/GameMarket_Volynets/",
        gamemarket_market_page: "https://volynets-vlad.github.io/GameMarket_Volynets/market.html",
        gamemarket_final_page: "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html",
        img_author: "Волинець.jpg",
        img_game: "Волинецьgame.png"
    },
    {
        email: "23b_gas@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Галетко Артем",
        project_name: "стрибунець",
        project_github: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        project_demo: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        project_drive: "https://drive.google.com/drive/folders/1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL?usp=drive_link",
        project_form: "https://forms.gle/cz6ZfWN7UFPUgwFC7?authuser=0",
        gamemarket_github: "https://github.com/Artem4ikGAletko/GameMarket_Haletko",
        gamemarket_demo: "https://artem4ikgaletko.github.io/GameMarket_Haletko/",
        gamemarket_market_page: "",
        gamemarket_final_page: "",
        img_author: "Галетко.jpg",
        img_game: "Галеткоgame.png"
    },
    {
        email: "23b_gbs@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Гордійчук Богдан",
        project_name: "Zhytomur squad Snyok",
        project_github: "https://github.com/malintovi/Phaser2ndGame?authuser=0",
        project_demo: "https://malintovi.github.io/Phaser2ndGame/?authuser=0",
        project_drive: "https://drive.google.com/drive/folders/1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl?usp=sharing",
        project_form: "https://forms.gle/VaDXCem7gVuEvumQ9",
        gamemarket_github: "https://github.com/malintovi/GameMarket_Hordiichuk",
        gamemarket_demo: "https://malintovi.github.io/GameMarket_Hordiichuk/",
        gamemarket_market_page: "https://malintovi.github.io/GameMarket_Hordiichuk/market.html",
        gamemarket_final_page: "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0",
        img_author: "Гордійчук.jpg",
        img_game: "Гордійчукgame.png"
    },
    {
        email: "23b_gai@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Гоцман Артем",
        project_name: "Run_Dude",
        project_github: "https://github.com/GOLDEN-ZTU/Phaser2ndGame",
        project_demo: "https://golden-ztu.github.io/Phaser2ndGame/",
        project_drive: "https://drive.google.com/drive/folders/17jcUqrZBQaD6g0UtpsljRbQN-EcUqnT2",
        project_form: "https://forms.gle/NTmMk1yqBNhaoXzj9",
        gamemarket_github: "https://github.com/GOLDEN-ZTU/GameMarket_Hotsman.git",
        gamemarket_demo: "https://golden-ztu.github.io/GameMarket_Hotsman/",
        gamemarket_market_page: "https://golden-ztu.github.io/GameMarket_Hotsman/market.html",
        gamemarket_final_page: "https://golden-ztu.github.io/GameMarket_Hotsman/final/final.html",
        img_author: "Гоцман.jpg",
        img_game: "Гоцманgame.png"
    },
    {
        email: "23b_god@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Гуменюк Олег",
        project_name: "",
        project_github: "https://github.com/OlegGumenuk",
        project_demo: "https://oleggumenuk.github.io/Phaser2ndGame/",
        project_drive: "https://drive.google.com/drive/folders/10tRQ_WUvgqz0yGnm0J7WduMyziVFyoE5?usp=drive_link",
        project_form: "https://forms.gle/iXKinscde4Cbqe6e7",
        gamemarket_github: "https://github.com/OlegGumenuk/GameMarket_Gumenuk",
        gamemarket_demo: "https://oleggumenuk.github.io/GameMarket_Gumenuk/",
        gamemarket_market_page: "",
        gamemarket_final_page: "",
        img_author: "Гуменюк.jpg",
        img_game: "Гуменюкgame.png"
    },
    {
        email: "23b_dis@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Дєдух Ілля",
        project_name: "kozak_battleground",
        project_github: "https://github.com/Dyeduh/Phaser2ndGame",
        project_demo: "https://dyeduh.github.io/Phaser2ndGame/",
        project_drive: "https://drive.google.com/drive/folders/1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy?usp=classroom_web&authuser=5",
        project_form: "https://docs.google.com/forms/d/e/1FAIpQLSe7zr5KaMa5DfxzbKWN0Iz5FJs6ZoEX-4Vz5MB9erOUlKl0yQ/viewform?usp=sf_link&authuser=5",
        gamemarket_github: "https://github.com/Dyeduh/GameMarket_Dyeduh",
        gamemarket_demo: "https://dyeduh.github.io/GameMarket_Dyeduh/",
        gamemarket_market_page: "https://dyeduh.github.io/GameMarket_Dyeduh/market.html?authuser=0",
        gamemarket_final_page: "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0",
        img_author: "Дєдух.jpg",
        img_game: "Дєдухgame.png"
    },
    {
        email: "23b_dao@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Дідківській Андрій",
        project_name: "Баобаб",
        project_github: "https://github.com/AndriyDidkivskij/Phaser2ndGame",
        project_demo: "https://andriydidkivskij.github.io/Phaser2ndGame/",
        project_drive: "https://drive.google.com/drive/folders/1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
        project_form: "https://forms.gle/WNDGSsahKLzHH7LW7",
        gamemarket_github: "https://github.com/AndriyDidkivskij/GameMarket_Didkivskij",
        gamemarket_demo: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/",
        gamemarket_market_page: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/market.html?authuser=0",
        gamemarket_final_page: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html",
        img_author: "Дідківський.jpg",
        img_game: "Дідківськийgame.png"
    },
    {
        email: "23b_zbv@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Заєць Богдан",
        project_name: "",
        project_github: "https://github.com/niccer5/Phaser1stGame",
        project_demo: "https://niccer5.github.io/Phaser1stGame/",
        project_drive: "https://drive.google.com/drive/folders/1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
        project_form: "https://forms.gle/EcWrBsp6jhMA78Kd9",
        gamemarket_github: "https://github.com/niccer5/-GameMarket_Zayets",
        gamemarket_demo: "https://niccer5.github.io/-GameMarket_Zayets/",
        gamemarket_market_page: "",
        gamemarket_final_page: "",
        img_author: "Заєць.jpg",
        img_game: "Заєцьgame.png"
    },
    {
        email: "23b_kav@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Кравчук Андрій",
        project_name: "",
        project_github: "https://github.com/yawty1",
        project_demo: "https://yawty1.github.io/Phaser2ndGame1/",
        project_drive: "https://drive.google.com/drive/folders/1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea?usp=drive_link",
        project_form: "https://forms.gle/1n5FQ3NmUX6fWiiB6",
        gamemarket_github: "https://github.com/yawty1/GameMarket_Kravchuk",
        gamemarket_demo: "https://yawty1.github.io/GameMarket_Kravchuk/",
        gamemarket_market_page: "",
        gamemarket_final_page: "",
        img_author: "Кравчук.jpg",
        img_game: "Кравчукgame.png"
    },
    {
        email: "23b_kmv@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Кучер Максим",
        project_name: "Jfr",
        project_github: "https://github.com/KucherMaks/Phaser2ndGame?authuser=4&hl=ru",
        project_demo: "https://kuchermaks.github.io/Phaser2ndGame/?authuser=4&hl=ru",
        project_drive: "https://drive.google.com/drive/folders/1OGZCkFefm150MhQfef1UEbgJImuC4diT?usp=sharing",
        project_form: "https://forms.gle/yaJ2EMs6hNbRpTTg9",
        gamemarket_github: "https://github.com/KucherMaks/GameMarket_Kucher",
        gamemarket_demo: "https://kuchermaks.github.io/GameMarket_Kucher/",
        gamemarket_market_page: "https://kuchermaks.github.io/GameMarket_Kucher/market.html",
        gamemarket_final_page: "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html",
        img_author: "Кучер.jpg",
        img_game: "Кучерgame.png"
    },
    {
        email: "23b_lkm@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Лавренко Каріна",
        project_name: "Dudi 2",
        project_github: "https://github.com/KarinaLavrenko/Phaser2stGame?authuser=0",
        project_demo: "https://karinalavrenko.github.io/Phaser2stGame/?authuser=0",
        project_drive: "https://drive.google.com/drive/folders/1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9?usp=classroom_web&authuser=0",
        project_form: "https://forms.gle/XbBbwwGJ8kJ5tTya8?authuser=0",
        gamemarket_github: "https://github.com/KarinaLavrenko/GameMarket_Lavrenko?authuser=0",
        gamemarket_demo: "https://karinalavrenko.github.io/GameMarket_Lavrenko/",
        gamemarket_market_page: "https://karinalavrenko.github.io/GameMarket_Lavrenko/market.html?authuser=0",
        gamemarket_final_page: "https://karinalavrenko.github.io/GameMarket_Lavrenko/final/final.html?authuser=0",
        img_author: "Лавренко.jpg",
        img_game: "Лавренкоgame.png"
    }
];
console.log(itemsArray)

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    itemsArray.forEach(item => {
        itemsDiv.innerHTML +=
            `
        <div class="item">
            <div class="item-title">${item.project_name}</div>
            <p>${item.name} ${item.group} ${item.email}</p>
            <div class="content">
                <img src="img/${item.img_game}" alt="Game Image">
                <img src="img/${item.img_author}" alt="Author Image">
            </div>
            <div class="links">
                <a href="${item.project_github}" target="_blank">GitHub Repository</a>
                <a href="${item.project_demo}" target="_blank">GitHub Pages Game</a>
                <a href="${item.project_drive}" target="_blank">Google Drive</a>
                <a href="${item.project_form}" target="_blank">Form</a>
                <a href="${item.gamemarket_github}" target="_blank">GitHub Repository GameMarket</a>
                <a href="${item.gamemarket_demo}" target="_blank">GitHub Pages Design</a>
                <a href="${item.gamemarket_market_page}" target="_blank">Market Pages</a>
                <a href="${item.gamemarket_final_page}" target="_blank">Market Pages Final</a>
            </div>
        </div>`;
    })
}