//declaracion e inicializacion de variables totalizadoras
var [precioTotal,descuentoTotal,precioFinal] = [0,0,0]



//funcion prompt carga cantidad de elementos a calcular
let finalContador;
while (isNaN(finalContador)) {
    finalContador = Number(prompt("¿Cuántos productos desea ingresar?"));
}

//funcion ingreso y calculo p*q por producto
function calculo (descuento){
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
    return [precioPrTotal,descuentoProducto,productoFinal,cantProducto,precioProducto]
}

//declaración array para guardar los datos de los productos

const arrayProductos = [];

class producto{
    constructor(a1NumProducto, a2CantProducto, a3PrecioProducto, a4PrecioTotal, a5DescuentoTotal, a6PrecioFinal){
        this.a1NumProducto = a1NumProducto;
        this.a2CantProducto = a2CantProducto;
        this.a3PrecioProducto = a3PrecioProducto;
        this.a4PrecioTotal = a4PrecioTotal;
        this.a5DescuentoTotal = a5DescuentoTotal;
        this.a6PrecioFinal = a6PrecioFinal;
    }
}


//funcion totalizadora
(function calcular() {
    for(var i = 0; i < finalContador; i++){
        let cantProducto = precioProducto = precioPrTotal = descuentoProducto = productoFinal = descuento = 0;
        let condicionDescuento;
        while (condicionDescuento !== 'SI' && condicionDescuento !== 'NO') {
            condicionDescuento = prompt("¿Este producto cuenta con descuento? Ingrese SI o NO")
            condicionDescuento = condicionDescuento.toUpperCase();
        }
        if (condicionDescuento === "SI") {
            descuento = 0.11;
            let [pt,dt,pf,cp,pp] = calculo(descuento)
            precioPrTotal += pt;
            descuentoTotal += dt;
            precioFinal += pf;
            cantProducto += cp;
            precioProducto += pp;
            let producto1= new producto ("Producto: " + (i+1), 
            "Cantidad: " + cp.toFixed(2), 
            "Precio unitario: " + pp.toFixed(2), 
            "Subtotal: " + pt.toFixed(2), 
            "Descuento: " + dt.toFixed(2), 
            "Total: " + pf.toFixed(2)
            )
            arrayProductos.push([producto1]);
        } 
        else if (condicionDescuento === "NO") {
            descuento = 0;
            let [pt,dt,pf,cp,pp] = calculo(descuento)
            precioPrTotal += pt;
            descuentoTotal += dt;
            precioFinal += pf;
            cantProducto += cp;
            precioProducto += pp;
            let producto1= new producto ("Producto: " + (i+1), 
            "Cantidad: " + cp.toFixed(2), 
            "Precio unitario: " + pp.toFixed(2), 
            "Subtotal: " + pt.toFixed(2), 
            "Descuento: " + dt.toFixed(2), 
            "Total: " + pf.toFixed(2)
            )
            arrayProductos.push([producto1]);
        } else console.log("No se ha ingresado una opcion válida");
    }
})()


//muestra en consola los montos totales de compra y descuentos
console.log(arrayProductos);
const resumen = ["Subtotal compra: "+ precioPrTotal.toFixed(2), "Descuento compra: " + descuentoTotal.toFixed(2), "Total: " + precioFinal.toFixed(2)];
console.log(resumen);
console.log("Su total es " + precioFinal.toFixed(2));

//busqueda de un producto en especifico
let consulta;
let prodRevisar;

while (consulta !== 'SI' && consulta !== 'NO') {
    consulta = prompt("¿Desea revisar un numero de producto? Ingrese SI o NO")
    consulta = consulta.toUpperCase();
}

if (consulta === "SI") {
    do {
    prodRevisar = Number(prompt("Por favor ingrese el número de producto a revisar"));
    }while (isNaN(prodRevisar) || prodRevisar > (arrayProductos.length +1) || (prodRevisar <= 0));
    console.log("los datos del producto "+ prodRevisar + " son:")
    console.log(arrayProductos[prodRevisar-1]);
} 



