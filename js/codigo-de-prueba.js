class cortina {
    constructor(producto, precio, stock){
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
}
}

const cortinas = [ 
    new cortina ("inteligentes".toLowerCase(), 50000, 10), 
    new cortina ("roll".toLowerCase(), 5000, 100),
    new cortina ("verticales".toLowerCase(), 10500, 200),
    new cortina ("orientales".toLowerCase(), 150000, 5),
    new cortina ("toldos".toLowerCase(), 250000, 15),  
];

const cortinaActual = [cortinas]

function cortinaExiste (producto){
    let encontrado = false;
    for (const cortina of cortinas){
        if (cortinas.producto === producto){
            encontrado = true;
            break;
        }
    }
    return encontrado;
}

function calcularStockInteligentes (){
    for(const cortinas of cortina){

        let restaStock = stock - cantidadDeseada;
        
        if(restaStock <= 10){
            alert(`Contamos actualmente con stock`)
        }
        else{
            alert(`Querido cliente, actualmente no contamos con ese stock en nuestra sucursal, los dias 10 de cada mes ingresa nueva menrcaderia, por favor vuelva a intentarlo o deje su numero al finalizar para que nos comuniquemos con usted`);
        }};
        return restaStock;
}
function calcularStockRoll (stock){
    let restaStock = stock - cantidadDeseada
    
    if(restaStock <= 100){
        alert(`Contamos actualmente con stock`)
    }else{
        alert(`Querido cliente, actualmente no contamos con ese stock en nuestra sucursal, los dias 10 de cada mes ingresa nueva menrcaderia, por favor vuelva a intentarlo o deje su numero al finalizar para que nos comuniquemos con usted`);
    }
    return restaStock;
}
function calcularStockVerticales (stock){
    let restaStock = stock - cantidadDeseada
    
    if(restaStock <= 200){
        alert(`Contamos actualmente con stock`)
    }
    else{
        alert(`Querido cliente, actualmente no contamos con ese stock en nuestra sucursal, los dias 10 de cada mes ingresa nueva menrcaderia, por favor vuelva a intentarlo o deje su numero al finalizar para que nos comuniquemos con usted`);
    }
    return restaStock;
}
function calcularStockOrientales (stock){
    let restaStock = stock - cantidadDeseada
    
    if(restaStock <= 5){
        alert(`Contamos actualmente con stock`)
    }
    else{
        alert(`Querido cliente, actualmente no contamos con ese stock en nuestra sucursal, los dias 10 de cada mes ingresa nueva menrcaderia, por favor vuelva a intentarlo o deje su numero al finalizar para que nos comuniquemos con usted`);
    }
    return restaStock;
}
function calcularStockToldos (stock){
    let restaStock = stock - cantidadDeseada
    
    if(restaStock <= 15){
        alert(`Contamos actualmente con stock`)
    }else{
        alert(`Querido cliente, actualmente no contamos con ese stock en nuestra sucursal, los dias 10 de cada mes ingresa nueva menrcaderia, por favor vuelva a intentarlo o deje su numero al finalizar para que nos comuniquemos con usted`);
    }
    return restaStock;
}
let elegirCortina = "";
let cantidadDeseada = 0;


while(elegirCortina !== "finalizar"){

let cantidadDeseada = parseInt(prompt("Ingrese la cantidad que desea de esa cortina para verificar stock"));

const elegirCortina = prompt("Ingrese que producto desea para verificar stock, inteligente, roll, vertical, oriental o toldos (Si desea salir por favor introduzca finalizar)");

        switch(elegirCortina){

        case "inteligente":
        
        calcularStockInteligentes (restaStock);
        alert();
        alert(calcularStockInteligentes);

        break;
    
        case "roll":
        
        calcularStockRoll();
        alert();
        alert(calcularStockInteligentes);
        break;
    
        case "vertical":
        
        calcularStockVerticales();  
        alert(cortinaExiste);
        alert(calcularStockInteligentes);
    
        break;

        case "oriental":
        
        calcularStockOrientales();
        alert();
        alert(calcularStockInteligentes);

        break;

        case "toldos":
        
        calcularStockToldos();
        alert();
        alert(calcularStockInteligentes);

        break;
    
        default : 
            caracteristicas = prompt("Error, por favor introduzca inteligentes, roll, vertical, oriental o toldos, de lo contrario introduzca finalizar para salir.");
    } 
}
const iva = cortinas.map((cortina) => {
        
    return (cortina.precio = cortina.precio + (21 * cortina.precio) / 100);
});  

