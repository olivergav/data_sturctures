const data = [
    {
        'name': 'pencil',
        'color': ['grey', 'yellow'],
        'price': 1.99,
        'quantity': 1000
    },
    {
        'name': 'pen',
        'color': ['blue', 'black', 'red'],
        'price': 3.50,
        'quantity': 1200
    },
    {
        'name': 'notebook',
        'color': ['white', 'green', 'red', 'orange'],
        'price': 3.99,
        'quantity': 500
    },
    {
        'name': 'colored paper',
        'color': ['red', 'yellow', 'black', 'orange', 'pink', 'grey', 'blue', 'green'],
        'price': 3.20,
        'quantity': 100
    },
    {
        'name': 'scissors',
        'color': ['grey', 'yellow', 'red'],
        'price': 5.99,
        'quantity': 50
    },
    {
        'name': 'glue',
        'color': ['white', 'green', 'yellow'],
        'price': 4.20,
        'quantity': 80
    },
    {
        'name': 'blotting paper',
        'color': ['grey', 'yellow', 'red', 'pink', 'white', 'black', 'green'],
        'price': 7.00,
        'quantity': 60
    },
    {
        'name': 'stickers',
        'color': ['grey', 'yellow', 'red', 'green', 'pink', 'orange'],
        'price': 2.50,
        'quantity': 60
    },
    {
        'name': 'binder',
        'color': ['red', 'pink', 'blue'],
        'price': 8.00,
        'quantity': 70
    },
    {
        'name': 'crayons',
        'color': ['grey', 'yellow', 'black', 'orange', 'green', 'red', 'blue'],
        'price': 6.30,
        'quantity': 400
    }
]

// 1.List name and price items that are yellow and cost more than 4.00
// 2. Using reduce print the number of items in stock
// 3. List name and quantity of items with more than a hundred in stock.

const result1 = data.filter(item => item.color.includes('yellow') && item.price > 4.00).map(item => [item.name, item.price].join(', '))
console.log(result1);

const result2 = data.reduce((acc, item) => acc + item.quantity, 0)
console.log(result2)

const result3 = data.filter(item => item.quantity >= 100).map(item => [item.name, item.quantity].join(', '))
console.log(result3)
