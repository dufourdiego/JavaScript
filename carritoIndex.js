let carrito = []
const contadorCarrito = document.getElementById("contador-carrito");
const contenedorCarrito = document.getElementById("carrito-contenedor")
const precioTotal = document.getElementById("precioTotal")

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


    const agregarAlCarrito = (productoId) => {
        const existe = carrito.some(producto => producto.id === productoId)
            if(existe){
                const producto = carrito.map(producto => {
                    if(producto.id === productoId){
                        producto.cantidad++;
                        // producto.precio = carrito.reduce((acc, prod) => acc + prod.precio, 0);
                    }
                })
            } else {
        const item  = productos.find( producto => producto.id === productoId )
        carrito.push(item)
        console.log(carrito);
        item.cantidad = 1;}
        actualizarCarrito();
    }

    const actualizarCarrito = () => {
        contenedorCarrito.innerHTML = "";
        carrito.forEach((producto) => {
        let div = document.createElement("div");
        div.classList.add("productoEnCarrito");
            let totalProducto = producto.precio*producto.cantidad;
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${totalProducto}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    console.log(contadorCarrito)
    if(carrito.length == 0) {
        contadorCarrito.innerText = 0;
        precioTotal.innerText = 0;
        localStorage.clear();
    }    
}

const eliminarDelCarrito = (productoId) => {
    const item = carrito.find( (producto) => producto.id == productoId );
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito()
}