console.log (iva);

//* Arrays medios de pago /



// productos con iva/

// const cortinasConIva = cortinas.reduce(acc[],cortinas) => {
//     cortinas.precio = cortinas.precio +(21 * producto.precio) / 100;
//     acc.push(cortinasConIva)
// }

// saludo inicio

// const nombre = prompt( "Ingrese un nombre");
// const apellido = prompt( "Ingrese un apellido");
// console.log("El nombre es: " + nombre)
// console.log(" El apellido es: " + apellido)

// alert("Bienvenido/a: " + nombre + " " + apellido);

// /** pruba */

// const añoActual = 2022;
// const añoNacimiento = parseInt(prompt ("Si esta interesado en nuestros cuentos puede adquirirlos por esta misma pagina, para ello por favor ingrese su año de nacimiento"));

// const edad = parseInt(añoActual) - parseInt(añoNacimiento);

// console.log("Su edad es " + " " + edad);
// if (edad >= 18) {
        
//         alert("Usted tiene " + " " + edad + "puede continuar con la compra ");
//     } else if (edad >= 14) {
//         alert("Usted es menor de edad, no puede continuar con la compra");
//     } else {
//         alert("")
//     }
    

// let cuento = "";

// while (!== "salir") {

//     cuento = prompt("Ingrese el cuento deseado caperucita, los tres cerditos, la cigarra y la hormiga, si quiere salir ingrese Finalizar.");

//     while(cuento !== "caperucita" && cuento !== "los tres cerditos" && cuento !== "la cigarra y la hormiga") {

//         cuento = prompt("Ingrese CORRECTAMENTE el nombre del cuento, caperucita, los tres cerditos, la cigarra y la hormiga,");
//     }}
//     const mensaje = prompt("Los valores de los libros son caperucita $100, los tres cerditos $120, la cigarra y la hormiga $150, para continuar pulse aceptar");
//     let cantidad = parseInt(prompt("Ingrese la cantidad deseada"));
//     const caperucita = 100
//     const cerditos = 120
//     const cigarraHormiga = 150
    
//         const resultadoMultiplicacionC = cantidad * caperucita;
//         console.log("El valor a abonar por ejemplar/es de caperucita es de " + resultadoMultiplicacionC);
//         alert("El valor a abonar por el/los ejemplar/es del cuento de caperucita es de " + resultadoMultiplicacionC);
    
//         const resultadoMultiplicacionCerditos = cantidad * cerditos;
//         console.log("El valor a abonar por ejemplar/es de los tres cerditos es de " + resultadoMultiplicacionCerditos);
//         alert("El valor a abonar por el/los ejemplar/es del cuento los tres cerditos es de " + resultadoMultiplicacionCerditos);
    
//         const resultadoMultiplicacionCigarra = cantidad * cigarraHormiga;
//         console.log("El valor a abonar por ejemplar/es de la cigarra y la hormiga es de " + resultadoMultiplicacionCigarra);
//         alert("El valor a abonar por el/los ejemplar/es del cuento la cigarra y la hormiga es de " + resultadoMultiplicacionCigarra);
    
//     const mediosPago = prompt("A continuacion ingrese cual es su medio de pago, visa, mastercard o mercado pago.");
// switch(mediosPago) {
//     case "visa":
//     mediosPagoVisa = prompt("Hasta 3 cuotas sin interes");
//     alert("Con este medio puede abonar hasta en 3 cuotas sin interes");
//     break;

//     case "mastercard":
//         mediosPagoMaster = prompt("Hasta 12 cuotas sin interes");
//         alert("Con este medio de pago puede abonar hasta en 12 cuotas sin interes")
//         break;

//     case "mercado pago":
//             mediosPagoMP = prompt("Las cuotas son las establecidas en la aplicacion segun promociones de la aplicacion");
//             alert("Con este medio de pago las cuotas son las establecidas en la aplicacion segun promociones de la misma");
//             break;

//     default : 
//         mediosPago = prompt("No recibimos ese medio de pago, por favor ingrese visa, mastercard o mercado pago.");
// }

// function divicionMediosPagoVisa (resultadoMultiplicacionC,mediosPagoVisa){

//       const cuotasC = resultadoMultiplicacionC * mediosPagoVisa
//       const cuotasTres = resultadoMultiplicacionCerditos * mediosPagoVisa
//       const cuotasCH = resultadoMultiplicacionCigarra * mediosPagoVisa

//       console.log ()
//       alert()||
// }