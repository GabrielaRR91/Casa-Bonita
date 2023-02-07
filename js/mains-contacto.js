class Cortina {
    constructor(id, producto, precio, stock){
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
}
};
// //     sumaIva(){
// //         this.precio = this.precio * 1.21;
// //     }
// // }
// // for (const producto of carrito) {
// //     producto.sumaIva();
// }

const carrito = [];

// Dejo el array con los productos, la clase constructora solo sirve para cuando ingresas productos con interface del usuarios
const cortinas = [ 
{id:1, producto: "inteligentes",precio: 50000,stock: 10}, 
{id:2, producto: "roll",precio: 5000,stock: 100},
{id:3, producto: "verticales",precio: 10500,stock: 0},
{id:4, producto: "orientales",precio: 150000,stock: 5},
{id:5, producto: "toldos",precio: 250000,stock: 15},  
];



// Guardamos los archivos en el localStorage y los recuperas 
localStorage.setItem("cortinas5", JSON.stringify(cortinas));
const arrayLs = localStorage.getItem("cortinas5");
const parseoCortina = JSON.parse(arrayLs);
console.log(parseoCortina)


const datos = document.querySelector('#datos') // Tomo el elemento del html donde voy a insertar los datos para renderizar 


function modificarCarrito (nombres, cantidad){
const indiceCarrito = carrito.findIndex((productoCarrito) => productoCarrito.producto === nombres.producto);
if(indiceCarrito === -1){
    carrito.push({
        nombre: nombres.producto,
        cantidad: cantidad,
    });
}else{
    carrito[indiceCarrito].cantidad = cantidad;
}
renderizarCarrito();
}

function renderizarProductos (){

// Por cada elemento que tiene el array tomado del localStorage cortina se va a insertar el html con los datos asignados aquí 
parseoCortina.forEach((cortina) => {
    const tr = document.createElement("tr");
    datos.innerHTML += 
    `<th>${cortina.producto}</th>
    <th>$${cortina.precio}</th>
    <th>${cortina.stock}</th>`

const thUnidades = document.createElement("tr");

const inputNumber = document.createElement("input");
inputNumber.type = "number";
inputNumber.value = 0;
inputNumber.addEventListener("change", () =>{

modificarCarrito(cortina, inputNumber.value);
console.log(carrito);
});
thUnidades.innerHTML = "";
thUnidades.append(inputNumber);
tr.append(thUnidades);
datos.append(tr);


})
};
function renderizarCarrito(){
tbodyCarrito.innerHTML = "";
carrito.forEach((productoCarrito) => {

    const tr = document.createElement("tr");
    carrito.innerHTML += 
    `<th>${productoCarrito.producto}</th>`

const thUnidades = document.createElement("tr");



tr.append(thUnidades);
dat.append(tr);


})
};

const tbodyCarrito = document.querySelector("#carrito tbody");
renderizarProductos();
//por que solo me toma el valor en toldo, y como hago para que no se repita??????





Toastify({
    text: "Tambien podes pagar por Mercado Pago haciendo click aqui!",
    duration: 5000,
    destination: "https://www.mercadopago.com.ar/home",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
}).showToast();



const divSemana = document.querySelector(".semana")
function crearDias() {
    semana.forEach((cadaDia) =>{
        console.log(cadaDia);
        const divDia = document.createElement("div");
        divDia.className = cadaDia === "domingo" || cadaDia === "miercoles" ? "diaOcupado" : "dia dia-libre";
        divDia.innerText = cadaDia
        divSemana.append(divDia);

        
        divDia.addEventListener("click", () =>{
divDia.classList.toggle("diaOcupado")
diaSeleccionados.push(divDia);
console.log(diaSeleccionados);
        })
        
    }) 
    };

const semana = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo",
];
const diaSeleccionados = [];

crearDias();
