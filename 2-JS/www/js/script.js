"use strict";

/* Edita el archivo script.js para crear una función que reciba una array de objetos (equipos y puntos conseguidos)
y muestre por consola el ** nombre ** del que más y del que menos puntos hayn conseguido, con sus respectivos ** totales **. */

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

let equipoMax = ''
let puntuaMax = '0'
let equipoMin = puntuaciones[0].equipo
let puntuaMin = puntuaciones[0].puntos.reduce((a,b) => a + b, 0)
let parcial


const resultados = (datos) => {
  const listaPuntos = datos.forEach(points => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
      parcial = points.puntos.reduce(reducer, 0)
       if (parcial > puntuaMax) {
       puntuaMax = parcial
       equipoMax = points.equipo
      }
      if (parcial <= puntuaMin) {
        puntuaMin = parcial
        equipoMin = points.equipo
      }
})

console.log('El equipo que más puntos ha sacado es: ', equipoMax, 'con el total de puntos: ', puntuaMax)
console.log('El equipo que menos puntos ha sacado es: ', equipoMin, 'con el total de puntos: ', puntuaMin)
}

resultados(puntuaciones)

