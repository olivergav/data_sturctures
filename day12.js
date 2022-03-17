const games = [{
    title: "Wiedzmin 3",
    studio: "CD Projekt",
    year: "2015",
    genre: ['RPG', 'Fantasy', 'Sandbox', 'Adventure', 'Action'],
    platforms: ['PC', 'PS', 'Xbox', 'NintendoSwitch']
},
{
    title: "GTA V",
    studio: "Rockstar Games",
    year: "2013",
    genre: ['Action', 'Brutal', 'Sandbox', 'Driving', 'Shooting'],
    platforms: ['PC', 'PS', 'Xbox']
},
{
    title: "League of Legends",
    studio: "Riot Games",
    year: "2009",
    genre: ['Action', 'Fantasy', 'Online'],
    platforms: ['PC']
},
{
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    year: "2022",
    genre: ['RPG', 'Action', 'Science fiction', 'Postapo', 'Adventure'],
    platforms: ['PS']
},
{
    title: "Euro Truck Simulator 2",
    studio: "SCS Software",
    year: "2012",
    genre: ['Driving', 'Economic', 'Simulation', 'Cooperation'],
    platforms: ['PC']
},
{
    title: "God of War",
    studio: "Sony Interactive Entertainment",
    year: "2018",
    genre: ['Action', 'RPG', 'Fantasy', 'Brutal'],
    platforms: ['PC', 'PS']
},
{
    title: "STALKER: Shadow of Chernobyl",
    studio: "GSC Game World",
    year: "2007",
    genre: ['Action', 'Shooting', 'Horror', 'Postapo'],
    platforms: ['PC']
},
{
    title: "The Sims 4",
    studio: "Electronic Arts",
    year: "2014",
    genre: ['Simulation', 'Economic', 'Buliding'],
    platforms: ['PC', 'PS', 'Xbox']
},
{
    title: "Dark Souls 3",
    studio: "FromSoftware",
    year: "2016",
    genre: ['Action', 'Brutal', 'Fantasy', 'Cooperation'],
    platforms: ['PC', 'PS', 'Xbox']
},
{
    title: "Cyberpunk 2077",
    studio: "CD Project",
    year: "2020",
    genre: ['RPG', 'Science fiction', 'Postapo', 'Action', 'Shooting'],
    platforms: ['PC', 'PS', 'Xbox', ]
},
]

// 1. Wyświetl tytuły gier stworzone przez studia, których nazwy zaczynają się na litrę "G".
// 2. Wyświetl tytuły gier, które zostały stworzone na conajmniej 2 różne platformy.
// 3. Wyświetl tytuły, które nie są z gatunku "RPG" i powstały po 2015 roku.

const result = games.filter(game => game.studio.startsWith('G')).map(game => [game.title, game.studio].join(', '));
// console.log(result);

const result2 = games.filter(game => game.platforms.length >= 2).map(game => [game.title, game.studio].join(', '));
// console.log(result2);

const restult3 = games.filter(game => !game.genre.includes('RPG') && game.year > 2015).map(game => [game.title, game.studio].join(', '))
// console.log(restult3);


