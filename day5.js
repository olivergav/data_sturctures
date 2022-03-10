const data = [
    {
    'title': 'Anna Karenina',
    'type': 'book',
    'year': 1887,
    'genre': ['romance', 'history', 'novel']

    },
    {
    'title': 'The Great Gatsby',
    'type': 'book',
    'year': 1925,
    'genre': ['novel', 'tragedy', 'fable']

    },
    {
    'title': 'The Adventures of Huckleberry Finn',
    'type': 'book',
    'year': 1885,
    'genre': ['adventure', 'fable', 'novel']

    },
    {
    'title': 'Hamlet',
    'type': 'book',
    'year': 1601,
    'genre': ['tragedy', 'drama', 'fiction']

    },
    {
    'title': 'Harry Potter and the Philosophers Stone',
    'type': 'book',
    'year': 1997,
    'genre': ['adventure', 'fiction', 'fable']

    },
    {
    'title': 'The Road',
    'type': 'ebook',
    'year': 2006,
    'genre': ['Post-Apo', 'fiction', 'scary']

    },
    {
    'title': 'Cloud Atlas',
    'type': 'ebook',
    'year': 2004,
    'genre': ['novel', 'fable', 'fiction']

    },
    {
    'title': 'Gone Girl',
    'type': 'ebook',
    'year': 2012,
    'genre': ['thriller', 'mystery', 'novel']

    },
    {
    'title': 'The Da Vinci Code',
    'type': 'book',
    'year': 2003,
    'genre': ['mystery', 'fiction', 'novel']

    },
    {
    'title': 'The Handmaids Tale',
    'type': 'book',
    'year': 1985,
    'genre': ['fiction', 'dystopian', 'novel']

    }
]

// 1.List title and year of publishing of every ebook
// 2.List all items which genre is fiction 
// 3.List all items published after 1980 and its genre is novel

const result1 = data.map(item => [item.title, item.year].join(', '));
console.log(result1);

const result2 = data.filter(item => item.genre.includes('fiction')).map(item => item.title);
console.log(result2);

const result3 = data.filter(item => item.year > 1980 && item.genre.includes('novel')).map(item => [item.title, item.year].join(', '))
console.log(result3)