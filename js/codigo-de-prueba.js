
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


// //                              TerceraPre Entrega

// class Cortina {
//     constructor(id, producto, precio, stock){
//     this.id = id;
//     this.producto = producto;
//     this.precio = precio;
//     this.stock = stock;
// }
// };

// const cortinas = [ 
// new Cortina (1,"inteligentes", 50000, 10), 
// new Cortina (2,"roll", 5000, 100),
// new Cortina (3,"verticales", 10500, 200),
// new Cortina (4,"orientales", 150000, 5),
// new Cortina (5,"toldos", 250000, 15),  
// ];

// const carritos = [];

// // Guardamos los archivos en el localStorage y los recuperas 
// localStorage.setItem("cortinas5", JSON.stringify(cortinas));
// const arrayLs = localStorage.getItem("cortinas5");
// const parseoCortina = JSON.parse(arrayLs);
// console.log(parseoCortina)

// const datos = document.querySelector('#datos') // Tomo el elemento del html donde voy a insertar los datos para renderizar 

// function modificarCarrito (nombres, cantidad){

// const indiceCarrito = carritos.findIndex((productoCarrito) => productoCarrito.producto === nombres.producto);
// if(indiceCarrito === -1){
// carritos.push({
//     producto: nombres.producto,
//     cantidad: cantidad,
// });
// }else{
// carritos[indiceCarrito].cantidad = cantidad;
// }
// console.log(carritos);
// renderizarCarrito();
// guardarCarritoEnLS();
// };


// function renderizarProductos (){
// datos.innerHTML = "";
// // Por cada elemento que tiene el array tomado del localStorage cortina se va a insertar el html con los datos asignados aquí 
// parseoCortina.forEach((cortina) => {

// const tr = document.createElement("tr");

// const tdNombre = document.createElement("td");
// tdNombre.innerHTML =`${cortina.producto}`;


// const tdPrecio = document.createElement("td");
// tdPrecio.innerHTML = `${cortina.precio}`;

// const tdStock = document.createElement("td");
// tdStock.innerHTML = `${cortina.stock}`;

// const thUnidades = document.createElement("td");
// const inputNumber = document.createElement("input");
// const inputName = document.createElement("button");
// inputNumber.type = "number";
// inputNumber.value = 0;
// inputName.type = "submit";
// inputName.value = "Aceptar";
// inputNumber.addEventListener("change", () =>{

// modificarCarrito(cortina, inputNumber.value);
// console.log(carritos);
// });

// thUnidades.innerHTML = "";

// thUnidades.append(inputNumber);
// thUnidades.append(inputName);
// tr.append(tdNombre);
// tr.append(tdPrecio);
// tr.append(tdStock);
// tr.append(thUnidades);

// datos.append(tr);


// })
// };

// function guardarCarritoEnLS () {
// localStorage.setItem("carrito", JSON.stringify(carritos));

// };


// function renderizarCarrito(){

// tbodyCarrito.innerHTML = "";

// carritos.forEach((productoCarrito) => {

// const tr = document.createElement("tr");
// // carritos.innerHTML += 
// // `<tr>${productoCarrito.nombres}</tr>
// // <tr>${productoCarrito.cantidad}}</tr>`

// // const tdNombre = document.createElement("td");
// // tdNombre.innerHTML = `${productoCarrito.nombres}`;
// const tdNombre = document.createElement("td");
// tdNombre.innerHTML =`${productoCarrito.producto}`;


// const tdCantidad = document.createElement("td");
// tdCantidad.innerHTML = `${productoCarrito.cantidad}`;

// // const thUnidades = document.createElement("tr");

// tr.append(tdNombre);
// tr.append(tdCantidad);
// // tr.append(thUnidades);
// dat.append(tr);
// tbodyCarrito.append(tr);
// // tbodyDat.append(tr);
// console.log(productoCarrito);


// })

// };

// const tbodyCarrito = document.querySelector("#carrito tbody");
// renderizarProductos();
// // //por que solo me toma el valor en toldo, y como hago para que no se repita??????






// Toastify({
// text: "Tambien podes pagar por Mercado Pago haciendo click aqui!",
// duration: 5000,
// destination: "https://www.mercadopago.com.ar/home",
// newWindow: true,
// close: true,
// gravity: "top", // `top` or `bottom`
// position: "right", // `left`, `center` or `right`
// stopOnFocus: true, // Prevents dismissing of toast on hover
// style: {
// background: "linear-gradient(to right, #00b09b, #96c93d)",
// },
// onClick: function(){} // Callback after click
// }).showToast();



// const divSemana = document.querySelector(".semana")
// function crearDias() {
// semana.forEach((cadaDia) =>{
//     console.log(cadaDia);
//     const divDia = document.createElement("div");
//     divDia.className = cadaDia === "domingo" || cadaDia === "miercoles" ? "diaOcupado" : "dia dia-libre";
//     divDia.innerText = cadaDia
//     divSemana.append(divDia);

    
//     divDia.addEventListener("click", () =>{
// divDia.classList.toggle("diaOcupado")
// diaSeleccionados.push(divDia);
// console.log(diaSeleccionados);
//     })
    
// }) 
// };

// const semana = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo",
// ];
// const diaSeleccionados = [];

// crearDias();

//*                                  el del index
// nuevosClientes = [];

// const clientes = ["Matias", "Gabriela",];
// const nuevosClientes = prompt("Bienvenido, por favor introduzca su nombre y apellido para quedar registrado en nuestra base de datos.");
// alert(`${nuevosClientes}, gracias por visitar casa bonita, estamos para ayudarle`)

// console.log(clientes.length);
// clientes.push(nuevosClientes);
// console.log(clientes);

// const contenedorEmpleados = document.createElement('contenedorEmpleados');
