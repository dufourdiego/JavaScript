const carritoDeCompras = []

const contadorCarrito = document.getElementById("contador-carrito");



const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
        contenedorCarrito.appendChild(div);
        contadorCarrito.innerText = carritoDeCompras.length;
    }

    renderProductosCarrito()
}

const eliminarDelCarrito = (productoId) => {
    const item = carritoDeCompras.find( (producto) => producto.id == productoId );
    const indice = carritoDeCompras.indexOf(item);
    carritoDeCompras.splice(indice, 1);
    renderProductosCarrito()
}