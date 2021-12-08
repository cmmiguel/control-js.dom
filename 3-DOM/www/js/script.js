/* Crear un div en el que se muestre un reloj con la hora actual y que se actualice automáticamente cada segundo.
   El formato del reloj debe ser HH:MM:SS (siempre dos dígitos por cada unidad) */

   const body = document.querySelector('body')
   const div = document.createElement('div')

    const pintaHora = () => {
        const date = new Date()
        let hora = date.getHours()
        let min = date.getMinutes()
        let seg = date.getSeconds()

        if (hora < 10) {
            hora = '0' + hora
        }
        if (min < 10) {
            min = '0' + min
        }
        if (seg < 10) {
            seg = '0' + seg
        }
                //console.log(`${hora}:${min}:${seg}`)

        div.innerHTML = (`${hora}:${min}:${seg}`)
    }

   body.appendChild(div)

setInterval('pintaHora()',1000)










