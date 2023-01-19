class cortina {
    constructor(id, producto, precio, stock){
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
    }
}

const carrito = [];

const cortinas = [ 
    {id:1, producto: "inteligentes",precio: 50000,stock: 10}, 
    {id:2, producto: "roll",precio: 5000,stock: 100},
    {id:3, producto: "verticales",precio: 10500,stock: 0},
    {id:4, producto: "orientales",precio: 150000,stock: 5},
    {id:5, producto: "toldos",precio: 250000,stock: 15},  
];


function mostrarMenuPrincipal(){

    //ELEGIR PRODUCTO
    const elegirCortina = parseInt(prompt("Ingrese que producto desea para verificar stock, 1- inteligente, 2- roll, 3- vertical, 4- oriental o 5- toldos"));
    
    //SOLICITAR CANTIDAD
    const cantidad = parseInt(prompt(`Que cantidad de producto desea`));
    console.log(cantidad);

    //BUSCAR PRODUCTO
    const productoElegido = cortinas.find(producto => producto.id === elegirCortina) 
    console.log(elegirCortina, cantidad)

alert(`El producto elegido es cortina ${productoElegido.producto}`);

alert(`El precio del producto es ${productoElegido.precio}`);

alert(`El stock del producto es ${productoElegido.stock}`);

const hayStock = calcularStock(productoElegido.stock, cantidad);

        if(hayStock > 0){
            alert(`Contamos actualmente con ${hayStock}`)
        }else{
        alert(`Querido cliente, actualmente no contamos con ese stock en nuestra sucursal, los dias 10 de cada mes ingresa nueva menrcaderia, por favor vuelva a intentarlo o deje su numero al finalizar para que nos comuniquemos con usted`);
        };
    solicitarCompra(productoElegido);
    }
        
    
function solicitarCompra(producto){
    for(const cortina of cortinas){

productoElegido = "";
const compra = prompt(`Desea comprar ${productoElegido}`);

            if(compra != "si".toLowerCase){
                carrito.push(productoElegido);
                const mail = parseInt(prompt("Ingrese su numero de telefono"));
                alert(`Gracias por elegirnos, uno de nuestros representantes se comunicara con usted a la brevedad para finalizar la compra. Esperamos vuelva pronto`);
                saludo();
                //salir
                }else if (compra === "no"){
                    alert(`Muchas gracias por visitar nuestra pagina`);
                }else{
                    alert(`Error`);
                    solicitarCompra(producto);
                }
            }
        }

function saludo(mail){
    alert(`Hasta pronto!`);
    
}

function calcularStock (stock, cantidad){
        console.log(stock)
        console.log(cantidad)

        let restaStock = stock - cantidad;
        return restaStock;
}

mostrarMenuPrincipal();

// const iva = cortinas.map((cortina) => {
        
//     return (cortina.precio = cortina.precio + (21 * cortina.precio) / 100);
// });  

// console.log (iva);
