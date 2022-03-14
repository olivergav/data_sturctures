const coffeeShop = [
    {
        name: "Fornir",
        street: "Długa",
        city: "Kraków",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 10,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Jordan Cafe",
        street: "Długa",
        city: "Kraków",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
        coffeePrice: [
            {
                espresso: 10,
                americano: 11,
                flatWhite: 14,
                capuccino: 13,
                latte: 15,
                mocha: 15,
                iceLatte: 14
            }
        ],
    },
    {
        name: "Iluzjon Art Cafe",
        street: "Rynek",
        city: "Sandomierz",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 8,
                americano: 10,
                flatWhite: 15,
                capuccino: 12,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Ministerstwo Kawy",
        street: "Marszałkowska",
        city: "Warszawa",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
        coffeePrice: [
            {
                espresso: 11,
                americano: 13,
                flatWhite: 14,
                capuccino: 15,
                latte: 16,
                mocha: 18,
                iceLatte: 18
            }
        ],
    },
    {
        name: "Magia Cafe Bar",
        street: "Długa",
        city: "Kraków",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 9,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Kawiarnia Kafka",
        street: "Oboźna",
        city: "Warszawa",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 11,
                flatWhite: 14,
                capuccino: 13,
                latte: 15,
                mocha: 15
            }
        ],
    },   {
        name: "Kawa",
        street: "Długa",
        city: "Gdańsk",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 10,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    }
]

// 1.Wyświetl nazwy kawiarni znajdujących się przy ul. Długiej w Krakowie.
// 2.Wyświetl liczbę kawiarni, które w menu mają ‘iceLatte’.
// 3.Znajdź kawiarnie, w których espresso kosztuje więcej niż 10.

const result = coffeeShop.filter(place => place.street === "Długa").map(place => place.name);
console.log(result);

const result2 = coffeeShop.filter(place => place.coffee.includes('iceLatte')).map(place => place.name).length;
console.log(result2);

const result3 = coffeeShop.filter(place => place.coffeePrice[0].espresso > 10).map(place => place.name);
console.log(result3);