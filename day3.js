const data = [
    {
    'name': 'Ben',
    'surname': 'Smith',
    'age': 30,
    'occupation': 'math teacher'
    },
{
    'name': 'Albert',
    'surname': 'Sontag',
    'age': 38,
    'occupation': 'physics teacher'
    },
    {
    'name': 'Anna',
    'surname': 'Montag',
    'age': 27,
    'occupation': 'art teacher'
    },
    { 
    'name': 'Mary',
    'surname': 'Loco',
    'age': 40,
    'occupation': 'director'
    },
    {
    'name': 'Sue',
    'surname': 'Kent',
    'age': 25,
    'occupation': 'english teacher'
    },
    {
    'name': 'Bob',
    'surname': 'Randal',
    'age': 50,
    'occupation': 'janitor'
    },
    {
    'name': 'Rebecca',
    'surname': 'Summer',
    'age': 32,
    'occupation': 'biology teacher'
    },
    {
    'name': 'Cindy',
    'surname': 'Montana',
    'age': 23,
    'occupation': 'intern'
    },
    {
    'name': 'Benedict',
    'surname': 'Sanvile',
    'age': 30,
    'occupation': 'math teacher'
    },
]

// 1. List name and age all teachers over 30 years of age
// 2. Count the average age of the staff
// 3. List the name and surname of personnel whose last name begins with 'S'.

const result1 = data.filter(item => item.age > 30).map(item => [item.name, item.age].join(', '))
console.log(result1);

const result2 = data.reduce((acc, person) => acc + person.age, 0) / data.length;
console.log(result2);

const result3 = data.filter(item => item.surname.toLowerCase().startsWith('s')).map(item => [item.name, item.surname].join(' '))
console.log(result3);

