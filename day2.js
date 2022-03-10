const data = [
    {
        'name': 'apples',
        'color': 'red',
        'flavour': 'sweet and sour',
        'season': 'fall' 
    },
    {
        'name': 'apricots',
        'color': 'orange',
        'flavour': 'sweet',
        'season': 'spring'
    },
    {
        'name': 'bananas',
        'color': 'yellow',
        'flavour': 'sweet', 
        'season': 'winter'
    },
    {
        'name': 'blackberries',
        'color': 'black',
        'flavour': 'sweet',
        'season': 'summer'
    },
    {
        'name': 'blueberries',
        'color': 'blue',
        'flavour': 'very sweet',
        'season': 'summer'

    },
    {
        'name': 'grapefruit',
        'color': 'red',
        'flavour': 'sour',
        'season': 'winter'
    },
    {
        'name': 'strawberries',
        'color': 'red',
        'flavour': 'sweet',
        'season': 'spring'
    },
    {
        'name': 'oranges',
        'color': 'orange',
        'flavour': 'sweet and sour',
        'season': 'winter'
    },
    {
        'name': 'avocado',
        'color': 'green',
        'flavour': 'sweet',
        'season': 'winter'
    },
    {
        'name': 'mangoes',
        'color': 'yellow/red',
        'flavour': 'very sweet',
        'season': 'fall'
    },
    {
        'name': 'grapes',
        'color': 'red',
        'flavour': 'very sweet',
        'season': 'fall'
    },
    {
        'name': 'plums',
        'color': 'violet',
        'flavour': 'sweet',
        'season': 'summer'
    }
]

// And the tasks are:
// - find amount of fruits that are of a sour flavour
// - print a list of summer season fruits 
// - print list of spring season fruits that are sweet 
// i think I've gone easy on You (and myself)

const result1 = data.filter(item => item.flavour.includes('sour')).length;
console.log(result1);

const result2 = data.filter(item => item.season === 'summer').map(item => item.name).flat()
console.log(result2);

const result3 = data.filter(item => item.season === 'spring' && item.flavour.includes('sweet')).map(item => item.name).flat(1);
console.log(result3);