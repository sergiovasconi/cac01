const resumen = document.querySelector(".resumen")

const cantidad = document.querySelector("#canti")
const categoria = document.querySelector("#cate")

function venta(cantidad, categoria) {

    const cantivalor = cantidad.value
    const catevalor = categoria.value

    // console.log(cantivalor)
    // console.log(catevalor)

    // let precio = "200"

    // Tomar cantidad del form
    // let cantidad = "20"
    cantinum = parseInt(cantivalor)

    // Tomar browser del form
    // let browser = "Estudiante"
    /*
    Estudiante
    Trainee
    Junior"
    ""
    */

    switch (catevalor) {
        case "Estudiante":
            precio = "40"
            break;
        case "Trainee":
            precio = "100"
            break;
        case "Junior":
            precio = "170"
            break;
        default:
            precio = "200"
    }
    parseInt(precio)

    let total = precio * cantinum

    msg = "Total a Pagar: $" + total

    // Cambiar el txt celeste Total a Pagar x msg


    resumen.innerHTML = `
        <input type="text" class="form-control margen_izq" disabled placeholder="Total a Pagar: $${total}" aria-label="Total">
        `

}


function mostrar() {

    resumen.innerHTML = `
    <input type="text" class="form-control margen_izq" disabled placeholder="Total a Pagar: $" aria-label="Total">
    `
}

mostrar() 