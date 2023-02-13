class Cortina {
        constructor(id, producto, precio, stock){
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }
    };
    
    const cortinas = [ 
    new Cortina (1,"inteligentes", 50000, 10), 
    new Cortina (2,"roll", 5000, 100),
    new Cortina (3,"verticales", 10500, 200),
    new Cortina (4,"orientales", 150000, 5),
    new Cortina (5,"toldos", 250000, 15),  
];

const carritos = [];

// Guardamos los archivos en el localStorage y los recuperas 
localStorage.setItem("cortinas5", JSON.stringify(cortinas));
const arrayLs = localStorage.getItem("cortinas5");
const parseoCortina = JSON.parse(arrayLs);
console.log(parseoCortina)

const datos = document.querySelector('#datos') // Tomo el elemento del html donde voy a insertar los datos para renderizar 

function modificarCarrito (nombres, cantidad){
    
const indiceCarrito = carritos.findIndex((productoCarrito) => productoCarrito.producto === nombres.producto);
if(indiceCarrito === -1){
    carritos.push({
        producto: nombres.producto,
        cantidad: cantidad,
    });
}else{
    carritos[indiceCarrito].cantidad = cantidad;
}
console.log(carritos);
renderizarCarrito();
guardarCarritoEnLS();
};


function renderizarProductos (){
    datos.innerHTML = "";
// Por cada elemento que tiene el array tomado del localStorage cortina se va a insertar el html con los datos asignados aquí 
parseoCortina.forEach((cortina) => {
    
const tr = document.createElement("tr");

const tdNombre = document.createElement("td");
tdNombre.innerHTML =`${cortina.producto}`;


const tdPrecio = document.createElement("td");
tdPrecio.innerHTML = `${cortina.precio}`;

const tdStock = document.createElement("td");
tdStock.innerHTML = `${cortina.stock}`;

const thUnidades = document.createElement("td");
const inputNumber = document.createElement("input");
const inputName = document.createElement("button");
inputNumber.type = "number";
inputNumber.value = 0;
inputName.type = "submit";
inputName.value = "Aceptar";
inputNumber.addEventListener("change", () =>{

modificarCarrito(cortina, inputNumber.value);
console.log(carritos);
});

thUnidades.innerHTML = "";

thUnidades.append(inputNumber);
thUnidades.append(inputName);
tr.append(tdNombre);
tr.append(tdPrecio);
tr.append(tdStock);
tr.append(thUnidades);

datos.append(tr);


})
};

function guardarCarritoEnLS () {
    localStorage.setItem("carrito", JSON.stringify(carritos));
    
    };


function renderizarCarrito(){

tbodyCarrito.innerHTML = "";

carritos.forEach((productoCarrito) => {

    const tr = document.createElement("tr");
    // carritos.innerHTML += 
    // `<tr>${productoCarrito.nombres}</tr>
    // <tr>${productoCarrito.cantidad}}</tr>`

// const tdNombre = document.createElement("td");
// tdNombre.innerHTML = `${productoCarrito.nombres}`;
const tdNombre = document.createElement("td");
tdNombre.innerHTML =`${productoCarrito.producto}`;


const tdCantidad = document.createElement("td");
tdCantidad.innerHTML = `${productoCarrito.cantidad}`;

// const thUnidades = document.createElement("tr");

tr.append(tdNombre);
tr.append(tdCantidad);
// tr.append(thUnidades);
dat.append(tr);
tbodyCarrito.append(tr);
// tbodyDat.append(tr);
console.log(productoCarrito);


})

};

const tbodyCarrito = document.querySelector("#carrito tbody");
renderizarProductos();
// //por que solo me toma el valor en toldo, y como hago para que no se repita??????






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
