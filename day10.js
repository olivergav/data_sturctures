const planets = [
    {
        name: "Mercury",
        moons: 0,
        mostFamousMoons: null,
        hasPlanetaryRings: false,
        relativeMass: 0.06
    },
    {
        name: "Venus",
        moons: 0,
        mostFamousMoons: null,
        hasPlanetaryRings: false,
        relativeMass: 0.82
    },   
    {
        name: "Earth",
        moons: 1,
        mostFamousMoons: ["Moon"],
        hasPlanetaryRings: false,
        relativeMass: 1
    },   
    {
        name: "Mars",
        moons: 2,
        mostFamousMoons: ["Phobos", "Deimos"],
        hasPlanetaryRings: false,
        relativeMass: 0.11
    },   
    {
        name: "Jupiter",
        moons: 79,
        mostFamousMoons: ["Io", "Europa", "Ganymede", "Callisto"],
        hasPlanetaryRings: true,
        relativeMass: 317.8
    },   
    {
        name: "Saturn",
        moons: 62,
        mostFamousMoons: ["Enceladus", "Titan", "Atlas", "Calypso"],
        hasPlanetaryRings: true,
        relativeMass: 95.2
    },   
    {
        name: "Uranus",
        moons: 27,
        mostFamousMoons: ["Oberon", "Rosalind", "Umbriel"],
        hasPlanetaryRings: true,
        relativeMass: 14.6
    },   
    {
        name: "Neptune",
        moons: 14,
        mostFamousMoons: ["Galatea", "Triton"],
        hasPlanetaryRings: true,
        relativeMass: 17.2
    },
]

//1. Wypisz nazwy planet, które są większe niż ziemia i mają księżyc z nazwą zaczynającą się na "G".
//2. Wypisz nazwy planet, które mają więcej księżyców niż wyliczona średnia ilość księżyców przypadającą na  pojedynczą planete.
//3. Wypisz nazwy planet, kończących się na "s" i nie posiadających pierścieni planetarnych.

const earthMass = planets.filter(planet => planet.name === 'Earth')[0].relativeMass;
const result1 = planets.filter(planet => planet.relativeMass > earthMass && planet.mostFamousMoons.some(moon => moon.startsWith('G'))).map(obj => obj.name);
// console.log(result1);


const avgMoonsNumber = planets.reduce((acc, planet) => acc + planet.moons, 0)/planets.length
const result2 = planets.filter(planet => planet.moons > avgMoonsNumber).map(planet => [planet.name, planet.moons].join(', '))
// console.log(result2);


const result3 = planets.filter(planet => planet.name.charAt(planet.name.length - 1).toLowerCase() === 's' && planet.hasPlanetaryRings === false).map(planet => planet.name)
// console.log(result3);
