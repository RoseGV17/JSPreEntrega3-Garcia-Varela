//declaracion e inicializacion de variables totalizadoras
var [precioTotal,descuentoTotal,precioFinal] = [0,0,0,0]



//funcion prompt carga cantidad de elementos a calcular
let finalContador;
while (isNaN(finalContador)) {
    finalContador = Number(prompt("¿Cuántos productos desea ingresar?"));
}

console.log("Producto - Cantidad - Precio unitario - Subtotal - Descuento - Total Producto");

//funcion ingreso y calculo p*q por producto
function calculo (contador,descuento){
    let cantProducto;
    while (isNaN(cantProducto)) {
        cantProducto = Number(prompt("Ingrese la cantidad de productos"));
    }
    let precioProducto;
    while (isNaN(precioProducto)) {
        precioProducto = Number(prompt("Ingrese el precio"));
    }
    let precioPrTotal = cantProducto * precioProducto;
    let descuentoProducto = precioPrTotal * descuento;
    let productoFinal = precioPrTotal - descuentoProducto;
    console.log(`${contador}  -  ${cantProducto}  -  ${precioProducto}  -  ${precioPrTotal}  -  ${descuentoProducto}  -  ${productoFinal}`);
    console.log('TOTAL CALCULO', precioPrTotal + descuentoProducto + productoFinal)
    return [precioPrTotal,descuentoProducto,productoFinal]
}


//funcion totalizadora
(function calcular() {
    for(var i = 0; i < finalContador; i++){
        let cantProducto = precioProducto = precioPrTotal = descuentoProducto = productoFinal = descuento = 0;
        let condicionDescuento;
        while (condicionDescuento !== 'SI' && condicionDescuento !== 'NO') {
            condicionDescuento = prompt("¿Este producto cuenta con descuento? Ingrese SI o NO")
        }
        if (condicionDescuento === "SI") {
            descuento = 0.11;
            let [pt,dt,pf] = calculo(i,descuento)
            precioTotal += pt;
            descuentoTotal += dt;
            precioFinal += pf;
        } 
        else if (condicionDescuento === "NO") {
            descuento = 0;
            let [pt,dt,pf] = calculo(i,descuento)
            precioTotal += pt;
            descuentoTotal += dt;
            precioFinal += pf;
        } else console.log("No se ha ingresado una opcion válida");
    }
})()

/*objeto producto

let arrayProductos = [
{},
{},
{},
]

console.log(arrayProductos);
console.log(arrayProductos[2]);



class Producto{
    constructor(finalContador, cantProducto, precioProducto, precioPrTotal, descuentoProducto, productoFinal){
        "1-Producto" = this.finalContador = finalContador;
        "2-Cantidad" =this.cantProducto = cantProducto;
        "3-Precio" = this.precioProducto = precioProducto;
        "4-Subtotal" = this.precioPrTotal = precioPrTotal;
        "5-Descuento" = this.descuentoProducto = descuentoProducto;
        "6-Total" = this.productoFinal = productoFinal;
    }
}

let producto1 = new Producto (finalContador, cantProducto, precioProducto, precioPrTotal, descuentoProducto, productoFinal);

console.log(producto1);
*/

//muestra en consola los montos totales de compra y descuentos
console.log("Subtotal compra - Descuento compra - Total");
console.log(precioTotal + "  -  " + descuentoTotal + "  -  " + precioFinal);

console.log("Su total es " + precioFinal);