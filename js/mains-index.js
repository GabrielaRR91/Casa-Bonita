async function obtenerEmpleados () {
    const response = await fetch("/js/empleados.json");
    const empleados = await response.json();
    
    console.log(empleados);

    renderizarEmpleados(empleados);
};

function renderizarEmpleados (empleados) {
    for(const empleado of empleados){

        const div = document.createElement("div");
        div.className = "empleados";
    
        const img = document.createElement("img");
        img.src = empleado.imagen;
    
        const h2 = document.createElement("h2");
        h2.innerHTML = empleado.nombre;

        const p = document.createElement("p");
        p.innerHTML = empleado.puesto;

        contenedorEmpleados.append(div);
        div.append(img, h2, p);
    }
};

const contenedorEmpleados = document.getElementById("contenedorEmpleados");
const empleados = obtenerEmpleados();


