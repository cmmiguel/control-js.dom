'use strict'

const empezarJuego = () => {

    const numAl = Math.round(Math.random() * 100)

    for (let i = 0; i <5; i++) {

        let numUser = window.prompt('Introduce un número del 0 al 100')

        if (numAl === +numUser) {
            alert('Enhorabuena, has ganado')
            break
        } else {
            if (+numUser < numAl) {
                alert('El número introducido es menor que la contraseña')
            } else {
                alert('El número introducido es mayor que la contraseña')
            }
        }
        if (i === 4) {
            alert('Lo siento, has perdido')
        }
    }
}

empezarJuego()