const data = [
    {
        'name': 'Max Verstappen',
        'country': 'Netherlands',
        'wins': 20,
        'teams': ['Toro Rosso', 'Red Bull']
    },
    {
        'name': 'Lewis Hamilton',
        'country': 'United Kingdom',
        'wins': 103,
        'teams': ['Mclaren', 'Mercedes']
    },
    {
        'name': 'Valtteri Bottas',
        'country': 'Finland',
        'wins': 10,
        'teams': ['Williams', 'Mercedes']
    },
    {
        'name': 'Sergio Perez',
        'country': 'Mexico',
        'wins': 2,
        'teams': ['Sauber', 'Mclaren', 'Force India', 'Racing Point', 'Red Bull']
    },
    {
        'name': 'Carlos Sainz',
        'country': 'Spain',
        'wins': 0,
        'teams': ['Toro Rosso', 'Renault', 'Mclaren', 'Ferrari']
    },
    {
        'name': 'Lando Norris',
        'country': 'United Kingdom',
        'wins': 0,
        'teams': ['Mclaren']
    },
    {
        'name': 'Charles Leclerc',
        'country': 'Monaco',
        'wins': 2,
        'teams': ['Sauber', 'Ferrari']
    },
    {
        'name': 'Daniel Ricciardo',
        'country': 'Australia',
        'wins': 8,
        'teams': ['HRT', 'Toro Rosso', 'Red Bull', 'Renault', 'Mclaren']
    },
    {
        'name': 'Pierre Gasly',
        'country': 'France',
        'wins': 1,
        'teams': ['Toro Rosso', 'Red Bull', 'Alpha Tauri']
    },
    {
        'name': 'Fernando Alonso',
        'country': 'Spain',
        'wins': 32,
        'teams': ['Minardi', 'Renault', 'Mclaren', 'Ferrari', 'Alpine']
    },
    {
        'name': 'Esteban Ocon',
        'country': 'France',
        'wins': 1,
        'teams': ['Manor', 'Force India', 'Renault', 'Alpine']
    },
    {
        'name': 'Sebastian Vettel',
        'country': 'Germany',
        'wins': 53,
        'teams': ['BMW Sauber', 'Toro Rosso', 'Red Bull', 'Ferrari', 'Aston Martin']
    },
    {
        'name': 'Lance Stroll',
        'country': 'Canada',
        'wins': 0,
        'teams': ['Williams', 'Racing Point', 'Aston Martin']
    },
    {
        'name': 'Yuki Tsunoda',
        'country': 'Japan',
        'wins': 0,
        'teams': ['Aplha Tauri']
    },
    {
        'name': 'George Russell',
        'country': 'United Kingdom',
        'wins': 0,
        'teams': ['Williams']
    },
    {
        'name': 'Kimi Raikkonen',
        'country': 'Finland',
        'wins': 15,
        'teams': ['Sauber', 'Mclaren', 'Lotus', 'Ferrari', 'Alfa Romeo']
    },
    {
        'name': 'Nicholas Latifi',
        'country': 'Canada',
        'wins': 0,
        'teams': ['Williams']
    },
    {
        'name': 'Antonio Giovinazzi',
        'country': 'Italy',
        'wins': 0,
        'teams': ['Sauber', 'Alfa Romeo']
    },
    {
        'name': 'Mick Schumacher',
        'country': 'Germany',
        'wins': 0,
        'teams': ['Haas']
    },
    {
        'name': 'Nikita Mazepin',
        'country': 'Russia',
        'wins': 0,
        'teams': ['Haas']
    },
]

// 1. Return a list of drivers whose countries belong to the Commonwealth of Nations.
// 2. Return set of drivers that have more than 1 GP Win and have driven for Mclaren.
// 3. Return an amount of drivers that havent won any race yet and have driven only for one team.

const result = data.filter(item => item.wins >= 1 && item.teams.includes('Mclaren')).map(item => item.name)
console.log(result);

const result2 = data.filter(item => item.wins === 0 && item.teams.length === 1).length
console.log(result2);