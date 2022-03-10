const data = [
	{
		'brand': 'bmw',
		'country': 'germany',
		'year': 1993,
		'colorway': ['black', 'red', 'grey']
	},
	{
		'brand': 'ford',
		'country': 'america',
		'year': 2015,
		'colorway': ['blue', 'black', 'carbon']
	},
	{
		'brand': 'honda',
		'country': 'japan',
		'year': 1994,
		'colorway': ['blue', 'gold', 'black']
	},
	{
		'brand': 'porsche',
		'country': 'germany',
		'year': 2018,
		'colorway': ['black', 'carbon', 'white']
	},
	{
		'brand': 'toyota',
		'country': 'japan',
		'year': 1999,
		'colorway': ['yellow', 'carbon', 'black']
	},
	{
		'brand': 'skoda',
		'country': 'czech_republic',
		'year': 2010,
		'colorway': ['grey', 'blue', 'black']
	},
	{
		'brand': 'peugeot',
		'country': 'france',
		'year': 2000,
		'colorway': ['green', 'red', 'yellow']
	},
	{
		'brand': 'ferrari',
		'country': 'italia',
		'year': 2006,
		'colorway': ['red', 'black', 'carbon']
	},
	{
		'brand': 'chevrolet',
		'country': 'america',
		'year': 2003,
		'colorway': ['white', 'yellow', 'black']
	},
	{
		'brand': 'audi',
		'country': 'germany',
		'year': 1999,
		'colorway': ['red', 'red', 'black']
	}
]

// 1. Return list of [(brand and year)] of cars from japan
// 2. Return a list of cars(brands) that have red in them
// 3. Return a set of cars (brand, country) that prod_year is after 2001 and have something carbon in it


const result = data.filter(item => item.country === 'japan').map(item => [item.brand, item.year].join(', '));
console.log(result);

const result2 = data.filter(item => item.colorway.includes('red')).map(item => item.brand);
console.log(result2)

// && AND
// || OR
const result3 = new Set(data.filter(item => item.year > 2001 && item.colorway.includes('carbon')).map(item => [item.brand, item.country].join(', ')))
console.log(result3)