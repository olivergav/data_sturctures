const directors = [
    {
      name: "Christopher",
      surname: "Nolan",
      birth: 1970,
      children: ["Flora Nolan", "Oliver Nolan", "Rory Nolan", "Magnus Nolan"],
      movies: [
        {
          title: "Memento",
          year: 2000,
          genre: "Thriller",
          distributor: "Newmarket Films",
        },
        {
          title: "Inception",
          year: 2010,
          genre: "Thriller",
          distributor: "Warner Bros.",
        },
        {
          title: "Dunkirk",
          year: 2017,
          genre: "War",
          distributor: "Warner Bros.",
        },
        {
          title: "Tenet",
          year: 2020,
          genre: "Thriller",
          distributor: "Warner Bros.",
        },
      ],
    },
    {
      name: "Quentin",
      surname: "Tarantino",
      birth: 1963,
      children: ["Leo Tarantino"],
      movies: [
        {
          title: "Pulp Fiction",
          year: 1994,
          genre: "Crime",
          distributor: "Miramax",
        },
        {
          title: "Kill Bill",
          year: 2003,
          genre: "Action",
          distributor: "Miramax",
        },
        {
          title: "Django",
          year: 2012,
          genre: "Western",
          distributor: "Columbia Pictures",
        },
        {
          title: "The Hateful Eight",
          year: 2015,
          genre: "Western",
          distributor: "The Weinstein Company",
        },
      ],
    },
    {
      name: "Martin",
      surname: "Scorsese",
      birth: 1942,
      children: [
        "Francesca Scorsese",
        "Domenica Cameron-Scorsese",
        "Cathy Scorsese",
      ],
      movies: [
        {
          title: "After Hours",
          year: 1985,
          genre: "Black comedy",
          distributor: "Warner Bros.",
        },
        {
          title: "Casino",
          year: 1995,
          genre: "Crime",
          distributor: "Universal Pictures",
        },
        {
          title: "The Departed",
          year: 2006,
          genre: "Crime",
          distributor: "",
        },
        {
          title: "The Irishman",
          year: 2019,
          genre: "Crime",
          distributor: "Netflix",
        },
      ],
    },
  ];

// 1. Wyświetl nazwy filmów produkcji Warner Bros.
// 2. Wyświetl thrillery reżyserów urodzonych po 1960, które były wydane po 2005
// 3. Wyświetl dzieci reżyserów, których imiona zaczynają się na "F"

const result = directors.map(director => director.movies).flat().filter(movies => movies.distributor === "Warner Bros.").map(movies => [movies.title, movies.distributor].join(', '));
console.log(result);

const result2 = directors.filter(director => director.birth > 1960).map(director => director.movies).flat().filter(movies => movies.genre === "Thriller" && movies.year > 2005).map(movies => movies.title);
console.log(result2);

const result3 = directors.map(director => director.children).flat().filter(children => children.startsWith('F'));
console.log(result3);